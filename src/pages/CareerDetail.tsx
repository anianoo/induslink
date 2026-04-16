import { Link, useParams } from "react-router-dom"
import { Seo } from "@/components/seo/Seo"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { jobs } from "@/content/careers"
import { images } from "@/content/images"
import { site } from "@/content/site"

export default function CareerDetail() {
  const { slug } = useParams()
  const job = jobs.find((j) => j.slug === slug)

  if (!job) {
    return (
      <div className="container px-4 py-10">
        <Seo title={`未找到岗位｜${site.name}`} description="页面不存在或已更新。" noIndex />
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="text-lg font-semibold text-slate-900">未找到对应岗位</div>
          <Link className="focus-ring mt-4 inline-flex rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900" to="/careers">
            返回岗位列表
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Seo
        title={`${job.title}｜${site.name}`}
        description={`${job.title} 岗位信息，地点 ${job.location}，类型 ${job.type}。`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "首页", item: `${site.baseUrl}/` },
              { "@type": "ListItem", position: 2, name: "招贤纳士", item: `${site.baseUrl}/careers` },
              { "@type": "ListItem", position: 3, name: job.title, item: `${site.baseUrl}/careers/${job.slug}` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: job.title,
            datePosted: job.updatedAt,
            employmentType: job.type,
            hiringOrganization: { "@type": "Organization", name: site.name },
            jobLocationType: "OnSite",
          },
        ]}
      />

      <div className="bg-white">
        <div className="container px-4 pt-6">
          <Breadcrumbs items={[{ label: "首页", to: "/" }, { label: "招贤纳士", to: "/careers" }, { label: job.title }]} />
        </div>
        <PageHeader
          title={job.title}
          subtitle={`${job.location}｜${job.type}｜更新 ${job.updatedAt}`}
          imageUrl={images.aboutHero.url}
          imageAlt={images.aboutHero.alt}
        />
      </div>

      <Section title="岗位职责" subtitle="实际职责请按公司真实情况补齐。">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <ul className="space-y-2 text-sm text-slate-700">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-slate-900">任职要求</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-300" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-sm font-semibold text-slate-900">投递方式</div>
              <div className="mt-2 text-xs leading-6 text-slate-600">请通过“联系我们”提交简历与岗位意向，邮件/电话回访以实际沟通为准。</div>
              <Link
                to="/contact"
                className="focus-ring mt-4 inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

