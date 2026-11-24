// Tipi condivisi da pagine, script e sistema di classificazione.

export type MacroCategory = {
  slug: string;
  name: string;
  /** Una riga che descrive la macro-categoria. */
  tagline: string;
  /** Codice breve mostrato nell'interfaccia (es. "TEC"). */
  code: string;
};

/** Una caratteristica tecnica confrontabile dentro una categoria. */
export type SpecField = {
  key: string;
  label: string;
  /** Unità mostrata dopo il valore, se serve (es. "W", "L"). */
  unit?: string;
};

export type Category = {
  slug: string;
  macro: string;
  name: string;
  /** Descrizione breve, originale, usata in elenchi e meta description. */
  summary: string;
  specs: SpecField[];
  /** Soglia minima di recensioni per questa categoria; se assente si usa quella automatica. */
  minReviews?: number;
};

/** Contenuto editoriale completo di una categoria (guida all'acquisto). */
export type CategoryGuide = {
  slug: string;
  /** Data dell'ultima revisione del testo (AAAA-MM-GG). */
  reviewedAt: string;
  intro: string[];
  types: { name: string; text: string }[];
  considerations: { name: string; text: string }[];
  buyingGuide: { profile: string; text: string }[];
  faq: { q: string; a: string }[];
};

export type DataSource = "api" | "manual";

export type Product = {
  asin: string;
  category: string;
  title: string;
  brand: string;
  model?: string;
  /** URL immagine fornito da Amazon (non va scaricato né ospitato altrove). */
  image?: string;
  price?: {
    value: number;
    currency: "EUR";
    /** ISO 8601 */
    checkedAt: string;
    source: DataSource;
  };
  rating?: {
    average: number;
    count: number;
    /** ISO 8601 */
    checkedAt: string;
    source: DataSource;
  };
  specs?: Record<string, string | number | boolean>;
  strengths?: string[];
  weaknesses?: string[];
  /** Analisi editoriale originale. Tutti i campi sono testo scritto dalla redazione. */
  review?: {
    why?: string;
    solves?: string;
    bestFor?: string;
    differences?: string;
    beforeBuying?: string;
  };
  /** Giudizio editoriale 0–1 su pertinenza, reputazione e rapporto qualità-prezzo. */
  editorialScore?: number;
  /** false = escluso manualmente dalla redazione. */
  active?: boolean;
  notes?: string;
};

export type ExclusionReason =
  | "inattivo"
  | "prezzo-mancante"
  | "prezzo-basso"
  | "valutazione-mancante"
  | "valutazione-bassa"
  | "poche-recensioni"
  | "dati-scaduti"
  | "fuori-classifica";

export type RankedProduct = Product & {
  position: number;
  score: number;
  breakdown: {
    /** Valutazione corretta con media bayesiana (stelle). */
    adjustedRating: number;
    /** Componenti normalizzate 0–1. */
    ratingPart: number;
    volumePart: number;
    editorialPart: number;
  };
};

export type RankingResult = {
  ranked: RankedProduct[];
  excluded: { product: Product; reason: ExclusionReason }[];
  thresholds: { minPrice: number; minRating: number; minReviews: number; maxAgeDays: number };
};
