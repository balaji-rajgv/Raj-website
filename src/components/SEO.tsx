import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, routesSEO } from "../seo/config";
import { getFullRouteSchemas } from "../seo/schemaGenerator";

export interface SEOProps {
  path?: string;
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
  publishedTime?: string;
  author?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
}

export function SEO(props: SEOProps) {
  let locationPath = "";
  try {
    const loc = useLocation();
    locationPath = loc.pathname;
  } catch {
    // If outside router context
    locationPath = "";
  }

  const activePath = props.path || locationPath || "/";
  const routeConfig = routesSEO[activePath] || routesSEO["/"];

  const title = props.title || routeConfig.title;
  const description = props.description || routeConfig.description;
  const keywords = props.keywords || routeConfig.keywords;
  const type = props.type || routeConfig.type;
  const image = props.image || routeConfig.image;
  const publishedTime = props.publishedTime || routeConfig.publishedTime;
  const author = props.author || routeConfig.author;
  const noindex = props.noindex ?? routeConfig.noindex;
  const canonical = props.canonical || activePath;

  const resolvedSchema =
    props.schema !== undefined
      ? props.schema
      : getFullRouteSchemas(routeConfig);

  useEffect(() => {
    if (typeof document === "undefined") return;

    // 1. Update Title
    const formattedTitle = title.includes("Raj Global Ventures")
      ? title
      : `${title} | Raj Global Ventures`;
    document.title = formattedTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to set or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // 2. Standard Meta Tags
    setMetaTag("name", "description", description);
    if (keywords) {
      setMetaTag("name", "keywords", keywords);
    }

    const robotsValue = noindex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
    setMetaTag("name", "robots", robotsValue);

    // 3. Canonical Link
    const fullCanonical = canonical.startsWith("http")
      ? canonical
      : `${SITE_URL}${canonical === "/" ? "" : canonical}`;
    setLinkTag("canonical", fullCanonical);

    // 4. Open Graph Tags
    const fullImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    setMetaTag("property", "og:title", formattedTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", fullCanonical);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:image", fullImageUrl);
    setMetaTag("property", "og:site_name", "Raj Global Ventures");
    setMetaTag("property", "og:locale", "en_US");

    if (publishedTime) {
      setMetaTag("property", "article:published_time", publishedTime);
    }
    if (author) {
      setMetaTag("property", "article:author", author);
    }

    // 5. Twitter Card Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", formattedTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", fullImageUrl);

    // 6. Structured Schema (JSON-LD)
    let scriptElement: HTMLScriptElement | null = null;
    if (resolvedSchema) {
      scriptElement = document.createElement("script");
      scriptElement.type = "application/ld+json";
      scriptElement.id = "page-schema-jsonld";
      scriptElement.text = JSON.stringify(resolvedSchema);
      document.head.appendChild(scriptElement);
    }

    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [title, description, canonical, keywords, type, image, publishedTime, author, resolvedSchema, noindex]);

  return null;
}
