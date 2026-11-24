import type { CategoryGuide } from "@/lib/types";

export const guide: CategoryGuide = {
  slug: "robot-aspirapolvere",
  reviewedAt: "2026-11-24",
  intro: [
    "Un robot aspirapolvere non sostituisce del tutto la pulizia a fondo, ma cambia la frequenza con cui la casa viene pulita. Passare ogni giorno, anche quando nessuno è in casa, tiene sotto controllo polvere, briciole e peli di animali in un modo che una pulizia settimanale non riesce a fare.",
    "Negli ultimi anni la categoria si è divisa in due mondi. Da una parte i robot semplici, che aspirano e si muovono con sensori di base; dall'altra le stazioni complete, con mappatura laser, lavaggio dei pavimenti, svuotamento automatico del contenitore e, nei modelli più evoluti, lavaggio e asciugatura dei panni nella base.",
    "La scelta dipende soprattutto dalla casa: metratura, numero di stanze, presenza di tappeti, gradini, cavi a terra e animali. Un robot eccellente in un open space può faticare in un appartamento pieno di sedie e soglie, e viceversa.",
  ],
  types: [
    { name: "Solo aspirazione", text: "Robot con contenitore della polvere da svuotare a mano. Sono i più semplici ed economici; vanno bene per mantenere puliti pavimenti duri in case piccole." },
    { name: "Aspirazione e lavaggio", text: "Aggiungono un serbatoio d'acqua e un panno, fisso o rotante. I panni rotanti e quelli che vibrano o si sollevano sui tappeti danno risultati nettamente migliori di un semplice panno trascinato." },
    { name: "Con base autosvuotante", text: "La base aspira il contenuto del robot in un sacchetto capiente, che si cambia ogni alcune settimane. È la funzione che più riduce il lavoro manuale, soprattutto con animali in casa." },
    { name: "Stazioni complete", text: "Oltre allo svuotamento, gestiscono acqua pulita e sporca e lavano i panni. Sono le più costose e ingombranti, ma richiedono interventi solo ogni qualche giorno." },
  ],
  considerations: [
    { name: "Navigazione", text: "La mappatura laser (LiDAR) è la più affidabile anche al buio e permette di dividere la casa in stanze e zone vietate. I sistemi con telecamera e i sensori frontali aiutano a evitare oggetti piccoli come cavi e calzini." },
    { name: "Tappeti e soglie", text: "Controllate l'altezza massima superabile (di solito 2 cm) e se il robot solleva il panno sui tappeti. Con tappeti a pelo lungo conviene un robot con spazzola in gomma e buona potenza di aspirazione." },
    { name: "Animali domestici", text: "Spazzole in gomma senza setole, o con sistemi anti-groviglio, evitano che i peli si arrotolino. La base autosvuotante diventa quasi indispensabile." },
    { name: "Manutenzione e ricambi", text: "Filtri, spazzole laterali, panni e sacchetti vanno sostituiti nel tempo. Verificate che i ricambi siano facili da trovare e che il costo annuale sia ragionevole." },
    { name: "App e privacy", text: "Un'app ben fatta permette di programmare le pulizie per stanza. Se il robot ha una telecamera, controllate le impostazioni di privacy e la politica del produttore sui dati raccolti." },
  ],
  buyingGuide: [
    { profile: "Appartamento piccolo, pavimenti duri", text: "Un robot con navigazione laser e lavaggio di base è sufficiente. La base autosvuotante è un plus, ma non indispensabile se si può svuotare il contenitore ogni pochi giorni." },
    { profile: "Casa con animali", text: "Date priorità a spazzola anti-groviglio, buona aspirazione e base autosvuotante. Il riconoscimento degli ostacoli aiuta a evitare incidenti con ciotole e giochi." },
    { profile: "Casa grande o su più piani", text: "Serve un robot che salvi più mappe e abbia un'autonomia adeguata, con ricarica e ripresa automatica. Una stazione completa riduce gli interventi quando le superfici sono ampie." },
    { profile: "Budget contenuto", text: "Meglio un robot semplice con mappatura laser che uno economico con molte funzioni ma navigazione casuale: la qualità della navigazione determina quasi tutto il risultato." },
  ],
  faq: [
    { q: "Il robot sostituisce l'aspirapolvere?", a: "Per la manutenzione quotidiana quasi sempre sì. Angoli, scale, divani e pulizie a fondo richiedono comunque un aspirapolvere tradizionale o senza filo." },
    { q: "Il lavaggio è paragonabile al mocio?", a: "Per lo sporco leggero di tutti i giorni sì; per macchie secche e sporco ostinato no. I modelli con panni rotanti e pressione sul pavimento si avvicinano di più." },
    { q: "Quanto rumore fa?", a: "Nella modalità standard quanto un aspirapolvere silenzioso; la base autosvuotante fa un rumore forte ma per pochi secondi. Conviene programmarlo quando si è fuori casa." },
    { q: "Serve preparare la casa?", a: "Basta sollevare cavi, calzini e oggetti piccoli dal pavimento. Le prime pulizie servono al robot per creare la mappa, poi l'operazione diventa più rapida." },
  ],
};
