import type { CategoryGuide } from "@/lib/types";
import { guide as friggitrici } from "./friggitrici-ad-aria";
import { guide as robot } from "./robot-aspirapolvere";
import { guide as cuffie } from "./cuffie-wireless";
import { guides as tecnologia } from "./tecnologia";
import { guides as informatica } from "./informatica";
import { guides as casa } from "./casa";
import { guides as cucina } from "./cucina";
import { guides as sport } from "./sport";
import { guides as autoMoto } from "./auto-moto";
import { guides as fai } from "./giardino-fai-da-te";
import { guides as bellezza } from "./bellezza";
import { guides as ufficio } from "./ufficio";
import { guides as gaming } from "./gaming";
import { guides as animali } from "./animali";
import { guides as bambini } from "./bambini";
import { guides as salute } from "./salute";
import { guides as casa2 } from "./casa-2";
import { guides as cucina2 } from "./cucina-2";
import { guides as varie2 } from "./varie-2";

// Una guida all'acquisto per ogni categoria. Per modificarne una, cerca lo slug nel file dell'area.
export const GUIDES: Record<string, CategoryGuide> = Object.fromEntries(
  [friggitrici, robot, cuffie, ...tecnologia, ...informatica, ...casa, ...cucina, ...sport, ...autoMoto, ...fai, ...bellezza, ...ufficio, ...gaming, ...animali, ...bambini, ...salute, ...casa2, ...cucina2, ...varie2].map(
    (g) => [g.slug, g],
  ),
);
