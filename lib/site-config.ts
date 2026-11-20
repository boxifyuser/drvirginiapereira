const clean = (value: string | undefined) => value?.trim() ?? ""

export const siteConfig = {
  lawyerName: "Virgínia Pereira",
  brandName: "Virgínia Pereira | Advogada",
  role: "Advogada com atuação em Direito do Trabalho",
  oabNumber: clean(process.env.NEXT_PUBLIC_OAB_NUMBER),
  oabState: clean(process.env.NEXT_PUBLIC_OAB_STATE),
  city: clean(process.env.NEXT_PUBLIC_CITY),
  state: clean(process.env.NEXT_PUBLIC_STATE),
  phone: clean(process.env.NEXT_PUBLIC_PHONE),
  whatsapp: clean(process.env.NEXT_PUBLIC_WHATSAPP).replace(/\D/g, ""),
  email: clean(process.env.NEXT_PUBLIC_EMAIL),
  domain: clean(process.env.NEXT_PUBLIC_SITE_URL).replace(/\/$/, ""),
  address: clean(process.env.NEXT_PUBLIC_ADDRESS),
  instagramUrl: clean(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
  profileImage: clean(process.env.NEXT_PUBLIC_PROFILE_IMAGE),
  serviceArea: clean(process.env.NEXT_PUBLIC_SERVICE_AREA),
  hours: clean(process.env.NEXT_PUBLIC_HOURS),
  googleBusinessUrl: clean(process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL),
  gaId: clean(process.env.NEXT_PUBLIC_GA_ID),
  gtmId: clean(process.env.NEXT_PUBLIC_GTM_ID),
  whatsappMessage:
    "Olá, Virgínia! Acessei seu site e gostaria de informações sobre atendimento em Direito do Trabalho.",
} as const

export const publicLocation = [siteConfig.city, siteConfig.state].filter(Boolean).join(" — ")

export const oabLabel =
  siteConfig.oabNumber && siteConfig.oabState
    ? `${siteConfig.oabNumber}/${siteConfig.oabState}`
    : ""

export const hasDirectChannel = Boolean(siteConfig.whatsapp || siteConfig.email || siteConfig.phone)

export const analyticsConfigured = Boolean(siteConfig.gaId || siteConfig.gtmId)

export function absoluteUrl(path = "/") {
  if (!siteConfig.domain) return undefined
  return new URL(path, `${siteConfig.domain}/`).toString()
}

export function whatsappHref() {
  if (!siteConfig.whatsapp) return undefined
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
}

export function phoneHref() {
  if (!siteConfig.phone) return undefined
  return `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`
}

export const routes = {
  home: "/#inicio",
  practice: "/#atuacao",
  labor: "/#atuacao",
  termination: "/#rescisao",
  workplace: "/#jornada",
  information: "/#duvidas",
  about: "/#sobre",
  process: "/#atendimento",
  faq: "/#perguntas",
  contact: "/#contato",
  privacy: "/politica-de-privacidade",
  terms: "/termos-de-uso",
} as const

export const defaultTitle = "Virgínia Pereira | Advocacia Trabalhista"

export const defaultDescription = siteConfig.city
  ? `Conheça a atuação de Virgínia Pereira em Direito do Trabalho em ${siteConfig.city}${siteConfig.state ? `, ${siteConfig.state}` : ""}. Informações sobre rescisão, verbas, jornada e vínculos de emprego.`
  : "Conheça a atuação de Virgínia Pereira em Direito do Trabalho. Informações sobre rescisão, verbas, jornada e vínculos de emprego."
