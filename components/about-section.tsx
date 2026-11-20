import { Mail, MapPin, Phone } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { Portrait } from "@/components/portrait"
import { hasDirectChannel, oabLabel, phoneHref, publicLocation, siteConfig } from "@/lib/site-config"
import { analyticsEvents } from "@/lib/analytics"
import { TrackedLink } from "@/components/tracked-link"

export function AboutSection() {
  const phone = phoneHref()
  const gaps = [
    !oabLabel ? "inscrição na OAB e seccional" : "",
    !hasDirectChannel ? "ao menos um canal oficial de contato" : "",
    !siteConfig.domain ? "domínio do site" : "",
  ].filter(Boolean)

  return (
    <section className="about section-pad" id="sobre" aria-labelledby="about-title">
      <div className="wrap about-grid">
        <div className={siteConfig.profileImage ? "about-visual has-photo" : "about-visual has-logo"}>
          {siteConfig.profileImage ? (
            <Portrait src={siteConfig.profileImage} className="about-photo" />
          ) : (
            <>
              <BrandLogo variant="about" />
              <span className="about-caption">
                Espaço para fotografia
                <br />
                profissional
              </span>
            </>
          )}
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Sobre
          </p>
          <h2 id="about-title">Virgínia Pereira</h2>
          <p className="about-role">Advogada | Direito do Trabalho</p>
          <p>
            Virgínia Pereira atua em Direito do Trabalho, oferecendo orientação e acompanhamento jurídico em demandas relacionadas às relações de emprego e às condições de trabalho.
          </p>
          {publicLocation && (
            <p className="about-location">
              <MapPin size={15} strokeWidth={1.5} aria-hidden="true" />
              Atuação informada em {publicLocation}
              {siteConfig.serviceArea ? `. Abrangência configurada: ${siteConfig.serviceArea}.` : "."}
            </p>
          )}
          <ul className="about-facts">
            {oabLabel && <li>OAB {oabLabel}</li>}
            {siteConfig.email && (
              <li>
                <TrackedLink href={`mailto:${siteConfig.email}`} event={analyticsEvents.email} eventId="about">
                  <Mail size={14} strokeWidth={1.5} aria-hidden="true" />
                  {siteConfig.email}
                </TrackedLink>
              </li>
            )}
            {siteConfig.phone && phone && (
              <li>
                <TrackedLink href={phone} event={analyticsEvents.phone} eventId="about">
                  <Phone size={14} strokeWidth={1.5} aria-hidden="true" />
                  {siteConfig.phone}
                </TrackedLink>
              </li>
            )}
          </ul>
          {gaps.length > 0 && (
            <p className="about-note">
              Pendência de configuração para publicação: {gaps.join(", ")}. Formação, experiência e modelo de atendimento só serão exibidos depois de confirmados pela advogada.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
