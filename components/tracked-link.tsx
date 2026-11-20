"use client"

import type { ReactNode } from "react"
import { analyticsEvents, track, type AnalyticsEvent } from "@/lib/analytics"

type Props = {
  href: string
  className?: string
  children: ReactNode
  event?: AnalyticsEvent
  eventId?: string
  external?: boolean
  ariaLabel?: string
}

export function TrackedLink({ href, className, children, event, eventId, external = false, ariaLabel }: Props) {
  return (
    <a
      className={className}
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onClick={() => {
        if (!event) return
        if (event === analyticsEvents.practice) track(event, { area_id: eventId })
        else if (event === analyticsEvents.faq) track(event, { question_id: eventId })
        else track(event, { channel: eventId })
      }}
    >
      {children}
    </a>
  )
}
