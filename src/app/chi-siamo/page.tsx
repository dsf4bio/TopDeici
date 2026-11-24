import Link from "next/link";
import { DocPage, Fill } from "@/components/DocPage";
import { SITE } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Chi siamo",
  description: "Il progetto TopDieci: classifiche dei migliori prodotti Amazon costruite con criteri pubblici.",
  path: "/chi-siamo",
});

export default function AboutPage() {
  return (
    <DocPage title="Chi siamo" path="/chi-siamo" eyebrow="Il progetto" lede="Meno tempo a confrontare schede, più fiducia nella scelta.">
      <p>
        TopDieci nasce da un&apos;idea semplice: su Amazon ci sono migliaia di prodotti per ogni esigenza, ma chi deve comprare vuole
        sapere quali sono i pochi davvero affidabili. Per ogni categoria costruiamo una classifica con regole pubbliche e la
        accompagniamo con una guida che spiega cosa conta davvero.
      </p>
      <h2>Come lavoriamo</h2>
      <ul>
        <li>Le regole sono le stesse per tutte le categorie e sono scritte nella pagina <Link href="/metodologia">Metodologia</Link>.</li>
        <li>I testi sono scritti dalla redazione: non ricopiamo le schede dei produttori.</li>
        <li>I dati hanno sempre una data di verifica. Se sono vecchi, il prodotto esce dalla classifica finché non li ricontrolliamo.</li>
      </ul>
      <h2>La redazione</h2>
      <p><Fill>[Presenta qui chi scrive e cura le classifiche: nomi, competenze, contatti. È un elemento importante per la credibilità e per Google.]</Fill></p>
      <h2>Contatti</h2>
      <p>Segnalazioni, correzioni e proposte: <Fill>{SITE.contactEmail}</Fill>.</p>
    </DocPage>
  );
}
