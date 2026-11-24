"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export type MenuItem = { slug: string; code: string; name: string };

export function MacroMenu({ label, items }: { label: string; items: MenuItem[] }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  const close = () => {
    if (ref.current) ref.current.open = false;
  };

  // Chiude il menu a ogni cambio pagina (anche con tasto indietro).
  useEffect(() => {
    close();
  }, [pathname]);

  // Chiude cliccando fuori dal menu o premendo Esc.
  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      const el = ref.current;
      if (el?.open && !el.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && ref.current?.open) {
        close();
        ref.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <details className="menu" ref={ref}>
      <summary>{label}</summary>
      <nav className="menu-panel" aria-label="Aree">
        {items.map((m) => (
          <Link key={m.slug} href={`/${m.slug}`} onClick={close}>
            <span>{m.code}</span>
            <span>{m.name}</span>
          </Link>
        ))}
        <Link href="/categorie" onClick={close}>
          <span>150+</span>
          <span>Tutte le categorie</span>
        </Link>
      </nav>
    </details>
  );
}
