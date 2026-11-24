import type { SpecField } from "@/lib/types";
import type { CardModel } from "@/lib/view";
import { AffiliateLink } from "./AffiliateLink";

export function ComparisonTable({ products, specs, category }: { products: CardModel[]; specs: SpecField[]; category: string }) {
  const hasPrices = products.some((p) => p.price);
  const hasRatings = products.some((p) => p.rating);
  // Si mostrano solo le caratteristiche che hanno almeno un valore.
  const columns = specs.filter((s) => products.some((p) => p.specs.find((x) => x.key === s.key)?.value !== "—"));
  return (
    <div className="table-wrap" tabIndex={0} role="region" aria-label="Tabella di confronto, scorrevole in orizzontale">
      <table className="compare">
        <caption className="visually-hidden">Confronto tra i prodotti in classifica</caption>
        <thead>
          <tr>
            <th scope="col">Prodotto</th>
            {hasPrices && <th scope="col">Prezzo</th>}
            {hasRatings && <th scope="col">Stelle</th>}
            {columns.map((s) => <th scope="col" key={s.key}>{s.label}</th>)}
            <th scope="col"><span className="visually-hidden">Link</span></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.asin}>
              <th scope="row">
                <span className="pos">{String(p.position).padStart(2, "0")}</span>
                <a href={`#p-${p.asin}`}>{p.brand}{p.model ? ` ${p.model}` : ""}</a>
              </th>
              {hasPrices && <td className="num">{p.price?.text ?? "su Amazon"}</td>}
              {hasRatings && <td className="num">{p.rating?.text ?? "—"}</td>}
              {columns.map((s) => <td key={s.key}>{p.specs.find((x) => x.key === s.key)?.value}</td>)}
              <td>
                <AffiliateLink href={p.href} asin={p.asin} category={category} position={p.position} placement="tabella" className="link-arrow">
                  Amazon
                </AffiliateLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
