import { images } from "@/content/images"

export type NewsItem = {
  slug: string
  title: string
  category: "公司动态" | "技术科普" | "行业观察"
  publishedAt: string
  summary: string
  coverImageUrl: string
  coverImageAlt: string
  paragraphs: string[]
}

export const news: NewsItem[] = [
  {
    slug: "company-service-process-update",
    title: "服务流程与交付资料规范化更新",
    category: "公司动态",
    publishedAt: "2026-03-01",
    summary: "围绕现场交付与长期维护，完善服务流程与资料归档规范，提升可追溯性与协同效率。",
    coverImageUrl: images.newsCover.url,
    coverImageAlt: images.newsCover.alt,
    paragraphs: [
      "本次更新聚焦现场勘查、方案确认、实施交付、验收归档与持续运维等关键环节。",
      "通过清单化交付物与过程记录，提升项目透明度与后续维护效率。",
    ],
  },
  {
    slug: "electrical-inspection-checklist",
    title: "电气巡检要点清单：从现场到资料闭环",
    category: "技术科普",
    publishedAt: "2026-02-20",
    summary: "以可执行清单方式梳理巡检要点，强调隐患分级、复核与资料归档，提升运维质量。",
    coverImageUrl: images.newsCover.url,
    coverImageAlt: images.newsCover.alt,
    paragraphs: [
      "巡检不仅是发现问题，更是形成闭环与可追溯资料。",
      "建议从标识、接地、绝缘、紧固、散热与环境等方面分项检查，并记录整改建议。",
    ],
  },
  {
    slug: "cable-labeling-standards",
    title: "线缆与端子标识：提升维护效率的关键细节",
    category: "技术科普",
    publishedAt: "2026-02-10",
    summary: "标识体系直接影响维护效率与风险控制，建议在安装阶段一次性建立清晰可读的标识规范。",
    coverImageUrl: images.newsCover.url,
    coverImageAlt: images.newsCover.alt,
    paragraphs: [
      "标识的目标是降低沟通成本与误操作风险。",
      "建议按回路、柜体、端子排与线缆两端统一编号，并在资料中同步维护清单。",
    ],
  },
  {
    slug: "safety-and-compliance-basics",
    title: "现场安全与合规整改：如何组织检查与验收资料",
    category: "行业观察",
    publishedAt: "2026-01-25",
    summary: "安全与合规整改不仅是现场处理，更需要过程记录与验收资料，便于审阅与持续复核。",
    coverImageUrl: images.newsCover.url,
    coverImageAlt: images.newsCover.alt,
    paragraphs: [
      "建议建立分级清单与整改闭环记录，关键节点复核并归档。",
      "资料化交付能显著降低后续检查与维护成本。",
    ],
  },
  {
    slug: "commissioning-tips",
    title: "联调与试运行：问题清单与闭环方法",
    category: "技术科普",
    publishedAt: "2026-01-12",
    summary: "在联调阶段用问题清单管理优先级与验证路径，能显著提升协同效率并减少返工。",
    coverImageUrl: images.newsCover.url,
    coverImageAlt: images.newsCover.alt,
    paragraphs: [
      "建议按影响范围与复现路径分类问题，并为每项问题记录验证结论。",
      "验收资料与问题闭环应同步推进，避免集中收尾。",
    ],
  },
  {
    slug: "energy-structure-review",
    title: "能耗结构梳理：从数据到策略的第一步",
    category: "行业观察",
    publishedAt: "2025-12-28",
    summary: "能效优化的前提是结构清晰，建议先建立分项数据与运行策略的对应关系。",
    coverImageUrl: images.newsCover.url,
    coverImageAlt: images.newsCover.alt,
    paragraphs: [
      "数据的目的不是堆积，而是形成可执行的策略。",
      "建议先从关键设备、关键时段与关键工况入手。",
    ],
  },
  {
    slug: "retrofit-window-planning",
    title: "停机窗口内改造：计划与风险点清单",
    category: "技术科普",
    publishedAt: "2025-12-10",
    summary: "停机窗口改造的关键是计划与清单，提前确认物料、资料、工具与切换步骤。",
    coverImageUrl: images.newsCover.url,
    coverImageAlt: images.newsCover.alt,
    paragraphs: [
      "建议将关键路径拆解到小时级，并明确验收点与回退方案。",
      "资料与标识应同步准备，避免现场二次返工。",
    ],
  },
  {
    slug: "maintenance-records",
    title: "运维记录怎么写才可追溯",
    category: "技术科普",
    publishedAt: "2025-11-22",
    summary: "可追溯记录包含时间、地点、对象、现象、处置、复核与建议，信息结构化更易复用。",
    coverImageUrl: images.newsCover.url,
    coverImageAlt: images.newsCover.alt,
    paragraphs: [
      "建议以固定模板记录巡检、处置与复核，形成长期可查询的资料库。",
      "结构化记录能有效减少人员变动带来的信息断层。",
    ],
  },
  {
    slug: "installation-qc-points",
    title: "安装施工质量控制点：从工序到验收",
    category: "行业观察",
    publishedAt: "2025-11-05",
    summary: "关键工序有明确验收点，能减少后期隐患与返工，建议形成可复用的检查表。",
    coverImageUrl: images.newsCover.url,
    coverImageAlt: images.newsCover.alt,
    paragraphs: [
      "包括接地、绝缘、紧固、标识与通电检查等关键项。",
      "检查表应与资料归档同步，形成闭环。",
    ],
  },
  {
    slug: "programming-versioning",
    title: "程序交付的版本管理：降低维护成本",
    category: "技术科普",
    publishedAt: "2025-10-18",
    summary: "版本清晰、说明齐全的交付方式有助于后期维护与扩展，避免现场反复确认。",
    coverImageUrl: images.newsCover.url,
    coverImageAlt: images.newsCover.alt,
    paragraphs: [
      "建议每次交付包含版本号、变更点、验证结论与回退说明。",
      "工程文件与参数清单应同步归档。",
    ],
  },
  {
    slug: "emergency-response-mindset",
    title: "应急抢修：从处置到复盘的工作方法",
    category: "行业观察",
    publishedAt: "2025-09-30",
    summary: "应急抢修不仅要恢复运行，更要形成复盘与整改建议，降低重复故障概率。",
    coverImageUrl: images.newsCover.url,
    coverImageAlt: images.newsCover.alt,
    paragraphs: [
      "建议将故障现象、定位过程、处置步骤与复核结论完整记录。",
      "复盘输出整改建议与备件策略，提高长期稳定性。",
    ],
  },
  {
    slug: "documentation-delivery",
    title: "交付资料清单化：让验收更可控",
    category: "公司动态",
    publishedAt: "2025-09-12",
    summary: "将交付资料清单化并在过程阶段逐项完成，能显著降低集中收尾风险。",
    coverImageUrl: images.newsCover.url,
    coverImageAlt: images.newsCover.alt,
    paragraphs: [
      "建议在项目启动阶段即明确交付物范围，并在施工与调试阶段同步归档。",
      "资料清单可作为双方协同与验收依据。",
    ],
  },
  {
    slug: "site-safety-briefing",
    title: "现场安全交底：组织方式与记录要点",
    category: "技术科普",
    publishedAt: "2025-08-25",
    summary: "安全交底应明确风险点、控制措施与责任人，并形成可审阅的记录。",
    coverImageUrl: images.newsCover.url,
    coverImageAlt: images.newsCover.alt,
    paragraphs: [
      "建议按工序组织交底，现场变更需补充交底记录。",
      "记录应包含时间、地点、人员与确认方式。",
    ],
  },
  {
    slug: "industry-trends-2025",
    title: "工业现场保障趋势：更重视稳定性与可追溯",
    category: "行业观察",
    publishedAt: "2025-08-01",
    summary: "在不确定环境下，企业更关注稳定性、响应机制与资料可追溯的长期价值。",
    coverImageUrl: images.newsCover.url,
    coverImageAlt: images.newsCover.alt,
    paragraphs: [
      "建议从流程、资料与机制三个层面建立可持续的保障体系。",
      "将运维与交付标准化能显著提升协同效率。",
    ],
  },
  {
    slug: "company-website-launch",
    title: "官网内容体系更新：服务、案例与资料中心",
    category: "公司动态",
    publishedAt: "2025-07-15",
    summary: "官网新增服务体系、案例中心与资料下载模块，便于客户快速了解能力与交付方式。",
    coverImageUrl: images.newsCover.url,
    coverImageAlt: images.newsCover.alt,
    paragraphs: [
      "通过更清晰的页面结构展示服务范围与交付物清单。",
      "同时提供资料下载与联系入口，缩短沟通路径。",
    ],
  },
]

