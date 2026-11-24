// Importa o aggiorna prodotti da un file CSV.
//
//   npm run dati:importa -- templates/prodotti.csv
//   npm run dati:importa -- mio-file.csv --prova     (mostra cosa cambierebbe senza scrivere)
//
// Colonne (vedi templates/prodotti-modello.csv):
//   categoria, asin, titolo, brand, modello, immagine, prezzo, valutazione, recensioni, verificato_il,
//   punti_di_forza, limiti (voci separate da " | "), perche, problemi, per_chi, differenze,
//   prima_di_acquistare, punteggio_editoriale, attivo, e una colonna "spec_<chiave>" per ogni
//   caratteristica della categoria (es. spec_capacita).
//
// I prodotti si identificano per ASIN: le righe aggiornano i campi compilati e lasciano invariati quelli vuoti.
// Nulla viene inventato: un campo vuoto resta vuoto.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { parseCsv } from "../src/lib/csv";
import { DATA_DIR, getCategory } from "../src/lib/catalog";
import type { Product } from "../src/lib/types";
import { validateProduct } from "../src/lib/validate";

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith("--"));
const dryRun = args.includes("--prova");
if (!file) {
  console.error("Uso: npm run dati:importa -- <file.csv> [--prova]");
  process.exit(1);
}

// Prezzi: accetta "1.299,00", "39,99", "39.99", "€ 45".
function price(s: string): number | undefined {
  const t = s.replace(/[^\d.,]/g, "");
  if (!t) return undefined;
  const normalized = t.includes(",") ? t.replace(/\./g, "").replace(",", ".") : /\.\d{1,2}$/.test(t) ? t : t.replace(/\./g, "");
  const n = Number(normalized);
  return Number.isNaN(n) ? undefined : n;
}
// Conteggi: "12.345" o "12,345" o "12345".
const count = (s: string) => (/\d/.test(s) ? Number(s.replace(/\D/g, "")) : undefined);
// Le valutazioni usano la virgola come separatore decimale ma non hanno migliaia.
const decimal = (s: string) => (s.trim() === "" ? undefined : Number(s.replace(",", ".")));
const list = (s: string) => (s ? s.split("|").map((x) => x.trim()).filter(Boolean) : undefined);
const text = (s: string | undefined) => (s && s.trim() ? s.trim() : undefined);

function toIsoDate(s: string): string {
  const it = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  const iso = it ? `${it[3]}-${it[2]!.padStart(2, "0")}-${it[1]!.padStart(2, "0")}` : s;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) throw new Error(`data non valida: "${s}" (usa AAAA-MM-GG o GG/MM/AAAA)`);
  return d.toISOString();
}

const rows = parseCsv(readFileSync(file, "utf8"));
const byCategory = new Map<string, Product[]>();
const problems: string[] = [];
let created = 0;
let updated = 0;

function load(slug: string): Product[] {
  if (!byCategory.has(slug)) {
    const f = path.join(DATA_DIR, `${slug}.json`);
    byCategory.set(slug, existsSync(f) ? (JSON.parse(readFileSync(f, "utf8")) as Product[]) : []);
  }
  return byCategory.get(slug)!;
}

rows.forEach((r, i) => {
  const line = `riga ${i + 2}`;
  try {
    const category = getCategory(r.categoria ?? "");
    if (!category) throw new Error(`categoria sconosciuta "${r.categoria}"`);
    const asin = (r.asin ?? "").toUpperCase();
    const products = load(category.slug);
    let p = products.find((x) => x.asin === asin);
    if (!p) {
      p = { asin, category: category.slug, title: "", brand: "" };
      products.push(p);
      created++;
    } else updated++;

    p.title = text(r.titolo) ?? p.title;
    p.brand = text(r.brand) ?? p.brand;
    p.model = text(r.modello) ?? p.model;
    p.image = text(r.immagine) ?? p.image;

    const checkedAt = r.verificato_il ? toIsoDate(r.verificato_il) : undefined;
    const value = price(r.prezzo ?? "");
    if (value !== undefined) {
      if (!checkedAt) throw new Error("prezzo senza verificato_il");
      p.price = { value, currency: "EUR", checkedAt, source: "manual" };
    }
    const average = decimal(r.valutazione ?? "");
    const reviews = count(r.recensioni ?? "");
    if (average !== undefined || reviews !== undefined) {
      if (average === undefined || reviews === undefined) throw new Error("valutazione e recensioni vanno indicate insieme");
      if (!checkedAt) throw new Error("valutazione senza verificato_il");
      p.rating = { average, count: reviews, checkedAt, source: "manual" };
    }

    p.strengths = list(r.punti_di_forza ?? "") ?? p.strengths;
    p.weaknesses = list(r.limiti ?? "") ?? p.weaknesses;
    const review = {
      ...p.review,
      ...Object.fromEntries(
        (
          [
            ["why", r.perche],
            ["solves", r.problemi],
            ["bestFor", r.per_chi],
            ["differences", r.differenze],
            ["beforeBuying", r.prima_di_acquistare],
          ] as const
        ).flatMap(([k, v]) => (text(v) ? [[k, text(v)]] : [])),
      ),
    };
    if (Object.keys(review).length) p.review = review;

    const editorial = decimal(r.punteggio_editoriale ?? "");
    if (editorial !== undefined) p.editorialScore = editorial;
    if (r.attivo) p.active = !/^(no|0|false|falso)$/i.test(r.attivo);

    const specs = { ...p.specs };
    for (const s of category.specs) {
      const v = text(r[`spec_${s.key}`]);
      if (v !== undefined) specs[s.key] = /^(sì|si|yes)$/i.test(v) ? true : /^no$/i.test(v) ? false : v;
    }
    if (Object.keys(specs).length) p.specs = specs;

    problems.push(...validateProduct(p, `${line} (${asin})`));
  } catch (e) {
    problems.push(`${line}: ${(e as Error).message}`);
  }
});

if (problems.length) {
  console.error("Import interrotto, nessun file modificato:\n" + problems.map((p) => "  · " + p).join("\n"));
  process.exit(1);
}

console.log(`${rows.length} righe lette: ${created} prodotti nuovi, ${updated} aggiornati.`);
if (dryRun) {
  console.log("Modalità --prova: nessun file scritto.");
} else {
  mkdirSync(DATA_DIR, { recursive: true });
  for (const [slug, products] of byCategory) {
    products.sort((a, b) => a.asin.localeCompare(b.asin));
    writeFileSync(path.join(DATA_DIR, `${slug}.json`), JSON.stringify(products, null, 2) + "\n");
    console.log(`  scritto data/prodotti/${slug}.json (${products.length} prodotti)`);
  }
  console.log("Ora lancia: npm run dati:verifica");
}
