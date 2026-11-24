import Link from "next/link";
import { AffiliateLink } from "@/components/AffiliateLink";
import { Breadcrumb } from "@/components/Breadcrumb";
import { categoryPath, getDeals } from "@/lib/catalog";
import { productUrl } from "@/lib/affiliate";
import { displayablePrice } from "@/lib/format";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 3600; // 1 ora: le offerte con prezzo più vecchio di 24 ore spariscono da sole

export function generateMetadata() {
  return pageMetadata({
    title: "Offerte vere sui prodotti in classifica",
    description: "Solo sconti reali, di almeno il 10%, sui prodotti già selezionati nelle classifiche TopDieci. Niente prodotti scadenti in offerta.",
    path: "/offerte",
    // Senza offerte la pagina è vuota: meglio non farla indicizzare.
    noindex: getDeals().length === 0,
  });
}

export default function DealsPage() {
  const now = new Date();
  const deals = getDeals(now).slice(0, 60);
  return (
    <>
      <div className="container page-head">
        <Breadcrumb items={[{ name: "Offerte", path: "/offerte" }]} />
        <h1>Offerte vere, solo su prodotti che valgono</h1>
        <p className="lede">
          Qui trovi solo i prodotti già nelle nostre classifiche, con uno sconto reale di almeno il 10%
          rispetto al prezzo indicato da Amazon o alla media dei prezzi che abbiamo rilevato nell&apos;ultimo mese.
        </p>
      </div>
      <section className="section">
        <div className="container">
          {deals.length === 0 ? (
            <div className="empty-deals">
              <p><strong>In questo momento non ci sono sconti che superano i nostri controlli.</strong></p>
              <p>Preferiamo una pagina vuota a un&apos;offerta finta. Nel frattempo scegli dalle <Link href="/categorie">classifiche</Link>.</p>
            </div>
          ) : (
            <ol className="deal-list">
              {deals.map(({ category, product, deal }) => {
                const price = displayablePrice(product, now)!;
                const href = productUrl(product, category.macro);
                return (
                  <li key={product.asin} className="deal-row">
                    {product.image && <img src={product.image} alt="" width={96} height={96} loading="lazy" referrerPolicy="no-referrer" />}
                    <div>
                      <p className="pcard-brand"><Link href={categoryPath(category)}>{category.name}</Link> · n. {product.position} in classifica</p>
                      <h2 className="deal-title">{product.title}</h2>
                      <p className="price">
                        <strong>{price.text}</strong> <em className="deal-tag">−{deal.percent}%</em>
                        <small>{deal.reason === "barrato" ? "rispetto al prezzo indicato da Amazon" : "rispetto alla media dell'ultimo mese"} · prezzo al {price.at}, può variare</small>
                      </p>
                    </div>
                    <AffiliateLink href={href} asin={product.asin} category={category.slug} position={product.position} placement="scheda" className="btn btn-amazon">
                      Vedi su Amazon <span className="arrow" aria-hidden="true">→</span>
                    </AffiliateLink>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </section>
    </>
  );
}
