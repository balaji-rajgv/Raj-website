import React from "react";
import { PageHero } from "../components/PageHero";
import { Services } from "../components/Services";
import { Process } from "../components/Process";
import { FinalCta } from "../components/FinalCta";
import { images } from "../data/images";
import { techStack } from "../data/servicesDetail";

export function Development() {
  return (
    <>
      <PageHero
        eyebrow="Services · Development"
        title="Custom trading systems, engineered end to end"
        description="From execution algorithms to market-data pipelines, our engineers design, build, certify and operate systems tailored to your strategies and venues."
        image={images.development}
        imageAlt="Illustration of developers assembling modular trading infrastructure"
        primaryCta={{ label: "Start a project", to: "/contact" }}
        secondaryCta={{ label: "Need a review first?", to: "/services/consulting" }} />
      

      <Services linkTo="/contact" />

      <section className="w-full bg-white py-20 md:py-28" aria-labelledby="stack-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-medium text-brand">Technology</p>
            <h2 id="stack-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Proven tools, chosen for your latency budget
            </h2>
          </div>
          <dl className="border-t border-line lg:col-span-8">
            {techStack.map((row) =>
            <div key={row.group} className="grid gap-3 border-b border-line py-5 sm:grid-cols-12">
                <dt className="text-sm font-semibold text-ink sm:col-span-3">{row.group}</dt>
                <dd className="flex flex-wrap gap-2 sm:col-span-9">
                  {row.items.map((item) =>
                <span key={item} className="rounded-md bg-canvas px-2.5 py-1 font-mono text-xs text-ink">
                      {item}
                    </span>
                )}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      <div className="border-t border-line pt-20 md:pt-28">
        <Process />
      </div>

      <FinalCta title="Tell us what you need to build." />
    </>);

}