import type { CategoryGuide } from "@/lib/types";

const reviewedAt = "2026-11-24";

export const guides: CategoryGuide[] = [
  {
    slug: "misuratori-pressione",
    reviewedAt,
    intro: [
      "Misurare la pressione a casa aiuta a tenerla sotto controllo nel tempo e a dare al medico dati più completi di una singola misura in ambulatorio. Un misuratore automatico da braccio è il modo più semplice per farlo bene.",
      "La cosa più importante è l'affidabilità: scegliete un apparecchio validato clinicamente e con un bracciale della misura giusta per il vostro braccio.",
    ],
    types: [
      { name: "Da braccio", text: "I più precisi e consigliati per l'uso domestico regolare." },
      { name: "Da polso", text: "Compatti e comodi in viaggio, ma più sensibili alla posizione del braccio durante la misura." },
      { name: "Connessi", text: "Salvano le misure sul telefono e permettono di condividerle con il medico." },
    ],
    considerations: [
      { name: "Validazione clinica", text: "Cercate modelli validati secondo protocolli riconosciuti: è la garanzia principale di precisione." },
      { name: "Bracciale", text: "Misurate la circonferenza del braccio: un bracciale troppo piccolo o grande falsa la misura." },
      { name: "Memorie e utenti", text: "Utili se in casa la pressione la misurano in due." },
      { name: "Rilevazione di aritmie", text: "Alcuni segnalano un battito irregolare: un avviso da approfondire con il medico." },
    ],
    buyingGuide: [
      { profile: "Controllo regolare", text: "Un misuratore da braccio validato, con bracciale della misura giusta e memoria." },
      { profile: "Viaggi frequenti", text: "Un modello da polso compatto, usato con il braccio all'altezza del cuore." },
      { profile: "Dati da condividere", text: "Un modello connesso con app per esportare lo storico." },
    ],
    faq: [
      { q: "Quando misurare la pressione?", a: "Seguite le indicazioni del medico; in genere al mattino e alla sera, seduti e a riposo da qualche minuto." },
      { q: "Perché le misure cambiano?", a: "La pressione varia durante la giornata: contano le medie su più giorni, non una singola misura." },
      { q: "Sostituisce il controllo medico?", a: "No: è uno strumento di supporto. Per diagnosi e terapie rivolgetevi al vostro medico." },
    ],
  },
  {
    slug: "aerosol",
    reviewedAt,
    intro: [
      "L'aerosol trasforma i farmaci liquidi in particelle finissime da respirare. In Italia è molto usato in famiglia, soprattutto con i bambini nei mesi freddi, sempre su indicazione del medico o del pediatra.",
      "Tra i modelli cambiano la tecnologia di nebulizzazione, la velocità della terapia e il rumore, importante per i più piccoli.",
    ],
    types: [
      { name: "A pistone", text: "I più diffusi: robusti ed efficaci con quasi tutti i farmaci, ma più rumorosi." },
      { name: "A ultrasuoni", text: "Silenziosi, ma non adatti a tutti i farmaci." },
      { name: "A membrana (mesh)", text: "Compatti, silenziosi e portatili, a batteria: comodi in viaggio e per i bambini." },
    ],
    considerations: [
      { name: "Compatibilità con i farmaci", text: "Verificate con il medico che la tecnologia sia adatta ai farmaci prescritti." },
      { name: "Tempo di erogazione", text: "Una nebulizzazione rapida rende la terapia più facile da completare, soprattutto con i bambini." },
      { name: "Rumore", text: "I modelli silenziosi permettono di fare l'aerosol anche mentre il bambino dorme." },
      { name: "Accessori", text: "Mascherine per adulti e bambini, boccaglio e forcella nasale inclusi." },
    ],
    buyingGuide: [
      { profile: "Famiglia con bambini", text: "Un modello a pistone con mascherina pediatrica, o un mesh silenzioso." },
      { profile: "Uso in viaggio", text: "Un nebulizzatore a membrana a batteria, piccolo e leggero." },
      { profile: "Uso frequente", text: "Un modello a pistone professionale, pensato per sedute ripetute." },
    ],
    faq: [
      { q: "Si può fare l'aerosol con acqua e sale?", a: "Solo se lo indica il medico: anche la soluzione fisiologica va usata secondo le sue indicazioni." },
      { q: "Come si pulisce?", a: "Ampolla e mascherine vanno lavate e asciugate dopo ogni uso, secondo il manuale." },
      { q: "Ogni quanto cambiare l'ampolla?", a: "Periodicamente, come indicato dal produttore, perché l'efficacia cala con l'usura." },
    ],
  },
  {
    slug: "elettrostimolatori",
    reviewedAt,
    intro: [
      "Gli elettrostimolatori inviano impulsi elettrici attraverso elettrodi applicati sulla pelle. La stimolazione TENS è usata per alleviare alcuni tipi di dolore, mentre la EMS lavora sui muscoli per il recupero e il tono.",
      "Prima di usarli, soprattutto in caso di problemi di salute, è bene chiedere al medico o al fisioterapista.",
    ],
    types: [
      { name: "TENS", text: "Programmi pensati per il dolore muscolare e articolare." },
      { name: "EMS", text: "Programmi per tonificazione, recupero e allenamento muscolare." },
      { name: "Combinati", text: "TENS, EMS e massaggio nello stesso dispositivo, con molti programmi." },
    ],
    considerations: [
      { name: "Programmi", text: "Programmi preimpostati chiari sono più utili di un numero enorme di opzioni." },
      { name: "Canali", text: "Due canali indipendenti permettono di trattare due zone contemporaneamente." },
      { name: "Elettrodi", text: "Controllate prezzo e disponibilità degli elettrodi di ricambio, che si consumano." },
      { name: "Certificazione", text: "Preferite dispositivi con marcatura di dispositivo medico." },
    ],
    buyingGuide: [
      { profile: "Dolore alla schiena o alla cervicale", text: "Un TENS a due canali con programmi specifici, su indicazione medica." },
      { profile: "Sportivi", text: "Un modello EMS con programmi di recupero e riscaldamento." },
      { profile: "Uso in famiglia", text: "Un combinato TENS/EMS con istruzioni chiare in italiano." },
    ],
    faq: [
      { q: "Chi non dovrebbe usarlo?", a: "Chi ha pacemaker o altri dispositivi impiantati, le donne in gravidanza e chi ha patologie cardiache, salvo diversa indicazione medica." },
      { q: "Quanto dura una seduta?", a: "In genere 20-30 minuti, secondo il programma e le indicazioni." },
      { q: "Sostituisce la fisioterapia?", a: "No: può affiancarla, ma non sostituisce una valutazione professionale." },
    ],
  },
  {
    slug: "termofori",
    reviewedAt,
    intro: [
      "Il calore aiuta a rilassare i muscoli contratti di collo, spalle e schiena e dà sollievo nei giorni freddi. Un termoforo elettrico scalda in pochi minuti e mantiene la temperatura costante.",
      "Per la sicurezza sono importanti lo spegnimento automatico e la regolazione su più livelli.",
    ],
    types: [
      { name: "Rettangolari", text: "Versatili, per schiena, pancia e gambe." },
      { name: "Per collo e spalle", text: "Sagomati per avvolgere la cervicale, spesso con chiusura frontale." },
      { name: "Ad avvolgimento", text: "Fasce con cinturino per lombari e articolazioni, da indossare." },
    ],
    considerations: [
      { name: "Spegnimento automatico", text: "Indispensabile per non addormentarsi con il termoforo acceso." },
      { name: "Livelli di calore", text: "Più livelli permettono di trovare un calore piacevole senza scottarsi." },
      { name: "Tessuto", text: "Un rivestimento morbido e sfoderabile si lava facilmente in lavatrice." },
      { name: "Dimensioni", text: "Scegliete in base alla zona da trattare." },
    ],
    buyingGuide: [
      { profile: "Cervicale", text: "Un termoforo sagomato per collo e spalle." },
      { profile: "Mal di schiena", text: "Un modello grande o a fascia lombare." },
      { profile: "Uso sul divano", text: "Un termoforo rettangolare con cavo lungo e spegnimento automatico." },
    ],
    faq: [
      { q: "Si può usare tutta la notte?", a: "No: meglio sedute di 20-30 minuti, con spegnimento automatico attivo." },
      { q: "Va bene per tutti i dolori?", a: "Non sempre: su traumi recenti o infiammazioni acute il calore può essere sconsigliato. Nel dubbio chiedete al medico." },
      { q: "Si può lavare?", a: "La fodera di solito sì; la parte elettrica va staccata seguendo le istruzioni." },
    ],
  },
];
