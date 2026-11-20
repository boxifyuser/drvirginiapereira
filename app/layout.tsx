import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, DM_Sans } from "next/font/google"
import { ConsentAndAnalytics } from "@/components/consent-and-analytics"
import { createMetadata } from "@/lib/seo"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-sans", display: "swap" })
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-editorial",
  display: "swap",
})

export const metadata: Metadata = createMetadata()

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#36011B",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} ${cormorant.variable}`}>
        {children}
        <ConsentAndAnalytics />
      </body>
    </html>
  )
}
