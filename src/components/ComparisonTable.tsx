import type { SpecField } from "@/lib/types";
import type { CardModel } from "@/lib/view";
import { AffiliateLink } from "./AffiliateLink";

export function ComparisonTable({ products, specs, category }: { products: CardModel[]; specs: SpecField[]; category: string }) {
  const hasPrices = products.some((p) => p.price);
  return (
    <div className="table-wrap" tabIndex={0} role="region" aria-label="Tabella di confronto, scorrevole in orizzontale">
      <table className="compare">
        <caption className="visually-hidden">Confronto tra i prodotti in classifica</caption>
        <thead>
          <tr>
            <th scope="col">Prodotto</th>
            <th scope="col">Stelle</th>
            <th scope="col">Recensioni</th>
            {specs.map((s) => (
              <th scope="col" key={s.key}>{s.label}</th>
            ))}
            {hasPrices && <th scope="col">Prezzo</th>}
            <th scope="col"><span className="visually-hidden">Link</span></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.asin}>
              <th scope="row">
                <span className="pos">{String(p.position).padStart(2, "0")}</span>
                <a href={`#p-${p.asin}`}>{p.brand} {p.model ?? ""}</a>
              </th>
              <td className="num">{p.rating?.text ?? "—"}</td>
              <td className="num">{p.rating?.countText ?? "—"}</td>
              {p.specs.map((s) => (
                <td key={s.key}>{s.value}</td>
              ))}
              {hasPrices && <td className="num">{p.price?.text ?? "su Amazon"}</td>}
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
