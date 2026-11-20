export const analyticsEvents = {
  whatsapp: "contact_whatsapp_click",
  email: "contact_email_click",
  phone: "contact_phone_click",
  form: "contact_form_submit",
  practice: "practice_area_click",
  faq: "faq_interaction",
} as const

export type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents]

type AnalyticsParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

export function track(event: AnalyticsEvent, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return
  if (window.localStorage.getItem("vp-consent") !== "granted") return

  const payload = Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined))
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...payload })
  window.gtag?.("event", event, payload)
}
