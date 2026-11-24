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
  return (
    <li className={`pcard${p.position === 1 ? " is-first" : ""}`} id={`p-${p.asin}`}>
      <div className="pcard-rank" aria-label={`Posizione ${p.position}`}>
        <small>N°</small>
        {pos}
      </div>
      <div className="pcard-media">
        {p.image ? (
          // Immagine servita da Amazon: non va ottimizzata né copiata sui nostri server.
          <img src={p.image} alt={p.title} width={220} height={220} loading={p.position <= 2 ? "eager" : "lazy"} decoding="async" referrerPolicy="no-referrer" />
        ) : (
          <span className="noimg">immagine non disponibile</span>
        )}
      </div>
      <div className="pcard-body">
        <div>
          <p className="pcard-brand">
            {p.brand}
            {p.model ? ` · ${p.model}` : ""}
          </p>
          <h3>{p.title}</h3>
        </div>

        <div className="pcard-stats">
          <span className="score" title="Punteggio TopDieci su 100">{p.score.toFixed(1).replace(".", ",")}</span>
          {p.rating && (
            <>
              <Stars value={p.rating.average} label={`${p.rating.text} stelle su 5`} />
              <span>
                <b>{p.rating.text}</b>/5
              </span>
              <span>{p.rating.countText} recensioni</span>
            </>
          )}
        </div>

        {p.specs.some((s) => s.value !== "—") && (
          <dl className="pcard-specs">
            {p.specs.map((s) => (
              <div key={s.key}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {(p.strengths.length > 0 || p.weaknesses.length > 0) && (
          <div className="proscons">
            {p.strengths.length > 0 && (
              <div className="pro">
                <h4>Punti di forza</h4>
                <ul>{p.strengths.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            )}
            {p.weaknesses.length > 0 && (
              <div className="con">
                <h4>Limiti</h4>
                <ul>{p.weaknesses.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            )}
          </div>
        )}

        <details>
          <summary>Come è calcolato il punteggio</summary>
          <dl>
            <dt>Valutazione corretta</dt>
            <dd>{p.breakdown.adjusted} stelle (media bayesiana)</dd>
            <dt>Componente valutazione</dt>
            <dd>{p.breakdown.rating}/100</dd>
            <dt>Volume recensioni</dt>
            <dd>{p.breakdown.volume}/100</dd>
            <dt>Giudizio redazione</dt>
            <dd>{p.breakdown.editorial}/100</dd>
            {p.rating && (
              <>
                <dt>Dati verificati</dt>
                <dd>{p.rating.checked}</dd>
              </>
            )}
          </dl>
        </details>

        <div className="pcard-buy">
          <p className="price">
            {p.price ? (
              <>
                <strong>{p.price.text}</strong>
                <small>prezzo Amazon al {p.price.at}, può variare</small>
              </>
            ) : (
              <small>Prezzo aggiornato su Amazon.it</small>
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
