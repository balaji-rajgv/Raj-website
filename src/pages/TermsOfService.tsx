import React from "react";
import { Link } from "react-router-dom";
import { FileTextIcon, AlertTriangleIcon, CheckCircle2Icon, ArrowLeftIcon, ScaleIcon } from "lucide-react";
import { companyName, contactDetails } from "../data/contact";
import { FinalCta } from "../components/FinalCta";

export function TermsOfService() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-canvas py-16 md:py-24" aria-labelledby="terms-heading">
        {/* Subtle background glow */}
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
              <ScaleIcon className="h-3.5 w-3.5" />
              <span>Legal Terms &amp; Conditions</span>
            </div>
            <h1 id="terms-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted">
              These Terms of Service govern your access to and use of {companyName} websites, APIs, custom engineering services,
              and early beta releases of TradingFootprint.
            </p>
            <p className="mt-2 text-xs font-mono text-muted">Effective Date: Early 2025 · Last Updated: 2026</p>
          </header>

          {/* Critical Risk Disclaimer Callout */}
          <div className="mt-8 rounded-2xl border border-loss/20 bg-loss/5 p-6 text-sm leading-relaxed text-ink shadow-sm">
            <div className="flex items-start gap-3">
              <AlertTriangleIcon className="mt-0.5 h-5 w-5 shrink-0 text-loss" />
              <div>
                <h3 className="font-semibold text-loss">Important Financial &amp; Regulatory Disclosure</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {companyName} is a software and technology infrastructure engineering provider. We do not provide registered financial advice,
                  portfolio management, or guaranteed returns. Trading financial instruments (Options, Futures, Equities, Commodities) involves
                  substantial risk of loss. You are solely responsible for all trading decisions and capital allocations.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Articles */}
          <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted">
            <section className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">1. Acceptance of Terms</h2>
              <p className="mt-3">
                By visiting our website, contacting our engineering team, or participating in early beta evaluations, you agree to be bound
                by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you must not access our software or services.
              </p>
            </section>

            <section className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">2. Scope of Software &amp; Engineering Services</h2>
              <div className="mt-3 space-y-3">
                <p>
                  {companyName} delivers high-throughput trading software and architecture, including:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Custom algorithmic execution pipelines, low-latency market gateways, and risk management modules.</li>
                  <li>Early beta releases of TradingFootprint (multi-asset order flow and market footprint software).</li>
                  <li>Technical architecture reviews and latency benchmarking under separate service agreements.</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">3. Broker Accounts &amp; Third-Party Gateways</h2>
              <p className="mt-3">
                Our platform provides connectivity options to 20+ domestic and international brokerages. You acknowledge that:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>You maintain independent contractual relationships with your respective brokers (e.g. Zerodha, Interactive Brokers, Angel One, etc.).</li>
                <li>We have no control over broker API uptime, margin requirements, order rejections, or exchange line disconnects.</li>
                <li>You are solely responsible for keeping your broker API secret keys and credentials confidential.</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">4. Intellectual Property &amp; Client Ownership</h2>
              <div className="mt-3 space-y-3">
                <p>
                  <strong>Client Custom Builds:</strong> For custom consulting engagements, all client-commissioned proprietary trading
                  strategies, custom rules, and documentation belong exclusively to the client upon full settlement of contracted invoices.
                </p>
                <p>
                  <strong>TradingFootprint Platform:</strong> All trademarks, core engine source code, algorithms, visual interfaces,
                  and documentation comprising TradingFootprint remain the exclusive intellectual property of {companyName}.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">5. Limitation of Liability</h2>
              <p className="mt-3">
                To the fullest extent permissible by applicable law, {companyName}, its founders, employees, and partners shall not be liable
                for any direct, indirect, incidental, or consequential damages resulting from market volatility, execution slippage,
                algorithmic errors, network latency, or system disconnections.
              </p>
            </section>

            <section className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">6. Governing Law &amp; Jurisdiction</h2>
              <p className="mt-3">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection
                with these Terms shall be subject to the exclusive jurisdiction of the competent courts of Tamil Nadu, India.
              </p>
            </section>

            <section className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">7. Contact Information</h2>
              <p className="mt-3">
                For legal inquiries or clarifications regarding these terms:
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
        title="Ready to engineer your trading architecture?"
        description="Schedule a technical discussion with our engineering team in Tirunelveli, Tamil Nadu."
      />
    </>
  );
}
