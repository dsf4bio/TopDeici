// Client per Amazon Creators API, il successore di PA-API 5 (ritirata nel 2026).
//
// Cosa è verificato dalla documentazione pubblica Amazon:
//   - autenticazione OAuth 2.0 client_credentials, scope "creatorsapi::default", token valido 3600 s;
//   - host https://creatorsapi.amazon, percorso base /catalog/v1/;
//   - intestazioni Authorization: Bearer, Content-Type: application/json, x-marketplace;
//   - corpo con itemIds, resources, partnerTag, marketplace; risorse come "itemInfo.title";
//   - SearchItems: https://creatorsapi.amazon/catalog/v1/searchItems, parametri keywords, searchIndex,
//     sortBy (AvgCustomerReviews…), minPrice in centesimi, minReviewsRating (intero < 5), itemCount ≤ 10,
//     risposta in searchResult.items, prezzo in offersV2.listings.price.money.amount.
//
// Cosa devi confermare nella API Reference del tuo account prima del primo uso:
//   - l'URL del token per la tua regione (in Associates Central, sezione Creators API) → AMAZON_CREATORS_TOKEN_URL;
//   - il percorso di GetItems (qui "/catalog/v1/getItems");
//   - la forma della risposta: la funzione mapItem() qui sotto legge i campi in modo difensivo
//     e lascia vuoto tutto ciò che non trova, senza mai inventare valori.
//
// Le valutazioni e il numero di recensioni non sono disponibili via API. Al loro posto usiamo
// i filtri di SearchItems (prezzo minimo, stelle minime), l'ordinamento per recensioni e la
// classifica vendite. La redazione può aggiungere stelle e recensioni con l'import CSV.

import { affiliateTag } from "../affiliate";

const API_BASE = process.env.AMAZON_CREATORS_API_BASE || "https://creatorsapi.amazon/catalog/v1";
const GET_ITEMS_PATH = process.env.AMAZON_CREATORS_GET_ITEMS_PATH || "/getItems";

const SEARCH_ITEMS_PATH = process.env.AMAZON_CREATORS_SEARCH_ITEMS_PATH || "/searchItems";

export const RESOURCES = [
  "itemInfo.title",
  "itemInfo.byLineInfo",
  "itemInfo.features",
  "images.primary.large",
  "offersV2.listings.price",
  "offersV2.listings.availability",
  "browseNodeInfo.websiteSalesRank",
];

export type ApiItem = {
  asin: string;
  title?: string;
  brand?: string;
  model?: string;
  image?: string;
  price?: number;
  available?: boolean;
  features?: string[];
  salesRank?: number;
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
    brand: str(pick(raw, "itemInfo.byLineInfo.brand.displayValue")) ?? str(pick(raw, "itemInfo.byLineInfo.manufacturer.displayValue")),
    model: str(pick(raw, "itemInfo.manufactureInfo.model.displayValue")),
    image: str(pick(raw, "images.primary.large.url")),
    price: numOrUndef(pick(raw, "offersV2.listings.price.money.amount")) ?? numOrUndef(pick(raw, "offersV2.listings.price.amount")),
    features: (() => {
      const v = pick(raw, "itemInfo.features.displayValues");
      const list = (Array.isArray(v) ? v : []).map(str).filter((x): x is string => Boolean(x));
      return list.length ? list.slice(0, 5) : undefined;
    })(),
    salesRank: numOrUndef(pick(raw, "browseNodeInfo.websiteSalesRank.salesRank")),
    available: (() => {
      const type = str(pick(raw, "offersV2.listings.availability.type"));
      return type ? /^(in_?stock|now|available)/i.test(type) : undefined;
    })(),
  };
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Una chiamata all'API, con attesa e nuovo tentativo se Amazon segnala troppe richieste. */
async function call(path: string, body: Record<string, unknown>): Promise<Record<string, unknown>> {
  const marketplace = process.env.AMAZON_CREATORS_MARKETPLACE || "www.amazon.it";
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(API_BASE + path, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${await accessToken()}`,
        "Content-Type": "application/json",
        "x-marketplace": marketplace,
      },
      body: JSON.stringify({ partnerTag: affiliateTag(), marketplace, ...body }),
    });
    if (res.status === 429 && attempt < 3) {
      await sleep(2000 * (attempt + 1));
      continue;
    }
    if (!res.ok) throw new Error(`${path}: HTTP ${res.status} ${await res.text()}`);
    await sleep(1100); // circa 1 richiesta al secondo
    return (await res.json()) as Record<string, unknown>;
  }
}

function itemsOf(json: Record<string, unknown>): ApiItem[] {
  const raw = pick(json, "searchResult.items") ?? pick(json, "itemsResult.items") ?? pick(json, "items");
  return (Array.isArray(raw) ? raw : []).map(mapItem).filter((i): i is ApiItem => Boolean(i));
}

/** Recupera fino a 10 ASIN per chiamata. */
export async function getItems(asins: string[]): Promise<ApiItem[]> {
  const out: ApiItem[] = [];
  for (let i = 0; i < asins.length; i += 10) {
    out.push(...itemsOf(await call(GET_ITEMS_PATH, { itemIds: asins.slice(i, i + 10), resources: RESOURCES })));
  }
  return out;
}

/**
 * Cerca prodotti per parole chiave. Prezzo minimo e stelle minime sono filtri di Amazon stessa.
 * minReviewsRating accetta solo interi sotto 5: 4 è il filtro più severo disponibile.
 */
export async function searchItems(opts: {
  keywords: string;
  searchIndex?: string;
  sortBy?: "AvgCustomerReviews" | "Featured" | "Relevance";
  minPriceEuro: number;
  minReviewsRating: number;
  page?: number;
}): Promise<ApiItem[]> {
  return itemsOf(
    await call(SEARCH_ITEMS_PATH, {
      keywords: opts.keywords,
      searchIndex: opts.searchIndex ?? "All",
      sortBy: opts.sortBy ?? "AvgCustomerReviews",
      minPrice: Math.round(opts.minPriceEuro * 100),
      minReviewsRating: opts.minReviewsRating,
      itemCount: 10,
      itemPage: opts.page ?? 1,
      availability: "Available",
      condition: "New",
      resources: RESOURCES,
    }),
  );
}
