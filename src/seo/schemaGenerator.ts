import { SITE_URL, siteOrganization, RouteSEOConfig } from "./config";
import { openPositions, JobRole } from "../data/careers";

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: siteOrganization.name,
    alternateName: ["RGV", "TradingFootprint", "Raj Global Ventures"],
    description: "Three generations of business excellence. Quantitative trading infrastructure, crushed stone aggregates, and bespoke custom software solutions.",
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
    hasPart: [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/products/tradingfootprint#webpage`,
        url: `${SITE_URL}/products/tradingfootprint`,
        name: "TradingFootprint Platform"
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/products/crushed-stone#webpage`,
        url: `${SITE_URL}/products/crushed-stone`,
        name: "Crushed Stone & Aggregates"
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/services/custom-software#webpage`,
        url: `${SITE_URL}/services/custom-software`,
        name: "Customize Software Solutions"
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/careers#webpage`,
        url: `${SITE_URL}/careers`,
        name: "Careers & Internships"
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/blogs#webpage`,
        url: `${SITE_URL}/blogs`,
        name: "Blogs & Insights"
      },
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about#webpage`,
        url: `${SITE_URL}/about`,
        name: "About Us"
      },
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact#webpage`,
        url: `${SITE_URL}/contact`,
        name: "Contact Us"
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/sitemap#webpage`,
        url: `${SITE_URL}/sitemap`,
        name: "Sitemap Directory"
      }
    ],
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
      "https://www.linkedin.com/in/raj-global-ventures-407813441",
      "https://www.instagram.com/raj_globalventures/",
      "https://x.com/raj_globalv",
      "https://www.youtube.com/@Raj_globalventures"
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
        name: "Crushed Stone & Aggregates",
        description: "High-grade blue metal aggregates (10mm, 20mm, 40mm), M-Sand, P-Sand, and road sub-base.",
        url: `${SITE_URL}/products/crushed-stone`
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Customize Software Solutions",
        description: "Bespoke enterprise applications, workflow automation, and custom web platforms.",
        url: `${SITE_URL}/services/custom-software`
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Early Beta Access",
        description: "Apply for early beta qualification and testing of TradingFootprint.",
        url: `${SITE_URL}/beta`
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Careers & Internships",
        description: "Join Raj Global Ventures across remote software engineering, Java backend, and Flutter development.",
        url: `${SITE_URL}/careers`
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "Blogs & Insights",
        description: "Technical breakdowns, engineering case studies, and business perspectives.",
        url: `${SITE_URL}/blogs`
      },
      {
        "@type": "SiteNavigationElement",
        position: 7,
        name: "About Us",
        description: "Three generations of business stability, founding principles, and milestones.",
        url: `${SITE_URL}/about`
      },
      {
        "@type": "SiteNavigationElement",
        position: 8,
        name: "Contact Us",
        description: "Reach our leadership and engineering teams for consultations and inquiries.",
        url: `${SITE_URL}/contact`
      },
      {
        "@type": "SiteNavigationElement",
        position: 9,
        name: "Sitemap",
        description: "Comprehensive website route directory and navigation index.",
        url: `${SITE_URL}/sitemap`
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

export function generateJobPostingSchema(job: JobRole) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `${job.summary} Requirements: ${job.requirements.join("; ")}. Responsibilities: ${job.responsibilities.join("; ")}.`,
    identifier: {
      "@type": "PropertyValue",
      name: "Raj Global Ventures",
      value: job.vrCode
    },
    datePosted: "2026-01-15T00:00:00Z",
    validThrough: "2026-12-31T23:59:59Z",
    employmentType: job.type.toLowerCase().includes("intern")
      ? "INTERN"
      : job.type.toLowerCase().includes("part")
      ? "PART_TIME"
      : "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: siteOrganization.name,
      sameAs: `${SITE_URL}/`,
      logo: `${SITE_URL}${siteOrganization.logo}`
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India"
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: siteOrganization.addressLocality,
        addressRegion: siteOrganization.addressRegion,
        addressCountry: siteOrganization.addressCountry
      }
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: {
        "@type": "QuantitativeValue",
        value: job.compensation || "Competitive / Performance-Based",
        unitText: "MONTH"
      }
    },
    skills: job.skills.join(", ")
  };
}

export function generateCareersCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/careers#collection`,
    url: `${SITE_URL}/careers`,
    name: "Careers & Internships at Raj Global Ventures",
    description: "Explore open remote software engineering, Java backend, and Flutter development opportunities at Raj Global Ventures.",
    mainEntity: {
      "@type": "ItemList",
      name: "Current Open Positions",
      numberOfItems: openPositions.length,
      itemListElement: openPositions.map((job, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `${SITE_URL}/careers/${job.id}`,
        name: `${job.title} (${job.vrCode})`
      }))
    }
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/custom-software#service`,
    name: "Customize Software Solutions",
    serviceType: "Enterprise Software Engineering & Automation",
    provider: {
      "@id": `${SITE_URL}/#organization`
    },
    description: "Bespoke enterprise web applications, workflow automation, and custom API integrations engineered by Raj Global Ventures.",
    areaServed: ["IN", "AE", "SG", "GB", "US"],
    url: `${SITE_URL}/services/custom-software`
  };
}

export function generateProductSchema(type: "tradingfootprint" | "crushed-stone") {
  if (type === "tradingfootprint") {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/products/tradingfootprint#software`,
      name: "TradingFootprint",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web, Windows, macOS, Linux",
      description: "Multi-asset algo trading platform for Options, Futures, Equity, and Commodities with 20+ broker connects.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/PreOrder"
      }
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/products/crushed-stone#product`,
    name: "Crushed Stone & Blue Metal Aggregates",
    description: "High-grade blue metal aggregates (10mm, 20mm, 40mm), M-Sand, P-Sand, and road sub-base from Raj Global Ventures in Tirunelveli.",
    brand: {
      "@id": `${SITE_URL}/#organization`
    },
    category: "Construction Materials"
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
  let pageType = "WebPage";
  if (config.path === "/about") {
    pageType = "AboutPage";
  } else if (config.path === "/contact") {
    pageType = "ContactPage";
  } else if (config.path === "/careers" || config.path === "/blogs" || config.path === "/resources") {
    pageType = "CollectionPage";
  } else if (config.path.startsWith("/products/") || config.path.startsWith("/services/")) {
    pageType = "ItemPage";
  }

  return {
    "@context": "https://schema.org",
    "@type": pageType,
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

  // Hierarchical Breadcrumbs schema
  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(config.breadcrumbs));
  }

  // Structured Page Type entities
  if (config.path === "/careers") {
    schemas.push(generateCareersCollectionSchema());
  } else if (config.path.startsWith("/careers/")) {
    const jobId = config.path.replace("/careers/", "");
    const job = openPositions.find(
      (j) => j.id.toLowerCase() === jobId.toLowerCase() || j.vrCode.toLowerCase() === jobId.toLowerCase()
    );
    if (job) {
      schemas.push(generateJobPostingSchema(job));
    }
  } else if (config.path === "/services/custom-software") {
    schemas.push(generateServiceSchema());
  } else if (config.path === "/products/tradingfootprint") {
    schemas.push(generateProductSchema("tradingfootprint"));
  } else if (config.path === "/products/crushed-stone") {
    schemas.push(generateProductSchema("crushed-stone"));
  }

  if (config.type === "article") {
    schemas.push(generateArticleSchema(config));
  }

  return {
    "@context": "https://schema.org",
    "@graph": schemas
  };
}
