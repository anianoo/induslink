import { Link } from "react-router-dom"
import { ArrowRight, LifeBuoy, ClipboardList } from "lucide-react"
import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { site } from "@/content/site"
import { images } from "@/content/images"
import { faq } from "@/content/faq"

export default function Support() {
  return (
    <div>
      <Seo title={`服务支持｜${site.name}`} description="服务流程、常见问题与资料下载入口。支持线上咨询与需求提交。" />
      <PageHeader
        title="服务支持"
        subtitle="以流程与资料为抓手，让沟通更高效、交付更可控。"
        imageUrl={images.serviceHero.url}
        imageAlt={images.serviceHero.alt}
      />

      <Section title="服务流程" subtitle="以可执行与可验收为目标组织交付。">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {["需求对齐", "现场勘查", "方案确认", "实施交付", "验收归档"].map((t, idx) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-xs text-slate-500">步骤 {idx + 1}</div>
              <div className="mt-1 text-sm font-semibold text-slate-900">{t}</div>
              <div className="mt-2 text-xs leading-5 text-slate-600">阶段性形成清单与记录，便于协同与验收。</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="常见问题" subtitle="更多问题可进入FAQ页面查看。">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-slate-200 bg-white">
              {faq.slice(0, 6).map((it) => (
                <div key={it.q} className="border-b border-slate-200 p-5 last:border-b-0">
                  <div className="flex items-start gap-2">
                    <LifeBuoy className="mt-0.5 h-4 w-4 text-slate-600" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{it.q}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-700">{it.a}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <ClipboardList className="h-4 w-4" />
                需要更快对齐
              </div>
              <div className="mt-2 text-xs leading-6 text-slate-600">
                可直接提交需求，我会按范围边界、现场约束与验收口径给出建议与清单。
              </div>
              <div className="mt-4 grid gap-2">
                <Link
                  to="/contact"
                  className="focus-ring inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                >
                  在线咨询
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/downloads"
                  className="focus-ring inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900"
                >
                  下载资料
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

