import Link from "next/link";
import { SearchForm } from "@/components/SearchForm";
import { categoryPath, coverOf, getCategoriesOf, getFeaturedCategories, getMacros, getRanking } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";

// Deve essere un numero scritto qui: Next.js legge questo valore durante la build senza eseguire il codice.
export const revalidate = 3600; // 1 ora: i prezzi più vecchi di 24 ore spariscono da soli

export const metadata = pageMetadata({
  title: "TopDieci — I 10 migliori prodotti Amazon per ogni categoria",
  description:
    "I 10 migliori prodotti Amazon.it per oltre 150 categorie, senza annunci sponsorizzati né doppioni: solo articoli con almeno 4,4 stelle e più di 100 recensioni, con guida all'acquisto e confronto.",
  path: "/",
});

export default function HomePage() {
  const macros = getMacros();
  const featured = getFeaturedCategories();

  return (
    <>
      <section className="hero hero-compact" aria-labelledby="hero-title">
        <div className="container">
          <h1 id="hero-title">
            I <em>10 migliori</em> prodotti Amazon,<br />
            categoria per categoria.
          </h1>
          <p className="hero-lede">Amazon l'abbiamo già filtrato noi: per ogni categoria solo i 10 che valgono.</p>
          <div className="hero-search">
            <SearchForm id="hero-q" />
          </div>
        </div>
      </section>

      <section className="section section-tight" aria-labelledby="popolari">
        <div className="container">
          <h2 id="popolari" className="section-title">Le classifiche più consultate</h2>
          <div className="grid grid-4">
            {featured.map((c) => {
              const top = getRanking(c.slug).ranked.slice(0, 3);
              const cover = coverOf(c.slug);
              return (
                <Link key={c.slug} href={categoryPath(c)} className="feature-tile">
                  {cover ? (
                    <img className="feature-cover" src={cover} alt="" width={320} height={200} loading="lazy" />
                  ) : (
                    <span className="feature-thumbs" aria-hidden="true">
                      {top.length
                        ? top.map((p) =>
                            p.image ? <img key={p.asin} src={p.image} alt="" loading="lazy" referrerPolicy="no-referrer" /> : null,
                          )
                        : <span className="feature-empty">10</span>}
                    </span>
                  )}
                  <span className="feature-name">Top 10 {c.name.toLowerCase()}</span>
                  {top[0] && <span className="feature-first">N° 1 · {top[0].brand}</span>}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-tight why" aria-labelledby="perche">
        <div className="container">
          <h2 id="perche" className="section-title">Perché passare da TopDieci prima di comprare su Amazon</h2>
          <ul className="benefits">
            <li>
              <strong>Niente pubblicità in classifica</strong>
              <span>Escludiamo i risultati sponsorizzati: nessun marchio può pagare per stare nei nostri 10.</span>
            </li>
            <li>
              <strong>Solo prodotti promossi da chi li ha comprati</strong>
              <span>Almeno 4,4 stelle su 5 e più di 100 recensioni: niente scommesse su articoli appena usciti o poco provati.</span>
            </li>
            <li>
              <strong>Niente doppioni, ricambi o articoli fuori tema</strong>
              <span>Togliamo varianti ripetute, accessori e prodotti finiti nella categoria sbagliata, che su Amazon riempiono i risultati.</span>
            </li>
            <li>
              <strong>Capisci quale fa per te in due minuti</strong>
              <span>Ogni classifica ha un confronto rapido e una guida che spiega cosa conta davvero e cosa scegliere in base al tuo caso.</span>
            </li>
            <li>
              <strong>Stesso prezzo, stesse garanzie</strong>
              <span>Compri direttamente su Amazon.it, con spedizione, resi e garanzia di Amazon. Passare da noi non ti costa nulla in più.</span>
            </li>
          </ul>

          <div className="vs" role="table" aria-label="Cercare da soli su Amazon o partire da TopDieci">
            <div className="vs-row vs-head" role="row">
              <span role="columnheader"></span>
              <span role="columnheader">Cercando da solo su Amazon</span>
              <span role="columnheader">Partendo da TopDieci</span>
            </div>
            <div className="vs-row" role="row">
              <span role="rowheader">Risultati da guardare</span>
              <span role="cell">Centinaia, pagina dopo pagina</span>
              <span role="cell">10, già in ordine</span>
            </div>
            <div className="vs-row" role="row">
              <span role="rowheader">Annunci sponsorizzati</span>
              <span role="cell">Mescolati ai risultati</span>
              <span role="cell">Esclusi</span>
            </div>
            <div className="vs-row" role="row">
              <span role="rowheader">Prodotti con poche recensioni</span>
              <span role="cell">Spesso in prima pagina</span>
              <span role="cell">Esclusi (minimo 100)</span>
            </div>
            <div className="vs-row" role="row">
              <span role="rowheader">Come scegliere tra i modelli</span>
              <span role="cell">Da capire da solo</span>
              <span role="cell">Guida e confronto pronti</span>
            </div>
            <div className="vs-row" role="row">
              <span role="rowheader">Prezzo finale</span>
              <span role="cell">Prezzo Amazon</span>
              <span role="cell">Lo stesso prezzo Amazon</span>
            </div>
          </div>

          <ol className="how-steps">
            <li><span><strong>Scegli la categoria</strong> che ti interessa.</span></li>
            <li><span><strong>Confronta i 10 prodotti</strong> e leggi la guida per capire quale fa per te.</span></li>
            <li><span><strong>Vai su Amazon</strong> con un clic e completa l'acquisto come sempre.</span></li>
          </ol>
        </div>
      </section>

      <section className="section section-tight" aria-labelledby="tutte">
        <div className="container">
          <h2 id="tutte" className="section-title">Tutte le classifiche</h2>
          <div className="directory">
            {macros.map((m) => (
              <nav key={m.slug} aria-labelledby={`dir-${m.slug}`} className="directory-col">
                <h3 id={`dir-${m.slug}`}>
                  <Link href={`/${m.slug}`}>{m.name}</Link>
                </h3>
                <ul>
                  {getCategoriesOf(m.slug).map((c) => (
                    <li key={c.slug}>
                      <Link href={categoryPath(c)}>{c.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
