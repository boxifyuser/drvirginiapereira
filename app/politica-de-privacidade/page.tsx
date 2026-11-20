import Link from "next/link"

export const metadata = {
  title: "Política de Privacidade | Virgínia Pereira",
  description: "Informações sobre privacidade e tratamento de dados neste site institucional.",
}

export default function PrivacyPolicyPage() {
  return <main className="policy-page">
    <div className="policy-wrap">
      <Link className="text-link" href="/">← Voltar ao início</Link>
      <p className="eyebrow"><span className="eyebrow-line" /> PRIVACIDADE</p>
      <h1>Política de Privacidade</h1>
      <p className="policy-date">Versão inicial — conteúdo a revisar antes da publicação.</p>
      <p>Este site institucional não solicita o envio de dados pessoais por formulário. Os canais diretos de contato serão disponibilizados somente após configuração e confirmação pela profissional.</p>
      <h2>Dados fornecidos em contato</h2>
      <p>Se você iniciar contato por telefone, e-mail ou outro canal que venha a ser informado, os dados compartilhados serão tratados para responder à sua solicitação e avaliar os próximos passos de comunicação, observadas as obrigações legais e profissionais aplicáveis. Evite enviar dados sensíveis ou documentos em uma mensagem inicial.</p>
      <h2>Cookies e métricas</h2>
      <p>Não há neste momento ferramentas opcionais de analytics ou publicidade configuradas neste site. Caso sejam adicionadas, esta política deverá ser atualizada e as escolhas de consentimento aplicáveis serão respeitadas.</p>
      <h2>Segurança e direitos</h2>
      <p>Medidas técnicas razoáveis são adotadas para proteger a navegação. Para solicitações relacionadas a dados pessoais, utilize os canais profissionais quando forem publicados nesta página.</p>
      <p className="policy-review">Esta página contém informações gerais e deve ser revisada pela responsável pelo tratamento antes da publicação definitiva.</p>
    </div>
  </main>
}
