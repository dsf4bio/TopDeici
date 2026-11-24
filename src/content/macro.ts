import type { MacroCategory } from "@/lib/types";

export const MACRO_CATEGORIES: MacroCategory[] = [
  { slug: "tecnologia", searchIndex: "Electronics", code: "TEC", name: "Tecnologia ed elettronica", tagline: "Audio, video, smartphone e dispositivi indossabili." },
  { slug: "informatica", searchIndex: "Computers", code: "INF", name: "Informatica e accessori", tagline: "Computer, periferiche, rete e archiviazione." },
  { slug: "casa", searchIndex: "HomeAndKitchen", code: "CAS", name: "Casa e arredamento", tagline: "Pulizia, clima, riposo e casa connessa." },
  { slug: "cucina", searchIndex: "HomeAndKitchen", code: "CUC", name: "Cucina ed elettrodomestici", tagline: "Piccoli elettrodomestici, caffè e utensili." },
  { slug: "sport", searchIndex: "SportsAndOutdoors", code: "SPO", name: "Sport e fitness", tagline: "Allenamento in casa, outdoor e mobilità." },
  { slug: "auto-moto", searchIndex: "Automotive", code: "AUT", name: "Auto e moto", tagline: "Sicurezza, manutenzione e accessori di viaggio." },
  { slug: "giardino-fai-da-te", searchIndex: "ToolsAndHomeImprovement", code: "FAI", name: "Giardino e fai-da-te", tagline: "Elettroutensili, prato e spazi esterni." },
  { slug: "bellezza", searchIndex: "HealthPersonalCare", code: "BEL", name: "Bellezza e cura personale", tagline: "Igiene orale, rasatura, capelli e benessere." },
  { slug: "ufficio", searchIndex: "OfficeProducts", code: "UFF", name: "Ufficio e produttività", tagline: "Postazione di lavoro, ergonomia e documenti." },
  { slug: "gaming", searchIndex: "VideoGames", code: "GAM", name: "Gaming e intrattenimento", tagline: "Console, periferiche di gioco, lettura e musica." },
];
