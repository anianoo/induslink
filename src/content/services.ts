import { images } from "@/content/images"

export type Service = {
  slug: "maintenance" | "installation" | "construction" | "programming"
  name: string
  summary: string
  highlights: string[]
  deliverables: string[]
  heroImageUrl: string
  heroImageAlt: string
}

export const services: Service[] = [
  {
    slug: "maintenance",
    name: "电气设备运维",
    summary:
      "围绕配电与控制系统开展巡检、保养、隐患排查与故障处置，形成可追溯的运维记录与整改建议。",
    highlights: [
      "巡检与保养计划",
      "隐患清单与整改建议",
      "故障定位与恢复支持",
      "资料归档与可追溯",
    ],
    deliverables: [
      "巡检/保养记录",
      "隐患排查报告",
      "整改建议与阶段复核",
      "备件与维护周期建议",
    ],
    heroImageUrl: images.serviceHero.url,
    heroImageAlt: images.serviceHero.alt,
  },
  {
    slug: "installation",
    name: "电气设备安装",
    summary:
      "按施工规范实施配电与控制系统安装，包括线缆敷设、端子标识、接地与绝缘检查等关键工序。",
    highlights: [
      "规范化施工与标识",
      "关键工序质量控制",
      "通电检查与联调配合",
      "验收资料交付",
    ],
    deliverables: ["安装记录", "关键工序验收表", "标识与端子清单", "验收资料归档"],
    heroImageUrl: images.serviceHero.url,
    heroImageAlt: images.serviceHero.alt,
  },
  {
    slug: "construction",
    name: "现场施工",
    summary:
      "覆盖现场施工组织、进度协调、安全管理与资料归档，确保交付过程可控、可验收。",
    highlights: ["施工组织与计划", "现场安全管理", "进度与协调", "资料归档与验收"],
    deliverables: ["施工组织计划", "安全交底与检查记录", "施工过程记录", "验收与归档资料"],
    heroImageUrl: images.serviceHero.url,
    heroImageAlt: images.serviceHero.alt,
  },
  {
    slug: "programming",
    name: "电气程序设计编写",
    summary:
      "围绕控制逻辑、I/O清单与调试联机开展程序设计与版本交付，配套说明文档便于维护。",
    highlights: ["需求梳理与I/O清单", "程序设计与调试", "联机验证与验收支持", "版本管理与交付"],
    deliverables: ["工程文件与版本信息", "I/O清单", "程序说明与调试记录", "验收配合资料"],
    heroImageUrl: images.serviceHero.url,
    heroImageAlt: images.serviceHero.alt,
  },
]

