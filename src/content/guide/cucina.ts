import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

export const guides: CategoryGuide[] = [
  {
    slug: "macchine-caffe-superautomatiche",
    reviewedAt,
    intro: [
      "Una macchina superautomatica macina i chicchi al momento, dosa, pressa ed eroga il caffè premendo un solo tasto. È la soluzione per chi vuole un espresso fresco ogni giorno senza imparare a usare il portafiltro.",
      "Nel lungo periodo il caffè in grani costa molto meno delle capsule, quindi la spesa iniziale più alta si recupera, soprattutto in famiglia.",
    ],
    types: [
      { name: "Essenziali", text: "Espresso e caffè lungo con lancia vapore manuale per montare il latte." },
      { name: "Con sistema latte automatico", text: "Preparano cappuccino e latte macchiato con un tasto, grazie a una caraffa o a un tubo pescante." },
      { name: "Con profili e touch screen", text: "Molte bevande, profili per più utenti e regolazioni fini di intensità e temperatura." },
    ],
    considerations: [
      { name: "Macina", text: "Una macina in ceramica o acciaio con più gradi di macinatura permette di adattarsi a diverse miscele." },
      { name: "Latte", text: "La lancia manuale dà più controllo; il sistema automatico è comodo ma va pulito con regolarità." },
      { name: "Manutenzione", text: "Gruppo infusore removibile, programmi di pulizia e decalcificazione guidata semplificano la cura." },
      { name: "Dimensioni", text: "Verificate altezza e profondità rispetto ai pensili della cucina e lo spazio per il serbatoio." },
    ],
    buyingGuide: [
      { profile: "Solo espresso", text: "Un modello essenziale con buona macina e lancia vapore: meno parti, meno manutenzione." },
      { profile: "Famiglia e cappuccini", text: "Un sistema latte automatico e più profili utente." },
      { profile: "Spazio ridotto", text: "Un modello compatto con serbatoio accessibile frontalmente." },
    ],
    faq: [
      { q: "Si può usare caffè macinato?", a: "Molti modelli hanno un vano per il caffè già macinato, utile per il decaffeinato." },
      { q: "Ogni quanto decalcificare?", a: "Dipende dalla durezza dell'acqua: la macchina lo segnala; un filtro per l'acqua riduce la frequenza." },
      { q: "Che caffè usare?", a: "Miscele in grani per espresso, evitando chicchi troppo oleosi che possono intasare la macina." },
    ],
  },
  {
    slug: "macchine-caffe-espresso",
    reviewedAt,
    intro: [
      "Le macchine espresso manuali, con portafiltro e lancia vapore, sono quelle dei bar in versione domestica: richiedono un po' di pratica, ma permettono di regolare ogni dettaglio dell'estrazione.",
      "Il risultato dipende molto anche dal caffè e dalla macinatura: un macinacaffè di qualità è parte integrante dell'investimento.",
    ],
    types: [
      { name: "Entry level", text: "Compatte ed economiche, con portafiltro da 51 mm: ideali per iniziare." },
      { name: "Con macinacaffè integrato", text: "Uniscono macina e macchina in un solo apparecchio, comode in cucina." },
      { name: "Prosumer", text: "Caldaie più grandi, portafiltro da 58 mm e controllo della temperatura: per appassionati." },
    ],
    considerations: [
      { name: "Temperatura stabile", text: "Un controllo PID mantiene costante la temperatura dell'acqua, con risultati più ripetibili." },
      { name: "Lancia vapore", text: "Una lancia potente e orientabile è essenziale per una buona schiuma da cappuccino." },
      { name: "Portafiltro", text: "Il formato da 58 mm offre più accessori e un'estrazione più uniforme." },
      { name: "Tempo di riscaldamento", text: "I sistemi a thermoblock sono pronti in pochi secondi; le caldaie richiedono più minuti." },
    ],
    buyingGuide: [
      { profile: "Primi passi", text: "Una macchina compatta con portafiltro e lancia vapore, abbinata a caffè macinato per espresso." },
      { profile: "Tutto in uno", text: "Un modello con macinacaffè integrato e dosaggio regolabile." },
      { profile: "Appassionati", text: "Una macchina con PID, portafiltro da 58 mm e un macinacaffè separato di qualità." },
    ],
    faq: [
      { q: "È difficile da usare?", a: "Serve un po' di pratica su dose, macinatura e pressatura, ma in poche settimane si ottengono ottimi risultati." },
      { q: "Si possono usare le cialde?", a: "Molte accettano un filtro per cialde ESE, comodo per un caffè veloce." },
      { q: "Serve un macinacaffè?", a: "Non è obbligatorio, ma il caffè macinato al momento migliora molto aroma e crema." },
    ],
  },
  {
    slug: "frullatori",
    reviewedAt,
    intro: [
      "Frullati, vellutate, salse e trite: un buon frullatore velocizza molte preparazioni. La scelta parte da cosa preparate più spesso e da quante porzioni vi servono.",
      "Potenza e qualità delle lame contano, ma anche la facilità di pulizia: un frullatore scomodo da lavare finisce nell'armadio.",
    ],
    types: [
      { name: "Da tavolo", text: "Caraffa capiente e motore potente per frullati, smoothie e ghiaccio." },
      { name: "A immersione", text: "Pratici e compatti, ideali per vellutate direttamente nella pentola e piccoli quantitativi." },
      { name: "Monoporzione", text: "Frullano direttamente nella borraccia da portare via, perfetti per chi fa sport." },
    ],
    considerations: [
      { name: "Potenza", text: "Per ghiaccio e frutta congelata servono motori potenti, oltre i 1.000 W nei modelli da tavolo." },
      { name: "Caraffa", text: "Vetro o tritan senza BPA; la capacità deve essere adeguata alla famiglia." },
      { name: "Accessori", text: "Tritatutto, frusta e bicchiere graduato rendono il frullatore a immersione molto più versatile." },
      { name: "Pulizia", text: "Lame e parti lavabili in lavastoviglie o programma di autopulizia." },
    ],
    buyingGuide: [
      { profile: "Frullati e smoothie", text: "Un frullatore da tavolo potente o un modello monoporzione." },
      { profile: "Zuppe e salse", text: "Un frullatore a immersione con più velocità e accessori." },
      { profile: "Famiglia", text: "Una caraffa capiente con programmi automatici." },
    ],
    faq: [
      { q: "Può tritare il ghiaccio?", a: "I modelli da tavolo potenti sì; verificate che il produttore lo indichi." },
      { q: "Si possono frullare liquidi caldi?", a: "Con quelli a immersione sì; con i modelli da tavolo solo se previsto, lasciando sfogare il vapore." },
      { q: "Meglio vetro o plastica?", a: "Il vetro non si graffia e non trattiene odori; il tritan è più leggero e infrangibile." },
    ],
  },
  {
    slug: "robot-da-cucina",
    reviewedAt,
    intro: [
      "I robot da cucina multifunzione tritano, impastano, mescolano e, nei modelli con cottura, preparano risotti, sughi e zuppe quasi da soli. Sono utili per chi vuole risparmiare tempo senza rinunciare a piatti fatti in casa.",
      "La differenza principale è tra robot che preparano gli ingredienti e robot che cuociono.",
    ],
    types: [
      { name: "Robot multifunzione", text: "Con dischi e lame per tritare, affettare e grattugiare: velocizzano la preparazione." },
      { name: "Robot con cottura", text: "Scaldano e mescolano, con ricette guidate passo passo." },
      { name: "Mini tritatutto", text: "Compatti e semplici, per piccoli quantitativi di verdure ed erbe." },
    ],
    considerations: [
      { name: "Capacità", text: "Una ciotola da 2-3 litri è adatta a una famiglia di quattro persone." },
      { name: "Ricette guidate", text: "Le app con ricette passo passo sono preziose per chi è alle prime armi." },
      { name: "Accessori inclusi", text: "Verificate cosa è compreso: cestello vapore, fruste, dischi." },
      { name: "Spazio", text: "Sono apparecchi ingombranti: pensate a dove tenerlo sul piano di lavoro." },
    ],
    buyingGuide: [
      { profile: "Preparare più in fretta", text: "Un robot multifunzione con dischi per affettare e grattugiare." },
      { profile: "Cucinare senza stare ai fornelli", text: "Un robot con cottura e ricette guidate." },
      { profile: "Spazio ridotto", text: "Un tritatutto compatto o un frullatore a immersione con accessori." },
    ],
    faq: [
      { q: "Sostituisce i fornelli?", a: "Per molte preparazioni sì, ma non per fritture, grigliate o cotture in forno." },
      { q: "È facile da pulire?", a: "Ciotola e accessori sono spesso lavabili in lavastoviglie." },
      { q: "Serve una connessione internet?", a: "Solo per le ricette online; le funzioni base funzionano senza." },
    ],
  },
  {
    slug: "impastatrici-planetarie",
    reviewedAt,
    intro: [
      "La planetaria impasta, monta e mescola con un movimento che copre tutta la ciotola. Per pane, pizza, dolci e lievitati fa un lavoro che a mano richiederebbe molto tempo e fatica.",
      "La qualità della struttura conta quanto la potenza: un corpo in metallo resta stabile anche con impasti duri.",
    ],
    types: [
      { name: "Compatte", text: "Ciotole da 4-5 litri, sufficienti per dolci e impasti di una famiglia." },
      { name: "Professionali per casa", text: "Struttura in metallo, motori robusti e ciotole grandi per impasti frequenti." },
      { name: "Con accessori", text: "Possono diventare tritacarne, sfogliatrice o macchina per pasta con accessori dedicati." },
    ],
    considerations: [
      { name: "Motore e struttura", text: "Più della potenza dichiarata conta la robustezza: le planetarie leggere ballano con impasti duri." },
      { name: "Ciotola", text: "In acciaio, con capacità adeguata alle dosi che preparate." },
      { name: "Velocità", text: "Molte velocità e un avvio progressivo evitano schizzi di farina." },
      { name: "Accessori", text: "Gancio, frusta e foglia sono la base; verificate la disponibilità di accessori aggiuntivi." },
    ],
    buyingGuide: [
      { profile: "Dolci", text: "Una planetaria compatta con buona frusta e ciotola da 4-5 litri." },
      { profile: "Pane e pizza", text: "Un modello robusto con gancio efficace e motore che non si surriscalda." },
      { profile: "Cucina creativa", text: "Una planetaria con ampio catalogo di accessori." },
    ],
    faq: [
      { q: "Quanto impasto può lavorare?", a: "Dipende dalla ciotola e dal motore: rispettate le dosi massime indicate per gli impasti duri." },
      { q: "È rumorosa?", a: "Ad alta velocità sì, ma i modelli con motori robusti lavorano più a lungo senza sforzo." },
      { q: "Gli accessori sono intercambiabili tra marche?", a: "In genere no: verificate quelli compatibili con il modello." },
    ],
  },
  {
    slug: "bollitori-elettrici",
    reviewedAt,
    intro: [
      "Il bollitore scalda l'acqua più rapidamente del fornello e consuma meno, perché riscalda solo la quantità necessaria. È indispensabile per tè, tisane, caffè filtro e anche per accelerare la cottura della pasta.",
      "Le differenze riguardano materiali, capacità e presenza del controllo della temperatura.",
    ],
    types: [
      { name: "Classici", text: "Portano l'acqua a ebollizione e si spengono automaticamente." },
      { name: "A temperatura regolabile", text: "Permettono di scegliere la temperatura giusta per tè verdi, tisane e caffè." },
      { name: "Da viaggio", text: "Piccoli e leggeri, con capacità ridotta." },
    ],
    considerations: [
      { name: "Materiale", text: "Acciaio inox e vetro evitano il contatto dell'acqua con la plastica." },
      { name: "Capacità", text: "1-1,7 litri per una famiglia; modelli piccoli per una o due persone." },
      { name: "Sicurezza", text: "Spegnimento automatico, protezione dal funzionamento a secco e base girevole a 360°." },
      { name: "Filtro anticalcare", text: "Un filtro removibile trattiene il calcare e si pulisce facilmente." },
    ],
    buyingGuide: [
      { profile: "Tè e tisane", text: "Un modello a temperatura regolabile con mantenimento al caldo." },
      { profile: "Uso quotidiano", text: "Un bollitore in acciaio da 1,7 litri con filtro anticalcare." },
      { profile: "Design", text: "Modelli in stile rétro o in vetro, con prestazioni comunque solide." },
    ],
    faq: [
      { q: "Consuma molto?", a: "La potenza è alta ma per pochi minuti: riscaldare solo l'acqua necessaria limita i consumi." },
      { q: "Come si toglie il calcare?", a: "Con aceto o acido citrico diluiti, lasciando agire e risciacquando bene." },
      { q: "Si può usare per scaldare latte?", a: "No, è pensato solo per l'acqua." },
    ],
  },
  {
    slug: "tostapane",
    reviewedAt,
    intro: [
      "Un buon tostapane dora il pane in modo uniforme, senza bruciare i bordi e lasciare il centro morbido. Sembra un apparecchio semplice, ma le differenze tra modelli si vedono a ogni colazione.",
      "Pensate al tipo di pane che usate: fette spesse, bagel e pane in cassetta richiedono scomparti diversi.",
    ],
    types: [
      { name: "Due fette", text: "Compatti, ideali per una o due persone." },
      { name: "Quattro fette", text: "Per famiglie, con due coppie di scomparti a controllo indipendente." },
      { name: "A fessura lunga", text: "Accolgono fette grandi di pane casereccio." },
    ],
    considerations: [
      { name: "Scomparti", text: "Fessure larghe accolgono fette spesse e bagel." },
      { name: "Livelli di doratura", text: "Più livelli e funzioni scongelamento e riscaldamento rendono il tostapane più versatile." },
      { name: "Pinze e accessori", text: "Pinze per toast e griglia per riscaldare cornetti aumentano le possibilità d'uso." },
      { name: "Pulizia", text: "Un cassetto raccogli-briciole estraibile facilita la manutenzione." },
    ],
    buyingGuide: [
      { profile: "Single o coppia", text: "Un tostapane a due fette con scomparti larghi." },
      { profile: "Famiglia", text: "Un modello a quattro fette con controlli separati." },
      { profile: "Pane casereccio", text: "Un tostapane a fessura lunga." },
    ],
    faq: [
      { q: "Si possono fare toast farciti?", a: "Solo con le apposite pinze; inserire pane farcito direttamente è pericoloso." },
      { q: "Perché la doratura non è uniforme?", a: "Dipende dalla distribuzione delle resistenze: i modelli migliori scaldano in modo più omogeneo." },
      { q: "Quanto consuma?", a: "Pochi minuti di utilizzo: il consumo complessivo è basso." },
    ],
  },
  {
    slug: "set-pentole",
    reviewedAt,
    intro: [
      "Un buon set di pentole si usa ogni giorno per anni. Materiale, spessore del fondo e compatibilità con il piano di cottura determinano risultati e durata.",
      "Un set conviene quando si arreda una cucina nuova; altrimenti può essere meglio acquistare singoli pezzi di qualità.",
    ],
    types: [
      { name: "Antiaderenti", text: "Facili da usare e da pulire, ideali per uova e cotture con poco grasso." },
      { name: "Acciaio inox", text: "Durevoli e versatili, ottimi per rosolare e per sughi; richiedono un po' di pratica." },
      { name: "Con manici rimovibili", text: "Si impilano e vanno dal fornello al forno e al frigorifero, risparmiando spazio." },
    ],
    considerations: [
      { name: "Induzione", text: "Verificate che il fondo sia compatibile con l'induzione, se ce l'avete o pensate di passarci." },
      { name: "Spessore del fondo", text: "Un fondo spesso distribuisce il calore in modo uniforme ed evita bruciature." },
      { name: "Rivestimento", text: "Preferite rivestimenti antiaderenti senza PFOA e resistenti ai graffi." },
      { name: "Pezzi utili", text: "Contate i pezzi che userete davvero: meglio pochi pezzi buoni che molti inutili." },
    ],
    buyingGuide: [
      { profile: "Prima casa", text: "Un set antiaderente compatibile induzione con padella, casseruola e pentola per la pasta." },
      { profile: "Cucina intensa", text: "Un set in acciaio inox a triplo strato, da affiancare a una padella antiaderente." },
      { profile: "Poco spazio", text: "Un set con manici rimovibili e pezzi impilabili." },
    ],
    faq: [
      { q: "Si possono lavare in lavastoviglie?", a: "Molti set sì, ma il lavaggio a mano allunga la vita dell'antiaderente." },
      { q: "Quanto dura l'antiaderente?", a: "Da qualche anno a molti anni, in base a qualità e cura: evitate utensili metallici e alte temperature a vuoto." },
      { q: "Vanno in forno?", a: "Dipende da manici e coperchi: verificate la temperatura massima indicata." },
    ],
  },
  {
    slug: "coltelli-da-cucina",
    reviewedAt,
    intro: [
      "Un coltello affilato è più sicuro di uno smussato: richiede meno forza e scivola meno. Pochi coltelli di qualità valgono più di un grande set di pezzi mediocri.",
      "Lo strumento più usato è il coltello da chef, affiancato da uno spelucchino e da un coltello da pane.",
    ],
    types: [
      { name: "Set con ceppo", text: "Più coltelli e un supporto ordinato: comodi per una cucina completa." },
      { name: "Coltelli singoli", text: "Permettono di scegliere solo i pezzi che servono, di qualità superiore." },
      { name: "Giapponesi", text: "Lame sottili e molto affilate, ideali per tagli precisi." },
    ],
    considerations: [
      { name: "Acciaio", text: "Acciai più duri mantengono il filo più a lungo; quelli più morbidi si affilano più facilmente." },
      { name: "Impugnatura", text: "Deve essere comoda e sicura anche con le mani bagnate." },
      { name: "Bilanciamento", text: "Un coltello ben bilanciato stanca meno e dà più controllo." },
      { name: "Manutenzione", text: "Acciaino e affilatore mantengono il filo; il lavaggio a mano preserva la lama." },
    ],
    buyingGuide: [
      { profile: "Cucina di tutti i giorni", text: "Un set con coltello da chef, da pane e spelucchino." },
      { profile: "Appassionati", text: "Un coltello da chef di qualità, scelto singolarmente." },
      { profile: "Regalo", text: "Un set con ceppo o rotolo porta coltelli." },
    ],
    faq: [
      { q: "Si possono lavare in lavastoviglie?", a: "È sconsigliato: urti e detersivi rovinano filo e manici." },
      { q: "Ogni quanto affilarli?", a: "L'acciaino ogni pochi utilizzi; l'affilatura vera e propria qualche volta l'anno." },
      { q: "Che tagliere usare?", a: "Legno o plastica; vetro e marmo rovinano rapidamente il filo." },
    ],
  },
];
