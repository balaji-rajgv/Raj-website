import React, { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  author?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export function SEO({
  title,
  description,
  canonical,
  keywords,
  type = "website",
  image = "/image.png",
  publishedTime,
  author,
  schema
}: SEOProps) {
  useEffect(() => {
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
    setMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // 3. Canonical Link
    const fullCanonical = canonical
      ? canonical.startsWith("http")
        ? canonical
        : `https://rajglobalventures.com${canonical}`
      : `https://rajglobalventures.com${window.location.pathname}`;
    setLinkTag("canonical", fullCanonical);

    // 4. Open Graph Tags
    const fullImageUrl = image.startsWith("http")
      ? image
      : `https://rajglobalventures.com${image}`;

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
    if (schema) {
      scriptElement = document.createElement("script");
      scriptElement.type = "application/ld+json";
      scriptElement.id = "page-schema-jsonld";
      scriptElement.text = JSON.stringify(schema);
      document.head.appendChild(scriptElement);
    }

    // Cleanup on unmount or route change
    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [title, description, canonical, keywords, type, image, publishedTime, author, schema]);

  return null;
}
