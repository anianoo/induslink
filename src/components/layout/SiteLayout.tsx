import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { FloatingCta } from "@/components/layout/FloatingCta"
import { PageTransition } from "@/components/motion/PageTransition"
import { BootLoader } from "@/components/motion/BootLoader"
import { RouteProgress } from "@/components/motion/RouteProgress"
import { images } from "@/content/images"

export function SiteLayout() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.pathname])

  return (
    <div className="min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* 尺寸：≥2400x1600（背景铺满），WebP 优先 */}
        <img src={images.siteBackground.url} alt={images.siteBackground.alt} className="h-full w-full object-cover opacity-[0.14]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.75),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.55),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(246,247,249,0.88),rgba(246,247,249,0.96),rgba(246,247,249,0.99))]" />
      </div>
      <BootLoader />
      <RouteProgress routeKey={location.pathname} />
      <SiteHeader />
      <PageTransition routeKey={location.pathname}>
        <Outlet />
      </PageTransition>
      <FloatingCta />
      <SiteFooter />
    </div>
  )
}

