import { DocPage } from "@/components/DocPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie policy",
  description: "Quali cookie usa TopDieci: nessun cookie di profilazione né di statistica.",
  path: "/cookie",
});

export default function CookiePage() {
  return (
    <DocPage title="Cookie policy" path="/cookie" eyebrow="Cookie e tecnologie simili" updated="24 novembre 2026">
      <p>
        TopDieci non installa cookie di profilazione, pubblicitari o di statistica e non carica strumenti di terze parti che li
        utilizzano. Per questo non ti chiediamo un consenso all&apos;ingresso.
      </p>
      <h2>Cosa può essere memorizzato sul tuo dispositivo</h2>
      <ul>
        <li>Cookie o archivi tecnici strettamente necessari al funzionamento del sito e alla sua sicurezza, gestiti dall&apos;hosting.</li>
      </ul>
      <h2>Statistiche sui clic</h2>
      <p>
        Misuriamo quante volte vengono premuti i pulsanti verso Amazon con una richiesta anonima al nostro server, senza cookie e
        senza identificativi del dispositivo.
      </p>
      <h2>Amazon</h2>
      <p>
        Quando apri un link verso Amazon.it, Amazon può impostare propri cookie, anche per attribuirci l&apos;eventuale acquisto. Questi
        cookie sono gestiti da Amazon sul proprio sito e sono regolati dalla sua informativa.
      </p>
      <h2>Se in futuro aggiungeremo altri strumenti</h2>
      <p>Prima di usare cookie non tecnici aggiorneremo questa pagina e ti chiederemo il consenso, come previsto dalle Linee guida del Garante del 10 giugno 2021.</p>
    </DocPage>
  );
}
