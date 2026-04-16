import { images } from "@/content/images"

export type CaseStudy = {
  slug: string
  title: string
  industry: string
  services: string[]
  summary: string
  coverImageUrl: string
  coverImageAlt: string
  sections: { title: string; paragraphs: string[] }[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "manufacturing-line-maintenance",
    title: "制造企业现场运维与隐患整改支持",
    industry: "制造业",
    services: ["电气设备运维"],
    summary:
      "围绕配电与控制系统开展周期巡检与隐患分级整改，提升设备稳定性与资料可追溯性。",
    coverImageUrl: images.caseCoverMaintenance.url,
    coverImageAlt: images.caseCoverMaintenance.alt,
    sections: [
      { title: "背景", paragraphs: ["客户现场设备类型多、运行时间长，需建立更规范的运维与整改闭环。"] },
      { title: "实施", paragraphs: ["按区域与设备分类开展巡检，形成隐患清单与整改建议，并配合实施与复核。"] },
      { title: "结果", paragraphs: ["交付完整运维记录与整改资料，关键设备运行稳定性得到提升。"] },
    ],
  },
  {
    slug: "power-cabinet-installation",
    title: "配电与控制柜安装及验收资料交付",
    industry: "仓储物流",
    services: ["电气设备安装", "现场施工"],
    summary:
      "按施工规范组织安装，关注标识、接地、绝缘等关键点，交付验收资料便于后续维护。",
    coverImageUrl: images.caseCoverInstallation.url,
    coverImageAlt: images.caseCoverInstallation.alt,
    sections: [
      { title: "背景", paragraphs: ["现场需按窗口期完成设备安装并满足验收要求。"] },
      { title: "实施", paragraphs: ["制定施工计划与工序验收点，完成安装、通电检查与资料归档。"] },
      { title: "结果", paragraphs: ["完成交付与验收配合，形成可审阅的资料包。"] },
    ],
  },
  {
    slug: "on-site-construction-coordination",
    title: "现场施工组织与多方协同交付",
    industry: "市政公用",
    services: ["现场施工"],
    summary:
      "在多方协同场景下推进施工与资料闭环，确保进度、安全与质量控制点可追溯。",
    coverImageUrl: images.caseCoverConstruction.url,
    coverImageAlt: images.caseCoverConstruction.alt,
    sections: [
      { title: "背景", paragraphs: ["现场工序多、接口复杂，需要更清晰的施工组织与沟通机制。"] },
      { title: "实施", paragraphs: ["建立进度与安全管理节奏，关键节点形成检查记录与交底资料。"] },
      { title: "结果", paragraphs: ["按计划完成交付并提供资料归档，便于后续审计与维护。"] },
    ],
  },
  {
    slug: "plc-programming-handover",
    title: "控制程序设计与版本化交付",
    industry: "制造业",
    services: ["电气程序设计编写"],
    summary:
      "梳理需求与I/O清单，完成程序设计与联机调试，并交付版本信息与说明文档。",
    coverImageUrl: images.caseCoverProgramming.url,
    coverImageAlt: images.caseCoverProgramming.alt,
    sections: [
      { title: "背景", paragraphs: ["现场控制需求调整频繁，需保证版本清晰与维护可持续。"] },
      { title: "实施", paragraphs: ["以I/O与功能清单为基线，完成程序设计、联机调试与验收配合。"] },
      { title: "结果", paragraphs: ["交付工程文件、版本记录与说明文档，便于后续维护与扩展。"] },
    ],
  },
  {
    slug: "safety-compliance-rectification",
    title: "现场安全与合规整改资料化交付",
    industry: "能源与环保",
    services: ["电气设备运维", "现场施工"],
    summary:
      "围绕标识、接地、绝缘与资料要求开展整改，形成过程记录与验收资料。",
    coverImageUrl: images.caseCoverSafety.url,
    coverImageAlt: images.caseCoverSafety.alt,
    sections: [
      { title: "背景", paragraphs: ["现场存在部分隐患点，需要在不影响生产的前提下完成整改与复核。"] },
      { title: "实施", paragraphs: ["分级整改并记录过程，关键点复核后统一归档资料。"] },
      { title: "结果", paragraphs: ["整改资料齐备、可审阅，便于后续检查与维护。"] },
    ],
  },
  {
    slug: "commissioning-support",
    title: "调试与试运行阶段问题闭环支持",
    industry: "制造业",
    services: ["调试与验收支持"],
    summary:
      "在联调与试运行阶段建立问题清单与闭环机制，保障验收资料完整性。",
    coverImageUrl: images.caseCover.url,
    coverImageAlt: images.caseCover.alt,
    sections: [
      { title: "背景", paragraphs: ["项目联调周期紧、问题集中，需要更高效的闭环方式。"] },
      { title: "实施", paragraphs: ["按优先级推进问题定位与验证，形成闭环记录与验收资料清单。"] },
      { title: "结果", paragraphs: ["问题闭环清晰，交付资料完整，验收过程更可控。"] },
    ],
  },
  {
    slug: "emergency-response-plan",
    title: "关键设备应急保障机制建立",
    industry: "仓储物流",
    services: ["应急抢修与保障"],
    summary:
      "明确响应流程、关键备件与资料清单，缩短故障处置时间并降低停机风险。",
    coverImageUrl: images.caseCoverEmergency.url,
    coverImageAlt: images.caseCoverEmergency.alt,
    sections: [
      { title: "背景", paragraphs: ["关键设备停机会影响整体运营，需要更明确的保障机制。"] },
      { title: "实施", paragraphs: ["梳理关键节点、备件与资料，形成应急预案并开展演练式复盘。"] },
      { title: "结果", paragraphs: ["形成可执行的应急预案与资料包，提升处置效率。"] },
    ],
  },
  {
    slug: "site-upgrade-window",
    title: "停机窗口内施工与切换协同",
    industry: "制造业",
    services: ["现场施工", "电气设备安装"],
    summary:
      "针对停机窗口组织施工与切换，确保关键路径明确、资料归档完善。",
    coverImageUrl: images.caseCoverUpgrade.url,
    coverImageAlt: images.caseCoverUpgrade.alt,
    sections: [
      { title: "背景", paragraphs: ["停机窗口有限，需要更严格的计划与协同执行。"] },
      { title: "实施", paragraphs: ["提前确认清单与风险点，按关键路径实施并形成过程记录。"] },
      { title: "结果", paragraphs: ["按窗口完成切换并交付资料，保障后续运维可追溯。"] },
    ],
  },
]

