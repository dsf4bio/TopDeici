import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

export const guides: CategoryGuide[] = [
  {
    slug: "sedie-ergonomiche",
    reviewedAt,
    intro: [
      "Chi lavora seduto otto ore al giorno sente la differenza tra una sedia qualsiasi e una ergonomica. Il sostegno lombare e le regolazioni giuste riducono tensioni a schiena, collo e spalle.",
      "Una buona sedia si adatta alla persona, non il contrario.",
    ],
    types: [
      { name: "Operative", text: "Semplici e regolabili, per l'uso quotidiano a casa." },
      { name: "Ergonomiche", text: "Supporto lombare regolabile, braccioli 3D e schienale reclinabile." },
      { name: "Con poggiatesta", text: "Per chi si appoggia spesso e lavora molte ore." },
    ],
    considerations: [
      { name: "Supporto lombare", text: "Deve sostenere la curva della schiena e regolarsi in altezza." },
      { name: "Braccioli", text: "Regolabili in altezza per tenere le spalle rilassate." },
      { name: "Seduta", text: "Profondità regolabile e materiali traspiranti." },
      { name: "Portata", text: "Verificate il peso massimo e la qualità della base." },
    ],
    buyingGuide: [
      { profile: "Smart working", text: "Una sedia ergonomica con supporto lombare regolabile." },
      { profile: "Studio", text: "Una sedia operativa regolabile." },
      { profile: "Lunghe giornate", text: "Una sedia con poggiatesta e schienale reclinabile." },
    ],
    faq: [
      { q: "Rete o imbottitura?", a: "La rete è più fresca; l'imbottitura più morbida." },
      { q: "Come regolarla?", a: "Piedi a terra, ginocchia a 90° e avambracci appoggiati." },
      { q: "Le ruote rovinano il pavimento?", a: "Usate ruote morbide o un tappetino." },
    ],
  },
  {
    slug: "scrivanie-regolabili",
    reviewedAt,
    intro: [
      "Le scrivanie regolabili in altezza permettono di alternare posizione seduta ed eretta durante la giornata. Cambiare spesso posizione aiuta a contrastare la sedentarietà.",
      "Stabilità e qualità dei motori sono i fattori più importanti.",
    ],
    types: [
      { name: "Con un motore", text: "Più economiche, adatte a carichi leggeri." },
      { name: "Con due motori", text: "Più veloci, stabili e silenziose." },
      { name: "Solo telaio", text: "Per scegliere un piano su misura." },
    ],
    considerations: [
      { name: "Stabilità", text: "In posizione alta la scrivania non deve oscillare." },
      { name: "Portata", text: "Adeguata a monitor e attrezzature." },
      { name: "Memoria", text: "Posizioni memorizzate per passare rapidamente da seduto a in piedi." },
      { name: "Dimensioni", text: "Un piano profondo permette di tenere il monitor alla giusta distanza." },
    ],
    buyingGuide: [
      { profile: "Postazione semplice", text: "Una scrivania a un motore con piano compatto." },
      { profile: "Più monitor", text: "Una scrivania a due motori con piano largo." },
      { profile: "Piano su misura", text: "Un telaio elettrico." },
    ],
    faq: [
      { q: "Quanto stare in piedi?", a: "Alternate spesso: anche brevi periodi aiutano." },
      { q: "È rumorosa?", a: "I motori moderni sono silenziosi." },
      { q: "Serve un tappetino?", a: "Un tappetino antifatica rende più comodo stare in piedi." },
    ],
  },
  {
    slug: "lampade-scrivania",
    reviewedAt,
    intro: [
      "Una buona luce sulla scrivania riduce l'affaticamento degli occhi. Intensità e temperatura regolabili permettono di adattarla a lavoro e relax.",
      "La qualità della luce conta più della potenza.",
    ],
    types: [
      { name: "A braccio", text: "Orientabili per illuminare esattamente l'area di lavoro." },
      { name: "Per monitor", text: "Illuminano la scrivania senza riflessi sullo schermo." },
      { name: "Senza fili", text: "Ricaricabili e spostabili." },
    ],
    considerations: [
      { name: "Temperatura di colore", text: "Luce più fredda per concentrarsi, più calda la sera." },
      { name: "Sfarfallio", text: "Una luce senza flicker affatica meno." },
      { name: "Resa cromatica", text: "Un CRI elevato mostra i colori in modo naturale." },
      { name: "Regolazioni", text: "Braccio e testa orientabili coprono tutta la scrivania." },
    ],
    buyingGuide: [
      { profile: "Studio", text: "Una lampada a braccio regolabile." },
      { profile: "Lavoro al monitor", text: "Una lampada per monitor." },
      { profile: "Bambini", text: "Una lampada stabile con luce calda." },
    ],
    faq: [
      { q: "Che luminosità serve?", a: "Almeno 500 lux sulla superficie di lavoro." },
      { q: "LED o tradizionale?", a: "I LED consumano meno e scaldano poco." },
      { q: "Dove posizionarla?", a: "Dal lato opposto alla mano con cui scrivete." },
    ],
  },
  {
    slug: "distruggidocumenti",
    reviewedAt,
    intro: [
      "Un distruggidocumenti protegge i dati personali: estratti conto, contratti e documenti sanitari non vanno buttati interi.",
      "Livello di sicurezza e capacità vanno scelti in base al volume di carta.",
    ],
    types: [
      { name: "A strisce", text: "Economici ma meno sicuri." },
      { name: "A frammenti", text: "Taglio incrociato più sicuro." },
      { name: "Ad alimentazione automatica", text: "Si caricano decine di fogli e lavorano da soli." },
    ],
    considerations: [
      { name: "Livello di sicurezza", text: "P-4 o superiore per documenti personali." },
      { name: "Fogli per passata", text: "Indica quanti fogli inserire insieme." },
      { name: "Tempo di funzionamento", text: "Quanti minuti di lavoro continuo prima di raffreddarsi." },
      { name: "Cestino", text: "Un cestino capiente riduce gli svuotamenti." },
    ],
    buyingGuide: [
      { profile: "Casa", text: "Un modello a frammenti P-4." },
      { profile: "Ufficio", text: "Un modello con funzionamento prolungato." },
      { profile: "Archivi", text: "Un modello ad alimentazione automatica." },
    ],
    faq: [
      { q: "Distrugge le graffette?", a: "Molti modelli sì; verificate le specifiche." },
      { q: "Serve lubrificarlo?", a: "Sì, con fogli lubrificanti o olio specifico." },
      { q: "Distrugge carte di credito?", a: "Molti modelli hanno una fessura dedicata." },
    ],
  },
  {
    slug: "etichettatrici",
    reviewedAt,
    intro: [
      "Un'etichettatrice mette ordine in casa e in ufficio: barattoli, cavi, faldoni e scatole diventano subito riconoscibili.",
      "Il costo dei nastri è la spesa ricorrente da considerare.",
    ],
    types: [
      { name: "Palmari con tastiera", text: "Autonome, pratiche per etichette veloci." },
      { name: "Bluetooth", text: "Si progettano le etichette dallo smartphone." },
      { name: "Da scrivania", text: "Collegate al PC per grandi quantità." },
    ],
    considerations: [
      { name: "Nastri", text: "Prezzo, larghezze e materiali disponibili." },
      { name: "Qualità di stampa", text: "Risoluzione e resistenza all'acqua." },
      { name: "Alimentazione", text: "Batterie o ricarica." },
      { name: "Layout tastiera", text: "Verificate la presenza delle lettere accentate." },
    ],
    buyingGuide: [
      { profile: "Casa", text: "Un'etichettatrice Bluetooth economica." },
      { profile: "Ufficio", text: "Un modello con tastiera e nastri laminati." },
      { profile: "Grandi volumi", text: "Un modello da scrivania." },
    ],
    faq: [
      { q: "Le etichette resistono all'acqua?", a: "Quelle laminate sì." },
      { q: "I nastri sono universali?", a: "No, sono specifici per marca e modello." },
      { q: "Si stampano loghi?", a: "Con le app Bluetooth sì." },
    ],
  },
  {
    slug: "bracci-monitor",
    reviewedAt,
    intro: [
      "Un braccio per monitor libera la scrivania e permette di posizionare lo schermo all'altezza e distanza ideali per la postura.",
      "Compatibilità VESA e peso del monitor sono i requisiti principali.",
    ],
    types: [
      { name: "Singoli", text: "Per un monitor." },
      { name: "Doppi", text: "Per due monitor affiancati." },
      { name: "Da appoggio", text: "Senza morsetto, si appoggiano sulla scrivania." },
    ],
    considerations: [
      { name: "VESA", text: "Verificate gli attacchi 75 o 100 mm sul retro del monitor." },
      { name: "Peso", text: "Il braccio deve reggere il peso del monitor." },
      { name: "Molla a gas", text: "Permette di spostare il monitor con una mano." },
      { name: "Fissaggio", text: "Morsetto o foro passante: verificate lo spessore del piano." },
    ],
    buyingGuide: [
      { profile: "Un monitor", text: "Un braccio a gas singolo." },
      { profile: "Due monitor", text: "Un braccio doppio robusto." },
      { profile: "Scrivania non forabile", text: "Un supporto da appoggio." },
    ],
    faq: [
      { q: "Funziona con monitor curvi?", a: "Sì, se rispettano peso e VESA." },
      { q: "Si può ruotare in verticale?", a: "La maggior parte dei bracci lo permette." },
      { q: "Il morsetto rovina la scrivania?", a: "Usate una piastra di rinforzo sui piani sottili." },
    ],
  },
  {
    slug: "cuffie-ufficio",
    reviewedAt,
    intro: [
      "Per riunioni online e chiamate, una cuffia con microfono di qualità fa sentire la vostra voce chiara e riduce i rumori intorno.",
      "Comfort per molte ore e compatibilità con le piattaforme di videochiamata sono essenziali.",
    ],
    types: [
      { name: "Over-ear con ANC", text: "Isolano dal rumore dell'ufficio." },
      { name: "On-ear leggere", text: "Comode per molte chiamate brevi." },
      { name: "Auricolari", text: "Discreti e portatili." },
    ],
    considerations: [
      { name: "Microfono", text: "Riduzione del rumore ambientale per la voce." },
      { name: "Multipoint", text: "Collegamento simultaneo a PC e telefono." },
      { name: "Comfort", text: "Cuscinetti morbidi e peso ridotto." },
      { name: "Certificazioni", text: "Alcune sono certificate per piattaforme specifiche." },
    ],
    buyingGuide: [
      { profile: "Open space", text: "Cuffie over-ear con ANC." },
      { profile: "Molte chiamate", text: "Un modello leggero con buon microfono." },
      { profile: "Mobilità", text: "Auricolari con multipoint." },
    ],
    faq: [
      { q: "Meglio con filo o wireless?", a: "Il wireless è comodo; il filo non ha problemi di batteria." },
      { q: "Funzionano con Teams e Zoom?", a: "Quasi tutte, via Bluetooth o USB." },
      { q: "Serve il mute fisico?", a: "È molto pratico nelle riunioni." },
    ],
  },
  {
    slug: "zaini-porta-pc",
    reviewedAt,
    intro: [
      "Uno zaino porta PC protegge il portatile negli spostamenti e tiene in ordine caricabatterie, documenti e oggetti personali.",
      "Scomparto imbottito e comfort degli spallacci sono le caratteristiche principali.",
    ],
    types: [
      { name: "Urbani", text: "Eleganti e compatti per l'ufficio." },
      { name: "Da viaggio", text: "Più capienti, apribili a valigia." },
      { name: "Impermeabili", text: "Per chi si sposta in bici o a piedi." },
    ],
    considerations: [
      { name: "Scomparto PC", text: "Imbottito e adatto alla dimensione del portatile." },
      { name: "Organizzazione", text: "Tasche per cavi e accessori." },
      { name: "Comfort", text: "Spallacci imbottiti e schienale traspirante." },
      { name: "Sicurezza", text: "Tasche nascoste e zip antifurto." },
    ],
    buyingGuide: [
      { profile: "Ufficio", text: "Uno zaino urbano con scomparto imbottito." },
      { profile: "Viaggi di lavoro", text: "Uno zaino da viaggio apribile." },
      { profile: "Bici", text: "Uno zaino impermeabile con dettagli riflettenti." },
    ],
    faq: [
      { q: "Che dimensione scegliere?", a: "Lo scomparto deve corrispondere ai pollici del portatile." },
      { q: "È adatto come bagaglio a mano?", a: "Verificate le misure richieste dalla compagnia aerea." },
      { q: "Ha la porta USB?", a: "Alcuni modelli hanno un passaggio per collegare un power bank." },
    ],
  },
  {
    slug: "scanner-documenti",
    reviewedAt,
    intro: [
      "Uno scanner per documenti digitalizza fatture, ricevute e contratti velocemente, con riconoscimento del testo per archivi ricercabili.",
      "Velocità e alimentatore automatico sono decisivi con grandi volumi.",
    ],
    types: [
      { name: "Con alimentatore", text: "Scansionano pile di fogli fronte-retro." },
      { name: "Portatili", text: "Compatti per viaggi e piccoli uffici." },
      { name: "Piani", text: "Per libri, foto e documenti delicati." },
    ],
    considerations: [
      { name: "Velocità", text: "Pagine al minuto in fronte-retro." },
      { name: "Software", text: "Riconoscimento del testo e invio a cloud." },
      { name: "Connettività", text: "Wi-Fi o USB." },
      { name: "Formati", text: "Ricevute, biglietti da visita e documenti lunghi." },
    ],
    buyingGuide: [
      { profile: "Archivio domestico", text: "Uno scanner con alimentatore compatto." },
      { profile: "Ufficio", text: "Uno scanner veloce con Wi-Fi." },
      { profile: "Viaggio", text: "Uno scanner portatile." },
    ],
    faq: [
      { q: "Meglio dello smartphone?", a: "Per grandi volumi sì, per velocità e qualità." },
      { q: "Crea PDF ricercabili?", a: "Sì, con il software di riconoscimento testo." },
      { q: "Scansiona foto?", a: "Gli scanner piani danno risultati migliori." },
    ],
  },
  {
    slug: "videoproiettori",
    reviewedAt,
    intro: [
      "Un videoproiettore porta immagini molto grandi in salotto, in ufficio o in giardino. Luminosità reale e contrasto determinano la qualità dell'immagine.",
      "La stanza conta: più è buia, migliore sarà il risultato.",
    ],
    types: [
      { name: "Portatili", text: "Compatti, spesso con batteria e sistema smart." },
      { name: "Home cinema", text: "Alta risoluzione e contrasto per film." },
      { name: "Per presentazioni", text: "Molto luminosi per stanze illuminate." },
    ],
    considerations: [
      { name: "Luminosità", text: "Fidatevi dei lumen ANSI o ISO, più affidabili dei valori commerciali." },
      { name: "Risoluzione", text: "Full HD nativo come base; 4K per grandi schermi." },
      { name: "Sorgente luminosa", text: "Laser e LED durano più delle lampade." },
      { name: "Rumore", text: "Importante nelle scene silenziose dei film." },
    ],
    buyingGuide: [
      { profile: "Film in casa", text: "Un proiettore Full HD o 4K con buon contrasto." },
      { profile: "Esterni e viaggi", text: "Un proiettore portatile con batteria." },
      { profile: "Ufficio", text: "Un proiettore luminoso per presentazioni." },
    ],
    faq: [
      { q: "Serve uno schermo?", a: "Migliora l'immagine, ma una parete bianca liscia può bastare." },
      { q: "Quanto lontano posizionarlo?", a: "Dipende dal rapporto di proiezione: verificate le specifiche." },
      { q: "Si vede di giorno?", a: "Solo con modelli molto luminosi e stanza oscurata." },
    ],
  },
];
