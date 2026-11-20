import type { Metadata } from "next"
import { LegalShell } from "@/components/legal-shell"
import { createMetadata } from "@/lib/seo"

export const metadata: Metadata = createMetadata({
  title: "Política de Privacidade | Virgínia Pereira",
  description: "Informações sobre privacidade, cookies e tratamento de dados neste site institucional.",
  path: "/politica-de-privacidade",
})

export default function PrivacyPolicyPage() {
  return (
    <LegalShell title="Política de Privacidade" eyebrow="Privacidade" path="/politica-de-privacidade">
      <p>
        Esta página explica, em linguagem direta, como o site institucional de Virgínia Pereira trata dados pessoais. O texto descreve a estrutura técnica já implementada e deve ser revisado pela responsável pelo tratamento antes da publicação definitiva.
      </p>
      <h2>Quem é responsável</h2>
      <p>
        A responsável pelo tratamento é Virgínia Pereira, advogada, assim que os dados profissionais de identificação e contato estiverem confirmados neste site. Enquanto inscrição na OAB, e-mail ou telefone não aparecerem na página, esses dados ainda não foram configurados.
      </p>
      <h2>Quais dados podem ser informados</h2>
      <p>
        O formulário de contato pede apenas nome, e-mail ou telefone, o tema trabalhista da dúvida e uma mensagem inicial. Não são solicitados CPF, documentos, dados de saúde ou o detalhamento do contrato nesse primeiro contato.
      </p>
      <p>
        Se o serviço de envio ainda não estiver configurado, a mensagem é validada apenas na memória da requisição e não é armazenada nem encaminhada. Quando a integração estiver ativa, o conteúdo será usado somente para responder ao contato e avaliar os próximos passos de comunicação.
      </p>
      <h2>Cookies e métricas</h2>
      <p>
        Não há cookies de analytics enquanto Google Analytics ou Google Tag Manager não estiverem configurados. Se esses identificadores forem adicionados, as tags permanecem bloqueadas até que a pessoa aceite as métricas de audiência. A recusa não impede a navegação. Eventos de contato, quando autorizados, registram apenas o tipo de clique ou o status do envio, sem o texto da mensagem.
      </p>
      <h2>Direitos</h2>
      <p>
        A pessoa titular pode solicitar confirmação, acesso, correção ou eliminação de dados tratados por meio deste site, além das demais hipóteses previstas na Lei Geral de Proteção de Dados. O pedido deve ser feito pelo canal oficial publicado na página de contato, quando disponível.
      </p>
      <p className="policy-review">Esta política é uma base operacional. Ela não substitui a revisão da advogada nem o registro das decisões de tratamento antes da publicação.</p>
    </LegalShell>
  )
}
