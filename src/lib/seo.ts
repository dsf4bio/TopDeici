import type { Metadata } from "next";
import { SITE } from "./config";
import { productUrl } from "./affiliate";
import type { Category, CategoryGuide, MacroCategory, RankedProduct } from "./types";

export const absolute = (pathname: string) => (pathname === "/" ? SITE.url : `${SITE.url}${pathname}`);

export function pageMetadata(opts: { title: string; description: string; path: string; noindex?: boolean }): Metadata {
  const url = absolute(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: { title: opts.title, description: opts.description, url, siteName: SITE.name, locale: SITE.locale, type: "website" },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  };
}

type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: absolute(c.path) })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        inLanguage: "it-IT",
        publisher: { "@id": `${SITE.url}/#org` },
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${SITE.url}/cerca?q={q}` },
          "query-input": "required name=q",
        },
      },
    ],
  };
}

/**
 * Classifica come ItemList di prodotti. Non usiamo AggregateRating: Google lo vieta
 * per valutazioni raccolte da siti terzi, e le stelle qui vengono da Amazon.
 */
export function rankingJsonLd(category: Category, macro: MacroCategory, ranked: RankedProduct[], guide?: CategoryGuide) {
  const url = absolute(`/${macro.slug}/${category.slug}`);
  const graph: object[] = [
    {
      "@type": "ItemList",
      "@id": `${url}#classifica`,
      name: `I ${ranked.length} migliori ${category.name.toLowerCase()}`,
      numberOfItems: ranked.length,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: ranked.map((p) => ({
        "@type": "ListItem",
        position: p.position,
        url: `${url}#p-${p.asin}`,
        item: {
          "@type": "Product",
          name: p.title,
          brand: { "@type": "Brand", name: p.brand },
          ...(p.model ? { model: p.model } : {}),
          ...(p.image ? { image: p.image } : {}),
          sku: p.asin,
          url: productUrl(p, macro.slug),
        },
      })),
    },
  ];
  if (guide?.faq.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: guide.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
