// Aggiorna titolo, immagine, prezzo e disponibilità dei prodotti tramite Amazon Creators API,
// poi segnala i prodotti che non rispettano più i criteri di classifica.
//
//   npm run dati:aggiorna            aggiorna tutte le categorie
//   npm run dati:aggiorna -- monitor solo una categoria
//
// Pensato per girare ogni giorno (vedi .github/workflows/aggiorna-dati.yml).
// I prezzi aggiornati qui hanno fonte "api": sono gli unici che il sito mostra, e solo entro 24 ore.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { getItems } from "../src/lib/amazon/creators-api";
import { DATA_DIR, getCategories } from "../src/lib/catalog";
import { EXCLUSION_LABELS, rankCategory } from "../src/lib/ranking";
import type { Product } from "../src/lib/types";

const only = process.argv[2];
const categories = getCategories().filter((c) => !only || c.slug === only);
const now = new Date().toISOString();
let touched = 0;

async function main() {
for (const category of categories) {
  const file = path.join(DATA_DIR, `${category.slug}.json`);
  if (!existsSync(file)) continue;
  const products = JSON.parse(readFileSync(file, "utf8")) as Product[];
  if (products.length === 0) continue;

  const before = rankCategory(products, category).ranked.map((p) => p.asin);
  const items = new Map((await getItems(products.map((p) => p.asin))).map((i) => [i.asin, i]));

  for (const p of products) {
    const item = items.get(p.asin);
    if (!item) {
      console.warn(`  ${category.slug}/${p.asin}: non restituito dalle API (controlla che sia ancora in vendita)`);
      continue;
    }
    if (item.title) p.title = p.title || item.title; // il titolo editoriale, se c'è, ha la precedenza
    if (item.brand) p.brand = p.brand || item.brand;
    if (item.image) p.image = item.image;
    if (item.price !== undefined && item.available !== false) {
      p.price = { value: item.price, currency: "EUR", checkedAt: now, source: "api" };
    } else if (item.available === false && p.price) {
      // Non disponibile: togliamo il prezzo, così il prodotto esce dalla classifica finché non torna.
      delete p.price;
      console.warn(`  ${category.slug}/${p.asin}: non disponibile, rimosso dalla classifica`);
    }
    touched++;
  }

  writeFileSync(file, JSON.stringify(products, null, 2) + "\n");

  const result = rankCategory(products, category);
  const dropped = before.filter((asin) => !result.ranked.some((p) => p.asin === asin));
  for (const asin of dropped) {
    const reason = result.excluded.find((e) => e.product.asin === asin)?.reason;
    console.warn(`  ${category.slug}/${asin}: uscito dalla classifica (${reason ? EXCLUSION_LABELS[reason] : "motivo sconosciuto"})`);
  }
  console.log(`${category.slug}: ${result.ranked.length} in classifica`);
}

console.log(`Aggiornati ${touched} prodotti.`);
}

main().catch((e) => {
  console.error((e as Error).message);
  process.exit(1);
});
