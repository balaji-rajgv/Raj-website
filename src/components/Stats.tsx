import React from "react";
import { supportingStats } from "../data/company";

export function Stats() {
  return (
    <section className="w-full bg-white py-20 md:py-28" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">
        Raj Global Ventures by the numbers
      </h2>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-6">
          <p className="text-6xl font-semibold tracking-tight text-ink md:text-8xl">2.4B+</p>
          <p className="mt-4 max-w-md text-lg text-muted">
            orders routed through systems engineered by Raj Global Ventures since 2024.
          </p>
        </div>
        <dl className="grid gap-8 sm:grid-cols-3 lg:col-span-6">
          {supportingStats.map((stat) =>
            <div key={stat.label} className="border-t border-line pt-4">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-semibold tabular-nums text-ink">{stat.value}</span>
                <span className="mt-1 block text-sm text-muted">{stat.label}</span>
              </dd>
            </div>
          )}
        </dl>
      </div>
    </section>);

}