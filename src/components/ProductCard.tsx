import type { CardModel } from "@/lib/view";
import { AffiliateLink } from "./AffiliateLink";

export function Stars({ value, label }: { value: number; label: string }) {
  return (
    <span className="stars" aria-label={label}>
      <span className="stars-bar" aria-hidden="true">
        <i style={{ width: `${(value / 5) * 100}%` }} />
      </span>
    </span>
  );
}

export function ProductCard({ p, category }: { p: CardModel; category: string }) {
  const pos = String(p.position).padStart(2, "0");
  const specs = p.specs.filter((s) => s.value !== "—");
  return (
    <li className={`pcard${p.position === 1 ? " is-first" : ""}${p.image ? "" : " no-media"}`} id={`p-${p.asin}`}>
      <div className="pcard-rank" aria-label={`Posizione ${p.position}`}>
        {pos}
        {p.position === 1 && <small>Il migliore</small>}
      </div>
      {p.image && (
        <AffiliateLink href={p.href} asin={p.asin} category={category} position={p.position} placement="scheda" className="pcard-media">
          {/* Immagine servita da Amazon: non va ottimizzata né copiata sui nostri server. */}
          <img src={p.image} alt={p.title} width={220} height={220} loading={p.position <= 2 ? "eager" : "lazy"} decoding="async" referrerPolicy="no-referrer" />
        </AffiliateLink>
      )}
      <div className="pcard-body">
        <div>
          {p.badge && <p className="pcard-badge" title={p.badge.hint}>{p.badge.label}</p>}
          <p className="pcard-brand">{p.brand}{p.model ? ` · ${p.model}` : ""}</p>
          <h3 title={p.title}>{p.title}</h3>
        </div>

        {p.rating && (
          <p className="pcard-stats">
            <Stars value={p.rating.average} label={`${p.rating.text} stelle su 5`} />
            <span><b>{p.rating.text}</b>/5</span>
            <span>{p.rating.countText} recensioni</span>
          </p>
        )}

        {p.features.length > 0 && (
          <ul className="pcard-features">
            {p.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        )}

        {specs.length > 0 && (
          <dl className="pcard-specs">
            {specs.map((s) => (
              <div key={s.key}><dt>{s.label}</dt><dd>{s.value}</dd></div>
            ))}
          </dl>
        )}

        {p.opinions && (
          <div className="opinions">
            <h4>Cosa dicono le recensioni</h4>
            {p.opinions.positive.length > 0 && (
              <p className="op-pos"><b>Apprezzati:</b> {p.opinions.positive.join(", ")}</p>
            )}
            {p.opinions.mixed.length > 0 && (
              <p className="op-mix"><b>Pareri contrastanti:</b> {p.opinions.mixed.join(", ")}</p>
            )}
            {p.opinions.negative.length > 0 && (
              <p className="op-neg"><b>Da evitare se per te conta:</b> {p.opinions.negative.join(", ").toLowerCase()}</p>
            )}
          </div>
        )}

        {(p.strengths.length > 0 || p.weaknesses.length > 0) && (
          <div className="proscons">
            {p.strengths.length > 0 && (
              <div className="pro"><h4>Punti di forza</h4><ul>{p.strengths.map((s) => <li key={s}>{s}</li>)}</ul></div>
            )}
            {p.weaknesses.length > 0 && (
              <div className="con"><h4>Limiti</h4><ul>{p.weaknesses.map((s) => <li key={s}>{s}</li>)}</ul></div>
            )}
          </div>
        )}

        <div className="pcard-buy">
          <p className="price">
            {p.price ? (
              <>
                <strong>{p.price.text}</strong>
                {p.deal && <em className="deal-tag">−{p.deal.percent}%</em>}
                {p.priceNote && <span className={`price-note is-${p.priceNote.tone}`}>{p.priceNote.text}</span>}
                <small>prezzo Amazon al {p.price.at}, può variare</small>
              </>
            ) : (
              <small>Vedi il prezzo su Amazon.it</small>
            )}
          </p>
          <AffiliateLink href={p.href} asin={p.asin} category={category} position={p.position} placement="scheda" className="btn btn-amazon">
            Vedi su Amazon <span className="arrow" aria-hidden="true">→</span>
          </AffiliateLink>
        </div>
      </div>
    </li>
  );
}
