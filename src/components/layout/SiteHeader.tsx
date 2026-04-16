import { useEffect, useMemo, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"

type NavItem = { label: string; to: string }

const primaryNav: NavItem[] = [
  { label: "首页", to: "/" },
  { label: "关于我们", to: "/about" },
  { label: "业务与服务", to: "/services" },
  { label: "解决方案", to: "/solutions" },
  { label: "项目案例", to: "/cases" },
  { label: "新闻资讯", to: "/news" },
  { label: "联系我们", to: "/contact" },
]

const moreNav: NavItem[] = [
  { label: "资质与能力", to: "/qualifications" },
  { label: "服务支持", to: "/support" },
  { label: "下载中心", to: "/downloads" },
  { label: "招贤纳士", to: "/careers" },
  { label: "常见问题", to: "/faq" },
  { label: "站点地图", to: "/sitemap" },
]

function DesktopNavLink({ to, children }: { to: string; children: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "focus-ring inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition",
          "text-slate-700 hover:text-slate-900 hover:bg-white/60",
          isActive && "bg-white text-slate-900 shadow-sm",
        )
      }
    >
      {children}
    </NavLink>
  )
}

function MobileNavLink({ to, onClick, children }: { to: string; onClick: () => void; children: string }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "focus-ring flex items-center justify-between rounded-md border px-3 py-3 text-base",
          isActive ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-900",
        )
      }
    >
      <span>{children}</span>
      <span className="text-xs text-slate-500">进入</span>
    </NavLink>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    setMoreOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  const fullNav = useMemo(() => [...primaryNav, ...moreNav], [])

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-[rgb(var(--bg))]/80 backdrop-blur">
      <div className="container px-4">
        <div className="flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link to="/" className="focus-ring flex items-center gap-2 rounded-md px-1 py-0">
              <div className="h-11 w-11 overflow-hidden rounded-md">
                <img src="https://fastlink.cokey.xyz/f/dxVJig/logo.png" alt={`${site.shortName} 标识`} className="h-full w-full object-contain" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-slate-900">{site.shortName}</div>
                <div className="text-[11px] text-slate-500">值得信赖的工业现场电气服务</div>
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((it) => (
              <DesktopNavLink key={it.to} to={it.to}>
                {it.label}
              </DesktopNavLink>
            ))}
            <div className="relative">
              <button
                type="button"
                className={cn(
                  "focus-ring inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition",
                  "text-slate-700 hover:text-slate-900 hover:bg-white/60",
                )}
                onClick={() => setMoreOpen((v) => !v)}
              >
                更多
                <ChevronDown className="h-4 w-4" />
              </button>
              {moreOpen && (
                <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
                  <div className="p-2">
                    {moreNav.map((it) => (
                      <NavLink
                        key={it.to}
                        to={it.to}
                        className={({ isActive }) =>
                          cn(
                            "focus-ring block rounded-md px-3 py-2 text-sm",
                            isActive ? "bg-slate-900 text-white" : "text-slate-800 hover:bg-slate-50",
                          )
                        }
                        onClick={() => setMoreOpen(false)}
                      >
                        {it.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1">
                <Phone className="h-3.5 w-3.5" />
                {site.contact.phone}
              </span>
              <span className="h-3 w-px bg-slate-200" />
              <span className="inline-flex items-center gap-1">
                <Mail className="h-3.5 w-3.5" />
                {site.contact.email}
              </span>
            </div>
            <Link
              to="/contact"
              className="focus-ring inline-flex items-center rounded-md bg-[rgb(var(--accent))] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
            >
              获取方案
            </Link>
          </div>

          <button
            type="button"
            className="focus-ring inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-slate-900 shadow-sm lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="打开菜单"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40" role="dialog" aria-modal="true">
          <button className="absolute inset-0" onClick={() => setOpen(false)} aria-label="关闭遮罩" />
          <div className="absolute right-0 top-0 h-dvh w-full max-w-sm overflow-y-auto bg-[rgb(var(--bg))] shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
              <div className="text-sm font-semibold text-slate-900">菜单</div>
              <button
                type="button"
                className="focus-ring inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-900"
                onClick={() => setOpen(false)}
                aria-label="关闭菜单"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 p-4 pb-6">
              <div className="grid gap-2">
                {fullNav.map((it) => (
                  <MobileNavLink key={it.to} to={it.to} onClick={() => setOpen(false)}>
                    {it.label}
                  </MobileNavLink>
                ))}
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="text-xs font-semibold text-slate-900">联系信息</div>
                <div className="mt-2 space-y-1 text-sm text-slate-700">
                  <div>电话：{site.contact.phone}</div>
                  <div>邮箱：{site.contact.email}</div>
                  <div className="text-xs text-slate-500">{site.contact.hours}</div>
                </div>
                <Link
                  to={`/contact?from=${encodeURIComponent(location.pathname)}`}
                  onClick={() => setOpen(false)}
                  className="focus-ring mt-3 inline-flex w-full items-center justify-center rounded-md bg-[rgb(var(--accent))] px-4 py-2 text-sm font-semibold text-white"
                >
                  在线咨询
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

