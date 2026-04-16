import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, ClipboardCheck, Workflow } from "lucide-react"
import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { site } from "@/content/site"
import { images } from "@/content/images"

export default function About() {
  return (
    <div>
      <Seo
        title={`关于我们｜${site.name}`}
        description="了解某某自动化科技有限公司：围绕工业现场电气服务，强调安全合规、过程管理与资料可追溯交付。"
      />

      <PageHeader
        title="关于我们"
        subtitle="以现场为中心的电气运维与工程交付服务，强调安全与流程化管理，交付资料清单化、可追溯。"
        imageUrl={images.aboutHero.url}
        imageAlt={images.aboutHero.alt}
        actions={
          <Link
            to="/contact"
            className="focus-ring inline-flex items-center rounded-md bg-[rgb(var(--accent))] px-4 py-2 text-sm font-semibold text-white"
          >
            联系我们
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        }
      />

      <Section title="公司简介" subtitle="围绕工业现场交付与长期保障，提供可执行、可验收、可追溯的电气服务。">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700">
              <p>
                {site.name} 专注工业现场电气相关服务，围绕电气设备运维、电气设备安装、现场施工与电气程序设计编写，提供从现场勘查、方案梳理到施工交付、验收配合与持续运维的一体化服务。
              </p>
              <p className="mt-4">
                我们重视安全合规与过程管理，以规范化交付帮助客户提升设备稳定性与生产连续性，并通过清单化资料与记录确保长期可追溯。
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-slate-900">价值主张</div>
              <div className="mt-3 grid gap-3">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-slate-700" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">安全与合规</div>
                    <div className="text-xs leading-5 text-slate-600">关注现场风险与关键控制点，过程记录可审阅。</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Workflow className="mt-0.5 h-4 w-4 text-slate-700" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">流程化交付</div>
                    <div className="text-xs leading-5 text-slate-600">勘查→方案→实施→验收→归档→运维，环节清晰。</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ClipboardCheck className="mt-0.5 h-4 w-4 text-slate-700" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">资料可追溯</div>
                    <div className="text-xs leading-5 text-slate-600">交付物清单化，便于验收、审计与后续维护。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="交付流程" subtitle="适用于运维、安装、施工与程序设计等不同类型项目，工程实现可按实际细化。">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {["现场勘查", "方案梳理", "实施交付", "联调验收", "资料归档"].map((t, idx) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-xs text-slate-500">步骤 {idx + 1}</div>
              <div className="mt-1 text-sm font-semibold text-slate-900">{t}</div>
              <div className="mt-2 text-xs leading-5 text-slate-600">
                形成阶段性记录与清单，保证交付过程透明可控。
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

