import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  SparklesIcon,
  ZapIcon,
  TrendingUpIcon,
  Building2Icon,
  FuelIcon
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { DashboardMockup } from "../components/DashboardMockup";
import { ProductSpotlight } from "../components/ProductSpotlight";
import { FinalCta } from "../components/FinalCta";
import { images } from "../data/images";
import { features, betaPerks } from "../data/tradingFootprint";

export function TradingFootprint() {
  return (
    <>
      <PageHero
        eyebrow="TradingFootprint · Multi-Asset Algo Platform · Coming Soon"
        title="Trade what the order flow is telling you across all markets"
        description="We are actively building TradingFootprint for Options, Futures, Equity, and Commodities — combining 20+ broker connects, AI-assisted recommendations, live financial news, expert guides, and real-time order-flow footprint charts."
        image={images.tradingFootprint}
        imageAlt="Illustration of the TradingFootprint platform with footprint charts and strategy blocks"
        primaryCta={{ label: "Get Beta Access", to: "/beta" }}
        secondaryCta={{ label: "Contact Us", to: "/contact" }}
      />

      {/* Coming Soon & Beta Callout Banner */}
      <section className="border-y border-line bg-brand-soft/40 py-8" aria-label="Beta Announcement">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
              <SparklesIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">
                Product in Active Development · Early Beta Program Now Open
              </p>
              <p className="text-xs text-muted">
                Test the platform before general release. Limited slots available for active traders and prop desks.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/beta"
              className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand">
              Get Beta Access
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Multi-Asset Market Focus Bar (with clean Lucide icons, no emojis) */}
      <section className="w-full bg-white py-12 border-b border-line" aria-label="Market Segments">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-brand">
            Engineered For Every Major Market Segment
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-line bg-canvas p-5 text-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <TrendingUpIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-base font-semibold text-ink">Options</h3>
              <p className="mt-1 text-xs text-muted">Greeks, Open Interest build-up, and real-time IV surfaces</p>
            </div>
            <div className="rounded-2xl border border-line bg-canvas p-5 text-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <ZapIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-base font-semibold text-ink">Futures</h3>
              <p className="mt-1 text-xs text-muted">Depth-of-book, cumulative delta, and volume profile</p>
            </div>
            <div className="rounded-2xl border border-line bg-canvas p-5 text-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Building2Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-base font-semibold text-ink">Equity</h3>
              <p className="mt-1 text-xs text-muted">Block deals, smart routing, and tick-by-tick order fills</p>
            </div>
            <div className="rounded-2xl border border-line bg-canvas p-5 text-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <FuelIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-base font-semibold text-ink">Commodities</h3>
              <p className="mt-1 text-xs text-muted">MCX, CME metals, energy, and agri-derivatives flow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Console Preview */}
      <section className="w-full bg-white pt-16 md:pt-24" aria-labelledby="console-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 id="console-heading" className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              One console for the whole trading day
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Footprint charts, live strategies, P&amp;L and fills side by side — so you always know why a trade happened.
            </p>
          </div>
          <div className="mt-12">
            <DashboardMockup />
          </div>
        </div>
      </section>

      <ProductSpotlight variant="page" />

      {/* Features Grid */}
      <section className="w-full bg-canvas py-20 md:py-28" aria-labelledby="features-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand">Institutional Capabilities</p>
            <h2 id="features-heading" className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Everything systematic traders demand, built from the ground up
            </h2>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <li key={f.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm transition-all hover:border-ink/30">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <ZapIcon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{f.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Early Beta Booking & Eligibility Section */}
      <section id="beta-access" className="w-full scroll-mt-24 bg-white py-20 md:py-28" aria-labelledby="beta-booking-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-line bg-canvas p-8 md:p-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="rounded-full bg-sun/20 px-3 py-1 text-xs font-semibold text-ink">
                  Early Beta Program
                </span>
                <h2 id="beta-booking-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  Eligibility &amp; Beta Access Questionnaire
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  We are selectively granting early access to active traders across India and international markets. As part of our early beta cohort,
                  you will experience our multi-broker execution, live news streams, and AI recommendations at no cost.
                </p>

                <div className="mt-8 space-y-4">
                  {betaPerks.map((perk) => (
                    <div key={perk.title} className="flex items-start gap-3">
                      <CheckCircle2Icon className="mt-0.5 h-5 w-5 shrink-0 text-gain" />
                      <div>
                        <h3 className="text-sm font-semibold text-ink">{perk.title}</h3>
                        <p className="text-xs text-muted">{perk.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    to="/beta"
                    className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand">
                    Fill Beta Questionnaire
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink">
                    Contact Engineering Team
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-line bg-white p-7 shadow-sm">
                  <h3 className="text-base font-semibold text-ink">Beta Eligibility Checklist</h3>
                  <ul className="mt-4 space-y-3 text-xs text-muted">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      Trades Options, Futures, Cash Equity, or Commodities
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      Uses one or more of our 20+ supported broker APIs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      Executes active trades or runs automated strategy algos
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      Willing to provide early feedback and feature suggestions
                    </li>
                  </ul>

                  <div className="mt-6 rounded-xl bg-brand-soft/60 p-4 text-xs text-ink">
                    <p className="font-semibold text-brand">Direct Founder Communication:</p>
                    <p className="mt-1 text-muted">
                      Selected testers will have direct access to CEO &amp; Founder <strong>Giftson Raj</strong> and the core engineering team in Tirunelveli.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted">
            Trading derivatives involves substantial financial risk. Beta versions are intended for early evaluation and feedback.
          </p>
        </div>
      </section>

      <FinalCta
        title="Ready to trade the markets with order flow intelligence?"
        description="Submit your beta application or reach out to our systems team in Tirunelveli, Tamil Nadu."
      />
    </>
  );
}