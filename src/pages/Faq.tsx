import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { faq } from "@/content/faq"
import { site } from "@/content/site"
import { images } from "@/content/images"
import { cn } from "@/lib/utils"

export default function Faq() {
  const [open, setOpen] = useState<string | null>(faq[0]?.q ?? null)
  return (
    <div>
      <Seo title={`常见问题｜${site.name}`} description="关于运维、安装施工、程序设计交付与应急保障的常见问题。" />
      <PageHeader title="常见问题" subtitle="以常见沟通点组织问题，便于快速对齐交付范围与资料要求。" imageUrl={images.serviceHero.url} imageAlt={images.serviceHero.alt} />

      <Section title="问题列表" subtitle="点击展开查看答案。">
        <div className="rounded-2xl border border-slate-200 bg-white">
          {faq.map((it) => {
            const isOpen = open === it.q
            return (
              <div key={it.q} className="border-b border-slate-200 last:border-b-0">
                <button
                  type="button"
                  className="focus-ring flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : it.q)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{it.q}</div>
                    <div className={cn("mt-2 text-sm leading-6 text-slate-700", !isOpen && "hidden")}>{it.a}</div>
                  </div>
                  <ChevronDown className={cn("mt-0.5 h-5 w-5 text-slate-500 transition", isOpen && "rotate-180")} />
                </button>
              </div>
            )
          })}
        </div>
      </Section>
    </div>
  )
}

