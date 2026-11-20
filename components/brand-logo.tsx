import Image from "next/image"
import { logoAssets, type LogoVariant } from "@/lib/brand"

export function BrandLogo({ variant, priority = false }: { variant: LogoVariant; priority?: boolean }) {
  const logo = logoAssets[variant]

  return (
    <span className={`logo-frame logo-frame-${variant}`} style={{ aspectRatio: logo.ratio }}>
      <Image
        src={logo.src}
        alt={variant === "header" || variant === "footer" ? "" : logo.label}
        priority={priority}
        sizes={variant === "header" || variant === "footer" ? "280px" : "(max-width: 720px) 88vw, 520px"}
        className="logo-bitmap"
        style={{
          position: "absolute",
          width: `${logo.scale}%`,
          maxWidth: "none",
          height: "auto",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </span>
  )
}
