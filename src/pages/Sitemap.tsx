import React from "react";
import { Link } from "react-router-dom";
import {
  CompassIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  HomeIcon,
  InfoIcon,
  MailIcon,
  LineChartIcon,
  SparklesIcon,
  LandmarkIcon,
  CodeIcon,
  ShieldCheckIcon,
  ScaleIcon,
  CookieIcon,
  MapIcon,
  BookOpenIcon
} from "lucide-react";
import { FinalCta } from "../components/FinalCta";

export function Sitemap() {
  const sections = [
    {
      category: "Main Company Pages",
      links: [
        {
          title: "Home",
          href: "/",
          description: "Main portal, multi-asset market coverage, interactive terminal mockup, and core services.",
          icon: HomeIcon
        },
        {
          title: "About Us",
          href: "/about",
          description: "Our story, Tirunelveli headquarters, 2025 founding milestones, and engineering principles.",
          icon: InfoIcon
        },
        {
          title: "Contact",
          href: "/contact",
          description: "Direct inquiry form, contact phone, and technical architecture consultation requests.",
          icon: MailIcon
        }
      ]
    },
    {
      category: "Products & Early Access",
      links: [
        {
          title: "TradingFootprint",
          href: "/products/tradingfootprint",
          badge: "Coming Soon",
          description: "Multi-asset algorithmic platform for Options, Futures, Equity, and Commodities.",
          icon: LineChartIcon
        },
        {
          title: "Early Beta Access",
          href: "/beta",
          badge: "Open",
          description: "Application and qualification questionnaire for active traders seeking early beta slots.",
          icon: SparklesIcon
        }
      ]
    },
    {
      category: "Resources & Insights",
      links: [
        {
          title: "Blogs & Technical Insights",
          href: "/blogs",
          badge: "New",
          description: "In-depth engineering articles, footprint chart breakdowns, and quantitative market research.",
          icon: BookOpenIcon
        }
      ]
    },
    {
      category: "Solutions & Engineering Services",
      links: [
        {
          title: "Financial Solutions",
          href: "/solutions/financial",
          description: "Trading infrastructure for brokers, institutional funds, and proprietary trading desks.",
          icon: LandmarkIcon
        },
        {
          title: "Custom Development",
          href: "/services/development",
          description: "Bespoke execution algorithms, tick capture engines, and FIX/API broker gateways.",
          icon: CodeIcon
        },
        {
          title: "Consulting & Reviews",
          href: "/services/consulting",
          description: "Latency profiling, microstructure reviews, and exchange certification advisory.",
          icon: CompassIcon
        }
      ]
    },
    {
      category: "Legal & Transparency",
      links: [
        {
          title: "Privacy Policy",
          href: "/privacy",
          description: "How we protect personal information, broker API credentials, and client confidentiality.",
          icon: ShieldCheckIcon
        },
        {
          title: "Terms of Service",
          href: "/terms",
          description: "Legal terms governing platform usage, technology scope, and financial risk disclosures.",
          icon: ScaleIcon
        },
        {
          title: "Cookies Policy",
          href: "/cookies",
          description: "Overview of cookies, local cache memory, and interactive preference controls.",
          icon: CookieIcon
        },
        {
          title: "Sitemap",
          href: "/sitemap",
          description: "Full directory index of all public web pages and services.",
          icon: MapIcon
        }
      ]
    }
  ];

  return (
    <>
      <section className="relative w-full overflow-hidden bg-canvas py-16 md:py-24" aria-labelledby="sitemap-heading">
        {/* Subtle decorative background light */}
        <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-brand/5 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 top-40 h-96 w-96 rounded-full bg-sun/5 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-5xl px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted transition-colors hover:text-ink">
            <ArrowLeftIcon className="h-3.5 w-3.5" />
            Back to Home
          </Link>

          <header className="mt-6 border-b border-line pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1 text-xs font-medium text-brand shadow-sm">
              <CompassIcon className="h-3.5 w-3.5" />
              <span>Website Directory</span>
            </div>
            <h1 id="sitemap-heading" className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Sitemap
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Quickly find any page, product showcase, service detail, or legal document across the Raj Global Ventures platform.
            </p>
          </header>

          <div className="mt-12 space-y-12">
            {sections.map((sec) => (
              <div key={sec.category}>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {sec.category}
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {sec.links.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="group flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-sm transition-all duration-150 hover:border-ink/40 hover:shadow-md">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-base font-semibold text-ink transition-colors group-hover:text-brand">
                              {item.title}
                            </h3>
                            {item.badge && (
                              <span className="rounded-full bg-sun/20 px-2 py-0.5 text-[10px] font-semibold text-ink">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-muted">
                            {item.description}
                          </p>
                          <span className="mt-2.5 inline-flex items-center gap-1 font-mono text-[11px] text-brand">
                            {item.href}
                            <ArrowRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Looking for something specific?"
        description="Our team in Tirunelveli, Tamil Nadu is happy to answer any questions or discuss custom requirements."
      />
    </>
  );
}
