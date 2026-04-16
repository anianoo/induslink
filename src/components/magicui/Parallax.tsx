import { ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

export function Parallax({
  children,
  className,
  offset = 24,
}: {
  children: ReactNode
  className?: string
  offset?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}

