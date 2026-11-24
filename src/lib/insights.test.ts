// Test delle informazioni aggiuntive (etichette, storico prezzi, offerte, opinioni).
// I prodotti sono fittizi e servono solo ai test.

import assert from "node:assert/strict";
import { test } from "node:test";
import { assignBadges, dealOf, opinionsOf, priceNote } from "./insights";
import { rankCategory } from "./ranking";
import type { Product } from "./types";

const NOW = new Date("2026-11-24T12:00:00Z");
const day = (d: number) => new Date(NOW.getTime() - d * 86_400_000).toISOString();

let n = 0;
function fake(price: number, rating: number, count: number, extra: Partial<Product> = {}): Product {
  n++;
  return {
    asin: `TEST${String(n).padStart(6, "0")}`, category: "test", title: `Prova ${n}`, brand: "Prova",
    price: { value: price, currency: "EUR", checkedAt: day(0.1), source: "api" },
    rating: { average: rating, count, checkedAt: day(1), source: "manual" },
    ...extra,
  };
}
const history = (values: number[]) => values.map((value, i) => ({ value, at: day(values.length - i) }));

test("etichette: una per prodotto, nessuna al primo, il più economico è davvero il più economico", () => {
  const list = [fake(200, 4.8, 9000), fake(120, 4.7, 3000), fake(60, 4.5, 800), fake(45, 4.6, 20000), fake(300, 4.9, 500), fake(90, 4.6, 1200)];
  const { ranked } = rankCategory(list, { minReviews: 100 }, NOW);
  const badges = assignBadges(ranked);
  const first = ranked.find((p) => p.position === 1)!;
  assert.equal(badges.has(first.asin), false);
  const ids = [...badges.values()].map((b) => b.id);
  assert.equal(new Set(ids).size, ids.length);
  const cheap = [...badges].find(([, b]) => b.id === "cheap");
  if (cheap) assert.equal(ranked.find((p) => p.asin === cheap[0])!.price!.value, Math.min(...ranked.map((p) => p.price!.value)));
  assert.ok(badges.size >= 2);
});

test("etichette: nessuna con meno di 4 prodotti", () => {
  const { ranked } = rankCategory([fake(50, 4.6, 500), fake(60, 4.7, 600)], { minReviews: 100 }, NOW);
  assert.equal(assignBadges(ranked).size, 0);
});

test("storico prezzi: serve una settimana di dati e un prezzo API aggiornato", () => {
  assert.equal(priceNote(fake(80, 4.6, 500, { priceHistory: history([90, 90, 85]) }), NOW), undefined);
  const low = fake(70, 4.6, 500, { priceHistory: history([90, 88, 92, 90, 85, 89, 91, 70]) });
  assert.match(priceNote(low, NOW)!.text, /più basso/);
  const manual = fake(70, 4.6, 500, { priceHistory: history([90, 88, 92, 90, 85, 89, 91, 70]) });
  manual.price!.source = "manual";
  assert.equal(priceNote(manual, NOW), undefined);
});

test("offerte: almeno il 10% di sconto reale", () => {
  assert.equal(dealOf(fake(95, 4.6, 500, { listPrice: { value: 100, checkedAt: day(0.1) } }), NOW), undefined);
  assert.deepEqual(dealOf(fake(80, 4.6, 500, { listPrice: { value: 100, checkedAt: day(0.1) } }), NOW), { percent: 20, reason: "barrato" });
  // Prezzo barrato vecchio: non conta.
  assert.equal(dealOf(fake(80, 4.6, 500, { listPrice: { value: 100, checkedAt: day(5) } }), NOW), undefined);
  assert.equal(dealOf(fake(80, 4.6, 500, { priceHistory: history([100, 100, 100, 100, 100, 100, 100, 80]) }), NOW)?.reason, "storico");
});

test("opinioni: scadono dopo 180 giorni", () => {
  const o = { positive: ["Facilità d'uso"], mixed: [], negative: ["Rumorosità"] };
  assert.ok(opinionsOf(fake(50, 4.6, 500, { opinions: { ...o, checkedAt: day(10) } }), NOW));
  assert.equal(opinionsOf(fake(50, 4.6, 500, { opinions: { ...o, checkedAt: day(200) } }), NOW), undefined);
});
