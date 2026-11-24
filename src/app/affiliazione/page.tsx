import { DocPage } from "@/components/DocPage";
import { SITE } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Link affiliati",
  description: "Come funzionano i link affiliati Amazon su TopDieci e perché non influenzano le classifiche.",
  path: "/affiliazione",
});

export default function AffiliatePage() {
  return (
    <DocPage title="Link affiliati" path="/affiliazione" eyebrow="Trasparenza" updated="24 novembre 2026">
      <p>
        <strong>In qualità di Affiliato Amazon, {SITE.name} riceve un guadagno dagli acquisti idonei.</strong> {SITE.name} partecipa
        al Programma Affiliazione Amazon EU, un programma di affiliazione che consente ai siti di percepire una commissione
        pubblicitaria pubblicizzando e fornendo link al sito Amazon.it.
      </p>
      <h2>Cosa significa per te</h2>
      <ul>
        <li>I pulsanti &ldquo;Vedi su Amazon&rdquo; e gli altri link verso Amazon.it contengono il nostro codice di affiliazione.</li>
        <li>Se acquisti dopo aver cliccato, Amazon ci riconosce una piccola percentuale. Il prezzo che paghi non cambia.</li>
        <li>I link sono marcati come sponsorizzati, come richiesto dalle linee guida dei motori di ricerca.</li>
      </ul>
      <h2>Perché non influenzano le classifiche</h2>
      <p>
        Le posizioni sono calcolate con la formula pubblicata nella pagina Metodologia, a partire da prezzo, valutazioni e numero
        di recensioni. La commissione che Amazon riconosce per un prodotto non è tra i dati usati nel calcolo.
      </p>
      <h2>Prezzi e disponibilità</h2>
      <p>
        Prezzi e disponibilità sono accurati alla data e all&apos;ora indicate e sono soggetti a modifica. Qualsiasi informazione su
        prezzo e disponibilità visualizzata su Amazon.it al momento dell&apos;acquisto si applicherà all&apos;acquisto del prodotto.
      </p>
    </DocPage>
  );
}
