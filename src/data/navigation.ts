import { InfoIcon, LineChartIcon, LandmarkIcon, CodeIcon, CompassIcon, BookOpenIcon } from "lucide-react";
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
    label: "Company",
    links: [
      { title: "About Us", description: "Our story, principles and milestones", href: "/about", icon: InfoIcon }
    ]
  },
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
        title: "Financial Solutions",
        description: "Trading infrastructure for brokers, funds and prop firms",
        href: "/solutions/financial",
        icon: LandmarkIcon
      }
    ]
  },
  {
    label: "Services",
    links: [
      { title: "Development", description: "Custom trading systems, built end to end", href: "/services/development", icon: CodeIcon },
      { title: "Consulting", description: "Architecture, latency and compliance reviews", href: "/services/consulting", icon: CompassIcon }
    ]
  },
  {
    label: "Resources",
    links: [
      {
        title: "Blogs",
        description: "Technical articles, trading breakdowns, and market insights",
        href: "/blogs",
        icon: BookOpenIcon
      }
    ]
  },
  { label: "Contact", href: "/contact" }
];

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Cookies Policy", href: "/cookies" }
    ]
  },
  {
    title: "Products & Solutions",
    links: [
      { label: "TradingFootprint (Coming Soon)", href: "/products/tradingfootprint" },
      { label: "Financial Solutions", href: "/solutions/financial" }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Development", href: "/services/development" },
      { label: "Consulting", href: "/services/consulting" }
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