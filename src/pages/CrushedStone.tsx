import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheckIcon,
  TruckIcon,
  LayersIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  MountainIcon,
  PhoneCallIcon,
  SparklesIcon
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { FinalCta } from "../components/FinalCta";
import { images } from "../data/images";
import { contactDetails } from "../data/contact";
import { SEO } from "../components/SEO";

const products = [
  {
    name: "20mm Coarse Aggregate",
    tagline: "Primary Structural Grade",
    description: "The gold standard for reinforced cement concrete (RCC), roof slabs, foundation footings, and heavy load-bearing columns.",
    specs: "Tested for crushing strength & shape consistency",
    uses: ["RCC Columns & Beams", "Slab Castings", "Pre-stressed Concrete"]
  },
  {
    name: "10mm Precision Aggregate",
    tagline: "Precast & Finishing Grade",
    description: "Precision screened blue metal gravel optimized for precast concrete items, interlocking pavers, tiles, and high-density mix designs.",
    specs: "Uniform size distribution with low flakiness",
    uses: ["Precast Structures", "Pavement Blocks", "High-Grade Mortar Mix"]
  },
  {
    name: "40mm Base & Ballast",
    tagline: "Heavy Foundation Aggregate",
    description: "Heavy-duty crushed rock engineered for mass concrete pouring, heavy machine bed foundations, and railway ballast applications.",
    specs: "Extreme load resistance & low water absorption",
    uses: ["Mass Concrete Fills", "Heavy Foundations", "Railway Track Beds"]
  },
  {
    name: "M-Sand (Manufactured Sand)",
    tagline: "Eco-Friendly River Sand Substitute",
    description: "Multi-stage VSI crushed cubical sand providing superior compressive bonding strength with zero silt or organic impurities.",
    specs: "Graded per IS:383 Zone II compliance",
    uses: ["Structural Concreting", "Masonry Mortar", "High-Rise Construction"]
  },
  {
    name: "P-Sand (Plastering Sand)",
    tagline: "Superfine Washed Sand",
    description: "Micro-screened and air-classified superfine stone sand engineered specifically for smooth, crack-resistant interior and exterior plastering.",
    specs: "Finely washed to eliminate dust particles",
    uses: ["Wall Plastering", "Ceiling Coating", "Fine Tile Adhesive Mix"]
  },
  {
    name: "GSB & Wet Mix Macadam (WMM)",
    tagline: "Highway Sub-Base Foundation",
    description: "Optimally blended stone aggregate and rock dust mixtures formulated strictly to National Highway and PWD road base specifications.",
    specs: "Maximum dry density & optimum moisture stability",
    uses: ["Highway Sub-Base", "Industrial Yard Paving", "Runway Bases"]
  }
];

const qualityHighlights = [
  {
    title: "VSI Cubical Crushing",
    description: "Multi-stage automated crushing delivers superior cubical particle shape with minimal flakiness index for optimal concrete workability."
  },
  {
    title: "Three Generations of Quarrying",
    description: "Decades of geological experience ensure selective quarrying of dense, hard blue metal rock with exceptional load-bearing longevity."
  },
  {
    title: "Automated Weighbridge Billing",
    description: "Computerized weighbridge verification guarantees exact tonnage billing and zero payload discrepancies for every delivery."
  },
  {
    title: "Fast Fleet Logistics",
    description: "Continuous tipper truck dispatch direct from Tirunelveli quarries to project sites across Tamil Nadu and neighbouring regions."
  }
];

export function CrushedStone() {
  return (
    <>
      <SEO
        title="Crushed Stone & Blue Metal Aggregates | Raj Global Ventures"
        description="High-grade crushed stone aggregates (10mm, 20mm, 40mm), M-Sand, P-Sand, and GSB road base from Raj Global Ventures in Tirunelveli. Decades of legacy supplying major infrastructure projects."
        canonical="/products/crushed-stone"
        keywords="crushed stone Tirunelveli, blue metal aggregates, M sand manufacturer Tamil Nadu, 20mm aggregate, 10mm gravel, GSB WMM supplier, Raj Global Ventures"
        image="/crushed-stone.jpg"
      />

      <PageHero
        eyebrow="Raj Global Ventures · Aggregates & Infrastructure"
        title="High-grade crushed stone aggregates built on three generations of trust"
        description="Supplying certified blue metal aggregates, manufactured sand, and foundation materials direct from our quarries in Tirunelveli. Supporting major road, commercial, and residential developments."
        image={images.crushedStone}
        imageAlt="Crushed stone quarry and aggregate processing plant at Raj Global Ventures"
        primaryCta={{ label: "Request Bulk Quote", to: "/contact?interest=Crushed Stone / Aggregates Supply" }}
        secondaryCta={{ label: "Call Sales Desk", to: `tel:${contactDetails.phoneHref}` }}
      />

      {/* Trust & Supply Bar */}
      <section className="border-y border-line bg-canvas py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-6 text-center">
          <div>
            <p className="font-mono text-2xl font-bold text-ink">100%</p>
            <p className="mt-1 text-xs text-muted">Virgin Blue Metal Rock</p>
          </div>
          <div className="hidden h-8 w-px bg-line sm:block" />
          <div>
            <p className="font-mono text-2xl font-bold text-ink">IS:383</p>
            <p className="mt-1 text-xs text-muted">Quality Compliance</p>
          </div>
          <div className="hidden h-8 w-px bg-line sm:block" />
          <div>
            <p className="font-mono text-2xl font-bold text-ink">3 Generations</p>
            <p className="mt-1 text-xs text-muted">Regional Quarrying Legacy</p>
          </div>
          <div className="hidden h-8 w-px bg-line sm:block" />
          <div>
            <p className="font-mono text-2xl font-bold text-ink">24/7</p>
            <p className="mt-1 text-xs text-muted">Direct Fleet Dispatch</p>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="w-full bg-white py-20 md:py-28" aria-labelledby="products-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Aggregate Catalog</p>
            <h2 id="products-heading" className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Precision gradations for every construction phase
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              From heavy foundation fills to high-precision plastering sand, every batch is crushed and screened under strict quality control.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => (
              <div
                key={item.name}
                className="flex flex-col justify-between rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-ink/40 hover:shadow-md"
              >
                <div>
                  <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                    {item.tagline}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-ink">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>

                  <div className="mt-5 border-t border-line pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink/70">Key Applications:</p>
                    <ul className="mt-2 space-y-1.5">
                      {item.uses.map((u) => (
                        <li key={u} className="flex items-center gap-2 text-xs text-ink">
                          <CheckCircle2Icon className="h-3.5 w-3.5 text-gain shrink-0" />
                          <span>{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 border-t border-line pt-4">
                  <p className="text-[11px] font-mono text-muted">{item.specs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Advantage */}
      <section className="w-full bg-canvas py-20 md:py-28" aria-labelledby="quality-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand">Engineered Quality</span>
              <h2 id="quality-heading" className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                Built on decades of quarrying excellence in Tirunelveli
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Our legacy gives us deep understanding of mineral hardness, optimal gradation curves, and the exact strength parameters required by civil contractors and structural engineers.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact?interest=Crushed Stone / Aggregates Supply"
                  className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand"
                >
                  Request Quarry Visit / Samples
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {qualityHighlights.map((q) => (
                <div key={q.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <ShieldCheckIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink">{q.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{q.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order / Logistics Banner */}
      <section className="w-full bg-white py-16 border-t border-line">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-brand p-8 text-white md:flex-row md:p-12">
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold md:text-3xl">Need bulk aggregates delivered to your site?</h3>
              <p className="mt-2 text-sm text-white/80">
                Speak directly with our supply logistics team for custom rate contracts, site testing reports, and guaranteed delivery timelines.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${contactDetails.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-soft"
              >
                <PhoneCallIcon className="h-4 w-4" />
                {contactDetails.phone}
              </a>
              <Link
                to="/contact?interest=Crushed Stone / Aggregates Supply"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white"
              >
                Online Inquiry Form
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Let's Build What's Next"
        subtitle="Creating opportunities. Building lasting value."
        description="Connect with Raj Global Ventures to explore strategic opportunities, partnerships, and new possibilities for sustainable growth."
        primaryCta={{ label: "Contact Us", to: "/contact?interest=Crushed Stone / Aggregates Supply" }}
        secondaryCta={{ label: "View Other Solutions", to: "/about" }}
      />
    </>
  );
}
