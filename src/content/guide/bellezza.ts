import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

export const guides: CategoryGuide[] = [
  {
    slug: "spazzolini-elettrici",
    reviewedAt,
    intro: [
      "Uno spazzolino elettrico pulisce in modo più costante di quello manuale: il movimento è sempre lo stesso e il timer aiuta a rispettare i due minuti consigliati.",
      "Le differenze riguardano tecnologia, sensore di pressione e costo delle testine di ricambio, che è la vera spesa nel tempo.",
    ],
    types: [
      { name: "Oscillanti-rotanti", text: "Testina rotonda che ruota e pulsa, dente per dente." },
      { name: "Sonici", text: "Testina allungata che vibra ad alta frequenza, delicata sulle gengive." },
      { name: "Per bambini", text: "Testine piccole, potenza ridotta e app o timer che rendono il lavaggio un gioco." },
    ],
    considerations: [
      { name: "Sensore di pressione", text: "Avvisa quando si preme troppo, proteggendo smalto e gengive." },
      { name: "Testine", text: "Confrontate prezzo e disponibilità dei ricambi originali." },
      { name: "Modalità", text: "Pulizia, gengive delicate e sbiancamento sono le più utili." },
      { name: "Autonomia", text: "Due settimane o più sono comode in viaggio." },
    ],
    buyingGuide: [
      { profile: "Primo spazzolino elettrico", text: "Un modello base con timer e sensore di pressione." },
      { profile: "Gengive sensibili", text: "Un sonico con modalità delicata." },
      { profile: "Bambini", text: "Uno spazzolino specifico con testina piccola." },
    ],
    faq: [
      { q: "Ogni quanto cambiare la testina?", a: "Ogni tre mesi circa, o prima se le setole si allargano." },
      { q: "Si può condividere?", a: "Il corpo sì, ciascuno con la propria testina." },
      { q: "È meglio del manuale?", a: "Molti studi mostrano una rimozione della placca più efficace." },
    ],
  },
  {
    slug: "idropulsori",
    reviewedAt,
    intro: [
      "L'idropulsore usa un getto d'acqua pulsante per pulire tra i denti e lungo il bordo gengivale. È utile con apparecchi ortodontici, impianti e ponti, dove il filo interdentale è scomodo.",
      "Integra lo spazzolino e il filo: non li sostituisce.",
    ],
    types: [
      { name: "Da banco", text: "Serbatoio grande e più livelli di pressione per tutta la famiglia." },
      { name: "Portatili", text: "Senza fili e ricaricabili, comodi in viaggio." },
      { name: "Combinati", text: "Uniscono spazzolino elettrico e idropulsore sulla stessa base." },
    ],
    considerations: [
      { name: "Pressione", text: "Più livelli permettono di iniziare piano e aumentare gradualmente." },
      { name: "Serbatoio", text: "Un serbatoio capiente evita di riempirlo durante l'uso." },
      { name: "Beccucci", text: "Beccucci specifici per apparecchi, impianti e tasche gengivali." },
      { name: "Ingombro", text: "I modelli da banco occupano spazio vicino al lavandino." },
    ],
    buyingGuide: [
      { profile: "Famiglia", text: "Un idropulsore da banco con più beccucci." },
      { profile: "Viaggio", text: "Un modello portatile ricaricabile." },
      { profile: "Apparecchio ortodontico", text: "Un modello con beccuccio specifico per apparecchi." },
    ],
    faq: [
      { q: "Sostituisce il filo?", a: "Lo integra; il dentista può indicare la combinazione migliore." },
      { q: "Si può usare il collutorio?", a: "Alcuni modelli lo permettono diluito; verificate il manuale." },
      { q: "È adatto alle gengive sensibili?", a: "Sì, partendo con la pressione più bassa." },
    ],
  },
  {
    slug: "rasoi-elettrici",
    reviewedAt,
    intro: [
      "Il rasoio elettrico permette una rasatura rapida, senza schiuma e con meno irritazioni per molte pelli. I modelli moderni si usano anche sotto la doccia.",
      "La scelta tra lamina e rotativo dipende dal tipo di barba e dalla pelle.",
    ],
    types: [
      { name: "A lamina", text: "Rasatura molto ravvicinata, ideale per barbe fitte e pelli che tollerano bene il passaggio." },
      { name: "Rotativi", text: "Testine che seguono i contorni del viso, comodi su barbe di più giorni." },
      { name: "Per la testa", text: "Pensati per rasare il cranio, con testine multiple." },
    ],
    considerations: [
      { name: "Wet & dry", text: "Usarlo con schiuma o gel riduce le irritazioni." },
      { name: "Stazione di pulizia", text: "Pulisce e lubrifica il rasoio, ma ha costi di ricarica." },
      { name: "Autonomia", text: "Almeno 40-50 minuti per un mese di rasature." },
      { name: "Testine di ricambio", text: "Vanno cambiate periodicamente: verificatene il prezzo." },
    ],
    buyingGuide: [
      { profile: "Pelle sensibile", text: "Un rasoio a lamina wet & dry." },
      { profile: "Barba di più giorni", text: "Un rotativo con testine flessibili." },
      { profile: "Testa rasata", text: "Un rasoio specifico per la testa." },
    ],
    faq: [
      { q: "Quanto ci vuole per abituarsi?", a: "Due o tre settimane perché la pelle si adatti." },
      { q: "Ogni quanto cambiare le testine?", a: "Indicativamente ogni 12-18 mesi." },
      { q: "Si può usare sotto la doccia?", a: "Sì, se il modello è indicato come wet & dry." },
    ],
  },
  {
    slug: "regolabarba",
    reviewedAt,
    intro: [
      "Il regolabarba mantiene la barba alla lunghezza desiderata e definisce i contorni. Molti modelli funzionano anche come tagliacapelli.",
      "Precisione delle lame e numero di lunghezze sono le caratteristiche principali.",
    ],
    types: [
      { name: "Regolabarba", text: "Pettini da 0,5 a 10 mm circa per barbe corte e medie." },
      { name: "Multifunzione", text: "Con accessori per capelli, naso e corpo." },
      { name: "Professionali", text: "Lame di precisione e motori potenti, usati anche dai barbieri." },
    ],
    considerations: [
      { name: "Lunghezze", text: "Più regolazioni permettono di mantenere la barba esattamente come volete." },
      { name: "Lame", text: "Acciaio inox o titanio, autoaffilanti." },
      { name: "Impermeabilità", text: "Un corpo lavabile si pulisce sotto l'acqua." },
      { name: "Autonomia", text: "Utile per l'uso senza filo e in viaggio." },
    ],
    buyingGuide: [
      { profile: "Barba corta", text: "Un regolabarba con molte lunghezze ravvicinate." },
      { profile: "Barba e capelli", text: "Un multifunzione con pettini lunghi." },
      { profile: "Precisione", text: "Un modello professionale." },
    ],
    faq: [
      { q: "Si può usare per i capelli?", a: "Molti modelli sì, con i pettini adatti." },
      { q: "Le lame vanno oliate?", a: "Alcuni modelli richiedono qualche goccia di olio periodicamente." },
      { q: "Rade a zero?", a: "Senza pettine taglia molto corto, ma non come un rasoio." },
    ],
  },
  {
    slug: "asciugacapelli",
    reviewedAt,
    intro: [
      "Un buon asciugacapelli asciuga più in fretta e con meno calore, rispettando la salute dei capelli. Flusso d'aria e controllo della temperatura contano più dei watt.",
      "Peso e rumore fanno la differenza nell'uso quotidiano.",
    ],
    types: [
      { name: "Tradizionali", text: "Motori AC potenti, robusti e affidabili." },
      { name: "Ad alta velocità", text: "Motori digitali leggeri e veloci, con meno calore." },
      { name: "Da viaggio", text: "Compatti e pieghevoli." },
    ],
    considerations: [
      { name: "Flusso d'aria", text: "Asciuga più rapidamente senza temperature elevate." },
      { name: "Ioni", text: "Riducono l'effetto crespo e l'elettricità statica." },
      { name: "Accessori", text: "Concentratore e diffusore per capelli ricci." },
      { name: "Peso", text: "Un phon leggero affatica meno le braccia." },
    ],
    buyingGuide: [
      { profile: "Capelli lunghi", text: "Un phon potente con buon flusso d'aria." },
      { profile: "Capelli ricci", text: "Un modello con diffusore." },
      { profile: "Viaggio", text: "Un phon compatto pieghevole." },
    ],
    faq: [
      { q: "Il calore rovina i capelli?", a: "Temperature eccessive sì: usate impostazioni medie e un protettore termico." },
      { q: "Serve il motore digitale?", a: "È più leggero e veloce, ma un buon motore AC resta valido." },
      { q: "Come pulire il filtro?", a: "Rimuovete regolarmente la polvere dal filtro posteriore." },
    ],
  },
  {
    slug: "piastre-capelli",
    reviewedAt,
    intro: [
      "La piastra liscia e modella i capelli in pochi minuti. Materiale delle piastre e controllo della temperatura determinano risultato e salute del capello.",
      "Capelli fini richiedono temperature basse; capelli spessi e ricci più calore.",
    ],
    types: [
      { name: "Larghe", text: "Per capelli lunghi e folti." },
      { name: "Strette", text: "Per capelli corti, frange e onde." },
      { name: "A vapore", text: "Usano il vapore per lisciare con meno calore diretto." },
    ],
    considerations: [
      { name: "Rivestimento", text: "Ceramica e tormalina distribuiscono il calore in modo uniforme." },
      { name: "Temperatura", text: "Regolabile per adattarsi al tipo di capello." },
      { name: "Riscaldamento", text: "Pronta in meno di un minuto." },
      { name: "Sicurezza", text: "Spegnimento automatico in caso di dimenticanza." },
    ],
    buyingGuide: [
      { profile: "Capelli fini", text: "Una piastra con temperature basse regolabili." },
      { profile: "Capelli spessi", text: "Una piastra larga e potente." },
      { profile: "Onde e ricci", text: "Una piastra stretta con bordi arrotondati." },
    ],
    faq: [
      { q: "Serve il protettore termico?", a: "Sì, riduce i danni del calore." },
      { q: "Capelli bagnati?", a: "No, solo asciutti, tranne i modelli specifici." },
      { q: "Che temperatura usare?", a: "Iniziate bassi e aumentate solo se necessario." },
    ],
  },
  {
    slug: "epilatori-luce-pulsata",
    reviewedAt,
    intro: [
      "Gli epilatori a luce pulsata (IPL) riducono progressivamente la ricrescita dei peli con trattamenti regolari a casa. Funzionano meglio con peli scuri su pelle chiara.",
      "Prima dell'uso è fondamentale verificare la compatibilità con il proprio fototipo.",
    ],
    types: [
      { name: "Compatti", text: "Per piccole zone e uso occasionale." },
      { name: "Con più testine", text: "Per viso, ascelle, inguine e gambe." },
      { name: "Con raffreddamento", text: "Riducono la sensazione di calore durante il trattamento." },
    ],
    considerations: [
      { name: "Sensore di pelle", text: "Regola l'intensità e blocca i flash su pelli non adatte." },
      { name: "Numero di impulsi", text: "Indica la durata della lampada." },
      { name: "Alimentazione", text: "A filo per sessioni lunghe, a batteria per comodità." },
      { name: "Fototipo", text: "Non adatti a pelli molto scure o peli chiari." },
    ],
    buyingGuide: [
      { profile: "Gambe", text: "Un modello con finestra grande e flash rapidi." },
      { profile: "Viso e zone delicate", text: "Un modello con testine specifiche." },
      { profile: "Pelle sensibile", text: "Un modello con raffreddamento e sensore." },
    ],
    faq: [
      { q: "È definitivo?", a: "Riduce molto la ricrescita, ma servono richiami periodici." },
      { q: "Fa male?", a: "Si avverte un leggero calore; il raffreddamento aiuta." },
      { q: "Quando vedo i risultati?", a: "In genere dopo alcune settimane di trattamenti regolari." },
    ],
  },
  {
    slug: "spazzole-viso",
    reviewedAt,
    intro: [
      "Le spazzole per la pulizia del viso rimuovono impurità e residui di trucco in modo più profondo delle mani. I modelli in silicone sono igienici e delicati.",
      "Vanno usate con regolarità ma senza eccessi, per non irritare la pelle.",
    ],
    types: [
      { name: "In silicone", text: "Igieniche, delicate e durature." },
      { name: "A setole rotanti", text: "Esfoliazione più intensa, con testine da sostituire." },
      { name: "Con funzioni extra", text: "Massaggio, calore o luce." },
    ],
    considerations: [
      { name: "Materiale", text: "Il silicone non trattiene batteri ed è adatto alle pelli sensibili." },
      { name: "Intensità", text: "Più livelli per adattarsi alla pelle." },
      { name: "Impermeabilità", text: "Utile per l'uso sotto la doccia." },
      { name: "Autonomia", text: "Molti modelli durano mesi con una carica." },
    ],
    buyingGuide: [
      { profile: "Pelle sensibile", text: "Una spazzola in silicone a bassa intensità." },
      { profile: "Pelle grassa", text: "Un modello con più intensità." },
      { profile: "Viaggio", text: "Una versione mini." },
    ],
    faq: [
      { q: "Ogni quanto usarla?", a: "Una o due volte al giorno, secondo la pelle." },
      { q: "Si usa con il detergente?", a: "Sì, con un detergente delicato." },
      { q: "Va bene per l'acne?", a: "Chiedete al dermatologo in caso di pelle infiammata." },
    ],
  },
  {
    slug: "bilance-smart",
    reviewedAt,
    intro: [
      "Le bilance smart misurano peso e, tramite impedenza, stimano grasso corporeo, massa muscolare e acqua. I dati si sincronizzano con app per seguire l'andamento nel tempo.",
      "Le misure di composizione sono stime: conta soprattutto la tendenza.",
    ],
    types: [
      { name: "Digitali semplici", text: "Solo peso, precise ed economiche." },
      { name: "Con composizione corporea", text: "Stimano grasso, muscoli e altri parametri." },
      { name: "Multiutente", text: "Riconoscono automaticamente i membri della famiglia." },
    ],
    considerations: [
      { name: "Precisione", text: "Pesate sempre alla stessa ora e nelle stesse condizioni." },
      { name: "App", text: "Sincronizzazione con le principali app di salute." },
      { name: "Utenti", text: "Riconoscimento automatico per più persone." },
      { name: "Portata", text: "Verificate il peso massimo supportato." },
    ],
    buyingGuide: [
      { profile: "Controllo del peso", text: "Una bilancia digitale semplice e precisa." },
      { profile: "Sport", text: "Un modello con composizione corporea e app." },
      { profile: "Famiglia", text: "Una bilancia multiutente." },
    ],
    faq: [
      { q: "Sono precise sulla massa grassa?", a: "Sono stime utili per vedere la tendenza, non misure cliniche." },
      { q: "Ci sono controindicazioni?", a: "L'impedenza è sconsigliata con pacemaker e in gravidanza." },
      { q: "Quando pesarsi?", a: "Al mattino, a digiuno e dopo il bagno." },
    ],
  },
  {
    slug: "massaggiatori",
    reviewedAt,
    intro: [
      "I massaggiatori per collo, spalle e schiena aiutano a sciogliere la tensione accumulata davanti al computer o alla guida.",
      "Programmi, intensità e calore permettono di adattare il massaggio.",
    ],
    types: [
      { name: "Cuscini shiatsu", text: "Da appoggiare dietro la schiena o il collo." },
      { name: "Fasce cervicali", text: "Avvolgono collo e spalle." },
      { name: "Coprisedili", text: "Massaggiano tutta la schiena." },
    ],
    considerations: [
      { name: "Calore", text: "Rilassa i muscoli e rende il massaggio più piacevole." },
      { name: "Intensità", text: "Regolabile per non risultare troppo forte." },
      { name: "Alimentazione", text: "A filo o a batteria; adattatore per l'auto." },
      { name: "Timer", text: "Lo spegnimento automatico evita sessioni troppo lunghe." },
    ],
    buyingGuide: [
      { profile: "Collo e spalle", text: "Una fascia cervicale shiatsu con calore." },
      { profile: "Schiena", text: "Un coprisedile massaggiante." },
      { profile: "In auto", text: "Un modello con adattatore 12 V." },
    ],
    faq: [
      { q: "Quanto usarlo?", a: "Sessioni di 15-20 minuti." },
      { q: "Ci sono controindicazioni?", a: "Evitatelo in gravidanza, con pacemaker o lesioni; chiedete al medico." },
      { q: "Si può lavare?", a: "Spesso la fodera è removibile." },
    ],
  },
];
