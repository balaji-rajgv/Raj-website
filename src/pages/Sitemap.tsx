import React from "react";
import { Link } from "react-router-dom";
import {
  CompassIcon,
  ArrowRightIcon,
  HomeIcon,
  InfoIcon,
  MailIcon,
  LineChartIcon,
  SparklesIcon,
  Code2Icon,
  ShieldCheckIcon,
  ScaleIcon,
  CookieIcon,
  MapIcon,
  BookOpenIcon,
  MountainIcon,
  BriefcaseIcon
} from "lucide-react";
import { FinalCta } from "../components/FinalCta";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";

export function Sitemap() {
  const sections = [
    {
      category: "Main Company Pages",
      links: [
        {
          title: "Home",
          href: "/",
          description: "Raj Global Ventures - Three Generations. One Vision: Solving What Matters.",
          icon: HomeIcon
        },
        {
          title: "About Us",
          href: "/about",
          description: "Our story, Tirunelveli headquarters, principles, milestones, and three generations of experience.",
          icon: InfoIcon
        },
        {
          title: "Careers",
          href: "/careers",
          description: "Join our team in Tirunelveli across engineering, quant research, product design, and operations.",
          icon: BriefcaseIcon
        },
        {
          title: "Contact",
          href: "/contact",
          description: "Direct inquiry form for personal and business requirements, working hours, and holiday schedule.",
          icon: MailIcon
        }
      ]
    },
    {
      category: "Products & Solutions",
      links: [
        {
          title: "TradingFootprint",
          href: "/products/tradingfootprint",
          badge: "Coming Soon",
          description: "Multi-asset algorithmic platform for Options, Futures, Equity, and Commodities.",
          icon: LineChartIcon
        },
        {
          title: "Crushed Stone Aggregates",
          href: "/products/crushed-stone",
          badge: "Quarry Direct",
          description: "High-grade blue metal aggregates (10mm, 20mm, 40mm), M-Sand, P-Sand, and road sub-base.",
          icon: MountainIcon
        }
      ]
    },
    {
      category: "Services",
      links: [
        {
          title: "Customize Software Solution",
          href: "/services/custom-software",
          description: "Tailored enterprise software, business process automation, API integrations, and cloud platforms.",
          icon: Code2Icon
        }
      ]
    },
    {
      category: "Resources",
      links: [
        {
          title: "Blogs & Insights",
          href: "/blogs",
          badge: "Coming Soon",
          description: "Technical breakdowns, engineering case studies, and business perspectives.",
          icon: BookOpenIcon
        },
        {
          title: "Early Beta Access",
          href: "/beta",
          badge: "Open",
          description: "Application questionnaire for active traders seeking early beta slots on TradingFootprint.",
          icon: SparklesIcon
        }
      ]
    },
    {
      category: "Legal & Transparency",
      links: [
        {
          title: "Privacy Policy",
          href: "/privacy",
          description: "Information regarding user data collection, storage, and processing policies.",
          icon: ShieldCheckIcon
        },
        {
          title: "Terms of Service",
          href: "/terms",
          description: "Terms and conditions governing our platforms, services, and software delivery.",
          icon: ScaleIcon
        },
        {
          title: "Cookies Policy",
          href: "/cookies",
          description: "Clear information about browser cookies and visitor privacy choices.",
          icon: CookieIcon
        },
        {
          title: "Sitemap",
          href: "/sitemap",
          description: "Complete indexed tree of all publicly accessible URLs across our web presence.",
          icon: MapIcon
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="HTML Sitemap | Raj Global Ventures"
        description="Index of all pages, products, services, and resources on the Raj Global Ventures website."
        canonical="/sitemap"
        keywords="Raj Global Ventures sitemap, TradingFootprint, crushed stone, customize software, Tirunelveli"
      />

      <section className="relative overflow-hidden border-b border-line bg-canvas/40 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Sitemap", path: "/sitemap" }
              ]}
            />
          </div>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
              <CompassIcon className="h-3.5 w-3.5" />
              SITE NAVIGATION
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl">
              Website Index &amp; Structure
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted md:text-xl">
              Quickly find any product, service, legal documentation, or company resource across Raj Global Ventures.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-24" aria-labelledby="sitemap-grid-heading">
        <div className="mx-auto max-w-7xl px-6">
          <h2 id="sitemap-grid-heading" className="sr-only">Directory Pages</h2>
          <div className="space-y-16">
            {sections.map((sec) => (
              <div key={sec.category}>
                <div className="flex items-center gap-3 border-b border-line pb-4">
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{sec.category}</h3>
                  <span className="text-xs text-muted">({sec.links.length} pages)</span>
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {sec.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.title}
                        to={link.href}
                        className="group flex flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/40 hover:shadow-md"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                              <Icon className="h-5 w-5" />
                            </span>
                            {link.badge && (
                              <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                                {link.badge}
                              </span>
                            )}
                          </div>
                          <h4 className="mt-4 text-base font-semibold text-ink group-hover:text-brand">
                            {link.title}
                          </h4>
                          <p className="mt-1.5 text-xs leading-relaxed text-muted">
                            {link.description}
                          </p>
                        </div>
                        <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-ink group-hover:text-brand">
                          <span>Visit page</span>
                          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
        title="Let's Build What's Next"
        subtitle="Creating opportunities. Building lasting value."
        description="Connect with Raj Global Ventures to explore strategic opportunities, partnerships, and new possibilities for sustainable growth."
      />
    </>
  );
}
