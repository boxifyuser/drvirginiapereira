import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, DM_Sans } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/lib/site-config"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-editorial", display: "swap" })

const description =
  "Conheça a atuação de Virgínia Pereira em Direito Previdenciário e Direito do Trabalho. Informações sobre direitos, benefícios do INSS e relações trabalhistas."

export const metadata: Metadata = {
  title: "Virgínia Pereira | Advocacia Previdenciária e Trabalhista",
  description,
  metadataBase: siteConfig.domain ? new URL(siteConfig.domain) : undefined,
  alternates: siteConfig.domain ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Virgínia Pereira | Advocacia Previdenciária e Trabalhista",
    description,
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: "summary",
    title: "Virgínia Pereira | Advocacia Previdenciária e Trabalhista",
    description,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#36011B",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  )
}
