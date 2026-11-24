import Link from "next/link";
import { CategoryTile } from "@/components/CategoryTile";
import { ProductCard } from "@/components/ProductCard";
import { SearchForm } from "@/components/SearchForm";
import {
  categoryPath,
  getCategories,
  getCategoriesOf,
  getCategory,
  getFeaturedCategories,
  getGuide,
  getMacros,
  getRanking,
  getUpdatedCategories,
} from "@/lib/catalog";
import { RANKING } from "@/lib/config";
import { formatDate } from "@/lib/format";
import { pageMetadata } from "@/lib/seo";
import { toCardModel } from "@/lib/view";

// Deve essere un numero scritto qui: Next.js legge questo valore durante la build senza eseguire il codice.
export const revalidate = 3600; // 1 ora: i prezzi più vecchi di 24 ore spariscono da soli

export const metadata = pageMetadata({
  title: "TopDieci — I 10 migliori prodotti Amazon in oltre 100 categorie",
  description:
    "Classifiche dei migliori prodotti su Amazon.it costruite con criteri pubblici: almeno 25 €, valutazione oltre 4,5 stelle e tante recensioni. Guide all'acquisto per scegliere senza perdere tempo.",
  path: "/",
});

const rating = String(RANKING.minRating).replace(".", ",");

export default function HomePage() {
  const categories = getCategories();
  const macros = getMacros();
  const updated = getUpdatedCategories(6);
  const guides = categories.filter((c) => getGuide(c.slug));
  // I numeri uno: il primo classificato delle categorie aggiornate più di recente.
  const leaders = updated
    .map(({ category }) => ({ category, first: getRanking(category.slug).ranked[0] }))
    .filter((x): x is { category: typeof x.category; first: NonNullable<typeof x.first> } => Boolean(x.first))
    .slice(0, 3);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Classifiche indipendenti · Amazon.it</p>
            <h1 id="hero-title">
              Dieci prodotti.<br />
              <em>Nessun riempitivo.</em>
            </h1>
            <p className="hero-lede">
              Per ogni categoria mettiamo in fila i prodotti migliori su Amazon secondo criteri pubblici e verificabili. Se i
              prodotti all&apos;altezza sono sette, la classifica ne ha sette.
            </p>
            <div className="hero-search">
              <SearchForm id="hero-q" />
            </div>
            <p className="hero-stats">
              <span><b>{categories.length}</b>categorie</span>
              <span><b>{macros.length}</b>aree</span>
              <span><b>0</b>prodotti inventati</span>
            </p>
          </div>

          <aside className="spec-sheet" aria-label="Requisiti per entrare in classifica">
            <header>
              <span>Scheda requisiti</span>
              <span>rev. {new Date().getFullYear()}</span>
            </header>
            <div className="spec-big" aria-hidden="true">
              1<span>0</span>
            </div>
            {[
              ["01", "Prezzo minimo", `≥ ${RANKING.minPrice} €`, 0.55, "0.1s"],
              ["02", "Valutazione media", `> ${rating} ★`, 0.9, "0.25s"],
              ["03", "Recensioni", "sopra soglia", 0.75, "0.4s"],
              ["04", "Dati verificati", `≤ ${RANKING.maxDataAgeDays} giorni`, 0.65, "0.55s"],
            ].map(([n, label, value, fill, delay]) => (
              <div className="spec-row" key={n as string}>
                <span className="n">{n}</span>
                <span>{label}</span>
                <span className="v">{value}</span>
                <span className="bar" style={{ ["--fill" as string]: fill, ["--d" as string]: delay }} />
              </div>
            ))}
          </aside>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...categories.slice(0, 24), ...categories.slice(0, 24)].map((c, i) => (
            <Link key={`${c.slug}-${i}`} href={categoryPath(c)} tabIndex={-1}>
              <span>Top 10 · {c.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <section className="section" aria-labelledby="aree">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Navigazione</p>
              <h2 id="aree">Dieci aree, una classifica per ogni esigenza</h2>
            </div>
            <Link href="/categorie" className="link-arrow">Tutte le {categories.length} categorie</Link>
          </div>
          <div className="grid grid-5">
            {macros.map((m) => (
              <Link key={m.slug} href={`/${m.slug}`} className="tile tile-macro reveal">
                <span className="code">{m.code}</span>
                <h3>{m.name}</h3>
                <p>{m.tagline}</p>
                <span className="meta">
                  <span><span className="count">{getCategoriesOf(m.slug).length}</span> categorie</span>
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="numeri-uno">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">I migliori 10 prodotti</p>
              <h2 id="numeri-uno">I numeri uno delle ultime classifiche</h2>
            </div>
            <p className="lede">Il primo classificato di ogni categoria aggiornata di recente, con il punteggio calcolato dal nostro sistema.</p>
          </div>
          {leaders.length ? (
            <ol className="ranking">
              {leaders.map(({ category, first }) => (
                <ProductCard key={first.asin} p={toCardModel(first, category)} category={category.slug} />
              ))}
            </ol>
          ) : (
            <div className="pending">
              <h3>Le prime classifiche sono in fase di verifica</h3>
              <p>
                Stiamo raccogliendo e controllando i dati dei prodotti categoria per categoria. Le classifiche appariranno qui
                appena almeno un prodotto supera tutti i requisiti: preferiamo una sezione vuota a una lista riempita a caso.
              </p>
              <p><Link href="/metodologia" className="link-arrow">Leggi come scegliamo</Link></p>
            </div>
          )}
        </div>
      </section>

      <section className="section" aria-labelledby="popolari">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">In evidenza</p>
              <h2 id="popolari">Le categorie più consultate</h2>
            </div>
          </div>
          <div className="grid grid-3">
            {getFeaturedCategories().map((c) => (
              <CategoryTile key={c.slug} category={c} showMacro />
            ))}
          </div>
        </div>
      </section>

      {updated.length > 0 && (
        <section className="section" aria-labelledby="aggiornate">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Ultimi aggiornamenti</p>
                <h2 id="aggiornate">Classifiche aggiornate</h2>
              </div>
            </div>
            <ul className="results">
              {updated.map(({ category, updated: at, count }) => (
                <li key={category.slug}>
                  <Link href={categoryPath(category)}>
                    <h3>I {count} migliori {category.name.toLowerCase()}</h3>
                    <span className="mono muted">{formatDate(at)}</span>
                    <p>{category.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="metodo">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Metodo</p>
              <h2 id="metodo">Come nasce una classifica</h2>
            </div>
            <Link href="/metodologia" className="link-arrow">Metodologia completa</Link>
          </div>
          <ol className="steps">
            <li>
              <h3>Filtro d&apos;ingresso</h3>
              <p>Restano solo prodotti da almeno {RANKING.minPrice} € con valutazione media superiore a {rating} stelle.</p>
            </li>
            <li>
              <h3>Peso alle recensioni</h3>
              <p>Il numero di recensioni deve essere alto rispetto alla categoria: poche opinioni entusiaste non bastano.</p>
            </li>
            <li>
              <h3>Punteggio</h3>
              <p>Valutazione corretta con media bayesiana, volume delle recensioni e giudizio della redazione su qualità e prezzo.</p>
            </li>
            <li>
              <h3>Verifica continua</h3>
              <p>I dati vengono ricontrollati: chi non rispetta più i requisiti esce dalla classifica.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="guide">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Guide all&apos;acquisto</p>
              <h2 id="guide">Prima di scegliere, capire cosa conta</h2>
            </div>
            <p className="lede">Ogni categoria ha una guida: tipologie, caratteristiche da valutare e consigli per budget e profilo d&apos;uso.</p>
          </div>
          <div className="grid grid-3">
            {guides.map((c) => (
              <CategoryTile key={c.slug} category={getCategory(c.slug)!} showMacro />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
