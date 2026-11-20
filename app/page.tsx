import { AboutSection } from "@/components/about-section"
import { ContactProcess } from "@/components/contact-process"
import { ContactSection } from "@/components/contact-section"
import { FaqSection } from "@/components/faq-section"
import { FloatingContact } from "@/components/floating-contact"
import { HeroSection } from "@/components/hero-section"
import { IntroductionSection } from "@/components/introduction-section"
import { LegalInformationSection } from "@/components/legal-information-section"
import { PracticeAreas } from "@/components/practice-areas"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main id="conteudo">
        <HeroSection />
        <IntroductionSection />
        <PracticeAreas />
        <LegalInformationSection />
        <AboutSection />
        <ContactProcess />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  )
}
