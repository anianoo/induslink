import { Link } from "react-router-dom"
import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { services } from "@/content/services"
import { solutions } from "@/content/solutions"
import { caseStudies } from "@/content/cases"
import { news } from "@/content/news"
import { downloads } from "@/content/downloads"
import { jobs } from "@/content/careers"
import { site } from "@/content/site"

export default function Sitemap() {
  return (
    <div>
      <Seo title={`站点地图｜${site.name}`} description="站点地图HTML页，便于用户与搜索引擎发现内容。" />
      <PageHeader title="站点地图" subtitle="用于辅助用户快速定位页面，也便于SEO抓取。" />

      <Section title="主要页面" subtitle="一级页面入口。">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["首页", "/"],
            ["关于我们", "/about"],
            ["业务与服务", "/services"],
            ["解决方案", "/solutions"],
            ["项目案例", "/cases"],
            ["资质与能力", "/qualifications"],
            ["新闻资讯", "/news"],
            ["服务支持", "/support"],
            ["下载中心", "/downloads"],
            ["招贤纳士", "/careers"],
            ["联系我们", "/contact"],
            ["常见问题", "/faq"],
            ["隐私政策", "/privacy"],
            ["使用条款", "/terms"],
          ].map(([label, to]) => (
            <Link key={to} to={to} className="focus-ring rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-50">
              {label}
            </Link>
          ))}
        </div>
      </Section>

      <Section title="详情页" subtitle="内容入口，便于内链与SEO。">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-xs font-semibold text-slate-900">服务</div>
            <div className="mt-2 grid gap-2">
              {services.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="focus-ring rounded-lg bg-white px-3 py-2 text-sm text-slate-800 hover:bg-slate-50">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="text-xs font-semibold text-slate-900">方案</div>
            <div className="mt-2 grid gap-2">
              {solutions.map((s) => (
                <Link key={s.slug} to={`/solutions/${s.slug}`} className="focus-ring rounded-lg bg-white px-3 py-2 text-sm text-slate-800 hover:bg-slate-50">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="text-xs font-semibold text-slate-900">招聘</div>
            <div className="mt-2 grid gap-2">
              {jobs.map((j) => (
                <Link key={j.slug} to={`/careers/${j.slug}`} className="focus-ring rounded-lg bg-white px-3 py-2 text-sm text-slate-800 hover:bg-slate-50">
                  {j.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold text-slate-900">案例</div>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              {caseStudies.map((c) => (
                <Link key={c.slug} to={`/cases/${c.slug}`} className="focus-ring rounded-lg bg-white px-3 py-2 text-sm text-slate-800 hover:bg-slate-50">
                  {c.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold text-slate-900">新闻</div>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              {news.map((n) => (
                <Link key={n.slug} to={`/news/${n.slug}`} className="focus-ring rounded-lg bg-white px-3 py-2 text-sm text-slate-800 hover:bg-slate-50">
                  {n.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-xs font-semibold text-slate-900">下载</div>
          <div className="mt-2 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
            {downloads.map((d) => (
              <Link key={d.slug} to={`/downloads/${d.slug}`} className="focus-ring rounded-lg bg-white px-3 py-2 text-sm text-slate-800 hover:bg-slate-50">
                {d.title}
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}

