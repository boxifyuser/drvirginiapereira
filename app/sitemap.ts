import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.domain) return []
  return [
    { url: siteConfig.domain, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.domain}/politica-de-privacidade`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ]
}
