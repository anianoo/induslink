import { useMemo, useState } from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import { Seo } from "@/components/seo/Seo"
import { PageHeader } from "@/components/common/PageHeader"
import { Section } from "@/components/common/Section"
import { site } from "@/content/site"
import { images } from "@/content/images"

type SubmitState =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; id: string }
  | { type: "error"; message: string }

export default function Contact() {
  const location = useLocation()
  const [sp] = useSearchParams()
  const hint = useMemo(() => {
    const parts: string[] = []
    const service = sp.get("service")
    const solution = sp.get("solution")
    const cs = sp.get("case")
    if (service) parts.push(`服务：${service}`)
    if (solution) parts.push(`方案：${solution}`)
    if (cs) parts.push(`案例：${cs}`)
    return parts.join("；")
  }, [sp])

  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState(hint ? `${hint}\n\n需求描述：` : "")
  const [state, setState] = useState<SubmitState>({ type: "idle" })

  return (
    <div>
      <Seo title={`联系我们｜${site.name}`} description="提交需求与联系方式，我们将尽快与您沟通并给出建议方案。" />
      <PageHeader
        title="联系我们"
        subtitle="提交需求后会返回提交结果；建议描述现场约束、窗口期与验收要求，便于快速对齐。"
        imageUrl={images.aboutHero.url}
        imageAlt={images.aboutHero.alt}
      />

      <Section title="联系信息" subtitle="可通过电话/邮箱或在线表单提交需求，我们将按场景尽快回复。">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-slate-900">联系方式</div>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <div>电话：{site.contact.phone}</div>
                <div>邮箱：{site.contact.email}</div>
                <div>地址：{site.contact.address}</div>
                <div className="text-xs text-slate-500">{site.contact.hours}</div>
              </div>
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-900">位置与导航</div>
                <div className="mt-2 text-xs text-slate-600">地图位置，还没做。</div>
                <div className="mt-3 h-40 rounded-lg bg-white" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-slate-900">在线咨询</div>
              <div className="mt-2 text-xs text-slate-600">
                请填写尽可能清晰的需求描述（现场约束、窗口期、验收要求等），便于快速对齐。
              </div>

              <form
                className="mt-6 grid gap-4"
                onSubmit={async (e) => {
                  e.preventDefault()
                  if (state.type === "submitting") return
                  setState({ type: "submitting" })
                  const body = {
                    name,
                    company: company || undefined,
                    phone,
                    email: email || undefined,
                    message,
                    sourcePage: location.pathname,
                  }
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                  }).catch(() => null)
                  if (!res) {
                    setState({ type: "error", message: "网络异常，请稍后再试。" })
                    return
                  }
                  const json = (await res.json().catch(() => null)) as { ok?: boolean; id?: string; error?: string } | null
                  if (res.ok && json?.ok && json.id) {
                    setState({ type: "success", id: json.id })
                    return
                  }
                  setState({ type: "error", message: json?.error || "提交失败，请检查输入。" })
                }}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">姓名（必填）</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      minLength={2}
                      className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700">公司</label>
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">电话（必填）</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      minLength={6}
                      className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700">邮箱</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">需求描述（必填）</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    minLength={10}
                    rows={7}
                    className="mt-2 w-full resize-y rounded-md border border-slate-200 bg-white px-3 py-2 text-sm leading-6 outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                <button
                  type="submit"
                  className="focus-ring inline-flex items-center justify-center rounded-md bg-[rgb(var(--accent))] px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"
                  disabled={state.type === "submitting"}
                >
                  {state.type === "submitting" ? "提交中" : "提交咨询"}
                </button>

                {state.type === "success" && (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
                    已收到您的信息（ID：{state.id}）。我们将尽快与您联系。
                  </div>
                )}
                {state.type === "error" && (
                  <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">{state.message}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

