import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  BriefcaseIcon,
  ClockIcon,
  SparklesIcon,
  PhoneIcon,
  MailIcon,
  Share2Icon,
  CheckIcon,
  GraduationCapIcon,
  AwardIcon,
  Code2Icon,
  HelpCircleIcon,
  LaptopIcon,
  CheckCircle2Icon,
  ExternalLinkIcon,
  FileTextIcon
} from "lucide-react";
import { openPositions, CAREERS_GOOGLE_FORM_URL } from "../data/careers";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { FinalCta } from "../components/FinalCta";

export function JobDetail() {
  const { id } = useParams<{ id: string }>();

  const [copiedLink, setCopiedLink] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Match by id or vrCode (case-insensitive)
  const job = openPositions.find(
    (j) =>
      j.id.toLowerCase() === id?.toLowerCase() ||
      j.vrCode.toLowerCase() === id?.toLowerCase()
  );

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  if (!job) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-28 text-center space-y-4">
        <HelpCircleIcon className="mx-auto h-12 w-12 text-muted" />
        <h1 className="text-3xl font-semibold tracking-tight text-ink">Job Not Found</h1>
        <p className="text-sm text-muted">
          The position you are looking for may have been updated or moved.
        </p>
        <div className="pt-4">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-xs font-semibold text-white hover:bg-brand"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            <span>Explore All Open Careers</span>
          </Link>
        </div>
      </div>
    );
  }

  // Other related jobs
  const otherJobs = openPositions.filter((j) => j.id !== job.id);

  return (
    <>
      <SEO
        title={`${job.title} (${job.vrCode}) | Careers at Raj Global Ventures`}
        description={`${job.title} (${job.vrCode}). ${job.summary} Apply online or send resume to ${job.contactEmail || "hr@rajgv.com"}.`}
        canonical={`/careers/${job.id}`}
        keywords={`${job.title}, ${job.vrCode}, Raj Global Ventures jobs, remote internship, tech careers, ${job.skills.join(", ")}`}
      />

      {/* Header Bar with Back Link & Semantic Breadcrumbs for Site Structure */}
      <section className="border-b border-line bg-canvas/30 py-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link
                to="/careers"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-ink shrink-0"
                title="Back to all open positions"
              >
                <ArrowLeftIcon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Back</span>
              </Link>
              <span className="hidden sm:inline text-line" aria-hidden="true">|</span>
              <Breadcrumbs
                items={[
                  { name: "Home", path: "/" },
                  { name: "Careers", path: "/careers" },
                  { name: job.title, path: `/careers/${job.id}` }
                ]}
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-medium text-brand border border-brand/25 bg-brand-soft/40 px-2.5 py-1 rounded">
                VRcode: {job.vrCode}
              </span>

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-3 py-1 text-xs text-muted hover:border-ink hover:text-ink transition-colors"
                title="Copy link to this job"
              >
                {copiedLink ? (
                  <>
                    <CheckIcon className="h-3.5 w-3.5 text-ink" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2Icon className="h-3.5 w-3.5" />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Hero Banner (Company-matched neat styling) */}
      <section className="relative overflow-hidden border-b border-line bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted border border-line bg-canvas/40 px-2.5 py-0.5 rounded">
                  {job.department}
                </span>
                <span className="text-xs text-muted">·</span>
                <span className="text-xs text-muted border border-line bg-canvas/40 px-2.5 py-0.5 rounded">
                  {job.team}
                </span>
                <span className="text-xs text-muted">·</span>
                <span className="text-xs font-medium text-brand border border-brand/20 bg-brand-soft/30 px-2.5 py-0.5 rounded">
                  Remote
                </span>
                {job.type && (
                  <>
                    <span className="text-xs text-muted">·</span>
                    <span className="text-xs text-ink/80 border border-line bg-white px-2.5 py-0.5 rounded">
                      {job.type}
                    </span>
                  </>
                )}
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                {job.title}
              </h1>

              <p className="text-base leading-relaxed text-muted md:text-lg">
                {job.summary}
              </p>

              {/* Key Metadata Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <LaptopIcon className="h-4 w-4 text-ink" />
                  <span>Work Mode: <strong className="text-ink">Remote</strong></span>
                </span>

                {job.duration && (
                  <span className="inline-flex items-center gap-1.5">
                    <ClockIcon className="h-4 w-4 text-ink" />
                    <span>Duration: <strong className="text-ink">{job.duration}</strong></span>
                  </span>
                )}

                {job.compensation && (
                  <span className="inline-flex items-center gap-1.5">
                    <AwardIcon className="h-4 w-4 text-ink" />
                    <span>Compensation: <strong className="text-ink">{job.compensation}</strong></span>
                  </span>
                )}

                {job.eligibility && (
                  <span className="inline-flex items-center gap-1.5">
                    <GraduationCapIcon className="h-4 w-4 text-ink" />
                    <span>Eligibility: <strong className="text-ink">{job.eligibility}</strong></span>
                  </span>
                )}
              </div>
            </div>

            {/* Quick Action Button & Direct Contacts */}
            <div className="flex flex-col items-start lg:items-end gap-2.5 shrink-0">
              <a
                href={job.applyUrl || CAREERS_GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-brand"
                title={`Apply for ${job.title}`}
              >
                <span>Apply Online</span>
                <ExternalLinkIcon className="h-3.5 w-3.5" />
              </a>

              <p className="text-xs text-muted">
                Resume:{" "}
                <a href={`mailto:${job.contactEmail || "hr@rajgv.com"}?subject=Application%20for%20${encodeURIComponent(job.title)}%20(${job.vrCode})`} className="font-semibold text-ink underline hover:text-brand">
                  {job.contactEmail || "hr@rajgv.com"}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout (JD Breakdown + Sidebar Info) */}
      <section className="w-full bg-canvas/30 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Column (8 cols): Complete JD Breakdown */}
            <div className="lg:col-span-8 space-y-10">
              {/* About the Role / About the Work */}
              {(job.aboutRole || job.aboutWork) && (
                <div className="rounded-2xl border border-line bg-white p-8 space-y-3">
                  <h2 className="text-base font-semibold text-ink flex items-center gap-2">
                    <SparklesIcon className="h-4 w-4 text-ink" />
                    <span>About the Role &amp; Work</span>
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">
                    {job.aboutRole || job.aboutWork}
                  </p>
                </div>
              )}

              {/* Key Responsibilities */}
              <div className="rounded-2xl border border-line bg-white p-8 space-y-4">
                <h2 className="text-base font-semibold text-ink flex items-center gap-2">
                  <BriefcaseIcon className="h-4 w-4 text-ink" />
                  <span>Key Responsibilities</span>
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink/85 leading-relaxed">
                      <CheckCircle2Icon className="h-4 w-4 text-ink shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements & Qualifications */}
              <div className="rounded-2xl border border-line bg-white p-8 space-y-4">
                <h2 className="text-base font-semibold text-ink flex items-center gap-2">
                  <GraduationCapIcon className="h-4 w-4 text-ink" />
                  <span>Requirements &amp; Qualifications</span>
                </h2>
                <ol className="space-y-3">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink/85 leading-relaxed">
                      <span className="font-mono text-xs text-muted shrink-0 mt-0.5">
                        {i + 1}.
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Preferred Skills & Tech Stack */}
              {job.preferredSkills && job.preferredSkills.length > 0 && (
                <div className="rounded-2xl border border-line bg-white p-8 space-y-4">
                  <h2 className="text-base font-semibold text-ink flex items-center gap-2">
                    <Code2Icon className="h-4 w-4 text-ink" />
                    <span>Preferred Skills &amp; Specialized Areas</span>
                  </h2>
                  <ul className="space-y-2.5">
                    {job.preferredSkills.map((pref, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-ink/85 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-ink shrink-0 mt-2" />
                        <span>{pref}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills badges (Clean company-matched neat colors with More/Less toggle) */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-line">
                    {(showAllSkills || job.skills.length <= 5 ? job.skills : job.skills.slice(0, 5)).map((skill) => (
                      <span
                        key={skill}
                        className="rounded border border-brand/15 bg-brand-soft/30 px-2.5 py-1 text-xs font-mono text-ink/90 hover:border-brand/40 hover:text-brand transition-colors"
                      >
                        {skill}
                      </span>
                    ))}

                    {job.skills.length > 5 && (
                      <button
                        type="button"
                        onClick={() => setShowAllSkills(!showAllSkills)}
                        className="inline-flex items-center gap-1 rounded border border-line bg-canvas/60 px-2.5 py-1 text-xs font-medium text-brand hover:border-brand/40 hover:bg-brand-soft/40 transition-colors cursor-pointer"
                        aria-label={showAllSkills ? "Show fewer skills" : `Show all ${job.skills.length} skills`}
                      >
                        <span>{showAllSkills ? "Less" : `+${job.skills.length - 5} More`}</span>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Opportunity / Full-Time Conversion */}
              {job.opportunity && (
                <div className="rounded-2xl border border-line bg-white p-8 space-y-2">
                  <div className="flex items-center gap-2 text-ink">
                    <AwardIcon className="h-5 w-5 text-ink shrink-0" />
                    <h3 className="text-base font-semibold text-ink">Permanent Full-Time Opportunity</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {job.opportunity}
                  </p>
                </div>
              )}

              {/* Application Section */}
              <div id="apply-form" className="rounded-2xl border border-line bg-white p-8 md:p-10 scroll-mt-24 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-medium text-brand border border-brand/25 bg-brand-soft/40 px-2.5 py-0.5 rounded">
                      VRcode: {job.vrCode}
                    </span>
                    <span className="text-xs text-muted">Application Portal</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-ink">
                    Apply for {job.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted leading-relaxed max-w-xl">
                    Submit your application through our official online form. When completing the form, please ensure you reference position VRcode <strong className="font-mono text-ink">{job.vrCode}</strong>.
                  </p>
                </div>

                <div className="rounded-xl border border-line bg-canvas/30 p-6 md:p-8 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-ink">What to have ready:</h3>
                    <ul className="space-y-1.5 text-xs text-muted">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                        <span>Updated Resume / CV</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                        <span>GitHub profile, portfolio, or code samples</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                        <span>Brief summary of your availability and relevant experience</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <a
                      href={job.applyUrl || CAREERS_GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-brand"
                    >
                      <span>Open Application Form</span>
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Direct Contacts Alternative */}
                <div className="pt-2 border-t border-line space-y-2">
                  <p className="text-xs text-muted leading-relaxed">
                    Prefer applying by email? Send your CV with subject <strong className="text-ink">"Application for {job.title} ({job.vrCode})"</strong> to{" "}
                    <a
                      href={`mailto:${job.contactEmail || "hr@rajgv.com"}?subject=Application%20for%20${encodeURIComponent(job.title)}%20(${job.vrCode})`}
                      className="font-semibold text-ink underline hover:text-brand"
                    >
                      {job.contactEmail || "hr@rajgv.com"}
                    </a>
                  </p>
                  <p className="text-xs text-muted">
                    WhatsApp queries:{" "}
                    <a href="tel:9865798157" className="font-semibold text-ink hover:text-brand">
                      +91 98657 98157
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): Sticky Quick Info & Direct Contacts */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 space-y-6">
                {/* Role Quick Card */}
                <div className="rounded-2xl border border-line bg-white p-6 space-y-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-ink border-b border-line pb-3">
                    Role Summary
                  </h3>

                  <div className="space-y-3.5 text-xs">
                    <div>
                      <p className="text-muted">VRcode</p>
                      <p className="font-mono text-sm font-semibold text-ink mt-0.5">{job.vrCode}</p>
                    </div>

                    <div>
                      <p className="text-muted">Title</p>
                      <p className="font-medium text-ink mt-0.5">{job.title}</p>
                    </div>

                    <div>
                      <p className="text-muted">Department</p>
                      <p className="text-ink mt-0.5">{job.department}</p>
                    </div>

                    <div>
                      <p className="text-muted">Work Mode</p>
                      <p className="text-ink mt-0.5">Remote</p>
                    </div>

                    {job.duration && (
                      <div>
                        <p className="text-muted">Duration</p>
                        <p className="text-ink mt-0.5">{job.duration}</p>
                      </div>
                    )}

                    {job.compensation && (
                      <div>
                        <p className="text-muted">Compensation</p>
                        <p className="text-ink mt-0.5">{job.compensation}</p>
                      </div>
                    )}

                    {job.eligibility && (
                      <div>
                        <p className="text-muted">Eligibility</p>
                        <p className="text-ink mt-0.5">{job.eligibility}</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <a
                      href={job.applyUrl || CAREERS_GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full rounded-lg bg-ink py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-brand shadow-xs"
                      title={`Apply for ${job.title}`}
                    >
                      <span>Apply Online</span>
                      <ExternalLinkIcon className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* Direct Contacts Card (No artificial background boxes for icons) */}
                <div className="rounded-2xl border border-line bg-white p-6 space-y-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-ink">Direct Inquiries</h3>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="h-4 w-4 text-ink shrink-0" />
                      <div>
                        <p className="text-muted">Queries &amp; WhatsApp</p>
                        <a href="tel:9865798157" className="font-medium text-ink hover:text-brand">
                          +91 98657 98157
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MailIcon className="h-4 w-4 text-ink shrink-0" />
                      <div>
                        <p className="text-muted">Send Resume</p>
                        <a
                          href={`mailto:${job.contactEmail || "hr@rajgv.com"}?subject=Application%20for%20${encodeURIComponent(job.title)}%20(${job.vrCode})`}
                          className="font-medium text-ink underline hover:text-brand"
                        >
                          {job.contactEmail || "hr@rajgv.com"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Openings */}
      {otherJobs.length > 0 && (
        <section className="border-t border-line bg-white py-16" aria-labelledby="other-roles-heading">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between pb-6">
              <h2 id="other-roles-heading" className="text-lg font-semibold text-ink">
                Other open positions
              </h2>
              <Link
                to="/careers"
                className="text-xs text-muted hover:text-ink transition-colors"
              >
                View all careers →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {otherJobs.map((other) => (
                <Link
                  key={other.id}
                  to={`/careers/${other.id}`}
                  className="group rounded-2xl border border-line bg-white p-6 transition-all hover:border-ink/40 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-ink border border-line bg-canvas px-2 py-0.5 rounded">
                      {other.vrCode}
                    </span>
                    <span className="text-xs text-muted">Remote</span>
                  </div>

                  <h3 className="text-base font-semibold text-ink group-hover:text-brand transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-xs text-muted line-clamp-2">
                    {other.summary}
                  </p>
                  <span className="text-xs font-medium text-ink pt-2 block">
                    View Complete JD →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <FinalCta
        title="Ready to Build What Matters?"
        subtitle="Three Generations. One Vision."
        description="Whether you are an aspiring intern or an experienced developer, explore how you can grow with Raj Global Ventures."
        primaryCta={{ label: "Back to All Careers", to: "/careers" }}
        secondaryCta={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
