import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const shareImageSize = { width: 1200, height: 630 }
export const shareImageContentType = "image/png"
export const shareImageAlt = "Virgínia Pereira | Advocacia Trabalhista"

export default async function ShareImage() {
  const logo = await readFile(join(process.cwd(), "LOGO SECUNDÁRIA_01.jpg"))
  const src = `data:image/jpeg;base64,${logo.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          background: "#36011B",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={1500} height={1500} alt="" />
      </div>
    ),
    shareImageSize,
  )
}
