import { ReactNode } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export function TextAnimateLine({
  children,
  className,
  trigger = "view",
  delay = 0,
  y = 10,
  blur = 10,
  duration = 0.45,
}: {
  children: ReactNode
  className?: string
  trigger?: "view" | "mount"
  delay?: number
  y?: number
  blur?: number
  duration?: number
}) {
  return (
    <span className={cn("inline-block overflow-hidden align-bottom", className)}>
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
        animate={trigger === "mount" ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
        whileInView={trigger === "view" ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
        viewport={trigger === "view" ? { once: true, amount: 0.8 } : undefined}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: "transform, opacity, filter" }}
      >
        {children}
      </motion.span>
    </span>
  )
}

