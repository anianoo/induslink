import { Link, useParams } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Section } from "@/components/common/Section"
import { solutions } from "@/content/solutions"
import { site } from "@/content/site"

export default function SolutionDetail() {
  const { slug } = useParams()
  const item = solutions.find((s) => s.slug === slug)

  if (!item) {
    return (
      <div className="container px-4 py-10">
        <Seo title={`未找到方案｜${site.name}`} description="页面不存在或已更新。" noIndex />
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="text-lg font-semibold text-slate-900">未找到对应方案</div>
          <div className="mt-2 text-sm text-slate-600">请返回方案列表查看。</div>
          <Link
            to="/solutions"
            className="focus-ring mt-4 inline-flex items-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900"
          >
            返回方案列表
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Seo
        title={`${item.name}｜${site.name}`}
        description={item.summary}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "首页", item: `${site.baseUrl}/` },
              { "@type": "ListItem", position: 2, name: "解决方案", item: `${site.baseUrl}/solutions` },
              { "@type": "ListItem", position: 3, name: item.name, item: `${site.baseUrl}/solutions/${item.slug}` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: item.name,
            description: item.summary,
            url: `${site.baseUrl}/solutions/${item.slug}`,
          },
        ]}
      />

      <div className="bg-white">
        <div className="container px-4 pt-6">
          <Breadcrumbs
            items={[
              { label: "首页", to: "/" },
              { label: "解决方案", to: "/solutions" },
              { label: item.name },
            ]}
          />
        </div>
        <PageHeader
          title={item.name}
          subtitle={item.summary}
          imageUrl={item.heroImageUrl}
          imageAlt={item.heroImageAlt}
          actions={
            <Link
              to={`/contact?solution=${encodeURIComponent(item.name)}`}
              className="focus-ring inline-flex items-center rounded-md bg-[rgb(var(--accent))] px-4 py-2 text-sm font-semibold text-white"
            >
              获取方案
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          }
        />
      </div>

      <Section title="方案结构" subtitle="可按项目实际进一步细化到范围边界、风险控制点与验收口径。">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {item.sections.map((sec) => (
            <div key={sec.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-slate-900">{sec.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {sec.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

