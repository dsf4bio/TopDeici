import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

export const guides: CategoryGuide[] = [
  {
    slug: "notebook",
    reviewedAt,
    intro: [
      "Un portatile è uno strumento di lavoro e di studio che si usa per anni: conviene sceglierlo partendo da cosa ci farete, non dalla scheda tecnica più impressionante.",
      "Per scrivere, navigare e videochiamare basta un modello equilibrato; per montaggio video, programmazione pesante o giochi servono processori e schede grafiche di tutt'altro livello. Schermo, tastiera e autonomia incidono sul comfort quotidiano quanto le prestazioni.",
    ],
    types: [
      { name: "Ultraleggeri", text: "Sotto 1,4 kg, con autonomia lunga e schermi da 13-14 pollici: perfetti per chi si sposta spesso." },
      { name: "Uso generale", text: "Schermo da 15-16 pollici e tastiera con tastierino numerico: la scelta più comune per casa, studio e ufficio." },
      { name: "Gaming e creatività", text: "Schede grafiche dedicate, schermi ad alta frequenza e sistemi di raffreddamento potenti, a scapito di peso e autonomia." },
    ],
    considerations: [
      { name: "Memoria RAM", text: "16 GB sono oggi la soglia consigliata per lavorare con molte schede e programmi aperti; 8 GB vanno bene solo per un uso leggero." },
      { name: "Archiviazione", text: "Un SSD da almeno 512 GB evita di dover gestire continuamente lo spazio. Verificate se è possibile espanderlo in seguito." },
      { name: "Schermo", text: "Un pannello IPS o OLED con buona luminosità fa la differenza nell'uso quotidiano più di qualche punto di benchmark." },
      { name: "Autonomia e porte", text: "Controllate la ricarica via USB-C e la presenza delle porte che usate davvero, come HDMI e USB-A." },
    ],
    buyingGuide: [
      { profile: "Studenti", text: "Un modello leggero con buona autonomia, 16 GB di RAM e tastiera comoda accompagna senza problemi tutto il percorso di studio." },
      { profile: "Ufficio e smart working", text: "Schermo da 14-16 pollici, webcam e microfoni discreti e una buona dotazione di porte per collegare monitor e periferiche." },
      { profile: "Giochi e montaggio", text: "Scheda grafica dedicata, schermo ad alta frequenza e un buon sistema di raffreddamento sono indispensabili." },
    ],
    faq: [
      { q: "Meglio Windows, macOS o ChromeOS?", a: "Dipende dai programmi che usate. Verificate che quelli indispensabili per lavoro o studio siano disponibili sul sistema scelto." },
      { q: "La RAM si può aggiungere dopo?", a: "Su molti portatili sottili è saldata alla scheda madre: conviene scegliere subito la quantità giusta." },
      { q: "Quanto dura un portatile?", a: "Un buon modello resta valido per quattro-sei anni. La batteria è il componente che invecchia prima." },
    ],
  },
  {
    slug: "monitor",
    reviewedAt,
    intro: [
      "Un buon monitor migliora la produttività e la postura più di quanto si pensi: più spazio sullo schermo significa meno finestre da alternare, e un'altezza corretta riduce la tensione su collo e spalle.",
      "La scelta parte dalla distanza a cui lo userete e dal tipo di lavoro: testi e fogli di calcolo, foto e video, oppure un uso misto con qualche gioco.",
    ],
    types: [
      { name: "Full HD 24 pollici", text: "Economici e nitidi a distanza normale: ideali per ufficio, studio e come secondo schermo." },
      { name: "QHD 27 pollici", text: "Il miglior equilibrio tra spazio di lavoro, nitidezza e prezzo per la maggior parte delle persone." },
      { name: "4K e ultrawide", text: "Molto spazio per lavorare con più finestre, editing di foto e video o fogli di calcolo molto larghi." },
    ],
    considerations: [
      { name: "Pannello", text: "IPS offre colori fedeli e ampi angoli di visione; VA ha un contrasto più alto; OLED eccelle nel contrasto ma costa di più." },
      { name: "Ergonomia", text: "Un supporto regolabile in altezza e inclinazione, oppure l'attacco VESA per un braccio, aiuta la postura." },
      { name: "Connessioni", text: "Una porta USB-C con ricarica permette di collegare il portatile con un solo cavo per video, dati e alimentazione." },
      { name: "Frequenza", text: "Anche per l'ufficio, 100-120 Hz rendono lo scorrimento più fluido e piacevole." },
    ],
    buyingGuide: [
      { profile: "Ufficio", text: "Un 24 o 27 pollici IPS con supporto regolabile copre ogni esigenza di lavoro d'ufficio." },
      { profile: "Smart working con portatile", text: "Scegliete un modello con USB-C e ricarica: un solo cavo collega e alimenta il computer." },
      { profile: "Foto e video", text: "Un 27 pollici QHD o 4K con buona copertura cromatica e taratura di fabbrica." },
    ],
    faq: [
      { q: "Serve un monitor 4K a 24 pollici?", a: "A quella diagonale la differenza rispetto al QHD è poco visibile; il 4K rende di più da 27 pollici in su." },
      { q: "Si possono collegare due monitor al portatile?", a: "Dipende dalle porte e dalla scheda grafica: verificate il supporto a più schermi o usate una docking station compatibile." },
      { q: "Monitor curvo o piatto?", a: "La curvatura aiuta sui formati molto larghi, gli ultrawide. Sui 24-27 pollici è una questione di gusto." },
    ],
  },
  {
    slug: "tastiere-meccaniche",
    reviewedAt,
    intro: [
      "Le tastiere meccaniche hanno un interruttore indipendente sotto ogni tasto: la sensazione di battitura è più precisa, la durata molto superiore e la personalizzazione quasi infinita.",
      "Sono nate nel mondo del gaming ma oggi conquistano chi scrive molto. La scelta passa per formato, tipo di switch e connessione.",
    ],
    types: [
      { name: "Full size", text: "Con tastierino numerico: indispensabile per chi lavora con numeri e fogli di calcolo." },
      { name: "TKL e 75%", text: "Senza tastierino numerico: lasciano più spazio al mouse e migliorano la postura delle spalle." },
      { name: "Compatte 60-65%", text: "Minime e portatili, ma alcune funzioni richiedono combinazioni di tasti." },
    ],
    considerations: [
      { name: "Switch", text: "Lineari, morbidi e silenziosi; tattili, con un piccolo scatto percepibile; clicky, con un suono marcato. In ufficio meglio lineari o tattili." },
      { name: "Hot-swap", text: "Permette di cambiare gli switch senza saldature: utile per sperimentare o sostituire tasti difettosi." },
      { name: "Layout", text: "Verificate se il layout è italiano o americano: cambia la posizione di accenti e simboli." },
      { name: "Connessione", text: "Le wireless con dongle a 2,4 GHz hanno latenza molto bassa; il Bluetooth è comodo per collegare più dispositivi." },
    ],
    buyingGuide: [
      { profile: "Scrittura e ufficio", text: "Un formato 75% o TKL con switch tattili silenziosi e layout italiano." },
      { profile: "Gaming", text: "Switch lineari rapidi, alta frequenza di polling e connessione cablata o 2,4 GHz." },
      { profile: "Primo acquisto", text: "Un modello hot-swap permette di provare diversi switch senza cambiare tastiera." },
    ],
    faq: [
      { q: "Sono rumorose?", a: "Dipende dagli switch: quelli lineari o silenziati, con guarnizioni interne, sono adatti anche all'ufficio." },
      { q: "Si possono pulire facilmente?", a: "Sì: i tasti si rimuovono con un estrattore e la base si pulisce con aria compressa." },
      { q: "Il layout americano è un problema?", a: "Per programmare molti lo preferiscono; per scrivere in italiano richiede di imparare combinazioni per le lettere accentate." },
    ],
  },
  {
    slug: "mouse-wireless",
    reviewedAt,
    intro: [
      "Il mouse è la periferica che si tiene in mano più ore al giorno: forma e dimensioni contano più del sensore. Un modello ergonomico può ridurre fastidi a polso e avambraccio.",
      "I mouse wireless moderni hanno latenze impercettibili e autonomie di mesi, quindi rinunciare al cavo non è più un compromesso.",
    ],
    types: [
      { name: "Compatti da viaggio", text: "Piccoli e leggeri, perfetti con il portatile, ma meno comodi per molte ore." },
      { name: "Ergonomici", text: "Forme scolpite o verticali che mantengono la mano in posizione naturale, ideali per il lavoro d'ufficio." },
      { name: "Trackball", text: "Si muove solo il pollice o le dita: richiedono abitudine, ma riducono il movimento del polso." },
    ],
    considerations: [
      { name: "Forma e misura", text: "Scegliete in base alla dimensione della mano e alla presa. Esistono modelli specifici per mancini." },
      { name: "Connessione", text: "Il ricevitore USB è più stabile; il Bluetooth libera porte e permette di passare tra più computer." },
      { name: "Tasti e rotella", text: "Tasti laterali programmabili e rotella a scorrimento rapido velocizzano il lavoro con documenti lunghi." },
      { name: "Alimentazione", text: "Batteria ricaricabile via USB-C oppure pile con autonomia di molti mesi: scegliete in base alle vostre abitudini." },
    ],
    buyingGuide: [
      { profile: "Ufficio tutto il giorno", text: "Un modello ergonomico di dimensioni piene con tasti programmabili." },
      { profile: "In viaggio", text: "Un mouse compatto Bluetooth con batteria ricaricabile." },
      { profile: "Fastidi al polso", text: "Valutate un mouse verticale o una trackball, concedendovi qualche giorno di adattamento." },
    ],
    faq: [
      { q: "Funziona su tutte le superfici?", a: "I sensori moderni funzionano su quasi tutto; vetro e superfici lucide richiedono modelli specifici o un tappetino." },
      { q: "Si può usare con tablet e smartphone?", a: "I modelli Bluetooth sono compatibili con la maggior parte dei tablet e anche con molti smartphone." },
      { q: "Il ritardo si nota?", a: "Per l'uso d'ufficio no. Nel gaming competitivo si preferiscono ricevitori dedicati ad alta frequenza." },
    ],
  },
  {
    slug: "ssd-esterni",
    reviewedAt,
    intro: [
      "Un SSD esterno è il modo più rapido e sicuro per trasportare file pesanti, fare backup o espandere lo spazio di un portatile. Rispetto ai dischi tradizionali è molto più veloce, leggero e resistente agli urti.",
      "La velocità reale dipende sia dall'unità sia dalla porta del computer: un SSD velocissimo collegato a una porta lenta rende come uno economico.",
    ],
    types: [
      { name: "SSD tascabili", text: "Piccoli come una carta di credito, veloci e leggeri: la scelta ideale per la maggior parte degli usi." },
      { name: "Rugged", text: "Con scocca rinforzata e certificazioni contro acqua e polvere: pensati per fotografi, viaggi e lavoro all'aperto." },
      { name: "Ad altissima velocità", text: "Sfruttano USB 3.2 Gen 2x2 o Thunderbolt per lavorare direttamente su video ad alta risoluzione." },
    ],
    considerations: [
      { name: "Interfaccia", text: "USB 3.2 Gen 2 offre circa 1.000 MB/s; per andare oltre servono porte Gen 2x2 o Thunderbolt sul computer." },
      { name: "Capacità", text: "1 TB è il minimo consigliato per backup e foto; 2 TB per chi lavora con il video." },
      { name: "Resistenza", text: "Se lo portate sempre con voi, una scocca protetta evita danni da cadute e pioggia." },
      { name: "Compatibilità", text: "Verificate i cavi inclusi, USB-C e USB-A, e il formato dell'unità se alternate Windows e Mac." },
    ],
    buyingGuide: [
      { profile: "Backup domestico", text: "Un SSD da 1-2 TB con velocità USB 3.2 Gen 2 offre il miglior rapporto qualità-prezzo." },
      { profile: "Foto e video", text: "Scegliete un modello rugged e veloce, da 2 TB o più." },
      { profile: "Console e giochi", text: "Verificate la compatibilità con la console e preferite capacità elevate." },
    ],
    faq: [
      { q: "SSD o hard disk esterno?", a: "L'hard disk costa meno per terabyte ed è adatto agli archivi; l'SSD è molto più veloce e resistente per l'uso quotidiano." },
      { q: "Serve formattarlo?", a: "Molti arrivano già formattati per Windows e Mac. Per usi specifici si può riformattare dal sistema operativo." },
      { q: "Quanto dura un SSD?", a: "Per l'uso normale molti anni. Fate comunque più copie dei dati importanti: nessun supporto è eterno." },
    ],
  },
  {
    slug: "router-wifi",
    reviewedAt,
    intro: [
      "Spesso la connessione lenta non dipende dall'operatore ma dal Wi-Fi in casa: il router fornito con il contratto può non bastare per coprire più stanze o piani.",
      "Un router più moderno o un sistema mesh distribuiscono il segnale in modo uniforme e gestiscono meglio i tanti dispositivi collegati contemporaneamente.",
    ],
    types: [
      { name: "Router singolo", text: "Adatto ad appartamenti fino a 80-100 m² su un unico piano, con un buon posizionamento centrale." },
      { name: "Sistema mesh", text: "Più unità che lavorano come una sola rete: la soluzione per case grandi, su più piani o con muri spessi." },
      { name: "Ripetitori", text: "Economici per estendere il segnale in una zona specifica, ma con prestazioni inferiori a un mesh." },
    ],
    considerations: [
      { name: "Standard Wi-Fi", text: "Il Wi-Fi 6 è oggi la base consigliata; Wi-Fi 6E e 7 aggiungono bande più veloci utili con dispositivi compatibili." },
      { name: "Compatibilità con la linea", text: "Verificate se vi serve un modem integrato per la vostra linea o se il router va collegato a quello dell'operatore." },
      { name: "Porte Ethernet", text: "Porte Gigabit, o superiori, per collegare via cavo TV, console e computer fissi." },
      { name: "Gestione", text: "Un'app semplice per controllo parentale, rete ospiti e aggiornamenti automatici fa la differenza." },
    ],
    buyingGuide: [
      { profile: "Appartamento", text: "Un router Wi-Fi 6 dual band posizionato in posizione centrale e rialzata." },
      { profile: "Casa su più piani", text: "Un sistema mesh con almeno due o tre unità, possibilmente collegate tra loro via cavo." },
      { profile: "Smart working e gaming", text: "Router con porte Gigabit, gestione della priorità del traffico e collegamento via cavo per il PC." },
    ],
    faq: [
      { q: "Posso usare il mio router con la fibra dell'operatore?", a: "Di solito sì, collegandolo al modem dell'operatore o configurando i parametri della linea." },
      { q: "Il mesh rallenta la connessione?", a: "Un buon sistema mesh mantiene velocità elevate; i modelli tri-band o collegati via cavo perdono meno banda." },
      { q: "Dove posizionare il router?", a: "In posizione centrale, rialzata e lontano da muri spessi, specchi e grandi elettrodomestici." },
    ],
  },
  {
    slug: "webcam",
    reviewedAt,
    intro: [
      "Le webcam integrate nei portatili sono spesso il punto debole delle videochiamate. Una webcam esterna migliora nitidezza, colori e gestione della luce, e si posiziona all'altezza giusta sul monitor.",
      "Per lavoro, lezioni o streaming contano soprattutto la qualità in luce scarsa e una messa a fuoco affidabile, più della risoluzione massima.",
    ],
    types: [
      { name: "Full HD", text: "Sufficienti per videochiamate di lavoro e lezioni online, con un ottimo rapporto qualità-prezzo." },
      { name: "4K", text: "Più dettaglio e margine per inquadrature ritagliate, utili per presentazioni e contenuti registrati." },
      { name: "Con inquadratura automatica", text: "Seguono la persona o inquadrano più partecipanti, comode per riunioni e lezioni dinamiche." },
    ],
    considerations: [
      { name: "Luce scarsa", text: "Sensori più grandi e correzione automatica dell'esposizione evitano immagini scure e rumorose." },
      { name: "Messa a fuoco", text: "L'autofocus è utile se mostrate oggetti o documenti; il fuoco fisso basta se restate sempre alla stessa distanza." },
      { name: "Microfoni", text: "I microfoni integrati vanno bene per l'uso occasionale; per chiamate frequenti una cuffia con microfono è migliore." },
      { name: "Privacy", text: "Un copriobiettivo fisico dà tranquillità quando la webcam non è in uso." },
    ],
    buyingGuide: [
      { profile: "Smart working", text: "Una Full HD con buona gestione della luce e copriobiettivo." },
      { profile: "Streaming e contenuti", text: "Una webcam 4K o a 60 fps con controlli manuali via software." },
      { profile: "Riunioni di gruppo", text: "Un modello grandangolare con inquadratura automatica." },
    ],
    faq: [
      { q: "Serve un software?", a: "Funzionano subito via USB; il software del produttore serve per regolazioni avanzate e aggiornamenti." },
      { q: "Funziona con tutte le piattaforme di videochiamata?", a: "Sì, le webcam USB standard sono riconosciute da tutte le principali piattaforme." },
      { q: "Come migliorare l'immagine?", a: "Una luce frontale morbida, anche una finestra, conta più della webcam stessa." },
    ],
  },
  {
    slug: "stampanti-multifunzione",
    reviewedAt,
    intro: [
      "Una stampante multifunzione unisce stampa, scansione e copia. La scelta giusta dipende da quanto stampate e da cosa: documenti in bianco e nero, foto, moduli scolastici.",
      "Il prezzo d'acquisto conta meno del costo per pagina: una stampante economica con cartucce costose può risultare la più cara dopo un anno.",
    ],
    types: [
      { name: "Inkjet a cartucce", text: "Economiche all'acquisto e buone per le foto, ma con costo per pagina alto se stampate spesso." },
      { name: "Inkjet a serbatoi", text: "Si riempiono con flaconi di inchiostro: costano di più all'inizio ma riducono molto il costo per pagina." },
      { name: "Laser", text: "Veloci, precise e convenienti per molti documenti in bianco e nero; il toner non si secca se si stampa poco." },
    ],
    considerations: [
      { name: "Costo per pagina", text: "Confrontate il costo dei consumabili e la loro resa in pagine, non solo il prezzo della stampante." },
      { name: "Fronte-retro e alimentatore", text: "La stampa fronte-retro automatica e l'alimentatore per la scansione di più pagine fanno risparmiare tempo e carta." },
      { name: "Connettività", text: "Wi-Fi e app per smartphone permettono di stampare e scansionare da qualsiasi dispositivo." },
      { name: "Volume di stampa", text: "Se stampate raramente, una laser evita gli ugelli secchi tipici delle inkjet." },
    ],
    buyingGuide: [
      { profile: "Casa e scuola", text: "Una inkjet a serbatoi stampa a colori con costi bassi anche con molti compiti e moduli." },
      { profile: "Ufficio e documenti", text: "Una laser monocromatica con fronte-retro e Wi-Fi è rapida e affidabile." },
      { profile: "Foto", text: "Una inkjet fotografica con più colori offre stampe di qualità superiore." },
    ],
    faq: [
      { q: "Le cartucce compatibili sono un problema?", a: "Spesso funzionano, ma alcune stampanti le rifiutano dopo gli aggiornamenti. Verificate le condizioni di garanzia." },
      { q: "Quanto dura l'inchiostro se non stampo?", a: "Nelle inkjet gli ugelli possono seccarsi; stampare una pagina ogni settimana aiuta a mantenerli puliti." },
      { q: "Serve un abbonamento?", a: "Alcuni produttori offrono abbonamenti per l'inchiostro: convengono solo con volumi di stampa regolari." },
    ],
  },
  {
    slug: "tablet",
    reviewedAt,
    intro: [
      "Un tablet è lo schermo ideale per leggere, guardare video, prendere appunti e lavorare in modo leggero, in un formato più comodo del portatile per il divano e i viaggi.",
      "Il sistema operativo e l'ecosistema di app contano più della scheda tecnica: scegliete in base agli altri dispositivi che usate e a cosa vi serve davvero.",
    ],
    types: [
      { name: "Intrattenimento", text: "Schermi da 10-11 pollici, buoni altoparlanti e prezzo contenuto per video, lettura e navigazione." },
      { name: "Produttività", text: "Processori potenti, supporto a penna e tastiera: possono sostituire il portatile per molte attività." },
      { name: "Per bambini", text: "Con custodie robuste e controllo parentale integrato, pensati per l'uso dei più piccoli." },
    ],
    considerations: [
      { name: "Schermo", text: "Dimensione, risoluzione e luminosità determinano l'esperienza; i 90-120 Hz rendono tutto più fluido." },
      { name: "Memoria", text: "Almeno 128 GB se scaricate film e giochi; verificate se c'è lo slot microSD." },
      { name: "Penna e tastiera", text: "Se volete prendere appunti o scrivere, verificate compatibilità e costo degli accessori." },
      { name: "Aggiornamenti", text: "Un supporto software lungo garantisce sicurezza e compatibilità con le app per più anni." },
    ],
    buyingGuide: [
      { profile: "Video e lettura", text: "Un tablet da 10-11 pollici con buono schermo e altoparlanti stereo." },
      { profile: "Studio e appunti", text: "Un modello con penna attiva e app per gli appunti ben integrate." },
      { profile: "Sostituire il portatile", text: "Processore potente, tastiera dedicata e almeno 8 GB di RAM." },
    ],
    faq: [
      { q: "Serve la versione con SIM?", a: "Solo se lo usate spesso fuori casa senza Wi-Fi; altrimenti basta l'hotspot del telefono." },
      { q: "Può sostituire un portatile?", a: "Per email, documenti e navigazione sì; per software professionali specifici spesso no." },
      { q: "Quanto dura la batteria?", a: "Di solito 8-12 ore di uso misto, più che sufficienti per una giornata." },
    ],
  },
  {
    slug: "hub-usb-c",
    reviewedAt,
    intro: [
      "I portatili sottili hanno poche porte, spesso solo USB-C. Un hub o una docking station aggiunge HDMI, USB-A, lettore di schede ed Ethernet, e permette di collegare tutto con un solo cavo.",
      "Prima di comprare verificate cosa supporta la porta del vostro computer: non tutte le USB-C gestiscono video e ricarica, e molti Mac hanno limiti sul numero di monitor esterni.",
    ],
    types: [
      { name: "Hub da viaggio", text: "Piccoli e senza alimentatore: aggiungono le porte essenziali per presentazioni e trasferimenti." },
      { name: "Hub da scrivania", text: "Più porte, ricarica passante e spesso Ethernet: per collegare monitor e periferiche ogni giorno." },
      { name: "Docking station", text: "Alimentazione propria, più monitor esterni e molte porte: trasformano il portatile in una postazione fissa." },
    ],
    considerations: [
      { name: "Monitor supportati", text: "Verificate quanti monitor e a quale risoluzione e frequenza: 4K a 60 Hz richiede porte adeguate." },
      { name: "Ricarica passante", text: "La potenza in watt deve bastare per il vostro portatile, tenendo conto di quella consumata dall'hub." },
      { name: "Velocità USB", text: "Porte a 10 Gbps velocizzano il trasferimento da SSD e dischi esterni." },
      { name: "Compatibilità", text: "Su Mac con chip Apple il supporto a più monitor varia molto tra modelli: verificatelo prima." },
    ],
    buyingGuide: [
      { profile: "In viaggio", text: "Un hub compatto con HDMI, USB-A e lettore di schede." },
      { profile: "Postazione con un monitor", text: "Un hub con HDMI 4K a 60 Hz, ricarica passante ed Ethernet." },
      { profile: "Più monitor", text: "Una docking station alimentata con supporto dichiarato per il vostro sistema operativo." },
    ],
    faq: [
      { q: "Si scalda?", a: "È normale che gli hub compatti si scaldino sotto carico; i modelli in alluminio dissipano meglio." },
      { q: "Funziona con tablet e smartphone?", a: "Molti hub funzionano anche con tablet e telefoni dotati di USB-C con uscita video." },
      { q: "Cos'è DisplayLink?", a: "Una tecnologia che aggiunge monitor tramite driver, utile per superare i limiti di alcuni computer." },
    ],
  },
];
