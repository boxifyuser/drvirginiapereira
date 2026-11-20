import type { Metadata } from "next"
import { defaultDescription, defaultTitle, siteConfig } from "@/lib/site-config"

type PageMeta = {
  title?: string
  description?: string
  path?: string
}

export function createMetadata({ title, description = defaultDescription, path = "/" }: PageMeta = {}): Metadata {
  const url = siteConfig.domain ? new URL(path, `${siteConfig.domain}/`).toString() : undefined
  const resolvedTitle = title ?? defaultTitle

  return {
    title: title ? { absolute: title } : { default: defaultTitle, template: "%s | Virgínia Pereira" },
    description,
    applicationName: siteConfig.brandName,
    authors: [{ name: siteConfig.lawyerName }],
    creator: siteConfig.lawyerName,
    metadataBase: siteConfig.domain ? new URL(siteConfig.domain) : undefined,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      siteName: siteConfig.brandName,
      title: resolvedTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
    robots: { index: true, follow: true },
    formatDetection: { telephone: false, email: false, address: false },
  }
}
