import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { site } from "@/content/site"

export default function Privacy() {
  return (
    <div>
      <Seo title={`隐私政策｜${site.name}`} description="说明网站信息收集、使用与保护方式。" />
      <PageHeader title="隐私政策" subtitle="说明联系表单信息的收集、使用目的与保护措施。" />

      <Section title="政策正文" subtitle="更新时间：2026-03-01">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700">
          <p>本政策用于说明网站在提供服务过程中可能收集的信息类型、使用目的与保护措施。</p>
          <p className="mt-4">信息收集：当你通过联系表单提交信息时，可能收集姓名、联系方式与需求描述等。</p>
          <p className="mt-4">使用目的：用于与你沟通需求、提供服务建议与改进网站体验。</p>
          <p className="mt-4">保存与保护：将采取合理措施保护信息安全，保存期限与范围以实际业务与法律要求为准。</p>
          <p className="mt-4">联系：如有疑问，请通过联系我们页面与我们沟通。</p>
        </div>
      </Section>
    </div>
  )
}

