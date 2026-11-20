"use server"

import { validateContact, type ContactErrors } from "@/lib/contact"

export type ContactState = {
  status: "idle" | "invalid" | "unconfigured" | "sent" | "error"
  message: string
  errors: ContactErrors
}

function deliveryConfigured() {
  const webhook = Boolean(process.env.CONTACT_WEBHOOK_URL)
  const resend = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL)
  return webhook || resend
}

async function deliver(input: { name: string; contact: string; area: string; message: string }) {
  const webhook = process.env.CONTACT_WEBHOOK_URL
  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    })
    if (!response.ok) throw new Error("webhook")
    return
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      subject: `Contato pelo site — ${input.area}`,
      text: `Nome: ${input.name}\nContato: ${input.contact}\nÁrea: ${input.area}\n\n${input.message}`,
    }),
  })
  if (!response.ok) throw new Error("resend")
}

export async function submitContact(_previous: ContactState, formData: FormData): Promise<ContactState> {
  const company = String(formData.get("company") ?? "")
  const startedAt = Number(formData.get("startedAt") ?? 0)
  const tooFast = !startedAt || Date.now() - startedAt < 1500

  if (company.trim() || tooFast) {
    return { status: "error", message: "Não foi possível enviar agora. Tente novamente em instantes.", errors: {} }
  }

  const result = validateContact({
    name: String(formData.get("name") ?? ""),
    contact: String(formData.get("contact") ?? ""),
    area: String(formData.get("area") ?? ""),
    message: String(formData.get("message") ?? ""),
    privacy: formData.get("privacy") === "on",
  })

  if (!result.ok) {
    return { status: "invalid", message: "Revise os campos destacados antes de continuar.", errors: result.errors }
  }

  if (!deliveryConfigured()) {
    return {
      status: "unconfigured",
      message:
        "A mensagem não foi enviada nem armazenada. O formulário está pronto, mas a integração de e-mail ainda precisa ser configurada.",
      errors: {},
    }
  }

  try {
    await deliver(result.data)
  } catch {
    return {
      status: "error",
      message: "Não foi possível concluir o envio. Tente novamente ou utilize outro canal informado nesta página.",
      errors: {},
    }
  }

  return {
    status: "sent",
    message: "Mensagem enviada. Este envio não constitui, por si só, uma relação advogado-cliente.",
    errors: {},
  }
}
