import type { ReactNode } from "react"
import Link from "next/link"
import { BreadcrumbData } from "@/components/structured-data"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { contentMeta } from "@/lib/content"

export function LegalShell({
  title,
  eyebrow,
  path,
  children,
}: {
  title: string
  eyebrow: string
  path: string
  children: ReactNode
}) {
  return (
    <>
      <BreadcrumbData
        items={[
          { name: "Início", path: "/" },
          { name: title, path },
        ]}
      />
      <SiteHeader />
      <main className="policy-page" id="conteudo">
        <article className="policy-wrap">
          <Link className="text-link" href="/">
            Voltar ao início
          </Link>
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1>{title}</h1>
          <p className="policy-date">Texto informativo atualizado em {contentMeta.reviewedAt}. Revisão jurídica pendente antes da publicação.</p>
          {children}
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
