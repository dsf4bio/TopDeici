import { notFound } from "next/navigation";
import { ComparisonTable } from "@/components/ComparisonTable";
import { RankingBoard } from "@/components/RankingBoard";
import { getCategory } from "@/lib/catalog";
import { rankCategory } from "@/lib/ranking";
import type { Product } from "@/lib/types";
import { toCardModel } from "@/lib/view";
import { assignBadges } from "@/lib/insights";

// Pagina di lavoro per il design delle schede: esiste solo in sviluppo (npm run dev) e usa
// dati DI ESEMPIO dichiaratamente fittizi. In produzione risponde 404.
export const metadata = { title: "Anteprima componenti", robots: { index: false, follow: false } };

const now = new Date();
const iso = now.toISOString();
const sample = (i: number, over: Partial<Product>): Product => ({
  asin: `ESEMPIO${String(i).padStart(3, "0")}`,
  category: "friggitrici-ad-aria",
  title: `Prodotto di esempio ${i}`,
  brand: `Marca ${String.fromCharCode(64 + i)}`,
  model: `Modello X${i}`,
  price: { value: 49 + i * 17, currency: "EUR", checkedAt: iso, source: "api" },
  rating: { average: 4.9 - i * 0.05, count: 30000 - i * 2500, checkedAt: iso, source: "manual" },
  specs: { capacita: `${4 + (i % 3)} L`, potenza: 1500 + i * 50, cestelli: i % 2 ? 1 : 2, programmi: 6 + i },
  strengths: ["Esempio di punto di forza", "Secondo punto di forza di prova"],
  weaknesses: ["Esempio di limite"],
  editorialScore: 0.5 + (i % 3) / 10,
  ...over,
});

export default function PreviewPage() {
  if (process.env.NODE_ENV === "production") notFound();
  const category = getCategory("friggitrici-ad-aria")!;
  const { ranked } = rankCategory(Array.from({ length: 6 }, (_, i) => sample(i + 1, {})), category, now);
  const badges = assignBadges(ranked);
  const cards = ranked.map((p) => ({ ...toCardModel(p, category, now, badges.get(p.asin)), href: "#" }));
  return (
    <>
      <div className="preview-banner"><p>ANTEPRIMA DI SVILUPPO · DATI DI ESEMPIO FITTIZI · NON PUBBLICATA</p></div>
      <div className="container doc">
        <RankingBoard products={cards} category={category.slug} />
        <div className="mt-6"><ComparisonTable products={cards} specs={category.specs} category={category.slug} /></div>
      </div>
    </>
  );
}
