<img width="2523" height="1381" alt="image" src="https://github.com/user-attachments/assets/78220d61-cdf5-42c4-a35b-da1f48f9a450" /># IndusLink - 工业自动化企业官网

![React](https://img.shields.io/badge/React-18.3.1-blue.svg?style=flat\&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg?style=flat\&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple.svg?style=flat\&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC.svg?style=flat\&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green.svg)

本项目是一款现代化企业官网前端开源项目，专为工业自动化、制造及 B2B 科技型企业量身定制。基于 **React + TypeScript + Vite** 构建，旨在对外展示品牌形象、核心产品与行业解决方案，同时提供线索咨询、资料下载及求职入口，全方位提升企业的数字化品牌可信度与获客效率。

## 📸 效果预览

以下是本项目的核心页面效果展示：

<p align="center">
  <img src="https://fastlink.cokey.xyz/f/W0bWI8/%E5%89%AA%E8%B4%B4%E6%9D%BF%201776307420120.png" alt="首页主视觉" width="48%" />
  <img src="https://fastlink.cokey.xyz/f/B0Axte/%E5%89%AA%E8%B4%B4%E6%9D%BF%201776307498260.png" alt="关于我们" width="48%" />
</p>
<p align="center">
  <img src="https://fastlink.cokey.xyz/f/po2bSj/%E5%89%AA%E8%B4%B4%E6%9D%BF%201776307548338.png" alt="服务页面" width="48%" />
</p>

## ✨ 核心特性

- 📱 **全端响应式设计 (Multi-Device UI)**：采用“桌面优先，向下兼容”策略，完美适配桌面、平板和手机端，保证多端一致的浏览体验。
- 🎨 **现代化 UI 与动效**：结合 `Tailwind CSS` 与 `Framer Motion`，提供流畅的页面过渡、滚动视差、渐显动画等高品质视觉反馈。
- 🧩 **丰富的业务模块**：内置首页、关于我们、产品中心、解决方案、行业应用、客户案例、新闻资讯、下载中心、招聘与联系我们等 14+ 核心页面。
- 🚀 **极速构建与开发**：使用 `Vite` 作为构建工具，提供毫秒级的冷启动和 HMR 热更新。
- 🛡️ **类型安全与状态管理**：全站采用 `TypeScript` 编写，使用 `Zustand` 进行轻量级且高效的全局状态管理。
- 🔍 **SEO 友好**：支持动态 Meta 标签管理与语义化 HTML 结构，有利于搜索引擎抓取。

## 🛠️ 技术栈

- **前端框架**：[React 18](https://react.dev/)
- **开发语言**：[TypeScript](https://www.typescriptlang.org/)
- **构建工具**：[Vite](https://vitejs.dev/)
- **路由管理**：[React Router v7](https://reactrouter.com/)
- **样式方案**：[Tailwind CSS](https://tailwindcss.com/)
- **动画引擎**：[Framer Motion](https://www.framer.com/motion/)
- **状态管理**：[Zustand](https://github.com/pmndrs/zustand)
- **图标库**：[Lucide React](https://lucide.dev/)

## 📂 目录结构

```text
├── api/                  # 后端/Mock 接口服务
├── deploy/               # 部署相关配置 (Nginx 等)
├── public/               # 静态资源 (图片、文件、网站图标等)
├── src/                  # 前端源码
│   ├── assets/           # 静态资源
│   ├── components/       # 公共与业务组件
│   ├── content/          # 页面内容/Mock 数据配置
│   ├── hooks/            # 自定义 React Hooks
│   ├── lib/              # 工具函数与核心库
│   ├── pages/            # 页面级组件
│   ├── App.tsx           # 根组件
│   ├── main.tsx          # 项目入口
│   └── index.css         # 全局样式
├── package.json          # 项目依赖配置
├── tailwind.config.js    # Tailwind CSS 配置文件
├── tsconfig.json         # TypeScript 配置文件
└── vite.config.ts        # Vite 配置文件
```

## 🚀 快速开始

### 1. 环境准备

确保您的本地环境已安装以下工具：

- [Node.js](https://nodejs.org/) (建议 v18 或以上版本)
- npm 或 pnpm 或 yarn

### 2. 克隆项目

```bash
git clone https://github.com/your-username/induslink.git
cd induslink
```

### 3. 安装依赖

```bash
npm install
# 或使用 pnpm
pnpm install
```

### 4. 本地开发运行

本项目包含了前端服务和模拟后端服务。运行以下命令将同时启动前端 Vite 服务和后端 Node 服务：

```bash
npm run dev
```

前端服务默认运行在 `http://localhost:5173`。

## 📜 脚本命令

| 命令                   | 说明                            |
| :------------------- | :---------------------------- |
| `npm run dev`        | 并发启动前端开发服务器与后端服务              |
| `npm run client:dev` | 仅启动前端 Vite 开发服务器              |
| `npm run server:dev` | 仅启动后端 Node (nodemon) 服务       |
| `npm run build`      | 执行 TypeScript 类型检查并构建前端生产环境代码 |
| `npm run preview`    | 预览生产环境构建产物                    |
| `npm run lint`       | 运行 ESLint 检查代码规范              |
| `npm run check`      | 运行 TypeScript 类型检查（不生成文件）     |

## 🤝 参与贡献

欢迎任何形式的贡献！如果您有好的建议、发现了 Bug 或想增加新功能，请遵循以下流程：

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 发起 Pull Request

提交代码时，请保持注释清晰（**优先使用中文注释**），并确保通过了本地的 `npm run lint` 和 `npm run check` 检查。

## 📄 开源协议

本项目采用 [MIT License](LICENSE) 开源协议。您可以自由地使用、修改和分发本项目的代码，但请保留原作者的版权声明。
