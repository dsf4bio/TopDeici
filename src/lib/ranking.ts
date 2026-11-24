import { RANKING } from "./config";
import type { Category, ExclusionReason, Product, RankedProduct, RankingResult } from "./types";

// Sistema di classificazione. È una funzione pura: stessi dati in ingresso, stessa classifica.
//
// 1. Requisiti minimi: prodotto attivo, prezzo >= 25 €, valutazione > 4,5, dati verificati di recente
//    e un numero di recensioni adeguato rispetto agli altri candidati della categoria.
// 2. Media bayesiana: la valutazione di chi ha poche recensioni viene avvicinata alla media della
//    categoria, così 4,9 stelle su 80 recensioni non battono automaticamente 4,7 su 20.000.
// 3. Punteggio: valutazione corretta + volume di recensioni (scala logaritmica) + giudizio editoriale.
// 4. Si prendono al massimo 10 prodotti. Se ne restano meno, la classifica è più corta.

const DAY_MS = 86_400_000;

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

function median(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid]! : (sorted[mid - 1]! + sorted[mid]!) / 2;
}

function isStale(iso: string | undefined, now: Date, maxAgeDays: number): boolean {
  if (!iso) return true;
  const time = Date.parse(iso);
  if (Number.isNaN(time)) return true;
  return now.getTime() - time > maxAgeDays * DAY_MS;
}

export function rankCategory(products: Product[], category: Pick<Category, "minReviews">, now = new Date()): RankingResult {
  const excluded: RankingResult["excluded"] = [];
  const exclude = (product: Product, reason: ExclusionReason) => excluded.push({ product, reason });

  // Requisiti che non dipendono dagli altri prodotti.
  const candidates: Product[] = [];
  for (const p of products) {
    if (p.active === false) exclude(p, "inattivo");
    else if (!p.price) exclude(p, "prezzo-mancante");
    else if (p.price.value < RANKING.minPrice) exclude(p, "prezzo-basso");
    else if (!p.rating) exclude(p, "valutazione-mancante");
    else if (!(p.rating.average > RANKING.minRating)) exclude(p, "valutazione-bassa");
    else if (isStale(p.rating.checkedAt, now, RANKING.maxDataAgeDays) || isStale(p.price.checkedAt, now, RANKING.maxDataAgeDays))
      exclude(p, "dati-scaduti");
    else candidates.push(p);
  }

  // Soglia di recensioni relativa alla categoria.
  const minReviews =
    category.minReviews ??
    Math.max(RANKING.minReviewsFloor, Math.round(median(candidates.map((p) => p.rating!.count)) * RANKING.minReviewsShareOfMedian));

  const eligible = candidates.filter((p) => {
    if (p.rating!.count >= minReviews) return true;
    exclude(p, "poche-recensioni");
    return false;
  });

  const thresholds = {
    minPrice: RANKING.minPrice,
    minRating: RANKING.minRating,
    minReviews,
    maxAgeDays: RANKING.maxDataAgeDays,
  };

  if (eligible.length === 0) return { ranked: [], excluded, thresholds };

  const prior = eligible.reduce((sum, p) => sum + p.rating!.average, 0) / eligible.length;
  const m = Math.max(1, median(eligible.map((p) => p.rating!.count)));
  const maxCount = Math.max(...eligible.map((p) => p.rating!.count));
  const { weights } = RANKING;

  const scored = eligible.map((p) => {
    const { average: r, count: n } = p.rating!;
    const adjustedRating = (n * r + m * prior) / (n + m);
    // 4,5 stelle = 0, 5 stelle = 1.
    const ratingPart = clamp01((adjustedRating - RANKING.minRating) / (5 - RANKING.minRating));
    const volumePart = maxCount > 1 ? clamp01(Math.log10(n) / Math.log10(maxCount)) : 1;
    const editorialPart = clamp01(p.editorialScore ?? 0.5);
    const score = weights.rating * ratingPart + weights.volume * volumePart + weights.editorial * editorialPart;
    return { product: p, score, breakdown: { adjustedRating, ratingPart, volumePart, editorialPart } };
  });

  scored.sort(
    (a, b) =>
      b.score - a.score ||
      b.product.rating!.count - a.product.rating!.count ||
      a.product.asin.localeCompare(b.product.asin),
  );

  const ranked: RankedProduct[] = scored.slice(0, RANKING.size).map((s, i) => ({
    ...s.product,
    position: i + 1,
    score: Math.round(s.score * 1000) / 10,
    breakdown: s.breakdown,
  }));
  for (const s of scored.slice(RANKING.size)) exclude(s.product, "fuori-classifica");

  return { ranked, excluded, thresholds };
}

export const EXCLUSION_LABELS: Record<ExclusionReason, string> = {
  inattivo: "Escluso dalla redazione",
  "prezzo-mancante": "Prezzo non disponibile",
  "prezzo-basso": `Prezzo inferiore a ${RANKING.minPrice} €`,
  "valutazione-mancante": "Valutazione non disponibile",
  "valutazione-bassa": `Valutazione non superiore a ${String(RANKING.minRating).replace(".", ",")}`,
  "poche-recensioni": "Recensioni insufficienti per la categoria",
  "dati-scaduti": "Dati da riverificare",
  "fuori-classifica": "Idoneo ma oltre la decima posizione",
};
