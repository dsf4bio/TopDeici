import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CategoryTile } from "@/components/CategoryTile";
import { getCategories, getCategoriesOf, getMacros } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tutte le categorie",
  description: "L'elenco completo delle categorie di TopDieci, divise in dieci aree: tecnologia, casa, cucina, sport, auto, fai-da-te, bellezza, ufficio e gaming.",
  path: "/categorie",
});

export default function CategoriesPage() {
  return (
    <>
      <div className="container page-head">
        <Breadcrumb items={[{ name: "Categorie", path: "/categorie" }]} />
        <h1>
          <span className="num">{getCategories().length}</span> categorie, dieci aree
        </h1>
        <p className="lede">Scegli un&apos;area o vai direttamente alla categoria che ti interessa.</p>
      </div>
      {getMacros().map((m) => (
        <section key={m.slug} className="section" aria-labelledby={`area-${m.slug}`}>
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">{m.code}</p>
                <h2 id={`area-${m.slug}`}>{m.name}</h2>
              </div>
              <Link href={`/${m.slug}`} className="link-arrow">Apri l&apos;area</Link>
            </div>
            <div className="grid grid-3">
              {getCategoriesOf(m.slug).map((c) => (
                <CategoryTile key={c.slug} category={c} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
