import { amazonUrl } from "./affiliate";
import { displayablePrice, formatDate, formatInt, formatRating, formatSpec } from "./format";
import type { Category, RankedProduct } from "./types";

/** Dati già pronti per l'interfaccia: serializzabili, così passano anche ai componenti client. */
export type CardModel = {
  asin: string;
  position: number;
  score: number;
  title: string;
  brand: string;
  model?: string;
  image?: string;
  href: string;
  rating?: { average: number; text: string; count: number; countText: string; checked: string };
  price?: { value: number; text: string; at: string };
  specs: { key: string; label: string; value: string }[];
  features: string[];
  strengths: string[];
  weaknesses: string[];
  breakdown: { adjusted: string; rating: number; volume: number; editorial: number };
};

export function toCardModel(p: RankedProduct, category: Category, now = new Date()): CardModel {
  const price = displayablePrice(p, now);
  return {
    asin: p.asin,
    position: p.position,
    score: p.score,
    title: p.title,
    brand: p.brand,
    model: p.model,
    image: p.image,
    href: amazonUrl(p.asin, category.macro),
    rating: p.rating && {
      average: p.rating.average,
      text: formatRating(p.rating.average),
      count: p.rating.count,
      countText: formatInt(p.rating.count),
      checked: formatDate(p.rating.checkedAt),
    },
    price: price && { value: p.price!.value, ...price },
    specs: category.specs.map((s) => ({ key: s.key, label: s.label, value: formatSpec(p.specs?.[s.key], s.unit) })),
    features: (p.features ?? []).map((f) => (f.length > 180 ? f.slice(0, 177).trimEnd() + "…" : f)).slice(0, 3),
    strengths: (p.strengths ?? []).slice(0, 4),
    weaknesses: (p.weaknesses ?? []).slice(0, 3),
    breakdown: {
      adjusted: p.breakdown.adjustedRating !== undefined ? formatRating(p.breakdown.adjustedRating) : "—",
      rating: Math.round(p.breakdown.ratingPart * 100),
      volume: Math.round(p.breakdown.volumePart * 100),
      editorial: Math.round(p.breakdown.editorialPart * 100),
    },
  };
}
