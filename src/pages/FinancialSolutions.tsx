import React from "react";
import { PageHero } from "../components/PageHero";
import { VenueStrip } from "../components/VenueStrip";
import { FinalCta } from "../components/FinalCta";
import { images } from "../data/images";
import { capabilities, segments } from "../data/financialSolutions";
import { SEO } from "../components/SEO";

export function FinancialSolutions() {
  return (
    <>
      <SEO
        title="Financial Solutions | Institutional Trading Infrastructure"
        description="High-throughput trading infrastructure for brokers, proprietary funds, and fintech platforms. Ultra-low latency routing, pre-trade risk controls, and automated compliance."
        canonical="/solutions/financial"
        keywords="institutional trading infrastructure, broker API gateways, prop trading systems, pre-trade risk controls, Raj Global Ventures"
        image="/9c713bdb-8941-4d97-8fd1-a0cd4099ca76.jpg"
      />
      <PageHero
        eyebrow="Financial Solutions"
        title="Trading infrastructure for institutions that can't afford downtime"
        description="Brokers, funds and proprietary trading firms use our platforms and engineering to launch algo products, cut execution costs and stay compliant."
        image={images.financial}
        imageAlt="Illustration of a financial institution connected securely to markets and data"
        primaryCta={{ label: "Discuss your requirements", to: "/contact" }}
        secondaryCta={{ label: "Our consulting services", to: "/services/consulting" }} />
      

      <section className="w-full bg-white py-20 md:py-28" aria-labelledby="segments-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand">Who we serve</p>
            <h2 id="segments-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Built around the problem each firm actually has
            </h2>
          </div>

          <ul className="mt-12 border-t border-line">
            {segments.map((s) =>
            <li key={s.name} className="grid gap-6 border-b border-line py-10 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-semibold text-ink">{s.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.need}</p>
                </div>
                <ul className="space-y-2 lg:col-span-5">
                  {s.deliver.map((d) =>
                <li key={d} className="flex items-center gap-3 text-sm text-ink">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                      {d}
                    </li>
                )}
                </ul>
                <div className="lg:col-span-3 lg:text-right">
                  <p className="text-4xl font-semibold tracking-tight text-gain">{s.outcome}</p>
                  <p className="mt-1 text-sm text-muted">{s.outcomeLabel}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="w-full bg-canvas py-20 md:py-28" aria-labelledby="capabilities-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="capabilities-heading" className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              What we can put in place
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Take a single component or the full stack. Every piece integrates with your existing brokers, clearing and back office.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2 lg:col-span-8">
            {capabilities.map((c) =>
            <li key={c.title} className="bg-white p-7">
                <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
              </li>
            )}
          </ul>
        </div>
      </section>

      <VenueStrip />

      <FinalCta title="Planning a launch or a migration?" />
    </>);

}