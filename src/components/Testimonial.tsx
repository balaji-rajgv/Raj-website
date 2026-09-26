import React from "react";

export function Testimonial() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas py-20 md:py-28" aria-label="Founder vision">
      {/* Subtle background light-opacity geometric accent */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand/5 blur-3xl" aria-hidden="true" />
      
      <figure className="relative mx-auto max-w-4xl px-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Founder &amp; CEO Vision</p>
        <blockquote className="mt-4 text-2xl font-medium leading-snug tracking-tight text-ink md:text-[32px] md:leading-[1.3]">
          “We are engineering high-performance trading systems from Tirunelveli to give traders an unfair edge. Whether you trade Options, Futures, Equity, or Commodities, TradingFootprint combines 20+ broker connections, AI recommendations, live news, and real-time market flow into one reliable terminal.”
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-sm font-bold text-white shadow-sm ring-4 ring-brand/10" aria-hidden="true">
            GR
          </span>
          <div>
            <span className="block text-base font-semibold text-ink">Giftson Raj</span>
            <span className="block text-sm text-muted">Founder &amp; CEO, Raj Global Ventures · Tirunelveli, Tamil Nadu</span>
          </div>
        </figcaption>
      </figure>
    </section>);

}