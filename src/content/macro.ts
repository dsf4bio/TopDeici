import type { MacroCategory } from "@/lib/types";

export const MACRO_CATEGORIES: MacroCategory[] = [
  { slug: "tecnologia", code: "TEC", name: "Tecnologia ed elettronica", tagline: "Audio, video, smartphone e dispositivi indossabili." },
  { slug: "informatica", code: "INF", name: "Informatica e accessori", tagline: "Computer, periferiche, rete e archiviazione." },
  { slug: "casa", code: "CAS", name: "Casa e arredamento", tagline: "Pulizia, clima, riposo e casa connessa." },
  { slug: "cucina", code: "CUC", name: "Cucina ed elettrodomestici", tagline: "Piccoli elettrodomestici, caffè e utensili." },
  { slug: "sport", code: "SPO", name: "Sport e fitness", tagline: "Allenamento in casa, outdoor e mobilità." },
  { slug: "auto-moto", code: "AUT", name: "Auto e moto", tagline: "Sicurezza, manutenzione e accessori di viaggio." },
  { slug: "giardino-fai-da-te", code: "FAI", name: "Giardino e fai-da-te", tagline: "Elettroutensili, prato e spazi esterni." },
  { slug: "bellezza", code: "BEL", name: "Bellezza e cura personale", tagline: "Igiene orale, rasatura, capelli e benessere." },
  { slug: "ufficio", code: "UFF", name: "Ufficio e produttività", tagline: "Postazione di lavoro, ergonomia e documenti." },
  { slug: "gaming", code: "GAM", name: "Gaming e intrattenimento", tagline: "Console, periferiche di gioco, lettura e musica." },
];
