import type { Metadata } from "next"
import { LegalShell } from "@/components/legal-shell"
import { createMetadata } from "@/lib/seo"

export const metadata: Metadata = createMetadata({
  title: "Termos de Uso | Virgínia Pereira",
  description: "Condições de uso do site institucional de Virgínia Pereira e limites do conteúdo informativo.",
  path: "/termos-de-uso",
})

export default function TermsPage() {
  return (
    <LegalShell title="Termos de Uso" eyebrow="Institucional" path="/termos-de-uso">
      <p>
        Este site apresenta informações institucionais sobre a atuação de Virgínia Pereira em Direito do Trabalho. A navegação é gratuita e não exige cadastro.
      </p>
      <h2>Conteúdo informativo</h2>
      <p>
        Os textos explicam regras gerais e não consideram documentos, prazos ou fatos de uma pessoa específica. Eles não são parecer, não garantem direito a verba ou indenização e não substituem uma análise jurídica individual.
      </p>
      <h2>Contato</h2>
      <p>
        Enviar o formulário, uma mensagem de WhatsApp ou um e-mail não cria, por si só, relação advogado-cliente. A atuação profissional depende de contato posterior e de confirmação da advogada. Evite incluir dados sensíveis na primeira mensagem.
      </p>
      <h2>Marca e links</h2>
      <p>
        A identidade visual, os textos e a organização deste site destinam-se à apresentação profissional de Virgínia Pereira. Links para legislação e portais oficiais levam a páginas de terceiros, que podem ser alteradas sem aviso.
      </p>
      <p className="policy-review">Estes termos devem ser lidos em conjunto com a Política de Privacidade e revisados antes da publicação.</p>
    </LegalShell>
  )
}
