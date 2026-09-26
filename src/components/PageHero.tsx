import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

type Cta = {label: string;to: string;};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
};

export function PageHero({ eyebrow, title, description, image, imageAlt, primaryCta, secondaryCta }: PageHeroProps) {
  const isExternal = (url: string) => url.startsWith("http://") || url.startsWith("https://");

  const renderCta = (cta: Cta, isPrimary: boolean) => {
    const className = isPrimary
      ? "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand"
      : "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-line bg-white px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink hover:text-brand";

    if (isExternal(cta.to)) {
      return (
        <a href={cta.to} target="_blank" rel="noopener noreferrer" className={className}>
          {cta.label}
          {isPrimary ? (
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
          ) : (
            <span className="text-xs text-muted">↗</span>
          )}
        </a>
      );
    }

    return (
      <Link to={cta.to} className={className}>
        {cta.label}
        {isPrimary && (
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
        )}
      </Link>
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-canvas">
      {/* Light subtle background geometric accent */}
      <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 rounded-full bg-sun/5 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="text-sm font-medium text-brand">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-[54px]">{title}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">{description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {renderCta(primaryCta, true)}
            {secondaryCta && renderCta(secondaryCta, false)}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="lg:col-span-6">
          
          <img src={image} alt={imageAlt} className="aspect-[4/3] w-full rounded-3xl object-cover" />
        </motion.div>
      </div>
    </section>);

}