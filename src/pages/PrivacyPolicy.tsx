import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheckIcon, LockIcon, ArrowLeftIcon, FileTextIcon } from "lucide-react";
import { companyName, contactDetails } from "../data/contact";
import { FinalCta } from "../components/FinalCta";

export function PrivacyPolicy() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-canvas py-16 md:py-24" aria-labelledby="privacy-heading">
        {/* Decorative background light accents */}
        <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-brand/5 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 top-40 h-96 w-96 rounded-full bg-sun/5 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-4xl px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted transition-colors hover:text-ink">
            <ArrowLeftIcon className="h-3.5 w-3.5" />
            Back to Home
          </Link>

          <header className="mt-6 border-b border-line pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1 text-xs font-medium text-brand shadow-sm">
              <LockIcon className="h-3.5 w-3.5" />
              <span>Data Protection &amp; Confidentiality</span>
            </div>
            <h1 id="privacy-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted">
              At {companyName}, we hold your privacy and proprietary information to the highest standards.
              This Privacy Policy describes how we collect, use, and protect your information when you access our website,
              consulting services, and trading software platforms.
            </p>
            <p className="mt-2 text-xs font-mono text-muted">Effective Date: Early 2025 · Last Updated: 2026</p>
          </header>

          {/* Quick Pillars */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <ShieldCheckIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-ink">No Data Monetization</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">We never sell, rent, or lease client data to third parties.</p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <LockIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-ink">Encrypted Storage</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">All communication and session credentials utilize standard encryption.</p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <FileTextIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-ink">Strict Confidentiality</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">Trading ideas and bespoke client systems remain 100% proprietary to the client.</p>
            </div>
          </div>

          {/* Core Sections */}
          <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted">
            <section className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">1. Information We Collect</h2>
              <div className="mt-4 space-y-3">
                <p>We collect information you voluntarily provide and necessary technical identifiers:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>Inquiry &amp; Beta Information:</strong> Name, work email, phone number, city, preferred brokerages,
                    and trading preferences submitted via our contact and beta evaluation questionnaires.
                  </li>
                  <li>
                    <strong>System &amp; Technical Usage Data:</strong> Anonymous network metrics, browser type, latency benchmarks,
                    and error diagnostic logs to ensure high system uptime.
                  </li>
                  <li>
                    <strong>Client Architecture Engagements:</strong> Under specific consulting NDAs, system requirements and venue
                    connectivity specifications shared for development purposes.
                  </li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">2. How We Use Your Information</h2>
              <div className="mt-4 space-y-3">
                <p>We process your data strictly for legitimate operational purposes:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>To evaluate and grant early beta access for our TradingFootprint platform.</li>
                  <li>To respond promptly to engineering inquiries and schedule technical architecture reviews.</li>
                  <li>To maintain platform security, detect unauthorized access, and prevent denial-of-service attempts.</li>
                  <li>To provide service updates, security notices, and platform availability announcements.</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">3. Broker API &amp; Credentials Security</h2>
              <p className="mt-3">
                When using our platform connectors (e.g. Zerodha, Interactive Brokers, Angel One, Upstox, Dhan, Fyers):
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Your master broker login passwords are never stored on our public web servers.</li>
                <li>API session tokens are managed directly on the user's localized client runtime or dedicated secure execution gateways.</li>
                <li>We do not have access to execute withdrawals or transfers from your broker accounts.</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">4. Data Retention &amp; Your Rights</h2>
              <p className="mt-3">
                You retain complete authority over your personal information:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong>Access &amp; Export:</strong> You may request a copy of the personal information we hold about you.
                </li>
                <li>
                  <strong>Rectification &amp; Deletion:</strong> You may request the update or complete erasure of your contact details
                  and beta submission at any time by emailing us.
                </li>
                <li>
                  <strong>Retention Period:</strong> Inactive inquiry submissions are archived or purged after 24 months unless an active
                  enterprise contract is in effect.
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">5. Contact &amp; Grievance Redressal</h2>
              <p className="mt-3">
                For questions regarding this policy, or to exercise your data privacy rights, please contact our data grievance officer:
              </p>
              <div className="mt-4 border-t border-line pt-4 text-xs space-y-1">
                <p className="font-semibold text-ink">{companyName}</p>
                <p>{contactDetails.address.join(", ")}</p>
                <p>
                  Email:{" "}
                  <a href={`mailto:${contactDetails.email}`} className="font-medium text-brand hover:underline">
                    {contactDetails.email}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href={`tel:${contactDetails.phoneHref}`} className="font-medium text-brand hover:underline">
                    {contactDetails.phone}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <FinalCta
        title="Have questions about security or enterprise NDAs?"
        description="Our systems team in Tirunelveli, Tamil Nadu is available to discuss custom enterprise compliance."
      />
    </>
  );
}
