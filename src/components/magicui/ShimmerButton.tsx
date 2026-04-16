import { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export function ShimmerButton({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[rgb(var(--accent))] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95",
        "before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)] before:[animation:shimmer_2.2s_ease_infinite]",
        className,
      )}
    >
      <span className="relative z-10 inline-flex items-center">{children}</span>
    </button>
  )
}

