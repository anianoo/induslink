import { Link, useParams } from "react-router-dom"
import { Download } from "lucide-react"
import { Seo } from "@/components/seo/Seo"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { downloads } from "@/content/downloads"
import { images } from "@/content/images"
import { site } from "@/content/site"

export default function DownloadDetail() {
  const { slug } = useParams()
  const item = downloads.find((d) => d.slug === slug)

  if (!item) {
    return (
      <div className="container px-4 py-10">
        <Seo title={`未找到资料｜${site.name}`} description="页面不存在或已更新。" noIndex />
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="text-lg font-semibold text-slate-900">未找到对应资料</div>
          <div className="mt-2 text-sm text-slate-600">请返回下载中心查看。</div>
          <Link
            to="/downloads"
            className="focus-ring mt-4 inline-flex items-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900"
          >
            返回下载中心
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Seo
        title={`${item.title}｜${site.name}`}
        description={`下载资料：${item.title}，版本 ${item.version}，更新时间 ${item.updatedAt}。`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "首页", item: `${site.baseUrl}/` },
              { "@type": "ListItem", position: 2, name: "下载中心", item: `${site.baseUrl}/downloads` },
              { "@type": "ListItem", position: 3, name: item.title, item: `${site.baseUrl}/downloads/${item.slug}` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: item.title,
            description: `版本 ${item.version}｜更新时间 ${item.updatedAt}`,
            url: `${site.baseUrl}/downloads/${item.slug}`,
          },
        ]}
      />

      <div className="bg-white">
        <div className="container px-4 pt-6">
          <Breadcrumbs items={[{ label: "首页", to: "/" }, { label: "下载中心", to: "/downloads" }, { label: item.title }]} />
        </div>
        <PageHeader
          title={item.title}
          subtitle={`${item.type}｜版本 ${item.version}｜更新时间 ${item.updatedAt}`}
          imageUrl={images.serviceHero.url}
          imageAlt={images.serviceHero.alt}
        />
      </div>

      <Section title="下载说明" subtitle="资料支持在线预览与下载；如需适配场景的版本，可通过联系页面提交需求。">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700">
              <p>文件大小：{item.fileSizeText}</p>
              <p className="mt-2">如需更适配的资料版本，可通过联系页面提交需求，说明场景与交付要求。</p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <a
                href={item.fileUrl}
                className="focus-ring inline-flex w-full items-center justify-center rounded-md bg-[rgb(var(--accent-2))] px-4 py-2 text-sm font-semibold text-white"
                onClick={async (e) => {
                  e.preventDefault()
                  await fetch("/api/downloads/track", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ fileId: item.slug, sourcePage: `/downloads/${item.slug}` }),
                  }).catch(() => {})
                  window.open(item.fileUrl, "_blank", "noopener,noreferrer")
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                下载文件
              </a>
              <Link
                to="/contact"
                className="focus-ring mt-3 inline-flex w-full items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900"
              >
                需要定制资料
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

