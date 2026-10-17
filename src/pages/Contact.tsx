import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2Icon,
  ClockIcon,
  Loader2Icon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  CalendarIcon,
  BuildingIcon,
  UserIcon,
  AlertCircleIcon
} from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";
import type { InquiryType } from "../hooks/useContactForm";
import {
  contactDetails,
  inquiryTypes,
  personalInterests,
  businessInterests,
  weeklySchedule,
  publicHolidays
} from "../data/contact";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";

const inputClass =
  "mt-2 block w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-brand/30";

export function Contact() {
  const [params] = useSearchParams();
  const urlInterest = params.get("interest") ?? "";
  const initialType: InquiryType =
    personalInterests.includes(urlInterest) ? "personal" : "business";
  const initialInterest = urlInterest || (initialType === "business" ? businessInterests[0] : personalInterests[0]);

  const { values, errors, status, update, submit, reset } = useContactForm(initialInterest, initialType);
  const [showHolidays, setShowHolidays] = useState(true);

  const fieldBorder = (hasError: boolean) =>
    hasError ? "border-loss focus:border-loss" : "border-line focus:border-brand";

  const handleTypeSelect = (type: InquiryType) => {
    update("inquiryType", type);
    update("interest", type === "business" ? businessInterests[0] : personalInterests[0]);
  };

  const currentInterests = values.inquiryType === "business" ? businessInterests : personalInterests;

  return (
    <>
      <SEO
        title="Contact Us | Let's Talk About Your Requirements"
        description="Get in touch with Raj Global Ventures. Discuss custom software solutions, crushed stone aggregate supplies, or TradingFootprint early beta access."
        canonical="/contact"
        keywords="contact Raj Global Ventures, software requirements, crushed stone order, Tirunelveli business inquiry"
      />
      <section className="w-full bg-canvas py-12 md:py-20" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Contact Us", path: "/contact" }
              ]}
            />
          </div>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand">Get in Touch</p>
            <h1
              id="contact-heading"
              className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-[52px] md:leading-[1.1]"
            >
              Let's talk about your requirements
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Connect with Raj Global Ventures. A dedicated representative will review your message and reply within one business day.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="rounded-3xl bg-white p-6 shadow-sm md:p-10 lg:col-span-7">
              {/* Inquiry Type Selector as specified in PDF Page 5 */}
              <div className="mb-8">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Select Inquiry Type
                </label>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {inquiryTypes.map((type) => {
                    const isSelected = values.inquiryType === type.id;
                    const Icon = type.id === "business" ? BuildingIcon : UserIcon;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => handleTypeSelect(type.id as InquiryType)}
                        className={`flex flex-col text-left rounded-xl p-4 transition-all duration-150 border-2 ${
                          isSelected
                            ? "border-brand bg-brand-soft/20 text-ink shadow-sm"
                            : "border-line bg-white hover:border-ink/40 text-muted"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className={`h-4 w-4 ${isSelected ? "text-brand" : "text-muted"}`} />
                          <span className={`text-sm font-semibold ${isSelected ? "text-brand" : "text-ink"}`}>
                            {type.title}
                          </span>
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted">
                          {type.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="flex min-h-[420px] flex-col items-start justify-center"
                    role="status"
                  >
                    <CheckCircle2Icon className="h-10 w-10 text-gain" aria-hidden="true" />
                    <h2 className="mt-5 text-2xl font-semibold text-ink">
                      Thanks, {values.name.split(" ")[0]} — message received.
                    </h2>
                    <p className="mt-3 max-w-md text-muted">
                      We'll reply to {values.email} within one business day. For urgent matters during business hours, call{" "}
                      <a href={`tel:${contactDetails.phoneHref}`} className="font-medium text-ink underline">
                        {contactDetails.phone}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-8 rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={submit}
                    noValidate
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium text-ink">
                          Full Name
                        </label>
                        <input
                          id="name"
                          value={values.name}
                          onChange={(e) => update("name", e.target.value)}
                          className={`${inputClass} ${fieldBorder(!!errors.name)}`}
                          placeholder="Your name"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && <p id="name-error" className="mt-1.5 text-xs text-loss">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-ink">
                          {values.inquiryType === "business" ? "Business Email" : "Email Address"}
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={values.email}
                          onChange={(e) => update("email", e.target.value)}
                          className={`${inputClass} ${fieldBorder(!!errors.email)}`}
                          placeholder={values.inquiryType === "business" ? "name@company.com" : "you@example.com"}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && <p id="email-error" className="mt-1.5 text-xs text-loss">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="text-sm font-medium text-ink">
                          Phone Number <span className="font-normal text-muted">(optional)</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={values.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          className={`${inputClass} ${fieldBorder(false)}`}
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      {values.inquiryType === "business" ? (
                        <div>
                          <label htmlFor="company" className="text-sm font-medium text-ink">
                            Company / Organization
                          </label>
                          <input
                            id="company"
                            value={values.company}
                            onChange={(e) => update("company", e.target.value)}
                            className={`${inputClass} ${fieldBorder(!!errors.company)}`}
                            placeholder="Your company name"
                            aria-invalid={!!errors.company}
                            aria-describedby={errors.company ? "company-error" : undefined}
                          />
                          {errors.company && (
                            <p id="company-error" className="mt-1.5 text-xs text-loss">{errors.company}</p>
                          )}
                        </div>
                      ) : (
                        <div>
                          <label htmlFor="company" className="text-sm font-medium text-ink">
                            City / Location <span className="font-normal text-muted">(optional)</span>
                          </label>
                          <input
                            id="company"
                            value={values.company}
                            onChange={(e) => update("company", e.target.value)}
                            className={`${inputClass} ${fieldBorder(false)}`}
                            placeholder="e.g. Tirunelveli, Chennai"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="interest" className="text-sm font-medium text-ink">
                        Area of Interest
                      </label>
                      <select
                        id="interest"
                        value={values.interest}
                        onChange={(e) => update("interest", e.target.value)}
                        className={`${inputClass} ${fieldBorder(false)}`}
                      >
                        {currentInterests.map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-ink">
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={values.message}
                        onChange={(e) => update("message", e.target.value)}
                        className={`${inputClass} ${fieldBorder(!!errors.message)} resize-none`}
                        placeholder="Tell us what you are looking to build, source, or inquire about…"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 text-xs text-loss">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {status === "submitting" && <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />}
                      {status === "submitting" ? "Sending…" : "Send message"}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar Contact Info & Working Hours */}
            <aside className="space-y-6 lg:col-span-5">
              <div className="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-base font-semibold text-ink">Direct Contacts</h2>
                <ul className="mt-4 divide-y divide-line">
                  <li className="flex gap-4 py-4">
                    <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">Email</p>
                      <a
                        href={`mailto:${contactDetails.email}`}
                        className="mt-0.5 block break-all font-medium text-ink hover:text-brand"
                      >
                        {contactDetails.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4 py-4">
                    <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">Phone</p>
                      <a
                        href={`tel:${contactDetails.phoneHref}`}
                        className="mt-0.5 block font-medium text-ink hover:text-brand"
                      >
                        {contactDetails.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4 py-4">
                    <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">Address</p>
                      <address className="mt-0.5 not-italic text-sm leading-relaxed text-ink">
                        {contactDetails.address.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Working Hours & Public Holiday Schedule (PDF Pages 5-6) */}
              <div className="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-brand" aria-hidden="true" />
                    <h2 className="text-base font-semibold text-ink">Working Hours</h2>
                  </div>
                  <span className="rounded-full bg-gain/10 px-2.5 py-0.5 text-xs font-semibold text-gain">
                    IST (UTC+5:30)
                  </span>
                </div>

                {/* Regular Weekly Working Days */}
                <div className="mt-4 space-y-2 text-sm">
                  {weeklySchedule.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between border-b border-line/60 py-1.5 last:border-none"
                    >
                      <span className="font-medium text-ink">{item.day}</span>
                      <span className={item.status === "closed" ? "font-semibold text-loss" : "text-muted"}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Holiday Schedule Section */}
                <div className="mt-6 border-t border-line pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink">
                      <CalendarIcon className="h-4 w-4 text-brand" />
                      <span>Government Public Holidays</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowHolidays(!showHolidays)}
                      className="text-xs font-medium text-brand hover:underline"
                    >
                      {showHolidays ? "Hide" : "Show All"}
                    </button>
                  </div>

                  {showHolidays && (
                    <div className="mt-3 max-h-60 overflow-y-auto pr-1 space-y-2 text-xs">
                      {publicHolidays.map((holiday) => (
                        <div
                          key={holiday.name}
                          className="flex items-start justify-between rounded-lg bg-canvas p-2.5"
                        >
                          <div>
                            <p className="font-semibold text-ink">{holiday.name}</p>
                            <p className="text-muted">{holiday.date}</p>
                          </div>
                          <span className="rounded bg-loss/10 px-2 py-0.5 text-[11px] font-semibold text-loss whitespace-nowrap">
                            {holiday.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}