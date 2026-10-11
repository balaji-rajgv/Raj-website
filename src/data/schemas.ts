export const homePageSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Google Sitelinks Searchbox WebSite Schema
    {
      "@type": "WebSite",
      "@id": "https://rajglobalventures.com/#website",
      "url": "https://rajglobalventures.com/",
      "name": "Raj Global Ventures",
      "alternateName": [
        "RGV",
        "TradingFootprint",
        "Raj Global Ventures Trading"
      ],
      "description": "Multi-asset quantitative trading platform, 20+ broker integrations, and order-flow market infrastructure for Options, Futures, Equity, and Commodities.",
      "publisher": {
        "@id": "https://rajglobalventures.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://rajglobalventures.com/blogs?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en-US"
    },

    // 2. Organization / Financial Service Schema
    {
      "@type": ["Organization", "FinancialService"],
      "@id": "https://rajglobalventures.com/#organization",
      "name": "Raj Global Ventures",
      "url": "https://rajglobalventures.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rajglobalventures.com/image.png",
        "caption": "Raj Global Ventures Logo"
      },
      "founder": {
        "@type": "Person",
        "name": "Giftson Raj",
        "jobTitle": "CEO & Founder"
      },
      "foundingDate": "2025",
      "foundingLocation": {
        "@type": "Place",
        "name": "Tirunelveli, Tamil Nadu, India"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tirunelveli",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-94883-75053",
          "contactType": "sales",
          "areaServed": ["IN", "AE", "SG", "GB", "US"],
          "availableLanguage": ["English", "Tamil"]
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/in/raj-global-ventures-407813441",
        "https://www.instagram.com/raj_globalventures/",
        "https://x.com/raj_globalv",
        "https://www.youtube.com/@Raj_globalventures"
      ]
    },

    // 3. SiteNavigationElement Schema to guide Google Sitelinks
    {
      "@type": "ItemList",
      "@id": "https://rajglobalventures.com/#sitelinks-navigation",
      "name": "Key Site Navigation Links",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "TradingFootprint Platform",
          "description": "Multi-asset algorithmic trading platform for Options, Futures, Equity, and Commodities.",
          "url": "https://rajglobalventures.com/products/tradingfootprint"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Early Beta Access",
          "description": "Apply for early beta qualification and testing of TradingFootprint.",
          "url": "https://rajglobalventures.com/beta"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Financial Solutions",
          "description": "Institutional trading infrastructure, low-latency market gateways, and risk systems.",
          "url": "https://rajglobalventures.com/solutions/financial"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Custom Development",
          "description": "Bespoke execution algorithms, tick capture engines, and 20+ broker connectors.",
          "url": "https://rajglobalventures.com/services/development"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Technical Consulting",
          "description": "Architecture reviews, latency optimization, and exchange certification advisory.",
          "url": "https://rajglobalventures.com/services/consulting"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": "Research & Blogs",
          "description": "In-depth technical articles, order flow footprint charts, and quant research.",
          "url": "https://rajglobalventures.com/blogs"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 7,
          "name": "About Us",
          "description": "Founding story in Tirunelveli, engineering milestones, and core principles.",
          "url": "https://rajglobalventures.com/about"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 8,
          "name": "Contact Us",
          "description": "Reach our engineering and architecture team for consultations.",
          "url": "https://rajglobalventures.com/contact"
        }
      ]
    }
  ]
};
