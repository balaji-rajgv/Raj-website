import React from "react";
import { CheckIcon } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { FinalCta } from "../components/FinalCta";
import { images } from "../data/images";
import { consultingDeliverables, consultingEngagements } from "../data/servicesDetail";

export function Consulting() {
  return (
    <>
      <PageHero
        eyebrow="Services · Consulting"
        title="Expert eyes on your trading stack"
        description="Independent architecture, latency and compliance reviews from engineers who build these systems every day. Clear findings, ranked by impact."
        image={images.consulting}
        imageAlt="Illustration of consultants mapping a system architecture on a whiteboard"
        primaryCta={{ label: "Book a discovery call", to: "/contact" }}
        secondaryCta={{ label: "See development services", to: "/services/development" }} />
      

      <section className="w-full bg-white py-20 md:py-28" aria-labelledby="engagements-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand">Engagements</p>
            <h2 id="engagements-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Fixed scope, fixed timeline, clear deliverables
            </h2>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-t border-line text-left">
              <thead>
                <tr className="border-b border-line text-xs font-semibold text-muted">
                  <th scope="col" className="py-4 pr-6">Engagement</th>
                  <th scope="col" className="py-4 pr-6">What you get</th>
                  <th scope="col" className="py-4 text-right">Duration</th>
                </tr>
              </thead>
              <tbody>
                {consultingEngagements.map((e) =>
                <tr key={e.name} className="border-b border-line align-top">
                    <th scope="row" className="py-6 pr-6 text-lg font-semibold text-ink">{e.name}</th>
                    <td className="max-w-xl py-6 pr-6 text-sm leading-relaxed text-muted">{e.outcome}</td>
                    <td className="whitespace-nowrap py-6 text-right font-mono text-sm text-ink">{e.duration}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full bg-canvas py-20 md:py-28" aria-labelledby="deliverables-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 id="deliverables-heading" className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Every review ends with a plan you can act on
            </h2>
            <ul className="mt-8 space-y-3">
              {consultingDeliverables.map((d) =>
              <li key={d} className="flex items-start gap-3 text-ink">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-gain" aria-hidden="true" />
                  {d}
                </li>
              )}
            </ul>
          </div>
          <figure className="rounded-3xl bg-ink p-8 text-white md:p-12 lg:col-span-6 lg:col-start-7">
            <p className="text-sm text-white/60">Latency audit · Mumbai prop desk</p>
            <div className="mt-6 flex items-end gap-6">
              <div>
                <p className="text-xs text-white/60">Before</p>
                <p className="font-mono text-3xl text-white/50 line-through">38µs</p>
              </div>
              <div>
                <p className="text-xs text-white/60">After</p>
                <p className="font-mono text-6xl font-medium text-sun">11µs</p>
              </div>
            </div>
            <blockquote className="mt-8 text-lg leading-relaxed">
              “Two weeks, eleven findings, and a tick-to-trade number we'd been chasing for a year.”
            </blockquote>
            <figcaption className="mt-4 text-sm text-white/60">Head of Technology, proprietary trading firm</figcaption>
          </figure>
        </div>
      </section>

      <FinalCta title="Not sure where the bottleneck is? We'll find it." />
    </>);

}