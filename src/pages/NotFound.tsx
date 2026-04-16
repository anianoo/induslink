import { Link } from "react-router-dom"
import { Seo } from "@/components/seo/Seo"
import { site } from "@/content/site"

export default function NotFound() {
  return (
    <div className="container px-4 py-14">
      <Seo title={`页面未找到｜${site.name}`} description="页面不存在或已更新。" noIndex />
      <div className="rounded-2xl border border-slate-200 bg-white p-8">
        <div className="text-2xl font-semibold text-slate-900">页面未找到</div>
        <div className="mt-2 text-sm text-slate-600">你访问的页面不存在或已更新。可返回首页或使用站内搜索。</div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="focus-ring inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            返回首页
          </Link>
          <Link
            to="/search"
            className="focus-ring inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900"
          >
            站内搜索
          </Link>
        </div>
      </div>
    </div>
  )
}

