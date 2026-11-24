import { Breadcrumb } from "@/components/Breadcrumb";
import { SearchResults } from "@/components/SearchResults";
import { getSearchIndex } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cerca",
  description: "Cerca tra le categorie e i prodotti delle classifiche TopDieci.",
  path: "/cerca",
  noindex: true,
});

type Props = { searchParams: Promise<{ q?: string | string[] }> };

export default async function SearchPage({ searchParams }: Props) {
  const raw = (await searchParams).q;
  const q = (Array.isArray(raw) ? raw[0] : raw)?.slice(0, 80) ?? "";
  return (
    <div className="container">
      <div className="page-head">
        <Breadcrumb items={[{ name: "Cerca", path: "/cerca" }]} />
        <h1>Cerca</h1>
      </div>
      <div className="doc">
        <SearchResults index={getSearchIndex()} initial={q} />
      </div>
    </div>
  );
}
