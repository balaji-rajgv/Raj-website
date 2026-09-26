import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2Icon,
  CheckIcon,
  Loader2Icon,
  ShieldCheckIcon,
  SparklesIcon,
  ZapIcon,
  ArrowRightIcon,
  MailIcon
} from "lucide-react";
import { FinalCta } from "../components/FinalCta";

const inputClass =
  "mt-2 block w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors duration-150 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

export function BetaApplication() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    markets: [] as string[],
    brokers: [] as string[],
    experience: "1-3 years",
    tradingStyle: "Intraday Order Flow",
    capitalRange: "₹5L - ₹25L",
    excitedFeatures: [] as string[],
    readyForBetaFeedback: "yes",
    notes: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const marketOptions = ["Options", "Futures", "Equity", "Commodities (MCX/CME)", "Currencies"];
  const brokerOptions = ["Zerodha Kite", "Interactive Brokers", "Angel One", "Upstox", "Dhan", "Fyers", "CME / International", "Other"];
  const featureOptions = [
    "Real-time Order Flow Footprint Charts",
    "AI-Assisted Recommendations & Signals",
    "20+ Multi-Broker Unified Execution",
    "Live Financial News Wire & Sentiment",
    "Expert Guides & Quant Playbooks",
    "Tick-Level Strategy Backtesting"
  ];

  const handleCheckboxToggle = (field: "markets" | "brokers" | "excitedFeatures", value: string) => {
    setFormData((prev) => {
      const exists = prev[field].includes(value);
      return {
        ...prev,
        [field]: exists ? prev[field].filter((item) => item !== value) : [...prev[field], value]
      };
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your name";
    if (!formData.email.trim() || !formData.email.includes("@")) errs.email = "Please enter a valid email address";
    if (!formData.phone.trim()) errs.phone = "Please enter your phone number";
    if (formData.markets.length === 0) errs.markets = "Please select at least one market segment";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-canvas py-16 md:py-24" aria-labelledby="beta-heading">
        {/* Subtle decorative background glow */}
        <div className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-brand/5 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 top-40 h-96 w-96 rounded-full bg-sun/5 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-ink shadow-sm backdrop-blur">
              <span className="flex h-2 w-2 rounded-full bg-sun animate-pulse" />
              <span>Coming Soon · Early Beta</span>
            </div>
            <h1 id="beta-heading" className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-[54px] md:leading-[1.1]">
              TradingFootprint — Get Early Beta Access
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We are building the next-generation multi-asset trading platform for{" "}
              <strong className="text-ink font-semibold">Options, Futures, Equity, and Commodities</strong>. We are selecting a limited cohort
              of active traders for early beta access. Complete the questionnaire to book your slot.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            {/* Form Section */}
            <div className="rounded-3xl border border-line/60 bg-white p-6 shadow-sm md:p-10 lg:col-span-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex min-h-[460px] flex-col items-start justify-center py-6">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gain/10 text-gain">
                      <CheckCircle2Icon className="h-8 w-8" />
                    </span>
                    <h2 className="mt-6 text-3xl font-semibold text-ink">Application Submitted Successfully!</h2>
                    <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
                      Thank you, <strong className="text-ink font-semibold">{formData.fullName}</strong>. Our engineering team at Raj Global Ventures
                      is reviewing your profile. Selected testers will receive onboarding credentials and access to the beta build via{" "}
                      <span className="text-ink font-medium">{formData.email}</span>.
                    </p>
                    <div className="mt-6 rounded-xl border border-line bg-canvas p-4 text-sm text-muted">
                      <p className="font-semibold text-ink">Beta Application ID: TF-BETA-2026-{(Math.random() * 8999 + 1000).toFixed(0)}</p>
                      <p className="mt-1">Registered from Tirunelveli engineering review queue.</p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand">
                        Return to Home
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink">
                        Contact Us
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                    <div>
                      <h2 className="text-xl font-semibold text-ink">1. Trader Information</h2>
                      <p className="mt-1 text-sm text-muted">Your contact coordinates for receiving early beta build links and updates.</p>
                      <div className="mt-4 grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="fullName" className="text-sm font-medium text-ink">Full Name *</label>
                          <input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className={inputClass}
                            placeholder="e.g. Ramesh Kumar"
                          />
                          {errors.fullName && <p className="mt-1.5 text-xs text-loss">{errors.fullName}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="text-sm font-medium text-ink">Email Address *</label>
                          <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={inputClass}
                            placeholder="ramesh@example.com"
                          />
                          {errors.email && <p className="mt-1.5 text-xs text-loss">{errors.email}</p>}
                        </div>
                        <div>
                          <label htmlFor="phone" className="text-sm font-medium text-ink">Phone / WhatsApp *</label>
                          <input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className={inputClass}
                            placeholder="+91 98765 43210"
                          />
                          {errors.phone && <p className="mt-1.5 text-xs text-loss">{errors.phone}</p>}
                        </div>
                        <div>
                          <label htmlFor="location" className="text-sm font-medium text-ink">City / State</label>
                          <input
                            id="location"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className={inputClass}
                            placeholder="e.g. Tirunelveli, Tamil Nadu"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-line pt-6">
                      <h2 className="text-xl font-semibold text-ink">2. Market Segments You Trade *</h2>
                      <p className="mt-1 text-sm text-muted">Select all the market categories you actively participate in.</p>
                      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {marketOptions.map((market) => {
                          const checked = formData.markets.includes(market);
                          return (
                            <button
                              key={market}
                              type="button"
                              onClick={() => handleCheckboxToggle("markets", market)}
                              className={`flex items-center gap-2.5 rounded-lg border p-3 text-left text-sm font-medium transition-all ${checked
                                  ? "border-brand bg-brand-soft/80 text-brand shadow-sm"
                                  : "border-line bg-canvas text-ink hover:border-ink/40"
                                }`}>
                              <span
                                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${checked ? "border-brand bg-brand text-white" : "border-muted/40 bg-white"
                                  }`}>
                                {checked && <CheckIcon className="h-3 w-3 stroke-[3]" />}
                              </span>
                              <span>{market}</span>
                            </button>
                          );
                        })}
                      </div>
                      {errors.markets && <p className="mt-2 text-xs text-loss">{errors.markets}</p>}
                    </div>

                    <div className="border-t border-line pt-6">
                      <h2 className="text-xl font-semibold text-ink">3. Primary Broker(s) Used</h2>
                      <p className="mt-1 text-sm text-muted">We support 20+ broker connects. Tell us which ones you trade with daily.</p>
                      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {brokerOptions.map((broker) => {
                          const checked = formData.brokers.includes(broker);
                          return (
                            <button
                              key={broker}
                              type="button"
                              onClick={() => handleCheckboxToggle("brokers", broker)}
                              className={`flex items-center gap-2 rounded-lg border p-2.5 text-left text-xs font-medium transition-all ${checked
                                  ? "border-brand bg-brand-soft/80 text-brand shadow-sm"
                                  : "border-line bg-canvas text-ink hover:border-ink/40"
                                }`}>
                              <span
                                className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border ${checked ? "border-brand bg-brand text-white" : "border-muted/40 bg-white"
                                  }`}>
                                {checked && <CheckIcon className="h-2.5 w-2.5 stroke-[3]" />}
                              </span>
                              <span className="truncate">{broker}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="border-t border-line pt-6">
                      <h2 className="text-xl font-semibold text-ink">4. Trading Profile &amp; Preferences</h2>
                      <div className="mt-4 grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="tradingStyle" className="text-sm font-medium text-ink">Primary Strategy Style</label>
                          <select
                            id="tradingStyle"
                            value={formData.tradingStyle}
                            onChange={(e) => setFormData({ ...formData, tradingStyle: e.target.value })}
                            className={inputClass}>
                            <option value="Intraday Order Flow">Intraday Order Flow (Footprint / Delta)</option>
                            <option value="Scalping / High Velocity">Scalping / Fast Execution</option>
                            <option value="Options Directional / Non-Directional">Options Buying / Selling (Straddles, Iron Condors)</option>
                            <option value="Futures Trend & Momentum">Futures Trend &amp; Spread Trading</option>
                            <option value="Systematic / Algorithmic (Python/Pinescript)">Systematic / Automated Algo</option>
                            <option value="Discretionary Swing / Positional">Discretionary Swing</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="capitalRange" className="text-sm font-medium text-ink">Active Trading Capital</label>
                          <select
                            id="capitalRange"
                            value={formData.capitalRange}
                            onChange={(e) => setFormData({ ...formData, capitalRange: e.target.value })}
                            className={inputClass}>
                            <option value="Below ₹1 Lakh">Below ₹1 Lakh</option>
                            <option value="₹1 Lakh - ₹5 Lakhs">₹1 Lakh - ₹5 Lakhs</option>
                            <option value="₹5 Lakhs - ₹25 Lakhs">₹5 Lakhs - ₹25 Lakhs</option>
                            <option value="₹25 Lakhs - ₹1 Crore">₹25 Lakhs - ₹1 Crore</option>
                            <option value="Above ₹1 Crore / Prop Desk">Above ₹1 Crore / Desk</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-line pt-6">
                      <h2 className="text-xl font-semibold text-ink">5. Features You Wish to Test in Beta</h2>
                      <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                        {featureOptions.map((feat) => {
                          const checked = formData.excitedFeatures.includes(feat);
                          return (
                            <button
                              key={feat}
                              type="button"
                              onClick={() => handleCheckboxToggle("excitedFeatures", feat)}
                              className={`flex items-center gap-2.5 rounded-lg border p-3 text-left text-xs font-medium transition-all ${checked
                                  ? "border-brand bg-brand-soft/80 text-brand shadow-sm"
                                  : "border-line bg-canvas text-ink hover:border-ink/40"
                                }`}>
                              <span
                                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${checked ? "border-brand bg-brand text-white" : "border-muted/40 bg-white"
                                  }`}>
                                {checked && <CheckIcon className="h-3 w-3 stroke-[3]" />}
                              </span>
                              <span>{feat}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="border-t border-line pt-6">
                      <div className="rounded-xl border border-line bg-canvas/70 p-4">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked
                            onChange={(e) => setFormData({ ...formData, readyForBetaFeedback: e.target.checked ? "yes" : "no" })}
                            className="mt-1 h-4 w-4 rounded border-line text-brand focus:ring-brand"
                          />
                          <span className="text-xs leading-relaxed text-muted">
                            <strong className="text-ink font-semibold">Beta Participation Agreement:</strong> I agree to provide constructive feedback,
                            report edge cases, and share performance observations with the Raj Global Ventures engineering team during the beta period.
                          </span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
                      {submitting && <Loader2Icon className="h-5 w-5 animate-spin" />}
                      {submitting ? "Processing Application…" : "Submit Beta Application"}
                      {!submitting && <ArrowRightIcon className="h-4 w-4" />}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar / Info Section */}
            <aside className="space-y-6 lg:col-span-4">
              <div className="rounded-3xl border border-line/60 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 text-brand">
                  <SparklesIcon className="h-6 w-6" />
                  <h3 className="font-semibold text-ink">Why Join the Early Beta Cohort?</h3>
                </div>
                <ul className="mt-5 space-y-4 text-sm text-muted">
                  <li className="flex items-start gap-2.5">
                    <ZapIcon className="mt-0.5 h-4 w-4 shrink-0 text-sun" />
                    <span><strong>100% Free Testing:</strong> Zero subscription fees throughout the beta testing window.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gain" />
                    <span><strong>Direct Engineering Channel:</strong> Work with Giftson Raj (CEO &amp; Founder) to shape custom features.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ZapIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span><strong>20+ Broker Execution:</strong> Seamlessly connect Zerodha, Dhan, Angel One, Interactive Brokers, and others.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-line/60 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-ink">Product Status: Coming Soon</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  TradingFootprint is actively being engineered and audited for ultra-low latency and market microstructure reliability.
                </p>
                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex justify-between border-b border-line pb-1.5">
                    <span className="text-muted">Options &amp; Futures Flow</span>
                    <span className="font-semibold text-brand">In Active Build</span>
                  </div>
                  <div className="flex justify-between border-b border-line pb-1.5">
                    <span className="text-muted">20+ Broker Connectivity</span>
                    <span className="font-semibold text-gain">Connected</span>
                  </div>
                  <div className="flex justify-between border-b border-line pb-1.5">
                    <span className="text-muted">AI Recommendations</span>
                    <span className="font-semibold text-sun">Optimizing</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-muted">Live News Stream</span>
                    <span className="font-semibold text-brand">Testing</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-ink p-6 text-white shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-sun">Direct Inquiry</p>
                <h3 className="mt-2 text-lg font-semibold">Have custom requirements?</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  Speak directly with our engineering team in Tirunelveli for bespoke trading algorithms or broker integrations.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-center text-xs font-semibold text-ink transition-colors hover:bg-brand-soft">
                  <MailIcon className="h-3.5 w-3.5" />
                  Contact Systems Team
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FinalCta
        title="Prefer a one-on-one architecture discussion?"
        description="Our engineering team in Tirunelveli, Tamil Nadu is available to discuss custom enterprise trading and latency requirements."
      />
    </>
  );
}
