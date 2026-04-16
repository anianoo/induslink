export type DownloadFile = {
  slug: string
  title: string
  type: "公司资料" | "服务说明" | "交付物样例" | "其他"
  version: string
  updatedAt: string
  fileUrl: string
  fileSizeText: string
}

export const downloads: DownloadFile[] = [
  {
    slug: "company-profile",
    title: "公司能力介绍（预览）",
    type: "公司资料",
    version: "v1.0",
    updatedAt: "2026-03-01",
    fileUrl: "/files/company-profile.txt",
    fileSizeText: "在线预览（TXT）",
  },
  {
    slug: "service-catalog",
    title: "服务目录与交付物清单（预览）",
    type: "服务说明",
    version: "v1.0",
    updatedAt: "2026-02-20",
    fileUrl: "/files/service-catalog.txt",
    fileSizeText: "在线预览（TXT）",
  },
  {
    slug: "delivery-sample",
    title: "交付物样例（脱敏）",
    type: "交付物样例",
    version: "v1.0",
    updatedAt: "2026-02-10",
    fileUrl: "/files/delivery-sample.txt",
    fileSizeText: "在线预览（TXT）",
  },
  {
    slug: "qualification-sample",
    title: "资质与能力展示样例（预览）",
    type: "其他",
    version: "v1.0",
    updatedAt: "2026-01-25",
    fileUrl: "/files/qualification-sample.txt",
    fileSizeText: "在线预览（TXT）",
  },
]

