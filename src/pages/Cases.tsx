import { useMemo, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { Reveal } from "@/components/motion/Reveal"
import { Stagger, StaggerItem } from "@/components/magicui/Stagger"
import { Lens } from "@/components/magicui/Lens"
import { caseStudies } from "@/content/cases"
import { images } from "@/content/images"
import { site } from "@/content/site"

export default function Cases() {
  const [sp, setSp] = useSearchParams()
  const [q, setQ] = useState(sp.get("q") ?? "")
  const [industry, setIndustry] = useState(sp.get("industry") ?? "")

  const industries = useMemo(() => {
    const set = new Set(caseStudies.map((c) => c.industry))
    return Array.from(set)
  }, [])

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return caseStudies.filter((c) => {
      const okIndustry = industry ? c.industry === industry : true
      const text = `${c.title} ${c.summary} ${c.industry} ${c.services.join(" ")}`.toLowerCase()
      const okQuery = query ? text.includes(query) : true
      return okIndustry && okQuery
    })
  }, [industry, q])

  return (
    <div>
      <Seo
        title={`项目案例｜${site.name}`}
        description="案例默认匿名化行业描述，突出现场问题、实施过程与交付资料，便于对齐能力与范围。"
      />
      <PageHeader
        title="项目案例"
        subtitle="以问题-过程-交付为主线呈现，避免夸大描述与未经授权信息披露。"
        imageUrl={images.caseCover.url}
        imageAlt={images.caseCover.alt}
      />

      <Section title="案例列表" subtitle="支持关键词与行业筛选，移动端同样可用。">
        <div className="grid gap-4">
          <Reveal y={10}>
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="grid gap-3 md:grid-cols-12 md:items-end">
                <div className="md:col-span-6">
                  <label className="text-xs font-semibold text-slate-700">关键词</label>
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="输入关键词（行业、服务类型、标题）"
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>
                <div className="md:col-span-4">
                  <label className="text-xs font-semibold text-slate-700">行业</label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
                  >
                    <option value="">全部</option>
                    {industries.map((it) => (
                      <option key={it} value={it}>
                        {it}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="button"
                    onClick={() => {
                      const next: Record<string, string> = {}
                      if (q.trim()) next.q = q.trim()
                      if (industry) next.industry = industry
                      setSp(next)
                    }}
                    className="focus-ring w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                  >
                    应用
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
            {filtered.map((c) => (
              <StaggerItem key={c.slug}>
                <Link
                  to={`/cases/${c.slug}`}
                  className="focus-ring group block overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Lens className="h-36 bg-slate-100" zoom={1.9} size={170}>
                    {/* 尺寸：1200x800（3:2），WebP 优先 */}
                    <img
                      src={c.coverImageUrl}
                      alt={c.coverImageAlt}
                      className="h-full w-full object-cover transition duration-500"
                      loading="lazy"
                    />
                  </Lens>
                  <div className="p-5">
                    <div className="text-xs text-slate-500">{c.industry}</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">{c.title}</div>
                    <div className="mt-2 clamp-2 text-xs leading-6 text-slate-600">{c.summary}</div>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[rgb(var(--accent))]">
                      查看详情
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>
    </div>
  )
}

