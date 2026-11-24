"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { SearchEntry } from "@/lib/catalog";

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^a-z0-9 ]/g, " ");

// Radice grossolana per l'italiano: "friggitrice" trova "friggitrici", "cuffia" trova "cuffie".
const stem = (w: string) => (w.length > 4 ? w.replace(/(i|e|a|o)$/, "") : w);

function score(entry: SearchEntry, terms: string[]): number {
  const name = norm(entry.name);
  const hay = norm(`${entry.name} ${entry.macro} ${entry.summary} ${entry.products.join(" ")}`);
  let total = 0;
  for (const t of terms) {
    const s = stem(t);
    if (name.split(" ").some((w) => w.startsWith(s))) total += 10;
    else if (hay.includes(s)) total += 3;
    else return 0; // ogni parola cercata deve comparire da qualche parte
  }
  return total + (entry.ready ? 1 : 0);
}

export function SearchResults({ index, initial }: { index: SearchEntry[]; initial: string }) {
  const [q, setQ] = useState(initial);
  const results = useMemo(() => {
    const terms = norm(q).split(" ").filter((t) => t.length > 1);
    if (!terms.length) return [];
    return index
      .map((e) => ({ e, s: score(e, terms) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .map((x) => x.e);
  }, [q, index]);

  return (
    <>
      <form action="/cerca" method="get" role="search" className="search" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="cerca-q" className="visually-hidden">Cerca</label>
        <input
          id="cerca-q"
          name="q"
          type="search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            const url = new URL(window.location.href);
            if (e.target.value) url.searchParams.set("q", e.target.value);
            else url.searchParams.delete("q");
            window.history.replaceState(null, "", url);
          }}
          placeholder="Cerca tra le categorie e i prodotti in classifica"
          autoFocus
          autoComplete="off"
        />
        <button type="submit">Cerca</button>
      </form>
      <p className="mt-4 mono muted" aria-live="polite">
        {q.trim() ? `${results.length} risultati` : `${index.length} categorie disponibili`}
      </p>
      <ul className="results mt-4">
        {(q.trim() ? results : index).map((e) => (
          <li key={e.slug}>
            <Link href={e.href}>
              <h3>{e.name}</h3>
              <span className={`tag ${e.ready ? "tag-live" : "tag-wait"}`}>{e.ready ? "Top 10" : "In aggiornamento"}</span>
              <p>{e.macro} · {e.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
