import Link from "next/link";
import { getMacros } from "@/lib/catalog";
import { Logo } from "./Logo";

function MacroMenu({ label }: { label: string }) {
  return (
    <details className="menu">
      <summary>{label}</summary>
      <nav className="menu-panel" aria-label="Aree">
        {getMacros().map((m) => (
          <Link key={m.slug} href={`/${m.slug}`}>
            <span>{m.code}</span>
            <span>{m.name}</span>
          </Link>
        ))}
        <Link href="/categorie">
          <span>100+</span>
          <span>Tutte le categorie</span>
        </Link>
      </nav>
    </details>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Logo />
        <div className="nav">
          <div className="nav-desktop">
            <MacroMenu label="Categorie" />
            <Link href="/cerca" className="nav-search" aria-label="Cerca">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              Cerca una categoria
            </Link>
          </div>
          <div className="nav-mobile">
            <Link href="/cerca" className="nav-search" aria-label="Cerca">
              Cerca
            </Link>
          </div>
          <div className="nav-mobile">
            <MacroMenu label="Menu" />
          </div>
        </div>
      </div>
    </header>
  );
}
