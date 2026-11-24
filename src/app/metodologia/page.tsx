import Link from "next/link";
import { DocPage } from "@/components/DocPage";
import { PRICE, RANKING } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Come scegliamo i prodotti",
  description: "I criteri e la formula con cui TopDieci costruisce le classifiche: requisiti minimi, media bayesiana, peso delle recensioni e giudizio editoriale.",
  path: "/metodologia",
});

const pct = (n: number) => `${Math.round(n * 100)}%`;
const r = String(RANKING.minRating).replace(".", ",");

export default function MethodologyPage() {
  const w = RANKING.weights;
  return (
    <DocPage
      title="Come scegliamo i prodotti"
      path="/metodologia"
      eyebrow="Metodologia"
      lede="Ogni classifica segue le stesse regole, pubblicate qui per intero. Se un prodotto è in lista, puoi sapere esattamente perché."
    >
      <h2>1. Requisiti minimi</h2>
      <p>Un prodotto entra tra i candidati solo se rispetta tutte queste condizioni:</p>
      <ul>
        <li>prezzo di almeno <strong>{RANKING.minPrice} €</strong>;</li>
        <li>valutazione media degli utenti Amazon <strong>superiore a {r} su 5</strong>;</li>
        <li>un numero di recensioni <strong>alto rispetto agli altri prodotti della categoria</strong>: almeno {RANKING.minReviewsFloor} e almeno il {pct(RANKING.minReviewsShareOfMedian)} della mediana dei candidati (alcune categorie hanno una soglia fissata dalla redazione);</li>
        <li>dati di prezzo e valutazione verificati negli ultimi <strong>{RANKING.maxDataAgeDays} giorni</strong>;</li>
        <li>pertinenza con la categoria e disponibilità su Amazon.it.</li>
      </ul>
      <p>Chi non rispetta un requisito resta fuori. Se i prodotti idonei sono meno di {RANKING.size}, la classifica è più corta: non la completiamo con prodotti peggiori.</p>

      <h2>2. Valutazione corretta (media bayesiana)</h2>
      <p>
        Una media di 4,9 stelle su 80 recensioni è meno affidabile di 4,7 su 20.000. Per questo avviciniamo la valutazione di
        ogni prodotto alla media della categoria, tanto più quanto meno recensioni ha:
      </p>
      <p className="formula">
        valutazione corretta = (n × R + m × C) / (n + m)<br />
        R = media del prodotto · n = sue recensioni<br />
        C = media dei candidati · m = mediana delle recensioni dei candidati
      </p>

      <h2>3. Punteggio finale</h2>
      <p>Il punteggio, da 0 a 100, combina tre componenti:</p>
      <ul>
        <li><strong>{pct(w.rating)} valutazione corretta</strong>, riportata su una scala in cui {r} stelle vale 0 e 5 stelle vale 100;</li>
        <li><strong>{pct(w.volume)} volume di recensioni</strong>, in scala logaritmica rispetto al prodotto più recensito della categoria: contano gli ordini di grandezza, non le singole unità;</li>
        <li><strong>{pct(w.editorial)} giudizio della redazione</strong> su reputazione del marchio, qualità costruttiva, assistenza e rapporto qualità-prezzo.</li>
      </ul>
      <p>
        Il giudizio della redazione pesa poco di proposito: serve a distinguere prodotti con dati simili, non a ribaltare ciò che
        dicono gli acquirenti. Accanto a ogni prodotto trovi il dettaglio del suo punteggio.
      </p>

      <h2>4. Dati e aggiornamenti</h2>
      <ul>
        <li>Titoli, immagini, prezzi e disponibilità arrivano dalle API ufficiali di Amazon e vengono aggiornati ogni giorno.</li>
        <li>Valutazioni e numero di recensioni sono rilevati dalla redazione su Amazon.it, con la data della verifica.</li>
        <li>Mostriamo un prezzo solo se è stato aggiornato nelle ultime {PRICE.maxAgeHours} ore, con data e ora; altrimenti ti rimandiamo ad Amazon.</li>
        <li>Quando un prodotto non rispetta più i requisiti, esce dalla classifica al successivo aggiornamento.</li>
      </ul>

      <h2>5. Cosa non facciamo</h2>
      <ul>
        <li>Non accettiamo pagamenti dai produttori per entrare o salire in classifica.</li>
        <li>Non scriviamo recensioni false né inventiamo dati.</li>
        <li>Le commissioni di affiliazione non influiscono sul punteggio. <Link href="/affiliazione">Come funzionano i link affiliati</Link>.</li>
      </ul>
    </DocPage>
  );
}
