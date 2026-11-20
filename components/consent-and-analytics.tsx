"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { analyticsConfigured, siteConfig } from "@/lib/site-config"

type Consent = "granted" | "denied"

export function ConsentAndAnalytics() {
  const [consent, setConsent] = useState<Consent | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem("vp-consent")
    if (saved === "granted" || saved === "denied") setConsent(saved)
    setReady(true)
  }, [])

  useEffect(() => {
    document.body.classList.toggle("has-cookie", ready && analyticsConfigured && consent === null)
  }, [consent, ready])

  const gaId = /^G-[A-Z0-9]+$/.test(siteConfig.gaId) ? siteConfig.gaId : ""
  const gtmId = /^GTM-[A-Z0-9]+$/.test(siteConfig.gtmId) ? siteConfig.gtmId : ""
  if (!analyticsConfigured || (!gaId && !gtmId)) return null

  function choose(value: Consent) {
    window.localStorage.setItem("vp-consent", value)
    setConsent(value)
  }

  return (
    <>
      {consent === "granted" && gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {consent === "granted" && gtmId && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      )}
      {ready && consent === null && (
        <div className="cookie-banner" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-text">
          <div className="cookie-inner">
            <div>
              <p id="cookie-title">Métricas de audiência</p>
              <p id="cookie-text">As ferramentas de analytics só são carregadas se você autorizar. Nenhuma mensagem de contato é enviada a essas ferramentas.</p>
            </div>
            <div className="cookie-actions">
              <button type="button" onClick={() => choose("denied")}>
                Recusar
              </button>
              <button type="button" onClick={() => choose("granted")}>
                Aceitar métricas
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
