import { Link, useParams } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Section } from "@/components/common/Section"
import { services } from "@/content/services"
import { site } from "@/content/site"

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="container px-4 py-10">
        <Seo title={`未找到服务｜${site.name}`} description="页面不存在或已更新。" noIndex />
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="text-lg font-semibold text-slate-900">未找到对应服务</div>
          <div className="mt-2 text-sm text-slate-600">请返回服务列表查看。</div>
          <Link
            to="/services"
            className="focus-ring mt-4 inline-flex items-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900"
          >
            返回服务列表
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Seo
        title={`${service.name}｜${site.name}`}
        description={service.summary}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "首页", item: `${site.baseUrl}/` },
              { "@type": "ListItem", position: 2, name: "业务与服务", item: `${site.baseUrl}/services` },
              { "@type": "ListItem", position: 3, name: service.name, item: `${site.baseUrl}/services/${service.slug}` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            provider: { "@type": "Organization", name: site.name },
            description: service.summary,
          },
        ]}
      />

      <div className="bg-white">
        <div className="container px-4 pt-6">
          <Breadcrumbs
            items={[
              { label: "首页", to: "/" },
              { label: "业务与服务", to: "/services" },
              { label: service.name },
            ]}
          />
        </div>
        <PageHeader
          title={service.name}
          subtitle={service.summary}
          imageUrl={service.heroImageUrl}
          imageAlt={service.heroImageAlt}
          actions={
            <Link
              to={`/contact?service=${encodeURIComponent(service.name)}`}
              className="focus-ring inline-flex items-center rounded-md bg-[rgb(var(--accent))] px-4 py-2 text-sm font-semibold text-white"
            >
              提交需求
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          }
        />
      </div>

      <Section title="服务要点" subtitle="以可执行、可验收为目标组织交付与资料闭环。">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-sm font-semibold text-slate-900">范围与重点</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {service.highlights.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-sm font-semibold text-slate-900">交付物清单</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {service.deliverables.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-300" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}

