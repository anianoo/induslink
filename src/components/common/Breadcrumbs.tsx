import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export type BreadcrumbItem = { label: string; to?: string }

export function Breadcrumbs({ items, className }: { items: BreadcrumbItem[]; className?: string }) {
  return (
    <nav className={cn("flex flex-wrap items-center gap-1 text-xs text-slate-500", className)} aria-label="面包屑">
      {items.map((it, idx) => (
        <span key={`${it.label}-${idx}`} className="inline-flex items-center gap-1">
          {idx !== 0 && <ChevronRight className="h-3.5 w-3.5" />}
          {it.to ? (
            <Link className="focus-ring rounded px-1 py-0.5 hover:bg-slate-100" to={it.to}>
              {it.label}
            </Link>
          ) : (
            <span className="px-1 py-0.5">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

