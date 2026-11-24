import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { CATEGORIES } from "@/content/categorie";
import { MACRO_CATEGORIES } from "@/content/macro";
import { GUIDES } from "@/content/guide";
import { FEATURED } from "@/content/evidenza";
import { RANKING } from "./config";
import { rankCategory } from "./ranking";
import { dealOf, type Deal } from "./insights";
import type { Category, Product, RankedProduct, RankingResult } from "./types";
import { validateProduct } from "./validate";

// Accesso a categorie, prodotti e classifiche. Usato solo lato server (pagine e script).

export const DATA_DIR = path.join(process.cwd(), "data", "prodotti");

const bySlug = new Map(CATEGORIES.map((c) => [c.slug, c]));

export const getMacros = () => MACRO_CATEGORIES;
export const getMacro = (slug: string) => MACRO_CATEGORIES.find((m) => m.slug === slug);
export const getCategories = () => CATEGORIES;
export const getCategory = (slug: string) => bySlug.get(slug);
export const getCategoriesOf = (macro: string) => CATEGORIES.filter((c) => c.macro === macro);
export const getGuide = (slug: string) => GUIDES[slug];

export const categoryPath = (c: Pick<Category, "macro" | "slug">) => `/${c.macro}/${c.slug}`;

/** Legge data/prodotti/<slug>.json. Se il file non esiste la categoria non ha ancora prodotti. */
export function getProducts(slug: string): Product[] {
  const file = path.join(DATA_DIR, `${slug}.json`);
  if (!existsSync(file)) return [];
  const data: unknown = JSON.parse(readFileSync(file, "utf8"));
  if (!Array.isArray(data)) throw new Error(`${file}: deve contenere un array di prodotti`);
  const errors = data.flatMap((p, i) => validateProduct(p, `${slug}.json[${i}]`));
  if (errors.length) throw new Error("Dati prodotto non validi:\n" + errors.join("\n"));
  return data as Product[];
}

const cache = new Map<string, RankingResult>();

export function getRanking(slug: string): RankingResult {
  const category = getCategory(slug);
  if (!category) throw new Error(`Categoria sconosciuta: ${slug}`);
  let result = cache.get(slug);
  if (!result) {
    result = rankCategory(getProducts(slug), category);
    cache.set(slug, result);
  }
  return result;
}

/** Una pagina va indicizzata solo quando ha una classifica abbastanza ricca. */
export const isIndexable = (slug: string) => getRanking(slug).ranked.length >= RANKING.minProductsToIndex;

/** Data dell'ultima verifica dei dati di una categoria (la più recente tra i prodotti in classifica). */
export function lastUpdated(slug: string): string | undefined {
  const dates = getRanking(slug).ranked.map((p) => p.rating?.checkedAt).filter((d): d is string => Boolean(d));
  return dates.sort().at(-1);
}

/** Categorie con una classifica pubblicata, dalla più aggiornata. */
export function getUpdatedCategories(limit = 6): { category: Category; updated: string; count: number }[] {
  return CATEGORIES.flatMap((category) => {
    const updated = lastUpdated(category.slug);
    return updated ? [{ category, updated, count: getRanking(category.slug).ranked.length }] : [];
  })
    .sort((a, b) => b.updated.localeCompare(a.updated))
    .slice(0, limit);
}

/** Immagine di copertina di una categoria (public/copertine/<slug>.svg), se esiste. */
export function coverOf(slug: string): string | undefined {
  return existsSync(path.join(process.cwd(), "public", "copertine", `${slug}.svg`)) ? `/copertine/${slug}.svg` : undefined;
}

/** Categorie in evidenza, scelte dalla redazione in src/content/evidenza.ts. */
export const getFeaturedCategories = () => FEATURED.map((s) => bySlug.get(s)).filter((c): c is Category => Boolean(c));

/** Indice leggero per la ricerca nel browser. */
export function getSearchIndex() {
  return CATEGORIES.map((c) => ({
    slug: c.slug,
    name: c.name,
    macro: getMacro(c.macro)?.name ?? c.macro,
    summary: c.summary,
    href: categoryPath(c),
    products: getRanking(c.slug).ranked.map((p) => `${p.brand} ${p.title}`),
    ready: getRanking(c.slug).ranked.length > 0,
  }));
}
export type SearchEntry = ReturnType<typeof getSearchIndex>[number];

/** Offerte vere tra i prodotti in classifica (prezzo API aggiornato e sconto reale), dalla più conveniente. */
export function getDeals(now = new Date()) {
  const out: { category: Category; product: RankedProduct; deal: Deal }[] = [];
  for (const category of CATEGORIES) {
    for (const product of getRanking(category.slug).ranked) {
      const deal = dealOf(product, now);
      if (deal) out.push({ category, product, deal });
    }
  }
  return out.sort((a, b) => b.deal.percent - a.deal.percent);
}
