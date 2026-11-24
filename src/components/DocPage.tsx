import type { ReactNode } from "react";
import { Breadcrumb } from "./Breadcrumb";

export function DocPage({ title, path, eyebrow, lede, updated, children }: {
  title: string;
  path: string;
  eyebrow?: string;
  lede?: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="container">
      <div className="page-head">
        <Breadcrumb items={[{ name: title, path }]} />
        {eyebrow && <p className="eyebrow mt-6">{eyebrow}</p>}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {updated && <p className="mono muted mt-4" style={{ fontSize: "0.75rem" }}>Ultimo aggiornamento: {updated}</p>}
      </div>
      <article className="doc">{children}</article>
    </div>
  );
}

/** Evidenzia i dati che il titolare deve completare prima della pubblicazione. */
export const Fill = ({ children }: { children: ReactNode }) => <span className="placeholder">{children}</span>;
