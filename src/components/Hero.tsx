import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  ZapIcon,
  CpuIcon,
  NewspaperIcon,
  BarChart2Icon,
  BookOpenIcon
} from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas">
      {/* Background light opacity illustration & glowing mesh */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -top-1/2 left-1/2 -translate-x-1/2 opacity-[0.06]"
          width="1200"
          height="1200"
          viewBox="0 0 1200 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="600" cy="600" r="550" stroke="#1673B8" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="600" cy="600" r="420" stroke="#1673B8" strokeWidth="1.5" />
          <circle cx="600" cy="600" r="280" stroke="#1673B8" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="600" cy="600" r="140" stroke="#1673B8" strokeWidth="1.5" />
          <path d="M0 600H1200M600 0V1200" stroke="#1673B8" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute right-1/4 top-40 h-80 w-80 rounded-full bg-sun/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 text-center md:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3.5 py-1.5 text-xs font-medium text-ink shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-gain animate-pulse" />
          <span className="text-brand font-semibold">Markets:</span>
          <span>Options · Futures · Equity · Commodities</span>
        </div>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[62px]">
          We build the systems that trade the markets
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Raj Global Ventures engineers execution infrastructure for trading firms and builds{" "}
          <strong className="font-semibold text-ink">TradingFootprint</strong> — powering multi-asset trading with 20+ broker
          connections, AI-assisted recommendations, live news, expert guides, and real-time market flows.
        </p>

        {/* CTA Actions */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand">
            Contact Us
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>

          <Link
            to="/beta"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-150 hover:border-ink hover:text-brand">
            Get Beta Access
            <ArrowRightIcon className="h-4 w-4 text-muted" aria-hidden="true" />
          </Link>
        </div>

        {/* Core Pillars badges with clean icons (no emojis) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white/70 px-2.5 py-1">
            <ZapIcon className="h-3.5 w-3.5 text-brand" />
            20+ Broker Connections
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white/70 px-2.5 py-1">
            <CpuIcon className="h-3.5 w-3.5 text-brand" />
            AI-Assisted Recommendations
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white/70 px-2.5 py-1">
            <NewspaperIcon className="h-3.5 w-3.5 text-brand" />
            Live Financial News Wire
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white/70 px-2.5 py-1">
            <BarChart2Icon className="h-3.5 w-3.5 text-brand" />
            Real-Time Market Flows
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white/70 px-2.5 py-1">
            <BookOpenIcon className="h-3.5 w-3.5 text-brand" />
            Expert Strategy Guides
          </span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 mx-auto mt-14 max-w-6xl px-4 md:px-6">
        <DashboardMockup />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-white" aria-hidden="true" />
    </section>
  );
}