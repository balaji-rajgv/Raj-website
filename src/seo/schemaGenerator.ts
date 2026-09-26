import { SITE_URL, siteOrganization, RouteSEOConfig } from "./config";

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: siteOrganization.name,
    alternateName: ["RGV", "TradingFootprint", "Raj Global Ventures Trading"],
    description: "High-performance quantitative trading software, 20+ broker connectors, and TradingFootprint for Options, Futures, Equity, and Commodities.",
    publisher: {
      "@id": `${SITE_URL}/#organization`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blogs?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    inLanguage: "en-US"
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "FinancialService"],
    "@id": `${SITE_URL}/#organization`,
    name: siteOrganization.name,
    legalName: siteOrganization.legalName,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}${siteOrganization.logo}`,
      caption: `${siteOrganization.name} Logo`
    },
    founder: {
      "@type": "Person",
      name: siteOrganization.founder,
      jobTitle: "CEO & Founder"
    },
    foundingDate: siteOrganization.foundingDate,
    foundingLocation: {
      "@type": "Place",
      name: siteOrganization.foundingLocation
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteOrganization.addressLocality,
      addressRegion: siteOrganization.addressRegion,
      addressCountry: siteOrganization.addressCountry
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteOrganization.phone,
        email: siteOrganization.email,
        contactType: "customer support",
        areaServed: ["IN", "AE", "SG", "GB", "US"],
        availableLanguage: ["English", "Tamil"]
      }
    ],
    sameAs: [
      "https://www.linkedin.com/company/raj-global-ventures",
      "https://twitter.com/rajglobalventures"
    ]
  };
}

export function generateSiteNavigationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/#sitelinks-navigation`,
    name: "Key Site Navigation Links",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "TradingFootprint Platform",
        description: "Multi-asset algorithmic trading platform for Options, Futures, Equity, and Commodities.",
        url: `${SITE_URL}/products/tradingfootprint`
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Early Beta Access",
        description: "Apply for early beta qualification and testing of TradingFootprint.",
        url: `${SITE_URL}/beta`
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Financial Solutions",
        description: "Institutional trading infrastructure, low-latency market gateways, and risk systems.",
        url: `${SITE_URL}/solutions/financial`
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Custom Development",
        description: "Bespoke execution algorithms, tick capture engines, and 20+ broker connectors.",
        url: `${SITE_URL}/services/development`
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Technical Consulting",
        description: "Architecture reviews, latency optimization, and exchange certification advisory.",
        url: `${SITE_URL}/services/consulting`
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "Research & Blogs",
        description: "In-depth technical articles, order flow footprint charts, and quant research.",
        url: `${SITE_URL}/blogs`
      },
      {
        "@type": "SiteNavigationElement",
        position: 7,
        name: "About Us",
        description: "Founding story in Tirunelveli, engineering milestones, and core principles.",
        url: `${SITE_URL}/about`
      },
      {
        "@type": "SiteNavigationElement",
        position: 8,
        name: "Contact Us",
        description: "Reach our engineering and architecture team for consultations.",
        url: `${SITE_URL}/contact`
      }
    ]
  };
}

export function generateBreadcrumbSchema(breadcrumbs: NonNullable<RouteSEOConfig["breadcrumbs"]>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path === "/" ? "" : crumb.path}`
    }))
  };
}

export function generateArticleSchema(config: RouteSEOConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: config.title.replace(" | Raj Global Ventures", ""),
    description: config.description,
    image: `${SITE_URL}${config.image}`,
    author: {
      "@type": "Organization",
      name: config.author || siteOrganization.name
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`
    },
    datePublished: config.publishedTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${config.path}`
    }
  };
}

export function generateWebPageSchema(config: RouteSEOConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${config.path}#webpage`,
    url: `${SITE_URL}${config.path}`,
    name: config.title,
    description: config.description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`
    }
  };
}

export function getFullRouteSchemas(config: RouteSEOConfig) {
  const schemas: Record<string, unknown>[] = [];

  if (config.path === "/") {
    schemas.push(generateWebSiteSchema());
    schemas.push(generateOrganizationSchema());
    schemas.push(generateSiteNavigationSchema());
  } else {
    schemas.push(generateWebPageSchema(config));
  }

  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(config.breadcrumbs));
  }

  if (config.type === "article") {
    schemas.push(generateArticleSchema(config));
  }

  return {
    "@context": "https://schema.org",
    "@graph": schemas
  };
}
