import React from "react";
import { Link } from "react-router-dom";
import {
  Code2Icon,
  CpuIcon,
  DatabaseIcon,
  ShieldCheckIcon,
  WorkflowIcon,
  LayoutDashboardIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  FileCode2Icon
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { FinalCta } from "../components/FinalCta";
import { images } from "../data/images";
import { SEO } from "../components/SEO";

const solutions = [
  {
    icon: LayoutDashboardIcon,
    title: "Bespoke Enterprise Web Applications",
    description: "Custom management dashboards, administrative portals, and customer-facing web platforms engineered to fit your exact operational workflows."
  },
  {
    icon: WorkflowIcon,
    title: "Workflow Automation & Process Optimization",
    description: "Eliminate manual data entry, disconnected spreadsheets, and repetitive paperwork with automated, fault-tolerant business logic."
  },
  {
    icon: DatabaseIcon,
    title: "API Integrations & Unified Data Systems",
    description: "Seamlessly integrate your ERPs, CRMs, payment gateways, third-party vendor APIs, and internal databases into a single cohesive ecosystem."
  },
  {
    icon: CpuIcon,
    title: "High-Throughput & Scalable Architectures",
    description: "Engineered with resilient microservices, low-latency data caching, and cloud infrastructure that reliably scales with your growth."
  },
  {
    icon: ShieldCheckIcon,
    title: "Security, Compliance & Data Governance",
    description: "Role-based access controls, encrypted data transport and storage, automated audit trails, and strict compliance with data privacy regulations."
  },
  {
    icon: FileCode2Icon,
    title: "Complete Code Ownership & Transparent Documentation",
    description: "You own 100% of your source code, deployment runbooks, and architectural diagrams. Zero vendor lock-in, complete operational autonomy."
  }
];

const developmentSteps = [
  {
    step: "01",
    title: "Understand Real-World Needs",
    description: "We analyze your specific bottlenecks, user expectations, and commercial objectives before writing a single line of code."
  },
  {
    step: "02",
    title: "Practical Solution Architecture",
    description: "We design a scalable database schema, intuitive UI flows, and robust system architecture validated against real-world constraints."
  },
  {
    step: "03",
    title: "Milestone-Driven Engineering",
    description: "Transparent sprint deliveries with staging environments so you test and review working software at every stage."
  },
  {
    step: "04",
    title: "Production Launch & Continuous Handover",
    description: "Zero-downtime deployment, staff onboarding, complete source code handover, and ongoing performance monitoring."
  }
];

export function CustomizeSoftware() {
  return (
    <>
      <SEO
        title="Customize Software Solutions | Raj Global Ventures"
        description="Tailored software systems, enterprise business automation, API integrations, and scalable web platforms engineered by Raj Global Ventures."
        canonical="/services/custom-software"
        keywords="customize software solutions, bespoke software development, enterprise business automation, custom web apps, API integration Tirunelveli, Raj Global Ventures"
        image="/custom-software.jpg"
      />

      <PageHero
        eyebrow="Raj Global Ventures · Technology Services"
        title="Tailored software solutions built for real-world business impact"
        description="We turn complex business challenges into clear, practical software solutions. From bespoke enterprise applications and workflow automation to high-availability cloud platforms, we engineer systems that give your business a lasting edge."
        image={images.customSoftware}
        imageAlt="Software engineers collaborating on custom enterprise software architecture at Raj Global Ventures"
        primaryCta={{ label: "Discuss Your Requirements", to: "/contact?interest=Customize Software Solution" }}
        secondaryCta={{ label: "Explore Our Approach", to: "/about" }}
      />

      {/* Solutions Grid */}
      <section className="w-full bg-white py-20 md:py-28" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Capabilities &amp; Scope</p>
            <h2 id="services-heading" className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Software built around your business — not the other way around
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Off-the-shelf software often forces you to compromise your processes. We build custom solutions tailored precisely to how your business operates and grows.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-ink/40 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-canvas py-20 md:py-28" aria-labelledby="methodology-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Our Methodology</p>
            <h2 id="methodology-heading" className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              How we take your idea from concept to production
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Every phase is transparent, milestone-based, and focused on tangible outcomes that add immediate value.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {developmentSteps.map((step) => (
              <div key={step.step} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                <span className="font-mono text-xs font-semibold text-brand">{step.step}</span>
                <h3 className="mt-2 text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Ownership Banner */}
      <section className="w-full bg-white py-16 border-t border-line">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 rounded-3xl bg-ink p-8 text-white md:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-semibold md:text-3xl">
                Ready to turn your software requirements into reality?
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                Whether you need a full enterprise platform or want to automate a manual bottleneck, let's talk about what your business needs.
              </p>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                to="/contact?interest=Customize Software Solution"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-brand-soft"
              >
                Start a Conversation
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Let's Build What's Next"
        subtitle="Creating opportunities. Building lasting value."
        description="Connect with Raj Global Ventures to explore strategic opportunities, partnerships, and new possibilities for sustainable growth."
        primaryCta={{ label: "Contact Us", to: "/contact?interest=Customize Software Solution" }}
        secondaryCta={{ label: "View Our Story", to: "/about" }}
      />
    </>
  );
}
