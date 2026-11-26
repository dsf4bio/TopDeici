import { DocPage } from "@/components/DocPage";
import { SITE } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy policy",
  description: "Informativa sul trattamento dei dati personali dei visitatori di TopDieci.",
  path: "/privacy",
});

// Modello da far verificare a un consulente prima della pubblicazione: le parti evidenziate vanno completate.
export default function PrivacyPage() {
  return (
    <DocPage title="Privacy policy" path="/privacy" eyebrow="Informativa ai sensi degli artt. 13–14 del Regolamento UE 2016/679" updated="26 novembre 2026">
      <h2>Titolare del trattamento</h2>
      <p>
        {SITE.owner}, email <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
      </p>
      <h2>Quali dati trattiamo</h2>
      <ul>
        <li>
          <strong>Dati tecnici di navigazione.</strong> Il nostro fornitore di hosting (Vercel Inc.) registra automaticamente
          indirizzo IP, data e ora, pagina richiesta e tipo di browser, per garantire il funzionamento e la sicurezza del sito.
        </li>
        <li>
          <strong>Statistiche sui clic verso Amazon.</strong> Quando premi &ldquo;Vedi su Amazon&rdquo; registriamo in forma anonima quale
          prodotto, categoria e posizione hai scelto. Non salviamo indirizzo IP né identificativi del dispositivo e non usiamo cookie.
        </li>
        <li><strong>Dati che ci invii</strong> scrivendo all&apos;indirizzo email del titolare.</li>
      </ul>
      <h2>Finalità e basi giuridiche</h2>
      <ul>
        <li>Erogazione e sicurezza del sito: legittimo interesse del titolare (art. 6.1.f GDPR).</li>
        <li>Statistiche aggregate sui clic: legittimo interesse a migliorare i contenuti; i dati sono anonimi.</li>
        <li>Risposta alle richieste via email: esecuzione di misure richieste dall&apos;interessato (art. 6.1.b GDPR).</li>
      </ul>
      <h2>Amazon</h2>
      <p>
        Cliccando su un link verso Amazon.it lasci il nostro sito. Da quel momento i tuoi dati sono trattati da Amazon secondo la
        propria informativa privacy, che ti invitiamo a consultare su Amazon.it.
      </p>
      <p>
        Le foto dei prodotti sono caricate dai server di immagini di Amazon (m.media-amazon.com). Per mostrarle, il tuo browser
        comunica a quei server il proprio indirizzo IP, come per qualsiasi immagine su internet; non inviamo l&apos;indirizzo della
        pagina che stai visitando e su quelle immagini non vengono impostati cookie.
      </p>
      <h2>Destinatari e trasferimenti</h2>
      <p>
        I dati tecnici sono trattati da Vercel Inc. in qualità di responsabile del trattamento. Il trasferimento verso gli Stati
        Uniti avviene sulla base del EU-U.S. Data Privacy Framework o delle clausole contrattuali standard.
      </p>
      <h2>Conservazione</h2>
      <p>I log tecnici sono conservati per al massimo 30 giorni, secondo le impostazioni del fornitore di hosting; le email per il tempo necessario a gestire la richiesta.</p>
      <h2>I tuoi diritti</h2>
      <p>
        Puoi chiedere accesso, rettifica, cancellazione, limitazione e opposizione al trattamento scrivendo al titolare. Hai inoltre
        diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).
      </p>
    </DocPage>
  );
}
