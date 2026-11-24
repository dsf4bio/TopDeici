import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

export const guides: CategoryGuide[] = [
  {
    slug: "console-portatili",
    reviewedAt,
    intro: [
      "Le console portatili permettono di giocare ovunque e, in molti casi, anche sulla TV di casa. Catalogo di giochi, schermo e autonomia sono le prime cose da valutare.",
      "La scelta dipende soprattutto dai giochi che volete: ogni piattaforma ha esclusive diverse.",
    ],
    types: [
      { name: "Console ibride", text: "Si usano portatili o collegate alla TV." },
      { name: "PC portatili", text: "Accedono alle librerie PC, con prestazioni elevate." },
      { name: "Retro e compatte", text: "Per giochi classici e partite brevi." },
    ],
    considerations: [
      { name: "Catalogo", text: "Verificate i giochi disponibili e le esclusive." },
      { name: "Schermo", text: "OLED offre colori e contrasto migliori." },
      { name: "Autonomia", text: "Varia molto in base ai giochi." },
      { name: "Memoria", text: "Spazio espandibile per i download." },
    ],
    buyingGuide: [
      { profile: "Famiglia", text: "Una console ibrida con giochi per tutte le età." },
      { profile: "Giocatori PC", text: "Un PC portatile da gaming." },
      { profile: "Viaggio", text: "Una console compatta con lunga autonomia." },
    ],
    faq: [
      { q: "Si collega alla TV?", a: "Le console ibride sì, con il dock." },
      { q: "Servono abbonamenti?", a: "Per il gioco online spesso sì." },
      { q: "I giochi sono compatibili tra versioni?", a: "Spesso sì, verificate le indicazioni del produttore." },
    ],
  },
  {
    slug: "controller",
    reviewedAt,
    intro: [
      "Un buon controller migliora comfort e precisione nelle sessioni di gioco. Molti funzionano su più piattaforme, comprese PC e smartphone.",
      "Ergonomia, qualità degli stick e autonomia sono gli elementi chiave.",
    ],
    types: [
      { name: "Ufficiali", text: "Massima compatibilità con la console." },
      { name: "Pro", text: "Tasti posteriori e regolazioni avanzate." },
      { name: "Per PC e mobile", text: "Multipiattaforma, spesso con stick ad effetto Hall." },
    ],
    considerations: [
      { name: "Stick", text: "Gli stick ad effetto Hall riducono il rischio di drift." },
      { name: "Connessione", text: "Bluetooth, dongle o cavo per latenza minima." },
      { name: "Batteria", text: "Ricaricabile o a pile." },
      { name: "Compatibilità", text: "Verificate le piattaforme supportate." },
    ],
    buyingGuide: [
      { profile: "Console", text: "Il controller ufficiale." },
      { profile: "Competitivo", text: "Un controller pro con tasti posteriori." },
      { profile: "PC", text: "Un controller multipiattaforma." },
    ],
    faq: [
      { q: "Cos'è il drift?", a: "Movimento non voluto dello stick causato dall'usura." },
      { q: "Funziona con lo smartphone?", a: "Molti controller Bluetooth sì." },
      { q: "Quanto dura la batteria?", a: "Da qualche ora a decine di ore." },
    ],
  },
  {
    slug: "cuffie-gaming",
    reviewedAt,
    intro: [
      "Le cuffie da gioco offrono audio posizionale per sentire da dove arrivano i passi e un microfono per comunicare con la squadra.",
      "Comfort nelle sessioni lunghe e qualità del microfono contano quanto il suono.",
    ],
    types: [
      { name: "Cablate", text: "Nessun ritardo e nessuna batteria da gestire." },
      { name: "Wireless", text: "Libertà di movimento con dongle a bassa latenza." },
      { name: "Open-back", text: "Suono arioso, per stanze silenziose." },
    ],
    considerations: [
      { name: "Audio posizionale", text: "Aiuta a localizzare i suoni." },
      { name: "Microfono", text: "Rimovibile o con cancellazione del rumore." },
      { name: "Comfort", text: "Peso e cuscinetti traspiranti." },
      { name: "Compatibilità", text: "PC, PlayStation, Xbox o Switch." },
    ],
    buyingGuide: [
      { profile: "PC", text: "Cuffie cablate di qualità con microfono rimovibile." },
      { profile: "Console", text: "Cuffie wireless compatibili con la console." },
      { profile: "Lunghe sessioni", text: "Un modello leggero con cuscinetti morbidi." },
    ],
    faq: [
      { q: "Servono le cuffie surround?", a: "L'audio stereo di qualità spesso basta." },
      { q: "Il wireless ha ritardi?", a: "Con dongle dedicato sono trascurabili." },
      { q: "Si usano anche per la musica?", a: "Sì, molti modelli suonano bene anche con la musica." },
    ],
  },
  {
    slug: "mouse-gaming",
    reviewedAt,
    intro: [
      "Un mouse da gioco preciso e leggero fa la differenza nei titoli competitivi. Forma, peso e sensore sono gli elementi chiave.",
      "La forma giusta dipende dalla presa e dalla dimensione della mano.",
    ],
    types: [
      { name: "Ultraleggeri", text: "Per sparatutto e movimenti rapidi." },
      { name: "Con molti tasti", text: "Per MMO e giochi con molti comandi." },
      { name: "Ergonomici", text: "Comodi per lunghe sessioni." },
    ],
    considerations: [
      { name: "Sensore", text: "Precisione e assenza di accelerazione." },
      { name: "Peso", text: "Più leggero per movimenti rapidi." },
      { name: "Connessione", text: "Wireless a 2,4 GHz o cavo." },
      { name: "Polling", text: "Frequenze alte riducono la latenza." },
    ],
    buyingGuide: [
      { profile: "Sparatutto", text: "Un mouse ultraleggero wireless." },
      { profile: "MMO", text: "Un mouse con tasti laterali." },
      { profile: "Budget", text: "Un mouse cablato affidabile." },
    ],
    faq: [
      { q: "Quanti DPI servono?", a: "La maggior parte dei giocatori usa valori tra 400 e 1.600." },
      { q: "Wireless o cablato?", a: "I wireless moderni hanno latenza pari ai cablati." },
      { q: "Serve un tappetino?", a: "Un tappetino di qualità migliora precisione e scorrevolezza." },
    ],
  },
  {
    slug: "tastiere-gaming",
    reviewedAt,
    intro: [
      "Le tastiere da gioco puntano su velocità di risposta, switch reattivi e illuminazione personalizzabile.",
      "Il formato influisce sullo spazio per il mouse e sulla postura.",
    ],
    types: [
      { name: "Meccaniche", text: "Switch reattivi e durevoli." },
      { name: "Magnetiche", text: "Punto di attivazione regolabile." },
      { name: "Compatte", text: "Più spazio per il mouse." },
    ],
    considerations: [
      { name: "Switch", text: "Lineari per reattività." },
      { name: "Anti-ghosting", text: "Registra più tasti premuti insieme." },
      { name: "Software", text: "Macro e profili personalizzati." },
      { name: "Formato", text: "Full size, TKL o compatto." },
    ],
    buyingGuide: [
      { profile: "Competitivo", text: "Una tastiera compatta magnetica o lineare." },
      { profile: "Gioco e lavoro", text: "Una TKL meccanica." },
      { profile: "Budget", text: "Una meccanica entry level." },
    ],
    faq: [
      { q: "Le tastiere magnetiche sono migliori?", a: "Offrono attivazione regolabile, utile nei giochi competitivi." },
      { q: "Servono i tasti macro?", a: "Solo per alcuni generi." },
      { q: "Wireless per il gaming?", a: "I modelli a 2,4 GHz hanno latenza bassissima." },
    ],
  },
  {
    slug: "sedie-gaming",
    reviewedAt,
    intro: [
      "Le sedie gaming offrono schienali alti, reclinazione e cuscini per lunghe sessioni. Le migliori uniscono stile e vera ergonomia.",
      "Regolazioni e qualità dei materiali contano più dell'estetica.",
    ],
    types: [
      { name: "In similpelle", text: "Facili da pulire ma meno traspiranti." },
      { name: "In tessuto", text: "Più fresche e traspiranti." },
      { name: "Ergonomiche", text: "Supporto lombare integrato e regolabile." },
    ],
    considerations: [
      { name: "Supporto lombare", text: "Integrato o con cuscino regolabile." },
      { name: "Braccioli", text: "Regolabili in più direzioni." },
      { name: "Reclinazione", text: "Per pause e relax." },
      { name: "Portata", text: "Verificate peso e altezza consigliati." },
    ],
    buyingGuide: [
      { profile: "Lunghe sessioni", text: "Una sedia in tessuto con supporto lombare." },
      { profile: "Budget", text: "Una sedia con buone regolazioni base." },
      { profile: "Corporatura robusta", text: "Una sedia XL con portata elevata." },
    ],
    faq: [
      { q: "Sono ergonomiche?", a: "Alcune sì; verificate il supporto lombare regolabile." },
      { q: "Similpelle o tessuto?", a: "Il tessuto è più fresco d'estate." },
      { q: "È difficile montarla?", a: "Di solito servono 20-30 minuti." },
    ],
  },
  {
    slug: "monitor-gaming",
    reviewedAt,
    intro: [
      "Un monitor da gioco con alta frequenza rende le immagini più fluide e reattive. Tempo di risposta e sincronizzazione adattiva evitano scatti e strappi.",
      "Risoluzione e frequenza vanno scelte in base alla potenza della scheda grafica o della console.",
    ],
    types: [
      { name: "Full HD ad alta frequenza", text: "Per giochi competitivi e schede grafiche medie." },
      { name: "QHD", text: "Il miglior equilibrio tra dettaglio e fluidità." },
      { name: "4K e OLED", text: "Per qualità visiva massima." },
    ],
    considerations: [
      { name: "Frequenza", text: "144 Hz o più per la fluidità." },
      { name: "Tempo di risposta", text: "Basso per ridurre le scie." },
      { name: "Sincronizzazione", text: "FreeSync o G-Sync per eliminare il tearing." },
      { name: "Pannello", text: "IPS per colori, VA per contrasto, OLED per entrambi." },
    ],
    buyingGuide: [
      { profile: "Competitivo", text: "Un Full HD a 180 Hz o più." },
      { profile: "Gioco e film", text: "Un QHD da 27 pollici." },
      { profile: "Console", text: "Un monitor 4K con HDMI 2.1." },
    ],
    faq: [
      { q: "Serve un PC potente?", a: "Per sfruttare frequenze e risoluzioni alte sì." },
      { q: "Curvo o piatto?", a: "Il curvo aumenta il coinvolgimento sui formati larghi." },
      { q: "Va bene per lavorare?", a: "Sì, anche per l'ufficio." },
    ],
  },
  {
    slug: "volanti-simulatori",
    reviewedAt,
    intro: [
      "Un volante con pedaliera trasforma i giochi di guida: force feedback e rotazione realistica rendono la guida più coinvolgente e precisa.",
      "Compatibilità con la piattaforma e tipo di force feedback sono le scelte principali.",
    ],
    types: [
      { name: "Entry level", text: "Force feedback a ingranaggi, per iniziare." },
      { name: "A cinghia", text: "Feedback più fluido e preciso." },
      { name: "Direct drive", text: "Feedback realistico e potente." },
    ],
    considerations: [
      { name: "Force feedback", text: "Determina il realismo." },
      { name: "Pedaliera", text: "Inclusa o venduta a parte." },
      { name: "Compatibilità", text: "PlayStation, Xbox o PC." },
      { name: "Fissaggio", text: "Morsetti robusti o postazione dedicata." },
    ],
    buyingGuide: [
      { profile: "Iniziare", text: "Un volante entry level con pedaliera." },
      { profile: "Appassionati", text: "Un direct drive per PC." },
      { profile: "Console", text: "Un volante compatibile con la vostra console." },
    ],
    faq: [
      { q: "Serve una postazione?", a: "Per i modelli potenti è consigliata." },
      { q: "Il cambio è incluso?", a: "Spesso è venduto a parte." },
      { q: "Funziona con tutti i giochi?", a: "Con la maggior parte dei giochi di guida." },
    ],
  },
  {
    slug: "ebook-reader",
    reviewedAt,
    intro: [
      "Gli e-book reader usano schermi e-ink che non stancano gli occhi e si leggono anche al sole. Una carica dura settimane.",
      "Formati supportati, luce regolabile e resistenza all'acqua sono le differenze principali.",
    ],
    types: [
      { name: "Base", text: "Leggeri e compatti, per leggere ovunque." },
      { name: "Con luce calda e impermeabili", text: "Per leggere a letto o in spiaggia." },
      { name: "A colori o con penna", text: "Per fumetti, appunti e documenti." },
    ],
    considerations: [
      { name: "Schermo", text: "Risoluzione elevata per testi nitidi." },
      { name: "Luce", text: "Regolabile e calda per la sera." },
      { name: "Formati", text: "Verificate il supporto dei formati e delle biblioteche digitali." },
      { name: "Ecosistema", text: "Negozio di libri collegato al lettore." },
    ],
    buyingGuide: [
      { profile: "Lettori occasionali", text: "Un modello base." },
      { profile: "Lettura a letto", text: "Un modello con luce calda." },
      { profile: "Fumetti e appunti", text: "Un e-reader a colori o con penna." },
    ],
    faq: [
      { q: "Si possono leggere PDF?", a: "Sì, ma gli schermi piccoli non sono ideali." },
      { q: "Funziona con le biblioteche?", a: "Alcuni modelli supportano il prestito digitale." },
      { q: "Quanto dura la batteria?", a: "Diverse settimane." },
    ],
  },
  {
    slug: "giradischi",
    reviewedAt,
    intro: [
      "Il vinile è tornato protagonista: un giradischi permette di ascoltare la musica in modo più consapevole e di riscoprire le copertine.",
      "Testina, trazione e preamplificatore determinano qualità e semplicità d'uso.",
    ],
    types: [
      { name: "Automatici", text: "Il braccio si posiziona da solo: ideali per iniziare." },
      { name: "Manuali", text: "Più controllo e migliore qualità." },
      { name: "Con altoparlanti", text: "Tutto in uno, senza impianto." },
    ],
    considerations: [
      { name: "Preamplificatore", text: "Integrato per collegarlo a casse attive." },
      { name: "Testina", text: "Sostituibile per aggiornare il suono." },
      { name: "Trazione", text: "A cinghia per l'ascolto, diretta per i DJ." },
      { name: "Bluetooth", text: "Comodo per cuffie e casse wireless." },
    ],
    buyingGuide: [
      { profile: "Iniziare", text: "Un automatico con preamplificatore." },
      { profile: "Appassionati", text: "Un manuale con testina di qualità." },
      { profile: "Tutto in uno", text: "Un giradischi con altoparlanti." },
    ],
    faq: [
      { q: "Serve un amplificatore?", a: "Sì, oppure casse attive se c'è il preamplificatore." },
      { q: "Rovina i dischi?", a: "Con una testina in buono stato no." },
      { q: "Come pulire i vinili?", a: "Con spazzola antistatica prima dell'ascolto." },
    ],
  },
];
