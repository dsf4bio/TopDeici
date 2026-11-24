import Link from "next/link";
import { SearchForm } from "@/components/SearchForm";
import { categoryPath, coverOf, getCategoriesOf, getFeaturedCategories, getMacros, getRanking } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";

// Deve essere un numero scritto qui: Next.js legge questo valore durante la build senza eseguire il codice.
export const revalidate = 3600; // 1 ora: i prezzi più vecchi di 24 ore spariscono da soli

export const metadata = pageMetadata({
  title: "TopDieci — I 10 migliori prodotti Amazon per ogni categoria",
  description:
    "Scegli una categoria e trovi subito i 10 prodotti migliori su Amazon.it: tecnologia, casa, cucina, sport, auto, fai-da-te, bellezza, ufficio e gaming.",
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
          <p className="hero-lede">Scegli cosa ti serve: la classifica è pronta.</p>
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
