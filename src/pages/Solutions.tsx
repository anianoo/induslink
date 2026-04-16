import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { Stagger, StaggerItem } from "@/components/magicui/Stagger"
import { solutions } from "@/content/solutions"
import { images } from "@/content/images"
import { site } from "@/content/site"

export default function Solutions() {
  return (
    <div>
      <Seo
        title={`解决方案｜${site.name}`}
        description="按典型场景组织解决方案：节能与能效优化、产线改造升级、设备可靠性提升、安全合规整改、调试验收支持与应急保障。"
      />
      <PageHeader
        title="解决方案"
        subtitle="围绕典型场景输出方案范围、实施步骤与交付物，便于快速对齐。"
        imageUrl={images.serviceHero.url}
        imageAlt={images.serviceHero.alt}
      />

      <Section title="方案列表" subtitle="每个方案均包含痛点、实施范围与交付物结构，支持与案例互相内链。">
        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                to={`/solutions/${s.slug}`}
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

