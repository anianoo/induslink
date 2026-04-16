import { useMemo, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { services } from "@/content/services"
import { solutions } from "@/content/solutions"
import { caseStudies } from "@/content/cases"
import { news } from "@/content/news"
import { downloads } from "@/content/downloads"
import { site } from "@/content/site"

type Result = { type: string; title: string; to: string; summary: string }

export default function Search() {
  const [sp, setSp] = useSearchParams()
  const [q, setQ] = useState(sp.get("q") ?? "")

  const results = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return [] as Result[]
    const out: Result[] = []
    for (const s of services) {
      const text = `${s.name} ${s.summary}`.toLowerCase()
      if (text.includes(query)) out.push({ type: "服务", title: s.name, to: `/services/${s.slug}`, summary: s.summary })
    }
    for (const s of solutions) {
      const text = `${s.name} ${s.summary}`.toLowerCase()
      if (text.includes(query)) out.push({ type: "方案", title: s.name, to: `/solutions/${s.slug}`, summary: s.summary })
    }
    for (const c of caseStudies) {
      const text = `${c.title} ${c.summary} ${c.industry}`.toLowerCase()
      if (text.includes(query)) out.push({ type: "案例", title: c.title, to: `/cases/${c.slug}`, summary: c.summary })
    }
    for (const n of news) {
      const text = `${n.title} ${n.summary} ${n.category}`.toLowerCase()
      if (text.includes(query)) out.push({ type: "新闻", title: n.title, to: `/news/${n.slug}`, summary: n.summary })
    }
    for (const d of downloads) {
      const text = `${d.title} ${d.type}`.toLowerCase()
      if (text.includes(query)) out.push({ type: "下载", title: d.title, to: `/downloads/${d.slug}`, summary: `${d.type}｜版本 ${d.version}` })
    }
    return out.slice(0, 50)
  }, [q])

  return (
    <div>
      <Seo title={`站内搜索｜${site.name}`} description="搜索服务、方案、案例、新闻与下载资料。" noIndex={!q.trim()} />
      <PageHeader title="站内搜索" subtitle="输入关键词，搜索服务、方案、案例、新闻与下载资料。" />

      <Section title="搜索" subtitle="建议使用业务关键词、行业关键词或标题关键字。">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="grid gap-3 md:grid-cols-12 md:items-end">
            <div className="md:col-span-10">
              <label className="text-xs font-semibold text-slate-700">关键词</label>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="例如：运维、施工、验收、节能、标识"
                className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/30"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="button"
                onClick={() => {
                  const next: Record<string, string> = {}
                  if (q.trim()) next.q = q.trim()
                  setSp(next)
                }}
                className="focus-ring w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
              >
                搜索
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          {!q.trim() && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">请输入关键词开始搜索。</div>
          )}
          {q.trim() && results.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">未找到匹配内容。</div>
          )}
          {results.map((r, idx) => (
            <Link key={`${r.to}-${idx}`} to={r.to} className="focus-ring rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md">
              <div className="text-xs text-slate-500">{r.type}</div>
              <div className="mt-1 text-sm font-semibold text-slate-900">{r.title}</div>
              <div className="mt-2 text-xs leading-6 text-slate-600">{r.summary}</div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  )
}

