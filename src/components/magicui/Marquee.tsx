import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Marquee({
  items,
  className,
  itemClassName,
  reverse,
  pauseOnHover = true,
  durationSeconds = 26,
}: {
  items: ReactNode[]
  className?: string
  itemClassName?: string
  reverse?: boolean
  pauseOnHover?: boolean
  durationSeconds?: number
}) {
  const content = [...items, ...items]
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max items-stretch gap-4",
          reverse ? "[animation-direction:reverse]" : "[animation-direction:normal]",
          pauseOnHover && "hover:[animation-play-state:paused]",
          "[animation-name:marquee] [animation-timing-function:linear] [animation-iteration-count:infinite]",
        )}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {content.map((node, idx) => (
          <div key={idx} className={cn("flex shrink-0 items-stretch", itemClassName)}>
            {node}
          </div>
        ))}
      </div>
    </div>
  )
}
