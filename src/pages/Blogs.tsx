import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpenIcon,
  SparklesIcon,
  ArrowRightIcon,
  ClockIcon,
  CheckCircle2Icon,
  BellIcon
} from "lucide-react";
import { FinalCta } from "../components/FinalCta";
import { SEO } from "../components/SEO";

export function Blogs() {
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <>
      <SEO
        title="Blogs & Insights | Raj Global Ventures"
        description="Technical articles, research breakdowns, and company insights from Raj Global Ventures."
        canonical="/blogs"
        keywords="Raj Global Ventures blog, trading systems research, technology insights, Tirunelveli"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-line bg-canvas/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                <BookOpenIcon className="h-3.5 w-3.5" />
                RESOURCES &amp; INSIGHTS
              </span>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl">
                Blogs &amp; Industry Insights
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted md:text-xl">
                Technical breakdowns, architectural articles, and market perspectives from our engineering and leadership desks.
              </p>
            </div>

            {/* Early Beta Access Button */}
            <div className="shrink-0">
              <Link
                to="/beta"
                className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand"
              >
                <SparklesIcon className="h-4 w-4 text-brand-soft" />
                <span>Early Beta Access</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area - Status Clearly Indicated as Coming Soon */}
      <section className="w-full bg-white py-20 md:py-28" aria-label="Articles Status">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-canvas p-8 text-center shadow-sm md:p-14">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-soft text-brand">
              <ClockIcon className="h-8 w-8" />
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              Coming Soon · Content in Preparation
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              No Published Articles Available Yet
            </h2>

            <p className="mt-4 text-base leading-relaxed text-muted">
              Our engineering team and research specialists are actively preparing in-depth case studies, technology whitepapers, and operational perspectives. Publications will be released here soon.
            </p>

            {/* Early Beta Access Callout */}
            <div className="mt-8 rounded-2xl border border-line bg-white p-6 text-left shadow-sm">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    Looking for our new product?
                  </h3>
                  <p className="mt-1 text-xs text-muted">
                    Sign up for the TradingFootprint Early Beta to test live features and questionnaire slots.
                  </p>
                </div>
                <Link
                  to="/beta"
                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-brand px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-brand/90"
                >
                  <span>Apply for Beta</span>
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Notification Form */}
            <div className="mt-8 border-t border-line pt-8">
              {isSubscribed ? (
                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gain">
                  <CheckCircle2Icon className="h-4 w-4" />
                  <span>You're on the list! We'll notify you when articles are published.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <input
                    type="email"
                    required
                    value={subscribedEmail}
                    onChange={(e) => setSubscribedEmail(e.target.value)}
                    placeholder="Enter email to get notified when published"
                    className="w-full max-w-sm rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand whitespace-nowrap"
                  >
                    <BellIcon className="h-4 w-4" />
                    <span>Notify Me</span>
                  </button>
                </form>
              )}
            </div>
          </div>
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
