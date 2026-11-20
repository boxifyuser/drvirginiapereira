import { ArrowRight, BriefcaseBusiness, Scale } from "lucide-react"
import { practices } from "@/lib/content"
import { analyticsEvents } from "@/lib/analytics"
import { TrackedLink } from "@/components/tracked-link"

const icons = [Scale, BriefcaseBusiness]

export function PracticeAreas() {
  return (
    <section className="practice section-pad" id="atuacao" aria-labelledby="practice-title">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              Como posso orientar
            </p>
            <h2 id="practice-title">Atuação trabalhista</h2>
          </div>
          <p>Conheça as principais questões jurídicas relacionadas às relações de trabalho, da rescisão às condições em que o serviço é prestado.</p>
        </div>
        <div className="practice-list">
          {practices.map((practice, index) => {
            const Icon = icons[index] ?? Scale
            const topics = practice.topics.filter((topic) => topic.enabled)
            return (
              <article className="practice-panel" id={practice.id} key={practice.id}>
                <div className="practice-head">
                  <span className="practice-number">{practice.number}</span>
                  <div>
                    <h3>{practice.title}</h3>
                    <p>{practice.intro}</p>
                  </div>
                  <Icon className="practice-symbol" size={26} strokeWidth={1.25} aria-hidden="true" />
                </div>
                <ul className="topic-list">
                  {topics.map((topic) => (
                    <li key={topic.title}>
                      <span className="topic-dot" aria-hidden="true" />
                      <span>
                        <strong>{topic.title}</strong>
                        <small>{topic.description}</small>
                      </span>
                    </li>
                  ))}
                </ul>
                <TrackedLink className="text-link" href="/#contato" event={analyticsEvents.practice} eventId={practice.id}>
                  {practice.cta}
                  <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
                </TrackedLink>
              </article>
            )
          })}
        </div>
        <p className="practice-disclaimer">
          Os temas estão organizados para validação antes da publicação. A lista não significa que todas as demandas sejam atendidas. A pertinência de cada situação é analisada individualmente.
        </p>
      </div>
    </section>
  )
}
