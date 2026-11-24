"use client";

import type { ReactNode } from "react";

// Pulsante "Vedi su Amazon". Il link è diretto ad Amazon (nessun redirect intermedio);
// al clic inviamo in background un evento anonimo a /api/clic per misurare categorie e posizioni che funzionano.
export function AffiliateLink(props: {
  href: string;
  asin: string;
  category: string;
  position: number;
  placement: "scheda" | "tabella" | "analisi";
  className?: string;
  children: ReactNode;
}) {
  const { href, asin, category, position, placement, className, children } = props;
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      onClick={() => {
        try {
          const body = JSON.stringify({ asin, category, position, placement });
          if (!navigator.sendBeacon?.("/api/clic", new Blob([body], { type: "application/json" }))) {
            void fetch("/api/clic", { method: "POST", body, keepalive: true, headers: { "Content-Type": "application/json" } });
          }
        } catch {
          // Il tracciamento non deve mai bloccare il clic.
        }
      }}
    >
      {children}
    </a>
  );
}
