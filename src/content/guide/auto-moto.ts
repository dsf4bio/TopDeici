import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

export const guides: CategoryGuide[] = [
  {
    slug: "dashcam",
    reviewedAt,
    intro: [
      "Una dashcam registra la strada mentre guidate: in caso di incidente può aiutare a ricostruire la dinamica. Molti modelli sorvegliano anche l'auto parcheggiata.",
      "Contano soprattutto la qualità delle riprese di notte, la leggibilità delle targhe e l'affidabilità nel tempo, anche con il caldo estivo nell'abitacolo.",
    ],
    types: [
      { name: "Solo anteriore", text: "La soluzione più semplice ed economica." },
      { name: "Anteriore e posteriore", text: "Registrano anche dietro l'auto, utili in caso di tamponamento." },
      { name: "A specchietto", text: "Si montano sullo specchietto retrovisore e integrano lo schermo." },
    ],
    considerations: [
      { name: "Visione notturna", text: "Sensori di qualità e HDR rendono leggibili targhe e dettagli anche al buio." },
      { name: "Modalità parcheggio", text: "Richiede un collegamento fisso all'impianto elettrico o una batteria dedicata." },
      { name: "GPS e Wi-Fi", text: "Il GPS registra posizione e velocità; il Wi-Fi permette di scaricare i video sul telefono." },
      { name: "Resistenza al calore", text: "I modelli con supercondensatore sopportano meglio il caldo delle batterie." },
    ],
    buyingGuide: [
      { profile: "Uso quotidiano", text: "Una dashcam anteriore 2K con buona visione notturna." },
      { profile: "Protezione completa", text: "Un modello anteriore e posteriore con modalità parcheggio." },
      { profile: "Auto parcheggiata in strada", text: "Una dashcam con sensore d'urto e kit di alimentazione permanente." },
    ],
    faq: [
      { q: "È legale in Italia?", a: "Sì, per uso personale; la diffusione dei video è soggetta alle norme sulla privacy." },
      { q: "Che scheda serve?", a: "Una microSD ad alta resistenza progettata per la registrazione continua." },
      { q: "Scarica la batteria dell'auto?", a: "I kit per parcheggio hanno una protezione che spegne la dashcam sotto una certa tensione." },
    ],
  },
  {
    slug: "compressori-portatili",
    reviewedAt,
    intro: [
      "Un compressore portatile permette di controllare e gonfiare le gomme in pochi minuti, ovunque. Una pressione corretta riduce consumi, usura e rischi.",
      "I modelli moderni si fermano automaticamente alla pressione impostata e servono anche per bici, moto e palloni.",
    ],
    types: [
      { name: "A batteria", text: "Senza cavi, comodi e rapidi da usare." },
      { name: "A 12 V", text: "Si collegano alla presa dell'auto e non hanno limiti di autonomia." },
      { name: "Per bici", text: "Compatti e leggeri, con pressioni elevate per le gomme da corsa." },
    ],
    considerations: [
      { name: "Arresto automatico", text: "Si imposta la pressione e il compressore si ferma da solo." },
      { name: "Precisione del manometro", text: "Un manometro digitale preciso è la caratteristica più importante." },
      { name: "Velocità", text: "Un flusso più alto gonfia più in fretta le gomme di SUV e furgoni." },
      { name: "Accessori", text: "Adattatori per valvole di bici, palloni e materassini." },
    ],
    buyingGuide: [
      { profile: "Auto", text: "Un compressore a batteria con arresto automatico." },
      { profile: "SUV e furgoni", text: "Un modello a 12 V con flusso elevato." },
      { profile: "Bici", text: "Un compressore compatto che arrivi alle pressioni richieste." },
    ],
    faq: [
      { q: "Ogni quanto controllare la pressione?", a: "Almeno una volta al mese e prima dei viaggi, a gomme fredde." },
      { q: "Sostituisce il kit di riparazione?", a: "No, ma è utile insieme al kit antiforatura." },
      { q: "Si scalda?", a: "Sì, con uso prolungato: rispettate i tempi di pausa indicati." },
    ],
  },
  {
    slug: "avviatori-emergenza",
    reviewedAt,
    intro: [
      "Un avviatore di emergenza, o booster, permette di avviare l'auto con la batteria scarica senza un'altra auto e senza cavi.",
      "Va scelto in base alla cilindrata e al tipo di motore: i diesel richiedono più corrente.",
    ],
    types: [
      { name: "Compatti", text: "Per auto a benzina di piccola e media cilindrata." },
      { name: "Potenti", text: "Per diesel, SUV e motori grandi." },
      { name: "Con compressore", text: "Uniscono avviatore e compressore per gomme." },
    ],
    considerations: [
      { name: "Corrente di picco", text: "Verificate i litri di cilindrata supportati per benzina e diesel." },
      { name: "Protezioni", text: "Contro inversione di polarità e cortocircuiti, per un uso sicuro." },
      { name: "Funzioni extra", text: "Torcia e porte USB per ricaricare il telefono." },
      { name: "Mantenimento della carica", text: "Va ricaricato ogni qualche mese per essere pronto all'uso." },
    ],
    buyingGuide: [
      { profile: "Utilitaria", text: "Un avviatore compatto adatto a motori a benzina." },
      { profile: "Diesel e SUV", text: "Un modello potente con corrente di picco elevata." },
      { profile: "Tutto in uno", text: "Un avviatore con compressore integrato." },
    ],
    faq: [
      { q: "È sicuro per l'elettronica dell'auto?", a: "I modelli con protezioni sono progettati per questo uso." },
      { q: "Quante volte può avviare l'auto?", a: "Più volte con una carica, in base a capacità e motore." },
      { q: "Si può lasciare in auto?", a: "Sì, evitando le temperature estreme dell'abitacolo." },
    ],
  },
  {
    slug: "aspirapolvere-auto",
    reviewedAt,
    intro: [
      "Un aspirapolvere compatto per auto tiene puliti sedili, tappetini e bagagliaio senza andare all'autolavaggio. È utile anche in casa per briciole e piccole pulizie.",
      "Potenza di aspirazione e accessori per gli angoli stretti fanno la differenza.",
    ],
    types: [
      { name: "A batteria", text: "Comodi e liberi da cavi, ideali per pulizie rapide." },
      { name: "A 12 V", text: "Si collegano alla presa dell'auto e non si scaricano." },
      { name: "Multifunzione", text: "Aspirano e soffiano, alcuni anche come compressore." },
    ],
    considerations: [
      { name: "Aspirazione", text: "Una buona potenza raccoglie sabbia e briciole dai tappetini." },
      { name: "Accessori", text: "Bocchette strette e spazzole per sedili e bocchette d'aria." },
      { name: "Filtro", text: "Un filtro lavabile riduce i costi di manutenzione." },
      { name: "Autonomia", text: "Per una pulizia completa servono almeno 15-20 minuti." },
    ],
    buyingGuide: [
      { profile: "Pulizie veloci", text: "Un aspirabriciole a batteria compatto." },
      { profile: "Auto con animali", text: "Una buona potenza e una spazzola per i peli." },
      { profile: "Viaggi lunghi", text: "Un modello a 12 V sempre pronto." },
    ],
    faq: [
      { q: "Funziona anche in casa?", a: "Sì, per briciole, divani e piccole superfici." },
      { q: "Come pulire il filtro?", a: "Svuotate il contenitore e lavate il filtro lasciandolo asciugare bene." },
      { q: "Aspira i liquidi?", a: "Solo i modelli indicati come adatti all'aspirazione di liquidi." },
    ],
  },
  {
    slug: "caschi-moto",
    reviewedAt,
    intro: [
      "Il casco è l'equipaggiamento di sicurezza più importante per chi va in moto o in scooter. Deve essere omologato, della taglia giusta e adatto all'uso che ne fate.",
      "Un casco comodo e silenzioso rende piacevoli anche i viaggi lunghi.",
    ],
    types: [
      { name: "Integrali", text: "La massima protezione, adatti a ogni tipo di moto." },
      { name: "Modulari", text: "La mentoniera si alza: comodi per fermate frequenti e viaggi." },
      { name: "Jet", text: "Aperti sul volto, leggeri e freschi, ideali per scooter in città." },
    ],
    considerations: [
      { name: "Omologazione", text: "Verificate l'omologazione ECE 22.06, lo standard più recente." },
      { name: "Taglia", text: "Deve calzare aderente senza creare punti di pressione: misurate la circonferenza della testa." },
      { name: "Visiera", text: "Una visiera antiappannamento e un oscurante interno aumentano comfort e sicurezza." },
      { name: "Rumore e ventilazione", text: "Prese d'aria efficaci e buona insonorizzazione fanno la differenza nei viaggi." },
    ],
    buyingGuide: [
      { profile: "Città e scooter", text: "Un jet omologato con visiera lunga." },
      { profile: "Turismo", text: "Un modulare con oscurante e predisposizione per interfono." },
      { profile: "Strada e sport", text: "Un integrale leggero e aerodinamico." },
    ],
    faq: [
      { q: "Ogni quanto sostituirlo?", a: "Dopo un urto sempre, altrimenti indicativamente ogni cinque anni." },
      { q: "Si può comprare online?", a: "Sì, misurando bene la testa e verificando la possibilità di cambio taglia." },
      { q: "Che cos'è l'ECE 22.06?", a: "È lo standard europeo di omologazione più recente, con test più severi del precedente." },
    ],
  },
  {
    slug: "interfoni-moto",
    reviewedAt,
    intro: [
      "Un interfono Bluetooth permette di parlare con il passeggero o con altri motociclisti, ascoltare le indicazioni del navigatore e rispondere al telefono restando concentrati sulla guida.",
      "La qualità audio a velocità elevate e la portata tra moto sono le caratteristiche più importanti.",
    ],
    types: [
      { name: "Per pilota e passeggero", text: "Comunicazione a due, semplice da usare." },
      { name: "Per gruppi", text: "Collegano più moto contemporaneamente." },
      { name: "Mesh", text: "Rete flessibile che mantiene il collegamento anche quando il gruppo si allunga." },
    ],
    considerations: [
      { name: "Portata", text: "La distanza dichiarata è in campo aperto: curve e ostacoli la riducono." },
      { name: "Audio", text: "Altoparlanti sottili adatti al casco e cancellazione del rumore del vento." },
      { name: "Autonomia", text: "Deve coprire una giornata di viaggio." },
      { name: "Comandi", text: "Pulsanti grandi, utilizzabili con i guanti." },
    ],
    buyingGuide: [
      { profile: "In coppia", text: "Un interfono per pilota e passeggero." },
      { profile: "Gruppi", text: "Un sistema mesh con più utenti." },
      { profile: "Solo musica e navigatore", text: "Un modello base con buona qualità audio." },
    ],
    faq: [
      { q: "È legale usarlo guidando?", a: "Sì, come dispositivo vivavoce, mantenendo l'attenzione alla guida." },
      { q: "Funziona tra marche diverse?", a: "Spesso solo in modalità base; le funzioni avanzate richiedono la stessa marca." },
      { q: "Si monta su tutti i caschi?", a: "Quasi tutti, con supporto adesivo o a clip; alcuni caschi hanno alloggiamenti dedicati." },
    ],
  },
  {
    slug: "supporti-smartphone-auto",
    reviewedAt,
    intro: [
      "Un supporto stabile tiene lo smartphone in vista per il navigatore senza doverlo prendere in mano. I modelli con ricarica wireless mantengono anche la batteria carica.",
      "La scelta dipende dalla posizione disponibile in auto e dal telefono.",
    ],
    types: [
      { name: "Per bocchetta d'aria", text: "Semplici da montare, ma possono bloccare il flusso d'aria." },
      { name: "A ventosa", text: "Su parabrezza o cruscotto, regolabili e stabili." },
      { name: "Magnetici", text: "Il telefono si aggancia con un gesto, compatibili con MagSafe o con piastrine." },
    ],
    considerations: [
      { name: "Stabilità", text: "Su strade dissestate il telefono non deve vibrare né cadere." },
      { name: "Ricarica wireless", text: "Comoda per i lunghi viaggi, se il telefono la supporta." },
      { name: "Visibilità", text: "Il supporto non deve coprire la visuale né ostacolare gli airbag." },
      { name: "Compatibilità", text: "Verificate dimensioni del telefono e presenza della cover." },
    ],
    buyingGuide: [
      { profile: "iPhone con MagSafe", text: "Un supporto magnetico con ricarica wireless." },
      { profile: "Telefoni grandi", text: "Un supporto a pinza robusto." },
      { profile: "Auto a noleggio", text: "Un supporto per bocchetta facile da spostare." },
    ],
    faq: [
      { q: "Il magnete rovina il telefono?", a: "No, i telefoni moderni non sono danneggiati dai magneti dei supporti." },
      { q: "È legale usare il navigatore sul telefono?", a: "Sì, se fissato a un supporto e senza maneggiarlo durante la guida." },
      { q: "La ventosa tiene d'estate?", a: "Le ventose di qualità sì; il caldo può ridurne l'aderenza." },
    ],
  },
  {
    slug: "mantenitori-carica",
    reviewedAt,
    intro: [
      "Le batterie di auto e moto ferme a lungo si scaricano. Un mantenitore di carica le tiene in efficienza durante l'inverno o i periodi di inutilizzo, allungandone la vita.",
      "I caricabatterie intelligenti analizzano la batteria e adattano la carica automaticamente.",
    ],
    types: [
      { name: "Mantenitori", text: "Bassa corrente, ideali per moto e auto ferme." },
      { name: "Caricabatterie intelligenti", text: "Ricaricano batterie scariche e le mantengono." },
      { name: "Multicanale", text: "Gestiscono più veicoli contemporaneamente." },
    ],
    considerations: [
      { name: "Tipo di batteria", text: "Verificate la compatibilità con piombo, AGM, gel o litio." },
      { name: "Corrente", text: "Correnti più alte ricaricano prima, quelle basse sono adatte al mantenimento." },
      { name: "Sicurezza", text: "Protezioni contro inversione di polarità e scintille." },
      { name: "Collegamento", text: "Cavi con occhielli fissi permettono di collegarlo in pochi secondi." },
    ],
    buyingGuide: [
      { profile: "Moto in inverno", text: "Un mantenitore a bassa corrente." },
      { profile: "Auto ferma", text: "Un caricabatterie intelligente da 3-5 A." },
      { profile: "Più veicoli", text: "Un modello multicanale." },
    ],
    faq: [
      { q: "Si può lasciare collegato sempre?", a: "I modelli intelligenti sono progettati per restare collegati a lungo." },
      { q: "Serve staccare la batteria?", a: "In genere no, ma seguite le indicazioni del produttore del veicolo." },
      { q: "Recupera batterie esaurite?", a: "Alcune modalità aiutano batterie solfatate, ma non fanno miracoli." },
    ],
  },
  {
    slug: "seggiolini-auto",
    reviewedAt,
    intro: [
      "Il seggiolino auto è obbligatorio e protegge il bambino in caso di incidente. Va scelto in base all'altezza e all'età, verificando la compatibilità con la propria auto.",
      "La norma più recente è la R129, detta i-Size, che classifica i seggiolini per altezza del bambino e prevede test d'urto laterali.",
    ],
    types: [
      { name: "Ovetti", text: "Per neonati, installati in senso contrario alla marcia." },
      { name: "Girevoli", text: "Ruotano per facilitare l'inserimento del bambino e coprono più fasce di età." },
      { name: "Rialzi con schienale", text: "Per bambini più grandi, usano la cintura dell'auto." },
    ],
    considerations: [
      { name: "Omologazione", text: "Preferite seggiolini omologati R129 i-Size." },
      { name: "Isofix", text: "Riduce gli errori di installazione: verificate gli attacchi della vostra auto." },
      { name: "Contromarcia", text: "Viaggiare in senso contrario alla marcia è più sicuro per i più piccoli." },
      { name: "Antiabbandono", text: "In Italia è obbligatorio un dispositivo antiabbandono per i bambini sotto i 4 anni." },
    ],
    buyingGuide: [
      { profile: "Neonati", text: "Un ovetto i-Size, eventualmente con base Isofix." },
      { profile: "Da 1 a 4 anni", text: "Un seggiolino girevole in contromarcia." },
      { profile: "Dai 4 anni in su", text: "Un rialzo con schienale i-Size." },
    ],
    faq: [
      { q: "Conviene comprarlo usato?", a: "È sconsigliato: potrebbe aver subito urti non visibili." },
      { q: "Va bene per tutte le auto?", a: "Verificate le liste di compatibilità del produttore." },
      { q: "Quando passare al rialzo?", a: "Quando il bambino raggiunge l'altezza indicata dal seggiolino." },
    ],
  },
  {
    slug: "adattatori-carplay",
    reviewedAt,
    intro: [
      "Molte auto supportano CarPlay o Android Auto solo via cavo. Un adattatore wireless permette di collegare il telefono senza fili appena si sale in macchina.",
      "Funziona solo se l'auto supporta già CarPlay o Android Auto via cavo.",
    ],
    types: [
      { name: "Solo CarPlay", text: "Per iPhone, semplici e affidabili." },
      { name: "CarPlay e Android Auto", text: "Per chi alterna telefoni diversi." },
      { name: "Box multimediali", text: "Aggiungono app di streaming e funzioni extra." },
    ],
    considerations: [
      { name: "Compatibilità", text: "Verificate modello e anno dell'auto nelle liste del produttore." },
      { name: "Latenza", text: "Un buon adattatore ha ritardi minimi nell'audio e nei comandi." },
      { name: "Aggiornamenti", text: "Aggiornamenti del firmware risolvono problemi con nuove versioni dei telefoni." },
      { name: "Avvio", text: "Il tempo di collegamento all'accensione varia tra i modelli." },
    ],
    buyingGuide: [
      { profile: "iPhone", text: "Un adattatore CarPlay wireless compatto." },
      { profile: "Famiglia con telefoni diversi", text: "Un modello che supporta entrambi i sistemi." },
      { profile: "Intrattenimento", text: "Un box multimediale con app integrate." },
    ],
    faq: [
      { q: "Scarica la batteria del telefono?", a: "Il wireless consuma di più: per viaggi lunghi usate un supporto con ricarica." },
      { q: "Funziona se l'auto non ha CarPlay?", a: "No, serve il supporto via cavo." },
      { q: "La qualità audio peggiora?", a: "Con modelli di qualità la differenza è minima." },
    ],
  },
];
