// Parametri centrali del sito. Le soglie di classifica sono qui, in un solo posto,
// e vengono mostrate anche nella pagina /metodologia.

export const SITE = {
  name: "TopDieci",
  domain: "topdieci.click",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.topdieci.click").replace(/\/$/, ""),
  locale: "it_IT",
  description:
    "Classifiche dei 10 migliori prodotti Amazon in oltre 100 categorie, costruite con criteri pubblici: prezzo, valutazioni, numero di recensioni e analisi della redazione.",
  contactEmail: "redazione@topdieci.click",
  /** Titolare del sito, da completare prima della pubblicazione (necessario per privacy e termini). */
  owner: "[Nome e cognome o ragione sociale del titolare]",
};

export const RANKING = {
  /** Prezzo minimo per entrare in classifica, in euro. */
  minPrice: 25,
  /** Valutazione media: deve essere strettamente superiore a questo valore. */
  minRating: 4.5,
  /** Soglia minima assoluta di recensioni. */
  minReviewsFloor: 50,
  /** Soglia relativa: almeno questa frazione della mediana delle recensioni dei candidati. */
  minReviewsShareOfMedian: 0.2,
  /** Dati di valutazione più vecchi di così escludono il prodotto finché non vengono riverificati. */
  maxDataAgeDays: 45,
  /** Pesi del punteggio finale (somma 1). */
  weights: { rating: 0.55, volume: 0.3, editorial: 0.15 },
  /** Posizioni in classifica. */
  size: 10,
  /** Sotto questo numero di prodotti idonei la pagina resta fuori dall'indice di Google. */
  minProductsToIndex: 3,
};

export const PRICE = {
  /** Un prezzo si mostra solo se arriva dalle API Amazon ed è stato verificato entro queste ore. */
  maxAgeHours: 24,
};

/** Ogni quanto Next.js rigenera le pagine (secondi), così i prezzi scaduti spariscono da soli. */
export const REVALIDATE_SECONDS = 3600;
