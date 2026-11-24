import { PRICE } from "./config";
import type { Product } from "./types";

const euro = new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" });
const integer = new Intl.NumberFormat("it-IT");
const decimal = new Intl.NumberFormat("it-IT", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const date = new Intl.DateTimeFormat("it-IT", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Rome" });
const dateTime = new Intl.DateTimeFormat("it-IT", {
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Rome",
});

export const formatEuro = (n: number) => euro.format(n);
export const formatInt = (n: number) => integer.format(n);
export const formatRating = (n: number) => decimal.format(n);
export const formatDate = (iso: string) => date.format(new Date(iso));
export const formatDateTime = (iso: string) => dateTime.format(new Date(iso));
export const pad2 = (n: number) => String(n).padStart(2, "0");

/**
 * Le regole Amazon consentono di mostrare un prezzo solo se arriva dalle API
 * ed è aggiornato: altrimenti non lo mostriamo e rimandiamo ad Amazon.
 */
export function displayablePrice(p: Product, now = new Date()) {
  if (!p.price || p.price.source !== "api") return undefined;
  const age = now.getTime() - Date.parse(p.price.checkedAt);
  if (!(age >= 0 && age <= PRICE.maxAgeHours * 3_600_000)) return undefined;
  return { text: formatEuro(p.price.value), at: formatDateTime(p.price.checkedAt) };
}

export function formatSpec(value: string | number | boolean | undefined, unit?: string): string {
  if (value === undefined || value === "") return "—";
  if (typeof value === "boolean") return value ? "Sì" : "No";
  const text = typeof value === "number" ? integer.format(value) : value;
  return unit ? `${text} ${unit}` : text;
}
