import Link from "next/link";
import { DocPage } from "@/components/DocPage";
import { PRICE, RANKING } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Come funziona la classifica",
  description: "Da dove arrivano i prodotti delle classifiche TopDieci e come vengono ordinati.",
  path: "/metodologia",
});

export default function MethodologyPage() {
  return (
    <DocPage title="Come funziona la classifica" path="/metodologia" eyebrow="Trasparenza">
      <h2>Da dove arrivano i prodotti</h2>
      <p>
        Ogni giorno cerchiamo su Amazon.it i prodotti di ogni categoria tramite le API ufficiali di Amazon. Prendiamo solo
        prodotti nuovi e disponibili, con un prezzo di almeno {RANKING.minPrice} €, una valutazione media degli acquirenti di
        almeno 4,4 stelle su 5 e più di 100 recensioni.
      </p>
      <h2>Come li ordiniamo</h2>
      <ul>
        <li><strong>Opinioni degli acquirenti</strong>: conta di più chi Amazon mette in alto quando ordina i prodotti per recensioni.</li>
        <li><strong>Popolarità</strong>: la posizione nella classifica vendite di Amazon, per premiare i prodotti scelti da molte persone e non quelli con poche recensioni entusiaste.</li>
        <li><strong>Giudizio della redazione</strong>, con un peso ridotto, su qualità e rapporto qualità-prezzo.</li>
      </ul>
      <p>
        Stelle e numero di recensioni vengono verificati dalla redazione su Amazon.it: ogni prodotto deve avere una media di
        almeno 4,4 stelle e più di 100 recensioni.
      </p>
      <p>Al massimo 10 prodotti per categoria. Se i prodotti validi sono meno, la classifica è più corta.</p>
      <h2>Aggiornamenti e prezzi</h2>
      <ul>
        <li>Le classifiche vengono ricalcolate ogni giorno: un prodotto che non è più disponibile o non rispetta più i requisiti esce.</li>
        <li>Mostriamo un prezzo solo se è stato aggiornato da Amazon nelle ultime {PRICE.maxAgeHours} ore, con data e ora.</li>
        <li>Nessun produttore paga per entrare in classifica e le commissioni di affiliazione non influiscono sull&apos;ordine. <Link href="/affiliazione">Come funzionano i link affiliati</Link>.</li>
      </ul>
    </DocPage>
  );
}
