import { useMemo, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Download } from "lucide-react"
import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { Reveal } from "@/components/motion/Reveal"
import { Stagger, StaggerItem } from "@/components/magicui/Stagger"
import { downloads } from "@/content/downloads"
import { images } from "@/content/images"
import { site } from "@/content/site"

const types = ["全部", "公司资料", "服务说明", "交付物样例", "其他"] as const

export default function Downloads() {
  const [sp, setSp] = useSearchParams()
  const [type, setType] = useState((sp.get("type") ?? "全部") as (typeof types)[number])
  const filtered = useMemo(() => {
    return downloads.filter((d) => (type === "全部" ? true : d.type === type))
  }, [type])

  return (
    <div>
      <Seo title={`下载中心｜${site.name}`} description="公司资料、服务说明与交付物样例等资料下载与在线预览。" />
      <PageHeader
        title="下载中心"
        subtitle="提供公司资料、服务说明与交付物样例等资料下载与在线预览。"
        imageUrl={images.serviceHero.url}
        imageAlt={images.serviceHero.alt}
      />

      <Section title="资料列表" subtitle="支持按类型筛选；移动端列表同样可用。">
        <div className="grid gap-4">
          <Reveal y={10}>
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="grid gap-3 md:grid-cols-12 md:items-end">
                <div className="md:col-span-10">
                  <label className="text-xs font-semibold text-slate-700">资料类型</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as (typeof types)[number])}
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
                  >
                    {types.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="button"
                    onClick={() => {
                      const next: Record<string, string> = {}
                      if (type !== "全部") next.type = type
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
            {filtered.map((d) => (
              <StaggerItem key={d.slug}>
                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-xs text-slate-500">{d.type} · {d.updatedAt}</div>
                      <div className="mt-1 text-sm font-semibold text-slate-900">{d.title}</div>
                      <div className="mt-1 text-xs text-slate-600">版本：{d.version}｜大小：{d.fileSizeText}</div>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Link
                        to={`/downloads/${d.slug}`}
                        className="focus-ring inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900"
                      >
                        查看详情
                      </Link>
                      <a
                        href={d.fileUrl}
                        className="focus-ring inline-flex items-center justify-center rounded-md bg-[rgb(var(--accent-2))] px-4 py-2 text-sm font-semibold text-white"
                        onClick={async (e) => {
                          e.preventDefault()
                          await fetch("/api/downloads/track", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ fileId: d.slug, sourcePage: "/downloads" }),
                          }).catch(() => {})
                          window.open(d.fileUrl, "_blank", "noopener,noreferrer")
                        }}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        下载
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>
    </div>
  )
}

