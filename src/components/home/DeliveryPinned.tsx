import { useEffect, useMemo, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "motion/react"
import type { MotionValue } from "motion/react"
import { cn } from "@/lib/utils"

function useViewportHeight() {
  const [vh, setVh] = useState(() => {
    if (typeof window === "undefined") return 800
    return window.visualViewport?.height ?? window.innerHeight
  })

  useEffect(() => {
    const onResize = () => setVh(window.visualViewport?.height ?? window.innerHeight)
    onResize()
    window.addEventListener("resize", onResize)
    window.visualViewport?.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
      window.visualViewport?.removeEventListener("resize", onResize)
    }
  }, [])

  return vh
}

function DeliveryPinnedSlide({
  step,
  idx,
  total,
  progress,
}: {
  step: {
    k: string
    title: string
    desc: string
    imageUrl: string
    imageAlt: string
    tags?: string[]
  }
  idx: number
  total: number
  progress: MotionValue<number>
}) {
  const segment = 1 / Math.max(1, total - 1)
  const start = idx === 0 ? 0 : (idx - 1) * segment
  const end = idx === 0 ? 0 : idx * segment

  const inProgress = useTransform(progress, (v) => {
    if (idx === 0) return 1
    const denom = end - start
    if (denom <= 0) return 1
    const t = (v - start) / denom
    return Math.max(0, Math.min(1, t))
  })
  const opacity = useTransform(inProgress, [0, 1], [0.35, 1])
  const xNumber = useTransform(inProgress, [0, 1], [-110, 0])
  const xLeft = useTransform(inProgress, [0, 1], [-72, 0])
  const xDesc = useTransform(inProgress, [0, 1], [-54, 0])
  const xTags = useTransform(inProgress, [0, 1], [-42, 0])
  const xRight = useTransform(inProgress, [0, 1], [72, 0])

  return (
    <div className="relative h-[100svh]">
      <img src={step.imageUrl} alt={step.imageAlt} className="absolute inset-0 h-full w-full object-cover opacity-70" loading="lazy" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88),rgba(2,6,23,0.50),rgba(2,6,23,0.86))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.95),transparent_50%)]" />

      <div className="relative z-10 flex h-full items-end">
        <div className="container px-4 pb-[clamp(3rem,7vh,4.5rem)] pt-[clamp(6.5rem,14vh,9.5rem)]">
          <div className="grid items-center gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <motion.div style={{ x: xNumber, opacity }} className="font-semibold tracking-tight text-white/15 text-[clamp(3.25rem,8vw,4.75rem)]">
                {step.k}
              </motion.div>
              <motion.div style={{ x: xLeft, opacity }} className="mt-2 font-semibold tracking-tight text-white text-[clamp(1.55rem,3.4vw,2.25rem)]">
                {step.title}
              </motion.div>
              <motion.div style={{ x: xDesc, opacity }} className="mt-3 max-w-2xl leading-7 text-white/70 text-[clamp(0.9rem,1.2vw,1rem)]">
                {step.desc}
              </motion.div>
              {step.tags && step.tags.length > 0 && (
                <motion.div style={{ x: xTags, opacity }} className="mt-5 flex flex-wrap gap-2">
                  {step.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/75 backdrop-blur">
                      {t}
                    </span>
                  ))}
                </motion.div>
              )}
            </div>
            <div className="hidden md:col-span-5 md:block">
              <motion.div style={{ x: xRight, opacity }} className="rounded-3xl bg-white/5 p-5 backdrop-blur">
                <div className="text-xs font-semibold tracking-[0.18em] text-white/60">交付物提示</div>
                <div className="mt-3 grid gap-2 text-xs text-white/70">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span>清单化交付</span>
                    <span className="font-semibold text-white">可审阅</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span>节点可验收</span>
                    <span className="font-semibold text-white">可追溯</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span>过程有记录</span>
                    <span className="font-semibold text-white">可复盘</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DeliveryPinned({
  title,
  subtitle,
  steps,
  className,
}: {
  title: string
  subtitle?: string
  steps: {
    k: string
    title: string
    desc: string
    imageUrl: string
    imageAlt: string
    tags?: string[]
  }[]
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const vh = useViewportHeight()
  const items = useMemo(() => steps, [steps])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const totalShift = Math.max(0, (items.length - 1) * vh)
  const yRaw = useTransform(scrollYProgress, [0, 1], [0, -totalShift])
  const y = useSpring(yRaw, { stiffness: 140, damping: 26, mass: 0.6 })
  const visualProgress = useTransform(y, [0, -totalShift], [0, 1])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let locked = false
    let lastAt = 0

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 6) return
      const now = performance.now()
      if (locked || now - lastAt < 520) return

      const viewportH = window.visualViewport?.height ?? window.innerHeight
      const rect = el.getBoundingClientRect()
      const inPinned = rect.top <= 0 && rect.bottom >= viewportH
      if (!inPinned) return

      const top = window.scrollY + rect.top
      const maxIndex = Math.max(0, items.length - 1)
      const rawIndex = (window.scrollY - top) / Math.max(1, viewportH)
      const idx = Math.round(rawIndex)
      const dir = e.deltaY > 0 ? 1 : -1
      const next = Math.max(0, Math.min(maxIndex, idx + dir))

      if ((dir < 0 && idx <= 0) || (dir > 0 && idx >= maxIndex)) return

      e.preventDefault()
      lastAt = now
      locked = true
      window.scrollTo({ top: top + next * viewportH, behavior: "smooth" })
      window.setTimeout(() => {
        locked = false
      }, 560)
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    return () => window.removeEventListener("wheel", onWheel)
  }, [items.length])

  return (
    <section ref={ref} className={cn("relative", className)} style={{ height: `${items.length * 100}svh` }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(var(--accent),0.30),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(var(--accent-2),0.26),transparent_55%)]" />

        <div className="absolute inset-x-0 top-0 z-20">
          <div className="bg-[linear-gradient(to_bottom,rgba(2,6,23,0.94),rgba(2,6,23,0.72),rgba(2,6,23,0.30),transparent)] backdrop-blur">
            <div
              className="container px-4 pb-8"
              style={{
                paddingTop: "calc(env(safe-area-inset-top) + 24px)",
              }}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/75">
                <span className="h-px w-8 bg-[rgb(var(--accent))]" />
                {title}
              </div>
              {subtitle && <div className="mt-3 max-w-3xl text-sm leading-7 text-white/70 md:text-[15px]">{subtitle}</div>}
            </div>
          </div>
        </div>

        <motion.div className="absolute inset-0 will-change-transform" style={{ y }}>
          {items.map((s, idx) => (
            <DeliveryPinnedSlide key={s.k} step={s} idx={idx} total={items.length} progress={visualProgress} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

