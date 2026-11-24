// Gestione centralizzata dei link affiliati Amazon.
// Tutti i pulsanti "Vedi su Amazon" passano da qui: per cambiare tag o struttura del link
// basta modificare questo file.

const MARKETPLACE = "https://www.amazon.it";

/** ID di tracciamento Amazon Associates del sito. Si può sovrascrivere con la variabile AMAZON_ASSOCIATE_TAG. */
export const DEFAULT_TAG = "topdieci26-21";

/**
 * ID di tracciamento per macro-categoria, facoltativi.
 * In Associates Central puoi creare più ID (es. topdieci-cucina-21) e vedere
 * in quale area del sito nascono le vendite. Se una macro non è qui si usa il tag principale.
 */
const TRACKING_BY_MACRO: Record<string, string> = {
  // cucina: "topdieci-cucina-21",
};

export function affiliateTag(macro?: string): string {
  return (macro && TRACKING_BY_MACRO[macro]) || process.env.AMAZON_ASSOCIATE_TAG || DEFAULT_TAG;
}

export function amazonUrl(asin: string, macro?: string): string {
  const url = new URL(`/dp/${encodeURIComponent(asin)}`, MARKETPLACE);
  url.searchParams.set("tag", affiliateTag(macro));
  return url.toString();
}

/** Attributi obbligatori per un link sponsorizzato. */
export const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";

/** Estrae l'ASIN da un link Amazon completo (/dp/ASIN, /gp/product/ASIN, /gp/aw/d/ASIN). */
export function extractAsin(link: string): string | undefined {
  const m = link.match(/\/(?:dp|gp\/product|gp\/aw\/d|exec\/obidos\/asin)\/([A-Z0-9]{10})(?:[/?#]|$)/i);
  return m ? m[1]!.toUpperCase() : undefined;
}

/** Link del pulsante "Vedi su Amazon": sempre con il nostro tag, quando è possibile aggiungerlo. */
export function productUrl(p: { asin: string; url?: string }, macro?: string): string {
  if (!p.url) return amazonUrl(p.asin, macro);
  const asin = extractAsin(p.url);
  if (asin) return amazonUrl(asin, macro);
  try {
    // Link corti (amzn.to, amzn.eu): li usiamo così come sono. Quelli creati con SiteStripe contengono già il tag.
    const u = new URL(p.url);
    if (/(^|\.)amazon\.it$/.test(u.hostname)) u.searchParams.set("tag", affiliateTag(macro));
    return u.toString();
  } catch {
    return amazonUrl(p.asin, macro);
  }
}
