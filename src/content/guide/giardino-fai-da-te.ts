import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

export const guides: CategoryGuide[] = [
  {
    slug: "trapani-avvitatori",
    reviewedAt,
    intro: [
      "Il trapano avvitatore a batteria è l'elettroutensile più utile in casa: monta mobili, appende quadri, fora legno e metallo e, con la percussione, anche il muro.",
      "La scelta dipende da cosa forerete più spesso e da quanto userete l'utensile. Batterie e caricabatterie inclusi incidono molto sul prezzo.",
    ],
    types: [
      { name: "Avvitatori 12 V", text: "Compatti e leggeri, perfetti per mobili e piccoli lavori." },
      { name: "Trapani a percussione 18 V", text: "Forano anche mattoni e calcestruzzo leggero." },
      { name: "Avvitatori a impulsi", text: "Coppia elevata per viti lunghe e bulloni." },
    ],
    considerations: [
      { name: "Coppia", text: "La coppia in Nm indica la forza: più alta per viti lunghe e fori grandi." },
      { name: "Motore brushless", text: "Più efficiente e durevole, con maggiore autonomia." },
      { name: "Sistema di batterie", text: "Scegliere una marca permette di usare le stesse batterie su altri utensili." },
      { name: "Kit o solo corpo", text: "Il solo corpo conviene se avete già batterie compatibili." },
    ],
    buyingGuide: [
      { profile: "Piccoli lavori di casa", text: "Un avvitatore 12 V leggero con due batterie." },
      { profile: "Fori nel muro", text: "Un trapano a percussione 18 V." },
      { profile: "Lavori intensi", text: "Un modello brushless di un sistema professionale." },
    ],
    faq: [
      { q: "Serve un tassellatore?", a: "Per cemento armato e fori grandi sì; per il resto basta la percussione." },
      { q: "Quanto durano le batterie?", a: "Diversi anni; conservatele cariche a metà se non le usate a lungo." },
      { q: "Che punte usare?", a: "Punte specifiche per legno, metallo e muratura." },
    ],
  },
  {
    slug: "smerigliatrici",
    reviewedAt,
    intro: [
      "La smerigliatrice angolare taglia e leviga metallo, piastrelle e pietra. È un utensile potente che richiede attenzione e protezioni adeguate.",
      "Diametro del disco, potenza e sicurezze integrate sono gli elementi principali da valutare.",
    ],
    types: [
      { name: "Da 115-125 mm", text: "Le più diffuse, maneggevoli per lavori domestici." },
      { name: "Da 230 mm", text: "Per tagli profondi e lavori pesanti." },
      { name: "A batteria", text: "Libertà di movimento in cantiere e in giardino." },
    ],
    considerations: [
      { name: "Sicurezza", text: "Freno del disco, protezione contro il contraccolpo e riavvio protetto." },
      { name: "Velocità variabile", text: "Utile per levigare e lavorare materiali delicati." },
      { name: "Impugnatura", text: "Impugnatura laterale e bassa vibrazione per un controllo migliore." },
      { name: "Dischi", text: "Usate solo dischi adatti al materiale e al diametro." },
    ],
    buyingGuide: [
      { profile: "Hobby", text: "Una 125 mm a filo con buone sicurezze." },
      { profile: "Cantiere", text: "Una 125 mm a batteria brushless." },
      { profile: "Tagli profondi", text: "Una 230 mm potente." },
    ],
    faq: [
      { q: "Quali protezioni servono?", a: "Occhiali, guanti, protezione per l'udito e mascherina contro le polveri." },
      { q: "Posso tagliare le piastrelle?", a: "Sì, con dischi diamantati specifici." },
      { q: "Ogni quanto cambiare il disco?", a: "Quando è consumato o danneggiato: mai usare dischi crepati." },
    ],
  },
  {
    slug: "idropulitrici",
    reviewedAt,
    intro: [
      "L'idropulitrice rimuove sporco, muschio e incrostazioni da terrazzi, auto, mobili da giardino e facciate con un getto d'acqua ad alta pressione.",
      "Pressione e portata vanno scelte in base alle superfici: troppa forza può rovinare legno e vernici.",
    ],
    types: [
      { name: "Compatte", text: "Per auto, bici e piccoli terrazzi." },
      { name: "Medie", text: "Per uso domestico regolare, con accessori per superfici." },
      { name: "Potenti", text: "Per grandi superfici e sporco ostinato." },
    ],
    considerations: [
      { name: "Pressione e portata", text: "La portata in litri all'ora conta quanto la pressione per pulire velocemente." },
      { name: "Accessori", text: "Lavasuperfici, spazzole e serbatoio per detergente." },
      { name: "Tubo", text: "Un tubo lungo evita di spostare continuamente l'apparecchio." },
      { name: "Motore", text: "I motori a induzione durano di più nell'uso frequente." },
    ],
    buyingGuide: [
      { profile: "Auto e bici", text: "Un modello compatto con lancia regolabile." },
      { profile: "Terrazzo e vialetti", text: "Un modello medio con lavasuperfici." },
      { profile: "Grandi superfici", text: "Un'idropulitrice potente con tubo lungo." },
    ],
    faq: [
      { q: "Rovina il legno?", a: "Usate pressioni basse e una distanza adeguata." },
      { q: "Si può usare acqua calda?", a: "Solo con modelli progettati per farlo." },
      { q: "Quanta acqua consuma?", a: "Meno di un normale tubo da giardino a parità di pulizia." },
    ],
  },
  {
    slug: "robot-tagliaerba",
    reviewedAt,
    intro: [
      "Il robot tagliaerba mantiene il prato sempre corto tagliando poco e spesso: l'erba tagliata finissima resta sul terreno come concime naturale.",
      "I modelli più recenti non richiedono più il filo perimetrale e si orientano con GPS, telecamere o sensori laser.",
    ],
    types: [
      { name: "Con filo perimetrale", text: "Affidabili ed economici, ma richiedono la posa del filo." },
      { name: "Senza filo", text: "Usano RTK, visione o LiDAR: installazione più semplice e mappe dall'app." },
      { name: "Per pendenze e grandi prati", text: "Trazione integrale e batterie capienti." },
    ],
    considerations: [
      { name: "Superficie", text: "Scegliete un modello dimensionato per il vostro prato, con margine." },
      { name: "Pendenze", text: "Verificate la pendenza massima supportata." },
      { name: "Antifurto", text: "PIN, allarme e localizzazione proteggono il robot." },
      { name: "Silenziosità", text: "I robot sono molto silenziosi e possono lavorare anche di notte, se permesso." },
    ],
    buyingGuide: [
      { profile: "Prato piccolo", text: "Un robot con filo perimetrale per superfici fino a 500 m²." },
      { profile: "Installazione semplice", text: "Un robot senza filo con mappatura via app." },
      { profile: "Terreni in pendenza", text: "Un modello a trazione integrale." },
    ],
    faq: [
      { q: "Taglia anche i bordi?", a: "Spesso lascia una piccola striscia da rifinire a mano." },
      { q: "Si può lasciare fuori quando piove?", a: "Sì, ma un garage protegge il robot e la base." },
      { q: "È sicuro per animali e bambini?", a: "Le lame si fermano se il robot viene sollevato; meglio non farlo lavorare in loro presenza." },
    ],
  },
  {
    slug: "tosaerba-elettrici",
    reviewedAt,
    intro: [
      "I tosaerba elettrici e a batteria sono più silenziosi, leggeri e puliti di quelli a scoppio, e richiedono pochissima manutenzione.",
      "Larghezza di taglio, capacità del cesto e autonomia vanno scelte in base alla dimensione del prato.",
    ],
    types: [
      { name: "A filo", text: "Economici e senza limiti di autonomia, ma il cavo va gestito." },
      { name: "A batteria", text: "Liberi da cavi, comodi su prati piccoli e medi." },
      { name: "Con funzione mulching", text: "Triturano l'erba e la lasciano sul prato come concime." },
    ],
    considerations: [
      { name: "Larghezza di taglio", text: "Più larga per prati grandi, più stretta per giardini con aiuole." },
      { name: "Altezze di taglio", text: "Più regolazioni permettono di adattarsi alle stagioni." },
      { name: "Autonomia", text: "Verificate che una carica copra il vostro prato." },
      { name: "Cesto", text: "Un cesto capiente riduce le interruzioni per svuotarlo." },
    ],
    buyingGuide: [
      { profile: "Prato piccolo", text: "Un tosaerba a batteria da 32-34 cm." },
      { profile: "Prato medio", text: "Un modello a batteria da 40 cm o più con due batterie." },
      { profile: "Budget contenuto", text: "Un tosaerba a filo." },
    ],
    faq: [
      { q: "Ogni quanto tagliare?", a: "In primavera e inizio estate anche una volta a settimana." },
      { q: "Le batterie sono compatibili con altri attrezzi?", a: "Spesso sì, all'interno dello stesso sistema." },
      { q: "Serve affilare la lama?", a: "Una volta a stagione per un taglio netto." },
    ],
  },
  {
    slug: "tagliasiepi",
    reviewedAt,
    intro: [
      "Il tagliasiepi elettrico rende rapido e preciso il lavoro su siepi e arbusti. La lunghezza della lama e la distanza tra i denti determinano quali rami può tagliare.",
      "I modelli a batteria sono più comodi, quelli a filo più leggeri ed economici.",
    ],
    types: [
      { name: "A filo", text: "Leggeri ed economici, adatti a giardini vicino a una presa." },
      { name: "A batteria", text: "Liberi da cavi, ideali per siepi lontane." },
      { name: "Telescopici", text: "Raggiungono siepi alte senza scale." },
    ],
    considerations: [
      { name: "Lunghezza lama", text: "Lame più lunghe per siepi grandi, più corte per arbusti." },
      { name: "Capacità di taglio", text: "Indica lo spessore massimo dei rami." },
      { name: "Peso", text: "Un utensile leggero stanca meno sulle siepi alte." },
      { name: "Sicurezza", text: "Doppio comando e protezione della mano." },
    ],
    buyingGuide: [
      { profile: "Siepi basse", text: "Un tagliasiepi a filo leggero." },
      { profile: "Giardino grande", text: "Un modello a batteria con lama da 50-60 cm." },
      { profile: "Siepi alte", text: "Un tagliasiepi telescopico." },
    ],
    faq: [
      { q: "Quando potare le siepi?", a: "In genere a fine inverno e a fine estate, evitando il periodo di nidificazione." },
      { q: "Come pulire le lame?", a: "Rimuovete i residui e lubrificate dopo l'uso." },
      { q: "Si possono tagliare rami grossi?", a: "Solo entro la capacità indicata; oltre servono forbici o seghetti." },
    ],
  },
  {
    slug: "soffiatori",
    reviewedAt,
    intro: [
      "Il soffiatore raccoglie foglie, erba tagliata e detriti da vialetti e giardini in una frazione del tempo del rastrello. Alcuni modelli aspirano e triturano le foglie.",
      "Potenza del flusso, peso e rumore sono i fattori principali.",
    ],
    types: [
      { name: "Soffiatori a batteria", text: "Leggeri e silenziosi, per terrazzi e giardini piccoli." },
      { name: "A filo", text: "Potenti ed economici, ma vincolati alla presa." },
      { name: "Aspiratori trituratori", text: "Soffiano, aspirano e riducono il volume delle foglie." },
    ],
    considerations: [
      { name: "Velocità e volume d'aria", text: "Entrambi contano per spostare foglie bagnate." },
      { name: "Peso", text: "Un modello leggero si usa più a lungo senza fatica." },
      { name: "Rumore", text: "Importante nei quartieri residenziali." },
      { name: "Batterie", text: "Verificate l'autonomia e la compatibilità con altri attrezzi." },
    ],
    buyingGuide: [
      { profile: "Terrazzo", text: "Un soffiatore a batteria compatto." },
      { profile: "Giardino con alberi", text: "Un aspiratore trituratore." },
      { profile: "Grandi superfici", text: "Un soffiatore potente a batteria con due batterie." },
    ],
    faq: [
      { q: "Funziona con foglie bagnate?", a: "Serve molta potenza; meglio usarlo con foglie asciutte." },
      { q: "Serve protezione per l'udito?", a: "Con i modelli più rumorosi è consigliata." },
      { q: "Le foglie triturate si possono compostare?", a: "Sì, si decompongono più rapidamente." },
    ],
  },
  {
    slug: "valigette-utensili",
    reviewedAt,
    intro: [
      "Una valigetta di utensili ben assortita risolve i piccoli lavori di casa: montaggio di mobili, riparazioni, sostituzioni.",
      "La qualità dell'acciaio conta più del numero di pezzi: utensili scadenti si rovinano e rovinano viti e bulloni.",
    ],
    types: [
      { name: "Set di base", text: "Cacciaviti, pinze, martello e metro per la casa." },
      { name: "Set di chiavi a bussola", text: "Per auto, bici e lavori meccanici." },
      { name: "Con trapano incluso", text: "Uniscono utensili manuali e un piccolo trapano a batteria." },
    ],
    considerations: [
      { name: "Acciaio", text: "Cromo-vanadio è indice di buona qualità." },
      { name: "Assortimento", text: "Contate gli utensili che userete davvero." },
      { name: "Custodia", text: "Una custodia robusta con alloggiamenti tiene tutto in ordine." },
      { name: "Garanzia", text: "I marchi migliori offrono garanzie lunghe sugli utensili manuali." },
    ],
    buyingGuide: [
      { profile: "Prima casa", text: "Un set di base di qualità." },
      { profile: "Auto e moto", text: "Un set di chiavi a bussola completo." },
      { profile: "Tutto in uno", text: "Una valigetta con trapano a batteria." },
    ],
    faq: [
      { q: "Meglio set grande o piccolo?", a: "Un set piccolo di qualità è meglio di uno grande scadente." },
      { q: "Le punte sono incluse?", a: "Dipende dal set: verificate il contenuto." },
      { q: "Come conservarli?", a: "In luogo asciutto per evitare ruggine." },
    ],
  },
  {
    slug: "livelle-laser",
    reviewedAt,
    intro: [
      "Una livella laser proietta linee perfettamente orizzontali e verticali: appendere quadri, montare mensole o posare piastrelle diventa rapido e preciso.",
      "Numero di linee, colore del laser e portata vanno scelti in base al lavoro.",
    ],
    types: [
      { name: "A linee incrociate", text: "Una linea orizzontale e una verticale, per lavori domestici." },
      { name: "A 360°", text: "Proiettano linee su tutte le pareti della stanza." },
      { name: "Rotative", text: "Per esterni e cantieri con grandi distanze." },
    ],
    considerations: [
      { name: "Colore del laser", text: "Il verde è più visibile del rosso in ambienti luminosi." },
      { name: "Autolivellamento", text: "Si livella da sola e avvisa se è fuori bolla." },
      { name: "Precisione", text: "Espressa in millimetri per metro." },
      { name: "Supporti", text: "Treppiede e supporti magnetici facilitano il posizionamento." },
    ],
    buyingGuide: [
      { profile: "Quadri e mensole", text: "Una livella a linee incrociate." },
      { profile: "Ristrutturazioni", text: "Una livella a 360° con laser verde." },
      { profile: "Esterni", text: "Una livella rotativa con ricevitore." },
    ],
    faq: [
      { q: "È pericolosa per gli occhi?", a: "Non guardate mai direttamente il raggio." },
      { q: "Funziona all'aperto?", a: "Con il sole serve un ricevitore o un laser verde potente." },
      { q: "Serve un treppiede?", a: "Facilita molto il lavoro su pareti grandi." },
    ],
  },
  {
    slug: "barbecue",
    reviewedAt,
    intro: [
      "Il barbecue è il centro delle giornate all'aperto. La scelta tra carbone, gas ed elettrico dipende dal gusto, dallo spazio e dalle regole del condominio.",
      "Superficie di cottura, coperchio e controllo del calore determinano cosa si può cucinare.",
    ],
    types: [
      { name: "A carbone", text: "Sapore affumicato tradizionale, richiede più tempo per l'accensione." },
      { name: "A gas", text: "Pronti in pochi minuti, con controllo preciso della temperatura." },
      { name: "Elettrici", text: "Ideali per balconi dove fiamme e fumo non sono ammessi." },
    ],
    considerations: [
      { name: "Superficie", text: "Adeguata al numero di persone." },
      { name: "Coperchio", text: "Permette cotture indirette e affumicature." },
      { name: "Materiali", text: "Acciaio smaltato o inox e griglie in ghisa durano di più." },
      { name: "Regole condominiali", text: "Verificate cosa è permesso sul balcone." },
    ],
    buyingGuide: [
      { profile: "Balcone", text: "Un barbecue elettrico o un piccolo gas." },
      { profile: "Giardino", text: "Un barbecue a gas con più bruciatori o un kettle a carbone." },
      { profile: "Campeggio", text: "Un modello portatile." },
    ],
    faq: [
      { q: "Carbone o gas?", a: "Il carbone dà più aroma; il gas è più pratico e veloce." },
      { q: "Come pulire la griglia?", a: "Scaldatela e spazzolatela dopo l'uso." },
      { q: "Si può usare in balcone?", a: "Dipende dal regolamento: gli elettrici sono spesso consentiti." },
    ],
  },
];
