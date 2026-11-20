"use client"

import { useActionState, useEffect, useState } from "react"
import Link from "next/link"
import { submitContact, type ContactState } from "@/app/actions/contact"
import { analyticsEvents, track } from "@/lib/analytics"
import { practiceAreaOptions, validateContact } from "@/lib/contact"

const initialState: ContactState = { status: "idle", message: "", errors: {} }

export function ContactForm({ deliveryConfigured }: { deliveryConfigured: boolean }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState)
  const [errors, setErrors] = useState(initialState.errors)
  const [startedAt, setStartedAt] = useState("")

  useEffect(() => {
    setStartedAt(String(Date.now()))
  }, [])

  useEffect(() => {
    setErrors(state.errors)
    if (state.status === "sent" || state.status === "unconfigured" || state.status === "error") {
      track(analyticsEvents.form, { status: state.status })
    }
  }, [state])

  return (
    <form
      className="contact-form"
      action={formAction}
      noValidate
      onSubmit={(event) => {
        const data = new FormData(event.currentTarget)
        const result = validateContact({
          name: String(data.get("name") ?? ""),
          contact: String(data.get("contact") ?? ""),
          area: String(data.get("area") ?? ""),
          message: String(data.get("message") ?? ""),
          privacy: data.get("privacy") === "on",
        })
        if (!result.ok) {
          event.preventDefault()
          setErrors(result.errors)
        }
      }}
    >
      <div className="hp" aria-hidden="true">
        <label>
          Empresa
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />

      <div className="field">
        <label htmlFor="name">Nome</label>
        <input id="name" name="name" autoComplete="name" maxLength={80} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
        {errors.name && <p id="name-error">{errors.name}</p>}
      </div>
      <div className="field">
        <label htmlFor="contact">E-mail ou telefone</label>
        <input id="contact" name="contact" autoComplete="on" maxLength={120} aria-invalid={Boolean(errors.contact)} aria-describedby={errors.contact ? "contact-error" : undefined} />
        {errors.contact && <p id="contact-error">{errors.contact}</p>}
      </div>
      <div className="field">
        <label htmlFor="area">Tema trabalhista da dúvida</label>
        <select id="area" name="area" defaultValue="" aria-invalid={Boolean(errors.area)} aria-describedby={errors.area ? "area-error" : undefined}>
          <option value="" disabled>
            Selecione
          </option>
          {practiceAreaOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.area && <p id="area-error">{errors.area}</p>}
      </div>
      <div className="field">
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" rows={5} maxLength={1200} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : "message-hint"} />
        <p id="message-hint">Descreva o assunto de forma geral. Não envie documentos, dados de saúde ou outras informações sensíveis.</p>
        {errors.message && <p id="message-error">{errors.message}</p>}
      </div>
      <div className="check">
        <input id="privacy" name="privacy" type="checkbox" aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "privacy-error" : undefined} />
        <label htmlFor="privacy">Li e estou ciente da Política de Privacidade.</label>
        <Link href="/politica-de-privacidade">Ler política</Link>
        {errors.privacy && <p id="privacy-error">{errors.privacy}</p>}
      </div>

      {!deliveryConfigured && (
        <p className="form-notice" role="status">
          Integração pendente. Nenhuma mensagem é enviada ou armazenada enquanto o serviço de e-mail não estiver configurado.
        </p>
      )}
      {state.message && (
        <p className={state.status === "sent" ? "form-success" : "form-notice"} role="alert">
          {state.message}
        </p>
      )}
      <button className="button button-dark" type="submit" disabled={pending}>
        {pending ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  )
}
