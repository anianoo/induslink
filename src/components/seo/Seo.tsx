import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { site } from "@/content/site"

export type SeoProps = {
  title: string
  description: string
  imageUrl?: string
  canonicalPath?: string
  noIndex?: boolean
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

function setMeta(nameOrProp: { name?: string; property?: string }, content: string) {
  const selector = nameOrProp.name
    ? `meta[name="${nameOrProp.name}"]`
    : `meta[property="${nameOrProp.property}"]`
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement("meta")
    if (nameOrProp.name) el.setAttribute("name", nameOrProp.name)
    if (nameOrProp.property) el.setAttribute("property", nameOrProp.property)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

function setJsonLd(id: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  const scriptId = `jsonld-${id}`
  let el = document.head.querySelector(`script#${scriptId}`) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement("script")
    el.type = "application/ld+json"
    el.id = scriptId
    document.head.appendChild(el)
  }
  el.text = JSON.stringify(data)
}

export function Seo(props: SeoProps) {
  const location = useLocation()
  useEffect(() => {
    const canonical = new URL(props.canonicalPath ?? location.pathname, site.baseUrl).toString()
    document.title = props.title

    setMeta({ name: "description" }, props.description)
    setMeta({ property: "og:type" }, "website")
    setMeta({ property: "og:title" }, props.title)
    setMeta({ property: "og:description" }, props.description)
    setMeta({ property: "og:image" }, props.imageUrl ?? site.ogImageUrl)
    setMeta({ property: "og:url" }, canonical)

    setMeta({ name: "twitter:card" }, "summary_large_image")
    setMeta({ name: "twitter:title" }, props.title)
    setMeta({ name: "twitter:description" }, props.description)
    setMeta({ name: "twitter:image" }, props.imageUrl ?? site.ogImageUrl)

    if (props.noIndex) {
      setMeta({ name: "robots" }, "noindex,nofollow")
    } else {
      const robots = document.head.querySelector('meta[name="robots"]')
      if (robots) robots.remove()
    }

    setLink("canonical", canonical)

    const orgLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.name,
      url: site.baseUrl,
    }
    const websiteLd = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.baseUrl,
    }
    setJsonLd("org", [orgLd, websiteLd])

    if (props.jsonLd) {
      setJsonLd("page", props.jsonLd)
    } else {
      const existing = document.head.querySelector('script#jsonld-page')
      if (existing) existing.remove()
    }
  }, [location.pathname, props.canonicalPath, props.description, props.imageUrl, props.jsonLd, props.noIndex, props.title])

  return null
}

