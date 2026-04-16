import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { site } from "@/content/site"

export default function Terms() {
  return (
    <div>
      <Seo title={`使用条款｜${site.name}`} description="网站使用规则与免责声明说明。" />
      <PageHeader title="使用条款" subtitle="用于说明网站使用规则、内容声明与责任边界。" />

      <Section title="条款正文" subtitle="更新时间：2026-03-01">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700">
          <p>你在使用本网站前应阅读并理解本条款。继续访问即视为同意条款内容。</p>
          <p className="mt-4">内容声明：网站内容用于信息展示，具体服务范围与价格以双方沟通确认的文件为准。</p>
          <p className="mt-4">知识产权：网站文字、图片与标识等内容的权利归属以实际情况为准，未经授权不得复制传播。</p>
          <p className="mt-4">责任限制：因不可抗力、网络故障等导致的服务中断，本网站不承担超出法律规定范围的责任。</p>
          <p className="mt-4">联系：如需进一步说明，请通过联系我们页面与我们沟通。</p>
        </div>
      </Section>
    </div>
  )
}

