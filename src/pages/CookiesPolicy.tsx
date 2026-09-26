import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { ShieldCheckIcon, SlidersHorizontalIcon, CheckCircle2Icon, RefreshCwIcon } from "lucide-react";
import { companyName, contactDetails } from "../data/contact";
import { FinalCta } from "../components/FinalCta";
import { SEO } from "../components/SEO";

export function CookiesPolicy() {
  const [currentStatus, setCurrentStatus] = useState<string>("Active Default");

  useEffect(() => {
    const status = Cookies.get("raj_global_cookie_consent");
    if (status === "accepted") {
      setCurrentStatus("All Cookies Accepted");
    } else if (status === "essential_only") {
      setCurrentStatus("Essential Cookies Only");
    } else if (status === "custom") {
      setCurrentStatus("Customized Preferences Active");
    } else {
      setCurrentStatus("Standard Browsing (Consent Pending)");
    }
  }, []);

  const handleReset = () => {
    Cookies.remove("raj_global_cookie_consent");
    Cookies.remove("raj_cookie_analytics");
    Cookies.remove("raj_cookie_functional");
    Cookies.remove("raj_cookie_timestamp");
    window.location.reload();
  };

  return (
    <>
      <SEO
        title="Cookies Policy | Transparency & Local Cache Memory"
        description="Learn how Raj Global Ventures utilizes essential cookies and local cache memory for trading preferences and security. Manage your interactive cookie settings."
        canonical="/cookies"
        keywords="cookies policy, privacy controls, cache memory, Raj Global Ventures"
      />
      <section className="relative w-full overflow-hidden bg-canvas py-16 md:py-24" aria-labelledby="cookies-heading">
        {/* Subtle decorative background light accent */}
        <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-brand/5 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 top-40 h-96 w-96 rounded-full bg-sun/5 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-ink shadow-sm backdrop-blur">
              <ShieldCheckIcon className="h-3.5 w-3.5 text-brand" />
              <span>Transparency &amp; Data Ethics</span>
            </div>
            <h1 id="cookies-heading" className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-[52px] md:leading-[1.1]">
              Cookies &amp; Privacy Overview
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              At {companyName}, we believe in clarity and minimalism. We use cookies and local browser memory solely to ensure
              fast page loads, maintain secure sessions, and remember your interface preferences.
            </p>
          </div>

          {/* Quick Snapshot Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <CheckCircle2Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">Zero Intrusive Tracking</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                We do not sell user data, run cross-site behavioral ads, or track your personal activity across other websites.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <SlidersHorizontalIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">Full Trader Control</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                You can accept all cookies, limit your choice to essential security tokens, or customize options anytime.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <RefreshCwIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">Fast In-Memory Cache</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Console filters and display settings are stored locally on your device for rapid response times.
              </p>
            </div>
          </div>

          {/* Current Consent Status & Interactive Control */}
          <div className="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Your Current Preference</p>
                <h3 className="mt-1 text-xl font-semibold text-ink">{currentStatus}</h3>
                <p className="mt-1 text-xs text-muted">
                  Stored securely in your local browser storage for seamless navigation.
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-brand cursor-pointer">
                <RefreshCwIcon className="h-3.5 w-3.5" />
                Change / Reset Preferences
              </button>
            </div>
          </div>

          {/* Core Plain-English Sections */}
          <div className="mt-12 space-y-10 text-muted">
            <div className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">1. What are cookies and how do we use them?</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Cookies are small files stored in your web browser that allow our website to recognize your session and keep you logged in.
                In our high-performance trading platform, we also use browser cache memory so you don't have to re-enter your market preferences
                or watchlists on every refresh.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">2. Categories of cookies on our site</h2>
              <div className="mt-5 space-y-4">
                <div className="rounded-xl bg-canvas p-4">
                  <h3 className="text-sm font-semibold text-ink">Essential Cookies (Always Active)</h3>
                  <p className="mt-1 text-xs leading-relaxed">
                    Necessary for core security, fraud prevention, and maintaining page navigation. Without these, modern web applications cannot function safely.
                  </p>
                </div>

                <div className="rounded-xl bg-canvas p-4">
                  <h3 className="text-sm font-semibold text-ink">Functional &amp; Preference Cookies</h3>
                  <p className="mt-1 text-xs leading-relaxed">
                    Remember your personalized display preferences, such as selected market segments (Options, Futures, Equities, Commodities) and console layouts.
                  </p>
                </div>

                <div className="rounded-xl bg-canvas p-4">
                  <h3 className="text-sm font-semibold text-ink">Performance &amp; Diagnostics</h3>
                  <p className="mt-1 text-xs leading-relaxed">
                    Help our engineering team identify latency bottlenecks, optimize server response times, and improve overall platform reliability.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">3. Managing and clearing your cookies</h2>
              <p className="mt-3 text-sm leading-relaxed">
                You are in complete control of your data. You can adjust your consent at any time using the button above or directly in your browser:
              </p>
              <ul className="mt-4 space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span><strong>Via On-Site Settings:</strong> Click "Change / Reset Preferences" above to trigger the cookie selection modal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span><strong>Via Browser Settings:</strong> You can block or delete cookies in Chrome, Safari, Edge, or Firefox under Settings &gt; Privacy &amp; Security.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">4. Privacy inquiries &amp; Contact</h2>
              <p className="mt-3 text-sm leading-relaxed">
                For questions regarding data protection, cookies, or privacy at {companyName}:
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
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Ready to trade the markets with order flow intelligence?"
        description="Connect with our systems engineering team in Tirunelveli, Tamil Nadu."
      />
    </>
  );
}
