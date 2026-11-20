import { ArrowRight, BookOpenText, MessageCircle, ShieldCheck } from "lucide-react"
import { principles } from "@/lib/content"

const icons = [MessageCircle, BookOpenText, ShieldCheck]

export function IntroductionSection() {
  return (
    <section className="intro section-pad" aria-labelledby="intro-title">
      <div className="wrap intro-grid">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Atuação jurídica
          </p>
          <h2 id="intro-title">
            Orientação jurídica
            <br />
            com <em>clareza e responsabilidade.</em>
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            Cada questão trabalhista envolve circunstâncias próprias e merece uma análise cuidadosa. A atuação profissional de Virgínia Pereira é direcionada ao Direito do Trabalho, buscando oferecer informações claras e acompanhamento jurídico responsável.
          </p>
          <a className="text-link" href="/#sobre">
            Conheça Virgínia
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="principles">
          {principles.map((principle, index) => {
            const Icon = icons[index]
            return (
              <article key={principle.title}>
                <span className="principle-icon">
                  <Icon size={18} strokeWidth={1.4} aria-hidden="true" />
                </span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
