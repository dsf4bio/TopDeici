import type { Metadata } from "next";
import { SITE } from "./config";
import { productUrl } from "./affiliate";
import { displayablePrice } from "./format";
import type { Category, CategoryGuide, MacroCategory, RankedProduct } from "./types";

// Immagine di anteprima per WhatsApp, Facebook, X e gli altri social (1200×630, in public/).
const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630, alt: `${SITE.name}: i 10 migliori prodotti Amazon per ogni categoria` };

export const absolute = (pathname: string) => (pathname === "/" ? SITE.url : `${SITE.url}${pathname}`);

export function pageMetadata(opts: { title: string; description: string; path: string; noindex?: boolean }): Metadata {
  const url = absolute(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: { title: opts.title, description: opts.description, url, siteName: SITE.name, locale: SITE.locale, type: "website", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description, images: [OG_IMAGE.url] },
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
      { "@type": "Organization", "@id": `${SITE.url}/#org`, name: SITE.name, url: SITE.url, logo: `${SITE.url}/icon-512.png` },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        inLanguage: "it-IT",
        publisher: { "@id": `${SITE.url}/#org` },
        // Niente SearchAction: Google ha ritirato la casella di ricerca nei risultati (novembre 2024).
      },
    ],
  };
}

/**
 * Classifica come ItemList. Non usiamo AggregateRating: Google lo vieta
 * per valutazioni raccolte da siti terzi, e le stelle qui vengono da Amazon.
 */
export function rankingJsonLd(category: Category, macro: MacroCategory, ranked: RankedProduct[], guide?: CategoryGuide, now = new Date()) {
  const url = absolute(`/${macro.slug}/${category.slug}`);
  const graph: object[] = [
    {
      "@type": "ItemList",
      "@id": `${url}#classifica`,
      name: `I ${ranked.length} migliori ${category.name.toLowerCase()}`,
      numberOfItems: ranked.length,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: ranked.map((p) => {
        const price = displayablePrice(p, now);
        // Google accetta un "Product" solo con offers, review o aggregateRating. Le stelle sono
        // di Amazon (vietato riusarle) e i prezzi si possono mostrare solo se arrivano dalle API
        // e sono freschi: fino ad allora ogni voce è un semplice elemento di elenco.
        if (!price) {
          return {
            "@type": "ListItem",
            position: p.position,
            name: p.title,
            url: `${url}#p-${p.asin}`,
            ...(p.image ? { image: p.image } : {}),
          };
        }
        return {
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
            offers: {
              "@type": "Offer",
              price: p.price!.value.toFixed(2),
              priceCurrency: "EUR",
              priceValidUntil: new Date(now.getTime() + 86_400_000).toISOString().slice(0, 10),
              availability: "https://schema.org/InStock",
              url: productUrl(p, macro.slug),
              seller: { "@type": "Organization", name: "Amazon.it" },
            },
          },
        };
      }),
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
