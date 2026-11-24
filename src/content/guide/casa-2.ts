import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

export const guides: CategoryGuide[] = [
  {
    slug: "condizionatori-portatili",
    reviewedAt,
    intro: [
      "Un condizionatore portatile rinfresca una stanza senza lavori di installazione: si sposta su ruote e scarica l'aria calda fuori dalla finestra con un tubo. È la soluzione per chi è in affitto o non può montare un climatizzatore fisso.",
      "Rende meno di un impianto fisso ed è più rumoroso, quindi conta scegliere la potenza giusta per la stanza e sigillare bene la finestra.",
    ],
    types: [
      { name: "Monotubo", text: "I più diffusi ed economici: un solo tubo per espellere l'aria calda." },
      { name: "Doppio tubo", text: "Più efficienti, perché prendono l'aria da fuori invece che dalla stanza." },
      { name: "Con pompa di calore", text: "Riscaldano anche nelle mezze stagioni." },
    ],
    considerations: [
      { name: "Potenza", text: "Come indicazione, 9.000 BTU per stanze fino a 25 m² e 12.000 BTU fino a 35 m², a seconda di esposizione e isolamento." },
      { name: "Rumore", text: "Per la camera da letto cercate una modalità notte e valori di rumore bassi." },
      { name: "Kit finestra", text: "Un buon kit di sigillatura della finestra migliora molto il rendimento." },
      { name: "Consumi", text: "Guardate la classe energetica e il gas refrigerante, preferibilmente R290." },
    ],
    buyingGuide: [
      { profile: "Camera da letto", text: "9.000 BTU con modalità notte silenziosa e timer." },
      { profile: "Soggiorno", text: "12.000 BTU, meglio a doppio tubo o con buona efficienza." },
      { profile: "Casa in affitto", text: "Un modello monotubo con kit finestra universale." },
    ],
    faq: [
      { q: "Serve per forza la finestra?", a: "Sì: il tubo deve scaricare l'aria calda all'esterno, altrimenti la stanza non si rinfresca." },
      { q: "E l'acqua di condensa?", a: "Molti modelli la fanno evaporare da soli; in giornate molto umide può servire svuotare la vaschetta." },
      { q: "Raffrescatori e condizionatori sono uguali?", a: "No: i raffrescatori evaporativi non abbassano davvero la temperatura come un condizionatore." },
    ],
  },
  {
    slug: "stufette-elettriche",
    reviewedAt,
    intro: [
      "Una stufetta elettrica scalda in fretta una stanza o un bagno quando il riscaldamento non basta o non è acceso. È pratica, ma consuma molta corrente: va usata per periodi brevi e in spazi limitati.",
      "Le tecnologie cambiano il modo di scaldare: aria calda immediata, calore diffuso e costante o calore radiante diretto.",
    ],
    types: [
      { name: "Termoventilatori e ceramici", text: "Scaldano subito una stanza piccola, ideali per il bagno al mattino." },
      { name: "Radiatori a olio", text: "Più lenti a partire, ma il calore è silenzioso, uniforme e duraturo." },
      { name: "Termoconvettori e pannelli", text: "Calore diffuso per stanze medie, spesso da parete." },
    ],
    considerations: [
      { name: "Potenza e contatore", text: "Le stufette arrivano a 2.000 W: con contatori da 3 kW attenzione a forno e lavatrice accesi insieme." },
      { name: "Termostato", text: "Un termostato regolabile evita sprechi mantenendo la temperatura voluta." },
      { name: "Sicurezza", text: "Spegnimento antiribaltamento e protezione dal surriscaldamento sono indispensabili." },
      { name: "Uso in bagno", text: "Per il bagno servono modelli con adeguata protezione contro gli spruzzi." },
    ],
    buyingGuide: [
      { profile: "Bagno al mattino", text: "Un termoventilatore ceramico compatto, con protezione per ambienti umidi." },
      { profile: "Studio o camera", text: "Un radiatore a olio con termostato, silenzioso." },
      { profile: "Ufficio sotto la scrivania", text: "Una piccola stufetta ceramica a bassa potenza con oscillazione." },
    ],
    faq: [
      { q: "Quanto consuma?", a: "Una stufetta da 2.000 W accesa per un'ora consuma 2 kWh: il costo dipende dalla vostra tariffa." },
      { q: "Si può lasciare accesa di notte?", a: "Meglio di no; se necessario, usate timer e termostato e un modello con tutte le protezioni." },
      { q: "Si può collegare a una ciabatta?", a: "Meglio direttamente a una presa a muro, per evitare surriscaldamenti." },
    ],
  },
  {
    slug: "scaldasonno",
    reviewedAt,
    intro: [
      "Lo scaldasonno riscalda il letto prima di coricarsi, così non serve tenere alta la temperatura della camera. Consuma pochissimo rispetto a una stufetta ed è un modo economico per dormire al caldo.",
      "Le coperte elettriche fanno lo stesso sul divano, avvolgendo chi le usa.",
    ],
    types: [
      { name: "Scaldasonno singoli", text: "Per letti a una piazza o per riscaldare un solo lato." },
      { name: "Matrimoniali a doppio comando", text: "Due zone indipendenti, ognuno sceglie il proprio calore." },
      { name: "Coperte elettriche", text: "Da usare sul divano o sopra il piumone, in tessuto morbido." },
    ],
    considerations: [
      { name: "Spegnimento automatico", text: "Fondamentale: spegne lo scaldasonno dopo un tempo prestabilito." },
      { name: "Livelli di calore", text: "Più livelli permettono di scaldare forte all'inizio e mantenere poi un tepore leggero." },
      { name: "Misura", text: "Scegliete la misura del materasso, con fasce elastiche che lo tengano fermo." },
      { name: "Lavabilità", text: "Togliendo il comando, molti modelli si lavano in lavatrice a bassa temperatura." },
    ],
    buyingGuide: [
      { profile: "Coppia con esigenze diverse", text: "Uno scaldasonno matrimoniale a doppio comando." },
      { profile: "Piedi sempre freddi", text: "Un modello con zona piedi a calore extra." },
      { profile: "Serate sul divano", text: "Una coperta elettrica morbida con timer." },
    ],
    faq: [
      { q: "Si può tenere acceso tutta la notte?", a: "È meglio scaldare il letto prima e poi spegnerlo o usare il livello minimo con timer." },
      { q: "Quanto consuma?", a: "Pochissimo: in genere 60-120 W, molto meno di una stufetta." },
      { q: "Va sopra o sotto il lenzuolo?", a: "Lo scaldasonno va sotto il lenzuolo, sopra il materasso, ben steso e senza pieghe." },
    ],
  },
  {
    slug: "lavapavimenti",
    reviewedAt,
    intro: [
      "Le lavapavimenti senza filo aspirano lo sporco e lavano il pavimento in un solo passaggio, con acqua pulita sempre separata da quella sporca. Sostituiscono scopa, secchio e mocio in molte case.",
      "Differiscono per autonomia, capacità dei serbatoi e sistema di autopulizia del rullo, che fa la differenza nella manutenzione.",
    ],
    types: [
      { name: "Lavasciuga compatte", text: "Leggere e maneggevoli, per appartamenti e pulizie frequenti." },
      { name: "Con autopulizia", text: "Lavano e asciugano il rullo nella base, riducendo odori e manutenzione." },
      { name: "Multifunzione", text: "Aspirano anche a secco o diventano aspirapolvere portatili." },
    ],
    considerations: [
      { name: "Autonomia", text: "30-40 minuti coprono un appartamento medio." },
      { name: "Serbatoi", text: "Un serbatoio grande evita di fermarsi a metà pulizia per rabboccare." },
      { name: "Bordi", text: "Una pulizia vicina al battiscopa evita di passare a mano gli angoli." },
      { name: "Asciugatura del rullo", text: "L'asciugatura ad aria calda evita cattivi odori nel tempo." },
    ],
    buyingGuide: [
      { profile: "Casa con bambini o animali", text: "Un modello con autopulizia e sensore dello sporco." },
      { profile: "Appartamento piccolo", text: "Una lavasciuga leggera con 30 minuti di autonomia." },
      { profile: "Pavimenti delicati", text: "Regolazione dell'acqua e rulli morbidi, adatti anche al parquet trattato." },
    ],
    faq: [
      { q: "Va bene sul parquet?", a: "Su parquet trattato sì, con poca acqua; controllate le indicazioni del produttore del pavimento." },
      { q: "Sostituisce l'aspirapolvere?", a: "Sui pavimenti duri spesso sì; per tappeti serve comunque un aspirapolvere." },
      { q: "Serve un detergente specifico?", a: "Meglio usare quello indicato dal produttore, per non danneggiare il sistema." },
    ],
  },
  {
    slug: "ferri-da-stiro",
    reviewedAt,
    intro: [
      "Il vapore è ciò che distende davvero le pieghe: più vapore costante e più forte è il colpo, più velocemente si stira. Per questo i ferri con caldaia separata sono molto più rapidi di quelli tradizionali.",
      "Contano anche la qualità della piastra, che deve scorrere bene, e il sistema anticalcare.",
    ],
    types: [
      { name: "Ferri a vapore", text: "Compatti ed economici, per stirare poco o occasionalmente." },
      { name: "Generatori di vapore", text: "Caldaia separata con molta più potenza: ideali per famiglie e grandi quantità." },
      { name: "Stiratori verticali", text: "Per rinfrescare camicie e abiti appesi, senza asse." },
    ],
    considerations: [
      { name: "Vapore continuo e colpo", text: "Valori alti di vapore in g/min significano meno passaggi sullo stesso capo." },
      { name: "Piastra", text: "Piastre in ceramica o acciaio scorrono bene e resistono ai graffi." },
      { name: "Anticalcare", text: "Un sistema facile da svuotare allunga la vita del ferro, soprattutto con acqua dura." },
      { name: "Serbatoio", text: "Un serbatoio grande permette di stirare a lungo senza rabboccare." },
    ],
    buyingGuide: [
      { profile: "Famiglia numerosa", text: "Un generatore di vapore con serbatoio grande e pressione alta." },
      { profile: "Stiro occasionale", text: "Un buon ferro a vapore con piastra in ceramica." },
      { profile: "Poco spazio", text: "Uno stiratore verticale per i capi appesi." },
    ],
    faq: [
      { q: "Si può usare l'acqua del rubinetto?", a: "Dipende dal modello: molti la accettano, ma con acqua dura il calcare va rimosso spesso." },
      { q: "Il generatore di vapore rovina i tessuti delicati?", a: "No, se si usa la temperatura adatta; molti hanno una regolazione automatica." },
      { q: "Ogni quanto decalcificare?", a: "Secondo le indicazioni del produttore, più spesso se l'acqua è dura." },
    ],
  },
  {
    slug: "umidificatori",
    reviewedAt,
    intro: [
      "Con i riscaldamenti accesi l'aria in casa diventa molto secca: gola irritata, labbra screpolate e sonno disturbato. Un umidificatore riporta l'umidità verso valori più confortevoli, tra il 40 e il 60%.",
      "Contano la capacità del serbatoio, un igrostato che misuri e mantenga l'umidità e la facilità di pulizia, per evitare muffe e batteri.",
    ],
    types: [
      { name: "A ultrasuoni", text: "Silenziosi e a basso consumo, producono una nebbia fredda." },
      { name: "A vapore caldo", text: "Più igienici perché fanno bollire l'acqua, ma consumano di più." },
      { name: "Evaporativi", text: "Non lasciano polvere bianca e si autoregolano, ma servono filtri." },
    ],
    considerations: [
      { name: "Igrostato", text: "Mantiene l'umidità al livello impostato, evitando di esagerare." },
      { name: "Serbatoio", text: "Almeno 3-4 litri per funzionare tutta la notte." },
      { name: "Pulizia", text: "Un'apertura larga del serbatoio rende facile lavarlo ogni pochi giorni." },
      { name: "Acqua dura", text: "Con gli ultrasuoni l'acqua dura può lasciare polvere bianca: usate acqua demineralizzata o un filtro." },
    ],
    buyingGuide: [
      { profile: "Camera da letto", text: "Un modello a ultrasuoni silenzioso, con igrostato e luci disattivabili." },
      { profile: "Cameretta dei bambini", text: "Un umidificatore facile da pulire, posizionato lontano dalla culla." },
      { profile: "Soggiorno ampio", text: "Un modello con serbatoio grande e copertura adeguata ai metri quadri." },
    ],
    faq: [
      { q: "Qual è l'umidità ideale?", a: "In genere tra il 40 e il 60%: oltre, aumenta il rischio di muffa." },
      { q: "Si possono mettere oli essenziali?", a: "Solo nei modelli che lo prevedono, nell'apposita vaschetta." },
      { q: "Ogni quanto pulirlo?", a: "Svuotatelo ogni giorno e lavatelo almeno una volta a settimana." },
    ],
  },
  {
    slug: "pulitori-vapore",
    reviewedAt,
    intro: [
      "Il vapore ad alta temperatura scioglie grasso e sporco e igienizza le superfici senza detergenti. È utile su pavimenti, fughe, sanitari, piani cottura e vetri.",
      "Le scope a vapore sono pensate per i pavimenti; i pulitori con caldaia offrono più potenza e accessori per tutta la casa.",
    ],
    types: [
      { name: "Scope a vapore", text: "Leggere e pronte in pochi secondi, per lavare pavimenti duri." },
      { name: "Pulitori a caldaia", text: "Vapore più potente e continuo, con lance e spazzole per bagno e cucina." },
      { name: "Portatili", text: "Piccoli e maneggevoli, per fughe, rubinetti e piccole superfici." },
    ],
    considerations: [
      { name: "Pressione e temperatura", text: "Più pressione significa più efficacia su grasso e sporco incrostato." },
      { name: "Tempo di riscaldamento", text: "Da pochi secondi per le scope a diversi minuti per le caldaie." },
      { name: "Accessori", text: "Spazzole per fughe, lancia e panni lavabili ampliano gli usi." },
      { name: "Pavimenti", text: "Non tutti i pavimenti tollerano il vapore: attenzione a parquet e superfici non sigillate." },
    ],
    buyingGuide: [
      { profile: "Pavimenti in ceramica", text: "Una scopa a vapore leggera con panni lavabili." },
      { profile: "Pulizie profonde in bagno e cucina", text: "Un pulitore a caldaia con accessori." },
      { profile: "Casa con animali", text: "Igienizzazione senza detergenti, utile dove giocano cani e gatti." },
    ],
    faq: [
      { q: "Si può usare sul parquet?", a: "Solo se il produttore del pavimento lo consente e con vapore al minimo; in genere è sconsigliato." },
      { q: "Serve il detergente?", a: "No: basta l'acqua, meglio demineralizzata se è molto calcarea." },
      { q: "Uccide gli acari?", a: "Il vapore ad alta temperatura aiuta a ridurli su materassi e tessuti, ma non è un trattamento risolutivo." },
    ],
  },
  {
    slug: "robot-lavavetri",
    reviewedAt,
    intro: [
      "Un robot lavavetri aderisce al vetro per aspirazione e lo pulisce da solo, seguendo un percorso automatico. È comodo per grandi finestre, vetrate e vetri difficili da raggiungere dall'esterno.",
      "Non sostituisce del tutto la pulizia a mano negli angoli, ma riduce molto fatica e rischi.",
    ],
    types: [
      { name: "Quadrati", text: "Puliscono meglio gli angoli e procedono in modo regolare." },
      { name: "Rotondi", text: "Più veloci su grandi superfici, meno precisi negli angoli." },
      { name: "Con spruzzo automatico", text: "Nebulizzano il liquido da soli durante la pulizia." },
    ],
    considerations: [
      { name: "Sicurezza", text: "Cavo di sicurezza e batteria tampone che lo mantiene attaccato se manca la corrente." },
      { name: "Spessore dei vetri", text: "Verificate gli spessori supportati, soprattutto per vetri senza cornice." },
      { name: "Rumore", text: "Il motore di aspirazione è rumoroso: normale per questi prodotti." },
      { name: "Panni", text: "Panni in microfibra lavabili e di ricambio disponibili." },
    ],
    buyingGuide: [
      { profile: "Vetrate grandi", text: "Un robot con spruzzo automatico e percorso intelligente." },
      { profile: "Finestre ai piani alti", text: "Cavo di sicurezza lungo e batteria tampone affidabile." },
      { profile: "Docce e specchi", text: "Un modello quadrato, preciso sugli angoli." },
    ],
    faq: [
      { q: "Funziona su vetri molto sporchi?", a: "Meglio una prima passata a mano; il robot è ideale per la manutenzione periodica." },
      { q: "Può cadere?", a: "Con cavo di sicurezza e batteria tampone il rischio è minimo, se installato correttamente." },
      { q: "Pulisce anche piastrelle?", a: "Molti funzionano anche su superfici lisce come specchi e piastrelle lucide." },
    ],
  },
  {
    slug: "serrature-smart",
    reviewedAt,
    intro: [
      "Una serratura smart permette di aprire la porta con lo smartphone, un codice, l'impronta o un portachiavi elettronico, e di dare accessi temporanei a ospiti e collaboratori.",
      "Prima di comprarla verificate la compatibilità con il cilindro e la porta: in Italia molte porte blindate richiedono modelli specifici.",
    ],
    types: [
      { name: "Su cilindro esistente", text: "Si montano all'interno sopra la chiave, senza cambiare la serratura." },
      { name: "Con cilindro sostitutivo", text: "Sostituiscono il cilindro con uno motorizzato." },
      { name: "Con tastierino o impronta", text: "Aprono senza telefono, utili per famiglie e affitti brevi." },
    ],
    considerations: [
      { name: "Compatibilità", text: "Misurate il cilindro e controllate le guide di compatibilità del produttore." },
      { name: "Metodi di apertura", text: "App, codice, impronta e chiave meccanica di emergenza." },
      { name: "Batterie", text: "Notifiche di batteria scarica e possibilità di apertura di emergenza." },
      { name: "Sicurezza", text: "Crittografia, aggiornamenti e un marchio affidabile sono essenziali." },
    ],
    buyingGuide: [
      { profile: "Casa in affitto", text: "Un modello che si monta sopra il cilindro esistente, senza modifiche." },
      { profile: "Affitti brevi", text: "Tastierino o codici temporanei per gli ospiti." },
      { profile: "Casa smart", text: "Compatibilità con Alexa, Google o Apple Home e un bridge Wi-Fi." },
    ],
    faq: [
      { q: "Funziona con le porte blindate?", a: "Con molti cilindri europei sì; verificate sempre la compatibilità prima." },
      { q: "Cosa succede se finisce la batteria?", a: "Si riceve un avviso prima; resta comunque la chiave meccanica." },
      { q: "È sicura come una serratura normale?", a: "La sicurezza meccanica dipende dal cilindro: scegliete un cilindro di qualità." },
    ],
  },
  {
    slug: "videocitofoni-smart",
    reviewedAt,
    intro: [
      "Un campanello smart con videocamera mostra sul telefono chi suona alla porta e permette di rispondere anche quando non siete in casa. Molti avvisano anche dei movimenti davanti all'ingresso.",
      "Le differenze principali sono l'alimentazione, la qualità video e la necessità o meno di un abbonamento per rivedere le registrazioni.",
    ],
    types: [
      { name: "A batteria", text: "Si installano ovunque in pochi minuti; vanno ricaricati periodicamente." },
      { name: "Cablati", text: "Usano i fili del vecchio campanello: niente ricariche e funzioni più continue." },
      { name: "Con memoria locale", text: "Salvano i video senza abbonamento, su una base o su microSD." },
    ],
    considerations: [
      { name: "Abbonamento", text: "Controllate cosa si può fare senza pagare: spesso la registrazione richiede un piano." },
      { name: "Campo visivo", text: "Un campo verticale ampio inquadra anche i pacchi lasciati a terra." },
      { name: "Compatibilità", text: "Verificate i condomini e i citofoni esistenti: non tutti si integrano." },
      { name: "Privacy", text: "Inquadrate solo il vostro ingresso, non le aree comuni o la strada." },
    ],
    buyingGuide: [
      { profile: "Casa indipendente", text: "Un campanello cablato con buona visione notturna." },
      { profile: "Appartamento in affitto", text: "Un modello a batteria, senza lavori." },
      { profile: "Niente abbonamenti", text: "Un modello con memoria locale." },
    ],
    faq: [
      { q: "Funziona con il citofono condominiale?", a: "In genere no: questi campanelli sono pensati per la porta di casa." },
      { q: "Quanto dura la batteria?", a: "Da poche settimane a qualche mese, in base a quanti eventi registra." },
      { q: "Posso rispondere da fuori casa?", a: "Sì, dall'app, se il campanello è connesso al Wi-Fi." },
    ],
  },
  {
    slug: "topper-materasso",
    reviewedAt,
    intro: [
      "Un topper è uno strato di 5-10 cm che si appoggia sopra il materasso per renderlo più morbido, più sostenuto o più fresco. Costa molto meno di un materasso nuovo.",
      "Funziona bene su un materasso ancora sano ma troppo rigido o un po' consumato; non risolve avvallamenti profondi.",
    ],
    types: [
      { name: "Memory foam", text: "Si adatta al corpo e scarica i punti di pressione, ma tende a trattenere il calore." },
      { name: "Lattice", text: "Più elastico e traspirante, con una sensazione meno avvolgente." },
      { name: "Fibra e piuma", text: "Morbidi e leggeri, aggiungono comfort senza cambiare il sostegno." },
    ],
    considerations: [
      { name: "Altezza", text: "5 cm per un ritocco leggero, 7-10 cm per cambiare davvero la sensazione." },
      { name: "Rigidità", text: "Scegliete in base alla posizione in cui dormite e al vostro peso." },
      { name: "Fodera", text: "Una fodera sfoderabile e lavabile è molto più igienica." },
      { name: "Fissaggio", text: "Elastici agli angoli evitano che il topper scivoli." },
    ],
    buyingGuide: [
      { profile: "Materasso troppo rigido", text: "Un topper in memory foam da 7 cm." },
      { profile: "Chi soffre il caldo", text: "Lattice o memory con gel rinfrescante." },
      { profile: "Divano letto", text: "Un topper da 5-7 cm per rendere più comodo il materasso sottile." },
    ],
    faq: [
      { q: "Il topper sistema un materasso rovinato?", a: "No: se il materasso ha avvallamenti profondi va sostituito." },
      { q: "Ha odore all'apertura?", a: "La memory foam può avere un leggero odore iniziale che sparisce in pochi giorni arieggiando." },
      { q: "Serve un coprimaterasso?", a: "Sì, protegge il topper e si lava più facilmente." },
    ],
  },
  {
    slug: "lampade-antizanzare",
    reviewedAt,
    intro: [
      "Le lampade antizanzare attirano gli insetti con la luce ultravioletta e li eliminano con una griglia elettrica o li catturano con una ventola. Sono un'alternativa a spray e piastrine, senza sostanze nell'aria.",
      "L'efficacia dipende dalla posizione e dalla copertura: funzionano meglio al buio e lontano dalle persone, per attirare le zanzare prima che arrivino.",
    ],
    types: [
      { name: "A griglia elettrica", text: "Efficaci su molti insetti volanti, con il caratteristico scatto." },
      { name: "Ad aspirazione", text: "Silenziose, catturano gli insetti con una ventola: adatte alla camera da letto." },
      { name: "Racchette elettriche", text: "Si usano a mano contro zanzare e mosche già in casa: ricaricabili, alcune diventano anche lampade da appoggio." },
    ],
    considerations: [
      { name: "Copertura", text: "Scegliete in base ai metri quadri da proteggere." },
      { name: "Rumore e luce", text: "Per la camera da letto servono modelli silenziosi con luce poco invadente." },
      { name: "Sicurezza", text: "Una griglia protetta evita contatti accidentali di bambini e animali." },
      { name: "Pulizia", text: "Vassoio o cassetto estraibile per svuotare facilmente gli insetti." },
    ],
    buyingGuide: [
      { profile: "Camera da letto", text: "Una lampada ad aspirazione silenziosa, lontano dal letto." },
      { profile: "Giardino e balcone", text: "Un modello da esterno resistente all'acqua." },
      { profile: "Zanzare già in casa", text: "Una racchetta elettrica ricaricabile, magari con funzione lampada." },
    ],
    faq: [
      { q: "Funzionano davvero contro le zanzare?", a: "Aiutano, ma le zanzare sono attratte anche dall'anidride carbonica: meglio usarle insieme alle zanzariere." },
      { q: "Dove posizionarle?", a: "Lontano da dove state voi, vicino ai punti da cui entrano gli insetti e al buio." },
      { q: "Si possono usare tutta la notte?", a: "Sì, i modelli pensati per l'uso continuo consumano poco." },
    ],
  },
];
