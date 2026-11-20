"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { contentMeta, faqs } from "@/lib/content"
import { analyticsEvents, track } from "@/lib/analytics"

function FaqItem({ faq }: { faq: (typeof faqs)[number] }) {
  const ref = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const openIfTarget = () => {
      if (window.location.hash === `#${faq.id}` && ref.current) ref.current.open = true
    }
    openIfTarget()
    window.addEventListener("hashchange", openIfTarget)
    return () => window.removeEventListener("hashchange", openIfTarget)
  }, [faq.id])

  return (
    <details
      className="faq-item"
      id={faq.id}
      name="faq"
      ref={ref}
      onToggle={(event) => {
        if (event.currentTarget.open) track(analyticsEvents.faq, { question_id: faq.id })
      }}
    >
      <summary>
        {faq.question}
        <span aria-hidden="true" />
      </summary>
      <div className="faq-answer">
        <p>{faq.answer}</p>
        {"sourceUrl" in faq && faq.sourceUrl && (
          <a href={faq.sourceUrl} target="_blank" rel="noreferrer">
            {faq.sourceLabel}
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        )}
      </div>
    </details>
  )
}

export function FaqSection() {
  return (
    <section className="faq section-pad" id="perguntas" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-intro">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Dúvidas frequentes
          </p>
          <h2 id="faq-title">
            Informação clara
            <br />
            para <em>seguir em frente.</em>
          </h2>
          <p>{contentMeta.authorship} Atualização editorial deste texto: {contentMeta.reviewedAt}.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <FaqItem faq={faq} key={faq.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
