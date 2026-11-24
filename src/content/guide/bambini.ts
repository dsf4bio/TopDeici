import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

export const guides: CategoryGuide[] = [
  {
    slug: "passeggini",
    reviewedAt,
    intro: [
      "Il passeggino è uno degli acquisti più importanti dei primi anni: si usa ogni giorno, in città, in auto e in viaggio. La scelta giusta dipende da dove vivete, da come vi spostate e dall'età del bambino.",
      "Prima di guardare il prezzo conviene verificare peso, ingombro da chiuso, facilità di chiusura con una mano e se il passeggino è adatto dalla nascita o solo dai 6 mesi.",
    ],
    types: [
      { name: "Trio e sistemi modulari", text: "Navicella, ovetto per l'auto e seduta passeggino sullo stesso telaio: coprono dalla nascita ai 3-4 anni." },
      { name: "Leggeri e compatti", text: "Pesano 5-8 kg e si chiudono in pochi secondi: ideali per città, mezzi pubblici e viaggi." },
      { name: "Da passeggio robusti", text: "Ruote grandi e sospensioni per sterrati, parchi e marciapiedi sconnessi." },
    ],
    considerations: [
      { name: "Età d'uso", text: "Per un neonato serve uno schienale completamente reclinabile o una navicella omologata." },
      { name: "Peso e chiusura", text: "Se usate scale o mezzi pubblici, il peso e la chiusura con una mano contano più degli accessori." },
      { name: "Ingombro", text: "Misurate il bagagliaio dell'auto e confrontatelo con le misure da chiuso." },
      { name: "Sicurezza", text: "Cinture a cinque punti, freno facile da azionare e conformità alla norma europea EN 1888." },
    ],
    buyingGuide: [
      { profile: "Primo figlio, dalla nascita", text: "Un trio con ovetto omologato i-Size e navicella per le prime settimane." },
      { profile: "Città e mezzi pubblici", text: "Un passeggino leggero e compatto, chiudibile con una mano." },
      { profile: "Secondo passeggino per i viaggi", text: "Un modello ultracompatto che entri nel bagaglio a mano." },
    ],
    faq: [
      { q: "Da che età si usa il passeggino senza navicella?", a: "In genere dai 6 mesi, quando il bambino sta seduto; prima serve uno schienale completamente reclinabile." },
      { q: "Conviene comprare un trio?", a: "Sì se volete un'unica soluzione dalla nascita; se avete già l'ovetto, un passeggino leggero può bastare." },
      { q: "Le ruote grandi sono meglio?", a: "Sono più comode su sterrato e pavé, ma aumentano peso e ingombro." },
    ],
  },
  {
    slug: "baby-monitor",
    reviewedAt,
    intro: [
      "Il baby monitor permette di sentire o vedere il bambino mentre dorme in un'altra stanza. È particolarmente utile nei primi mesi e per i sonnellini durante il giorno.",
      "La scelta principale è tra monitor con schermo dedicato, che funzionano senza internet, e telecamere Wi-Fi da controllare con l'app del telefono.",
    ],
    types: [
      { name: "Solo audio", text: "Semplici, economici e con grande autonomia: avvisano quando il bambino piange." },
      { name: "Video con schermo", text: "Collegamento diretto tra telecamera e unità genitore, senza internet né app." },
      { name: "Wi-Fi con app", text: "Si controllano dal telefono anche fuori casa, spesso con analisi del sonno." },
    ],
    considerations: [
      { name: "Portata", text: "Per i modelli con schermo verificate la portata reale tra muri e piani diversi." },
      { name: "Visione notturna", text: "Con luce a infrarossi l'immagine resta chiara al buio senza disturbare il bambino." },
      { name: "Autonomia dell'unità genitore", text: "Una batteria che dura tutta la notte evita di tenerla sempre in carica." },
      { name: "Sicurezza e privacy", text: "Per i modelli Wi-Fi preferite marchi noti, con aggiornamenti e accesso protetto." },
    ],
    buyingGuide: [
      { profile: "Neonato in camera vicina", text: "Un monitor video con schermo, visione notturna e allarme di distanza." },
      { profile: "Controllo anche da fuori casa", text: "Una telecamera Wi-Fi con app e notifiche." },
      { profile: "Budget ridotto", text: "Un buon monitor solo audio fa già il suo lavoro." },
    ],
    faq: [
      { q: "Serve un baby monitor se la culla è in camera?", a: "Di notte no, ma diventa utile per i sonnellini durante il giorno." },
      { q: "Dove va posizionata la telecamera?", a: "Ad almeno un metro dalla culla, con il cavo fuori dalla portata del bambino." },
      { q: "Il monitor del respiro sostituisce i controlli?", a: "No: è un aiuto, non un dispositivo medico. Per dubbi sulla salute parlate con il pediatra." },
    ],
  },
  {
    slug: "tiralatte",
    reviewedAt,
    intro: [
      "Il tiralatte permette di raccogliere il latte materno per conservarlo, farlo dare ad altri o aiutare la produzione. Un modello elettrico è più veloce e meno faticoso di quello manuale.",
      "Contano comfort, regolazione dell'aspirazione, rumore e portabilità, soprattutto se lo userete al lavoro o fuori casa.",
    ],
    types: [
      { name: "Singoli elettrici", text: "Per un uso occasionale o regolare su un seno alla volta." },
      { name: "Doppi", text: "Estraggono da entrambi i seni insieme, dimezzando i tempi: utili per uso quotidiano." },
      { name: "Indossabili", text: "Si portano dentro il reggiseno, senza tubi: comodi in movimento, ma con capacità ridotta." },
    ],
    considerations: [
      { name: "Comfort", text: "Coppe di misure diverse e modalità di stimolazione rendono l'estrazione più naturale." },
      { name: "Regolazioni", text: "Più livelli di aspirazione permettono di trovare il ritmo giusto senza fastidio." },
      { name: "Silenziosità e batteria", text: "Importanti per usarlo di notte, al lavoro o in viaggio." },
      { name: "Igiene", text: "Un sistema chiuso evita che il latte entri nel motore e semplifica la pulizia." },
    ],
    buyingGuide: [
      { profile: "Uso occasionale", text: "Un tiralatte elettrico singolo, leggero e semplice da pulire." },
      { profile: "Rientro al lavoro", text: "Un tiralatte doppio con batteria e borsa per trasportarlo." },
      { profile: "Libertà di movimento", text: "Un modello indossabile, accettando una capacità più piccola." },
    ],
    faq: [
      { q: "Quale misura di coppa scegliere?", a: "Dipende dal diametro del capezzolo: molti produttori forniscono una guida alle misure." },
      { q: "Come conservare il latte?", a: "Seguite le indicazioni del pediatra o dell'ostetrica su tempi di conservazione in frigo e congelatore." },
      { q: "Fa male?", a: "Non dovrebbe: se provoca dolore, riducete l'aspirazione o provate un'altra misura di coppa e chiedete consiglio." },
    ],
  },
  {
    slug: "sterilizzatori-biberon",
    reviewedAt,
    intro: [
      "Nei primi mesi biberon, tettarelle e succhietti vanno puliti con cura. Uno sterilizzatore elettrico a vapore lo fa in pochi minuti, mentre lo scaldabiberon porta latte e pappe alla temperatura giusta.",
      "Alcuni apparecchi fanno entrambe le cose, altri aggiungono l'asciugatura, molto comoda per avere biberon pronti senza lasciarli all'aria.",
    ],
    types: [
      { name: "Sterilizzatori a vapore", text: "Elettrici, con ciclo di pochi minuti e capacità di più biberon." },
      { name: "Sterilizzatori per microonde", text: "Economici e compatti, ma servono un microonde e più attenzione." },
      { name: "Scaldabiberon", text: "Riscaldano in modo uniforme latte e omogeneizzati, alcuni anche con funzione di scongelamento." },
    ],
    considerations: [
      { name: "Capacità", text: "Uno sterilizzatore da 6 biberon riduce il numero di cicli al giorno." },
      { name: "Asciugatura", text: "La funzione di asciugatura evita residui d'acqua e tiene i biberon sterili più a lungo." },
      { name: "Compatibilità", text: "Verificate che entrino biberon a collo largo e i tiralatte che usate." },
      { name: "Calcare", text: "Con acqua dura serve una decalcificazione frequente: controllate quanto è semplice." },
    ],
    buyingGuide: [
      { profile: "Allattamento artificiale", text: "Uno sterilizzatore a vapore con asciugatura e capacità di almeno 6 biberon." },
      { profile: "Uso occasionale", text: "Uno sterilizzatore per microonde o uno scaldabiberon semplice." },
      { profile: "Poco spazio in cucina", text: "Un apparecchio combinato che sterilizza e scalda." },
    ],
    faq: [
      { q: "Fino a quando sterilizzare?", a: "Di solito nei primi mesi; chiedete al pediatra quando potete passare al semplice lavaggio." },
      { q: "Quanto restano sterili i biberon?", a: "Nei modelli chiusi con asciugatura fino a 24 ore, se non si apre il coperchio." },
      { q: "Si può scaldare il latte materno?", a: "Sì, ma senza superare la temperatura corporea: molti scaldabiberon hanno un programma apposito." },
    ],
  },
  {
    slug: "seggioloni",
    reviewedAt,
    intro: [
      "Il seggiolone accompagna lo svezzamento e i primi anni di pasti a tavola. I modelli moderni si regolano in altezza e crescono con il bambino, alcuni fino all'età scolare.",
      "Oltre alla sicurezza, contano la facilità di pulizia e l'ingombro in cucina.",
    ],
    types: [
      { name: "Classici regolabili", text: "Altezza, schienale e vassoio regolabili, spesso con ruote e chiusura compatta." },
      { name: "Evolutivi", text: "Diventano una sedia per bambini e poi per ragazzi, con sedute in legno regolabili." },
      { name: "Da viaggio e da tavolo", text: "Rialzi e seggiolini da agganciare al tavolo, leggeri e portatili." },
    ],
    considerations: [
      { name: "Sicurezza", text: "Cintura a cinque punti, base stabile e conformità alla norma EN 14988." },
      { name: "Pulizia", text: "Vassoio lavabile in lavastoviglie e rivestimento senza cuciture dove si annidano briciole." },
      { name: "Regolazioni", text: "Più altezze permettono di usarlo sia al tavolo sia vicino al divano." },
      { name: "Ingombro", text: "Se la cucina è piccola, scegliete un modello pieghevole o compatto." },
    ],
    buyingGuide: [
      { profile: "Svezzamento in cucina", text: "Un seggiolone regolabile con vassoio ampio e lavabile." },
      { profile: "Lunga durata", text: "Una sedia evolutiva in legno, da usare per anni." },
      { profile: "Pranzi fuori casa", text: "Un rialzo portatile o un seggiolino da tavolo." },
    ],
    faq: [
      { q: "Da quando si usa il seggiolone?", a: "Quando il bambino sta seduto bene da solo, di solito intorno ai 6 mesi." },
      { q: "Serve il riduttore?", a: "Aiuta i bambini più piccoli a stare composti; molti modelli lo includono." },
      { q: "Il legno è meglio della plastica?", a: "Dura di più ed è più stabile, ma la plastica è più facile da pulire." },
    ],
  },
  {
    slug: "culle-co-sleeping",
    reviewedAt,
    intro: [
      "Una culla co-sleeping si affianca al letto dei genitori con un lato aperto: il neonato dorme nel suo spazio, ma a portata di mano per allattarlo e controllarlo di notte.",
      "Il lettino da viaggio, invece, si apre e si chiude in pochi minuti per dormire dai nonni o in vacanza.",
    ],
    types: [
      { name: "Culle co-sleeping", text: "Si fissano al letto, con altezze e inclinazione regolabili." },
      { name: "Lettini da viaggio", text: "Pieghevoli e con borsa, usabili spesso fino ai 3 anni." },
      { name: "Culle classiche", text: "Indipendenti dal letto, a volte a dondolo." },
    ],
    considerations: [
      { name: "Fissaggio al letto", text: "Cinghie robuste e regolazioni in altezza per allinearsi perfettamente al materasso dei genitori." },
      { name: "Materasso", text: "Rigido, aderente ai bordi e della misura esatta della culla, senza spazi vuoti." },
      { name: "Età e peso", text: "Le culle co-sleeping si usano di solito fino ai 6 mesi o finché il bambino non si mette seduto." },
      { name: "Trasportabilità", text: "Ruote e chiusura rapida sono comode se la culla si sposta tra le stanze." },
    ],
    buyingGuide: [
      { profile: "Allattamento notturno", text: "Una culla co-sleeping regolabile in altezza, con lato abbassabile." },
      { profile: "Spazi piccoli", text: "Un modello compatto che diventa anche culla autonoma." },
      { profile: "Viaggi frequenti", text: "Un lettino da viaggio leggero con materassino incluso." },
    ],
    faq: [
      { q: "È sicuro dormire così vicini?", a: "La culla co-sleeping è pensata proprio per tenere il bambino vicino ma su un piano separato; seguite le indicazioni del pediatra sul sonno sicuro." },
      { q: "Servono paracolpi e cuscini?", a: "No: le linee guida sul sonno sicuro consigliano una culla sgombra." },
      { q: "Il lettino da viaggio può essere il letto principale?", a: "Per periodi brevi sì; per l'uso quotidiano meglio un materasso più spesso e confortevole." },
    ],
  },
  {
    slug: "marsupi",
    reviewedAt,
    intro: [
      "Il marsupio ergonomico permette di portare il bambino a contatto lasciando le mani libere. Rassicura il neonato e facilita gli spostamenti dove il passeggino è scomodo.",
      "Un buon marsupio sostiene il bambino nella posizione corretta a 'M', con le ginocchia più alte del sedere, e distribuisce il peso sulle spalle e sui fianchi di chi lo porta.",
    ],
    types: [
      { name: "Marsupi strutturati", text: "Con fibbie e fascia in vita imbottita: semplici da indossare e adatti a più persone." },
      { name: "Fasce", text: "Lunghe strisce di tessuto da annodare: molto avvolgenti, richiedono un po' di pratica." },
      { name: "Ibridi", text: "Combinano la praticità delle fibbie con la morbidezza della fascia." },
    ],
    considerations: [
      { name: "Posizione ergonomica", text: "Seduta ampia da ginocchio a ginocchio e supporto della schiena e della testa per i più piccoli." },
      { name: "Età e peso", text: "Verificate se è adatto dalla nascita o serve un riduttore." },
      { name: "Comfort di chi porta", text: "Spallacci imbottiti e fascia lombare larga per camminare a lungo senza mal di schiena." },
      { name: "Traspirabilità", text: "Tessuti in rete sono più freschi d'estate." },
    ],
    buyingGuide: [
      { profile: "Neonato", text: "Un marsupio ergonomico adatto dalla nascita o una fascia elastica." },
      { profile: "Passeggiate lunghe", text: "Marsupio strutturato con fascia lombare robusta." },
      { profile: "Più persone lo usano", text: "Regolazioni rapide con fibbie per adattarlo a corporature diverse." },
    ],
    faq: [
      { q: "Si può portare il bambino rivolto in avanti?", a: "Solo nei marsupi che lo prevedono e per brevi periodi, quando il bambino controlla bene la testa." },
      { q: "Per quanto tempo al giorno?", a: "Non c'è un limite fisso: controllate che il bambino respiri liberamente e sia ben posizionato." },
      { q: "Fino a che età si usa?", a: "Molti marsupi arrivano a 15-20 kg, quindi anche oltre i 2 anni." },
    ],
  },
  {
    slug: "biciclette-bambini",
    reviewedAt,
    intro: [
      "La bici senza pedali insegna l'equilibrio già dai 2 anni, e molti bambini passano poi alla bici con pedali senza bisogno delle rotelle. Dopo, la misura giusta della ruota dipende dall'altezza del bambino.",
      "Contano soprattutto la misura, il peso della bici e dei freni che il bambino riesce davvero ad azionare con le sue mani.",
    ],
    types: [
      { name: "Senza pedali", text: "Dai 2 ai 5 anni: leggere, per imparare l'equilibrio spingendo con i piedi." },
      { name: "Con pedali 12-16 pollici", text: "Dai 3 ai 7 anni circa, spesso con rotelle rimovibili." },
      { name: "20 pollici e oltre", text: "Dai 6-7 anni, con cambio e freni simili a quelli degli adulti." },
    ],
    considerations: [
      { name: "Misura", text: "Il bambino deve toccare terra con le punte dei piedi stando in sella: scegliete in base all'altezza, non all'età." },
      { name: "Peso", text: "Una bici leggera è più facile da controllare: idealmente meno del 40% del peso del bambino." },
      { name: "Freni", text: "Leve piccole e morbide, adatte a mani piccole; per i più piccoli anche il freno a contropedale." },
      { name: "Sicurezza", text: "Copricatena, manopole con protezione e campanello; il casco va sempre usato." },
    ],
    buyingGuide: [
      { profile: "2-4 anni", text: "Una bici senza pedali leggera, con sella regolabile." },
      { profile: "4-6 anni", text: "Una 14-16 pollici leggera, con freni a mano facili da azionare." },
      { profile: "Oltre i 7 anni", text: "Una 20-24 pollici con cambio, se pedala su percorsi vari." },
    ],
    faq: [
      { q: "Servono le rotelle?", a: "Chi ha usato la bici senza pedali spesso non ne ha bisogno." },
      { q: "Comprare più grande per farla durare?", a: "No: una bici troppo grande è difficile da controllare e pericolosa." },
      { q: "Che casco scegliere?", a: "Un casco omologato EN 1078, della misura giusta e ben allacciato." },
    ],
  },
];
