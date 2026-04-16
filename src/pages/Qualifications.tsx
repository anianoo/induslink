import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { site } from "@/content/site"
import { images } from "@/content/images"

const capability = [
  { title: "现场安全与质量管理", desc: "安全交底、工序验收点、过程记录与复核机制。" },
  { title: "资料归档与可追溯", desc: "交付物清单化，形成验收资料包并便于后续维护。" },
  { title: "程序设计与版本化交付", desc: "工程文件、版本信息、I/O清单与变更说明。" },
  { title: "响应与协同机制", desc: "明确沟通路径与现场协同方式，降低不确定性。" },
]

const certificates = Array.from({ length: 8 }).map((_, idx) => ({
  slug: `cert-${idx + 1}`,
  title: `资质与体系文件（示例）${idx + 1}`,
  imageUrl: images.certPortrait.url,
  imageAlt: images.certPortrait.alt,
}))

export default function Qualifications() {
  return (
    <div>
      <Seo
        title={`资质与能力｜${site.name}`}
        description="展示公司交付能力与管理体系，强调过程控制、资料归档与持续保障能力。"
      />
      <PageHeader
        title="资质与能力"
        subtitle="以工程可执行与可审阅为核心，强调过程控制、资料归档与持续保障能力。"
        imageUrl={images.aboutHero.url}
        imageAlt={images.aboutHero.alt}
      />

      <Section title="能力概览" subtitle="以工程可执行与可审阅为核心，强调过程控制与资料归档。">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capability.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">{c.title}</div>
              <div className="mt-2 text-xs leading-6 text-slate-600">{c.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="资质展示" subtitle="展示管理体系与能力材料的示意样式；实际上线可替换为经核对的真实资质图片与说明。">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((c) => (
            <div key={c.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[3/4] bg-slate-100">
                {/* 尺寸：1200x1600（3:4 竖版），WebP 优先 */}
                <img src={c.imageUrl} alt={c.imageAlt} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold text-slate-900">{c.title}</div>
                <div className="mt-1 text-xs text-slate-500">证书编号与说明：以实际材料为准</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

