import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

type FinalCtaProps = {
  title?: string;
  description?: string;
};

export function FinalCta({
  title = "Have a strategy that needs better plumbing?",
  description = "Tell us what you trade and where. A systems architect will reply within one business day with a first view of the build."
}: FinalCtaProps) {
  return (
    <section className="w-full bg-white py-20 md:py-24" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 rounded-3xl bg-ink p-8 md:p-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 id="cta-heading" className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-white/70">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-brand-soft">
              Contact Us
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link
              to="/beta"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-150 hover:border-white">
              Get Beta Access
            </Link>
          </div>
        </div>
      </div>
    </section>);

}