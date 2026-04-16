import { Link } from "react-router-dom"
import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { jobs } from "@/content/careers"
import { images } from "@/content/images"
import { site } from "@/content/site"

export default function Careers() {
  return (
    <div>
      <Seo title={`招贤纳士｜${site.name}`} description="加入我们：现场交付、运维保障与程序调试岗位持续招募。" />
      <PageHeader
        title="招贤纳士"
        subtitle="围绕现场交付、运维保障与程序调试方向，欢迎投递简历与岗位意向。"
        imageUrl={images.aboutHero.url}
        imageAlt={images.aboutHero.alt}
      />

      <Section title="岗位列表" subtitle="点击查看岗位详情。">
        <div className="grid gap-3">
          {jobs.map((j) => (
            <Link
              key={j.slug}
              to={`/careers/${j.slug}`}
              className="focus-ring rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-900">{j.title}</div>
                  <div className="mt-1 text-xs text-slate-600">{j.location}｜{j.type}｜更新 {j.updatedAt}</div>
                </div>
                <div className="text-xs text-slate-500">查看详情</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  )
}

