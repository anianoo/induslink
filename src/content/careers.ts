export type Job = {
  slug: string
  title: string
  location: string
  type: "全职" | "实习" | "兼职"
  updatedAt: string
  responsibilities: string[]
  requirements: string[]
}

export const jobs: Job[] = [
  {
    slug: "electrical-engineer",
    title: "电气工程师",
    location: "安徽（地点以岗位实际为准）",
    type: "全职",
    updatedAt: "2026-03-01",
    responsibilities: [
      "参与现场勘查与方案梳理",
      "配合安装施工与调试验收",
      "形成交付资料并归档",
    ],
    requirements: ["具备电气基础与现场意识", "能适应短期出差", "具备良好沟通与文档能力"],
  },
  {
    slug: "plc-engineer",
    title: "PLC工程师",
    location: "安徽（地点以岗位实际为准）",
    type: "全职",
    updatedAt: "2026-03-01",
    responsibilities: ["参与控制逻辑设计", "完成程序开发与联机调试", "输出版本信息与说明文档"],
    requirements: ["熟悉常见控制逻辑与调试流程", "具备版本化交付意识", "能独立定位问题并闭环"],
  },
  {
    slug: "site-manager",
    title: "现场施工管理",
    location: "安徽（地点以岗位实际为准）",
    type: "全职",
    updatedAt: "2026-02-20",
    responsibilities: ["组织现场施工与协调", "落实安全交底与检查", "推进进度与质量控制点"],
    requirements: ["具备现场管理经验优先", "重视安全与流程", "能推动多方协同"],
  },
  {
    slug: "maintenance-engineer",
    title: "运维工程师",
    location: "安徽（地点以岗位实际为准）",
    type: "全职",
    updatedAt: "2026-02-10",
    responsibilities: ["开展巡检与保养", "故障排查与恢复支持", "输出运维记录与建议"],
    requirements: ["具备基础电气知识", "注重记录与复核", "能在现场保持规范操作"],
  },
]

