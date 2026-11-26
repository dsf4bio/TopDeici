import type { MetadataRoute } from "next";
import { SITE } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — I 10 migliori prodotti Amazon per categoria`,
    short_name: SITE.name,
    start_url: "/",
    display: "browser",
    background_color: "#efeee9",
    theme_color: "#121211",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
