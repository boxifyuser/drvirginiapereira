const clean = (value: string | undefined) => value?.trim() ?? ""

export const siteConfig = {
  lawyerName: "Virgínia Pereira",
  brandName: "Virgínia Pereira | Advogada",
  role: "Advogada com atuação em Direito Previdenciário e Direito do Trabalho",
  oabNumber: clean(process.env.NEXT_PUBLIC_OAB_NUMBER),
  oabState: clean(process.env.NEXT_PUBLIC_OAB_STATE),
  city: clean(process.env.NEXT_PUBLIC_CITY),
  state: clean(process.env.NEXT_PUBLIC_STATE),
  phone: clean(process.env.NEXT_PUBLIC_PHONE),
  whatsapp: clean(process.env.NEXT_PUBLIC_WHATSAPP).replace(/\D/g, ""),
  email: clean(process.env.NEXT_PUBLIC_EMAIL),
  domain: clean(process.env.NEXT_PUBLIC_SITE_URL),
  address: clean(process.env.NEXT_PUBLIC_ADDRESS),
  instagramUrl: clean(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
  profileImage: clean(process.env.NEXT_PUBLIC_PROFILE_IMAGE),
  serviceArea: clean(process.env.NEXT_PUBLIC_SERVICE_AREA),
  whatsappMessage:
    "Olá, Virgínia! Acessei seu site e gostaria de informações sobre atendimento jurídico.",
} as const

export const publicLocation = [siteConfig.city, siteConfig.state]
  .filter(Boolean)
  .join(" — ")

export const oabLabel = [siteConfig.oabNumber, siteConfig.oabState]
  .filter(Boolean)
  .join("/")
