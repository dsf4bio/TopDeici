import { DocPage } from "@/components/DocPage";
import { SITE } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Condizioni d'uso",
  description: "Condizioni d'uso del sito TopDieci.",
  path: "/termini",
});

export default function TermsPage() {
  return (
    <DocPage title="Condizioni d'uso" path="/termini" eyebrow="Note legali" updated="26 novembre 2026">
      <h2>Chi gestisce il sito</h2>
      <p>{SITE.name} ({SITE.domain}) è gestito da {SITE.owner}, persona fisica. Contatti: <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.</p>
      <h2>Natura dei contenuti</h2>
      <p>
        Classifiche, analisi e guide hanno scopo informativo e riflettono i criteri descritti nella pagina Metodologia. Non
        costituiscono una garanzia sulle caratteristiche dei prodotti: prima dell&apos;acquisto verifica sempre la scheda del venditore.
      </p>
      <h2>Prezzi e disponibilità</h2>
      <p>
        I prezzi mostrati sono quelli rilevati da Amazon alla data e all&apos;ora indicate e possono cambiare in qualsiasi momento. Fa
        fede il prezzo indicato su Amazon.it al momento dell&apos;acquisto. Gli acquisti avvengono su Amazon e sono regolati dalle sue
        condizioni di vendita: {SITE.name} non è parte del contratto.
      </p>
      <h2>Proprietà dei contenuti</h2>
      <p>
        Testi, grafica e codice del sito appartengono al titolare. Nomi, marchi e immagini dei prodotti appartengono ai rispettivi
        proprietari; le immagini sono fornite da Amazon tramite le sue API.
      </p>
      <h2>Responsabilità</h2>
      <p>Il titolare cura con attenzione i contenuti ma non risponde di errori nei dati forniti da terzi o di danni derivanti dall&apos;uso dei prodotti.</p>
      <h2>Legge applicabile</h2>
      <p>Le presenti condizioni sono regolate dalla legge italiana. Restano salvi i diritti riconosciuti al consumatore dal Codice del Consumo.</p>
    </DocPage>
  );
}
