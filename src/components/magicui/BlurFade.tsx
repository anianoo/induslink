import { ReactNode } from "react"
import { motion } from "motion/react"

export function BlurFade({
  children,
  delay = 0,
  y = 12,
  blur = 10,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  blur?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

