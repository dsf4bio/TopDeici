import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateLink } from "@/components/AffiliateLink";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ComparisonTable } from "@/components/ComparisonTable";
import { JsonLd } from "@/components/JsonLd";
import { RankingBoard } from "@/components/RankingBoard";
import {
  categoryPath,
  getCategories,
  getCategoriesOf,
  getCategory,
  getGuide,
  getMacro,
  getRanking,
  isIndexable,
  lastUpdated,
} from "@/lib/catalog";
import { RANKING } from "@/lib/config";
import { formatDate, formatInt } from "@/lib/format";
import { pageMetadata, rankingJsonLd } from "@/lib/seo";
import { toCardModel } from "@/lib/view";

// Deve essere un numero scritto qui: Next.js legge questo valore durante la build senza eseguire il codice.
export const revalidate = 3600; // 1 ora: i prezzi più vecchi di 24 ore spariscono da soli
export const dynamicParams = false;

type Props = { params: Promise<{ macro: string; categoria: string }> };

export function generateStaticParams() {
  return getCategories().map((c) => ({ macro: c.macro, categoria: c.slug }));
}

function load(macroSlug: string, slug: string) {
  const category = getCategory(slug);
  const macro = getMacro(macroSlug);
  if (!category || !macro || category.macro !== macro.slug) return undefined;
  return { category, macro };
}

export async function generateMetadata({ params }: Props) {
  const { macro, categoria } = await params;
  const found = load(macro, categoria);
  if (!found) return {};
  const { category } = found;
  const n = getRanking(category.slug).ranked.length;
  const year = new Date().getFullYear();
  return pageMetadata({
    title: n > 0 ? `I ${n} migliori ${category.name.toLowerCase()} su Amazon (${year})` : `${category.name}: classifica e guida all'acquisto`,
    description: `${category.summary} Classifica con criteri pubblici: oltre ${String(RANKING.minRating).replace(".", ",")} stelle, almeno ${RANKING.minPrice} € e molte recensioni.`,
    path: categoryPath(category),
    // Finché la classifica non è abbastanza ricca la pagina non entra nell'indice: niente pagine vuote su Google.
    noindex: !isIndexable(category.slug),
  });
}

const ANALYSIS_FIELDS = [
  ["why", "Perché è in classifica"],
  ["solves", "Che problema risolve"],
  ["bestFor", "Per chi è indicato"],
  ["differences", "Rispetto agli altri"],
  ["beforeBuying", "Prima di acquistare"],
] as const;

export default async function CategoryPage({ params }: Props) {
  const { macro: macroSlug, categoria } = await params;
  const found = load(macroSlug, categoria);
  if (!found) notFound();
  const { category, macro } = found;

  const guide = getGuide(category.slug);
  const { ranked, thresholds } = getRanking(category.slug);
  const cards = ranked.map((p) => toCardModel(p, category));
  const updated = lastUpdated(category.slug);
  const related = getCategoriesOf(macro.slug).filter((c) => c.slug !== category.slug);
  const withReview = ranked.filter((p) => p.review && Object.values(p.review).some(Boolean));
  const name = category.name.toLowerCase();

  const sections = [
    ["introduzione", "Introduzione"],
    ["classifica", "Classifica"],
    ...(withReview.length ? [["analisi", "Analisi dei prodotti"]] : []),
    ...(ranked.length ? [["confronto", "Confronto"]] : []),
    ...(guide ? [["guida", "Guida all'acquisto"], ["domande", "Domande frequenti"]] : []),
    ["criteri", "Criteri di selezione"],
  ] as [string, string][];
  const idx = (id: string) => String(sections.findIndex(([s]) => s === id) + 1).padStart(2, "0");

  return (
    <>
      <div className="container page-head">
        <Breadcrumb
          items={[
            { name: macro.name, path: `/${macro.slug}` },
            { name: category.name, path: categoryPath(category) },
          ]}
        />
        <p className="eyebrow mt-6">{macro.code} · Classifica</p>
        <h1>
          {ranked.length > 0 ? (
            <>I <span className="num">{ranked.length}</span> migliori {name}</>
          ) : (
            <>{category.name}: classifica e guida</>
          )}
        </h1>
        <p className="lede">{category.summary}</p>
        <dl className="facts">
          <div><dt>In classifica</dt><dd>{ranked.length ? `${ranked.length} / ${RANKING.size}` : "In preparazione"}</dd></div>
          <div><dt>Aggiornata</dt><dd>{updated ? formatDate(updated) : "—"}</dd></div>
          <div><dt>Soglia</dt><dd>&gt; {String(RANKING.minRating).replace(".", ",")} ★ · ≥ {RANKING.minPrice} €</dd></div>
        </dl>
        <p className="disclosure-note">
          I pulsanti &ldquo;Vedi su Amazon&rdquo; sono link affiliati: se acquisti riceviamo una commissione, senza costi per te.
          La posizione in classifica non dipende dalle commissioni. <Link href="/affiliazione">Dettagli</Link>
        </p>
      </div>

      <div className="container cat-layout">
        <nav className="toc" aria-label="In questa pagina">
          <p className="eyebrow">In questa pagina</p>
          <ol className="mt-4">
            {sections.map(([id, label]) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
          </ol>
        </nav>

        <div>
          <section className="block" id="introduzione" aria-labelledby="h-introduzione">
            <h2 id="h-introduzione"><span className="idx">{idx("introduzione")}</span>Introduzione</h2>
            <div className="prose">
              {guide ? guide.intro.map((p) => <p key={p.slice(0, 32)}>{p}</p>) : <p>{category.summary}</p>}
              {!guide && (
                <p>
                  Nel confronto tra i modelli guardiamo in particolare a:{" "}
                  {category.specs.map((s) => (/^[A-Z]{2}/.test(s.label) ? s.label : s.label.toLowerCase())).join(", ")}. La guida completa a questa categoria è in
                  preparazione.
                </p>
              )}
            </div>
            {guide && (
              <>
                <h3 className="mt-6 eyebrow">Tipologie</h3>
                <div className="defs two mt-4">
                  {guide.types.map((t) => (
                    <div key={t.name}><h3>{t.name}</h3><p>{t.text}</p></div>
                  ))}
                </div>
                <h3 className="mt-6 eyebrow">Cosa valutare prima dell&apos;acquisto</h3>
                <div className="defs mt-4">
                  {guide.considerations.map((t) => (
                    <div key={t.name}><h3>{t.name}</h3><p>{t.text}</p></div>
                  ))}
                </div>
              </>
            )}
          </section>

          <section className="block" id="classifica" aria-labelledby="h-classifica">
            <h2 id="h-classifica"><span className="idx">{idx("classifica")}</span>Classifica</h2>
            {cards.length > 0 ? (
              <>
                {cards.length < RANKING.size && (
                  <p className="muted" style={{ marginBottom: "1rem" }}>
                    Solo {cards.length} prodotti rispettano oggi tutti i requisiti: non completiamo la lista con prodotti meno validi.
                  </p>
                )}
                <RankingBoard products={cards} category={category.slug} />
              </>
            ) : (
              <div className="pending">
                <h3>Classifica in preparazione</h3>
                <p>
                  Stiamo verificando i prodotti di questa categoria. Pubblichiamo la classifica solo quando i dati di prezzo,
                  valutazione e recensioni sono stati controllati e almeno un prodotto supera tutti i requisiti.
                </p>
                <ul className="criteria-list">
                  <li>Prezzo minimo <b>{RANKING.minPrice} €</b></li>
                  <li>Valutazione media <b>oltre {String(RANKING.minRating).replace(".", ",")} stelle</b></li>
                  <li>Recensioni <b>almeno {formatInt(thresholds.minReviews)}</b></li>
                </ul>
              </div>
            )}
          </section>

          {withReview.length > 0 && (
            <section className="block" id="analisi" aria-labelledby="h-analisi">
              <h2 id="h-analisi"><span className="idx">{idx("analisi")}</span>Analisi dei prodotti</h2>
              <div className="analysis">
                {withReview.map((p) => (
                  <article key={p.asin} className="reveal">
                    <h3>
                      <span className="mono">{String(p.position).padStart(2, "0")}</span>
                      {p.title}
                    </h3>
                    <dl>
                      {ANALYSIS_FIELDS.map(([key, label]) =>
                        p.review?.[key] ? (
                          <div key={key} style={{ display: "contents" }}>
                            <dt>{label}</dt>
                            <dd>{p.review[key]}</dd>
                          </div>
                        ) : null,
                      )}
                    </dl>
                    <p>
                      <AffiliateLink
                        href={cards.find((c) => c.asin === p.asin)!.href}
                        asin={p.asin}
                        category={category.slug}
                        position={p.position}
                        placement="analisi"
                        className="link-arrow"
                      >
                        Vedi su Amazon
                      </AffiliateLink>
                    </p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {cards.length > 0 && (
            <section className="block" id="confronto" aria-labelledby="h-confronto">
              <h2 id="h-confronto"><span className="idx">{idx("confronto")}</span>Confronto</h2>
              <ComparisonTable products={cards} specs={category.specs} category={category.slug} />
            </section>
          )}

          {guide && (
            <>
              <section className="block" id="guida" aria-labelledby="h-guida">
                <h2 id="h-guida"><span className="idx">{idx("guida")}</span>Guida all&apos;acquisto</h2>
                <div className="defs two">
                  {guide.buyingGuide.map((g) => (
                    <div key={g.profile}><h3>{g.profile}</h3><p>{g.text}</p></div>
                  ))}
                </div>
              </section>
              <section className="block" id="domande" aria-labelledby="h-domande">
                <h2 id="h-domande"><span className="idx">{idx("domande")}</span>Domande frequenti</h2>
                <div className="faq">
                  {guide.faq.map((f) => (
                    <details key={f.q}>
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
                <p className="muted mt-4 mono" style={{ fontSize: "0.75rem" }}>Testo rivisto il {formatDate(guide.reviewedAt)}</p>
              </section>
            </>
          )}

          <section className="block" id="criteri" aria-labelledby="h-criteri">
            <h2 id="h-criteri"><span className="idx">{idx("criteri")}</span>Criteri di selezione</h2>
            <ul className="criteria-list">
              <li>Prezzo minimo <b>{RANKING.minPrice} €</b></li>
              <li>Valutazione media <b>oltre {String(RANKING.minRating).replace(".", ",")} su 5</b></li>
              <li>Recensioni minime per questa categoria <b>{formatInt(thresholds.minReviews)}</b></li>
              <li>Dati di valutazione verificati negli ultimi <b>{RANKING.maxDataAgeDays} giorni</b></li>
              <li>Posizioni massime <b>{RANKING.size}, senza riempitivi</b></li>
            </ul>
            <p className="mt-4"><Link href="/metodologia" className="link-arrow">Come calcoliamo il punteggio</Link></p>
          </section>

          <section className="block" aria-labelledby="h-correlate">
            <h2 id="h-correlate">Altre classifiche in {macro.name.toLowerCase()}</h2>
            <ul className="results">
              {related.map((c) => (
                <li key={c.slug}>
                  <Link href={categoryPath(c)}>
                    <h3>{c.name}</h3>
                    <span className="link-arrow" aria-hidden="true" />
                    <p>{c.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      {ranked.length > 0 && <JsonLd data={rankingJsonLd(category, macro, ranked, guide)} />}
    </>
  );
}
