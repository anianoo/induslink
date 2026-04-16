import { images } from "@/content/images"

export type Solution = {
  slug:
    | "energy-saving"
    | "retrofit"
    | "reliability"
    | "safety-compliance"
    | "commissioning"
    | "emergency-response"
  name: string
  summary: string
  sections: { title: string; bullets: string[] }[]
  heroImageUrl: string
  heroImageAlt: string
}

export const solutions: Solution[] = [
  {
    slug: "energy-saving",
    name: "节能与能效优化",
    summary:
      "针对用电结构与运行策略进行梳理与优化，形成分阶段整改建议并配套实施与验收资料。",
    sections: [
      { title: "常见痛点", bullets: ["能耗结构不清晰", "运行策略粗放", "设备效率波动"] },
      { title: "实施范围", bullets: ["现场盘点与数据梳理", "策略优化与整改实施", "阶段验收与复核"] },
      { title: "交付物", bullets: ["优化建议清单", "实施记录", "验收与复核资料"] },
    ],
    heroImageUrl: images.serviceHero.url,
    heroImageAlt: images.serviceHero.alt,
  },
  {
    slug: "retrofit",
    name: "产线改造与升级",
    summary:
      "围绕现场约束、停机窗口与验收要求制定改造方案，保障切换过程平稳可控。",
    sections: [
      { title: "常见痛点", bullets: ["老旧系统可维护性差", "备件停产", "扩展困难"] },
      { title: "实施范围", bullets: ["现状评估", "方案设计", "现场实施与切换", "验收资料归档"] },
      { title: "交付物", bullets: ["改造方案与清单", "施工与调试记录", "验收资料"] },
    ],
    heroImageUrl: images.serviceHero.url,
    heroImageAlt: images.serviceHero.alt,
  },
  {
    slug: "reliability",
    name: "设备可靠性提升",
    summary:
      "通过隐患排查、故障模式分析与维护策略优化，降低非计划停机风险并提升可用性。",
    sections: [
      { title: "常见痛点", bullets: ["重复故障", "预防性维护不足", "关键节点无监控"] },
      { title: "实施范围", bullets: ["隐患排查与分类", "维护策略优化", "整改与复核"] },
      { title: "交付物", bullets: ["隐患分级清单", "策略与计划", "复核记录"] },
    ],
    heroImageUrl: images.serviceHero.url,
    heroImageAlt: images.serviceHero.alt,
  },
  {
    slug: "safety-compliance",
    name: "安全与合规整改",
    summary:
      "围绕现场安全规范与验收要求开展整改，确保关键控制点与资料齐备、可审阅。",
    sections: [
      { title: "常见痛点", bullets: ["现场标识不规范", "接地与绝缘隐患", "资料缺失"] },
      { title: "实施范围", bullets: ["排查与评估", "整改实施", "验收与资料归档"] },
      { title: "交付物", bullets: ["整改清单", "过程记录", "验收资料"] },
    ],
    heroImageUrl: images.serviceHero.url,
    heroImageAlt: images.serviceHero.alt,
  },
  {
    slug: "commissioning",
    name: "调试与验收支持",
    summary:
      "配合现场联调、试运行与验收组织，确保问题闭环与交付资料完整。",
    sections: [
      { title: "常见痛点", bullets: ["联调周期紧", "问题定位难", "验收资料不完整"] },
      { title: "实施范围", bullets: ["联调计划", "问题闭环", "验收资料梳理与归档"] },
      { title: "交付物", bullets: ["联调记录", "问题清单与闭环", "验收资料包"] },
    ],
    heroImageUrl: images.serviceHero.url,
    heroImageAlt: images.serviceHero.alt,
  },
  {
    slug: "emergency-response",
    name: "应急抢修与保障",
    summary:
      "围绕关键设备与生产节点制定应急处置与保障机制，明确响应与协同方式。",
    sections: [
      { title: "常见痛点", bullets: ["停机影响大", "备件与资料不齐", "协同沟通成本高"] },
      { title: "实施范围", bullets: ["应急预案", "现场处置与恢复", "复盘与整改建议"] },
      { title: "交付物", bullets: ["应急预案", "处置记录", "复盘与整改建议"] },
    ],
    heroImageUrl: images.serviceHero.url,
    heroImageAlt: images.serviceHero.alt,
  },
]

