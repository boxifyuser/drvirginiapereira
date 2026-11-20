"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { navigation } from "@/lib/content"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle("nav-open", open)
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.classList.remove("nav-open")
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <div className="header-inner wrap">
        <a className="brand" href="/#inicio" aria-label="Virgínia Pereira, início">
          <BrandLogo variant="header" priority />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="/#contato">
          Entrar em contato
          <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação móvel">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="mobile-cta" href="/#contato" onClick={() => setOpen(false)}>
            Entrar em contato
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  )
}
