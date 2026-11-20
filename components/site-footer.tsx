import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"
import { oabLabel, publicLocation, routes, siteConfig } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main wrap">
        <div className="footer-brand-block">
          <a className="brand brand-light" href="/#inicio" aria-label="Virgínia Pereira, início">
            <BrandLogo variant="footer" />
          </a>
          <p>
            Atuação em Direito
            <br />
            do Trabalho.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <span className="footer-label">Atuação</span>
            <a href={routes.termination}>Rescisão e verbas</a>
            <a href={routes.workplace}>Jornada e vínculo</a>
            <a href={routes.about}>Sobre</a>
            <a href={routes.contact}>Contato</a>
          </div>
          <div>
            <span className="footer-label">Informações</span>
            {oabLabel ? <span>OAB {oabLabel}</span> : <span>OAB: pendente de confirmação</span>}
            {publicLocation && <span>{publicLocation}</span>}
            {siteConfig.email && <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>}
            {siteConfig.phone && <span>{siteConfig.phone}</span>}
            {siteConfig.instagramUrl && (
              <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
                Instagram
              </a>
            )}
          </div>
          <div>
            <span className="footer-label">Institucional</span>
            <Link href={routes.privacy}>Política de Privacidade</Link>
            <Link href={routes.terms}>Termos de Uso</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <span>© {new Date().getFullYear()} {siteConfig.lawyerName}. Todos os direitos reservados.</span>
        <span>Conteúdo informativo. Cada situação requer análise individual.</span>
      </div>
    </footer>
  )
}
