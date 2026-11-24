import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

// Guide delle categorie aggiunte a novembre 2026 in tecnologia, informatica, sport e giardino.
export const guides: CategoryGuide[] = [
  {
    slug: "smart-speaker",
    reviewedAt,
    intro: [
      "Uno smart speaker risponde alla voce: fa partire musica e radio, imposta sveglie e timer, legge le notizie e comanda luci, prese e altri dispositivi della casa connessa.",
      "La scelta parte dall'assistente che preferite e dall'ecosistema che avete già in casa, poi dalla qualità audio che vi serve.",
    ],
    types: [
      { name: "Compatti", text: "Piccoli ed economici, perfetti per cucina e camera." },
      { name: "Per la musica", text: "Audio più pieno, adatti al soggiorno e ad ascoltare a volume alto." },
      { name: "Con schermo", text: "Mostrano meteo, ricette, video e telecamere di sicurezza." },
    ],
    considerations: [
      { name: "Assistente", text: "Alexa, Google Assistant o Siri: conviene restare con quello già usato in casa." },
      { name: "Smart home", text: "Alcuni integrano un hub per dispositivi Zigbee o Matter, senza ponti aggiuntivi." },
      { name: "Audio", text: "Per la musica scegliete un modello più grande o una coppia in stereo." },
      { name: "Privacy", text: "Un tasto fisico per spegnere i microfoni è importante." },
    ],
    buyingGuide: [
      { profile: "Primo smart speaker", text: "Un modello compatto per cucina o camera." },
      { profile: "Musica in soggiorno", text: "Uno speaker grande o due in stereo." },
      { profile: "Cucina", text: "Un modello con schermo per ricette e timer." },
    ],
    faq: [
      { q: "Ascolta sempre?", a: "Rimane in attesa della parola di attivazione; si possono spegnere i microfoni con un tasto." },
      { q: "Serve un abbonamento musicale?", a: "Per la radio no; per ascoltare qualsiasi brano serve un servizio di streaming." },
      { q: "Funziona senza Wi-Fi?", a: "No: la maggior parte delle funzioni richiede internet." },
    ],
  },
  {
    slug: "streaming-tv",
    reviewedAt,
    intro: [
      "Una chiavetta o un box per lo streaming trasforma un televisore non smart, o con un sistema lento, in una smart TV moderna con tutte le app principali.",
      "Contano la risoluzione supportata, i formati HDR, la velocità del sistema e la presenza di un telecomando vocale.",
    ],
    types: [
      { name: "Chiavette HDMI", text: "Piccole ed economiche, si nascondono dietro il televisore." },
      { name: "Box", text: "Più potenti, con porte aggiuntive e Wi-Fi migliore." },
      { name: "Per il gaming in cloud", text: "Alcuni dispositivi supportano anche il gioco in streaming con un controller." },
    ],
    considerations: [
      { name: "Risoluzione", text: "Scegliete 4K solo se il televisore la supporta." },
      { name: "HDR", text: "Dolby Vision e HDR10+ migliorano molto i contenuti compatibili." },
      { name: "Sistema", text: "Fire TV, Google TV e altri cambiano interfaccia e app disponibili." },
      { name: "Connessione", text: "Wi-Fi recente o porta Ethernet per evitare blocchi in 4K." },
    ],
    buyingGuide: [
      { profile: "TV Full HD vecchia", text: "Una chiavetta HD economica." },
      { profile: "TV 4K", text: "Una chiavetta 4K con HDR e Wi-Fi 6." },
      { profile: "Casa con Alexa o Google", text: "Un dispositivo dello stesso ecosistema." },
    ],
    faq: [
      { q: "Serve una smart TV?", a: "No: basta una porta HDMI libera." },
      { q: "I contenuti sono gratis?", a: "Il dispositivo no; Netflix, Prime Video e le altre app richiedono i rispettivi abbonamenti." },
      { q: "Si vedono i canali italiani?", a: "Con le app ufficiali, come RaiPlay e Mediaset Infinity, sì." },
    ],
  },
  {
    slug: "power-station",
    reviewedAt,
    intro: [
      "Una power station è una grande batteria con prese di casa, USB e caricatore per auto. Alimenta frigoriferi da campeggio, PC, luci e piccoli elettrodomestici, ed è utile anche in caso di blackout.",
      "Le due grandezze da guardare sono la capacità in Wh, cioè quanta energia contiene, e la potenza in W, cioè quali apparecchi può far funzionare.",
    ],
    types: [
      { name: "Compatte", text: "Sotto i 500 Wh: per telefoni, droni, luci e PC portatili." },
      { name: "Medie", text: "Tra 500 e 1.500 Wh: per campeggio, camper e piccoli elettrodomestici." },
      { name: "Grandi espandibili", text: "Oltre 2.000 Wh, con batterie aggiuntive: per blackout prolungati." },
    ],
    considerations: [
      { name: "Capacità e potenza", text: "La potenza deve superare quella dell'apparecchio più esigente che volete collegare." },
      { name: "Chimica della batteria", text: "Le batterie LiFePO4 durano molti più cicli e sono più sicure." },
      { name: "Ricarica", text: "Ricarica rapida da rete e ingresso per pannelli solari." },
      { name: "Peso", text: "Oltre i 1.000 Wh si superano facilmente i 10 kg." },
    ],
    buyingGuide: [
      { profile: "Campeggio nel weekend", text: "500-1.000 Wh con prese a 230 V e ricarica solare." },
      { profile: "Blackout", text: "1.000-2.000 Wh LiFePO4, con funzione di continuità (UPS) se disponibile." },
      { profile: "Lavoro all'aperto", text: "Potenza alta per alimentare utensili e PC." },
    ],
    faq: [
      { q: "Quanto dura un frigorifero collegato?", a: "Dipende dai consumi: un frigo portatile a compressore può funzionare da molte ore a qualche giorno." },
      { q: "Si può caricare in auto?", a: "Sì, dalla presa 12 V, ma molto più lentamente che dalla rete." },
      { q: "Serve il pannello solare?", a: "Solo per restare a lungo senza corrente; si compra a parte." },
    ],
  },
  {
    slug: "droni",
    reviewedAt,
    intro: [
      "I droni con telecamera permettono foto e video dall'alto un tempo riservati ai professionisti. I modelli moderni sono stabili, facili da pilotare e tornano da soli al punto di partenza.",
      "In Europa le regole dipendono dal peso: sotto i 250 g ci sono meno vincoli, ma serve comunque rispettare le norme sul volo.",
    ],
    types: [
      { name: "Sotto i 250 g", text: "Leggeri, con meno obblighi e ideali per viaggi e principianti." },
      { name: "Fotografici avanzati", text: "Sensori più grandi e sensori anti-ostacolo, per riprese di qualità." },
      { name: "FPV", text: "Si pilotano con visore, per riprese dinamiche e sportive." },
    ],
    considerations: [
      { name: "Peso e regole", text: "Verificate le norme EASA ed ENAC e l'eventuale registrazione come operatore." },
      { name: "Fotocamera", text: "Sensore e stabilizzazione sul gimbal contano più della risoluzione dichiarata." },
      { name: "Autonomia", text: "Valutate batterie aggiuntive: un volo dura spesso 20-30 minuti." },
      { name: "Sicurezza", text: "Ritorno automatico, sensori di ostacoli e GPS." },
    ],
    buyingGuide: [
      { profile: "Principiante e viaggi", text: "Un drone sotto i 250 g con GPS e ritorno automatico." },
      { profile: "Video di qualità", text: "Sensore grande e gimbal a tre assi." },
      { profile: "Riprese sportive", text: "Un drone FPV, dopo aver fatto pratica al simulatore." },
    ],
    faq: [
      { q: "Serve il patentino?", a: "Dipende da peso e categoria di volo: controllate le regole aggiornate di ENAC prima di volare." },
      { q: "Si può volare in città?", a: "Ci sono molte limitazioni: verificate le zone geografiche sul portale ufficiale D-Flight." },
      { q: "Quante batterie servono?", a: "Almeno due o tre per una giornata di riprese." },
    ],
  },
  {
    slug: "cuffie-conduzione-ossea",
    reviewedAt,
    intro: [
      "Le cuffie a conduzione ossea e open-ear lasciano libere le orecchie: si ascolta musica o si telefona continuando a sentire traffico, ciclisti e persone intorno. Sono molto apprezzate da chi corre e pedala.",
      "La resa audio è meno piena delle cuffie in-ear, soprattutto nei bassi, in cambio di sicurezza e comfort.",
    ],
    types: [
      { name: "Conduzione ossea", text: "Trasmettono il suono attraverso gli zigomi; alcune sono adatte al nuoto." },
      { name: "Open-ear ad aria", text: "Piccoli altoparlanti vicino all'orecchio, con suono più naturale." },
      { name: "Con memoria interna", text: "Permettono di ascoltare musica senza telefono, anche in piscina." },
    ],
    considerations: [
      { name: "Stabilità", text: "Devono restare ferme durante la corsa, senza stringere troppo." },
      { name: "Resistenza", text: "IP67 o superiore per sudore e pioggia; IP68 per il nuoto." },
      { name: "Autonomia", text: "Almeno 6-8 ore e ricarica rapida." },
      { name: "Dispersione del suono", text: "A volume alto chi sta vicino può sentire la musica." },
    ],
    buyingGuide: [
      { profile: "Corsa su strada", text: "Cuffie a conduzione ossea leggere e stabili." },
      { profile: "Nuoto", text: "Modello IP68 con memoria interna." },
      { profile: "Ufficio e chiamate", text: "Open-ear con buoni microfoni." },
    ],
    faq: [
      { q: "Si sentono vibrazioni?", a: "Ad alto volume una leggera vibrazione è normale; ci si abitua in fretta." },
      { q: "Isolano dal rumore?", a: "No, ed è proprio il loro scopo: in ambienti rumorosi si sente meno la musica." },
      { q: "Vanno bene con il casco?", a: "Molte sì, grazie all'archetto sottile dietro la testa." },
    ],
  },
  {
    slug: "hard-disk-esterni",
    reviewedAt,
    intro: [
      "Un hard disk esterno offre molto spazio a un prezzo per terabyte basso: è ideale per backup, archivi di foto e video e per liberare spazio sul computer.",
      "È più lento e meno resistente agli urti di un SSD, ma per conservare grandi quantità di dati resta la scelta più conveniente.",
    ],
    types: [
      { name: "Portatili da 2,5\"", text: "Alimentati via USB, fino a 5 TB circa: comodi da portare con sé." },
      { name: "Da scrivania da 3,5\"", text: "Capacità più alte con alimentatore, per backup di casa." },
      { name: "Rinforzati", text: "Con gomma antiurto e resistenza all'acqua, per chi viaggia." },
    ],
    considerations: [
      { name: "Capacità", text: "Scegliete almeno il doppio dello spazio che volete salvare oggi." },
      { name: "Interfaccia", text: "USB 3.0 o USB-C per trasferimenti più veloci." },
      { name: "Compatibilità", text: "Verificate la formattazione per Windows e Mac." },
      { name: "Software di backup", text: "Backup automatici e crittografia sono un plus." },
    ],
    buyingGuide: [
      { profile: "Backup del computer", text: "Un portatile da 2-4 TB con backup automatico." },
      { profile: "Archivio foto e video", text: "Un disco da scrivania da 8 TB o più." },
      { profile: "Viaggi e lavoro sul campo", text: "Un disco rinforzato o un SSD esterno." },
    ],
    faq: [
      { q: "Meglio un SSD?", a: "Un SSD è più veloce e resistente; l'hard disk è più economico a parità di spazio." },
      { q: "Quanto dura?", a: "Diversi anni, ma per i dati importanti servono sempre almeno due copie." },
      { q: "Si può usare con la TV?", a: "Molti televisori leggono video e foto da un hard disk USB." },
    ],
  },
  {
    slug: "racchette-padel",
    reviewedAt,
    intro: [
      "Il padel è uno degli sport più giocati in Italia. La racchetta giusta dipende dal livello e dallo stile: chi inizia ha bisogno di controllo e tolleranza, chi gioca spesso cerca potenza.",
      "Forma, bilanciamento e peso cambiano molto le sensazioni in campo.",
    ],
    types: [
      { name: "Rotonde", text: "Punto dolce ampio e grande controllo: ideali per principianti." },
      { name: "A goccia", text: "Equilibrio tra controllo e potenza, per giocatori intermedi." },
      { name: "A diamante", text: "Molta potenza, ma richiedono tecnica: per giocatori esperti e d'attacco." },
    ],
    considerations: [
      { name: "Peso", text: "Tra 355 e 375 g per la maggior parte dei giocatori." },
      { name: "Bilanciamento", text: "Verso il manico per controllo, verso la testa per potenza." },
      { name: "Materiali", text: "Fibra di vetro più morbida e tollerante, carbonio più rigido e potente." },
      { name: "Gomma", text: "Morbida per comfort e uscita di palla, dura per controllo e potenza." },
    ],
    buyingGuide: [
      { profile: "Principiante", text: "Racchetta rotonda, leggera e in fibra di vetro." },
      { profile: "Intermedio", text: "Forma a goccia, con bilanciamento medio." },
      { profile: "Esperto d'attacco", text: "Forma a diamante in carbonio." },
    ],
    faq: [
      { q: "Serve un overgrip?", a: "Sì, migliora la presa e si cambia spesso." },
      { q: "Quanto dura una racchetta?", a: "Giocando ogni settimana, in genere uno o due anni." },
      { q: "Vanno bene per il gomito?", a: "Gomme morbide e peso contenuto riducono le vibrazioni." },
    ],
  },
  {
    slug: "tende-campeggio",
    reviewedAt,
    intro: [
      "Una buona tenda rende piacevole il campeggio anche quando il tempo cambia. La scelta dipende da quante persone ospita, da come vi spostate e dal clima.",
      "Contano impermeabilità, aerazione, facilità di montaggio e peso.",
    ],
    types: [
      { name: "Istantanee e pop-up", text: "Si montano in pochi secondi, ideali per festival e weekend." },
      { name: "A igloo", text: "Classiche, stabili e leggere, per campeggio e trekking." },
      { name: "Familiari a tunnel", text: "Più stanze e veranda, per vacanze lunghe in campeggio." },
    ],
    considerations: [
      { name: "Posti", text: "Scegliete un posto in più del necessario per stare comodi con gli zaini." },
      { name: "Impermeabilità", text: "Almeno 2.000 mm di colonna d'acqua per pioggia normale." },
      { name: "Aerazione", text: "Prese d'aria e doppio telo riducono la condensa." },
      { name: "Peso", text: "Per trekking il peso conta molto più dello spazio." },
    ],
    buyingGuide: [
      { profile: "Weekend e festival", text: "Una tenda pop-up per 2-3 persone." },
      { profile: "Famiglia in campeggio", text: "Una tenda a tunnel con veranda e più camere." },
      { profile: "Trekking", text: "Un igloo leggero a doppio telo." },
    ],
    faq: [
      { q: "Come evitare la condensa?", a: "Aprite le prese d'aria e non chiudete del tutto le porte di notte." },
      { q: "Serve un telo sotto?", a: "Sì, protegge il fondo e migliora l'isolamento dal terreno." },
      { q: "Si può lavare?", a: "Solo a mano con acqua e sapone neutro, poi va asciugata bene." },
    ],
  },
  {
    slug: "piscine-fuori-terra",
    reviewedAt,
    intro: [
      "Una piscina fuori terra porta l'estate in giardino senza scavi né permessi impegnativi. Dalle piscine gonfiabili per bambini ai modelli con telaio d'acciaio, cambiano dimensioni, robustezza e manutenzione.",
      "Prima di comprarla, misurate uno spazio perfettamente piano e valutate la gestione dell'acqua con pompa, filtro e trattamento.",
    ],
    types: [
      { name: "Autoportanti", text: "L'anello gonfiabile si alza con l'acqua: si montano in fretta." },
      { name: "Con telaio", text: "Struttura in acciaio più robusta, per piscine grandi e durature." },
      { name: "Rigide", text: "Pareti in acciaio o legno, quasi una piscina fissa." },
    ],
    considerations: [
      { name: "Terreno", text: "Serve una superficie piana, senza sassi, con un telo protettivo sotto." },
      { name: "Pompa e filtro", text: "Una pompa adeguata ai litri mantiene l'acqua pulita più a lungo." },
      { name: "Sicurezza", text: "Scaletta rimovibile e copertura sono importanti con bambini." },
      { name: "Peso dell'acqua", text: "Non installatela su terrazzi senza verificare la portata della struttura." },
    ],
    buyingGuide: [
      { profile: "Bambini piccoli", text: "Una piscina autoportante bassa, con copertura." },
      { profile: "Famiglia", text: "Una piscina con telaio di 3-4 metri, con pompa a filtro." },
      { profile: "Uso per più estati", text: "Telaio robusto o piscina rigida, con buona manutenzione." },
    ],
    faq: [
      { q: "Quanta acqua serve?", a: "Da poche centinaia a decine di migliaia di litri: controllate il dato prima di riempirla." },
      { q: "Come mantenere l'acqua pulita?", a: "Con filtrazione quotidiana, copertura e trattamento chimico adeguato." },
      { q: "Si può lasciare montata d'inverno?", a: "Dipende dal modello: molte vanno svuotate e smontate." },
    ],
  },
  {
    slug: "decespugliatori",
    reviewedAt,
    intro: [
      "Il decespugliatore rifinisce i bordi del prato e taglia l'erba alta dove il tosaerba non arriva: lungo muretti, recinzioni, aiuole e scarpate.",
      "Per giardini domestici i modelli a batteria sono ormai la scelta più comoda: silenziosi, senza benzina e senza cavi.",
    ],
    types: [
      { name: "Tagliabordi leggeri", text: "Per rifiniture lungo prati piccoli e aiuole." },
      { name: "Decespugliatori a batteria", text: "Più potenti, con testina a filo o lama per erba alta." },
      { name: "Elettrici a filo", text: "Economici e leggeri, per giardini piccoli vicino alla presa." },
    ],
    considerations: [
      { name: "Batteria", text: "Conviene restare nella piattaforma di batterie già usata per altri attrezzi." },
      { name: "Larghezza di taglio", text: "25-30 cm per rifiniture, oltre i 30 cm per zone più ampie." },
      { name: "Testina", text: "Avanzamento automatico del filo evita fermarsi spesso." },
      { name: "Ergonomia", text: "Asta regolabile e impugnatura ausiliaria riducono la fatica." },
    ],
    buyingGuide: [
      { profile: "Giardino piccolo", text: "Un tagliabordi leggero a batteria." },
      { profile: "Erba alta e rovi", text: "Un decespugliatore a batteria potente con lama." },
      { profile: "Budget ridotto", text: "Un modello elettrico a filo." },
    ],
    faq: [
      { q: "Quale filo usare?", a: "Quello del diametro indicato dal produttore, per non sforzare il motore." },
      { q: "Servono protezioni?", a: "Sì: occhiali, scarpe chiuse e pantaloni lunghi." },
      { q: "A batteria è abbastanza potente?", a: "Per i giardini domestici sì; per terreni molto incolti servono modelli professionali." },
    ],
  },
  {
    slug: "motoseghe",
    reviewedAt,
    intro: [
      "Motoseghe ed elettroseghe servono per tagliare legna, potare rami e sistemare il giardino dopo il maltempo. Per l'uso domestico i modelli a batteria ed elettrici sono più leggeri e silenziosi di quelli a scoppio.",
      "Sono attrezzi pericolosi: la sicurezza viene prima delle prestazioni.",
    ],
    types: [
      { name: "Mini motoseghe a batteria", text: "Leggere, a una mano, per potature e rami sottili." },
      { name: "Motoseghe a batteria", text: "Barre da 30-40 cm per tagliare legna e rami grossi." },
      { name: "Elettroseghe a filo", text: "Potenti ed economiche, per lavori vicino casa." },
    ],
    considerations: [
      { name: "Lunghezza della barra", text: "Scegliete in base al diametro dei tronchi che taglierete." },
      { name: "Sicurezza", text: "Freno catena, protezione per la mano e blocco dell'accensione." },
      { name: "Lubrificazione", text: "Lubrificazione automatica della catena con serbatoio visibile." },
      { name: "Tensionamento", text: "Il tensionamento senza attrezzi semplifica la manutenzione." },
    ],
    buyingGuide: [
      { profile: "Potature in giardino", text: "Una mini motosega o un potatore a batteria." },
      { profile: "Legna per il camino", text: "Una motosega a batteria o elettrica con barra da 35-40 cm." },
      { profile: "Rami alti", text: "Un potatore ad asta, per lavorare da terra." },
    ],
    faq: [
      { q: "Che protezioni servono?", a: "Guanti, occhiali, cuffie, scarpe antinfortunistiche e pantaloni antitaglio." },
      { q: "Ogni quanto affilare la catena?", a: "Quando i trucioli diventano polvere o la sega tende a deviare." },
      { q: "A batteria o a scoppio?", a: "Per l'uso domestico la batteria basta ed è più semplice; a scoppio per lavori pesanti e continui." },
    ],
  },
];
