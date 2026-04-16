import { Link, useParams } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Seo } from "@/components/seo/Seo"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { news } from "@/content/news"
import { site } from "@/content/site"

export default function NewsDetail() {
  const { slug } = useParams()
  const item = news.find((n) => n.slug === slug)

  if (!item) {
    return (
      <div className="container px-4 py-10">
        <Seo title={`未找到文章｜${site.name}`} description="页面不存在或已更新。" noIndex />
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="text-lg font-semibold text-slate-900">未找到对应文章</div>
          <div className="mt-2 text-sm text-slate-600">请返回新闻列表查看。</div>
          <Link
            to="/news"
            className="focus-ring mt-4 inline-flex items-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900"
          >
            返回新闻列表
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
              { "@type": "ListItem", position: 2, name: "新闻资讯", item: `${site.baseUrl}/news` },
              { "@type": "ListItem", position: 3, name: item.title, item: `${site.baseUrl}/news/${item.slug}` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: item.title,
            datePublished: item.publishedAt,
            description: item.summary,
            image: [item.coverImageUrl],
            author: { "@type": "Organization", name: site.name },
          },
        ]}
      />

      <div className="bg-white">
        <div className="container px-4 pt-6">
          <Breadcrumbs items={[{ label: "首页", to: "/" }, { label: "新闻资讯", to: "/news" }, { label: item.title }]} />
        </div>
        <PageHeader title={item.title} subtitle={`${item.category}｜${item.publishedAt}`} imageUrl={item.coverImageUrl} imageAlt={item.coverImageAlt} />
      </div>

      <Section title="正文" subtitle="聚焦现场交付与运维实践，沉淀可执行的方法与清单。">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700">
              {item.paragraphs.map((p) => (
                <p key={p} className="py-2 first:pt-0 last:pb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-slate-900">相关内容</div>
              <div className="mt-3 grid gap-2">
                {news
                  .filter((n) => n.slug !== item.slug)
                  .slice(0, 6)
                  .map((n) => (
                    <Link key={n.slug} to={`/news/${n.slug}`} className="focus-ring rounded-lg px-3 py-2 hover:bg-slate-50">
                      <div className="text-xs text-slate-500">{n.category} · {n.publishedAt}</div>
                      <div className="mt-1 text-sm font-semibold text-slate-900">{n.title}</div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

