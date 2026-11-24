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
import { formatDate } from "@/lib/format";
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
  const ranked = getRanking(category.slug).ranked;
  const year = new Date().getFullYear();
  const n = ranked.length || 10;
  const leaders = ranked.slice(0, 3).map((p) => p.brand).filter(Boolean);
  return pageMetadata({
    title: `I ${n} migliori ${category.name.toLowerCase()} su Amazon (${year})`,
    description:
      `La classifica dei ${n} migliori ${category.name.toLowerCase()} su Amazon.it` +
      (leaders.length ? `: ${[...new Set(leaders)].join(", ")} e gli altri modelli più apprezzati.` : ".") +
      ` ${category.summary}`,
    path: categoryPath(category),
    // Finché la classifica non è pronta la pagina resta fuori da Google.
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
  const { ranked } = getRanking(category.slug);
  const cards = ranked.map((p) => toCardModel(p, category));
  const updated = lastUpdated(category.slug);
  const related = getCategoriesOf(macro.slug).filter((c) => c.slug !== category.slug);
  const withReview = ranked.filter((p) => p.review && Object.values(p.review).some(Boolean));
  const name = category.name.toLowerCase();

  return (
    <>
      <div className="container cat-head">
        <Breadcrumb
          items={[
            { name: macro.name, path: `/${macro.slug}` },
            { name: category.name, path: categoryPath(category) },
          ]}
        />
        <h1>
          I <span className="num">{cards.length || 10}</span> migliori {name}
        </h1>
        <p className="cat-meta">
          {updated ? <>Aggiornata il {formatDate(updated)} · </> : null}
          Link affiliati: il prezzo non cambia.
        </p>
        <ul className="trust-strip" aria-label="Come abbiamo scelto questi prodotti">
          <li>Niente sponsorizzati</li>
          <li>4,4★ e 100+ recensioni</li>
          <li className="trust-extra">Niente doppioni</li>
          <li className="trust-extra">Resi su Amazon</li>
        </ul>
      </div>

      <div className="container cat-body">
        <section aria-label="Classifica">
          {cards.length > 0 ? (
            <RankingBoard products={cards} category={category.slug} />
          ) : (
            <div className="pending">
              <h2>Classifica in aggiornamento</h2>
              <p>Stiamo caricando i prodotti di questa categoria. Nel frattempo guarda le altre classifiche di {macro.name.toLowerCase()}.</p>
            </div>
          )}
        </section>

        {cards.length > 1 && (
          <section className="block" id="confronto" aria-labelledby="h-confronto">
            <h2 id="h-confronto">Confronto rapido</h2>
            <ComparisonTable products={cards} specs={category.specs} category={category.slug} />
          </section>
        )}

        {withReview.length > 0 && (
          <section className="block" id="analisi" aria-labelledby="h-analisi">
            <h2 id="h-analisi">I prodotti nel dettaglio</h2>
            <div className="analysis">
              {withReview.map((p) => (
                <article key={p.asin}>
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

        {guide && (
          <section className="block" id="guida" aria-labelledby="h-guida">
            <h2 id="h-guida">Come scegliere: {name}</h2>
            <div className="prose">
              {guide.intro.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <div className="defs two mt-6">
              {guide.types.map((t) => (
                <div key={t.name}><h3>{t.name}</h3><p>{t.text}</p></div>
              ))}
            </div>
            <div className="defs two mt-6">
              {guide.considerations.map((t) => (
                <div key={t.name}><h3>{t.name}</h3><p>{t.text}</p></div>
              ))}
            </div>
            <h3 className="mt-6 sub">Quale scegliere</h3>
            <div className="defs two mt-4">
              {guide.buyingGuide.map((g) => (
                <div key={g.profile}><h3>{g.profile}</h3><p>{g.text}</p></div>
              ))}
            </div>
            <h3 className="mt-6 sub">Domande frequenti</h3>
            <div className="faq mt-4">
              {guide.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <section className="block" aria-labelledby="h-correlate">
          <h2 id="h-correlate">Altre classifiche: {macro.name.toLowerCase()}</h2>
          <ul className="chips">
            {related.map((c) => (
              <li key={c.slug}>
                <Link href={categoryPath(c)}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      {ranked.length > 0 && <JsonLd data={rankingJsonLd(category, macro, ranked, guide)} />}
    </>
  );
}
