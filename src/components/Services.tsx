import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "lucide-react";
import { services } from "../data/company";

type ServicesProps = {
  linkTo?: string;
};

export function Services({ linkTo = "/services/development" }: ServicesProps) {
  return (
    <section className="w-full bg-canvas py-20 md:py-28" aria-labelledby="services-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-medium text-brand">Custom trading systems</p>
            <h2 id="services-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Infrastructure built for how you trade
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Beyond our products, our engineers design and run bespoke systems for prop desks, funds and brokers.
              You own the code; we keep it fast.
            </p>
          </div>
        </div>

        <ul className="border-t border-ink/10 lg:col-span-8">
          {services.map((service) =>
          <li key={service.title} className="border-b border-ink/10">
              <Link to={linkTo} className="group grid gap-3 py-7 md:grid-cols-12 md:items-start md:gap-6">
                <h3 className="text-lg font-semibold text-ink transition-colors duration-150 group-hover:text-brand md:col-span-4">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted md:col-span-5">{service.description}</p>
                <div className="flex items-start justify-between gap-3 md:col-span-3">
                  <ul className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) =>
                  <li key={tag} className="whitespace-nowrap rounded-md bg-white px-2 py-1 text-[11px] font-medium text-ink">
                        {tag}
                      </li>
                  )}
                  </ul>
                  <ArrowUpRightIcon
                  className="h-5 w-5 shrink-0 text-muted transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  aria-hidden="true" />
                
                </div>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </section>);

}