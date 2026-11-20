import { contentMeta, faqs } from "@/lib/content"
import { absoluteUrl, oabLabel, publicLocation, siteConfig } from "@/lib/site-config"

function idFor(fragment: string) {
  return absoluteUrl(`/#${fragment}`) ?? `#${fragment}`
}

export function StructuredData() {
  const pageUrl = absoluteUrl("/") ?? undefined
  const personId = idFor("virginia-pereira")
  const serviceId = idFor("legal-service")
  const websiteId = idFor("website")
  const webpageId = idFor("webpage")

  const person: Record<string, unknown> = {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.lawyerName,
    jobTitle: "Advogada",
    description:
      "Virgínia Pereira atua em Direito do Trabalho, com orientação e acompanhamento jurídico nas relações de emprego.",
    knowsAbout: ["Direito do Trabalho"],
  }
  if (pageUrl) person.url = pageUrl
  if (siteConfig.email) person.email = siteConfig.email
  if (siteConfig.phone) person.telephone = siteConfig.phone
  if (siteConfig.profileImage && pageUrl) person.image = siteConfig.profileImage.startsWith("http") ? siteConfig.profileImage : absoluteUrl(siteConfig.profileImage)
  if (siteConfig.instagramUrl) person.sameAs = [siteConfig.instagramUrl]
  if (oabLabel) person.identifier = `OAB ${oabLabel}`

  const service: Record<string, unknown> = {
    "@type": "LegalService",
    "@id": serviceId,
    name: siteConfig.brandName,
    description: "Atuação jurídica em Direito do Trabalho.",
    serviceType: ["Direito do Trabalho"],
    provider: { "@id": personId },
    employee: { "@id": personId },
  }
  if (pageUrl) service.url = pageUrl
  if (siteConfig.email) service.email = siteConfig.email
  if (siteConfig.phone) service.telephone = siteConfig.phone
  if (siteConfig.address || siteConfig.city) {
    service.address = {
      "@type": "PostalAddress",
      ...(siteConfig.address ? { streetAddress: siteConfig.address } : {}),
      ...(siteConfig.city ? { addressLocality: siteConfig.city } : {}),
      ...(siteConfig.state ? { addressRegion: siteConfig.state } : {}),
      addressCountry: "BR",
    }
  }
  if (siteConfig.serviceArea || publicLocation) service.areaServed = siteConfig.serviceArea || publicLocation

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: siteConfig.brandName,
      inLanguage: "pt-BR",
      publisher: { "@id": personId },
      ...(pageUrl ? { url: pageUrl } : {}),
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      name: "Virgínia Pereira | Advocacia Trabalhista",
      description: "Página institucional de Virgínia Pereira, advogada com atuação em Direito do Trabalho.",
      inLanguage: "pt-BR",
      dateModified: contentMeta.reviewedAt,
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      mainEntity: { "@id": serviceId },
      ...(pageUrl ? { url: pageUrl } : {}),
    },
    person,
    service,
    {
      "@type": "FAQPage",
      "@id": idFor("faq"),
      isPartOf: { "@id": webpageId },
      dateModified: contentMeta.reviewedAt,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ]

  const data = { "@context": "https://schema.org", "@graph": graph }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
}

export function BreadcrumbData({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(absoluteUrl(item.path) ? { item: absoluteUrl(item.path) } : {}),
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
}
