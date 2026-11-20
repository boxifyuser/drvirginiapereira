import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.domain) return []
  const lastModified = new Date("2026-11-19")
  return [
    { url: siteConfig.domain, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.domain}/politica-de-privacidade`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.domain}/termos-de-uso`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ]
}
