import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-inner wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Virgínia Pereira <span aria-hidden="true">|</span> Advogada
          </p>
          <h1>
            Direito com clareza.
            <br />
            <em>Orientação com cuidado.</em>
          </h1>
          <p className="hero-description">
            Atuação em Direito do Trabalho, com atenção às particularidades de cada relação de emprego.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="/#contato">
              Entrar em contato
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="text-link" href="/#atuacao">
              Conheça a atuação
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-note">
            <span className="note-rule" aria-hidden="true" />
            Informação responsável, análise individualizada.
          </div>
        </div>
        <div className="hero-art" aria-label="Composição tipográfica editorial">
          <div className="art-frame">
            <div className="art-topline">
              <span>ATUAÇÃO JURÍDICA</span>
              <span>01 — 02</span>
            </div>
            <div className="art-statement">
              A escuta
              <br />
              precede a
              <br />
              <em>orientação.</em>
            </div>
            <div className="art-bottom">
              <span className="art-seal" aria-hidden="true" />
              <span>
                DIREITO
                <br />
                DO TRABALHO
              </span>
            </div>
          </div>
          <span className="art-side-label">VIRGÍNIA PEREIRA · ADVOGADA</span>
        </div>
        <a className="scroll-cue" href="/#atuacao" aria-label="Role para a atuação">
          <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
