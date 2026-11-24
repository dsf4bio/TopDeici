// Riempie (e rinnova) le classifiche di tutte le categorie con prodotti reali presi da Amazon.it
// tramite Creators API. Nessun dato viene inventato: tutto ciò che si salva arriva dalla risposta di Amazon.
//
//   npm run dati:popola                     tutte le 100 categorie (circa 7 minuti)
//   npm run dati:popola -- friggitrici-ad-aria monitor   solo alcune categorie
//
// Per ogni categoria:
//  1. cerca su Amazon.it con i filtri di Amazon stessa: prezzo da 25 €, almeno 4 stelle, disponibile, nuovo;
//  2. prende i primi 20 risultati ordinati per media delle recensioni e i primi 10 per rilevanza
//     (i più venduti e cercati), così un prodotto con 3 recensioni a 5 stelle non basta per vincere;
//  3. salva i candidati in data/prodotti/<categoria>.json; la classifica (src/lib/ranking.ts) sceglie i 10 migliori.
// I contenuti della redazione già presenti (stelle e recensioni inserite a mano, testi, esclusioni) vengono conservati.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { searchItems, type ApiItem } from "../src/lib/amazon/creators-api";
import { DATA_DIR, getCategories, getMacro } from "../src/lib/catalog";
import { RANKING } from "../src/lib/config";
import { rankCategory } from "../src/lib/ranking";
import type { Category, Product } from "../src/lib/types";

const MAX_STORED = 25;
const MIN_STARS = 4; // il filtro più severo che Amazon consente (minReviewsRating deve essere < 5)

const only = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const categories = getCategories().filter((c) => only.length === 0 || only.includes(c.slug));

async function search(c: Category, sortBy: "AvgCustomerReviews" | "Relevance", pages: number): Promise<ApiItem[]> {
  const keywords = c.query ?? c.name.toLowerCase();
  const indexes = [c.searchIndex ?? getMacro(c.macro)?.searchIndex ?? "All", "All"];
  for (const searchIndex of [...new Set(indexes)]) {
    try {
      const items: ApiItem[] = [];
      for (let page = 1; page <= pages; page++) {
        const batch = await searchItems({ keywords, searchIndex, sortBy, minPriceEuro: RANKING.minPrice, minReviewsRating: MIN_STARS, page });
        items.push(...batch);
        if (batch.length < 10) break;
      }
      if (items.length >= 5 || searchIndex === "All") return items;
    } catch (e) {
      console.warn(`  ${c.slug}: ricerca nel reparto ${searchIndex} non riuscita (${(e as Error).message.slice(0, 160)})`);
    }
  }
  return [];
}

const usable = (i: ApiItem) =>
  Boolean(i.title && i.image && i.price !== undefined && i.price >= RANKING.minPrice && i.available !== false);

async function populate(c: Category) {
  const byReviews = (await search(c, "AvgCustomerReviews", 2)).filter(usable);
  const byRelevance = (await search(c, "Relevance", 1)).filter(usable);

  const now = new Date().toISOString();
  const candidates = new Map<string, { item: ApiItem; reviewSortRank: number }>();
  byReviews.forEach((item, i) => candidates.set(item.asin, { item, reviewSortRank: i + 1 }));
  // I prodotti trovati solo per rilevanza entrano dopo quelli ordinati per recensioni.
  byRelevance.forEach((item, i) => {
    if (!candidates.has(item.asin)) candidates.set(item.asin, { item, reviewSortRank: byReviews.length + i + 1 });
  });

  const file = path.join(DATA_DIR, `${c.slug}.json`);
  const previous = existsSync(file) ? (JSON.parse(readFileSync(file, "utf8")) as Product[]) : [];
  const old = new Map(previous.map((p) => [p.asin, p]));

  const fresh: Product[] = [...candidates.values()].map(({ item, reviewSortRank }) => {
    const before = old.get(item.asin);
    return {
      ...before,
      asin: item.asin,
      category: c.slug,
      title: before?.title && before.review ? before.title : item.title!, // titolo riscritto dalla redazione: si tiene
      brand: item.brand ?? before?.brand ?? "",
      model: item.model ?? before?.model,
      image: item.image,
      price: { value: item.price!, currency: "EUR", checkedAt: now, source: "api" },
      amazon: { minStars: MIN_STARS, reviewSortRank, salesRank: item.salesRank, checkedAt: now },
      features: item.features ?? before?.features,
    };
  });
  // Restano anche i prodotti curati dalla redazione che questa ricerca non ha restituito.
  const kept = previous.filter((p) => !candidates.has(p.asin) && (p.review || p.rating || p.active === false));
  const all = [...fresh, ...kept].filter((p) => p.brand);

  // Si salvano i migliori 25: i 10 in classifica più le riserve pronte a subentrare.
  const ranked = rankCategory(all, c).ranked.map((p) => p.asin);
  const keep = new Set([...ranked, ...kept.map((p) => p.asin)]);
  const stored = [
    ...ranked.map((asin) => all.find((p) => p.asin === asin)!),
    ...all.filter((p) => !keep.has(p.asin)).slice(0, Math.max(0, MAX_STORED - ranked.length)),
    ...kept.filter((p) => !ranked.includes(p.asin)),
  ];

  mkdirSync(DATA_DIR, { recursive: true });
  writeFileSync(file, JSON.stringify(stored, null, 2) + "\n");
  return ranked.length;
}

async function main() {
  let full = 0;
  const empty: string[] = [];
  for (const [i, c] of categories.entries()) {
    try {
      const n = await populate(c);
      if (n === RANKING.size) full++;
      if (n === 0) empty.push(c.slug);
      console.log(`[${i + 1}/${categories.length}] ${c.slug}: ${n} in classifica`);
    } catch (e) {
      empty.push(c.slug);
      console.error(`[${i + 1}/${categories.length}] ${c.slug}: ERRORE ${(e as Error).message}`);
      if (/HTTP 40[13]/.test((e as Error).message)) {
        console.error("Credenziali rifiutate da Amazon: controlla i secret e l'accesso alla Creators API.");
        process.exit(1);
      }
    }
  }
  console.log(`\n${full} categorie con 10 prodotti su ${categories.length}.`);
  if (empty.length) console.log(`Senza prodotti: ${empty.join(", ")}`);
}

main().catch((e) => {
  console.error((e as Error).message);
  process.exit(1);
});
