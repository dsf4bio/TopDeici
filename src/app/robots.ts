import type { MetadataRoute } from "next";
import { SITE } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  // Le anteprime di Vercel (*.vercel.app) non devono finire su Google.
  const isProduction = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true;
  if (!isProduction) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/cerca", "/anteprima"] },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
