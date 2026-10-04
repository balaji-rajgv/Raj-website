import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

type FinalCtaProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
};

export function FinalCta({
  title = "Let's Build What's Next",
  subtitle = "Creating opportunities. Building lasting value.",
  description = "Connect with Raj Global Ventures to explore strategic opportunities, partnerships, and new possibilities for sustainable growth.",
  primaryCta = { label: "Contact Us", to: "/contact" },
  secondaryCta = { label: "Get Beta Access", to: "/beta" }
}: FinalCtaProps) {
  return (
    <section className="w-full bg-white py-20 md:py-24" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 rounded-3xl bg-ink p-8 md:p-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 id="cta-heading" className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-lg font-medium text-white/90">
                {subtitle}
              </p>
            )}
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
            <Link
              to={primaryCta.to}
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-brand-soft">
              {primaryCta.label}
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-150 hover:border-white">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}