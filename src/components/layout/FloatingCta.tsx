import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ArrowUp, MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url)
}

export function FloatingCta({
  className,
  href,
  label,
}: {
  className?: string
  href?: string
  label?: string
}) {
  const resolvedHref = href ?? import.meta.env.VITE_FLOATING_CTA_URL ?? "https://ceshi.yuejoy.com/contact"
  const resolvedLabel = label ?? import.meta.env.VITE_FLOATING_CTA_TEXT ?? "联系我们"
  const resolvedQrUrl = import.meta.env.VITE_FLOATING_CTA_QR_URL ?? "https://fastlink.cokey.xyz/f/W7xET8/316ad53d6e2d6185f8bc7ac624fa9d91.jpg"

  const external = useMemo(() => isExternalUrl(resolvedHref), [resolvedHref])
  const [tipOpen, setTipOpen] = useState(false)

  useEffect(() => {
    const key = "induslink:floating-cta-tip-dismissed"
    if (window.localStorage.getItem(key) === "1") return

    const t = window.setTimeout(() => setTipOpen(true), 900)
    return () => window.clearTimeout(t)
  }, [])

  const dismissTip = () => {
    const key = "induslink:floating-cta-tip-dismissed"
    window.localStorage.setItem(key, "1")
    setTipOpen(false)
  }

  return (
    <motion.div
      className={cn(
        "fixed z-[45]",
        "bottom-[calc(env(safe-area-inset-bottom)+26px)] right-[calc(env(safe-area-inset-right)+18px)]",
        className,
      )}
      initial={{ opacity: 0, scale: 0.92, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-end">
      <AnimatePresence>
        {tipOpen && (
          <motion.div
            className="mb-3 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative p-3">
              <div className="mb-2 flex items-center justify-between">
                <div className="text-xs font-semibold text-slate-700">客服微信</div>
                <button
                  type="button"
                  className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-900/90 text-white shadow-sm hover:bg-slate-900"
                  onClick={dismissTip}
                  aria-label="关闭"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="aspect-square w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
                <img src={resolvedQrUrl} alt="客服微信二维码" className="h-full w-full object-contain" loading="lazy" />
              </div>
              <div className="mt-2 text-center text-xs font-semibold text-slate-700">添加客服微信了解更多</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-end gap-2">
        <a
          href={resolvedHref}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="focus-ring relative block"
        >
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -inset-3 rounded-full bg-[rgb(var(--accent))]/15 blur-xl"
            animate={{ opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="pointer-events-none absolute -inset-1 rounded-full bg-[rgb(var(--accent))]/10" aria-hidden />

          <span className="relative inline-flex h-11 items-center gap-2 rounded-full bg-[rgb(var(--accent))] px-4 text-white shadow-lg shadow-[rgba(0,0,0,0.25)] transition hover:brightness-95">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15" aria-hidden>
              <MessageCircle className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold tracking-tight">{resolvedLabel}</span>
          </span>
        </a>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg shadow-[rgba(0,0,0,0.14)] transition hover:bg-slate-50"
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
          aria-label="返回顶部"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
      </div>
    </motion.div>
  )
}

