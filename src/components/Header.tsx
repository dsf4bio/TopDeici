import Link from "next/link";
import { getDeals, getMacros } from "@/lib/catalog";
import { Logo } from "./Logo";
import { MacroMenu } from "./MacroMenu";

export function Header() {
  const items = getMacros().map(({ slug, code, name }) => ({ slug, code, name }));
  // Il link alle offerte compare solo quando ci sono sconti veri da mostrare.
  const hasDeals = getDeals().length > 0;
  return (
    <header className="site-header">
      <div className="container">
        <Logo />
        <div className="nav">
          <div className="nav-desktop">
            <MacroMenu label="Categorie" items={items} />
            {hasDeals && <Link href="/offerte" className="nav-deals">Offerte</Link>}
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
            <MacroMenu label="Menu" items={items} showDeals={hasDeals} />
          </div>
        </div>
      </div>
    </header>
  );
}
