import type { StaticImageData } from "next/image"
import logoPrincipal from "../LOGO PRINCIPAL_01.jpg"
import logoHorizontalWine from "../LOGO SECUNDÁRIA_01.jpg"
import logoHorizontalBeige from "../LOGO SECUNDÁRIA_03.jpg"

export type LogoVariant = "header" | "footer" | "hero" | "about"

type LogoAsset = {
  src: StaticImageData
  /** Largura da imagem em relação ao quadro, para mostrar a marca inteira. */
  scale: number
  ratio: string
  label: string
}

/**
 * Os JPGs originais têm fundo chapado: vinho #36011B ou bege #E4DED2.
 * O recorte abaixo apenas enquadra a arte já existente. O fundo não é removido.
 * Para usar a marca sobre outras cores, são necessários PNG transparente ou SVG.
 */
export const logoAssets: Record<LogoVariant, LogoAsset> = {
  header: { src: logoHorizontalBeige, scale: 132, ratio: "1624 / 728", label: "Virgínia Pereira Advogada" },
  footer: { src: logoHorizontalWine, scale: 132, ratio: "1624 / 728", label: "Virgínia Pereira Advogada" },
  hero: { src: logoPrincipal, scale: 124, ratio: "1740 / 856", label: "Logotipo de Virgínia Pereira" },
  about: { src: logoPrincipal, scale: 124, ratio: "1740 / 856", label: "Logotipo de Virgínia Pereira" },
}
