import { useEffect, useMemo, useRef, useState } from "react"
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from "motion/react"
import { cn } from "@/lib/utils"

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v))
}

function useContainerProgress(containerRef: React.RefObject<HTMLDivElement | null>) {
  const progress = useMotionValue(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let raf = 0
    const update = () => {
      raf = 0
      const max = Math.max(1, el.scrollHeight - el.clientHeight)
      progress.set(clamp01(el.scrollTop / max))
    }

    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(update)
    }

    update()
    el.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      el.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [containerRef, progress])

  return progress
}

function useElementScrollProgress({
  containerRef,
  targetRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>
  targetRef: React.RefObject<HTMLElement | null>
}) {
  const progress = useMotionValue(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const target = targetRef.current
    if (!container || !target) return

    let raf = 0
    const update = () => {
      raf = 0
      const containerHeight = container.clientHeight
      const scrollTop = container.scrollTop
      const targetTop = (target as HTMLElement).offsetTop
      const targetHeight = (target as HTMLElement).offsetHeight

      const start = targetTop - containerHeight
      const end = targetTop + targetHeight
      const p = (scrollTop - start) / Math.max(1, end - start)
      progress.set(clamp01(p))
      setReady(true)
    }

    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(update)
    }

    update()
    container.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      container.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [containerRef, targetRef, progress])

  return { progress, ready }
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function Step({
  containerRef,
  k,
  title,
  desc,
  imageUrl,
  imageAlt,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>
  k: string
  title: string
  desc: string
  imageUrl: string
  imageAlt: string
}) {
  const ref = useRef<HTMLElement | null>(null)
  const { progress, ready } = useElementScrollProgress({ containerRef, targetRef: ref })
  const y = useParallax(progress, 220)

  return (
    <section
      ref={ref}
      className={cn(
        "snap-start",
        "relative flex min-h-[78vh] items-center justify-center py-8",
        "md:min-h-[82vh]",
      )}
    >
      <div className="relative grid w-full max-w-5xl items-center gap-8 px-4 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* 尺寸：1600x900（16:9）或更大，WebP 优先 */}
            <img src={imageUrl} alt={imageAlt} className="h-[380px] w-full object-cover md:h-[460px]" loading="lazy" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.42),transparent_55%)]" />
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-[rgb(var(--accent))]" />
              <div className="text-xs font-semibold tracking-[0.18em] text-slate-600">交付步骤</div>
            </div>
            <div className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</div>
            <div className="mt-3 text-sm leading-7 text-slate-600">{desc}</div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700">范围</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700">风险点</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700">交付物</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700">验收口径</span>
            </div>
          </div>
        </div>

        <motion.div
          className="pointer-events-none absolute right-6 top-6 hidden select-none font-mono text-[56px] font-bold tracking-tight text-[rgb(var(--accent-2))]/20 md:block"
          initial={{ visibility: "hidden" }}
          animate={{ visibility: ready ? "visible" : "hidden" }}
          style={{ y }}
        >
          {k}
        </motion.div>
      </div>
    </section>
  )
}

export function DeliveryParallax({
  steps,
  className,
}: {
  steps: {
    k: string
    title: string
    desc: string
    imageUrl: string
    imageAlt: string
  }[]
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const progress = useContainerProgress(containerRef)
  const scaleX = useSpring(progress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const items = useMemo(() => steps, [steps])

  return (
    <div className={cn("relative", className)}>
      <div
        ref={containerRef}
        className={cn(
          "h-[78vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white",
          "snap-y snap-mandatory scroll-smooth",
        )}
      >
        {items.map((s) => (
          <Step
            key={s.k}
            containerRef={containerRef}
            k={s.k}
            title={s.title}
            desc={s.desc}
            imageUrl={s.imageUrl}
            imageAlt={s.imageAlt}
          />
        ))}
        <div className="pointer-events-none sticky bottom-5 left-0 right-0 px-5">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
            <motion.div className="h-full origin-left bg-[rgb(var(--accent-2))]" style={{ scaleX }} />
          </div>
        </div>
      </div>
    </div>
  )
}

