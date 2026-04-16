import { ReactNode, useMemo } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type By = "character" | "word"

function splitByWord(text: string) {
  const parts = text.split(/(\s+)/)
  return parts.filter((p) => p.length > 0)
}

function splitByCharacter(text: string) {
  return Array.from(text)
}

export function TextAnimate({
  children,
  className,
  tokenClassName,
  by = "character",
  stagger = 0.03,
  delay = 0,
  trigger = "view",
  blur = 12,
  y = 14,
  duration = 0.5,
}: {
  children: ReactNode
  className?: string
  tokenClassName?: string
  by?: By
  stagger?: number
  delay?: number
  trigger?: "view" | "mount"
  blur?: number
  y?: number
  duration?: number
}) {
  const text = typeof children === "string" ? children : ""

  const tokens = useMemo(() => {
    if (by === "word") {
      const parts = splitByWord(text)
      if (parts.length > 1) return parts
      return splitByCharacter(text)
    }
    return splitByCharacter(text)
  }, [by, text])

  return (
    <motion.span
      className={cn("inline", className)}
      initial="hidden"
      animate={trigger === "mount" ? "show" : undefined}
      whileInView={trigger === "view" ? "show" : undefined}
      viewport={trigger === "view" ? { once: true, amount: 0.65 } : undefined}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {tokens.map((t, i) => (
        <motion.span
          key={`${i}-${t}`}
          className={cn("inline-block whitespace-pre", tokenClassName)}
          custom={i}
          variants={{
            hidden: { opacity: 0, y, filter: `blur(${blur}px)` },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {t}
        </motion.span>
      ))}
    </motion.span>
  )
}

