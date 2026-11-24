import type { Product } from "./types";

// Controllo dei file prodotto. Un errore qui ferma lo script di import o la build,
// così un dato sbagliato non arriva mai online.

const ASIN = /^[A-Z0-9]{10}$/;
const isIso = (s: unknown) => typeof s === "string" && !Number.isNaN(Date.parse(s));
const isText = (s: unknown) => typeof s === "string" && s.trim().length > 0;

export function validateProduct(p: unknown, where: string): string[] {
  const errors: string[] = [];
  const err = (msg: string) => errors.push(`${where}: ${msg}`);
  if (typeof p !== "object" || p === null) return [`${where}: non è un oggetto`];
  const x = p as Partial<Product>;

  if (!ASIN.test(String(x.asin ?? ""))) err(`ASIN non valido (${x.asin})`);
  if (!isText(x.category)) err("categoria mancante");
  if (!isText(x.title)) err("titolo mancante");
  if (!isText(x.brand)) err("brand mancante");
  if (x.image !== undefined && !/^https:\/\/(m\.media-amazon\.com|images-eu\.ssl-images-amazon\.com)\//.test(x.image))
    err("l'immagine deve essere un URL fornito da Amazon");

  if (x.price !== undefined) {
    if (!(typeof x.price.value === "number" && x.price.value > 0)) err("prezzo non valido");
    if (x.price.currency !== "EUR") err("valuta diversa da EUR");
    if (!isIso(x.price.checkedAt)) err("data di verifica del prezzo non valida");
    if (x.price.source !== "api" && x.price.source !== "manual") err("fonte del prezzo non valida");
  }
  if (x.rating !== undefined) {
    const { average, count } = x.rating;
    if (!(typeof average === "number" && average >= 1 && average <= 5)) err("valutazione fuori scala 1–5");
    if (!(Number.isInteger(count) && count >= 0)) err("numero di recensioni non valido");
    if (!isIso(x.rating.checkedAt)) err("data di verifica della valutazione non valida");
    if (x.rating.source !== "api" && x.rating.source !== "manual") err("fonte della valutazione non valida");
  }
  if (x.editorialScore !== undefined && !(x.editorialScore >= 0 && x.editorialScore <= 1))
    err("editorialScore deve essere tra 0 e 1");
  return errors;
}
