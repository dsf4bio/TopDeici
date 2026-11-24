import { RANKING } from "./config";
import type { Category, ExclusionReason, Product, RankedProduct, RankingResult } from "./types";

// Sistema di classificazione. È una funzione pura: stessi dati in ingresso, stessa classifica.
//
// Ogni prodotto può avere due tipi di dati sulle opinioni degli acquirenti:
//  A) "rating": media stelle e numero di recensioni rilevati dalla redazione (i più precisi);
//  B) "amazon": i segnali che arrivano dalle API Amazon, che non espongono il numero di recensioni:
//     filtro minimo di stelle, posizione nella ricerca ordinata per recensioni e classifica vendite.
// Se ci sono i dati A si usano quelli, altrimenti B.
//
// 1. Requisiti minimi: prodotto attivo, prezzo >= 25 €, dati recenti e
//    A) valutazione > 4,5 con recensioni sufficienti per la categoria, oppure
//    B) almeno 4 stelle garantite dal filtro Amazon, oppure
//    C) prodotto scelto dalla redazione con una posizione (editorialRank), quando non ci sono API né stelle.
// 2. Punteggio: opinioni degli acquirenti + popolarità + giudizio della redazione.
// 3. Si prendono al massimo 10 prodotti. Se ne restano meno, la classifica è più corta.

const DAY_MS = 86_400_000;
const AMAZON_MIN_STARS = 4;

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
  const maxAge = RANKING.maxDataAgeDays;

  // Requisiti che non dipendono dagli altri prodotti.
  const withRating: Product[] = [];
  const withSignals: Product[] = [];
  const curated: Product[] = [];
  for (const p of products) {
    const editorialOnly = !p.rating && !p.amazon && p.editorialRank !== undefined;
    if (p.active === false) exclude(p, "inattivo");
    else if (!p.price && !editorialOnly) exclude(p, "prezzo-mancante");
    else if (p.price && p.price.value < RANKING.minPrice) exclude(p, "prezzo-basso");
    else if (p.price && !editorialOnly && isStale(p.price.checkedAt, now, maxAge)) exclude(p, "dati-scaduti");
    else if (editorialOnly) curated.push(p);
    else if (p.rating) {
      if (!(p.rating.average > RANKING.minRating)) exclude(p, "valutazione-bassa");
      else if (isStale(p.rating.checkedAt, now, maxAge)) exclude(p, "dati-scaduti");
      else withRating.push(p);
    } else if (p.amazon) {
      if (p.amazon.minStars < AMAZON_MIN_STARS) exclude(p, "valutazione-bassa");
      else if (isStale(p.amazon.checkedAt, now, maxAge)) exclude(p, "dati-scaduti");
      else withSignals.push(p);
    } else exclude(p, "valutazione-mancante");
  }

  // Soglia di recensioni relativa alla categoria (solo per i prodotti con dati della redazione).
  const minReviews =
    category.minReviews ??
    Math.max(RANKING.minReviewsFloor, Math.round(median(withRating.map((p) => p.rating!.count)) * RANKING.minReviewsShareOfMedian));
  const rated = withRating.filter((p) => {
    if (p.rating!.count >= minReviews) return true;
    exclude(p, "poche-recensioni");
    return false;
  });

  const thresholds = { minPrice: RANKING.minPrice, minRating: RANKING.minRating, minReviews, maxAgeDays: maxAge };
  const eligible = [...rated, ...withSignals, ...curated];
  if (eligible.length === 0) return { ranked: [], excluded, thresholds };

  // Riferimenti per normalizzare le componenti all'interno della categoria.
  const prior = rated.length ? rated.reduce((s, p) => s + p.rating!.average, 0) / rated.length : 4.6;
  const m = Math.max(1, median(rated.map((p) => p.rating!.count)));
  const maxCount = Math.max(1, ...rated.map((p) => p.rating!.count));
  const maxReviewRank = Math.max(1, ...withSignals.map((p) => p.amazon!.reviewSortRank));
  const salesRanks = eligible.map((p) => p.amazon?.salesRank).filter((r): r is number => typeof r === "number" && r > 0);
  const worstSales = Math.max(10, ...salesRanks);
  const { weights } = RANKING;

  const scored = eligible.map((p) => {
    let ratingPart: number;
    let volumePart: number;
    let adjustedRating: number | undefined;
    if (!p.rating && !p.amazon) {
      // Scelta della redazione senza dati numerici: conta la posizione indicata (1 = migliore).
      ratingPart = volumePart = 1 - 0.5 * ((Math.min(p.editorialRank ?? 10, 10) - 1) / 9);
    } else if (p.rating) {
      const { average: r, count: n } = p.rating;
      adjustedRating = (n * r + m * prior) / (n + m);
      // 4,5 stelle = 0, 5 stelle = 1.
      ratingPart = clamp01((adjustedRating - RANKING.minRating) / (5 - RANKING.minRating));
      volumePart = maxCount > 1 ? clamp01(Math.log10(n) / Math.log10(maxCount)) : 1;
    } else {
      const a = p.amazon!;
      // Primo nella ricerca ordinata per recensioni = 1, ultimo = 0,5: sono tutti sopra le 4 stelle.
      ratingPart = maxReviewRank > 1 ? 1 - 0.5 * ((a.reviewSortRank - 1) / (maxReviewRank - 1)) : 1;
      // Classifica vendite in scala logaritmica: n. 1 = 1, il meno venduto della categoria ≈ 0.
      volumePart = a.salesRank ? clamp01(1 - Math.log10(a.salesRank) / Math.log10(worstSales * 10)) : 0.4;
    }
    const editorialPart = clamp01(p.editorialScore ?? 0.5);
    const score = weights.rating * ratingPart + weights.volume * volumePart + weights.editorial * editorialPart;
    return { product: p, score, breakdown: { adjustedRating, ratingPart, volumePart, editorialPart } };
  });

  scored.sort(
    (a, b) =>
      b.score - a.score ||
      (b.product.rating?.count ?? 0) - (a.product.rating?.count ?? 0) ||
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
  "valutazione-mancante": "Nessun dato sulle valutazioni",
  "valutazione-bassa": "Valutazione troppo bassa",
  "poche-recensioni": "Recensioni insufficienti per la categoria",
  "dati-scaduti": "Dati da riverificare",
  "fuori-classifica": "Idoneo ma oltre la decima posizione",
};
