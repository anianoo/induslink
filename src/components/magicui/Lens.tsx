import { Children, ReactElement, useMemo, useRef, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type Position = { x: number; y: number }

export function Lens({
  children,
  className,
  lensClassName,
  zoom = 1.8,
  size = 180,
  isStatic,
  position,
}: {
  children: ReactElement
  className?: string
  lensClassName?: string
  zoom?: number
  size?: number
  isStatic?: boolean
  position?: Position
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(false)
  const [pos, setPos] = useState<Position>({ x: 0, y: 0 })

  const child = useMemo(() => {
    const only = Children.only(children)
    return only
  }, [children])

  const resolvedPos = isStatic && position ? position : pos

  const updatePosition = (clientX: number, clientY: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left))
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top))
    setPos({ x, y })
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={(e) => updatePosition(e.clientX, e.clientY)}
      onTouchStart={(e) => {
        const t = e.touches.item(0)
        if (!t) return
        setActive(true)
        updatePosition(t.clientX, t.clientY)
      }}
      onTouchMove={(e) => {
        const t = e.touches.item(0)
        if (!t) return
        updatePosition(t.clientX, t.clientY)
      }}
      onTouchEnd={() => setActive(false)}
    >
      {child}

      <motion.div
        className={cn(
          "pointer-events-none absolute left-0 top-0 hidden rounded-full border border-white/50 bg-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm md:block",
          lensClassName,
        )}
        initial={false}
        animate={{
          opacity: active || isStatic ? 1 : 0,
          scale: active || isStatic ? 1 : 0.92,
          x: resolvedPos.x - size / 2,
          y: resolvedPos.y - size / 2,
        }}
        transition={{
          opacity: { duration: 0.12 },
          scale: { duration: 0.12, ease: [0.22, 1, 0.36, 1] },
          x: { type: "tween", duration: 0.01 },
          y: { type: "tween", duration: 0.01 },
        }}
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div
            className="absolute left-0 top-0"
            style={{
              width: "100%",
              height: "100%",
              transform: `translate(${(-resolvedPos.x * zoom + size / 2)}px, ${(-resolvedPos.y * zoom + size / 2)}px) scale(${zoom})`,
              transformOrigin: "top left",
              willChange: "transform",
            }}
          >
            {child}
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--accent),0.12),transparent_55%)]" />
        </div>
      </motion.div>
    </div>
  )
}

