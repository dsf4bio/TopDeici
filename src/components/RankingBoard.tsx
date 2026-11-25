import type { CardModel } from "@/lib/view";
import { ProductCard } from "./ProductCard";

// Classifica: solo 10 prodotti, nell'ordine ufficiale. Niente filtri né ordinamenti:
// con una lista così corta basta scorrerla.
export function RankingBoard({ products, category }: { products: CardModel[]; category: string }) {
  if (!products.length) return <p className="pending">Classifica in preparazione.</p>;
  return (
    <ol className="ranking">
      {products.map((p) => (
        <ProductCard key={p.asin} p={p} category={category} />
      ))}
    </ol>
  );
}
