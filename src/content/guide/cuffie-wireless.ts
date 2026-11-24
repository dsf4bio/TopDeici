import type { CategoryGuide } from "@/lib/types";

export const guide: CategoryGuide = {
  slug: "cuffie-wireless",
  reviewedAt: "2026-11-24",
  intro: [
    "Le cuffie wireless over-ear sono diventate lo strumento di lavoro di chi viaggia, studia in biblioteca o lavora in un open space. Rispetto agli auricolari offrono più autonomia, un suono più ampio e, soprattutto, una cancellazione del rumore più efficace, perché i padiglioni isolano già fisicamente l'orecchio.",
    "La cancellazione attiva del rumore (ANC) usa microfoni che captano il suono esterno e lo neutralizzano con un'onda opposta. Funziona molto bene sui rumori costanti e gravi, come il motore di un aereo o il ronzio dell'aria condizionata, meno su voci e rumori improvvisi. Le differenze tra i modelli migliori stanno proprio in come gestiscono questi suoni intermedi.",
    "Oltre al suono contano il comfort dopo qualche ora, la qualità del microfono nelle chiamate, la possibilità di collegarsi a due dispositivi insieme e l'app per regolare l'equalizzazione. Il prezzo più alto non garantisce che una cuffia sia la migliore per voi: forma della testa, uso tipico e telefono che possedete pesano parecchio.",
  ],
  types: [
    { name: "Over-ear con ANC", text: "I padiglioni avvolgono l'orecchio. Sono la scelta per viaggi e lavoro: migliore isolamento, autonomia lunga e comfort sulle lunghe distanze, al prezzo di un ingombro maggiore." },
    { name: "On-ear", text: "Appoggiano sull'orecchio, sono più leggere e compatte. Isolano meno e dopo qualche ora possono dare fastidio, ma sono comode per spostamenti brevi." },
    { name: "Senza ANC", text: "Più semplici ed economiche, spesso con autonomie molto lunghe. Adatte a chi ascolta in casa o in ambienti tranquilli e cerca soprattutto qualità del suono." },
    { name: "Open-back wireless", text: "Rare in versione Bluetooth, lasciano passare il suono in entrambe le direzioni. Offrono un'immagine sonora ariosa, ma non sono adatte a luoghi pubblici." },
  ],
  considerations: [
    { name: "Cancellazione del rumore", text: "Valutate sia l'efficacia sia la presenza di una buona modalità trasparenza, utile per sentire annunci e conversazioni senza togliere le cuffie." },
    { name: "Comfort", text: "Peso, pressione del cerchietto e materiale dei cuscinetti determinano se le indosserete per un'ora o per un intero volo. Chi porta gli occhiali dovrebbe preferire cuscinetti morbidi e profondi." },
    { name: "Codec e compatibilità", text: "AAC funziona bene con iPhone; LDAC e aptX Adaptive danno vantaggi soprattutto con telefoni Android compatibili. Se il vostro telefono non supporta un codec, quel vantaggio non c'è." },
    { name: "Chiamate e multipoint", text: "Il multipoint permette di restare collegati a computer e telefono insieme. Per chi fa molte riunioni, la qualità dei microfoni in ambienti rumorosi conta quanto la resa musicale." },
    { name: "Autonomia e ricarica", text: "Oltre alle ore dichiarate con ANC attivo, controllate la ricarica rapida e la possibilità di usare le cuffie via cavo quando la batteria è scarica." },
  ],
  buyingGuide: [
    { profile: "Viaggi frequenti", text: "Priorità a cancellazione del rumore, comfort per molte ore e custodia rigida. Una buona autonomia con ANC attivo evita di doverle ricaricare a ogni viaggio." },
    { profile: "Lavoro e chiamate", text: "Cercate multipoint affidabile, microfoni con riduzione del rumore e controlli fisici comodi per il muto. Verificate la compatibilità con le piattaforme di videochiamata che usate." },
    { profile: "Ascolto musicale in casa", text: "La cancellazione del rumore conta meno: si può privilegiare qualità del suono, equalizzazione nell'app e, se il telefono lo supporta, un codec ad alta risoluzione." },
    { profile: "Budget contenuto", text: "Diversi modelli di fascia media offrono un'ANC sufficiente e grande autonomia. Rinunciare a materiali premium e funzioni accessorie costa poco in termini di esperienza reale." },
  ],
  faq: [
    { q: "L'ANC fa male alle orecchie?", a: "No. Alcune persone avvertono una leggera sensazione di pressione all'inizio; molte cuffie permettono di ridurre l'intensità della cancellazione." },
    { q: "Si possono usare in aereo con il sistema di intrattenimento?", a: "Sì, se hanno un ingresso jack o tramite un trasmettitore Bluetooth. Alcuni modelli recenti hanno rinunciato al jack: conviene controllare." },
    { q: "Meglio cuffie o auricolari per l'ANC?", a: "A parità di fascia di prezzo, le cuffie over-ear isolano di più e durano più a lungo. Gli auricolari vincono in portabilità e durante l'attività fisica." },
    { q: "Quanto durano le batterie?", a: "Dopo qualche anno l'autonomia cala. Alcuni produttori offrono la sostituzione della batteria o vendono cuscinetti di ricambio: è un buon segnale di durata nel tempo." },
  ],
};
