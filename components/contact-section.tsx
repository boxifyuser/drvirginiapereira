import { Clock3, Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { TrackedLink } from "@/components/tracked-link"
import { analyticsEvents } from "@/lib/analytics"
import { hasDirectChannel, phoneHref, publicLocation, siteConfig, whatsappHref } from "@/lib/site-config"

export function ContactSection() {
  const whatsapp = whatsappHref()
  const phone = phoneHref()
  const deliveryConfigured = Boolean(
    process.env.CONTACT_WEBHOOK_URL || (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL),
  )

  return (
    <section className="contact section-pad" id="contato" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-light">
            <span className="eyebrow-line" aria-hidden="true" />
            Contato
          </p>
          <h2 id="contact-title">
            Vamos conversar
            <br />
            <em>com tranquilidade.</em>
          </h2>
          <p>Para informações sobre atendimento em Direito do Trabalho, utilize os canais disponíveis.</p>
          {hasDirectChannel || publicLocation || siteConfig.hours ? (
            <ul className="channel-list">
              {whatsapp && (
                <li>
                  <TrackedLink href={whatsapp} external event={analyticsEvents.whatsapp} eventId="contact">
                    WhatsApp
                  </TrackedLink>
                </li>
              )}
              {siteConfig.email && (
                <li>
                  <TrackedLink href={`mailto:${siteConfig.email}`} event={analyticsEvents.email} eventId="contact">
                    <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
                    {siteConfig.email}
                  </TrackedLink>
                </li>
              )}
              {phone && (
                <li>
                  <TrackedLink href={phone} event={analyticsEvents.phone} eventId="contact">
                    <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
                    {siteConfig.phone}
                  </TrackedLink>
                </li>
              )}
              {publicLocation && (
                <li>
                  <MapPin size={16} strokeWidth={1.5} aria-hidden="true" />
                  {publicLocation}
                </li>
              )}
              {siteConfig.hours && (
                <li>
                  <Clock3 size={16} strokeWidth={1.5} aria-hidden="true" />
                  {siteConfig.hours}
                </li>
              )}
              {siteConfig.googleBusinessUrl && (
                <li>
                  <a href={siteConfig.googleBusinessUrl} target="_blank" rel="noreferrer">
                    Perfil da empresa no Google
                  </a>
                </li>
              )}
            </ul>
          ) : (
            <p className="contact-pending">Os canais diretos serão publicados depois da confirmação dos dados profissionais.</p>
          )}
        </div>
        <div className="contact-card">
          <span className="contact-card-label">Mensagem inicial</span>
          <ContactForm deliveryConfigured={deliveryConfigured} />
        </div>
      </div>
    </section>
  )
}
