"use client";

import { useMemo, useState } from "react";
import type { CardModel } from "@/lib/view";
import { ProductCard } from "./ProductCard";

type Sort = "posizione" | "valutazione" | "recensioni" | "prezzo";

// Classifica interattiva. Il primo rendering (lato server) mostra la classifica completa
// nell'ordine ufficiale, quindi è leggibile anche da Google e senza JavaScript.
export function RankingBoard({ products, category }: { products: CardModel[]; category: string }) {
  const [sort, setSort] = useState<Sort>("posizione");
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [brand, setBrand] = useState("");

  const brands = useMemo(() => [...new Set(products.map((p) => p.brand))].sort((a, b) => a.localeCompare(b, "it")), [products]);
  const hasPrices = products.some((p) => p.price);
  const hasRatings = products.some((p) => p.rating);

  const visible = useMemo(() => {
    const list = products.filter(
      (p) =>
        (!minRating || (p.rating?.average ?? 0) >= minRating) &&
        (maxPrice === "" || (p.price ? p.price.value <= maxPrice : true)) &&
        (!brand || p.brand === brand),
    );
    const by: Record<Sort, (a: CardModel, b: CardModel) => number> = {
      posizione: (a, b) => a.position - b.position,
      valutazione: (a, b) => (b.rating?.average ?? 0) - (a.rating?.average ?? 0) || a.position - b.position,
      recensioni: (a, b) => (b.rating?.count ?? 0) - (a.rating?.count ?? 0),
      prezzo: (a, b) => (a.price?.value ?? Infinity) - (b.price?.value ?? Infinity),
    };
    return [...list].sort(by[sort]);
  }, [products, sort, minRating, maxPrice, brand]);

  return (
    <>
      <div className="toolbar" role="group" aria-label="Ordina e filtra la classifica">
        <label className="field">
          Ordina per
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
            <option value="posizione">Classifica</option>
            {hasRatings && <option value="valutazione">Valutazione media</option>}
            {hasRatings && <option value="recensioni">Numero di recensioni</option>}
            {hasPrices && <option value="prezzo">Prezzo più basso</option>}
          </select>
        </label>
        {hasRatings && (
        <label className="field">
          Valutazione minima
          <select value={minRating} onChange={(e) => setMinRating(Number(e.target.value))}>
            <option value={0}>Tutte</option>
            <option value={4.6}>4,6 e oltre</option>
            <option value={4.7}>4,7 e oltre</option>
            <option value={4.8}>4,8 e oltre</option>
          </select>
        </label>
        )}
        {hasPrices && (
          <label className="field">
            Prezzo massimo (€)
            <input
              type="number"
              inputMode="numeric"
              min={25}
              step={10}
              placeholder="Nessuno"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))}
            />
          </label>
        )}
        {brands.length > 1 && (
          <label className="field">
            Marca
            <select value={brand} onChange={(e) => setBrand(e.target.value)}>
              <option value="">Tutte</option>
              {brands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </label>
        )}
        <p className="count" aria-live="polite">
          {visible.length} di {products.length}
        </p>
      </div>
      {visible.length ? (
        <ol className="ranking">
          {visible.map((p) => (
            <ProductCard key={p.asin} p={p} category={category} />
          ))}
        </ol>
      ) : (
        <p className="pending">Nessun prodotto corrisponde ai filtri scelti.</p>
      )}
    </>
  );
}
