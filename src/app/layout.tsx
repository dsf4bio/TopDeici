import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/config";
import { websiteJsonLd } from "@/lib/seo";
import "./globals.css";

// I font vengono scaricati in fase di build e serviti dal nostro dominio: nessuna richiesta a Google dal browser.
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — I 10 migliori prodotti Amazon per categoria`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  formatDetection: { telephone: false },
  // favicon.ico (48 px) per Google e i browser vecchi, SVG nitido a ogni misura, PNG per Android e iOS.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#121211",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${archivo.variable} ${mono.variable}`}>
      <body>
        <a href="#contenuto" className="skip-link">Vai al contenuto</a>
        <Header />
        <main id="contenuto">{children}</main>
        <Footer />
        <JsonLd data={websiteJsonLd()} />
      </body>
    </html>
  );
}
