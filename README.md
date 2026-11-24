# TopDieci.click

Portale di classifiche dei 10 migliori prodotti Amazon.it per categoria: 10 aree, 100 categorie, criteri pubblici e
nessun dato inventato.

Stack: **Next.js 15 (App Router) + React 19 + TypeScript**, CSS con design system proprio (nessuna libreria UI),
dati in file JSON versionati nel repository, hosting pensato per **Vercel**.

---

## Avvio

```bash
npm install
cp .env.example .env.local     # il tag affiliato topdieci26-21 è già impostato
npm run dev                    # http://localhost:3000
npm run build && npm start     # verifica di produzione
```

Pagine utili in sviluppo:

- `/anteprima`: le schede prodotto e la tabella con **dati di esempio dichiaratamente fittizi**, per lavorare sul design.
  In produzione risponde 404.
- `/cerca?q=...`: ricerca istantanea su categorie e prodotti in classifica.

## Struttura

```
src/
  app/                       pagine (App Router)
    page.tsx                 homepage
    [macro]/page.tsx         pagina di area (es. /cucina)
    [macro]/[categoria]/     pagina categoria: classifica, analisi, confronto, guida, FAQ
    categorie, cerca, metodologia, chi-siamo, affiliazione, privacy, cookie, termini
    api/clic/route.ts        tracciamento anonimo dei clic su "Vedi su Amazon"
    sitemap.ts, robots.ts    SEO tecnica generata a ogni build
    globals.css              design system "Banco di prova"
  components/                componenti riutilizzabili (schede, tabella, breadcrumb, ricerca…)
  content/
    macro.ts                 le 10 aree
    categorie.ts             le 100 categorie (una riga ciascuna) con le caratteristiche da confrontare
    guide/                   guide editoriali complete (oggi: friggitrici, robot aspirapolvere, cuffie)
    evidenza.ts              categorie in evidenza in homepage
  lib/
    config.ts                soglie della classifica, in un solo posto
    ranking.ts               algoritmo di classificazione (+ ranking.test.ts)
    catalog.ts               lettura di categorie, prodotti e classifiche
    affiliate.ts             gestione centralizzata dei link affiliati
    amazon/creators-api.ts   client Amazon Creators API
    seo.ts                   metadata, canonical, JSON-LD
data/prodotti/<slug>.json    i prodotti di ogni categoria (inizialmente vuoto)
scripts/                     import CSV, aggiornamento da Amazon, verifica dati
templates/                   modello CSV per l'import
.github/workflows/           aggiornamento quotidiano dei dati
```

## Come funziona la classifica

Tutto in `src/lib/ranking.ts`, parametri in `src/lib/config.ts`, spiegazione pubblica in `/metodologia`.

1. **Requisiti minimi**: prezzo ≥ 25 €, valutazione **> 4,5**, dati verificati negli ultimi 45 giorni, recensioni ≥
   max(50, 20% della mediana dei candidati) oppure soglia fissa per categoria (`minReviews` in `categorie.ts`).
2. **Media bayesiana**: le valutazioni con poche recensioni vengono avvicinate alla media della categoria.
3. **Punteggio 0–100**: 55% valutazione corretta, 30% volume recensioni (scala logaritmica), 15% giudizio editoriale
   (`editorialScore` 0–1 nel file prodotto).
4. **Massimo 10 posizioni, nessun riempitivo**: se gli idonei sono 6, la classifica ha 6 prodotti.

Una pagina categoria resta `noindex` e fuori dalla sitemap finché non ha almeno 3 prodotti in classifica: niente pagine
vuote su Google.

## Caricare i prodotti

### 1. Import da CSV con i link dei prodotti (finché non hai accesso alle API)

Bastano cinque colonne: `categoria;posizione;link;nome;marca` (facoltative: `caratteristiche`, `prezzo`, `stelle`,
`recensioni`). Il link può essere quello completo di amazon.it (l'ASIN viene estratto e il tag topdieci26-21 aggiunto in
automatico) o un link SiteStripe amzn.to. I link amzn.eu del tasto "Condividi" non hanno il tag: lo script avvisa.
Senza API il sito non mostra foto né prezzi (le regole Amazon lo consentono solo con dati delle API): la scheda mostra
posizione, nome, marca, caratteristiche e il pulsante "Vedi su Amazon".

### 1b. Import da CSV completo (valutazioni, recensioni, testi editoriali)

Compila `templates/prodotti-modello.csv` (Excel va bene, separatore `;`), poi:

```bash
npm run dati:importa -- mio-file.csv --prova   # controlla senza scrivere
npm run dati:importa -- mio-file.csv           # scrive data/prodotti/<categoria>.json
npm run dati:verifica                          # stato di tutte le categorie
```

Ogni riga deve avere `verificato_il`: è la data in cui hai letto prezzo, stelle e recensioni su Amazon.it. Le righe
aggiornano per ASIN; i campi vuoti non cancellano quelli esistenti. Se c'è un errore, nessun file viene modificato.

### 0. Riempire tutte le classifiche in automatico (consigliato)

`npm run dati:popola` cerca su Amazon.it i prodotti di tutte le 100 categorie (prezzo da 25 €, almeno 4 stelle,
disponibili), li ordina e salva i candidati in `data/prodotti/`. Gira ogni giorno con GitHub Actions
(workflow "Aggiorna classifiche Amazon"): servono solo i tre secret della Creators API. Le parole chiave e il reparto
Amazon di ogni categoria sono in `src/content/categorie.ts` (`SEARCH`).

Nota: le API Amazon non forniscono il numero di recensioni né la media esatta delle stelle. Il filtro più severo
disponibile è "almeno 4 stelle"; l'ordine usa la ricerca Amazon per recensioni e la classifica vendite. Per applicare la
soglia di 4,5 stelle a un prodotto, inserisci stelle e recensioni con l'import CSV: hanno la precedenza.

### 2. Aggiornamento automatico da Amazon (immagini, prezzi, disponibilità)

PA-API 5 è stata ritirata nel 2026: il client usa la **Creators API** (OAuth 2.0).

1. In Associates Central → Creators API crea le credenziali.
2. Imposta `AMAZON_CREATORS_CLIENT_ID`, `AMAZON_CREATORS_CLIENT_SECRET`, `AMAZON_CREATORS_TOKEN_URL`
   (URL del token della tua regione).
3. `npm run dati:aggiorna` (o `npm run dati:aggiorna -- monitor` per una sola categoria).

**Da verificare al primo collegamento** (`src/lib/amazon/creators-api.ts`): percorso di GetItems, nomi delle risorse
OffersV2 e forma della risposta. Autenticazione, host, intestazioni e campi della richiesta seguono la documentazione
pubblica di Amazon; la lettura della risposta è difensiva e lascia vuoto ciò che non trova.

Il workflow `.github/workflows/aggiorna-dati.yml` lo esegue ogni giorno e fa commit dei dati: Vercel ripubblica il sito.
Servono i secret del repository con gli stessi nomi.

## Regole Amazon già applicate

- Il prezzo si mostra **solo se arriva dalle API ed è più recente di 24 ore**, con data e ora; altrimenti
  "Prezzo aggiornato su Amazon.it". Le pagine si rigenerano ogni ora (`REVALIDATE_SECONDS`), così i prezzi scaduti
  spariscono da soli.
- Le immagini sono caricate direttamente dai server Amazon, senza copie né ottimizzazioni sul nostro dominio.
- Link con `rel="sponsored nofollow"`, dichiarazione "In qualità di Affiliato Amazon…" nel footer e in `/affiliazione`.
- I dati strutturati non usano `AggregateRating` (Google non lo accetta per valutazioni di siti terzi).

**Da verificare tu prima di pubblicare:** le condizioni del Programma Affiliazione su come mostrare stelle e numero di
recensioni raccolti a mano (non disponibili via API). Se le regole non lo consentono, il ranking può continuare a usarli
e l'interfaccia può nasconderli modificando `ProductCard.tsx` e `ComparisonTable.tsx`.

## Monetizzazione e analisi

- Tag affiliato `topdieci26-21` applicato a ogni link Amazon (`DEFAULT_TAG` in `src/lib/affiliate.ts`, sovrascrivibile con `AMAZON_ASSOCIATE_TAG`); tag diversi per area in `TRACKING_BY_MACRO` (`src/lib/affiliate.ts`)
  per vedere in Associates Central quali aree vendono di più.
- Ogni clic su "Vedi su Amazon" invia a `/api/clic` un evento anonimo (ASIN, categoria, posizione, punto della pagina:
  scheda, tabella o analisi). Gli eventi sono nei log di Vercel e, se imposti `CLICK_WEBHOOK_URL`, vengono inoltrati
  dove vuoi (un foglio, un database, uno strumento di analytics). Nessun cookie: niente banner di consenso.

## Prima della pubblicazione

- [ ] Completare le parti evidenziate in `/privacy`, `/termini`, `/chi-siamo` e `SITE.owner` in `src/lib/config.ts`;
      far rivedere i testi legali da un consulente.
- [ ] Impostare le variabili d'ambiente su Vercel e collegare il dominio (www.topdieci.click; il dominio senza www
      viene reindirizzato in `next.config.ts`).
- [ ] Caricare i prodotti delle prime categorie e scrivere l'analisi editoriale (`review`) di ogni prodotto.
- [ ] Scrivere le guide delle altre categorie in `src/content/guide/` (oggi 3 su 100).
- [ ] Aggiungere un'immagine Open Graph (`src/app/opengraph-image.png`, 1200×630).
- [ ] Inviare la sitemap a Google Search Console.

## Test

```bash
npm test          # test del sistema di classificazione
npm run typecheck
```
