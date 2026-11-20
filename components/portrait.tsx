import Image from "next/image"

export function Portrait({ src, priority = false, className = "portrait" }: { src: string; priority?: boolean; className?: string }) {
  return (
    <Image
      className={className}
      src={src}
      alt="Virgínia Pereira, advogada"
      width={960}
      height={1200}
      priority={priority}
      unoptimized={src.startsWith("http")}
      sizes="(max-width: 760px) 100vw, 480px"
    />
  )
}
