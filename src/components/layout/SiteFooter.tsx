import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, FileText } from "lucide-react"
import { site } from "@/content/site"
import { images } from "@/content/images"

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container px-4">
        <div className="grid gap-8 py-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              {/* 推荐尺寸：96x96（SVG/PNG），显示尺寸 40x40 */}
              <div className="h-10 w-10 overflow-hidden rounded-xl">
                <img src="https://fastlink.cokey.xyz/f/dxVJig/logo.png" alt={`${site.shortName} 标识`} className="h-full w-full object-contain" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">{site.name}</div>
                <div className="text-xs text-slate-500">电气设备运维｜安装施工｜程序设计</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              围绕工业现场的电气运维与工程交付，提供从勘查、实施到验收与资料归档的一体化服务。
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs font-semibold text-slate-900">快速入口</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <Link className="focus-ring rounded-md px-2 py-1 text-slate-700 hover:bg-slate-50" to="/services">
                业务与服务
              </Link>
              <Link className="focus-ring rounded-md px-2 py-1 text-slate-700 hover:bg-slate-50" to="/solutions">
                解决方案
              </Link>
              <Link className="focus-ring rounded-md px-2 py-1 text-slate-700 hover:bg-slate-50" to="/cases">
                项目案例
              </Link>
              <Link className="focus-ring rounded-md px-2 py-1 text-slate-700 hover:bg-slate-50" to="/downloads">
                下载中心
              </Link>
              <Link className="focus-ring rounded-md px-2 py-1 text-slate-700 hover:bg-slate-50" to="/support">
                服务支持
              </Link>
              <Link className="focus-ring rounded-md px-2 py-1 text-slate-700 hover:bg-slate-50" to="/careers">
                招贤纳士
              </Link>
            </div>

            <div className="mt-6 text-xs font-semibold text-slate-900">合规与声明</div>
            <div className="mt-3 grid gap-2 text-sm">
              <Link className="focus-ring inline-flex items-center gap-2 rounded-md px-2 py-1 text-slate-700 hover:bg-slate-50" to="/privacy">
                <FileText className="h-4 w-4" />
                隐私政策
              </Link>
              <Link className="focus-ring inline-flex items-center gap-2 rounded-md px-2 py-1 text-slate-700 hover:bg-slate-50" to="/terms">
                <FileText className="h-4 w-4" />
                使用条款
              </Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-semibold text-slate-900">联系方式</div>
            <div className="mt-3 space-y-2 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-slate-500" />
                <div>
                  <div>{site.contact.address}</div>
                  <div className="text-xs text-slate-500">{site.contact.hours}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-500" />
                <span>{site.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-500" />
                <span>{site.contact.email}</span>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <div className="p-3">
                <div className="text-xs font-semibold text-slate-900">企业二维码</div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="aspect-square h-20 w-20 overflow-hidden rounded-lg bg-white">
                    {/* 尺寸：600x600，PNG/SVG 均可 */}
                    <img
                      src={images.qrCode.url}
                      alt={images.qrCode.alt}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="text-xs text-slate-600">扫码关注公众号，获取资料更新与业务联络入口。</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-slate-200 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {site.name}. 保留所有权利。</div>
          <div>{site.contact.icp}</div>
        </div>
      </div>
    </footer>
  )
}

