import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BriefcaseIcon,
  ClockIcon,
  ArrowRightIcon,
  SearchIcon,
  XIcon,
  SendIcon,
  Building2Icon,
  HelpCircleIcon,
  ChevronDownIcon,
  LaptopIcon,
  Code2Icon,
  AwardIcon,
  GraduationCapIcon,
  CompassIcon,
  FilterIcon,
  CheckCircle2Icon,
  RotateCcwIcon,
  TargetIcon,
  TrendingUpIcon,
  ZapIcon,
  MailIcon
} from "lucide-react";
import {
  openPositions,
  careerBenefits,
  hiringPhilosophy,
  hiringProcessSteps,
  careerFaqs,
  JobRole
} from "../data/careers";
import { SEO } from "../components/SEO";
import { FinalCta } from "../components/FinalCta";
import { GeneralCareersIllustration } from "../components/CareersIllustration";

export function Careers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [selectedDuration, setSelectedDuration] = useState<string>("All");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>({});

  const toggleSkills = (jobId: string) => {
    setExpandedSkills((prev) => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };

  const departments = ["All", ...Array.from(new Set(openPositions.map((j) => j.department)))];

  const filteredPositions = openPositions.filter((job) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      job.title.toLowerCase().includes(q) ||
      job.vrCode.toLowerCase().includes(q) ||
      job.skills.some((s) => s.toLowerCase().includes(q)) ||
      job.summary.toLowerCase().includes(q);

    const matchesDept = selectedDept === "All" || job.department === selectedDept;

    const matchesDuration =
      selectedDuration === "All" ||
      (selectedDuration === "3–6" && (job.duration.toLowerCase().includes("3–6") || job.type.toLowerCase().includes("internship"))) ||
      (selectedDuration === "Full-Time" && (job.duration.toLowerCase().includes("full-time") || job.duration.toLowerCase().includes("permanent") || job.type.toLowerCase().includes("full-time")));

    return matchesSearch && matchesDept && matchesDuration;
  });

  const hasActiveFilters = searchQuery !== "" || selectedDept !== "All" || selectedDuration !== "All";

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedDept("All");
    setSelectedDuration("All");
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Careers & Internships | Raj Global Ventures"
        description="Join Raj Global Ventures. We look for passionate individuals to solve problems and drive business across software engineering, Java backend, and Flutter development."
        canonical="/careers"
        keywords="Raj Global Ventures careers, software engineering intern, Java backend developer intern, Flutter developer intern, remote tech jobs, Tirunelveli"
      />

      {/* Hero Section with General Vector SVG Illustration */}
      <section className="relative overflow-hidden border-b border-line bg-canvas/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Heading, Philosophy & Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1 text-xs font-semibold text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                <span>CAREERS &amp; INTERNSHIPS</span>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl">
                Build high-impact systems. Solve what matters.
              </h1>

              <p className="text-lg leading-relaxed text-muted md:text-xl">
                We look for people passionate about solving real-world problems and driving business.
                Join our remote engineering team building robust software, scalable backends, and responsive applications.
              </p>

              {/* Quick Info Badges (Neutral, unpolished styles without bright colored bg) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-1.5 text-xs text-ink">
                  <LaptopIcon className="h-4 w-4 text-ink" />
                  <span>Remote</span>
                </span>

                <span className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-1.5 text-xs text-ink">
                  <AwardIcon className="h-4 w-4 text-ink" />
                  <span>PPO / Full-Time Conversion</span>
                </span>

                <a
                  href="mailto:hr@rajgv.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-1.5 text-xs text-ink transition-colors hover:border-ink hover:text-brand"
                >
                  <MailIcon className="h-4 w-4 text-ink" />
                  <span>hr@rajgv.com</span>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="#open-roles"
                  className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand"
                >
                  <span>Explore Open Opportunities</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </a>

                <a
                  href="#how-we-hire"
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
                >
                  <span>How We Hire</span>
                </a>
              </div>
            </div>

            {/* Right Column: General Careers Vector SVG Illustration */}
            <div className="lg:col-span-6">
              <GeneralCareersIllustration />
            </div>
          </div>

          {/* Value Pillars Banner (No artificial box backgrounds for icons) */}
          <div className="mt-14 grid grid-cols-1 gap-4 border-t border-line pt-8 sm:grid-cols-3">
            <div className="flex items-start gap-3 rounded-xl border border-line bg-white p-5">
              <Code2Icon className="h-5 w-5 text-ink shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-ink">Passionate Problem Solvers</p>
                <p className="text-xs text-muted mt-1">Curiosity, craftsmanship, and clean pragmatic code</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-line bg-white p-5">
              <Building2Icon className="h-5 w-5 text-ink shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-ink">Business &amp; Impact Driven</p>
                <p className="text-xs text-muted mt-1">Direct measurable value for real users and products</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-line bg-white p-5">
              <AwardIcon className="h-5 w-5 text-ink shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-ink">Career Progression</p>
                <p className="text-xs text-muted mt-1">Performance-based full-time permanent conversion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section with SEARCH & FILTERS ON THE LEFT SIDE */}
      <section
        id="open-roles"
        className="w-full bg-white py-20 md:py-28"
        aria-labelledby="open-roles-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider">CURRENT OPENINGS</p>
            <h2 id="open-roles-heading" className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Open roles &amp; internships
            </h2>
            <p className="mt-3 text-base text-muted">
              Use the search and filters on the left to explore available positions, view complete JDs, and apply.
            </p>
          </div>

          {/* 2-Column Layout: Left (Search & Filters) | Right (Job Cards) */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* LEFT SIDEBAR: Search & Filters (4 cols) */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-line bg-canvas/30 p-6 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-line">
                  <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <FilterIcon className="h-4 w-4 text-ink" />
                    <span>Search &amp; Filters</span>
                  </div>

                  {hasActiveFilters && (
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="inline-flex items-center gap-1 text-xs text-muted hover:text-ink transition-colors"
                    >
                      <RotateCcwIcon className="h-3 w-3" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>

                {/* 1. Keyword Search Input */}
                <div>
                  <label htmlFor="job-search" className="block text-xs font-medium text-ink mb-1.5">
                    Search by Keyword
                  </label>
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <input
                      id="job-search"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Title, skill (e.g. Java, Flutter)..."
                      className="w-full rounded-lg border border-line bg-white py-2 pl-9 pr-8 text-xs text-ink placeholder:text-muted focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
                        aria-label="Clear search"
                      >
                        <XIcon className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* 2. Department Filter */}
                <div>
                  <label className="block text-xs font-medium text-ink mb-2">
                    Department
                  </label>
                  <div className="space-y-1.5">
                    {departments.map((dept) => {
                      const count = dept === "All"
                        ? openPositions.length
                        : openPositions.filter((j) => j.department === dept).length;
                      const isSelected = selectedDept === dept;

                      return (
                        <button
                          key={dept}
                          type="button"
                          onClick={() => setSelectedDept(dept)}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs transition-colors ${
                            isSelected
                              ? "bg-ink text-white font-medium"
                              : "text-muted hover:bg-white hover:text-ink border border-transparent"
                          }`}
                        >
                          <span>{dept}</span>
                          <span className={isSelected ? "text-white/70" : "text-muted"}>({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Duration / Engagement Filter */}
                <div>
                  <label className="block text-xs font-medium text-ink mb-2">
                    Duration &amp; Engagement
                  </label>
                  <div className="space-y-1.5">
                    {[
                      { label: "All Types & Durations", value: "All" },
                      { label: "College Internships (3–6 Months)", value: "3–6" },
                      { label: "Full-Time Roles (2+ Years)", value: "Full-Time" }
                    ].map((dur) => {
                      const isSelected = selectedDuration === dur.value;
                      return (
                        <button
                          key={dur.value}
                          type="button"
                          onClick={() => setSelectedDuration(dur.value)}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs transition-colors ${
                            isSelected
                              ? "bg-ink text-white font-medium"
                              : "text-muted hover:bg-white hover:text-ink"
                          }`}
                        >
                          <span>{dur.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Work Mode Notice (Remote strictly) */}
                <div className="pt-3 border-t border-line text-xs text-muted flex items-center gap-2">
                  <LaptopIcon className="h-4 w-4 text-ink shrink-0" />
                  <span>All positions are <strong>Remote</strong></span>
                </div>
              </div>

              {/* Direct Inquiries Help Card */}
              <div className="rounded-2xl border border-line bg-white p-5 space-y-3">
                <p className="text-xs font-semibold text-ink">Have a quick question?</p>
                <p className="text-xs text-muted">
                  Reach out directly to our hiring desk at{" "}
                  <a href="mailto:hr@rajgv.com" className="text-ink underline hover:text-brand">
                    hr@rajgv.com
                  </a>{" "}
                  or phone/WhatsApp at{" "}
                  <a href="tel:9865798157" className="text-ink font-medium">
                    +91 98657 98157
                  </a>.
                </p>
              </div>
            </aside>

            {/* RIGHT COLUMN: Filtered Job Cards (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Results Count Bar */}
              <div className="flex items-center justify-between text-xs text-muted pb-2 border-b border-line">
                <span>
                  Showing <strong>{filteredPositions.length}</strong> of {openPositions.length} open {openPositions.length === 1 ? "position" : "positions"}
                </span>
                {hasActiveFilters && (
                  <span className="text-ink">Filtered results</span>
                )}
              </div>

              {filteredPositions.length === 0 ? (
                /* No Results Empty State */
                <div className="rounded-2xl border border-line bg-canvas/30 p-12 text-center space-y-4">
                  <HelpCircleIcon className="mx-auto h-10 w-10 text-muted" />
                  <h3 className="text-base font-semibold text-ink">No matching positions found</h3>
                  <p className="text-xs text-muted max-w-md mx-auto">
                    We couldn't find any openings matching your search query or filters. Try resetting the filters or check back later.
                  </p>
                  <div>
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="rounded-lg border border-line bg-white px-4 py-2 text-xs font-medium text-ink hover:border-ink"
                    >
                      Reset All Filters
                    </button>
                  </div>
                </div>
              ) : (
                /* Job Cards List */
                filteredPositions.map((job) => {
                  const isSkillsExpanded = !!expandedSkills[job.id];
                  const visibleSkills = isSkillsExpanded ? job.skills : job.skills.slice(0, 5);
                  const hasMoreSkills = job.skills.length > 5;

                  return (
                    <div
                      key={job.id}
                      className="group rounded-2xl border border-line bg-white p-7 transition-all duration-200 hover:border-ink/40 hover:shadow-xs"
                    >
                      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
                        <div className="space-y-3 max-w-2xl">
                          {/* Company-matched neat labels & badges */}
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-xs font-medium text-brand border border-brand/25 bg-brand-soft/40 px-2.5 py-0.5 rounded">
                              {job.vrCode}
                            </span>
                            <span className="text-xs text-muted">·</span>
                            <span className="text-xs text-ink/80 border border-line bg-canvas/40 px-2 py-0.5 rounded">
                              {job.team}
                            </span>
                            <span className="text-xs text-muted">·</span>
                            <span className="text-xs font-medium text-brand border border-brand/20 bg-brand-soft/30 px-2 py-0.5 rounded">
                              Remote
                            </span>
                            {job.duration && (
                              <span className="text-xs text-muted border border-line bg-canvas/40 px-2 py-0.5 rounded">
                                {job.duration}
                              </span>
                            )}
                          </div>

                          {/* Title linking to next page */}
                          <h3 className="text-2xl font-semibold text-ink group-hover:text-brand transition-colors">
                            <Link to={`/careers/${job.id}`}>
                              {job.title}
                            </Link>
                          </h3>

                          {/* Eligibility Note */}
                          {job.eligibility && (
                            <p className="text-xs text-muted flex items-center gap-1.5">
                              <GraduationCapIcon className="h-3.5 w-3.5 text-muted shrink-0" />
                              <span>Eligibility: <strong className="text-ink">{job.eligibility}</strong></span>
                            </p>
                          )}

                          <p className="text-sm leading-relaxed text-muted">
                            {job.summary}
                          </p>

                          {/* Skills pills (Clean company-matched neat colors with More/Less toggle) */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-2">
                            {visibleSkills.map((skill) => (
                              <span
                                key={skill}
                                className="rounded border border-brand/15 bg-brand-soft/30 px-2 py-0.5 text-[11px] font-mono text-ink/85 hover:border-brand/40 hover:text-brand transition-colors"
                              >
                                {skill}
                              </span>
                            ))}

                            {hasMoreSkills && (
                              <button
                                type="button"
                                onClick={() => toggleSkills(job.id)}
                                className="inline-flex items-center gap-1 rounded border border-line bg-canvas/60 px-2 py-0.5 text-[11px] font-medium text-brand hover:border-brand/40 hover:bg-brand-soft/40 transition-colors cursor-pointer"
                                aria-label={isSkillsExpanded ? `Show fewer skills for ${job.title}` : `Show all ${job.skills.length} skills for ${job.title}`}
                              >
                                <span>{isSkillsExpanded ? "Less" : `+${job.skills.length - 5} More`}</span>
                              </button>
                            )}
                          </div>
                        </div>

                      {/* Right action */}
                      <div className="flex flex-col items-start lg:items-end justify-between gap-4 shrink-0 pt-1">
                        <Link
                          to={`/careers/${job.id}`}
                          className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-xs font-semibold text-white transition-colors duration-150 hover:bg-brand whitespace-nowrap"
                        >
                          <span>View Details &amp; Apply</span>
                          <ArrowRightIcon className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            )}

              {/* General Candidate Box */}
              <div className="rounded-2xl border border-line bg-canvas/20 p-8">
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      Don't see your specific specialization?
                    </h3>
                    <p className="mt-1 text-xs text-muted max-w-lg">
                      We are always eager to meet curious developers and problem-solvers. Send your CV and a brief introduction to our talent desk.
                    </p>
                  </div>

                  <a
                    href="mailto:hr@rajgv.com?subject=General%20Application%20-%20Raj%20Global%20Ventures"
                    className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-ink whitespace-nowrap"
                  >
                    <SendIcon className="h-3.5 w-3.5" />
                    <span>Send CV to hr@rajgv.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE HIRE Section (General Philosophy, no emojis, no artificial icon background boxes) */}
      <section
        id="how-we-hire"
        className="w-full bg-canvas/30 py-20 md:py-28 border-t border-b border-line"
        aria-labelledby="how-we-hire-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider">{hiringPhilosophy.eyebrow}</p>
            <h2 id="how-we-hire-heading" className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {hiringPhilosophy.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {hiringPhilosophy.description}
            </p>
          </div>

          {/* 4 General Process Steps */}
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {hiringProcessSteps.map((step) => (
              <div key={step.step} className="rounded-2xl border border-line bg-white p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-ink border border-line px-2 py-0.5 rounded">
                    {step.step}
                  </span>
                  <span className="text-[10px] text-muted">
                    {step.timeframe}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-ink">{step.title}</h3>
                <p className="text-xs leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </div>

          {/* What We Value Pillars (Clean icons with NO artificial background boxes, NO emojis) */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-line bg-white p-6 space-y-2">
              <TargetIcon className="h-5 w-5 text-ink" />
              <h4 className="text-sm font-semibold text-ink">Root-Cause Curiosity</h4>
              <p className="text-xs leading-relaxed text-muted">
                We value individuals who dig past surface symptoms to understand why systems behave the way they do.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 space-y-2">
              <TrendingUpIcon className="h-5 w-5 text-ink" />
              <h4 className="text-sm font-semibold text-ink">Business Value Alignment</h4>
              <p className="text-xs leading-relaxed text-muted">
                Code exists to solve problems for real users and create sustainable commercial value.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 space-y-2">
              <ZapIcon className="h-5 w-5 text-ink" />
              <h4 className="text-sm font-semibold text-ink">High Autonomy &amp; Speed</h4>
              <p className="text-xs leading-relaxed text-muted">
                We provide the context and support, and trust you to execute with ownership and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Build Your Career With Us */}
      <section className="w-full bg-white py-20 md:py-28" aria-labelledby="why-rajgv-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider">CULTURE &amp; IMPACT</p>
            <h2 id="why-rajgv-heading" className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Why join Raj Global Ventures
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Three generations of business stability meet modern software engineering, distributed systems, and real-world impact.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {careerBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-line bg-white p-7 transition-colors hover:border-ink/30 space-y-3"
              >
                <span className="inline-block rounded border border-line px-2 py-0.5 text-[11px] text-muted">
                  {benefit.badge}
                </span>
                <h3 className="text-base font-semibold text-ink">
                  {benefit.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="w-full bg-canvas/30 py-20 md:py-28 border-t border-line" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider">HAVE QUESTIONS?</p>
            <h2 id="faq-heading" className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Frequently asked questions about careers
            </h2>
            <p className="mt-3 text-base text-muted">
              Answers regarding our remote internships, full-time conversions, and hiring steps.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {careerFaqs.map((faq, idx) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-line bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-ink"
                  aria-expanded={openFaqIndex === idx}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircleIcon className="h-4 w-4 text-ink shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDownIcon
                    className={`h-4 w-4 text-muted transition-transform duration-200 ${
                      openFaqIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="border-t border-line bg-canvas/10 px-5 pb-5 pt-4 text-xs leading-relaxed text-muted">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        title="Ready to Build What Matters?"
        subtitle="Three Generations. One Vision."
        description="We look for people passionate about solving problems and driving business. Explore our open positions and apply today."
        primaryCta={{ label: "Explore Open Roles", to: "#open-roles" }}
        secondaryCta={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
