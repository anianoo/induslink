import { useMemo, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { Reveal } from "@/components/motion/Reveal"
import { Stagger, StaggerItem } from "@/components/magicui/Stagger"
import { news } from "@/content/news"
import { images } from "@/content/images"
import { site } from "@/content/site"

const categories = ["全部", "公司动态", "技术科普", "行业观察"] as const

export default function News() {
  const [sp, setSp] = useSearchParams()
  const [q, setQ] = useState(sp.get("q") ?? "")
  const [category, setCategory] = useState((sp.get("category") ?? "全部") as (typeof categories)[number])

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return news.filter((n) => {
      const okCat = category === "全部" ? true : n.category === category
      const okQ = query ? `${n.title} ${n.summary} ${n.category}`.toLowerCase().includes(query) : true
      return okCat && okQ
    })
  }, [category, q])

  return (
    <div>
      <Seo title={`新闻资讯｜${site.name}`} description="公司动态、技术科普与行业观察，持续更新交付经验与方法论。" />
      <PageHeader
        title="新闻资讯"
        subtitle="以可复用的方法与经验为主，避免夸大与未经授权信息披露。"
        imageUrl={images.newsCover.url}
        imageAlt={images.newsCover.alt}
      />

      <Section title="资讯列表" subtitle="支持分类与关键词筛选，移动端同样可用。">
        <div className="grid gap-4">
          <Reveal y={10}>
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="grid gap-3 md:grid-cols-12 md:items-end">
                <div className="md:col-span-6">
                  <label className="text-xs font-semibold text-slate-700">关键词</label>
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="输入关键词（标题、摘要、分类）"
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>
                <div className="md:col-span-4">
                  <label className="text-xs font-semibold text-slate-700">分类</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as (typeof categories)[number])}
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
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
                      if (category !== "全部") next.category = category
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

          <Stagger className="grid gap-3" stagger={0.05}>
            {filtered.map((n) => (
              <StaggerItem key={n.slug}>
                <Link
                  to={`/news/${n.slug}`}
                  className="focus-ring block border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="text-xs text-slate-500">{n.category} · {n.publishedAt}</div>
                      <div className="mt-1 text-sm font-semibold text-slate-900">{n.title}</div>
                    </div>
                    <div className="text-xs leading-6 text-slate-600 md:max-w-xl">{n.summary}</div>
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

