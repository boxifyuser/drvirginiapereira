import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Clock3, FileCheck2, HeartHandshake, Mail, MapPin, ShieldCheck } from "lucide-react"
import { faqs, practices, quickAnswers } from "@/lib/content"
import { oabLabel, publicLocation, siteConfig } from "@/lib/site-config"

export function HeroSection() {
  return <section className="hero" id="inicio">
    <div className="hero-inner wrap">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> VIRGÍNIA PEREIRA <span className="eyebrow-separator">|</span> ADVOGADA</p>
        <h1>Direito com clareza.<br /><em>Orientação com cuidado.</em></h1>
        <p className="hero-description">Atuação jurídica em Direito Previdenciário e Direito do Trabalho, com atenção às particularidades de cada situação.</p>
        <div className="hero-actions"><a className="button button-dark" href="#contato">Entrar em contato <ArrowUpRight size={16} aria-hidden="true" /></a><a className="text-link" href="#atuacao">Conheça as áreas <ArrowRight size={16} aria-hidden="true" /></a></div>
        <div className="hero-note"><span className="note-rule" /> Informação responsável, análise individualizada.</div>
      </div>
      <div className="hero-art" aria-label="Composição tipográfica editorial">
        <div className="art-frame"><div className="art-topline"><span>ATUAÇÃO JURÍDICA</span><span>01 — 02</span></div><div className="art-statement">A escuta<br />precede a<br /><em>orientação.</em></div><div className="art-bottom"><span className="art-seal" aria-hidden="true" /><span>PREVIDENCIÁRIO<br />& TRABALHISTA</span></div></div>
        <span className="art-side-label">VIRGÍNIA PEREIRA · ADVOGADA</span>
      </div>
      <a className="scroll-cue" href="#atuacao" aria-label="Role para conhecer as áreas de atuação"><ArrowDown size={16} aria-hidden="true" /></a>
    </div>
  </section>
}

export function IntroductionSection() {
  return <section className="intro section-pad">
    <div className="wrap intro-grid">
      <div><p className="eyebrow"><span className="eyebrow-line" /> ATUAÇÃO JURÍDICA</p><h2>Orientação jurídica<br />com <em>clareza e responsabilidade.</em></h2></div>
      <div className="intro-copy"><p>Cada questão jurídica envolve circunstâncias próprias e merece uma análise cuidadosa. A atuação profissional de Virgínia Pereira é direcionada ao Direito Previdenciário e ao Direito do Trabalho, buscando oferecer informações claras e acompanhamento jurídico responsável.</p><a className="text-link" href="#sobre">Conheça Virgínia <ArrowRight size={16} aria-hidden="true" /></a></div>
      <div className="principles">
        <article><span className="principle-icon"><HeartHandshake size={19} aria-hidden="true" /></span><h3>Escuta e atenção</h3><p>Compreensão das particularidades de cada situação.</p></article>
        <article><span className="principle-icon"><FileCheck2 size={19} aria-hidden="true" /></span><h3>Clareza na orientação</h3><p>Comunicação objetiva sobre direitos, procedimentos e possibilidades.</p></article>
        <article><span className="principle-icon"><ShieldCheck size={19} aria-hidden="true" /></span><h3>Responsabilidade profissional</h3><p>Atuação fundamentada na legislação e na análise individualizada.</p></article>
      </div>
    </div>
  </section>
}

export function PracticeAreas() {
  return <section className="practice section-pad" id="atuacao">
    <div className="wrap"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> COMO POSSO ORIENTAR</p><h2>Áreas de atuação</h2></div><p>Informação jurídica para compreender seus direitos e os caminhos possíveis.</p></div>
      <div className="practice-list">{practices.map((practice) => <article className="practice-panel" key={practice.id}>
        <div className="practice-head"><span className="practice-number">{practice.number}</span><div><h3>{practice.title}</h3><p>{practice.intro}</p></div><BriefcaseBusiness className="practice-symbol" strokeWidth={1.2} aria-hidden="true" /></div>
        <ul className="topic-list">{practice.topics.map(([title, description]) => <li key={title}><span className="topic-dot" /><span><strong>{title}</strong><small>{description}</small></span></li>)}</ul>
        <a className="text-link" href="#contato">Informações sobre {practice.title === "Direito Previdenciário" ? "Direito Previdenciário" : "Direito do Trabalho"}<ArrowRight size={16} aria-hidden="true" /></a>
      </article>)}</div>
      <p className="practice-disclaimer">Os temas acima são informativos. A disponibilidade de atendimento e a pertinência de cada demanda devem ser confirmadas diretamente com a profissional.</p>
    </div>
  </section>
}

export function LegalInformation() {
  return <section className="legal-info section-pad" id="duvidas">
    <div className="wrap"><div className="section-heading legal-heading"><div><p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> CONTEÚDO INFORMATIVO</p><h2>Informações sobre<br /><em>seus direitos.</em></h2></div><p>Respostas iniciais para dúvidas frequentes. A aplicação das regras depende dos fatos e documentos de cada situação.</p></div>
      <div className="quick-grid">{quickAnswers.map((item, index) => <a className="quick-card" href={item.href} key={item.question}><span className="quick-number">0{index + 1}</span><h3>{item.question}</h3><p>{item.answer}</p><span className="quick-more">Leia a resposta completa <ArrowUpRight size={14} aria-hidden="true" /></span></a>)}</div>
      <a className="text-link link-light" href="#perguntas">Todas as perguntas frequentes <ArrowDown size={15} aria-hidden="true" /></a>
    </div>
  </section>
}

export function AboutSection() {
  return <section className="about section-pad" id="sobre">
    <div className="wrap about-grid"><div className="about-visual"><span className="about-orbit orbit-one"/><span className="about-orbit orbit-two"/><div className="about-placeholder-title">Uma apresentação<br /><em>feita por você.</em></div><span className="about-caption">ESPAÇO PARA FOTOGRAFIA<br />PROFISSIONAL</span></div>
      <div className="about-copy"><p className="eyebrow"><span className="eyebrow-line" /> SOBRE</p><h2>Virgínia Pereira</h2><p className="about-role">Advogada | Direito Previdenciário e Direito do Trabalho</p><p>Virgínia Pereira atua nas áreas de Direito Previdenciário e Direito do Trabalho, oferecendo orientação e acompanhamento jurídico em demandas relacionadas à proteção social e às relações de trabalho.</p><p className="about-note">Informações sobre inscrição na OAB, formação, cidade de atuação e atendimento serão incluídas após confirmação pela profissional.</p><div className="about-facts">{oabLabel && <span>OAB {oabLabel}</span>}{publicLocation && <span><MapPin size={14} aria-hidden="true" /> {publicLocation}</span>}{siteConfig.email && <a href={`mailto:${siteConfig.email}`}><Mail size={14} aria-hidden="true" /> {siteConfig.email}</a>}{siteConfig.phone && <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}><Clock3 size={14} aria-hidden="true" /> {siteConfig.phone}</a>}</div></div>
    </div>
  </section>
}

export function ContactProcess() {
  const steps = [
    ["01", "Entre em contato", "Utilize um dos canais informados para apresentar, de maneira inicial, o assunto sobre o qual deseja orientação."],
    ["02", "Apresente sua demanda", "As informações compartilhadas permitem identificar o tema e orientar os próximos passos de comunicação."],
    ["03", "Receba orientações sobre o atendimento", "Conforme a natureza da demanda, serão esclarecidos os procedimentos para a análise jurídica individualizada."],
  ]
  return <section className="process section-pad"><div className="wrap"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> PRIMEIROS PASSOS</p><h2>Como iniciar seu contato</h2></div><p>Um primeiro contato ajuda a entender o assunto e indicar como a comunicação pode seguir.</p></div><div className="steps-grid">{steps.map(([number, title, text]) => <article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div><p className="process-note">O envio de uma mensagem não constitui automaticamente uma relação advogado-cliente.</p></div></section>
}

export function FaqSection() {
  return <section className="faq section-pad" id="perguntas"><div className="wrap faq-grid"><div className="faq-intro"><p className="eyebrow"><span className="eyebrow-line" /> DÚVIDAS FREQUENTES</p><h2>Informação clara<br />para <em>seguir em frente.</em></h2><p>Conteúdo geral, sujeito a alterações na legislação e à análise dos fatos de cada caso.</p></div><div className="faq-list">{faqs.map((faq) => <details className="faq-item" id={faq.id} key={faq.id}><summary>{faq.question}<span aria-hidden="true" /></summary><div className="faq-answer"><p>{faq.answer}</p>{"source" in faq && faq.source && <a href={faq.source} target="_blank" rel="noreferrer">Consultar fonte oficial <ArrowUpRight size={13} aria-hidden="true" /></a>}</div></details>)}</div></div></section>
}

export function ContactSection() {
  const whatsappHref = siteConfig.whatsapp ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}` : null
  const channelsAvailable = Boolean(whatsappHref || siteConfig.email || siteConfig.phone)
  return <section className="contact section-pad" id="contato"><div className="wrap contact-grid"><div className="contact-copy"><p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> CONTATO</p><h2>Vamos conversar<br /><em>com tranquilidade.</em></h2><p>Para informações sobre atendimento nas áreas de Direito Previdenciário e Direito do Trabalho, utilize os canais disponíveis.</p>{publicLocation && <p className="contact-location"><MapPin size={16} aria-hidden="true" /> {publicLocation}</p>}</div>
      <div className="contact-card"><span className="contact-card-label">INFORMAÇÕES DE ATENDIMENTO</span>{channelsAvailable ? <div className="channel-list">{whatsappHref && <a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></a>}{siteConfig.email && <a href={`mailto:${siteConfig.email}`}>E-mail <ArrowUpRight size={16} aria-hidden="true" /></a>}{siteConfig.phone && <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>Telefone <ArrowUpRight size={16} aria-hidden="true" /></a>}</div> : <><p className="contact-pending">Os canais de contato serão publicados após confirmação dos dados profissionais.</p><span className="pending-badge">CANAIS EM CONFIGURAÇÃO</span></>}<p className="contact-privacy">Por privacidade, não envie documentos pessoais ou informações sensíveis em uma primeira mensagem.</p></div>
    </div></section>
}

export function ContactNotice() {
  return <p className="sr-only">As informações desta página são gerais e não substituem orientação jurídica individual.</p>
}
