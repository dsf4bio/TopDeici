import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

export const guides: CategoryGuide[] = [
  {
    slug: "orologi-gps-running",
    reviewedAt,
    intro: [
      "Un orologio GPS registra distanza, ritmo, frequenza cardiaca e percorso di ogni uscita. Per chi corre con regolarità è lo strumento per allenarsi con criterio, evitare sovraccarichi e vedere i progressi.",
      "Le differenze stanno nella precisione del GPS, nelle metriche di allenamento, nell'autonomia e nella presenza di mappe per i percorsi fuori strada.",
    ],
    types: [
      { name: "Per iniziare", text: "Funzioni essenziali, buona precisione e prezzo contenuto: perfetti per i primi obiettivi." },
      { name: "Intermedi", text: "Piani di allenamento, metriche di recupero e GPS multibanda per chi prepara gare." },
      { name: "Trail e multisport", text: "Mappe, navigazione, autonomie molto lunghe e profili per nuoto e bici." },
    ],
    considerations: [
      { name: "GPS multibanda", text: "È più preciso tra palazzi e boschi, dove i segnali rimbalzano." },
      { name: "Autonomia", text: "Contate le ore con il GPS attivo: per maratone e trail lunghi servono decine di ore." },
      { name: "Cardio", text: "Il sensore al polso è comodo; per lavori di qualità molti preferiscono una fascia toracica." },
      { name: "App e ecosistema", text: "Analisi chiare e sincronizzazione con le piattaforme di allenamento contano quanto l'orologio." },
    ],
    buyingGuide: [
      { profile: "Primi passi", text: "Un orologio GPS semplice con schermo leggibile al sole e buona autonomia." },
      { profile: "Preparazione gare", text: "GPS multibanda, piani di allenamento e metriche di recupero." },
      { profile: "Trail e montagna", text: "Mappe, navigazione e autonomia di più giorni." },
    ],
    faq: [
      { q: "Serve anche il telefono?", a: "No, il GPS è integrato. Il telefono serve solo per sincronizzare i dati." },
      { q: "Funziona per il nuoto?", a: "Molti modelli sì, con profili per piscina e acque libere." },
      { q: "Smartwatch o orologio sportivo?", a: "Lo sportivo ha più autonomia e metriche; lo smartwatch più app e funzioni quotidiane." },
    ],
  },
  {
    slug: "tapis-roulant",
    reviewedAt,
    intro: [
      "Un tapis roulant permette di camminare o correre in casa con qualsiasi tempo. È uno degli attrezzi più usati, a patto di scegliere un modello adatto allo spazio e al tipo di allenamento.",
      "Per camminare bastano modelli compatti; per correre servono motore robusto, superficie ampia e buon ammortizzamento.",
    ],
    types: [
      { name: "Walking pad", text: "Sottili e compatti, pensati per camminare anche sotto la scrivania." },
      { name: "Pieghevoli", text: "Si chiudono dopo l'uso, adatti a corsa leggera e camminata." },
      { name: "Per corsa", text: "Motori potenti, superficie ampia e inclinazione elevata per allenamenti intensi." },
    ],
    considerations: [
      { name: "Motore", text: "Guardate la potenza continua, non quella di picco: per correre servono almeno 2-2,5 CV continui." },
      { name: "Superficie", text: "Per correre conviene almeno 120 x 45 cm; per camminare può bastare meno." },
      { name: "Inclinazione", text: "Rende la camminata più intensa senza aumentare la velocità." },
      { name: "Rumore e vicini", text: "Un tappetino isolante riduce vibrazioni e rumore in appartamento." },
    ],
    buyingGuide: [
      { profile: "Camminare lavorando", text: "Un walking pad compatto e silenzioso." },
      { profile: "Corsa leggera", text: "Un pieghevole con superficie ampia e buon ammortizzamento." },
      { profile: "Allenamento serio", text: "Motore robusto, inclinazione elevata e velocità oltre 16 km/h." },
    ],
    faq: [
      { q: "Quanto spazio serve?", a: "Oltre all'ingombro, lasciate almeno un metro libero dietro per sicurezza." },
      { q: "Serve manutenzione?", a: "Periodicamente va lubrificato il nastro e controllata la tensione, come indicato nel manuale." },
      { q: "Si può usare in appartamento?", a: "Sì, con un tappetino antivibrazione e in orari rispettosi dei vicini." },
    ],
  },
  {
    slug: "cyclette",
    reviewedAt,
    intro: [
      "La cyclette è un attrezzo cardio a basso impatto sulle articolazioni, adatto a tutte le età. Permette di allenarsi mentre si guarda una serie o si segue una lezione online.",
      "La scelta dipende dall'intensità degli allenamenti e da quanto spazio avete.",
    ],
    types: [
      { name: "Cyclette verticali", text: "Simili a una bicicletta, compatte e adatte all'allenamento generale." },
      { name: "Spin bike", text: "Volano pesante e posizione sportiva per allenamenti intensi e lezioni di spinning." },
      { name: "Reclinate", text: "Con schienale, comode per chi ha problemi alla schiena o per la riabilitazione." },
    ],
    considerations: [
      { name: "Resistenza", text: "La resistenza magnetica è silenziosa e regolabile con precisione." },
      { name: "Regolazioni", text: "Sella e manubrio regolabili in altezza e profondità per la postura corretta." },
      { name: "Peso massimo", text: "Verificate il peso sopportato e la stabilità del telaio." },
      { name: "App", text: "La connessione ad app di allenamento rende le sessioni più varie." },
    ],
    buyingGuide: [
      { profile: "Forma fisica", text: "Una cyclette verticale con resistenza magnetica." },
      { profile: "Allenamento intenso", text: "Una spin bike con volano pesante." },
      { profile: "Schiena delicata", text: "Una cyclette reclinata." },
    ],
    faq: [
      { q: "È rumorosa?", a: "I modelli magnetici sono molto silenziosi, adatti anche agli appartamenti." },
      { q: "Quanto allenarsi?", a: "Anche 20-30 minuti al giorno a intensità moderata danno benefici." },
      { q: "Serve un tappetino?", a: "Protegge il pavimento e riduce le vibrazioni." },
    ],
  },
  {
    slug: "manubri-regolabili",
    reviewedAt,
    intro: [
      "I manubri regolabili sostituiscono un'intera rastrelliera di pesi in pochissimo spazio: con un meccanismo si sceglie il carico in pochi secondi.",
      "Sono la base per allenare la forza in casa, dalla tonificazione agli esercizi più impegnativi.",
    ],
    types: [
      { name: "A dischi con fermi", text: "Economici e robusti, ma il cambio peso richiede più tempo." },
      { name: "A selettore", text: "Si cambia carico con una rotella o un perno in pochi secondi." },
      { name: "Leggeri da fitness", text: "Pesi contenuti per tonificazione e lavoro aerobico." },
    ],
    considerations: [
      { name: "Range di peso", text: "Scegliete un carico massimo che vi consenta di progredire per mesi." },
      { name: "Incrementi", text: "Salti piccoli tra un peso e l'altro rendono la progressione più graduale." },
      { name: "Ingombro", text: "I manubri a selettore sono più lunghi anche ai pesi bassi." },
      { name: "Supporto", text: "Una base dedicata protegge il pavimento e semplifica il cambio peso." },
    ],
    buyingGuide: [
      { profile: "Tonificazione", text: "Manubri leggeri regolabili fino a 5-10 kg." },
      { profile: "Forza in casa", text: "Manubri a selettore fino a 20-25 kg." },
      { profile: "Budget contenuto", text: "Manubri a dischi con barra e fermi." },
    ],
    faq: [
      { q: "Sono sicuri?", a: "Sì, se il meccanismo è ben bloccato: controllatelo prima di ogni serie." },
      { q: "Che peso scegliere?", a: "Quello che permette 8-12 ripetizioni con tecnica corretta." },
      { q: "Servono altri attrezzi?", a: "Una panca regolabile amplia molto il numero di esercizi." },
    ],
  },
  {
    slug: "tappetini-yoga",
    reviewedAt,
    intro: [
      "Il tappetino giusto rende yoga, pilates e allenamento a corpo libero più sicuri e comodi: deve offrire presa, ammortizzare il giusto ed essere facile da pulire.",
      "Spessore e materiale si scelgono in base alla disciplina e al tipo di pavimento.",
    ],
    types: [
      { name: "Sottili", text: "3-4 mm: massima stabilità per yoga dinamico e posizioni in equilibrio." },
      { name: "Spessi", text: "6-10 mm: più comodi per pilates, stretching ed esercizi a terra." },
      { name: "Pieghevoli e da viaggio", text: "Leggeri e trasportabili, per allenarsi ovunque." },
    ],
    considerations: [
      { name: "Presa", text: "Una superficie antiscivolo è fondamentale, soprattutto con le mani sudate." },
      { name: "Materiale", text: "TPE, gomma naturale o PVC: diversi per peso, odore e durata." },
      { name: "Dimensioni", text: "Le persone alte preferiscono tappetini più lunghi del formato standard." },
      { name: "Pulizia", text: "Superfici chiuse si puliscono più facilmente e trattengono meno sudore." },
    ],
    buyingGuide: [
      { profile: "Yoga", text: "Un tappetino da 4-6 mm con ottima presa." },
      { profile: "Pilates ed esercizi a terra", text: "Un tappetino spesso e ammortizzato." },
      { profile: "Viaggio", text: "Un tappetino leggero e pieghevole." },
    ],
    faq: [
      { q: "Come si pulisce?", a: "Con un panno umido e sapone delicato, lasciandolo asciugare all'aria." },
      { q: "L'odore iniziale è normale?", a: "Con alcuni materiali sì: lasciatelo arieggiare qualche giorno." },
      { q: "Ogni quanto sostituirlo?", a: "Quando perde presa o si consuma, in genere dopo uno o due anni di uso frequente." },
    ],
  },
  {
    slug: "zaini-trekking",
    reviewedAt,
    intro: [
      "Lo zaino giusto distribuisce il peso su fianchi e spalle e rende le escursioni più piacevoli. La capienza si sceglie in base alla durata dell'uscita.",
      "Schienale, cintura in vita e regolazioni contano più delle tasche.",
    ],
    types: [
      { name: "Giornalieri", text: "20-30 litri per escursioni in giornata con acqua, cibo e una giacca." },
      { name: "Per più giorni", text: "35-50 litri per rifugi e trekking con pernottamento." },
      { name: "Da spedizione", text: "Oltre 50 litri per campeggio e lunghi percorsi." },
    ],
    considerations: [
      { name: "Schienale", text: "Uno schienale ventilato riduce la sudorazione; uno regolabile si adatta alla vostra schiena." },
      { name: "Cintura in vita", text: "Scarica il peso sui fianchi, indispensabile oltre i 30 litri." },
      { name: "Coprizaino", text: "Protegge dalla pioggia: verificate se è incluso." },
      { name: "Peso", text: "Uno zaino leggero lascia più margine per acqua e attrezzatura." },
    ],
    buyingGuide: [
      { profile: "Escursioni in giornata", text: "Uno zaino da 20-30 litri con schienale ventilato." },
      { profile: "Rifugi", text: "Uno zaino da 35-45 litri con cintura imbottita." },
      { profile: "Campeggio", text: "Uno zaino capiente con schienale regolabile." },
    ],
    faq: [
      { q: "Come regolarlo?", a: "Prima la cintura sui fianchi, poi gli spallacci e infine i tiranti di carico." },
      { q: "Serve il serbatoio d'acqua?", a: "Molti zaini hanno un vano per sacca idrica, comodo per bere camminando." },
      { q: "Uomo o donna?", a: "I modelli femminili hanno schienali più corti e spallacci sagomati." },
    ],
  },
  {
    slug: "borracce-termiche",
    reviewedAt,
    intro: [
      "Una borraccia termica in acciaio mantiene l'acqua fresca per ore e il tè caldo per tutta la mattina. Riduce l'uso di bottiglie di plastica ed è comoda a scuola, in ufficio e all'aperto.",
      "Capacità, tappo e facilità di pulizia sono le differenze che si notano ogni giorno.",
    ],
    types: [
      { name: "Con tappo a vite", text: "Isolamento massimo e nessuna perdita." },
      { name: "Con beccuccio o cannuccia", text: "Più comode da usare con una mano, ad esempio in palestra o in auto." },
      { name: "Grandi formati", text: "1-2 litri per escursioni e giornate lunghe." },
    ],
    considerations: [
      { name: "Doppia parete sottovuoto", text: "È ciò che garantisce le ore di isolamento dichiarate." },
      { name: "Tenuta", text: "Una borraccia a prova di perdite si può mettere in borsa senza pensieri." },
      { name: "Pulizia", text: "Un'apertura larga facilita il lavaggio; verificate se va in lavastoviglie." },
      { name: "Peso", text: "L'acciaio pesa più della plastica: scegliete la capacità che vi serve davvero." },
    ],
    buyingGuide: [
      { profile: "Ufficio e scuola", text: "500-750 ml con tappo a prova di perdite." },
      { profile: "Sport", text: "Un modello con beccuccio o cannuccia." },
      { profile: "Escursioni", text: "Un formato da 1 litro o più con tappo robusto." },
    ],
    faq: [
      { q: "Si può mettere in lavastoviglie?", a: "Dipende dal modello: spesso solo il tappo; il corpo va lavato a mano." },
      { q: "Si possono mettere bevande gassate?", a: "Alcuni modelli sì, ma la pressione può far uscire liquido all'apertura." },
      { q: "Lascia sapore metallico?", a: "L'acciaio inox di qualità alimentare non altera il gusto." },
    ],
  },
  {
    slug: "monopattini-elettrici",
    reviewedAt,
    intro: [
      "Il monopattino elettrico è una soluzione pratica per gli spostamenti urbani brevi: si ricarica a casa, si piega e si porta in ufficio o sui mezzi.",
      "In Italia la circolazione è regolata dal Codice della strada: prima dell'acquisto verificate le regole aggiornate su casco, targa, assicurazione e velocità massime.",
    ],
    types: [
      { name: "Urbani leggeri", text: "Facili da portare, con autonomia sufficiente per i tragitti quotidiani." },
      { name: "Con ruote grandi", text: "Più stabili e comodi su buche e pavé." },
      { name: "Ad alta autonomia", text: "Batterie più capienti per tragitti lunghi, a scapito del peso." },
    ],
    considerations: [
      { name: "Autonomia reale", text: "Peso del conducente, salite e freddo riducono l'autonomia dichiarata." },
      { name: "Freni", text: "Meglio due sistemi frenanti, ad esempio disco e freno elettrico." },
      { name: "Ruote e sospensioni", text: "Pneumatici grandi o sospensioni rendono la guida più sicura su strade dissestate." },
      { name: "Peso", text: "Se dovete portarlo su scale o mezzi, il peso è decisivo." },
    ],
    buyingGuide: [
      { profile: "Tragitti brevi e mezzi pubblici", text: "Un modello leggero e pieghevole." },
      { profile: "Strade dissestate", text: "Ruote grandi e sospensioni." },
      { profile: "Tragitti lunghi", text: "Batteria capiente e freni a disco." },
    ],
    faq: [
      { q: "Serve il casco?", a: "Le regole sono cambiate negli ultimi anni: verificate quelle in vigore e indossatelo comunque." },
      { q: "Si può usare sotto la pioggia?", a: "Solo se la protezione all'acqua lo consente, con molta prudenza." },
      { q: "Quanto dura la batteria?", a: "Diversi anni; evitate di lasciarla scarica a lungo." },
    ],
  },
  {
    slug: "biciclette-elettriche",
    reviewedAt,
    intro: [
      "La bicicletta a pedalata assistita aiuta in salita e nei tragitti lunghi: si arriva a destinazione senza fatica eccessiva, anche in città collinari.",
      "Il motore, la batteria e la qualità dei componenti determinano comfort, autonomia e affidabilità nel tempo.",
    ],
    types: [
      { name: "City bike", text: "Posizione comoda, parafanghi e portapacchi per gli spostamenti quotidiani." },
      { name: "Pieghevoli", text: "Compatte da portare in auto, treno o ufficio." },
      { name: "MTB e trekking", text: "Per sterrati, salite impegnative e lunghe escursioni." },
    ],
    considerations: [
      { name: "Motore", text: "Nel mozzo è più economico; centrale offre una pedalata più naturale in salita." },
      { name: "Batteria", text: "La capacità in Wh determina l'autonomia: una batteria removibile si ricarica in casa." },
      { name: "Componenti", text: "Freni a disco e cambio di qualità fanno la differenza in sicurezza e durata." },
      { name: "Assistenza", text: "Verificate la disponibilità di ricambi e di officine per la manutenzione." },
    ],
    buyingGuide: [
      { profile: "Città", text: "Una city bike con motore nel mozzo e batteria removibile." },
      { profile: "Pendolari con treno", text: "Una pieghevole leggera." },
      { profile: "Escursioni", text: "Una e-MTB o trekking con motore centrale." },
    ],
    faq: [
      { q: "Serve targa o assicurazione?", a: "Le bici a pedalata assistita conformi alla normativa europea sono equiparate alle bici; verificate le regole aggiornate." },
      { q: "Quanto dura la batteria?", a: "Diverse centinaia di cicli di ricarica, in genere alcuni anni." },
      { q: "Si può pedalare a batteria scarica?", a: "Sì, ma la bici è più pesante di una tradizionale." },
    ],
  },
  {
    slug: "pistole-massaggio",
    reviewedAt,
    intro: [
      "Le pistole massaggianti a percussione aiutano a sciogliere la tensione muscolare dopo allenamento e lunghe giornate seduti. Sono diventate popolari tra sportivi e non.",
      "Potenza, ampiezza del colpo e rumore distinguono i modelli più efficaci da quelli che vibrano soltanto.",
    ],
    types: [
      { name: "Mini", text: "Leggere e tascabili, adatte a viaggi e muscoli piccoli." },
      { name: "Standard", text: "Più potenza e testine per gambe, schiena e spalle." },
      { name: "Con calore", text: "Testine riscaldate per un effetto più rilassante." },
    ],
    considerations: [
      { name: "Ampiezza", text: "Un'ampiezza maggiore raggiunge i muscoli più profondi." },
      { name: "Velocità", text: "Più livelli permettono di partire piano e aumentare gradualmente." },
      { name: "Rumore", text: "I modelli migliori sono abbastanza silenziosi da usarli guardando la TV." },
      { name: "Testine", text: "Diverse forme per muscoli grandi, punti precisi e zone delicate." },
    ],
    buyingGuide: [
      { profile: "Sportivi", text: "Un modello standard con buona ampiezza e più testine." },
      { profile: "In viaggio", text: "Una mini pistola leggera." },
      { profile: "Relax", text: "Un modello con testina riscaldata e velocità basse." },
    ],
    faq: [
      { q: "Ci sono controindicazioni?", a: "Evitate ossa, articolazioni, collo e zone infiammate; in caso di dubbi chiedete al medico." },
      { q: "Quanto usarla?", a: "Un paio di minuti per gruppo muscolare sono sufficienti." },
      { q: "Sostituisce un fisioterapista?", a: "No, è un supporto per il recupero quotidiano." },
    ],
  },
];
