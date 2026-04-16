import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { site } from "@/content/site"

export function BootLoader({ minDurationMs = 700 }: { minDurationMs?: number }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), minDurationMs)
    return () => window.clearTimeout(t)
  }, [minDurationMs])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full max-w-md px-6">
            <div className="text-xs font-semibold text-white/55">{site.shortName}</div>
            <div className="mt-2 text-2xl font-semibold tracking-tight text-white">工业现场电气服务</div>
            <div className="mt-6 h-px w-full overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-[rgb(var(--accent))]"
                initial={{ x: "-40%", width: "40%" }}
                animate={{ x: "140%" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
