import Link from "next/link";
import { SearchForm } from "@/components/SearchForm";

export const metadata = { title: "Pagina non trovata", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="container page-head" style={{ borderBottom: 0, paddingBlock: "6rem" }}>
      <p className="eyebrow">Errore 404</p>
      <h1>Questa pagina non è in <span className="num">classifica</span>.</h1>
      <p className="lede">L&apos;indirizzo potrebbe essere cambiato. Prova a cercare la categoria che ti interessa.</p>
      <div className="mt-6"><SearchForm id="q404" /></div>
      <p className="mt-6"><Link href="/categorie" className="link-arrow">Tutte le categorie</Link></p>
    </div>
  );
}
