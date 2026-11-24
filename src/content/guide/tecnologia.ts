import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

export const guides: CategoryGuide[] = [
  {
    slug: "smartphone",
    reviewedAt,
    intro: [
      "Lo smartphone è il dispositivo che usiamo più ore al giorno, e per questo le differenze tra un modello e l'altro si sentono molto più che su qualsiasi altro acquisto tecnologico. Fotocamera, autonomia e fluidità sono le tre voci che determinano se dopo sei mesi sarete ancora soddisfatti.",
      "Oggi anche la fascia media offre schermi ottimi e batterie che arrivano a sera senza problemi. Ciò che distingue davvero i modelli più costosi è la qualità delle foto in condizioni difficili, la durata degli aggiornamenti software e la cura dei materiali.",
    ],
    types: [
      { name: "Fascia d'ingresso", text: "Sotto i 200 euro: adatti a chiamate, messaggi, social e navigazione. Spesso hanno grandi batterie, ma fotocamere e prestazioni sono limitate e gli aggiornamenti durano meno." },
      { name: "Fascia media", text: "Tra 250 e 500 euro: il miglior rapporto qualità-prezzo per la maggior parte delle persone, con schermi OLED, ricarica rapida e fotocamere convincenti di giorno." },
      { name: "Top di gamma", text: "Oltre i 700 euro: fotocamere versatili anche di notte, processori più potenti, materiali premium, resistenza all'acqua e molti anni di aggiornamenti garantiti." },
    ],
    considerations: [
      { name: "Aggiornamenti software", text: "Controllate per quanti anni il produttore garantisce aggiornamenti di sistema e di sicurezza: è ciò che decide quanto a lungo potrete usare il telefono in tranquillità." },
      { name: "Autonomia e ricarica", text: "La capacità in mAh è solo un indicatore: conta anche l'efficienza del processore. Una ricarica rapida da almeno 30 W fa la differenza nelle giornate intense." },
      { name: "Fotocamera", text: "Il numero di megapixel conta poco. Guardate la qualità del sensore principale, la presenza di uno zoom ottico e la stabilizzazione per video e foto notturne." },
      { name: "Memoria", text: "128 GB sono il minimo consigliato oggi; se scattate molti video o non usate il cloud, puntate a 256 GB, perché spesso la memoria non è espandibile." },
    ],
    buyingGuide: [
      { profile: "Uso essenziale", text: "Un modello di fascia media dell'anno precedente è spesso la scelta più intelligente: prezzo sceso, prestazioni ancora ottime e qualche anno di aggiornamenti davanti." },
      { profile: "Appassionati di foto", text: "Puntate su un top di gamma o su un modello di fascia alta con teleobiettivo: è lì che si vede la differenza nei ritratti, nello zoom e nelle foto serali." },
      { profile: "Chi vuole tenerlo a lungo", text: "Privilegiate i produttori che garantiscono cinque o più anni di aggiornamenti e verificate la disponibilità di riparazioni e ricambi originali." },
    ],
    faq: [
      { q: "Conviene comprare un modello dell'anno scorso?", a: "Spesso sì: le differenze tra una generazione e l'altra sono ridotte, mentre il prezzo cala sensibilmente nei mesi successivi all'uscita del nuovo modello." },
      { q: "Il caricabatterie è incluso?", a: "Molti produttori non lo includono più nella confezione. Verificate la potenza supportata e acquistate un alimentatore compatibile per sfruttare la ricarica rapida." },
      { q: "Serve il 5G?", a: "È ormai presente in quasi tutti i modelli dalla fascia media in su. È utile dove la copertura è buona, ma non è un motivo sufficiente per scegliere un telefono." },
    ],
  },
  {
    slug: "auricolari-bluetooth",
    reviewedAt,
    intro: [
      "Gli auricolari true wireless sono diventati il modo più comodo per ascoltare musica, podcast e chiamate fuori casa: stanno in tasca, si ricaricano nella custodia e si collegano al telefono appena li indossate.",
      "Le differenze stanno nella vestibilità, nella qualità dei microfoni, nell'efficacia della cancellazione del rumore e nell'integrazione con il proprio telefono. Un buon auricolare deve prima di tutto restare stabile nell'orecchio senza dare fastidio.",
    ],
    types: [
      { name: "In-ear con gommini", text: "Sigillano il condotto uditivo: isolano meglio, offrono bassi più presenti e sono la base per una buona cancellazione attiva del rumore." },
      { name: "Semi-aperti", text: "Appoggiano all'ingresso dell'orecchio senza sigillarlo: più comodi per molte ore e consentono di sentire l'ambiente, ma isolano poco." },
      { name: "Sportivi", text: "Hanno archetti o alette per restare fermi durante la corsa e una certificazione contro sudore e acqua più elevata." },
    ],
    considerations: [
      { name: "Vestibilità", text: "Verificate che siano inclusi gommini di più taglie: un buon sigillo migliora isolamento, bassi e cancellazione del rumore più di qualsiasi specifica tecnica." },
      { name: "Cancellazione del rumore", text: "Utile su mezzi pubblici e in ufficio. Valutate anche la modalità trasparenza, per sentire annunci e conversazioni senza toglierli." },
      { name: "Chiamate", text: "La qualità dei microfoni all'aperto e nel vento varia molto. Se telefonate spesso, privilegiate modelli recensiti bene proprio sulle chiamate." },
      { name: "Autonomia", text: "Guardate le ore con una carica e quelle totali con la custodia, oltre alla ricarica rapida e alla possibilità di ricaricare la custodia in wireless." },
    ],
    buyingGuide: [
      { profile: "Pendolari", text: "Cancellazione attiva del rumore, buona modalità trasparenza e connessione stabile sono le priorità. Il multipoint è utile se alternate telefono e computer." },
      { profile: "Sport", text: "Scegliete una forma stabile, resistenza almeno IPX4 e controlli fisici facili da usare con le mani sudate." },
      { profile: "Budget contenuto", text: "Molti modelli economici offrono un suono piacevole e una buona autonomia. Rinunciate a funzioni accessorie, ma non a una vestibilità comoda." },
    ],
    faq: [
      { q: "Funzionano con qualsiasi telefono?", a: "Sì, tramite Bluetooth. Alcune funzioni avanzate, come il cambio automatico tra dispositivi o certi codec, sono però riservate a telefoni della stessa marca." },
      { q: "Si possono usare con un solo auricolare?", a: "La maggior parte dei modelli lo consente, utile per le chiamate o per tenere un orecchio libero." },
      { q: "Quanto durano le batterie?", a: "Dopo due o tre anni di uso quotidiano l'autonomia cala. Le batterie raramente si sostituiscono, quindi conviene considerarli un acquisto di medio periodo." },
    ],
  },
  {
    slug: "smartwatch",
    reviewedAt,
    intro: [
      "Uno smartwatch porta al polso notifiche, pagamenti contactless, monitoraggio del sonno e dell'attività fisica. Per molti diventa un modo per guardare meno il telefono durante la giornata.",
      "La scelta parte dal telefono che avete: alcuni orologi funzionano al meglio solo con un sistema operativo. Poi contano autonomia, comfort e precisione dei sensori, che variano molto tra un modello e l'altro.",
    ],
    types: [
      { name: "Smartwatch completi", text: "Hanno app, assistente vocale, pagamenti e spesso connessione LTE. Sono i più versatili, ma di solito vanno ricaricati ogni uno o due giorni." },
      { name: "Fitness tracker evoluti", text: "Schermo più piccolo e funzioni essenziali, ma autonomia di una o due settimane e prezzo contenuto. Ideali per passi, sonno e allenamenti leggeri." },
      { name: "Orologi sportivi con GPS", text: "Pensati per corsa, bici e outdoor: GPS preciso, metriche di allenamento avanzate e autonomie lunghe anche con il GPS acceso." },
    ],
    considerations: [
      { name: "Compatibilità", text: "Verificate che l'orologio supporti pienamente il vostro telefono: risposte rapide ai messaggi e alcune app possono non funzionare con sistemi diversi." },
      { name: "Autonomia", text: "Uno schermo sempre acceso e il GPS consumano molto. Valutate quanto spesso siete disposti a ricaricarlo." },
      { name: "Sensori", text: "Battito cardiaco, ossigeno nel sangue e sonno sono ormai comuni. Per l'uso sportivo conta la precisione del GPS e del cardiofrequenzimetro durante l'attività." },
      { name: "Comfort", text: "Peso, dimensione della cassa e cinturino determinano se lo indosserete anche di notte, che è la condizione per un buon monitoraggio del sonno." },
    ],
    buyingGuide: [
      { profile: "Notifiche e vita quotidiana", text: "Uno smartwatch completo dello stesso ecosistema del vostro telefono offre l'esperienza più fluida." },
      { profile: "Sport e corsa", text: "Un orologio sportivo con GPS multibanda e lunga autonomia vi darà dati più affidabili e meno ricariche." },
      { profile: "Budget contenuto", text: "Un fitness tracker di buona marca copre passi, sonno e notifiche con un'autonomia che gli smartwatch completi non raggiungono." },
    ],
    faq: [
      { q: "Misura la pressione o l'elettrocardiogramma?", a: "Alcuni modelli offrono l'ECG certificato in Europa; i dati sanitari restano indicativi e non sostituiscono gli esami medici." },
      { q: "Si può fare la doccia con lo smartwatch?", a: "La maggior parte resiste all'acqua per l'uso quotidiano e il nuoto in piscina. Saune e acqua molto calda sono invece sconsigliate." },
      { q: "Serve il modello con LTE?", a: "Solo se volete telefonare e ricevere messaggi lasciando il telefono a casa, ad esempio durante la corsa. Richiede un piano dati dedicato." },
    ],
  },
  {
    slug: "smart-tv",
    reviewedAt,
    intro: [
      "Una smart TV è insieme schermo, decoder e lettore per le app di streaming. La qualità dell'immagine dipende soprattutto dalla tecnologia del pannello, mentre il sistema operativo influisce su velocità e facilità d'uso per anni.",
      "Prima di guardare le specifiche conviene partire da due domande: quanto è grande la stanza e quanta luce c'è. Un salotto molto luminoso e una stanza buia premiano tecnologie diverse.",
    ],
    types: [
      { name: "LED e QLED", text: "Le più diffuse e accessibili. I modelli QLED offrono colori più intensi e buona luminosità, adatti a stanze luminose." },
      { name: "Mini LED", text: "Retroilluminazione con migliaia di piccoli LED: neri più profondi e luminosità molto alta, ottime per HDR e ambienti luminosi." },
      { name: "OLED", text: "Ogni pixel si accende da solo: neri perfetti, contrasto eccellente e angoli di visione ampi. Il meglio per film e stanze in penombra." },
    ],
    considerations: [
      { name: "Dimensione", text: "Come riferimento, per un 4K la distanza ideale è circa 1-1,5 volte la diagonale. Molti, dopo l'acquisto, rimpiangono di non aver scelto un pollice in più." },
      { name: "HDR e luminosità", text: "L'HDR rende davvero solo con pannelli luminosi e una buona gestione del contrasto. Sigle come HDR10+ e Dolby Vision indicano i formati supportati." },
      { name: "Gaming", text: "Per console di ultima generazione servono porte HDMI 2.1, frequenza a 120 Hz e modalità a bassa latenza." },
      { name: "Sistema operativo", text: "Verificate che ci siano tutte le app che usate e che il produttore aggiorni il software: un'interfaccia lenta rovina anche un ottimo pannello." },
    ],
    buyingGuide: [
      { profile: "Salotto luminoso", text: "Un QLED o un Mini LED con alta luminosità gestisce meglio i riflessi e mantiene un'immagine brillante di giorno." },
      { profile: "Cinema in casa", text: "Un OLED offre il contrasto migliore per film e serie in una stanza con luce controllata. Abbinatelo a una soundbar." },
      { profile: "Camera o cucina", text: "Un 32 o 43 pollici Full HD o 4K con un buon sistema operativo è più che sufficiente e costa poco." },
    ],
    faq: [
      { q: "Serve ancora il decoder?", a: "Le TV recenti integrano i sintonizzatori digitali terrestri e satellitari di ultima generazione: in genere non serve un decoder esterno." },
      { q: "Il suono integrato basta?", a: "Per l'uso quotidiano sì, ma gli schermi sottili hanno altoparlanti limitati. Una soundbar migliora molto dialoghi e film." },
      { q: "Gli OLED si rovinano con le immagini fisse?", a: "I modelli recenti hanno sistemi di protezione efficaci. Con un uso vario il rischio di stampaggio è basso." },
    ],
  },
  {
    slug: "soundbar",
    reviewedAt,
    intro: [
      "Le TV moderne sono sottilissime e i loro altoparlanti ne pagano le conseguenze: dialoghi poco chiari e bassi assenti. Una soundbar è il modo più semplice per migliorare l'audio senza riempire la stanza di casse e cavi.",
      "Si collega di solito con un solo cavo HDMI e si comanda con il telecomando della TV. La scelta dipende dalla dimensione della stanza e da quanto volete avvicinarvi a un vero home theater.",
    ],
    types: [
      { name: "Soundbar compatte", text: "Un'unica barra, spesso con subwoofer integrato: migliora molto la chiarezza dei dialoghi ed è ideale per camere e soggiorni piccoli." },
      { name: "Con subwoofer separato", text: "Il subwoofer wireless aggiunge bassi profondi per film e musica, con un ingombro ancora contenuto." },
      { name: "Sistemi surround e Dolby Atmos", text: "Altoparlanti rivolti verso l'alto e casse posteriori creano un audio avvolgente. Sono la scelta per chi vuole un effetto cinema." },
    ],
    considerations: [
      { name: "Collegamento", text: "Preferite l'HDMI eARC: trasporta audio di qualità e permette di usare il telecomando della TV. L'ottico va bene ma limita i formati." },
      { name: "Dialoghi", text: "Un canale centrale dedicato o una modalità voce rendono i dialoghi comprensibili anche a volume basso." },
      { name: "Dimensioni", text: "Idealmente la barra non dovrebbe essere più larga della TV e non deve coprire il sensore del telecomando." },
      { name: "Musica e streaming", text: "Wi-Fi, Bluetooth e il supporto ai servizi musicali trasformano la soundbar in un impianto per tutta la casa." },
    ],
    buyingGuide: [
      { profile: "Dialoghi più chiari", text: "Una soundbar compatta con canale centrale risolve il problema più comune delle TV sottili senza spendere molto." },
      { profile: "Film e serie", text: "Scegliete un modello con subwoofer wireless e, se lo spazio lo consente, supporto Dolby Atmos." },
      { profile: "Appartamento", text: "Le modalità notte, che riducono i picchi di volume, sono preziose per non disturbare i vicini." },
    ],
    faq: [
      { q: "Serve il subwoofer?", a: "Non è indispensabile, ma per film e musica aggiunge profondità che una barra sottile da sola non riesce a dare." },
      { q: "Funziona con qualsiasi TV?", a: "Quasi sempre sì, tramite HDMI o ottico. Verificate che la TV abbia una porta HDMI ARC o eARC." },
      { q: "Si può aggiungere il surround in seguito?", a: "Molte soundbar permettono di aggiungere casse posteriori e subwoofer della stessa marca in un secondo momento." },
    ],
  },
  {
    slug: "altoparlanti-bluetooth",
    reviewedAt,
    intro: [
      "Una cassa Bluetooth porta la musica ovunque: in giardino, in spiaggia, in campeggio o semplicemente da una stanza all'altra. I modelli migliori uniscono un suono pieno a una costruzione robusta e impermeabile.",
      "La dimensione conta più di ogni specifica: una cassa da tasca non potrà mai riempire un giardino, mentre un modello grande è scomodo da portare in viaggio.",
    ],
    types: [
      { name: "Ultraportatili", text: "Stanno in tasca o si agganciano allo zaino: ideali per la doccia, la bici e l'ascolto personale." },
      { name: "Portatili medi", text: "Il compromesso più diffuso: suono pieno, bassi convincenti e autonomia di una giornata intera." },
      { name: "Da festa", text: "Grandi, potenti e spesso con luci: pensate per esterni e gruppi di persone, ma pesanti da trasportare." },
    ],
    considerations: [
      { name: "Impermeabilità", text: "Una certificazione IP67 protegge da polvere e immersione: indispensabile per spiaggia e piscina." },
      { name: "Autonomia", text: "Le ore dichiarate si riferiscono a volume medio. A volume alto si riducono anche della metà." },
      { name: "Abbinamento", text: "La possibilità di collegare due casse in stereo o più casse insieme amplia molto le possibilità d'uso." },
      { name: "Vivavoce", text: "Un microfono integrato permette di rispondere alle chiamate, utile se usate la cassa anche in casa o in ufficio." },
    ],
    buyingGuide: [
      { profile: "Viaggio e outdoor", text: "Una cassa compatta e robusta con IP67 e laccio per agganciarla è la scelta più pratica." },
      { profile: "Casa e giardino", text: "Un modello medio con buona autonomia e bassi pieni copre la maggior parte delle situazioni." },
      { profile: "Feste", text: "Scegliete una cassa grande con alta potenza e possibilità di collegarne più insieme." },
    ],
    faq: [
      { q: "Si può usare come powerbank?", a: "Alcuni modelli hanno una porta USB per ricaricare il telefono, a scapito dell'autonomia della cassa." },
      { q: "Il Bluetooth peggiora il suono?", a: "Per l'ascolto all'aperto la differenza è minima. Conta molto di più la qualità degli altoparlanti." },
      { q: "Quanto lontano arriva il segnale?", a: "In genere una decina di metri senza ostacoli. Muri e persone riducono la portata." },
    ],
  },
  {
    slug: "fotocamere-mirrorless",
    reviewedAt,
    intro: [
      "Le mirrorless hanno sostituito le reflex come fotocamere da prendere sul serio: sono più compatte, hanno autofocus molto più evoluti e mostrano nel mirino l'immagine esattamente come verrà scattata.",
      "Rispetto a uno smartphone offrono sensori molto più grandi, obiettivi intercambiabili e un controllo completo sullo scatto. Il corpo macchina però è solo metà dell'investimento: conta altrettanto la scelta degli obiettivi.",
    ],
    types: [
      { name: "APS-C", text: "Sensore di dimensioni intermedie: corpi e obiettivi più compatti ed economici, qualità d'immagine ottima per la maggior parte degli usi." },
      { name: "Full frame", text: "Sensore più grande: migliore resa in poca luce, sfocati più morbidi e più margine in post-produzione, a fronte di costi e pesi maggiori." },
      { name: "Compatte per vlog", text: "Pensate per il video: schermo orientabile, microfoni migliori e stabilizzazione, spesso con obiettivo grandangolare." },
    ],
    considerations: [
      { name: "Sistema di obiettivi", text: "Prima di scegliere il corpo verificate la disponibilità e il costo degli obiettivi di quella marca: li terrete più a lungo della fotocamera." },
      { name: "Autofocus", text: "Il riconoscimento di occhi, persone e animali è ormai diffuso e rende molto più facili ritratti e foto in movimento." },
      { name: "Stabilizzazione", text: "La stabilizzazione sul sensore aiuta con tutti gli obiettivi, utile per foto in poca luce e per i video a mano libera." },
      { name: "Ergonomia", text: "Impugnatura, mirino e posizione dei comandi incidono su quanto la userete: se potete, provatela in mano." },
    ],
    buyingGuide: [
      { profile: "Primo passo oltre lo smartphone", text: "Un'APS-C con obiettivo del kit e un fisso luminoso da aggiungere in seguito è la combinazione più versatile." },
      { profile: "Ritratti e poca luce", text: "Una full frame con un obiettivo luminoso offre sfocati e pulizia d'immagine difficili da ottenere altrimenti." },
      { profile: "Video e creator", text: "Cercate schermo orientabile, ingresso microfono, buona stabilizzazione e assenza di limiti di registrazione." },
    ],
    faq: [
      { q: "Meglio solo corpo o kit?", a: "Il kit con obiettivo zoom è conveniente per iniziare. Chi ha già obiettivi compatibili può risparmiare acquistando solo il corpo." },
      { q: "Gli obiettivi delle reflex sono compatibili?", a: "Spesso sì tramite adattatori ufficiali della stessa marca, mantenendo l'autofocus nella maggior parte dei casi." },
      { q: "Quanti megapixel servono?", a: "Tra 24 e 33 megapixel bastano per stampe grandi e ritagli. Risoluzioni più alte servono soprattutto per paesaggi e usi professionali." },
    ],
  },
  {
    slug: "action-cam",
    reviewedAt,
    intro: [
      "Le action cam sono videocamere piccole e robuste pensate per riprendere ciò che fate mentre lo fate: in bici, sugli sci, sott'acqua o in moto. La stabilizzazione elettronica moderna rende le riprese fluide anche nei movimenti più bruschi.",
      "I modelli recenti registrano in 4K e oltre, resistono all'acqua senza custodia e si controllano dallo smartphone. Gli accessori di montaggio contano quasi quanto la camera stessa.",
    ],
    types: [
      { name: "Action cam classiche", text: "Obiettivo grandangolare, forma compatta e grande scelta di supporti: la soluzione più versatile per sport e viaggi." },
      { name: "Camere a 360°", text: "Riprendono tutto ciò che c'è intorno: in montaggio si sceglie l'inquadratura, e il bastone di selfie sparisce dall'immagine." },
      { name: "Modelli economici", text: "Registrano in 4K a costi contenuti, ma la stabilizzazione e la qualità in poca luce sono inferiori." },
    ],
    considerations: [
      { name: "Stabilizzazione", text: "È la caratteristica più importante: una buona stabilizzazione elettronica sostituisce un gimbal nella maggior parte delle situazioni." },
      { name: "Poca luce", text: "I sensori piccoli soffrono al tramonto e al chiuso. I modelli con sensori più grandi danno risultati molto migliori." },
      { name: "Autonomia", text: "Registrando in 4K le batterie durano spesso meno di un'ora e mezza: valutate batterie di ricambio." },
      { name: "Impermeabilità", text: "Verificate la profondità supportata senza custodia e l'eventuale custodia per immersioni più profonde." },
    ],
    buyingGuide: [
      { profile: "Bici e moto", text: "Stabilizzazione eccellente, supporti da manubrio o casco e buona gestione del vento nell'audio." },
      { profile: "Mare e montagna", text: "Impermeabilità elevata, resistenza al freddo e batterie che durano anche a basse temperature." },
      { profile: "Viaggi e vlog", text: "Uno schermo frontale e microfoni di qualità rendono più semplice riprendersi mentre si parla." },
    ],
    faq: [
      { q: "Serve una scheda di memoria particolare?", a: "Per il 4K servono schede microSD veloci, di classe V30 o superiore, altrimenti la registrazione può interrompersi." },
      { q: "Si può usare come webcam?", a: "Molti modelli lo consentono via USB, con buona qualità d'immagine grazie al grandangolo." },
      { q: "Meglio 4K o 1080p?", a: "Il 4K permette di ritagliare e stabilizzare meglio in montaggio. Il 1080p occupa meno spazio e consuma meno batteria." },
    ],
  },
  {
    slug: "power-bank",
    reviewedAt,
    intro: [
      "Un power bank è una batteria portatile che ricarica telefono, auricolari, tablet e, nei modelli più potenti, anche il portatile. È uno degli accessori più utili in viaggio e nelle giornate fuori casa.",
      "La capacità dichiarata non corrisponde all'energia che arriva davvero al telefono: una parte si perde nella conversione. Per scegliere bene servono anche potenza di uscita e tipo di porte.",
    ],
    types: [
      { name: "Compatti da 5.000-10.000 mAh", text: "Leggeri e tascabili: garantiscono una ricarica completa di uno smartphone e sono ideali per l'uso quotidiano." },
      { name: "Da 20.000 mAh", text: "Due o tre ricariche di uno smartphone: la scelta più equilibrata per viaggi e weekend." },
      { name: "Per laptop", text: "Uscite USB-C da 60-100 W o più: ricaricano anche i computer portatili, ma sono più pesanti." },
    ],
    considerations: [
      { name: "Potenza di uscita", text: "Per la ricarica rapida servono uscite USB-C con Power Delivery di almeno 20 W per i telefoni e 60 W per i portatili." },
      { name: "Porte", text: "Più porte permettono di ricaricare più dispositivi insieme; un cavo integrato evita di dimenticarlo a casa." },
      { name: "Peso", text: "A parità di capacità, il peso varia molto: per l'uso quotidiano conviene un modello leggero." },
      { name: "Viaggi in aereo", text: "I power bank vanno nel bagaglio a mano. Fino a 100 Wh, che corrispondono a circa 27.000 mAh, sono generalmente ammessi senza autorizzazione." },
    ],
    buyingGuide: [
      { profile: "Uso quotidiano", text: "Un 10.000 mAh compatto con USB-C da 20 W o più è sufficiente per la maggior parte delle persone." },
      { profile: "Viaggi", text: "Un 20.000 mAh con due porte permette di ricaricare telefono e auricolari più volte." },
      { profile: "Lavoro in mobilità", text: "Scegliete un modello con uscita da almeno 65 W per ricaricare il portatile." },
    ],
    faq: [
      { q: "Quante ricariche si ottengono?", a: "In pratica circa il 60-70% della capacità dichiarata arriva al dispositivo, per le perdite di conversione." },
      { q: "Si può lasciare sempre in carica?", a: "I modelli di qualità hanno protezioni contro la sovraccarica, ma conviene staccarlo a ricarica completata." },
      { q: "Ricarica i dispositivi wireless?", a: "Alcuni modelli hanno una superficie di ricarica wireless o magnetica, più comoda ma meno efficiente del cavo." },
    ],
  },
];
