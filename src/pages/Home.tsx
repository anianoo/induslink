import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, ClipboardList, Wrench, Cpu } from "lucide-react"
import { motion } from "motion/react"
import { Seo } from "@/components/seo/Seo"
import { Section } from "@/components/common/Section"
import { BlurFade } from "@/components/magicui/BlurFade"
import { Parallax } from "@/components/magicui/Parallax"
import { Stagger, StaggerItem } from "@/components/magicui/Stagger"
import { Marquee } from "@/components/magicui/Marquee"
import { Lens } from "@/components/magicui/Lens"
import { DeliveryPinned } from "@/components/home/DeliveryPinned"
import { TextAnimateLine } from "@/components/magicui/TextAnimateLine"
import { site } from "@/content/site"
import { images } from "@/content/images"
import { services } from "@/content/services"
import { solutions } from "@/content/solutions"
import { caseStudies } from "@/content/cases"
import { news } from "@/content/news"
import { partners } from "@/content/partners"

export default function Home() {
  const [servicesExpanded, setServicesExpanded] = useState(false)
  const [solutionsExpanded, setSolutionsExpanded] = useState(false)

  return (
    <div>
      <Seo
        title={`${site.name}｜电气设备运维·安装施工·程序设计`}
        description="某某自动化科技有限公司，提供电气设备运维、电气设备安装、现场施工与电气程序设计编写等服务，面向工业现场交付与长期保障。"
        imageUrl={site.ogImageUrl}
      />

      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950">
        <Parallax className="absolute inset-0" offset={34}>
          <img
            src={images.homeHero.url}
            alt={images.homeHero.alt}
            className="h-full w-full object-cover opacity-25"
          />
        </Parallax>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,51,0.94),rgba(11,31,51,0.62),rgba(11,31,51,0.92))]" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_0)] [background-size:20px_20px]" />
        <div className="relative">
          <div className="container px-4">
            <div className="relative grid min-h-[86vh] gap-10 py-14 md:min-h-[88vh] md:py-20 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-12 lg:items-center">
              <motion.div
                className="absolute -left-24 -top-28 h-96 w-96 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(var(--accent),0.65), rgba(var(--accent),0) 70%)",
                }}
                animate={{ x: [0, 26, -10, 0], y: [0, 12, 30, 0] }}
                transition={{ duration: 12, ease: [0.22, 1, 0.36, 1], repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle at 40% 40%, rgba(var(--accent-2),0.55), rgba(var(--accent-2),0) 70%)",
                }}
                animate={{ x: [0, -18, 10, 0], y: [0, -14, -28, 0] }}
                transition={{ duration: 14, ease: [0.22, 1, 0.36, 1], repeat: Infinity }}
              />

              <div className="relative lg:col-span-7">
                <div className="grid gap-6">
                  <div className="inline-flex items-center gap-3 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-xs text-white/80">
                    <span className="h-px w-10 bg-[rgb(var(--accent))]" />
                    <TextAnimateLine trigger="mount" blur={18} y={16} duration={0.7}>
                      工业现场电气服务｜严谨交付｜资料可追溯
                    </TextAnimateLine>
                  </div>

                  <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    <TextAnimateLine trigger="mount" blur={20} y={18} duration={0.75}>
                      面向现场的
                    </TextAnimateLine>
                    <span className="ml-2 inline-block text-[rgb(var(--accent))]">
                      <TextAnimateLine trigger="mount" delay={0.08} blur={22} y={18} duration={0.8}>
                        电气运维与工程交付
                      </TextAnimateLine>
                    </span>
                  </h1>

                  <p className="max-w-2xl text-sm leading-7 text-white/75 md:text-[15px]">
                    <TextAnimateLine trigger="mount" delay={0.16} blur={16} y={12} duration={0.7}>
                      围绕电气设备运维、电气设备安装、现场施工与电气程序设计编写，提供从勘查、实施到验收与资料归档的一体化服务。
                    </TextAnimateLine>
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      to="/contact"
                      className="focus-ring relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[rgb(var(--accent))] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)] before:[animation:shimmer_2.2s_ease_infinite]"
                    >
                      <span className="relative z-10 inline-flex items-center">
                        获取方案与报价
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                    <Link
                      to="/services"
                      className="focus-ring inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                    >
                      查看业务与服务
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <BlurFade className="border border-white/15 bg-white/5 p-5" y={10} blur={12}>
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <ShieldCheck className="h-4 w-4 text-white/80" />
                        安全与规范
                      </div>
                      <div className="mt-2 text-xs leading-6 text-white/70">强调现场安全、质量控制点与过程记录。</div>
                    </BlurFade>
                    <BlurFade className="border border-white/15 bg-white/5 p-5" y={10} blur={12} delay={0.05}>
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <ClipboardList className="h-4 w-4 text-white/80" />
                        交付可追溯
                      </div>
                      <div className="mt-2 text-xs leading-6 text-white/70">交付资料清单化，便于验收与后续维护。</div>
                    </BlurFade>
                  </div>
                </div>

              </div>

              <div className="relative lg:col-span-5">
                <BlurFade y={10} blur={10}>
                  <div className="border border-white/15 bg-white/5 p-5">
                    <div className="text-xs font-semibold tracking-[0.18em] text-white/60">服务覆盖</div>
                    <div className="mt-4 grid gap-2">
                      {services.map((s, idx) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="focus-ring flex items-center justify-between border border-white/10 bg-black/10 px-4 py-3 text-left transition hover:bg-black/15"
                        >
                          <div className="text-sm font-semibold text-white/90">
                            <TextAnimateLine trigger="mount" delay={0.22 + idx * 0.12} blur={16} y={12} duration={0.65}>
                              {s.name}
                            </TextAnimateLine>
                          </div>
                          <ArrowRight className="h-4 w-4 text-white/45" />
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 text-xs text-white/55">点击条目可查看对应服务范围、交付物清单与验收配合方式。</div>
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="核心业务" subtitle="围绕工业现场交付与长期保障，提供规范化服务与资料闭环。">
        <BlurFade y={10}>
          <div className="relative">
            <div className="md:hidden">
              {servicesExpanded ? (
                <div className="grid gap-3">
                  {services.map((s, idx) => {
                    const Icon = idx % 4 === 0 ? Wrench : idx % 4 === 1 ? ShieldCheck : idx % 4 === 2 ? ClipboardList : Cpu
                    return (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="focus-ring group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                      >
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--accent),0.10),transparent_55%)]" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(var(--accent-2),0.10),transparent_55%)]" />
                        </div>
                        <div className="relative">
                          <div className="flex items-start gap-3">
                            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                              <Icon className="h-4 w-4" />
                            </span>
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-slate-900">{s.name}</div>
                              <div className="mt-1 text-xs leading-6 text-slate-600">{s.summary}</div>
                            </div>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {s.highlights.slice(0, 3).map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[rgb(var(--accent))]">
                            查看详情
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              ) : (
                <div className="relative -mx-4">
                  <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {services.map((s, idx) => {
                      const Icon = idx % 4 === 0 ? Wrench : idx % 4 === 1 ? ShieldCheck : idx % 4 === 2 ? ClipboardList : Cpu
                      return (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="focus-ring group relative w-[68%] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                        >
                          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--accent),0.10),transparent_55%)]" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(var(--accent-2),0.10),transparent_55%)]" />
                          </div>
                          <div className="relative">
                            <div className="flex items-start gap-3">
                              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                                <Icon className="h-4 w-4" />
                              </span>
                              <div className="min-w-0">
                                <div className="text-sm font-semibold text-slate-900">{s.name}</div>
                                <div className="mt-1 clamp-2 text-xs leading-6 text-slate-600">{s.summary}</div>
                              </div>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {s.highlights.slice(0, 2).map((t) => (
                                <span
                                  key={t}
                                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                            <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[rgb(var(--accent))]">
                              查看详情
                              <ArrowRight className="h-4 w-4" />
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-[linear-gradient(to_right,rgba(var(--bg),1),rgba(var(--bg),0))]" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-[linear-gradient(to_left,rgba(var(--bg),1),rgba(var(--bg),0))]" />
                </div>
              )}

              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  className="focus-ring inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-900"
                  onClick={() => setServicesExpanded((v) => !v)}
                >
                  {servicesExpanded ? "收起" : "点击展开查看全部"}
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              <Marquee
                durationSeconds={44}
                pauseOnHover
                className="py-2"
                items={services.map((s, idx) => {
                  const Icon = idx % 4 === 0 ? Wrench : idx % 4 === 1 ? ShieldCheck : idx % 4 === 2 ? ClipboardList : Cpu
                  return (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="group relative flex h-full w-[18.5rem] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--accent),0.10),transparent_55%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(var(--accent-2),0.10),transparent_55%)]" />
                      </div>
                      <div className="relative">
                        <div className="flex items-start gap-3">
                          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-slate-900">{s.name}</div>
                            <div className="mt-1 clamp-2 text-xs leading-6 text-slate-600">{s.summary}</div>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {s.highlights.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 text-xs font-semibold text-[rgb(var(--accent))]">查看详情 →</div>
                      </div>
                    </Link>
                  )
                })}
              />
            </div>
          </div>
        </BlurFade>
      </Section>

      <Section title="解决方案" subtitle="按典型场景组织内容，便于快速对齐需求与交付范围。">
        <div className="md:hidden">
          {solutionsExpanded ? (
            <div className="grid gap-3">
              {solutions.map((s) => (
                <Link
                  key={s.slug}
                  to={`/solutions/${s.slug}`}
                  className="focus-ring block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">{s.name}</div>
                  <div className="mt-2 text-xs leading-6 text-slate-600">{s.summary}</div>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[rgb(var(--accent))]">
                    查看详情
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="relative -mx-4">
              <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {solutions.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/solutions/${s.slug}`}
                    className="focus-ring block w-[68%] shrink-0 snap-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="text-sm font-semibold text-slate-900">{s.name}</div>
                    <div className="mt-2 clamp-2 text-xs leading-6 text-slate-600">{s.summary}</div>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[rgb(var(--accent))]">
                      查看详情
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-[linear-gradient(to_right,rgba(var(--bg),1),rgba(var(--bg),0))]" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-[linear-gradient(to_left,rgba(var(--bg),1),rgba(var(--bg),0))]" />
            </div>
          )}

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-900"
              onClick={() => setSolutionsExpanded((v) => !v)}
            >
              {solutionsExpanded ? "收起" : "点击展开查看全部"}
            </button>
          </div>
        </div>

        <div className="hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, idx) => (
            <BlurFade key={s.slug} delay={idx * 0.04}>
              <Link
                to={`/solutions/${s.slug}`}
                className="focus-ring block border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-sm font-semibold text-slate-900">{s.name}</div>
                <div className="mt-2 text-xs leading-6 text-slate-600">{s.summary}</div>
                <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[rgb(var(--accent))]">
                  查看详情
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </Section>

      <Section title="项目案例" subtitle="案例默认匿名化行业描述，突出问题、过程与交付资料。">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {caseStudies.slice(0, 4).map((c, idx) => (
            <BlurFade key={c.slug} delay={idx * 0.04}>
              <Link
                to={`/cases/${c.slug}`}
                className="focus-ring group block overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Lens className="h-36 bg-slate-100" zoom={1.9} size={170}>
                  <img
                    src={c.coverImageUrl}
                    alt={c.coverImageAlt}
                      className="h-full w-full object-cover transition duration-500"
                    loading="lazy"
                  />
                </Lens>
                <div className="p-5">
                  <div className="text-xs text-slate-500">{c.industry}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">{c.title}</div>
                  <div className="mt-2 clamp-2 text-xs leading-6 text-slate-600">{c.summary}</div>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
        <div className="mt-6">
          <Link
            to="/cases"
            className="focus-ring inline-flex items-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            查看全部案例
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Section>

      <DeliveryPinned
        title="交付流程"
        subtitle="从勘查到归档，以清单化交付与关键节点验收为主线，确保现场安全、质量与资料可追溯。"
        steps={[
          {
            k: "01",
            title: "现场勘查",
            desc: "确认工况、风险点、停机窗口与范围边界，给出可执行的实施路径。",
            imageUrl: images.caseCoverInstallation.url,
            imageAlt: images.caseCoverInstallation.alt,
            tags: ["范围边界", "停机窗口", "风险点"],
          },
          {
            k: "02",
            title: "方案与清单",
            desc: "输出实施步骤、材料清单、交付物清单与验收口径，减少沟通与返工。",
            imageUrl: images.certPortrait.url,
            imageAlt: images.certPortrait.alt,
            tags: ["材料清单", "交付物", "验收口径"],
          },
          {
            k: "03",
            title: "实施与调试",
            desc: "按控制点记录过程，完成调试与联动验证，并组织阶段验收。",
            imageUrl: images.caseCoverProgramming.url,
            imageAlt: images.caseCoverProgramming.alt,
            tags: ["过程记录", "联动验证", "阶段验收"],
          },
          {
            k: "04",
            title: "验收与归档",
            desc: "交付资料归档与培训交接，形成持续运维基础，让后续维护更可追溯。",
            imageUrl: images.caseCoverMaintenance.url,
            imageAlt: images.caseCoverMaintenance.alt,
            tags: ["资料归档", "培训交接", "可追溯"],
          },
        ]}
      />

      <Section title="合作客户" subtitle="覆盖制造业、仓储物流、市政公用等场景，按项目需求提供持续的现场支持与交付保障。">
        <BlurFade y={10}>
          <div className="border border-slate-200 bg-white p-6 shadow-sm">
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
              {partners.map((p) => (
                <StaggerItem key={p.name}>
                  <div className="border border-slate-200 bg-slate-50 p-5">
                    <div className="flex h-14 items-center justify-center bg-white">
                    {/* 尺寸：320x160，透明底优先（需授权） */}
                      <img src={p.logoUrl} alt={p.logoAlt} className="h-10 w-full object-contain px-3" loading="lazy" />
                    </div>
                    <div className="mt-3 text-center text-xs font-semibold text-slate-800">{p.name}</div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="mt-4 text-xs text-slate-500">客户的信赖是我们不断前进的动力。</div>
          </div>
        </BlurFade>
      </Section>

      <Section title="新闻资讯" subtitle="公司动态、技术科普与行业观察，持续更新交付经验与方法论。">
        <div className="grid gap-3">
          {news.slice(0, 6).map((n, idx) => (
            <BlurFade key={n.slug} delay={idx * 0.03}>
              <Link
                to={`/news/${n.slug}`}
                className="focus-ring block border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-xs text-slate-500">{n.category} · {n.publishedAt}</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">{n.title}</div>
                  </div>
                  <div className="text-xs leading-6 text-slate-600 md:max-w-xl">{n.summary}</div>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
        <div className="mt-6">
          <Link
            to="/news"
            className="focus-ring inline-flex items-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            查看全部资讯
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Section>
    </div>
  )
}
