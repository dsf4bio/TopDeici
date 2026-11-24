import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export type Crumb = { name: string; path: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav className="breadcrumb" aria-label="Percorso">
      <ol>
        {all.map((c, i) =>
          i === all.length - 1 ? (
            <li key={c.path} aria-current="page">{c.name}</li>
          ) : (
            <li key={c.path}><Link href={c.path}>{c.name}</Link></li>
          ),
        )}
      </ol>
      <JsonLd data={breadcrumbJsonLd(all)} />
    </nav>
  );
}
