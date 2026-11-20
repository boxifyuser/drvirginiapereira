"use client"

import { MessageCircle } from "lucide-react"
import { analyticsEvents, track } from "@/lib/analytics"
import { whatsappHref } from "@/lib/site-config"

export function FloatingContact() {
  const href = whatsappHref()
  if (!href) return null

  return (
    <a
      className="floating-contact"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Entrar em contato pelo WhatsApp"
      onClick={() => track(analyticsEvents.whatsapp, { channel: "floating" })}
    >
      <MessageCircle size={16} strokeWidth={1.5} aria-hidden="true" />
      WhatsApp
    </a>
  )
}
