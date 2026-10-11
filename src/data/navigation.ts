import { InfoIcon, LineChartIcon, MountainIcon, Code2Icon, BookOpenIcon, SparklesIcon, BriefcaseIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavLink = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  links?: NavLink[];
};

export const navItems: NavItem[] = [
  {
    label: "Products & Solutions",
    links: [
      {
        title: "TradingFootprint",
        description: "Multi-asset algo trading platform (Options, Futures, Equity, Commodities)",
        href: "/products/tradingfootprint",
        icon: LineChartIcon,
        badge: "Coming Soon"
      },
      {
        title: "Crushed Stone",
        description: "High-grade blue metal aggregates, M-Sand, and road sub-base materials",
        href: "/products/crushed-stone",
        icon: MountainIcon
      }
    ]
  },
  {
    label: "Services",
    links: [
      {
        title: "Customize Software Solution",
        description: "Tailored enterprise software, workflow automation, and custom web apps",
        href: "/services/custom-software",
        icon: Code2Icon
      }
    ]
  },
  {
    label: "Resources",
    links: [
      {
        title: "Blogs & Insights",
        description: "Industry perspectives, technology updates, and business insights",
        href: "/blogs",
        icon: BookOpenIcon
      },
      {
        title: "Get Beta Access",
        description: "Early questionnaire & beta testing program for TradingFootprint",
        href: "/beta",
        icon: SparklesIcon,
        badge: "Open"
      }
    ]
  },
  {
    label: "Company",
    links: [
      {
        title: "About Us",
        description: "Three generations of business experience, our principles and journey",
        href: "/about",
        icon: InfoIcon
      }
    ]
  },
  { label: "Careers", href: "/careers" }
];

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Cookies Policy", href: "/cookies" }
    ]
  },
  {
    title: "Products & Solutions",
    links: [
      { label: "Tradingfootprint", href: "/products/tradingfootprint" },
      { label: "Crushed stone", href: "/products/crushed-stone" }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Customize software solution", href: "/services/custom-software" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs & Insights", href: "/blogs" },
      { label: "Early Beta Access", href: "/beta" }
    ]
  }
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Policy", href: "/cookies" },
  { label: "Sitemap", href: "/sitemap" }
];