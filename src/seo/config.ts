export const SITE_URL =
  (typeof process !== "undefined" && process.env?.SITE_URL) ||
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
  "https://rajglobalventures.com";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface RouteSEOConfig {
  path: string;
  title: string;
  description: string;
  keywords: string;
  type: "website" | "article";
  image: string;
  imageAlt: string;
  publishedTime?: string;
  author?: string;
  breadcrumbs?: BreadcrumbItem[];
  noindex?: boolean;
}

export const siteOrganization = {
  name: "Raj Global Ventures",
  legalName: "Raj Global Ventures Private Limited",
  founder: "Giftson Raj",
  foundingDate: "2025",
  foundingLocation: "Tirunelveli, Tamil Nadu, India",
  addressLocality: "Tirunelveli",
  addressRegion: "Tamil Nadu",
  addressCountry: "IN",
  phone: "+91-94883-75053",
  email: "contact@rajglobalventures.com",
  logo: "/image.png"
};

export const routesSEO: Record<string, RouteSEOConfig> = {
  "/": {
    path: "/",
    title: "Raj Global Ventures | Institutional Trading Infrastructure & TradingFootprint",
    description: "Raj Global Ventures builds high-performance quantitative trading software, 20+ broker connectors, and TradingFootprint for Options, Futures, Equity, and Commodities.",
    keywords: "Raj Global Ventures, TradingFootprint, algo trading platform, order flow footprint charts, 20+ broker connectors, quantitative systems, Tirunelveli",
    type: "website",
    image: "/image.png",
    imageAlt: "Raj Global Ventures Institutional Trading Infrastructure and Platform Mockup"
  },
  "/about": {
    path: "/about",
    title: "About Us | Engineers of the Modern Trading Stack",
    description: "Founded in early 2025 in Tirunelveli, Tamil Nadu by CEO & Founder Giftson Raj. We build low-latency trading software, 20+ broker connectors, and TradingFootprint.",
    keywords: "About Raj Global Ventures, Giftson Raj, Tirunelveli quantitative trading, trading systems engineers, broker connectors",
    type: "website",
    image: "/c9db14cd-1969-43fc-8945-2fadef2cce89.jpg",
    imageAlt: "Engineers and quantitative traders collaborating at Raj Global Ventures",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" }
    ]
  },
  "/products/tradingfootprint": {
    path: "/products/tradingfootprint",
    title: "TradingFootprint | Multi-Asset Algo Trading Platform (Coming Soon)",
    description: "Multi-asset algo trading platform for Options, Futures, Equity, and Commodities with 20+ broker connects, AI recommendations, live news, and real-time footprint charts.",
    keywords: "TradingFootprint, order flow trading, footprint charts, delta volume clustering, multi-asset algo platform, options trading, futures trading",
    type: "website",
    image: "/ec15f097-a0d2-4707-8ff9-187017f132c4.jpg",
    imageAlt: "TradingFootprint order flow footprint chart interface preview",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products/tradingfootprint" },
      { name: "TradingFootprint", path: "/products/tradingfootprint" }
    ]
  },
  "/beta": {
    path: "/beta",
    title: "Apply for Early Beta Access | TradingFootprint",
    description: "Book your slot for the TradingFootprint early beta testing cohort. Test real-time order-flow footprints, 20+ broker connects, and AI recommendations with zero platform fees.",
    keywords: "TradingFootprint beta access, early beta testing, algo trading questionnaire, options trading beta, Raj Global Ventures",
    type: "website",
    image: "/ec15f097-a0d2-4707-8ff9-187017f132c4.jpg",
    imageAlt: "TradingFootprint early beta application questionnaire",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Beta Access", path: "/beta" }
    ]
  },
  "/solutions/financial": {
    path: "/solutions/financial",
    title: "Financial Solutions | Institutional Trading Infrastructure",
    description: "Trading infrastructure for brokers, institutional funds, and proprietary trading firms. Sub-millisecond routing, pre-trade risk controls, and automated compliance.",
    keywords: "institutional trading infrastructure, broker API gateways, prop trading systems, pre-trade risk controls, low latency routing",
    type: "website",
    image: "/9c713bdb-8941-4d97-8fd1-a0cd4099ca76.jpg",
    imageAlt: "Financial trading infrastructure architecture and risk management dashboard",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions/financial" },
      { name: "Financial Solutions", path: "/solutions/financial" }
    ]
  },
  "/services/development": {
    path: "/services/development",
    title: "Custom Trading Systems Development | Raj Global Ventures",
    description: "End-to-end custom trading systems engineering. Bespoke execution algorithms, high-throughput tick-data capture pipelines, and 20+ broker API connectors.",
    keywords: "custom trading systems development, algorithmic trading engineering, FIX protocol engine, market data pipeline, Raj Global Ventures",
    type: "website",
    image: "/aec77f68-04a6-4cff-b4db-228ce442729e.jpg",
    imageAlt: "Engineers developing high-throughput trading algorithms and broker connectors",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services/development" },
      { name: "Development", path: "/services/development" }
    ]
  },
  "/services/consulting": {
    path: "/services/consulting",
    title: "Trading Architecture & Latency Consulting | Raj Global Ventures",
    description: "Independent architecture reviews, sub-millisecond latency profiling, exchange conformance reviews, and broker infrastructure audits for trading desks.",
    keywords: "trading latency consulting, trading architecture audit, exchange conformance testing, low latency profiling, Raj Global Ventures",
    type: "website",
    image: "/58cc94d6-021f-4c3f-b958-cf04d53a41c9.jpg",
    imageAlt: "Architecture and trading technology consulting review whiteboard",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services/consulting" },
      { name: "Consulting", path: "/services/consulting" }
    ]
  },
  "/resources": {
    path: "/resources",
    title: "Trading Systems, Research & Market Insights | Raj Global Ventures",
    description: "Technical articles, market flow breakdowns, and trading engineering research covering Options, Futures, Equity, and Commodities infrastructure.",
    keywords: "trading blogs, order flow articles, footprint charts, broker API architecture, machine learning market regimes",
    type: "website",
    image: "/image.png",
    imageAlt: "Raj Global Ventures Research Desk and Insights",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" }
    ]
  },
  "/blogs": {
    path: "/blogs",
    title: "Trading Systems, Research & Market Insights | Raj Global Ventures",
    description: "Technical articles, market flow breakdowns, and trading engineering research covering Options, Futures, Equity, and Commodities infrastructure.",
    keywords: "trading blogs, order flow articles, footprint charts, broker API architecture, machine learning market regimes",
    type: "website",
    image: "/image.png",
    imageAlt: "Raj Global Ventures Research Desk and Insights",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blogs", path: "/blogs" }
    ]
  },
  "/blogs/order-flow-footprint-charts": {
    path: "/blogs/order-flow-footprint-charts",
    title: "Mastering Order Flow & Footprint Charts in Indian Derivatives | Raj Global Ventures",
    description: "How real-time bid-ask delta clustering exposes institutional absorption in Nifty & BankNifty options before candle close.",
    keywords: "Order Flow, Footprint Charts, Options Trading, BankNifty, Delta Imbalance, Volume Clustering",
    type: "article",
    image: "/ec15f097-a0d2-4707-8ff9-187017f132c4.jpg",
    imageAlt: "Order flow footprint charts showing delta imbalance clusters",
    publishedTime: "2026-02-14",
    author: "Research Team",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blogs", path: "/blogs" },
      { name: "Order Flow & Footprint Charts", path: "/blogs/order-flow-footprint-charts" }
    ]
  },
  "/blogs/low-latency-broker-gateways": {
    path: "/blogs/low-latency-broker-gateways",
    title: "Architecting Low-Latency Gateways Across 20+ Domestic & Global Brokers | Raj Global Ventures",
    description: "Building unified WebSocket multiplexing, sub-millisecond tick normalization, and zero-drop failover for active traders.",
    keywords: "Broker APIs, WebSockets, Low Latency, System Architecture, Failover, Tick Normalization",
    type: "article",
    image: "/aec77f68-04a6-4cff-b4db-228ce442729e.jpg",
    imageAlt: "Distributed gateway architecture schematic for multi-broker connections",
    publishedTime: "2026-01-29",
    author: "Development Team",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blogs", path: "/blogs" },
      { name: "Low-Latency Broker Gateways", path: "/blogs/low-latency-broker-gateways" }
    ]
  },
  "/blogs/ai-regime-detection-market-flows": {
    path: "/blogs/ai-regime-detection-market-flows",
    title: "AI-Driven Regime Detection: Machine Learning on Real-Time Market Flows | Raj Global Ventures",
    description: "Classifying trending, mean-reverting, and liquidity-squeeze market states across Equity, Options & Commodities in real time.",
    keywords: "Machine Learning, Market Regimes, Commodities, Equity, Quant Models, Hidden Markov Models",
    type: "article",
    image: "/9c713bdb-8941-4d97-8fd1-a0cd4099ca76.jpg",
    imageAlt: "Machine learning market regime probability analytics curves",
    publishedTime: "2026-01-12",
    author: "Research Team",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blogs", path: "/blogs" },
      { name: "AI Regime Detection", path: "/blogs/ai-regime-detection-market-flows" }
    ]
  },
  "/contact": {
    path: "/contact",
    title: "Contact Us | Speak to Our Engineering & Trading Team",
    description: "Get in touch with Raj Global Ventures. Discuss custom trading system development, low-latency architecture consulting, or TradingFootprint early beta access.",
    keywords: "contact Raj Global Ventures, trading engineering inquiry, trading software consultation, Tirunelveli",
    type: "website",
    image: "/image.png",
    imageAlt: "Contact Raj Global Ventures headquarters in Tirunelveli",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" }
    ]
  },
  "/cookies": {
    path: "/cookies",
    title: "Cookies Policy | Transparency & Local Cache Memory",
    description: "Learn how Raj Global Ventures utilizes essential cookies and local cache memory for trading preferences and security. Manage your interactive cookie settings.",
    keywords: "cookies policy, privacy controls, cache memory, Raj Global Ventures",
    type: "website",
    image: "/image.png",
    imageAlt: "Cookies Policy and Data Ethics",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Cookies Policy", path: "/cookies" }
    ]
  },
  "/privacy": {
    path: "/privacy",
    title: "Privacy Policy | Data Protection & Security",
    description: "Privacy policy and data governance practices at Raj Global Ventures. How we safeguard trader data, broker API credentials, and personal information.",
    keywords: "privacy policy, data protection, broker credentials security, Raj Global Ventures",
    type: "website",
    image: "/image.png",
    imageAlt: "Data Protection and Privacy Policy",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy" }
    ]
  },
  "/terms": {
    path: "/terms",
    title: "Terms of Service | Legal Agreement & Disclosures",
    description: "Terms of service, technology scope, intellectual property, and financial risk disclosures for Raj Global Ventures and TradingFootprint.",
    keywords: "terms of service, trading software legal terms, financial risk disclosures, Raj Global Ventures",
    type: "website",
    image: "/image.png",
    imageAlt: "Terms of Service and Financial Disclosures",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Terms of Service", path: "/terms" }
    ]
  },
  "/sitemap": {
    path: "/sitemap",
    title: "Sitemap | Website Directory & Route Index",
    description: "Comprehensive sitemap and directory of all pages, products, services, research articles, and legal documents on Raj Global Ventures.",
    keywords: "sitemap, website directory, navigation index, Raj Global Ventures",
    type: "website",
    image: "/image.png",
    imageAlt: "Raj Global Ventures Website Directory",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Sitemap", path: "/sitemap" }
    ]
  },
  "/404": {
    path: "/404",
    title: "404 Page Not Found | Raj Global Ventures",
    description: "The page you are looking for does not exist or has moved on Raj Global Ventures.",
    keywords: "404 not found",
    type: "website",
    image: "/image.png",
    imageAlt: "Page not found",
    noindex: true
  }
};

export const staticPreRenderRoutes = Object.keys(routesSEO);
