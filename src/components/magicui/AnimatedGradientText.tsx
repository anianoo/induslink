import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span className={cn("relative inline-block", className)}>
      <span className="text-[rgb(var(--accent))]">{children}</span>
      <span
        aria-hidden
        className={
          "pointer-events-none absolute inset-0 block bg-[linear-gradient(90deg,rgba(var(--accent),1),rgba(var(--accent-2),1),rgba(var(--accent),1))] bg-[length:200%_100%] bg-clip-text text-transparent [animation:gradient-move_4.8s_ease_infinite]"
        }
        style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
      >
        {children}
      </span>
    </span>
  )
}
