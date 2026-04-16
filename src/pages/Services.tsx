import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { Stagger, StaggerItem } from "@/components/magicui/Stagger"
import { services } from "@/content/services"
import { images } from "@/content/images"
import { site } from "@/content/site"

export default function Services() {
  return (
    <div>
      <Seo
        title={`业务与服务｜${site.name}`}
        description="电气设备运维、电气设备安装、现场施工与电气程序设计编写。清单化交付与资料归档，支持调试验收与应急保障。"
      />
      <PageHeader
        title="业务与服务"
        subtitle="以规范化流程组织交付，关注安全合规、质量控制点与资料可追溯。"
        imageUrl={images.serviceHero.url}
        imageAlt={images.serviceHero.alt}
        actions={
          <Link
            to="/contact"
            className="focus-ring inline-flex items-center rounded-md bg-[rgb(var(--accent))] px-4 py-2 text-sm font-semibold text-white"
          >
            提交需求
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        }
      />

      <Section title="服务列表" subtitle="点击查看服务详情、交付物清单与常见问题。">
        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                to={`/services/${s.slug}`}
                className="focus-ring block border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-sm font-semibold text-slate-900">{s.name}</div>
                <div className="mt-2 text-xs leading-6 text-slate-600">{s.summary}</div>
                <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[rgb(var(--accent))]">
                  查看详情
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </div>
  )
}

