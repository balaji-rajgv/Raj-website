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
  postalCode: "627359",
  phone: "+91 98657 98157",
  email: "contact@rajgv.com",
  logo: "/raj-logo-full.png"
};

export const routesSEO: Record<string, RouteSEOConfig> = {
  "/": {
    path: "/",
    title: "Raj Global Ventures | Three Generations. One Vision: Solving What Matters",
    description:
      "Three generations of business experience have given us more than knowledge—they’ve given us the ability to recognize problems before they become barriers. Explore Raj Global Ventures.",
    keywords:
      "Raj Global Ventures, Three Generations One Vision, business solutions, innovation, Tirunelveli, TradingFootprint, crushed stone, custom software",
    type: "website",
    image: "/about-vision.jpg",
    imageAlt: "Raj Global Ventures leadership and strategic consultation representing three generations of business excellence"
  },
  "/about": {
    path: "/about",
    title: "About Us | Three Generations. One Vision: Solving What Matters",
    description:
      "Three generations of business experience have given us more than knowledge—they’ve given us the ability to recognize problems before they become barriers. Learn about Raj Global Ventures.",
    keywords:
      "About Raj Global Ventures, Three Generations One Vision, Tirunelveli, business solutions, innovation, technology",
    type: "website",
    image: "/about-vision.jpg",
    imageAlt: "Raj Global Ventures leadership and strategic consultation representing three generations of business excellence",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" }
    ]
  },
  "/careers": {
    path: "/careers",
    title: "Careers & Internships | Raj Global Ventures",
    description:
      "Join Raj Global Ventures. We look for passionate individuals to solve problems and drive business across software engineering, Java backend, and Flutter development.",
    keywords:
      "Careers Raj Global Ventures, software engineering intern, Java backend developer intern, Flutter developer intern, remote tech jobs",
    type: "website",
    image: "/about-vision.jpg",
    imageAlt: "Careers and internships at Raj Global Ventures",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Careers", path: "/careers" }
    ]
  },
  "/careers/software-engineering-intern": {
    path: "/careers/software-engineering-intern",
    title: "General Software Engineering Intern (RGV-SEI-2026) | Careers at Raj Global Ventures",
    description:
      "General Software Engineering Intern (RGV-SEI-2026). Pre-final and final-year students. Remote 3–6 months with potential permanent full-time conversion.",
    keywords: "Software Engineering Intern, remote internship, Raj Global Ventures careers, student jobs, problem solving",
    type: "website",
    image: "/about-vision.jpg",
    imageAlt: "General Software Engineering Intern job opening",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Careers", path: "/careers" },
      { name: "General Software Engineering Intern", path: "/careers/software-engineering-intern" }
    ]
  },
  "/careers/java-backend-developer-intern": {
    path: "/careers/java-backend-developer-intern",
    title: "Java Backend Developer Intern (RGV-JBD-2026) | Careers at Raj Global Ventures",
    description:
      "Java Backend Developer Intern (RGV-JBD-2026). Remote. Java, Spring Boot, Kafka, Redis, PostgreSQL. Potential full-time opportunity based on performance.",
    keywords: "Java Backend Developer Intern, Spring Boot, Kafka, Redis, PostgreSQL, remote Java internship",
    type: "website",
    image: "/about-vision.jpg",
    imageAlt: "Java Backend Developer Intern job opening",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Careers", path: "/careers" },
      { name: "Java Backend Developer Intern", path: "/careers/java-backend-developer-intern" }
    ]
  },
  "/careers/flutter-developer-intern": {
    path: "/careers/flutter-developer-intern",
    title: "Flutter Developer Intern (RGV-FLI-2026) | Careers at Raj Global Ventures",
    description:
      "Flutter Developer Intern (RGV-FLI-2026). Remote internship for pre-final and final-year students. Flutter, Dart, OOP, Data Structures, REST APIs, state management.",
    keywords: "Flutter Developer Intern, Dart, cross-platform mobile, remote internship, computer science students",
    type: "website",
    image: "/about-vision.jpg",
    imageAlt: "Flutter Developer Intern job opening",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Careers", path: "/careers" },
      { name: "Flutter Developer Intern", path: "/careers/flutter-developer-intern" }
    ]
  },
  "/careers/flutter-developer": {
    path: "/careers/flutter-developer",
    title: "Flutter Developer  (RGV-FLD-2026) | Careers at Raj Global Ventures",
    description:
      "Flutter Developer (RGV-FLD-2026). Remote full-time role for engineers with 2+ years experience. Flutter, Dart, Clean Architecture, BLoC, Riverpod, performance optimization.",
    keywords: "Flutter Developer, 2+ years experience, Dart, Clean Architecture, BLoC, Riverpod, remote mobile engineer",
    type: "website",
    image: "/about-vision.jpg",
    imageAlt: "Flutter Developer job opening",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Careers", path: "/careers" },
      { name: "Flutter Developer", path: "/careers/flutter-developer" }
    ]
  },
  "/products/tradingfootprint": {
    path: "/products/tradingfootprint",
    title: "TradingFootprint | Multi-Asset Algo Trading Platform (Coming Soon)",
    description:
      "Trade what the order flow is telling you. TradingFootprint supports Options, Futures, Equity, and Commodities with 20+ broker connects, AI recommendations, live news, and footprint charts.",
    keywords:
      "TradingFootprint, order flow trading, footprint charts, multi-asset algo, options trading software, futures trading, 20+ broker connects",
    type: "website",
    image: "/ec15f097-a0d2-4707-8ff9-187017f132c4.jpg",
    imageAlt: "TradingFootprint order flow footprint chart interface preview",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products/tradingfootprint" },
      { name: "TradingFootprint", path: "/products/tradingfootprint" }
    ]
  },
  "/products/crushed-stone": {
    path: "/products/crushed-stone",
    title: "Crushed Stone & Blue Metal Aggregates | Raj Global Ventures",
    description:
      "High-grade crushed stone aggregates (10mm, 20mm, 40mm), M-Sand, P-Sand, and GSB road sub-base from Raj Global Ventures in Tirunelveli. Decades of legacy supplying major infrastructure projects.",
    keywords:
      "crushed stone Tirunelveli, blue metal aggregates, M sand manufacturer Tamil Nadu, 20mm aggregate, 10mm gravel, GSB WMM supplier, Raj Global Ventures",
    type: "website",
    image: "/crushed-stone.jpg",
    imageAlt: "Crushed stone quarry and aggregate processing plant at Raj Global Ventures",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products/crushed-stone" },
      { name: "Crushed Stone", path: "/products/crushed-stone" }
    ]
  },
  "/services/custom-software": {
    path: "/services/custom-software",
    title: "Customize Software Solutions | Raj Global Ventures",
    description:
      "Tailored software systems, enterprise business automation, API integrations, and scalable web platforms engineered by Raj Global Ventures.",
    keywords:
      "customize software solutions, bespoke software development, enterprise business automation, custom web apps, API integration Tirunelveli, Raj Global Ventures",
    type: "website",
    image: "/custom-software.jpg",
    imageAlt: "Software engineers collaborating on custom enterprise software architecture at Raj Global Ventures",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services/custom-software" },
      { name: "Customize Software Solution", path: "/services/custom-software" }
    ]
  },
  "/beta": {
    path: "/beta",
    title: "Apply for Early Beta Access | TradingFootprint",
    description:
      "Book your slot for the TradingFootprint early beta testing cohort. Test real-time order-flow footprints, 20+ broker connects, and AI recommendations with zero platform fees.",
    keywords:
      "TradingFootprint beta access, early beta testing, algo trading questionnaire, options trading beta, Raj Global Ventures",
    type: "website",
    image: "/ec15f097-a0d2-4707-8ff9-187017f132c4.jpg",
    imageAlt: "TradingFootprint early beta application questionnaire",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Beta Access", path: "/beta" }
    ]
  },
  "/resources": {
    path: "/resources",
    title: "Blogs & Insights | Raj Global Ventures",
    description:
      "Technical breakdowns, engineering case studies, and business perspectives from Raj Global Ventures.",
    keywords:
      "Raj Global Ventures blog, trading systems research, technology insights, Tirunelveli",
    type: "website",
    image: "/raj-logo-full.png",
    imageAlt: "Raj Global Ventures Resources and Insights",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" }
    ]
  },
  "/blogs": {
    path: "/blogs",
    title: "Blogs & Insights | Raj Global Ventures",
    description:
      "Technical breakdowns, engineering case studies, and business perspectives from Raj Global Ventures.",
    keywords:
      "Raj Global Ventures blog, trading systems research, technology insights, Tirunelveli",
    type: "website",
    image: "/raj-logo-full.png",
    imageAlt: "Raj Global Ventures Blogs and Insights",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blogs", path: "/blogs" }
    ]
  },
  "/contact": {
    path: "/contact",
    title: "Contact Us | Let's Talk About Your Requirements",
    description:
      "Get in touch with Raj Global Ventures. Discuss custom software solutions, crushed stone aggregate supplies, or TradingFootprint early beta access.",
    keywords:
      "contact Raj Global Ventures, software requirements, crushed stone order, Tirunelveli business inquiry",
    type: "website",
    image: "/raj-logo-full.png",
    imageAlt: "Contact Raj Global Ventures headquarters in Tirunelveli",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" }
    ]
  },
  "/cookies": {
    path: "/cookies",
    title: "Cookies Policy | Transparency & Privacy",
    description:
      "Learn how Raj Global Ventures utilizes essential cookies and local cache memory for preferences and security.",
    keywords: "cookies policy, privacy controls, Raj Global Ventures",
    type: "website",
    image: "/raj-logo-full.png",
    imageAlt: "Cookies Policy",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Cookies Policy", path: "/cookies" }
    ]
  },
  "/privacy": {
    path: "/privacy",
    title: "Privacy Policy | Data Protection & Security",
    description:
      "Privacy policy and data governance practices at Raj Global Ventures. How we safeguard client data, API credentials, and personal information.",
    keywords: "privacy policy, data protection, Raj Global Ventures",
    type: "website",
    image: "/raj-logo-full.png",
    imageAlt: "Data Protection and Privacy Policy",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy" }
    ]
  },
  "/terms": {
    path: "/terms",
    title: "Terms of Service | Legal Agreement & Disclosures",
    description:
      "Terms of service, technology scope, intellectual property, and disclosures for Raj Global Ventures.",
    keywords: "terms of service, legal terms, Raj Global Ventures",
    type: "website",
    image: "/raj-logo-full.png",
    imageAlt: "Terms of Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Terms of Service", path: "/terms" }
    ]
  },
  "/sitemap": {
    path: "/sitemap",
    title: "Sitemap | Website Directory & Route Index",
    description:
      "Comprehensive sitemap and directory of all pages, products, services, and legal documents on Raj Global Ventures.",
    keywords: "sitemap, website directory, navigation index, Raj Global Ventures",
    type: "website",
    image: "/raj-logo-full.png",
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
    image: "/raj-logo-full.png",
    imageAlt: "Page not found",
    noindex: true
  }
};

export const staticPreRenderRoutes = Object.keys(routesSEO);
