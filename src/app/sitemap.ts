import type { MetadataRoute } from "next";
import { categoryPath, getCategories, getMacros, isIndexable, lastUpdated } from "@/lib/catalog";
import { absolute } from "@/lib/seo";

// Generata a ogni build: contiene solo le pagine indicizzabili.
export default function sitemap(): MetadataRoute.Sitemap {
  const categories = getCategories().filter((c) => isIndexable(c.slug));
  const newest = categories.map((c) => lastUpdated(c.slug)).filter(Boolean).sort().at(-1);
  const pages: MetadataRoute.Sitemap = [
    { url: absolute("/"), lastModified: newest, changeFrequency: "daily", priority: 1 },
    { url: absolute("/categorie"), changeFrequency: "weekly", priority: 0.7 },
    { url: absolute("/metodologia"), changeFrequency: "monthly", priority: 0.5 },
    ...["/chi-siamo", "/affiliazione", "/privacy", "/cookie", "/termini"].map((p) => ({ url: absolute(p), priority: 0.2 })),
    ...getMacros().map((m) => ({ url: absolute(`/${m.slug}`), changeFrequency: "weekly" as const, priority: 0.6 })),
    ...categories.map((c) => ({
      url: absolute(categoryPath(c)),
      lastModified: lastUpdated(c.slug),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
  return pages;
}
