import { contactSteps } from "@/lib/content"

export function ContactProcess() {
  return (
    <section className="process section-pad" id="atendimento" aria-labelledby="process-title">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              Primeiros passos
            </p>
            <h2 id="process-title">Como iniciar seu contato</h2>
          </div>
          <p>Um primeiro contato ajuda a compreender o assunto e a indicar como a comunicação pode seguir.</p>
        </div>
        <div className="steps-grid">
          {contactSteps.map((step) => (
            <article className="step" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <p className="process-note">O envio de uma mensagem não constitui automaticamente uma relação advogado-cliente.</p>
      </div>
    </section>
  )
}
