import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/motion/Reveal"
import { Parallax } from "@/components/magicui/Parallax"
import { motion } from "motion/react"

export function PageHeader({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  actions,
}: {
  title: string
  subtitle?: string
  imageUrl?: string
  imageAlt?: string
  actions?: ReactNode
}) {
  return (
    <section className="relative border-b border-slate-200 bg-white">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(0,0,0,0.06)_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="container px-4">
        <div className="relative grid gap-6 py-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-7" y={10}>
            <div>
              <div className="flex items-center gap-3">
                <motion.span
                  className="h-px bg-[rgb(var(--accent))]"
                  initial={{ width: 0, opacity: 0.4 }}
                  whileInView={{ width: 40, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <span className="text-xs font-semibold text-slate-600">页面</span>
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h1>
              {subtitle && <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-[15px]">{subtitle}</p>}
              {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
            </div>
          </Reveal>
          <div className={cn("md:col-span-5", !imageUrl && "hidden md:block")}>
            {imageUrl && (
              <Reveal y={10} delay={0.06}>
                <div className="overflow-hidden border border-slate-200 bg-slate-100">
                  <Parallax offset={18}>
                    {/* 尺寸：1600x900（16:9）或 1920x480（横幅），WebP 优先 */}
                    <img src={imageUrl} alt={imageAlt ?? ""} className="h-52 w-full object-cover md:h-64" />
                  </Parallax>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

