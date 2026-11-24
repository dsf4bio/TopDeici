import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CategoryTile } from "@/components/CategoryTile";
import { getCategoriesOf, getMacro, getMacros, getRanking } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";

// Deve essere un numero scritto qui: Next.js legge questo valore durante la build senza eseguire il codice.
export const revalidate = 3600; // 1 ora: i prezzi più vecchi di 24 ore spariscono da soli
export const dynamicParams = false;

type Props = { params: Promise<{ macro: string }> };

export function generateStaticParams() {
  return getMacros().map((m) => ({ macro: m.slug }));
}

export async function generateMetadata({ params }: Props) {
  const macro = getMacro((await params).macro);
  if (!macro) return {};
  return pageMetadata({
    title: `${macro.name}: le classifiche dei migliori prodotti`,
    description: `${macro.tagline} Le classifiche TopDieci dei prodotti migliori su Amazon.it per ogni categoria dell'area ${macro.name.toLowerCase()}.`,
    path: `/${macro.slug}`,
  });
}

export default async function MacroPage({ params }: Props) {
  const macro = getMacro((await params).macro);
  if (!macro) notFound();
  const categories = getCategoriesOf(macro.slug);
  const live = categories.filter((c) => getRanking(c.slug).ranked.length > 0).length;
  const others = getMacros().filter((m) => m.slug !== macro.slug);

  return (
    <>
      <div className="container page-head">
        <Breadcrumb items={[{ name: macro.name, path: `/${macro.slug}` }]} />
        <p className="eyebrow mt-6">Area {macro.code}</p>
        <h1>{macro.name}</h1>
        <p className="lede">{macro.tagline}</p>
        <dl className="facts">
          <div><dt>Categorie</dt><dd>{categories.length}</dd></div>
          <div><dt>Classifiche pubblicate</dt><dd>{live}</dd></div>
        </dl>
      </div>
      <section className="section">
        <div className="container grid grid-3">
          {categories.map((c) => (
            <CategoryTile key={c.slug} category={c} />
          ))}
        </div>
      </section>
      <section className="section" aria-labelledby="altre-aree">
        <div className="container">
          <h2 id="altre-aree" className="eyebrow">Altre aree</h2>
          <p className="mt-4" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.5rem" }}>
            {others.map((m) => (
              <Link key={m.slug} href={`/${m.slug}`} className="link-arrow">{m.name}</Link>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}
