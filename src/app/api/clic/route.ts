import { getCategory } from "@/lib/catalog";

// Registra i clic sui pulsanti "Vedi su Amazon" in forma anonima: prodotto, categoria, posizione e punto della pagina.
// Non legge cookie e non salva l'indirizzo IP. Gli eventi finiscono nei log di Vercel
// (filtrabili con "evento":"clic-amazon") e, se impostato, vengono inoltrati a CLICK_WEBHOOK_URL
// per analizzare categorie e posizioni più performanti.

export const runtime = "nodejs";

const PLACEMENTS = new Set(["scheda", "tabella", "analisi"]);

export async function POST(request: Request) {
  let body: unknown;
  try {
    const text = await request.text();
    if (text.length > 500) return new Response(null, { status: 413 });
    body = JSON.parse(text);
  } catch {
    return new Response(null, { status: 400 });
  }
  const { asin, category, position, placement } = (body ?? {}) as Record<string, unknown>;
  if (
    typeof asin !== "string" || !/^[A-Z0-9]{10}$/.test(asin) ||
    typeof category !== "string" || !getCategory(category) ||
    typeof position !== "number" || !Number.isInteger(position) || position < 1 || position > 10 ||
    typeof placement !== "string" || !PLACEMENTS.has(placement)
  ) {
    return new Response(null, { status: 400 });
  }

  const event = { evento: "clic-amazon", asin, categoria: category, posizione: position, punto: placement, quando: new Date().toISOString() };
  console.log(JSON.stringify(event));

  const webhook = process.env.CLICK_WEBHOOK_URL;
  if (webhook) {
    // Non attendiamo oltre 1,5 s: il tracciamento non deve rallentare nulla.
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
      signal: AbortSignal.timeout(1500),
    }).catch(() => undefined);
  }
  return new Response(null, { status: 204 });
}
