import React from "react";
import { PageHero } from "../components/PageHero";
import { FinalCta } from "../components/FinalCta";
import { images } from "../data/images";
import { milestones, offices, principles, principlesHeading } from "../data/about";
import { SEO } from "../components/SEO";

export function About() {
  return (
    <>
      <SEO
        title="About Us | Three Generations. One Vision: Solving What Matters"
        description="Three generations of business experience have given us more than knowledge—they’ve given us the ability to recognize problems before they become barriers. Learn about Raj Global Ventures."
        canonical="/about"
        keywords="About Raj Global Ventures, Three Generations One Vision, Tirunelveli, business solutions, innovation, technology, crushed stone aggregates, TradingFootprint"
      />
      <PageHero
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" }
        ]}
        eyebrow="About Raj Global Ventures"
        title="Three Generations. One Vision: Solving What Matters."
        description="Three generations of business experience have given us more than knowledge—they’ve given us the ability to recognize problems before they become barriers. We turn complex business challenges into clear, practical solutions, backed by real experience and measurable results."
        image={images.about}
        imageAlt="Raj Global Ventures leadership and strategic consultation representing three generations of business excellence"
        primaryCta={{ label: "Contact Us", to: "/contact" }}
        secondaryCta={{ label: "Get Beta Access", to: "/beta" }}
      />

      <section className="w-full bg-white py-20 md:py-28" aria-labelledby="story-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12">
          <h2 id="story-heading" className="text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:col-span-5">
            Experience That Understands. Innovation That Solves
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-6 lg:col-start-7">
            <p>
              Raj Global Ventures was established in early 2025 in Tirunelveli, building on a
              business legacy shaped by three generations of experience. Our journey combines
              proven business knowledge with a forward-looking approach to technology, innovation,
              and modern business challenges.
            </p>
            <p>
              We focus on understanding real-world problems, identifying their root causes, and
              developing practical, scalable solutions that create measurable value. Our approach
              is built on experience, continuous learning, and a commitment to delivering solutions
              that are not only innovative but also reliable and results-driven.
            </p>
            <p>
              From our roots in Tirunelveli to our vision for a broader global presence, Raj Global
              Ventures is focused on turning complex challenges into meaningful opportunities and
              building solutions designed for long-term impact.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-canvas py-20 md:py-28" aria-labelledby="principles-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-medium text-brand">How we work</p>
            <h2 id="principles-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {principlesHeading}
            </h2>
          </div>
          <ul className="border-t border-ink/10 lg:col-span-8">
            {principles.map((p) => (
              <li key={p.title} className="grid gap-2 border-b border-ink/10 py-7 md:grid-cols-12 md:gap-6">
                <h3 className="text-lg font-semibold text-ink md:col-span-5">{p.title}</h3>
                <p className="leading-relaxed text-muted md:col-span-7">{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-white py-20 md:py-28" aria-labelledby="milestones-heading">
        <div className="mx-auto max-w-7xl px-6">
          <h2 id="milestones-heading" className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Our journey so far
          </h2>
          <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
            <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-line md:block" aria-hidden="true" />
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="relative z-10 block h-3.5 w-3.5 rounded-full border-[3px] border-white bg-brand ring-1 ring-brand" />
                <p className="mt-5 font-mono text-sm font-medium text-brand">{m.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full bg-canvas py-16 border-t border-line" aria-labelledby="offices-heading">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-12 md:items-center">
          <h2 id="offices-heading" className="text-2xl font-semibold tracking-tight text-ink md:col-span-4">
            Where to find us
          </h2>
          <ul className="grid gap-6 sm:grid-cols-3 md:col-span-8">
            {offices.map((o) => (
              <li key={o.city}>
                <p className="text-xl font-semibold text-ink">{o.city}</p>
                <p className="mt-1 text-sm text-muted">{o.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta
        title="Let's Build What's Next"
        subtitle="Creating opportunities. Building lasting value."
        description="Connect with Raj Global Ventures to explore strategic opportunities, partnerships, and new possibilities for sustainable growth."
      />
    </>
  );
}