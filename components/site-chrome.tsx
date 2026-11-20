"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { siteConfig, oabLabel, publicLocation } from "@/lib/site-config"

const links = [
  ["Início", "#inicio"],
  ["Áreas de atuação", "#atuacao"],
  ["Sobre", "#sobre"],
  ["Dúvidas", "#duvidas"],
  ["Contato", "#contato"],
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link href="#inicio" className="brand" aria-label="Virgínia Pereira, início">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-copy">
            <span className="brand-name">Virgínia Pereira</span>
            <span className="brand-role">ADVOGADA</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <a className="header-contact" href="#contato">Entrar em contato <ArrowUpRight size={15} aria-hidden="true" /></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação móvel">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <a className="mobile-cta" href="#contato" onClick={() => setOpen(false)}>Entrar em contato <ArrowUpRight size={15} aria-hidden="true" /></a>
      </nav>}
    </header>
  )
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-main wrap">
      <div className="footer-brand-block">
        <Link href="#inicio" className="brand brand-light" aria-label="Virgínia Pereira, início">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-copy"><span className="brand-name">Virgínia Pereira</span><span className="brand-role">ADVOGADA</span></span>
        </Link>
        <p>Atuação em Direito Previdenciário<br />e Direito do Trabalho.</p>
      </div>
      <div className="footer-links">
        <div><span className="footer-label">Navegação</span><a href="#atuacao">Áreas de atuação</a><a href="#sobre">Sobre</a><a href="#duvidas">Dúvidas frequentes</a></div>
        <div><span className="footer-label">Informações</span><Link href="/politica-de-privacidade">Política de Privacidade</Link>{publicLocation && <span>{publicLocation}</span>}{oabLabel && <span>OAB {oabLabel}</span>}</div>
      </div>
    </div>
    <div className="footer-bottom wrap"><span>© {new Date().getFullYear()} {siteConfig.lawyerName}. Todos os direitos reservados.</span><span>Conteúdo informativo. Cada situação requer análise individual.</span></div>
  </footer>
}

export function FloatingContact() {
  if (!siteConfig.whatsapp) return null
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
  return <a className="floating-contact" href={href} target="_blank" rel="noreferrer" aria-label="Entrar em contato pelo WhatsApp">WhatsApp <ArrowUpRight size={15} aria-hidden="true" /></a>
}
