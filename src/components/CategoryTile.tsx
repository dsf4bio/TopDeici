import Link from "next/link";
import { categoryPath, getMacro, getRanking } from "@/lib/catalog";
import type { Category } from "@/lib/types";

export function CategoryTile({ category, showMacro = false }: { category: Category; showMacro?: boolean }) {
  const count = getRanking(category.slug).ranked.length;
  return (
    <Link href={categoryPath(category)} className="tile reveal">
      {showMacro && <span className="code">{getMacro(category.macro)?.code}</span>}
      <h3>{category.name}</h3>
      <p>{category.summary}</p>
      <span className="meta">
        {count > 0 ? (
          <span className="tag tag-live">Top {count}</span>
        ) : (
          <span className="tag tag-wait">In aggiornamento</span>
        )}
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
