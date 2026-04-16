import { ReactNode } from "react"
import { Reveal } from "@/components/motion/Reveal"
import { motion } from "motion/react"

export function Section({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section className="py-14 md:py-20">
      <div className="container px-4">
        <Reveal y={12}>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <motion.span
                className="h-px bg-[rgb(var(--accent))]"
                initial={{ width: 0, opacity: 0.4 }}
                whileInView={{ width: 40, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="text-xs font-semibold text-slate-600">概览</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
            {subtitle && <p className="max-w-3xl text-sm leading-7 text-slate-600 md:text-[15px]">{subtitle}</p>}
          </div>
        </Reveal>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}

