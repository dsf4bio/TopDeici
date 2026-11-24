import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

export const guides: CategoryGuide[] = [
  {
    slug: "fontanelle-gatti",
    reviewedAt,
    intro: [
      "Molti gatti bevono poco dalla ciotola ferma, e chi beve poco è più esposto a problemi renali e urinari. L'acqua in movimento di una fontanella li incuriosisce e li invoglia a bere più spesso.",
      "Le differenze tra i modelli stanno nel materiale della vasca, nella silenziosità della pompa, nel filtro e soprattutto in quanto è facile smontarla e lavarla ogni settimana.",
    ],
    types: [
      { name: "In plastica", text: "Economiche e leggere, ma la plastica si graffia e trattiene più facilmente batteri e cattivi odori." },
      { name: "In acciaio o ceramica", text: "Più igieniche e facili da pulire, adatte anche ai gatti che soffrono di acne sul mento." },
      { name: "Con pompa senza fili", text: "La pompa è alimentata a induzione o a batteria: niente cavo nell'acqua e meno rischi se il gatto gioca." },
    ],
    considerations: [
      { name: "Capacità", text: "Per un gatto bastano 1,5-2 litri; con più animali conviene salire a 3 litri o più, per rabboccare meno spesso." },
      { name: "Rumore", text: "Una pompa silenziosa è importante se la fontanella sta in camera o se il gatto è diffidente." },
      { name: "Filtri", text: "Controllate quanto costano i filtri di ricambio e ogni quanto vanno cambiati: è la spesa che si ripete." },
      { name: "Pulizia", text: "Meno pezzi e niente angoli difficili significano una pulizia settimanale di pochi minuti, anche in lavastoviglie." },
    ],
    buyingGuide: [
      { profile: "Un gatto in appartamento", text: "Un modello da 2 litri in acciaio, con pompa silenziosa e indicatore del livello d'acqua." },
      { profile: "Più gatti o cani", text: "Capacità di 3 litri o più e una base larga e stabile, difficile da rovesciare." },
      { profile: "Gatto che gioca con i cavi", text: "Pompa senza fili o con cavo rinforzato, per evitare che lo mordicchi." },
    ],
    faq: [
      { q: "Ogni quanto va pulita?", a: "Una pulizia completa ogni settimana e un cambio d'acqua ogni due o tre giorni, anche se il livello non è sceso." },
      { q: "Il gatto non la usa: cosa fare?", a: "Mettetela lontano dalla ciotola del cibo e dalla lettiera e lasciatela inizialmente spenta, come una ciotola normale." },
      { q: "Va bene anche per il cane?", a: "Sì, per cani di taglia piccola e media; per i cani grandi serve una capacità maggiore." },
    ],
  },
  {
    slug: "distributori-cibo-animali",
    reviewedAt,
    intro: [
      "Un distributore automatico eroga le crocchette a orari fissi e nelle quantità impostate. È utile a chi lavora fuori casa, a chi parte per un weekend e per gli animali che tendono a mangiare troppo e troppo in fretta.",
      "Contano la precisione delle porzioni, la tenuta del contenitore che mantiene fresco il cibo e l'alimentazione di riserva, che evita di saltare i pasti se manca la corrente.",
    ],
    types: [
      { name: "Programmabili", text: "Si impostano dal pannello sul dispositivo: semplici e senza bisogno di connessione." },
      { name: "Con app", text: "Controllo dal telefono, notifiche quando il cibo sta finendo e storico dei pasti." },
      { name: "Con telecamera", text: "Permettono di vedere l'animale mentre mangia e, in alcuni casi, di parlargli." },
    ],
    considerations: [
      { name: "Capacità", text: "Un contenitore da 3-4 litri copre diversi giorni per un gatto; per cani di taglia media serve di più." },
      { name: "Dimensione delle crocchette", text: "Verificate le misure supportate: alcune crocchette grandi o irregolari possono incastrarsi." },
      { name: "Doppia alimentazione", text: "Le batterie di riserva garantiscono i pasti anche in caso di blackout o di router spento." },
      { name: "Pulizia", text: "Ciotola e contenitore rimovibili e lavabili evitano residui di grasso e cattivi odori." },
    ],
    buyingGuide: [
      { profile: "Gatto che mangia troppo in fretta", text: "Pasti piccoli e frequenti programmati durante la giornata." },
      { profile: "Weekend fuori casa", text: "Un modello con app e batterie di riserva, per controllare tutto a distanza." },
      { profile: "Due animali", text: "Un distributore con doppia ciotola o due dispositivi separati, per evitare litigi." },
    ],
    faq: [
      { q: "Funziona con il cibo umido?", a: "Di solito no: la maggior parte è pensata solo per crocchette secche." },
      { q: "Posso lasciare il gatto solo per giorni?", a: "Il distributore risolve il cibo, ma servono comunque acqua fresca, lettiera pulita e qualcuno che passi a controllare." },
      { q: "Il cibo resta fresco?", a: "Nei modelli con guarnizione e sacchetto essiccante sì, per alcuni giorni." },
    ],
  },
  {
    slug: "lettiere-autopulenti",
    reviewedAt,
    intro: [
      "Una lettiera autopulente separa automaticamente gli escrementi dalla sabbia dopo ogni passaggio del gatto e li chiude in un cassetto. Si svuota il cassetto ogni pochi giorni invece di raccogliere ogni giorno con la paletta.",
      "Sono prodotti costosi: prima di comprarli conviene controllare il peso minimo del gatto, il tipo di sabbia supportato e i sensori di sicurezza.",
    ],
    types: [
      { name: "A rotazione", text: "Il cestello ruota e setaccia la sabbia: sono i modelli più diffusi e affidabili." },
      { name: "A rastrello", text: "Un pettine meccanico raccoglie i grumi; più semplici, ma richiedono più manutenzione." },
      { name: "Aperte e compatte", text: "Più piccole e meno impressionanti per i gatti timidi, con capacità ridotta." },
    ],
    considerations: [
      { name: "Sensori di sicurezza", text: "Sensori di peso e infrarossi devono fermare il ciclo se il gatto rientra: è il punto più importante." },
      { name: "Peso del gatto", text: "Molti modelli rilevano solo gatti sopra 1,5-2 kg: non adatti ai cuccioli molto piccoli." },
      { name: "Tipo di sabbia", text: "Quasi tutte richiedono sabbia agglomerante; verificate se funzionano anche con il tofu o con il silicio." },
      { name: "Ingombro e rumore", text: "Misurate lo spazio disponibile e preferite un ciclo silenzioso se la lettiera sta vicino alla camera." },
    ],
    buyingGuide: [
      { profile: "Un gatto adulto", text: "Un modello a rotazione con sensori di peso e app, svuotando il cassetto ogni 5-7 giorni." },
      { profile: "Più gatti", text: "Cassetto grande e riconoscimento dei singoli gatti, utile anche per tenere d'occhio la salute." },
      { profile: "Gatto diffidente", text: "Abituatelo lasciandola spenta per qualche giorno, poi attivate la pulizia automatica." },
    ],
    faq: [
      { q: "È sicura per il gatto?", a: "I modelli con più sensori si fermano se il gatto si avvicina durante il ciclo; leggete le recensioni proprio su questo punto." },
      { q: "Toglie del tutto la pulizia?", a: "No: va svuotato il cassetto, rabboccata la sabbia e lavata la lettiera a fondo ogni poche settimane." },
      { q: "E gli odori?", a: "Il cassetto chiuso e i filtri ai carboni li riducono molto rispetto a una lettiera tradizionale." },
    ],
  },
  {
    slug: "gps-cani",
    reviewedAt,
    intro: [
      "Un localizzatore GPS da collare mostra sul telefono dove si trova il cane in ogni momento e avvisa quando esce da una zona sicura, come il giardino. È una tranquillità in più per chi ha cani che scappano o va spesso in campagna e montagna.",
      "Attenzione alla differenza tra veri GPS con SIM e semplici tracker Bluetooth: i secondi funzionano solo vicino ad altri telefoni e non danno la posizione in tempo reale.",
    ],
    types: [
      { name: "GPS con SIM", text: "Posizione in tempo reale ovunque ci sia copertura mobile, ma con abbonamento mensile o annuale." },
      { name: "Tracker Bluetooth", text: "Economici e senza abbonamento, ma la posizione arriva solo quando un telefono compatibile passa vicino." },
      { name: "Collari intelligenti", text: "Uniscono GPS, monitoraggio dell'attività e del sonno in un collare unico." },
    ],
    considerations: [
      { name: "Abbonamento", text: "Considerate il costo annuale del servizio oltre al prezzo del dispositivo." },
      { name: "Autonomia", text: "Con il tracciamento continuo la batteria dura pochi giorni: verificate i tempi reali, non quelli in standby." },
      { name: "Copertura", text: "Controllate che la SIM funzioni in Italia e nei Paesi dove portate il cane." },
      { name: "Peso e resistenza", text: "Per cani piccoli serve un dispositivo leggero; per tutti, la resistenza all'acqua è indispensabile." },
    ],
    buyingGuide: [
      { profile: "Cane che tende a scappare", text: "GPS con SIM, zona sicura e avvisi immediati sul telefono." },
      { profile: "Passeggiate in città", text: "Un tracker Bluetooth può bastare come aiuto in caso di smarrimento." },
      { profile: "Cane sportivo o da caccia", text: "Autonomia lunga, aggiornamenti frequenti della posizione e grande resistenza agli urti." },
    ],
    faq: [
      { q: "Serve sempre un abbonamento?", a: "Per il tracciamento in tempo reale sì; i tracker Bluetooth ne fanno a meno ma sono meno precisi." },
      { q: "Funziona senza copertura?", a: "Il GPS registra la posizione, ma la invia al telefono solo quando torna la rete mobile." },
      { q: "Sostituisce il microchip?", a: "No: il microchip è obbligatorio e permette di identificare il cane; il GPS aiuta a ritrovarlo." },
    ],
  },
  {
    slug: "tosatrici-animali",
    reviewedAt,
    intro: [
      "Una buona tosatrice permette di sistemare il pelo del cane o del gatto a casa, tra una visita e l'altra dal toelettatore, oppure di rifinire zampe, muso e zone intime.",
      "Per gli animali contano soprattutto il rumore e le vibrazioni, che possono spaventarli, e la qualità delle lame, che devono tagliare senza tirare il pelo.",
    ],
    types: [
      { name: "Per rifiniture", text: "Piccole e silenziose, per zampe, orecchie e muso." },
      { name: "Per tosatura completa", text: "Motore più potente e lame larghe per manti folti e cani di taglia grande." },
      { name: "Professionali", text: "Lame intercambiabili e motore a lunga durata, per uso frequente o più animali." },
    ],
    considerations: [
      { name: "Rumore", text: "Un motore silenzioso aiuta a non spaventare l'animale, soprattutto i gatti." },
      { name: "Lame", text: "Lame in ceramica o in acciaio di qualità scaldano meno e tagliano senza strappare." },
      { name: "Autonomia", text: "Un modello senza filo con almeno un'ora di autonomia consente di finire senza interruzioni." },
      { name: "Pettini guida", text: "Più pettini di lunghezze diverse permettono di scegliere quanto pelo lasciare." },
    ],
    buyingGuide: [
      { profile: "Gatto o cane piccolo", text: "Un modello silenzioso e leggero, con pettini per le rifiniture." },
      { profile: "Cane a pelo lungo", text: "Motore potente e lame larghe, con pettini da 9-12 mm per non accorciare troppo." },
      { profile: "Più animali", text: "Un modello professionale con lame intercambiabili e batteria sostituibile." },
    ],
    faq: [
      { q: "Si possono tosare tutti i cani?", a: "Non tutti: alcune razze a doppio manto non andrebbero rasate. Nel dubbio chiedete al veterinario o al toelettatore." },
      { q: "Ogni quanto oliare le lame?", a: "Dopo ogni utilizzo, con qualche goccia dell'olio incluso." },
      { q: "Va bene una tosatrice per persone?", a: "Meglio di no: le lame e la potenza sono pensate per un pelo diverso e tendono a tirare." },
    ],
  },
  {
    slug: "cucce-cani",
    reviewedAt,
    intro: [
      "Un cane passa a riposare gran parte della giornata: una cuccia che sostiene bene il corpo aiuta articolazioni e schiena, soprattutto nei cani anziani e di taglia grande.",
      "La scelta dipende dalla posizione in cui il cane dorme, dalle sue misure e da quanto è facile lavare la fodera.",
    ],
    types: [
      { name: "Ortopediche", text: "Con memory foam o imbottitura alta: ideali per cani anziani, grandi o con problemi articolari." },
      { name: "A ciambella", text: "Bordi rialzati e morbidi per i cani che amano dormire raggomitolati." },
      { name: "A materassino", text: "Piatte e facili da spostare, adatte anche al trasportino o all'auto." },
    ],
    considerations: [
      { name: "Misura", text: "Misurate il cane disteso dal naso alla coda e aggiungete 15-20 cm." },
      { name: "Imbottitura", text: "La memory foam distribuisce il peso; le imbottiture morbide si schiacciano più in fretta." },
      { name: "Sfoderabilità", text: "Una fodera rimovibile e lavabile in lavatrice è quasi indispensabile." },
      { name: "Fondo", text: "Un fondo antiscivolo e impermeabile protegge il pavimento e tiene ferma la cuccia." },
    ],
    buyingGuide: [
      { profile: "Cane anziano o grande", text: "Cuccia ortopedica in memory foam, con bordo basso per salire facilmente." },
      { profile: "Cane piccolo freddoloso", text: "Una ciambella con bordi alti e tessuto morbido." },
      { profile: "Cane che rovina tutto", text: "Tessuti resistenti e cuciture rinforzate, senza parti sporgenti da mordere." },
    ],
    faq: [
      { q: "Ogni quanto lavare la fodera?", a: "Ogni una o due settimane, più spesso se il cane perde molto pelo." },
      { q: "Una cuccia o due?", a: "Spesso ne servono due: una in zona giorno e una dove il cane dorme la notte." },
      { q: "Va bene anche per i gatti?", a: "Le ciambelle piccole sì, molti gatti le apprezzano." },
    ],
  },
  {
    slug: "telecamere-animali",
    reviewedAt,
    intro: [
      "Una telecamera per animali permette di vedere cosa fanno cane e gatto quando siete fuori, di parlare con loro e, in alcuni modelli, di lanciare uno snack a distanza.",
      "Per scegliere contano la qualità video anche di notte, l'audio bidirezionale e le notifiche intelligenti che distinguono l'animale dai movimenti casuali.",
    ],
    types: [
      { name: "Telecamere da interno", text: "Telecamere generiche con rotazione e audio, economiche e versatili." },
      { name: "Con lancia snack", text: "Pensate per gli animali: lanciano premietti e intrattengono il cane durante il giorno." },
      { name: "Con giochi laser", text: "Alcuni modelli per gatti includono un puntatore laser comandato dall'app." },
    ],
    considerations: [
      { name: "Campo visivo", text: "Una telecamera motorizzata a 360° segue l'animale in tutta la stanza." },
      { name: "Visione notturna", text: "Utile per controllare l'animale la sera senza accendere luci." },
      { name: "Abbonamento", text: "Verificate se la registrazione nel cloud è a pagamento o se si può usare una microSD." },
      { name: "Privacy", text: "Preferite modelli con disattivazione fisica della telecamera quando siete in casa." },
    ],
    buyingGuide: [
      { profile: "Cane che soffre la solitudine", text: "Telecamera con lancia snack e audio, per farsi sentire durante il giorno." },
      { profile: "Gatto", text: "Una telecamera a 360° con buona visione notturna e notifiche sui movimenti." },
      { profile: "Budget contenuto", text: "Una telecamera da interno generica con audio bidirezionale fa già molto." },
    ],
    faq: [
      { q: "Serve una connessione veloce?", a: "Basta un Wi-Fi stabile a 2,4 GHz nella stanza dove la posizionate." },
      { q: "Il cane si abitua alla voce dall'altoparlante?", a: "Di solito sì, ma all'inizio alcuni cani possono agitarsi: usate la voce con moderazione." },
      { q: "Posso usarla come videosorveglianza?", a: "Sì, ma per l'esterno servono telecamere specifiche e resistenti alle intemperie." },
    ],
  },
  {
    slug: "trasportini-animali",
    reviewedAt,
    intro: [
      "Un buon trasportino rende meno stressante il viaggio dal veterinario o in vacanza, per l'animale e per chi lo porta. Esistono soluzioni rigide, morbide, zaini e passeggini per cani piccoli o anziani.",
      "La scelta dipende dal peso dell'animale, dal mezzo di trasporto e da quanto spesso lo userete.",
    ],
    types: [
      { name: "Rigidi", text: "Robusti, facili da pulire e sicuri in auto; spesso apribili dall'alto per i gatti restii." },
      { name: "Morbidi e zaini", text: "Leggeri e comodi da portare, adatti a gatti e cani piccoli e spesso ammessi in cabina." },
      { name: "Passeggini", text: "Per cani anziani, piccoli o convalescenti che non riescono a camminare a lungo." },
    ],
    considerations: [
      { name: "Misura e peso", text: "L'animale deve potersi girare e stare in piedi; rispettate il peso massimo indicato." },
      { name: "Aerazione", text: "Più lati ventilati evitano che l'animale soffra il caldo." },
      { name: "Apertura", text: "Un'apertura dall'alto facilita l'inserimento dei gatti che non vogliono entrare." },
      { name: "Viaggi in aereo", text: "Verificate le misure richieste dalla compagnia aerea prima di comprare." },
    ],
    buyingGuide: [
      { profile: "Gatto dal veterinario", text: "Trasportino rigido apribile dall'alto, facile da pulire." },
      { profile: "Viaggi in aereo", text: "Borsa morbida conforme alle misure della compagnia, con fondo rigido." },
      { profile: "Cane anziano", text: "Un passeggino stabile con freni e cintura di sicurezza interna." },
    ],
    faq: [
      { q: "Come abituare il gatto al trasportino?", a: "Lasciatelo aperto in casa con una coperta e qualche premio: diventa un rifugio e non solo il viaggio dal veterinario." },
      { q: "In auto va fissato?", a: "Sì, con la cintura di sicurezza o sul pianale dietro i sedili anteriori." },
      { q: "Uno zaino è comodo per il gatto?", a: "Per tragitti brevi sì; per viaggi lunghi è meglio un trasportino in cui possa sdraiarsi." },
    ],
  },
];
