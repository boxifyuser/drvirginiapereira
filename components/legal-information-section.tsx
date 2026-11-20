import { ArrowDown, ArrowUpRight } from "lucide-react"
import { quickAnswers } from "@/lib/content"

export function LegalInformationSection() {
  return (
    <section className="legal-info section-pad" id="duvidas" aria-labelledby="rights-title">
      <div className="wrap">
        <div className="section-heading legal-heading">
          <div>
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-line" aria-hidden="true" />
              Conteúdo informativo
            </p>
            <h2 id="rights-title">
              Informações sobre
              <br />
              <em>direitos trabalhistas.</em>
            </h2>
          </div>
          <p>Respostas iniciais para dúvidas frequentes. A aplicação das regras depende dos fatos e dos documentos de cada situação.</p>
        </div>
        <div className="quick-grid">
          {quickAnswers.map((item, index) => (
            <a className="quick-card" href={item.href} key={item.question}>
              <span className="quick-number">0{index + 1}</span>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
              <span className="quick-more">
                Leia a resposta ampliada
                <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
        <a className="text-link link-light" href="/#perguntas">
          Todas as perguntas frequentes
          <ArrowDown size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
