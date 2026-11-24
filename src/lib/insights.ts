import { displayablePrice, formatEuro } from "./format";
import type { Product, RankedProduct } from "./types";

// Informazioni in più che diamo all'acquirente rispetto alla sola pagina Amazon.
// Tutte calcolate da dati rilevati, mai inventate: se il dato manca, l'informazione non compare.

const DAY_MS = 86_400_000;

/* ---------- 8. "Il migliore per…" ---------- */

export type Badge = { id: string; label: string; hint: string };

const BADGES = {
  value: { id: "value", label: "Miglior rapporto qualità/prezzo", hint: "Il punteggio più alto in rapporto al prezzo, tra i 10 della classifica." },
  cheap: { id: "cheap", label: "Il più economico", hint: "Il prezzo più basso tra i 10 della classifica." },
  popular: { id: "popular", label: "Il più scelto", hint: "Il prodotto con più recensioni su Amazon tra i 10." },
  loved: { id: "loved", label: "Il più apprezzato", hint: "La valutazione media più alta tra i 10, a parità di affidabilità." },
} satisfies Record<string, Badge>;

/**
 * Un'etichetta per prodotto al massimo, ognuna assegnata a un solo prodotto.
 * Il primo in classifica ha già "Il migliore" e non ne riceve altre.
 */
export function assignBadges(ranked: RankedProduct[]): Map<string, Badge> {
  const out = new Map<string, Badge>();
  if (ranked.length < 4) return out;
  const free = () => ranked.filter((p) => p.position !== 1 && !out.has(p.asin));
  const best = <T,>(list: RankedProduct[], key: (p: RankedProduct) => T | undefined, better: (a: T, b: T) => boolean) => {
    let top: RankedProduct | undefined;
    let topVal: T | undefined;
    for (const p of list) {
      const v = key(p);
      if (v === undefined) continue;
      if (topVal === undefined || better(v, topVal)) { top = p; topVal = v; }
    }
    return top;
  };

  const prices = ranked.map((p) => p.price?.value).filter((v): v is number => typeof v === "number");
  const medianPrice = prices.length ? [...prices].sort((a, b) => a - b)[Math.floor(prices.length / 2)]! : undefined;

  // Ogni etichetta va al vincitore assoluto tra i 10: se è il primo in classifica o ha già
  // un'etichetta, non la diamo a nessun altro (sarebbe falsa).
  const give = (winner: RankedProduct | undefined, badge: Badge) => {
    if (winner && winner.position !== 1 && !out.has(winner.asin)) out.set(winner.asin, badge);
  };
  give(best(ranked, (p) => p.rating?.count, (a, b) => a > b), BADGES.popular);
  give(best(ranked, (p) => p.breakdown.adjustedRating, (a, b) => a > b), BADGES.loved);
  give(best(ranked, (p) => p.price?.value, (a, b) => a < b), BADGES.cheap);
  // Per ultimo, il rapporto qualità/prezzo: punteggio diviso per la radice del prezzo relativo,
  // così non vince sempre il più economico. Deve costare meno della mediana.
  if (medianPrice) {
    const v = best(
      free().filter((p) => p.price && p.price.value < medianPrice),
      (p) => p.score / Math.sqrt(p.price!.value / medianPrice),
      (a, b) => a > b,
    );
    if (v) out.set(v.asin, BADGES.value);
  }
  return out;
}

/* ---------- 12. Storico prezzi ---------- */

export type PriceNote = { tone: "good" | "neutral"; text: string };

/** Serve almeno una settimana di rilevamenti per dire qualcosa di utile. */
const MIN_POINTS = 7;

function recentHistory(p: Product, now: Date, days: number) {
  const from = now.getTime() - days * DAY_MS;
  return (p.priceHistory ?? []).filter((h) => Date.parse(h.at) >= from && h.value > 0);
}

export function priceNote(p: Product, now = new Date()): PriceNote | undefined {
  if (!displayablePrice(p, now)) return undefined; // regole Amazon: niente prezzi non aggiornati
  const h = recentHistory(p, now, 90);
  if (h.length < MIN_POINTS) return undefined;
  const current = p.price!.value;
  const min = Math.min(...h.map((x) => x.value));
  const avg = h.reduce((s, x) => s + x.value, 0) / h.length;
  const span = Math.max(1, Math.round((now.getTime() - Date.parse(h[0]!.at)) / DAY_MS));
  if (current <= min) return { tone: "good", text: `Prezzo più basso degli ultimi ${span} giorni` };
  const below = Math.round((1 - current / avg) * 100);
  if (below >= 5) return { tone: "good", text: `${below}% sotto la media degli ultimi ${span} giorni` };
  if (below <= -5) return { tone: "neutral", text: `Sopra la media recente: di solito costa circa ${formatEuro(Math.round(avg))}` };
  return { tone: "neutral", text: `In linea con la media degli ultimi ${span} giorni` };
}

/* ---------- 13. Offerte ---------- */

export type Deal = { percent: number; reason: "barrato" | "storico" };

/**
 * Un'offerta vale solo con prezzo aggiornato dalle API e uno sconto reale di almeno il 10%:
 * rispetto al prezzo barrato di Amazon o alla media dei nostri rilevamenti degli ultimi 30 giorni.
 */
export function dealOf(p: Product, now = new Date()): Deal | undefined {
  if (!displayablePrice(p, now)) return undefined;
  const current = p.price!.value;
  const candidates: Deal[] = [];
  if (p.listPrice && p.listPrice.value > current && now.getTime() - Date.parse(p.listPrice.checkedAt) <= DAY_MS)
    candidates.push({ percent: Math.round((1 - current / p.listPrice.value) * 100), reason: "barrato" });
  const h = recentHistory(p, now, 30);
  if (h.length >= MIN_POINTS) {
    const avg = h.reduce((s, x) => s + x.value, 0) / h.length;
    candidates.push({ percent: Math.round((1 - current / avg) * 100), reason: "storico" });
  }
  const top = candidates.sort((a, b) => b.percent - a.percent)[0];
  return top && top.percent >= 10 ? top : undefined;
}

/* ---------- 9 e 10. Cosa dicono le recensioni ---------- */

export type Opinions = { positive: string[]; mixed: string[]; negative: string[] };

/** Gli aspetti valgono 180 giorni: le opinioni cambiano lentamente, ma non restano per sempre. */
export function opinionsOf(p: Product, now = new Date()): Opinions | undefined {
  const o = p.opinions;
  if (!o || now.getTime() - Date.parse(o.checkedAt) > 180 * DAY_MS) return undefined;
  const clean = (l: string[]) => l.map((s) => s.trim()).filter(Boolean).slice(0, 4);
  const res = { positive: clean(o.positive), mixed: clean(o.mixed).slice(0, 3), negative: clean(o.negative).slice(0, 3) };
  return res.positive.length + res.mixed.length + res.negative.length > 0 ? res : undefined;
}
