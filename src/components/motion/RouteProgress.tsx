import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

export function RouteProgress({ routeKey }: { routeKey: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const t = window.setTimeout(() => setVisible(false), 650)
    return () => window.clearTimeout(t)
  }, [routeKey])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[55] h-0.5 w-full origin-left bg-[rgb(var(--accent))]"
          initial={{ scaleX: 0, opacity: 0.9 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </AnimatePresence>
  )
}
