import type { CategoryGuide } from "@/lib/types";
import { guide as friggitrici } from "./friggitrici-ad-aria";
import { guide as robot } from "./robot-aspirapolvere";
import { guide as cuffie } from "./cuffie-wireless";

// Per aggiungere una guida: crea un file in questa cartella e aggiungilo qui sotto.
export const GUIDES: Record<string, CategoryGuide> = Object.fromEntries(
  [friggitrici, robot, cuffie].map((g) => [g.slug, g]),
);
