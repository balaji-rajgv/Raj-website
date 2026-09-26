import React from "react";
import { processSteps } from "../data/company";

export function Process() {
  return (
    <section className="w-full bg-white pb-20 md:pb-28" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">How an engagement runs</p>
          <h2 id="process-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            From first call to live trading in about a quarter
          </h2>
        </div>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
          <div className="absolute left-0 right-0 top-[11px] hidden h-px bg-line md:block" aria-hidden="true" />
          {processSteps.map((step, i) =>
          <li key={step.title} className="relative flex flex-col">
              <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-ink font-mono text-[11px] font-medium text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-1 text-xs font-medium text-brand">{step.duration}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          )}
        </ol>
      </div>
    </section>);

}