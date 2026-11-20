import { AboutSection, ContactNotice, ContactProcess, ContactSection, FaqSection, HeroSection, IntroductionSection, LegalInformation, PracticeAreas } from "@/components/landing-sections"
import { FloatingContact, SiteFooter, SiteHeader } from "@/components/site-chrome"
import { siteConfig } from "@/lib/site-config"

function StructuredData() {
  const url = siteConfig.domain
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": url ? `${url}/#virginia-pereira` : "#virginia-pereira",
        name: siteConfig.lawyerName,
        jobTitle: "Advogada",
        ...(siteConfig.email ? { email: siteConfig.email } : {}),
        ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
        ...(url ? { url } : {}),
      },
      {
        "@type": "LegalService",
        "@id": url ? `${url}/#legal-service` : "#legal-service",
        name: siteConfig.brandName,
        description: "Atuação em Direito Previdenciário e Direito do Trabalho.",
        provider: { "@id": url ? `${url}/#virginia-pereira` : "#virginia-pereira" },
        ...(url ? { url } : {}),
        ...(siteConfig.email ? { email: siteConfig.email } : {}),
        ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
        ...(siteConfig.address ? { address: siteConfig.address } : {}),
        ...(siteConfig.serviceArea ? { areaServed: siteConfig.serviceArea } : {}),
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
}

export default function Home() {
  return <>
    <StructuredData />
    <SiteHeader />
    <main>
      <HeroSection />
      <IntroductionSection />
      <PracticeAreas />
      <LegalInformation />
      <AboutSection />
      <ContactProcess />
      <FaqSection />
      <ContactSection />
      <ContactNotice />
    </main>
    <SiteFooter />
    <FloatingContact />
  </>
}
