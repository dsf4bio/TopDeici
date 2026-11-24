import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

export const guides: CategoryGuide[] = [
  {
    slug: "aspirapolvere-senza-filo",
    reviewedAt,
    intro: [
      "Le scope elettriche senza filo hanno cambiato le pulizie di casa: si prendono dalla base, si passa una stanza in pochi minuti e si rimettono a posto. Per molte famiglie hanno sostituito del tutto l'aspirapolvere tradizionale.",
      "Le differenze tra i modelli stanno nella potenza reale di aspirazione, nell'autonomia alla potenza che userete davvero e nella qualità della spazzola, soprattutto con tappeti e peli di animali.",
    ],
    types: [
      { name: "Scope leggere", text: "Per la manutenzione quotidiana di case piccole: maneggevoli, ma con serbatoio e autonomia ridotti." },
      { name: "Scope potenti", text: "Aspirazione elevata, filtrazione accurata e accessori per tappeti, divani e auto: possono sostituire il traino." },
      { name: "Aspira e lava", text: "Aspirano e lavano i pavimenti in un solo passaggio, con serbatoi separati per acqua pulita e sporca." },
    ],
    considerations: [
      { name: "Autonomia reale", text: "L'autonomia dichiarata è in modalità minima: alla potenza media si riduce spesso della metà. Le batterie rimovibili permettono di raddoppiarla." },
      { name: "Spazzola", text: "Una spazzola anti-groviglio evita che peli e capelli si avvolgano attorno al rullo." },
      { name: "Filtrazione", text: "Un filtro HEPA e un sistema sigillato trattengono le polveri sottili, importanti per chi soffre di allergie." },
      { name: "Peso ed equilibrio", text: "Una scopa ben bilanciata stanca meno, soprattutto quando si pulisce in alto o sotto i mobili." },
    ],
    buyingGuide: [
      { profile: "Appartamento con pavimenti duri", text: "Una scopa leggera con buona autonomia e base di ricarica a parete." },
      { profile: "Casa con animali", text: "Spazzola anti-groviglio, alta potenza e un accessorio per divani e tessuti." },
      { profile: "Casa grande", text: "Batteria rimovibile o seconda batteria per coprire tutte le stanze in una volta." },
    ],
    faq: [
      { q: "Sostituisce l'aspirapolvere tradizionale?", a: "Per la maggior parte delle case sì; per moquette molto spesse un traino resta più efficace." },
      { q: "Ogni quanto lavare i filtri?", a: "Il prefiltro ogni poche settimane, sotto l'acqua corrente e lasciandolo asciugare completamente." },
      { q: "Quanto dura la batteria?", a: "Di solito diversi anni; molti produttori vendono batterie di ricambio." },
    ],
  },
  {
    slug: "purificatori-aria",
    reviewedAt,
    intro: [
      "Un purificatore d'aria filtra pollini, polveri sottili, peli di animali e odori. È particolarmente utile per chi soffre di allergie, in città trafficate e nelle stanze dove si dorme.",
      "Il dato più importante è il CADR, cioè quanta aria pulita il purificatore fornisce all'ora: deve essere adeguato alla dimensione della stanza.",
    ],
    types: [
      { name: "Compatti", text: "Per camere da letto e uffici fino a 20-25 m², silenziosi di notte." },
      { name: "Per soggiorni", text: "CADR più alto e sensori della qualità dell'aria per ambienti ampi e aperti." },
      { name: "Multifunzione", text: "Combinano purificazione con umidificazione, ventilazione o riscaldamento." },
    ],
    considerations: [
      { name: "CADR e stanza", text: "Come indicazione, il CADR in m³/h dovrebbe essere almeno 5 volte i metri quadrati della stanza, per ricambiare l'aria più volte all'ora." },
      { name: "Filtro", text: "Un vero filtro HEPA H13 trattiene le particelle più fini; il carbone attivo aiuta contro gli odori." },
      { name: "Costo dei filtri", text: "Verificate prezzo e durata dei filtri di ricambio: sono la spesa ricorrente principale." },
      { name: "Rumore", text: "In camera da letto serve una modalità notte silenziosa, intorno ai 25 dB o meno." },
    ],
    buyingGuide: [
      { profile: "Allergie", text: "Filtro HEPA H13, CADR adeguato alla stanza e uso continuo nella stagione dei pollini." },
      { profile: "Animali", text: "Prefiltro lavabile per i peli e carbone attivo per gli odori." },
      { profile: "Camera da letto", text: "Un modello compatto con modalità notte e luci disattivabili." },
    ],
    faq: [
      { q: "Va tenuto sempre acceso?", a: "Per risultati costanti sì, in modalità automatica o a bassa velocità." },
      { q: "Elimina i virus?", a: "I filtri HEPA trattengono anche particelle molto piccole, ma non sostituiscono il ricambio d'aria." },
      { q: "Ogni quanto cambiare il filtro?", a: "In genere ogni 6-12 mesi, in base all'uso e all'inquinamento: molti modelli lo segnalano." },
    ],
  },
  {
    slug: "deumidificatori",
    reviewedAt,
    intro: [
      "Un'umidità troppo alta favorisce muffa, condensa sui vetri e cattivi odori. Il deumidificatore riporta l'aria sui valori ideali, tra il 40 e il 60%, e aiuta anche ad asciugare il bucato in casa.",
      "La capacità in litri al giorno va scelta in base alla dimensione dell'ambiente e a quanto è umido.",
    ],
    types: [
      { name: "A compressore", text: "Efficienti a temperature miti, sono i più diffusi per abitazioni e taverne." },
      { name: "Ad adsorbimento", text: "Funzionano bene anche al freddo, in cantine e garage non riscaldati, ma consumano di più." },
      { name: "Mini deumidificatori", text: "Per armadi e piccoli bagni: capacità molto ridotta, utili solo in spazi chiusi." },
    ],
    considerations: [
      { name: "Capacità", text: "10-12 litri al giorno per appartamenti; 20 litri o più per case grandi o molto umide." },
      { name: "Serbatoio e scarico", text: "Un serbatoio capiente o lo scarico continuo con tubo evitano svuotamenti frequenti." },
      { name: "Igrostato", text: "Permette di impostare l'umidità desiderata: l'apparecchio si accende solo quando serve." },
      { name: "Rumore e consumi", text: "Valutate il rumore se lo usate in camera e la potenza assorbita per l'uso prolungato." },
    ],
    buyingGuide: [
      { profile: "Appartamento", text: "Un modello a compressore da 10-12 litri con igrostato e modalità bucato." },
      { profile: "Cantina o taverna fredda", text: "Un modello ad adsorbimento o un compressore adatto alle basse temperature." },
      { profile: "Muffa persistente", text: "Capacità elevata, scarico continuo e uso costante nelle stagioni umide." },
    ],
    faq: [
      { q: "Quanto consuma?", a: "Dipende da potenza e ore di funzionamento; l'igrostato riduce i consumi accendendolo solo quando serve." },
      { q: "Si può usare in camera da letto?", a: "Sì, con modelli silenziosi o con modalità notte." },
      { q: "Basta per eliminare la muffa?", a: "Aiuta a prevenirla, ma va affrontata anche la causa: ponti termici, infiltrazioni o scarsa aerazione." },
    ],
  },
  {
    slug: "ventilatori",
    reviewedAt,
    intro: [
      "Un ventilatore consuma molto meno di un climatizzatore e, se ben scelto, rende sopportabili le giornate più calde. I modelli moderni sono più silenziosi e regolabili di quelli di qualche anno fa.",
      "La forma conta: a piantana per spostare molta aria, a torre per occupare poco spazio, da tavolo per l'uso personale.",
    ],
    types: [
      { name: "A piantana", text: "Grandi pale e alta portata d'aria, ideali per soggiorni e camere." },
      { name: "A torre", text: "Ingombro ridotto e design discreto, con flusso d'aria verticale e uniforme." },
      { name: "Da tavolo e portatili", text: "Per scrivania e comodino, spesso ricaricabili via USB." },
    ],
    considerations: [
      { name: "Motore DC", text: "I motori DC consumano meno, sono più silenziosi e offrono più velocità." },
      { name: "Oscillazione", text: "L'oscillazione orizzontale e verticale distribuisce l'aria in tutta la stanza." },
      { name: "Rumore", text: "Per la notte cercate una modalità silenziosa e un display oscurabile." },
      { name: "Telecomando e timer", text: "Comodi per regolare il ventilatore dal letto e spegnerlo automaticamente." },
    ],
    buyingGuide: [
      { profile: "Camera da letto", text: "Un modello con motore DC, modalità notte e timer." },
      { profile: "Soggiorno", text: "Un ventilatore a piantana o a torre con oscillazione ampia." },
      { profile: "Scrivania", text: "Un ventilatore da tavolo compatto e silenzioso, anche ricaricabile." },
    ],
    faq: [
      { q: "Abbassa la temperatura?", a: "No: dà sollievo muovendo l'aria sulla pelle. Per abbassare la temperatura serve un climatizzatore." },
      { q: "Quanto consuma?", a: "Pochi watt rispetto a un condizionatore; i modelli DC sono i più efficienti." },
      { q: "Come si pulisce?", a: "Molti modelli hanno griglie removibili; staccate sempre la corrente prima di pulirlo." },
    ],
  },
  {
    slug: "termostati-smart",
    reviewedAt,
    intro: [
      "Un termostato smart permette di programmare e controllare il riscaldamento dallo smartphone, evitando di scaldare la casa quando non c'è nessuno. È uno dei modi più semplici per ridurre i consumi.",
      "Prima dell'acquisto è fondamentale verificare la compatibilità con la propria caldaia o impianto e il tipo di installazione.",
    ],
    types: [
      { name: "Termostati per caldaia", text: "Sostituiscono il termostato esistente e controllano la caldaia autonoma." },
      { name: "Valvole termostatiche smart", text: "Si montano sui termosifoni e regolano la temperatura stanza per stanza." },
      { name: "Cronotermostati a batteria", text: "Installazione semplice senza nuovi cavi, adatti a chi non vuole interventi elettrici." },
    ],
    considerations: [
      { name: "Compatibilità", text: "Verificate il tipo di impianto: caldaia autonoma, centralizzato con valvole, pompa di calore." },
      { name: "Alimentazione", text: "Alcuni modelli richiedono l'alimentazione a 230 V, altri funzionano a batterie." },
      { name: "Geolocalizzazione", text: "Spegne il riscaldamento quando uscite e lo riaccende prima del rientro." },
      { name: "Ecosistema", text: "Verificate la compatibilità con gli assistenti vocali e con l'app che usate per la casa connessa." },
    ],
    buyingGuide: [
      { profile: "Caldaia autonoma", text: "Un termostato Wi-Fi compatibile con la vostra caldaia e con programmazione settimanale." },
      { profile: "Riscaldamento centralizzato", text: "Valvole termostatiche smart sui termosifoni, stanza per stanza." },
      { profile: "Installazione fai-da-te", text: "Un modello a batterie che sostituisce il termostato senza nuovi cavi." },
    ],
    faq: [
      { q: "Si risparmia davvero?", a: "Programmare orari e temperature e spegnere quando si è fuori riduce sensibilmente i consumi." },
      { q: "Serve un elettricista?", a: "Per i modelli a 230 V è consigliato; molti modelli a batteria si installano da soli." },
      { q: "Funziona senza internet?", a: "Il programma impostato continua a funzionare, ma si perde il controllo da remoto." },
    ],
  },
  {
    slug: "materassi",
    reviewedAt,
    intro: [
      "Passiamo circa un terzo della vita a letto: il materasso giusto incide su riposo, schiena e umore. Non esiste un modello perfetto per tutti, ma quello adatto a peso, posizione e abitudini di chi ci dorme.",
      "Le recensioni aiutano, ma conta molto il periodo di prova: molti produttori permettono di restituire il materasso dopo alcune settimane.",
    ],
    types: [
      { name: "Memory foam", text: "Si adatta alla forma del corpo e assorbe i movimenti del partner; può risultare caldo per alcune persone." },
      { name: "A molle insacchettate", text: "Sostegno elastico e buona traspirazione, con molle indipendenti che limitano i movimenti." },
      { name: "Ibridi", text: "Combinano molle e strati di memory: sostegno e comfort insieme." },
    ],
    considerations: [
      { name: "Rigidità", text: "Chi dorme sul fianco preferisce di solito materassi più morbidi; chi dorme supino o prono più rigidi." },
      { name: "Altezza", text: "Spessori maggiori offrono più comfort e durata, ma servono lenzuola adeguate." },
      { name: "Traspirabilità", text: "Strati in gel, schiume a celle aperte e fodere traspiranti aiutano chi soffre il caldo." },
      { name: "Sfoderabilità", text: "Una fodera removibile e lavabile mantiene il materasso igienico nel tempo." },
    ],
    buyingGuide: [
      { profile: "Dormo sul fianco", text: "Un memory o ibrido di rigidità media che accolga spalle e fianchi." },
      { profile: "Soffro il caldo", text: "Un materasso a molle o con strati traspiranti e fodera fresca." },
      { profile: "In coppia", text: "Un modello che isoli bene i movimenti e con bordi rinforzati." },
    ],
    faq: [
      { q: "Quanto tempo serve per abituarsi?", a: "Di solito da due a quattro settimane: per questo il periodo di prova è importante." },
      { q: "I materassi arrivano arrotolati?", a: "Molti sì: vanno aperti e lasciati espandere per alcune ore prima dell'uso." },
      { q: "Ogni quanto cambiarlo?", a: "In genere ogni 8-10 anni, o prima se compaiono avvallamenti." },
    ],
  },
  {
    slug: "cuscini",
    reviewedAt,
    intro: [
      "Il cuscino sostiene testa e collo: se è troppo alto o troppo basso, la colonna resta piegata per tutta la notte e al risveglio si sentono rigidità e dolori.",
      "La scelta dipende soprattutto dalla posizione in cui dormite e dalla larghezza delle spalle.",
    ],
    types: [
      { name: "Memory cervicali", text: "Con forma a onda che sostiene il collo, adatti a chi dorme supino o sul fianco." },
      { name: "Memory tradizionali", text: "Forma classica che si adatta alla testa, con sostegno uniforme." },
      { name: "Regolabili", text: "Con strati o imbottitura rimovibili per scegliere l'altezza giusta." },
    ],
    considerations: [
      { name: "Altezza", text: "Chi dorme sul fianco ha bisogno di un cuscino più alto; chi dorme a pancia in giù di uno basso." },
      { name: "Rigidità", text: "Un cuscino troppo morbido fa affondare la testa; uno troppo rigido crea pressione." },
      { name: "Traspirabilità", text: "Fodere traspiranti e memory con gel aiutano chi suda di notte." },
      { name: "Igiene", text: "Una fodera sfoderabile e lavabile prolunga la vita del cuscino." },
    ],
    buyingGuide: [
      { profile: "Dormo sul fianco", text: "Un cuscino cervicale di altezza medio-alta." },
      { profile: "Dormo supino", text: "Un cervicale a onda di altezza media." },
      { profile: "Non so quale altezza", text: "Un modello regolabile permette di trovare la misura giusta." },
    ],
    faq: [
      { q: "Il memory ha un odore all'inizio?", a: "Sì, è normale: lasciatelo arieggiare qualche giorno." },
      { q: "Ogni quanto cambiarlo?", a: "In genere ogni due o tre anni." },
      { q: "Aiuta contro il dolore cervicale?", a: "Un buon sostegno può aiutare; per dolori persistenti è bene consultare un medico." },
    ],
  },
  {
    slug: "lampadine-smart",
    reviewedAt,
    intro: [
      "Le lampadine smart si controllano da app, con la voce o con automazioni: si accendono al tramonto, si spengono quando uscite e cambiano tonalità in base al momento della giornata.",
      "Sono il primo passo più semplice verso la casa connessa, perché si avvitano al posto delle lampadine tradizionali.",
    ],
    types: [
      { name: "Bianche regolabili", text: "Passano dalla luce calda alla luce fredda, utile per lavorare di giorno e rilassarsi la sera." },
      { name: "A colori", text: "Milioni di colori per atmosfere e decorazioni." },
      { name: "Kit con hub", text: "Più stabili e con funzioni avanzate, ideali per controllare molte luci insieme." },
    ],
    considerations: [
      { name: "Attacco", text: "Verificate il tipo di attacco, come E27, E14 o GU10, e le dimensioni della lampadina." },
      { name: "Protocollo", text: "Wi-Fi, Bluetooth, Zigbee o Matter: determina se serve un hub e con quali sistemi funziona." },
      { name: "Luminosità", text: "Controllate i lumen: lampadine poco luminose non bastano per un soggiorno." },
      { name: "Interruttore", text: "Le lampadine smart devono restare alimentate: va spento solo dall'app, non dall'interruttore a muro." },
    ],
    buyingGuide: [
      { profile: "Primo approccio", text: "Un paio di lampadine Wi-Fi o Bluetooth senza hub." },
      { profile: "Tutta la casa", text: "Un sistema con hub o compatibile Matter per gestire molte luci." },
      { profile: "Atmosfere", text: "Lampadine a colori o strisce LED con sincronizzazione con TV e musica." },
    ],
    faq: [
      { q: "Consumano di più?", a: "No: sono LED, con consumi bassi. In stand-by assorbono pochissimo." },
      { q: "Funzionano senza internet?", a: "Molti sistemi funzionano anche in rete locale; con alcuni si perde il controllo remoto." },
      { q: "Servono interruttori speciali?", a: "No, ma esistono interruttori smart da affiancare per non togliere corrente." },
    ],
  },
  {
    slug: "videocamere-sicurezza",
    reviewedAt,
    intro: [
      "Le videocamere Wi-Fi permettono di controllare casa, animali e ingressi dallo smartphone, con notifiche quando rilevano un movimento. Sono semplici da installare e molto più economiche dei sistemi tradizionali.",
      "Prima di scegliere, pensate a dove andranno: interni o esterni, alimentazione disponibile e come volete archiviare le registrazioni.",
    ],
    types: [
      { name: "Da interno", text: "Compatte, spesso motorizzate per ruotare e seguire il movimento." },
      { name: "Da esterno", text: "Resistenti all'acqua, con visione notturna potente e talvolta faretto." },
      { name: "A batteria o solari", text: "Senza cavi di alimentazione, flessibili da posizionare ma con autonomia da gestire." },
    ],
    considerations: [
      { name: "Risoluzione e notte", text: "2K o superiore offre dettagli più leggibili; la visione notturna a colori aiuta a riconoscere persone e auto." },
      { name: "Archiviazione", text: "MicroSD in locale o cloud in abbonamento: valutate costi e sicurezza." },
      { name: "Rilevamento", text: "Il riconoscimento di persone e veicoli riduce le notifiche inutili." },
      { name: "Privacy", text: "Riprendere spazi pubblici o vicini ha limiti legali; scegliete modelli con modalità privacy." },
    ],
    buyingGuide: [
      { profile: "Controllare casa e animali", text: "Una camera da interno motorizzata con audio bidirezionale." },
      { profile: "Ingresso e giardino", text: "Una camera da esterno IP65 o superiore con visione notturna." },
      { profile: "Senza cavi", text: "Una camera a batteria con pannello solare." },
    ],
    faq: [
      { q: "Serve l'abbonamento?", a: "Non sempre: molti modelli registrano su microSD. Il cloud offre backup e funzioni aggiuntive." },
      { q: "Si possono riprendere aree pubbliche?", a: "Con forti limiti: la normativa privacy impone di inquadrare solo la propria proprietà e segnalare le telecamere." },
      { q: "Funzionano senza Wi-Fi?", a: "Alcune registrano in locale, ma senza rete non inviano notifiche." },
    ],
  },
];
