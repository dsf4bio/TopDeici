// Controlla tutti i file prodotto e stampa lo stato di ogni categoria:
// quanti prodotti sono in classifica, quanti esclusi e perché, quali pagine sono indicizzabili.
//
//   npm run dati:verifica
//
// Esce con errore se un file non è valido: usalo anche prima del deploy.

import { getCategories, getRanking } from "../src/lib/catalog";
import { RANKING } from "../src/lib/config";
import { EXCLUSION_LABELS } from "../src/lib/ranking";

let ready = 0;
let failed = false;
const rows: string[] = [];

for (const c of getCategories()) {
  try {
    const { ranked, excluded, thresholds } = getRanking(c.slug);
    if (ranked.length === 0 && excluded.length === 0) continue;
    if (ranked.length >= RANKING.minProductsToIndex) ready++;
    const reasons = Object.entries(
      excluded.reduce<Record<string, number>>((acc, e) => ((acc[e.reason] = (acc[e.reason] ?? 0) + 1), acc), {}),
    ).map(([r, n]) => `${n} × ${EXCLUSION_LABELS[r as keyof typeof EXCLUSION_LABELS]}`);
    const missingReview = ranked.filter((p) => !p.review?.why).length;
    rows.push(
      `${c.slug.padEnd(34)} ${String(ranked.length).padStart(2)} in classifica  (min. recensioni ${thresholds.minReviews})` +
        (reasons.length ? `\n${" ".repeat(36)}esclusi: ${reasons.join(", ")}` : "") +
        (missingReview ? `\n${" ".repeat(36)}${missingReview} senza analisi editoriale` : ""),
    );
  } catch (e) {
    failed = true;
    console.error(`✗ ${c.slug}: ${(e as Error).message}`);
  }
}

console.log(rows.length ? rows.join("\n") : "Nessun prodotto ancora caricato.");
console.log(`\n${ready} categorie su ${getCategories().length} pronte per l'indicizzazione (almeno ${RANKING.minProductsToIndex} prodotti).`);
if (failed) process.exit(1);
