import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

export const guides: CategoryGuide[] = [
  {
    slug: "macchine-caffe-capsule",
    reviewedAt,
    intro: [
      "Le macchine a capsule fanno un espresso in meno di un minuto, senza macinare né pulire il filtro. Sono la scelta più diffusa nelle case italiane per praticità e costanza del risultato.",
      "La decisione più importante non è la macchina ma il sistema di capsule: determina quali caffè potete comprare e quanto vi costa ogni tazzina negli anni.",
    ],
    types: [
      { name: "Nespresso Original e compatibili", text: "Moltissime capsule compatibili di marche diverse, con prezzi a tazzina anche bassi." },
      { name: "Nespresso Vertuo", text: "Capsule proprietarie e più formati di tazza, dall'espresso al caffè lungo." },
      { name: "Dolce Gusto e altri sistemi", text: "Molte bevande, anche al latte e fredde, ma meno varietà di capsule compatibili." },
    ],
    considerations: [
      { name: "Costo a tazzina", text: "Moltiplicate il prezzo delle capsule per le tazzine al giorno: è la vera spesa nel tempo." },
      { name: "Latte", text: "Un montalatte integrato o separato è utile se bevete cappuccini." },
      { name: "Serbatoio", text: "Un serbatoio grande e facile da riempire è comodo in famiglia." },
      { name: "Riciclo", text: "Capsule in alluminio o compostabili si smaltiscono meglio di quelle in plastica." },
    ],
    buyingGuide: [
      { profile: "Solo espresso, risparmiando", text: "Una macchina compatibile Nespresso Original, con capsule compatibili." },
      { profile: "Cappuccino ogni mattina", text: "Una macchina con montalatte integrato o un sistema con capsule al latte." },
      { profile: "Poco spazio", text: "Un modello compatto con vaschetta capsule usate capiente." },
    ],
    faq: [
      { q: "Le capsule compatibili rovinano la macchina?", a: "Le compatibili di buona qualità funzionano bene; in caso di problemi controllate le condizioni di garanzia." },
      { q: "Ogni quanto decalcificare?", a: "Ogni 2-3 mesi o quando la macchina lo segnala, più spesso con acqua dura." },
      { q: "Conviene rispetto alla moka?", a: "È più pratica, ma il costo a tazzina è più alto della moka o del caffè in grani." },
    ],
  },
  {
    slug: "macinacaffe",
    reviewedAt,
    intro: [
      "Il caffè macinato al momento conserva molti più aromi. Un macinacaffè elettrico permette di usare chicchi freschi con macchina espresso, moka, filtro o French press.",
      "La differenza principale è tra macine e lame: le macine danno una polvere uniforme, indispensabile per l'espresso.",
    ],
    types: [
      { name: "A lame", text: "Economici e veloci, ma la macinatura è irregolare: vanno bene per filtro e moka." },
      { name: "A macine coniche", text: "Uniformi e silenziosi, adatti a quasi tutti i metodi." },
      { name: "A macine piatte", text: "Precisione elevata, apprezzati da chi cerca il massimo dall'espresso." },
    ],
    considerations: [
      { name: "Regolazioni", text: "Molte regolazioni fini servono per l'espresso; per moka e filtro ne bastano meno." },
      { name: "Uniformità", text: "Una polvere regolare estrae il caffè in modo omogeneo, senza amaro." },
      { name: "Ritenzione", text: "Meno caffè resta nel macinino, più è fresca ogni dose." },
      { name: "Rumore e pulizia", text: "Contenitori rimovibili e spazzolino incluso semplificano la pulizia." },
    ],
    buyingGuide: [
      { profile: "Macchina espresso a leva o portafiltro", text: "Un macinacaffè a macine con regolazione fine." },
      { profile: "Moka e filtro", text: "Un modello a macine coniche entry-level." },
      { profile: "Spezie e caffè occasionale", text: "Un macinino a lame economico." },
    ],
    faq: [
      { q: "Quanto caffè macinare?", a: "Solo quello che serve per la preparazione: il macinato perde aroma in poche ore." },
      { q: "Va bene per le spezie?", a: "I modelli a lame sì; usate però un macinino diverso per non mescolare gli aromi." },
      { q: "Ogni quanto pulirlo?", a: "Una pulizia leggera ogni settimana e una più completa ogni mese." },
    ],
  },
  {
    slug: "macchine-sottovuoto",
    reviewedAt,
    intro: [
      "Togliendo l'aria dai sacchetti, la macchina sottovuoto rallenta l'ossidazione e fa durare molto di più carne, formaggi e avanzi, in frigo e in freezer. È indispensabile anche per la cottura a bassa temperatura.",
      "Le differenze stanno nella forza di aspirazione, nella larghezza della saldatura e nelle funzioni per alimenti umidi o delicati.",
    ],
    types: [
      { name: "A barra esterna", text: "I più diffusi in casa: compatti e versatili, con sacchetti goffrati." },
      { name: "A campana", text: "Professionali, gestiscono anche liquidi e sacchetti lisci: più cari e ingombranti." },
      { name: "Portatili", text: "Piccole pompe per contenitori e sacchetti con valvola." },
    ],
    considerations: [
      { name: "Modalità umido", text: "Utile per carne marinata e alimenti con liquidi." },
      { name: "Modalità delicata", text: "Evita di schiacciare pane, frutti di bosco e dolci." },
      { name: "Taglierina e rotolo", text: "Un vano per il rotolo con taglierina fa risparmiare tempo." },
      { name: "Costo dei sacchetti", text: "Verificate se accetta rotoli generici, più economici." },
    ],
    buyingGuide: [
      { profile: "Spesa settimanale e freezer", text: "Una macchina a barra con vano rotolo e taglierina." },
      { profile: "Cottura sous vide", text: "Aspirazione forte e modalità umido." },
      { profile: "Uso occasionale", text: "Un modello compatto e semplice." },
    ],
    faq: [
      { q: "Quanto dura il cibo sottovuoto?", a: "Molto di più rispetto alla conservazione normale, ma vanno sempre rispettate le norme di igiene e catena del freddo." },
      { q: "Si possono riutilizzare i sacchetti?", a: "Si possono lavare e riusare tagliandoli, ma non dopo carne cruda o pesce." },
      { q: "Funziona con i liquidi?", a: "Le macchine a barra no: congelate prima le salse o usate una macchina a campana." },
    ],
  },
  {
    slug: "forni-microonde",
    reviewedAt,
    intro: [
      "Il microonde è insostituibile per scaldare e scongelare in pochi minuti. I modelli con grill o ventilazione possono anche gratinare e cuocere, sostituendo in parte il forno tradizionale.",
      "Contano la capacità interna, la potenza e la presenza di programmi automatici semplici da usare.",
    ],
    types: [
      { name: "Solo microonde", text: "Per scaldare e scongelare: semplici ed economici." },
      { name: "Con grill", text: "Gratinano e dorano, utili per lasagne e toast." },
      { name: "Combinati ventilati", text: "Cuociono come un piccolo forno, anche dolci e arrosti." },
    ],
    considerations: [
      { name: "Capacità", text: "20 litri per una o due persone, 25-30 litri per una famiglia." },
      { name: "Potenza", text: "800-1.000 W scaldano rapidamente e in modo uniforme." },
      { name: "Piatto o fondo piatto", text: "I modelli a fondo piatto sfruttano meglio lo spazio interno." },
      { name: "Ingombro", text: "Misurate lo spazio disponibile, lasciando aria per la ventilazione." },
    ],
    buyingGuide: [
      { profile: "Single o coppia", text: "Un microonde da 20 litri con grill." },
      { profile: "Famiglia", text: "Un modello da 25-30 litri con programmi automatici." },
      { profile: "Senza forno tradizionale", text: "Un combinato ventilato." },
    ],
    faq: [
      { q: "Quali contenitori si possono usare?", a: "Vetro, ceramica e plastica indicata per microonde; niente metalli nella modalità microonde." },
      { q: "Il grill funziona con le microonde?", a: "Sì, in modalità combinata, per cuocere e dorare insieme." },
      { q: "È meglio a libera installazione o da incasso?", a: "La libera installazione è più economica; l'incasso serve se avete un vano dedicato." },
    ],
  },
  {
    slug: "fornetti-elettrici",
    reviewedAt,
    intro: [
      "Un fornetto elettrico da appoggio scalda in pochi minuti e consuma meno del forno grande per piccole cotture: pizza, gratin, torte e verdure.",
      "Contano capacità, presenza della ventilazione, temperatura massima e tenuta del calore della porta.",
    ],
    types: [
      { name: "Compatti", text: "Da 10-20 litri, per toast, piccoli gratin e riscaldare." },
      { name: "Ventilati", text: "Da 25-45 litri, cuociono in modo uniforme anche torte e arrosti." },
      { name: "Con friggitrice ad aria", text: "Combinano forno e frittura ad aria in un unico apparecchio." },
    ],
    considerations: [
      { name: "Capacità", text: "Controllate che entri una pizza o la teglia che usate di solito." },
      { name: "Ventilazione", text: "La funzione ventilata distribuisce il calore e accorcia i tempi." },
      { name: "Temperatura", text: "Almeno 230 °C per pizze croccanti." },
      { name: "Isolamento", text: "Vetro doppio e pareti isolate disperdono meno calore." },
    ],
    buyingGuide: [
      { profile: "Cucina piccola", text: "Un fornetto ventilato da 25-30 litri." },
      { profile: "Pizze in casa", text: "Temperatura alta e piano interno ampio." },
      { profile: "Più funzioni in poco spazio", text: "Un forno con friggitrice ad aria integrata." },
    ],
    faq: [
      { q: "Consuma meno del forno grande?", a: "Per piccole cotture sì, perché scalda un volume molto più piccolo." },
      { q: "Si può incassare?", a: "No: va appoggiato con spazio libero intorno per la ventilazione." },
      { q: "Si scalda all'esterno?", a: "Sì: tenetelo lontano da pareti e mobili delicati." },
    ],
  },
  {
    slug: "estrattori-succo",
    reviewedAt,
    intro: [
      "Gli estrattori spremono frutta e verdura lentamente, ottenendo succhi densi e ricchi, con poca schiuma. Le centrifughe sono più veloci ma producono più schiuma e succhi meno corposi.",
      "Prima della resa, valutate quanto tempo richiede la pulizia: è il motivo principale per cui molti smettono di usarli.",
    ],
    types: [
      { name: "Estrattori verticali", text: "Compatti e versatili, ottimi con frutta morbida e verdure." },
      { name: "Estrattori orizzontali", text: "Eccellenti con verdure a foglia e germogli." },
      { name: "Centrifughe", text: "Veloci ed economiche, adatte a frutta dura come mele e carote." },
    ],
    considerations: [
      { name: "Bocca di inserimento", text: "Una bocca larga riduce il tempo di taglio della frutta." },
      { name: "Pulizia", text: "Pochi pezzi, lavabili in lavastoviglie e con spazzola dedicata." },
      { name: "Rumore", text: "Gli estrattori sono molto più silenziosi delle centrifughe." },
      { name: "Resa", text: "Polpa asciutta significa più succo dalla stessa frutta." },
    ],
    buyingGuide: [
      { profile: "Succhi verdi", text: "Un estrattore orizzontale o verticale lento." },
      { profile: "Succo ogni mattina, di fretta", text: "Un estrattore con bocca larga e pulizia rapida." },
      { profile: "Uso occasionale", text: "Una centrifuga economica." },
    ],
    faq: [
      { q: "Quanto dura il succo?", a: "Meglio berlo subito; in frigo, in un contenitore chiuso, entro poche ore." },
      { q: "Si possono fare sorbetti?", a: "Alcuni estrattori hanno un filtro apposito per frutta congelata." },
      { q: "Serve sbucciare la frutta?", a: "Le bucce dure e i noccioli vanno tolti; molte bucce sottili si possono lasciare." },
    ],
  },
  {
    slug: "macchine-pasta-fresca",
    reviewedAt,
    intro: [
      "La pasta fresca fatta in casa è una tradizione italiana che una macchina rende più semplice: le sfogliatrici stendono l'impasto, le macchine elettriche impastano e trafilano da sole.",
      "La scelta dipende da quanto spesso la farete e da quali formati vi interessano.",
    ],
    types: [
      { name: "Sfogliatrici manuali", text: "Classiche a manovella, per sfoglia, tagliatelle e lasagne." },
      { name: "Sfogliatrici elettriche", text: "Stesso principio, ma con motore: più veloci e meno faticose." },
      { name: "Macchine automatiche", text: "Impastano e trafilano da sole spaghetti, penne e altri formati." },
    ],
    considerations: [
      { name: "Formati", text: "Le trafile incluse decidono quali tipi di pasta potete fare." },
      { name: "Capacità", text: "Quanta pasta produce in un ciclo, per una o più persone." },
      { name: "Pulizia", text: "Parti smontabili e utensili per pulire le trafile." },
      { name: "Materiali", text: "Rulli in acciaio cromato durano a lungo e non trattengono l'impasto." },
    ],
    buyingGuide: [
      { profile: "Tagliatelle e lasagne la domenica", text: "Una sfogliatrice manuale robusta." },
      { profile: "Pasta fresca spesso", text: "Una macchina automatica con più trafile." },
      { profile: "Ravioli e pasta ripiena", text: "Una sfogliatrice con accessori per ravioli." },
    ],
    faq: [
      { q: "Che farina usare?", a: "Per la pasta all'uovo farina 00 o un mix con semola; per la pasta trafilata spesso semola rimacinata." },
      { q: "Si lava in acqua?", a: "Le sfogliatrici di solito no: si puliscono a secco con un pennello." },
      { q: "Quanto si conserva la pasta fresca?", a: "Un paio di giorni in frigo, oppure si congela." },
    ],
  },
  {
    slug: "affettatrici",
    reviewedAt,
    intro: [
      "Un'affettatrice domestica taglia salumi, formaggi, pane e verdure allo spessore preciso, risparmiando rispetto ai prodotti già affettati.",
      "Contano diametro e qualità della lama, stabilità e facilità di smontaggio per la pulizia.",
    ],
    types: [
      { name: "Compatte", text: "Leggere e pieghevoli, per uso occasionale." },
      { name: "Semiprofessionali", text: "Lame più grandi e corpo in metallo, per affettare spesso e con precisione." },
      { name: "A volano manuali", text: "Tradizionali, belle e precise, per appassionati." },
    ],
    considerations: [
      { name: "Lama", text: "Diametro da 17-22 cm in acciaio inox per salumi e formaggi." },
      { name: "Spessore", text: "Regolazione fine, da fette sottilissime a fette di pane." },
      { name: "Sicurezza", text: "Paramano, protezione della lama e piedini antiscivolo." },
      { name: "Pulizia", text: "Lama e carrello rimovibili facilitano l'igiene." },
    ],
    buyingGuide: [
      { profile: "Uso occasionale", text: "Un modello compatto e pieghevole." },
      { profile: "Salumi ogni settimana", text: "Una semiprofessionale con lama da 22 cm." },
      { profile: "Pane casereccio", text: "Una lama dentata o un modello con lama per pane." },
    ],
    faq: [
      { q: "Si può affilare la lama?", a: "Alcuni modelli hanno l'affilatoio incluso; altrimenti rivolgetevi a un arrotino." },
      { q: "Come pulirla in sicurezza?", a: "Staccate la spina, smontate le parti previste e usate guanti antitaglio." },
      { q: "Funziona con il formaggio stagionato?", a: "Sì, ma i formaggi molto duri richiedono una lama robusta." },
    ],
  },
  {
    slug: "piastre-grill",
    reviewedAt,
    intro: [
      "Piastre e grill elettrici cuociono carne, verdure e panini senza accendere il fornello o il forno. Sono pratici in cucine piccole e per pasti veloci.",
      "La differenza più importante è tra piastre aperte, grill a contatto che cuociono su due lati e tostiere per panini.",
    ],
    types: [
      { name: "Grill a contatto", text: "Cuociono sopra e sotto, dimezzando i tempi." },
      { name: "Piastre aperte", text: "Superficie ampia per più porzioni, anche in tavola." },
      { name: "Tostiere", text: "Per toast e panini, compatte ed economiche." },
    ],
    considerations: [
      { name: "Piastre removibili", text: "Si lavano in lavastoviglie: è il punto che più semplifica la vita." },
      { name: "Termostato", text: "Temperatura regolabile per carne, pesce e verdure." },
      { name: "Raccolta grassi", text: "Una vaschetta raccoglie i grassi in eccesso." },
      { name: "Superficie", text: "Rivestimento antiaderente resistente e senza PFOA." },
    ],
    buyingGuide: [
      { profile: "Carne e verdure in fretta", text: "Un grill a contatto con piastre removibili." },
      { profile: "Cena in compagnia", text: "Una piastra aperta grande, da usare in tavola." },
      { profile: "Toast e panini", text: "Una tostiera con piastre intercambiabili." },
    ],
    faq: [
      { q: "Fa fumo?", a: "Meno del barbecue, ma con carni grasse un po' di fumo è normale." },
      { q: "Si può usare per il pesce?", a: "Sì, a temperatura media e con piastre ben antiaderenti." },
      { q: "Come pulirla?", a: "Con le piastre ancora tiepide, usando una spugna non abrasiva o la lavastoviglie se sono removibili." },
    ],
  },
  {
    slug: "macchine-pane",
    reviewedAt,
    intro: [
      "La macchina per il pane impasta, fa lievitare e cuoce in automatico: si mettono gli ingredienti la sera e al mattino il pane è pronto. Molte fanno anche impasti per pizza, dolci e marmellate.",
      "Contano capacità, numero di programmi utili e la partenza ritardata.",
    ],
    types: [
      { name: "A una lama", text: "Le più diffuse, per pagnotte da 500 g a 1 kg." },
      { name: "A due lame", text: "Impastano meglio anche impasti pesanti e integrali." },
      { name: "Con dispenser", text: "Aggiungono da sole semi e frutta secca al momento giusto." },
    ],
    considerations: [
      { name: "Capacità", text: "Da 500 g per una o due persone a 1 kg e oltre per famiglie." },
      { name: "Programmi", text: "Senza glutine, integrale e impasto per pizza sono i più utili." },
      { name: "Partenza ritardata", text: "Permette di avere pane caldo all'orario desiderato." },
      { name: "Doratura", text: "Più livelli di crosta per scegliere quanto deve essere croccante." },
    ],
    buyingGuide: [
      { profile: "Pane quotidiano in famiglia", text: "Una macchina da 1 kg con partenza ritardata." },
      { profile: "Celiachia o intolleranze", text: "Un programma specifico senza glutine." },
      { profile: "Impasti per pizza", text: "Un modello con programma impasto e lievitazione." },
    ],
    faq: [
      { q: "Il pane ha il buco della lama?", a: "Sì, un piccolo foro sul fondo è normale." },
      { q: "Si può usare il lievito madre?", a: "Con alcuni programmi sì, ma i risultati sono più variabili." },
      { q: "Consuma molto?", a: "Un ciclo completo consuma circa quanto pochi minuti di forno grande." },
    ],
  },
];
