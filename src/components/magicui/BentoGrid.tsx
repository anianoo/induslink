import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[18rem]", className)}>
      {children}
    </div>
  )
}

export function BentoCard({
  Icon,
  name,
  description,
  href,
  cta,
  className,
  background,
}: {
  Icon: React.ComponentType<{ className?: string }>
  name: string
  description: string
  href: string
  cta: string
  className?: string
  background?: ReactNode
}) {
  return (
    <Link
      to={href}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition",
        "hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--accent),0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(var(--accent-2),0.10),transparent_55%)]" />
      </div>
      {background && <div className="pointer-events-none absolute inset-0">{background}</div>}

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Icon className="h-4 w-4" />
            </div>
            <div className="mt-4 text-sm font-semibold text-slate-900">{name}</div>
            <div className="mt-2 text-xs leading-6 text-slate-600">{description}</div>
          </div>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[rgb(var(--accent))]">
          {cta}
          <span className="transition group-hover:translate-x-0.5">→</span>
        </div>
      </div>
    </Link>
  )
}

