import { Link, useParams } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Seo } from "@/components/seo/Seo"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { caseStudies } from "@/content/cases"
import { site } from "@/content/site"

export default function CaseDetail() {
  const { slug } = useParams()
  const item = caseStudies.find((c) => c.slug === slug)

  if (!item) {
    return (
      <div className="container px-4 py-10">
        <Seo title={`未找到案例｜${site.name}`} description="页面不存在或已更新。" noIndex />
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <div className="text-lg font-semibold text-slate-900">未找到对应案例</div>
          <div className="mt-2 text-sm text-slate-600">请返回案例列表查看。</div>
          <Link
            to="/cases"
            className="focus-ring mt-4 inline-flex items-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900"
          >
            返回案例列表
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Seo
        title={`${item.title}｜${site.name}`}
        description={item.summary}
        imageUrl={item.coverImageUrl}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "首页", item: `${site.baseUrl}/` },
              { "@type": "ListItem", position: 2, name: "项目案例", item: `${site.baseUrl}/cases` },
              { "@type": "ListItem", position: 3, name: item.title, item: `${site.baseUrl}/cases/${item.slug}` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: item.title,
            description: item.summary,
            url: `${site.baseUrl}/cases/${item.slug}`,
          },
        ]}
      />

      <div className="bg-white">
        <div className="container px-4 pt-6">
          <Breadcrumbs
            items={[
              { label: "首页", to: "/" },
              { label: "项目案例", to: "/cases" },
              { label: item.title },
            ]}
          />
        </div>
        <PageHeader
          title={item.title}
          subtitle={`${item.industry}｜${item.services.join(" · ")}`}
          imageUrl={item.coverImageUrl}
          imageAlt={item.coverImageAlt}
          actions={
            <Link
              to={`/contact?case=${encodeURIComponent(item.title)}`}
              className="focus-ring inline-flex items-center rounded-md bg-[rgb(var(--accent))] px-4 py-2 text-sm font-semibold text-white"
            >
              咨询类似项目
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          }
        />
      </div>

      <Section title="案例内容" subtitle="内容以匿名化描述呈现，强调过程与资料闭环。">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              {item.sections.map((sec) => (
                <div key={sec.title} className="py-3 first:pt-0 last:pb-0">
                  <div className="text-sm font-semibold text-slate-900">{sec.title}</div>
                  <div className="mt-2 space-y-2 text-sm leading-7 text-slate-700">
                    {sec.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-slate-900">服务范围</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.services.map((s) => (
                  <span key={s} className="rounded-sm bg-slate-50 px-3 py-1 text-xs text-slate-700">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 text-sm font-semibold text-slate-900">下一步</div>
              <div className="mt-2 text-xs leading-6 text-slate-600">
                提供现场概况与需求描述，我会按范围边界、进度约束与验收口径给出建议。
              </div>
              <Link
                to="/contact"
                className="focus-ring mt-4 inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
              >
                提交需求
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

