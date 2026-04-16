# 部署到 Nginx（解决 /contact 404）

当前站点使用 `react-router-dom` 的 `BrowserRouter`，因此刷新或直接访问 `/contact` 这类路径时，需要 Nginx 把“非静态文件请求”回退到 `index.html`。

## 关键配置

把 `deploy/nginx.conf` 中的内容合并到你的站点 `server {}` 配置中，至少需要：

- `location / { try_files $uri $uri/ /index.html; }`

## 目录

- `root` 指向你的 `dist` 目录（Vite build 输出）
- 如果你没有后端接口，可删除 `location /api/ { ... }`

