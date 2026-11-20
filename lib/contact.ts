export const practiceAreaOptions = [
  { value: "rescisao", label: "Rescisão e verbas" },
  { value: "jornada", label: "Jornada, horas extras e FGTS" },
  { value: "vinculo", label: "Vínculo, registro e condições de trabalho" },
  { value: "nao-informada", label: "Outra questão trabalhista" },
] as const

export type ContactField = "name" | "contact" | "area" | "message" | "privacy"

export type ContactErrors = Partial<Record<ContactField, string>>

export type ContactPayload = {
  name: string
  contact: string
  area: string
  message: string
}

export function sanitizeLine(value: string) {
  return value.replace(/<[^>]*>/g, "").replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim()
}

export function sanitizeMessage(value: string) {
  return value.replace(/<[^>]*>/g, "").replace(/\r\n/g, "\n").trim()
}

export function validateContact(input: {
  name: string
  contact: string
  area: string
  message: string
  privacy: boolean
}): { ok: true; data: ContactPayload } | { ok: false; errors: ContactErrors } {
  const errors: ContactErrors = {}
  const name = sanitizeLine(input.name)
  const contact = sanitizeLine(input.contact)
  const area = sanitizeLine(input.area)
  const message = sanitizeMessage(input.message)

  if (!/^[\p{L}\s'.-]{2,80}$/u.test(name)) {
    errors.name = "Informe seu nome completo, com pelo menos 2 letras."
  }

  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)
  const digits = contact.replace(/\D/g, "")
  const phone = digits.length >= 10 && digits.length <= 13 && !contact.includes("@")
  if (!email && !phone) {
    errors.contact = "Informe um e-mail ou um telefone com DDD."
  }

  if (!practiceAreaOptions.some((option) => option.value === area)) {
    errors.area = "Selecione a área relacionada à sua dúvida."
  }

  if (message.length < 20 || message.length > 1200) {
    errors.message = "Descreva o assunto em um texto entre 20 e 1200 caracteres, sem documentos ou dados sensíveis."
  }

  if (!input.privacy) {
    errors.privacy = "Confirme a ciência da Política de Privacidade para continuar."
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors }

  const areaLabel = practiceAreaOptions.find((option) => option.value === area)?.label ?? area
  return { ok: true, data: { name, contact, area: areaLabel, message } }
}
