import Link from "next/link";
import { getMacros } from "@/lib/catalog";
import { SITE } from "@/lib/config";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cols">
          <div className="stack">
            <Logo />
            <p>I 10 migliori prodotti Amazon per ogni categoria, aggiornati ogni giorno.</p>
          </div>
          <nav aria-label="Aree">
            <h2>Aree</h2>
            <ul>
              {getMacros().slice(0, 5).map((m) => (
                <li key={m.slug}><Link href={`/${m.slug}`}>{m.name}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Altre aree">
            <h2>&nbsp;</h2>
            <ul>
              {getMacros().slice(5).map((m) => (
                <li key={m.slug}><Link href={`/${m.slug}`}>{m.name}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Informazioni">
            <h2>Il progetto</h2>
            <ul>
              <li><Link href="/metodologia">Come funziona la classifica</Link></li>
              <li><Link href="/chi-siamo">Chi siamo</Link></li>
              <li><Link href="/affiliazione">Link affiliati</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/cookie">Cookie</Link></li>
              <li><Link href="/termini">Condizioni d&apos;uso</Link></li>
            </ul>
          </nav>
        </div>
        <p className="affiliate-box">
          In qualità di Affiliato Amazon, {SITE.name} riceve un guadagno dagli acquisti idonei; per te il prezzo non cambia.{" "}
          <Link href="/affiliazione">Dettagli</Link>
        </p>
        <div className="legal-line">
          <span>© {year} {SITE.domain}</span>
          <span>Amazon e il logo Amazon sono marchi di Amazon.com, Inc. o delle sue affiliate.</span>
        </div>
      </div>
    </footer>
  );
}
