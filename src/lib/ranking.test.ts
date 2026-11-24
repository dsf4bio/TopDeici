// Test del sistema di classificazione. I prodotti qui sono fittizi e servono solo ai test:
// non vengono mai mostrati sul sito.

import assert from "node:assert/strict";
import { test } from "node:test";
import { rankCategory } from "./ranking";
import type { Product } from "./types";

const NOW = new Date("2026-11-24T12:00:00Z");
const fresh = "2026-11-20T10:00:00Z";

let n = 0;
type FakeOptions = { price?: number; rating?: number; count?: number; checkedAt?: string } & Omit<Partial<Product>, "price" | "rating">;
function fake(over: FakeOptions = {}): Product {
  n++;
  const { price = 60, rating = 4.7, count = 1000, checkedAt = fresh, ...rest } = over;
  return {
    asin: `TEST${String(n).padStart(6, "0")}`,
    category: "test",
    title: `Prodotto di prova ${n}`,
    brand: "Prova",
    price: { value: price, currency: "EUR", checkedAt, source: "manual" },
    rating: { average: rating, count, checkedAt, source: "manual" },
    ...rest,
  };
}

test("esclude chi non rispetta i requisiti minimi", () => {
  const ok = fake();
  const products = [
    ok,
    fake({ price: 24.99 }),
    fake({ rating: 4.3 }), // sotto 4,4 stelle
    fake({ checkedAt: "2026-08-01T00:00:00Z" }),
    fake({ active: false }),
    { ...fake(), price: undefined },
  ];
  const r = rankCategory(products, {}, NOW);
  assert.deepEqual(r.ranked.map((p) => p.asin), [ok.asin]);
  assert.deepEqual(
    r.excluded.map((e) => e.reason).sort(),
    ["dati-scaduti", "inattivo", "prezzo-basso", "prezzo-mancante", "valutazione-bassa"],
  );
});

test("non riempie la classifica con prodotti non idonei", () => {
  const products = [fake(), fake(), fake({ rating: 4.3 }), fake({ price: 10 })];
  assert.equal(rankCategory(products, {}, NOW).ranked.length, 2);
});

test("al massimo 10 posizioni, con posizione 1..10", () => {
  const products = Array.from({ length: 14 }, (_, i) => fake({ count: 1000 + i * 100 }));
  const r = rankCategory(products, {}, NOW);
  assert.equal(r.ranked.length, 10);
  assert.deepEqual(r.ranked.map((p) => p.position), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  assert.equal(r.excluded.filter((e) => e.reason === "fuori-classifica").length, 4);
});

test("poche recensioni rispetto alla categoria escludono il prodotto", () => {
  const few = fake({ rating: 4.9, count: 100 }); // servono più di 100 recensioni
  const products = [few, fake({ count: 5000 }), fake({ count: 6000 }), fake({ count: 7000 })];
  const r = rankCategory(products, {}, NOW);
  assert.equal(r.thresholds.minReviews, 101);
  assert.equal(r.excluded.find((e) => e.product.asin === few.asin)?.reason, "poche-recensioni");
});

test("la media bayesiana premia valutazioni solide su molti voti", () => {
  const manyVotes = fake({ rating: 4.7, count: 20000 });
  const fewVotes = fake({ rating: 4.9, count: 400 });
  const r = rankCategory([fewVotes, manyVotes, fake({ rating: 4.6, count: 2000 })], {}, NOW);
  assert.equal(r.ranked[0]!.asin, manyVotes.asin);
});

test("a parità di dati decide il giudizio editoriale", () => {
  const a = fake({ editorialScore: 0.2 });
  const b = fake({ editorialScore: 0.9 });
  const r = rankCategory([a, b], {}, NOW);
  assert.equal(r.ranked[0]!.asin, b.asin);
});

test("è deterministica", () => {
  const products = Array.from({ length: 8 }, (_, i) => fake({ rating: 4.6 + (i % 4) / 10, count: 500 * (i + 1) }));
  const first = rankCategory(products, {}, NOW).ranked.map((p) => p.asin);
  const second = rankCategory([...products].reverse(), {}, NOW).ranked.map((p) => p.asin);
  assert.deepEqual(first, second);
});

function fromApi(reviewSortRank: number, over: Partial<Product> = {}): Product {
  n++;
  return {
    asin: `API${String(n).padStart(7, "0")}`,
    category: "test",
    title: `Prodotto API ${n}`,
    brand: "Prova",
    price: { value: 80, currency: "EUR", checkedAt: fresh, source: "api" },
    amazon: { minStars: 4, reviewSortRank, salesRank: 1000 * reviewSortRank, checkedAt: fresh },
    ...over,
  };
}

test("funziona con i soli dati delle API Amazon", () => {
  const products = [fromApi(3), fromApi(1), fromApi(2), fromApi(4, { price: { value: 20, currency: "EUR", checkedAt: fresh, source: "api" } })];
  const r = rankCategory(products, {}, NOW);
  assert.equal(r.ranked.length, 3);
  assert.deepEqual(r.ranked.map((p) => p.amazon!.reviewSortRank), [1, 2, 3]);
});

test("la classifica vendite sposta prodotti con recensioni simili", () => {
  const popular = fromApi(2, { amazon: { minStars: 4, reviewSortRank: 2, salesRank: 5, checkedAt: fresh } });
  const niche = fromApi(1, { amazon: { minStars: 4, reviewSortRank: 1, salesRank: 90000, checkedAt: fresh } });
  const r = rankCategory([niche, popular, fromApi(3)], {}, NOW);
  assert.equal(r.ranked[0]!.asin, popular.asin);
});

test("dati della redazione e dati API convivono nella stessa classifica", () => {
  const r = rankCategory([fake({ rating: 4.8, count: 20000 }), fromApi(1), fromApi(2)], {}, NOW);
  assert.equal(r.ranked.length, 3);
});

test("classifica della redazione con soli link e posizioni", () => {
  const mk = (rank: number, price?: number): Product => ({
    asin: `LINK${String(rank).padStart(6, "0")}`, category: "test", title: `Scelta ${rank}`, brand: "Prova", editorialRank: rank,
    ...(price !== undefined ? { price: { value: price, currency: "EUR" as const, checkedAt: "2020-01-01T00:00:00Z", source: "manual" as const } } : {}),
  });
  const r = rankCategory([mk(3), mk(1, 40), mk(2), mk(4, 15)], {}, NOW);
  assert.deepEqual(r.ranked.map((p) => p.editorialRank), [1, 2, 3]);
});
