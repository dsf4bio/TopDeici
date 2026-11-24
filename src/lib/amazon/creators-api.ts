// Client per Amazon Creators API, il successore di PA-API 5 (ritirata nel 2026).
//
// Cosa è verificato dalla documentazione pubblica Amazon:
//   - autenticazione OAuth 2.0 client_credentials, scope "creatorsapi::default", token valido 3600 s;
//   - host https://creatorsapi.amazon, percorso base /catalog/v1/;
//   - intestazioni Authorization: Bearer, Content-Type: application/json, x-marketplace;
//   - corpo con itemIds, resources, partnerTag, marketplace; risorse come "itemInfo.title".
//
// Cosa devi confermare nella API Reference del tuo account prima del primo uso:
//   - l'URL del token per la tua regione (in Associates Central, sezione Creators API) → AMAZON_CREATORS_TOKEN_URL;
//   - il percorso di GetItems (qui "/catalog/v1/getItems") e i nomi esatti delle risorse OffersV2;
//   - la forma della risposta: la funzione mapItem() qui sotto legge i campi in modo difensivo
//     e lascia vuoto tutto ciò che non trova, senza mai inventare valori.
//
// Le valutazioni e il numero di recensioni non risultano disponibili via API:
// restano quelli inseriti dalla redazione con l'import CSV.

import { affiliateTag } from "../affiliate";

const API_BASE = process.env.AMAZON_CREATORS_API_BASE || "https://creatorsapi.amazon/catalog/v1";
const GET_ITEMS_PATH = process.env.AMAZON_CREATORS_GET_ITEMS_PATH || "/getItems";

export const RESOURCES = [
  "itemInfo.title",
  "itemInfo.byLineInfo",
  "images.primary.large",
  "offersV2.listings.price",
  "offersV2.listings.availability",
];

export type ApiItem = {
  asin: string;
  title?: string;
  brand?: string;
  image?: string;
  price?: number;
  available?: boolean;
};

let token: { value: string; expires: number } | undefined;

async function accessToken(): Promise<string> {
  if (token && token.expires > Date.now() + 60_000) return token.value;
  const url = process.env.AMAZON_CREATORS_TOKEN_URL;
  const id = process.env.AMAZON_CREATORS_CLIENT_ID;
  const secret = process.env.AMAZON_CREATORS_CLIENT_SECRET;
  if (!url || !id || !secret) throw new Error("Mancano AMAZON_CREATORS_TOKEN_URL, AMAZON_CREATORS_CLIENT_ID o AMAZON_CREATORS_CLIENT_SECRET");

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "client_credentials", client_id: id, client_secret: secret, scope: "creatorsapi::default" }),
  });
  if (!res.ok) throw new Error(`Token Creators API: HTTP ${res.status} ${await res.text()}`);
  const json = (await res.json()) as { access_token: string; expires_in?: number };
  token = { value: json.access_token, expires: Date.now() + (json.expires_in ?? 3600) * 1000 };
  return token.value;
}

// Legge un percorso "a.b.c" senza distinguere maiuscole iniziali (itemInfo / ItemInfo).
function pick(obj: unknown, dotted: string): unknown {
  return dotted.split(".").reduce<unknown>((cur, key) => {
    if (cur === null || typeof cur !== "object") return undefined;
    if (Array.isArray(cur)) cur = cur[0];
    const rec = cur as Record<string, unknown>;
    return rec[key] ?? rec[key[0]!.toUpperCase() + key.slice(1)];
  }, obj);
}
const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);
const numOrUndef = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : undefined);

export function mapItem(raw: unknown): ApiItem | undefined {
  const asin = str(pick(raw, "asin"));
  if (!asin) return undefined;
  return {
    asin,
    title: str(pick(raw, "itemInfo.title.displayValue")),
    brand: str(pick(raw, "itemInfo.byLineInfo.brand.displayValue")),
    image: str(pick(raw, "images.primary.large.url")),
    price: numOrUndef(pick(raw, "offersV2.listings.price.money.amount")) ?? numOrUndef(pick(raw, "offersV2.listings.price.amount")),
    available: (() => {
      const type = str(pick(raw, "offersV2.listings.availability.type"));
      return type ? /^(in_?stock|now|available)/i.test(type) : undefined;
    })(),
  };
}

/** Recupera fino a 10 ASIN per chiamata. */
export async function getItems(asins: string[]): Promise<ApiItem[]> {
  const marketplace = process.env.AMAZON_CREATORS_MARKETPLACE || "www.amazon.it";
  const partnerTag = affiliateTag();

  const out: ApiItem[] = [];
  let retries = 0;
  for (let i = 0; i < asins.length; i += 10) {
    const batch = asins.slice(i, i + 10);
    const res = await fetch(API_BASE + GET_ITEMS_PATH, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${await accessToken()}`,
        "Content-Type": "application/json",
        "x-marketplace": marketplace,
      },
      body: JSON.stringify({ itemIds: batch, resources: RESOURCES, partnerTag, marketplace }),
    });
    if (res.status === 429 && retries < 3) {
      // Limite di richieste: attende e riprova (al massimo 3 volte di fila).
      retries++;
      await new Promise((r) => setTimeout(r, 2000 * retries));
      i -= 10;
      continue;
    }
    retries = 0;
    if (!res.ok) throw new Error(`GetItems: HTTP ${res.status} ${await res.text()}`);
    const json = (await res.json()) as Record<string, unknown>;
    const items = (pick(json, "itemsResult.items") ?? pick(json, "items") ?? []) as unknown[];
    for (const raw of Array.isArray(items) ? items : []) {
      const item = mapItem(raw);
      if (item) out.push(item);
    }
    await new Promise((r) => setTimeout(r, 1100)); // circa 1 richiesta al secondo
  }
  return out;
}
