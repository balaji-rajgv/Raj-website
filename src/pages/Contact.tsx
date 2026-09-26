import React from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2Icon, ClockIcon, Loader2Icon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";
import { contactDetails, contactInterests } from "../data/contact";
import { SEO } from "../components/SEO";

const inputClass =
"mt-2 block w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-brand/30";

export function Contact() {
  const [params] = useSearchParams();
  const initial = contactInterests.includes(params.get("interest") ?? "") ? params.get("interest") as string : contactInterests[0];
  const { values, errors, status, update, submit, reset } = useContactForm(initial);

  const fieldBorder = (hasError: boolean) => hasError ? "border-loss focus:border-loss" : "border-line focus:border-brand";

  return (
    <>
      <SEO
        title="Contact Us | Speak to Our Engineering & Trading Team"
        description="Get in touch with Raj Global Ventures. Discuss custom trading system development, low-latency architecture consulting, or TradingFootprint early beta access."
        canonical="/contact"
        keywords="contact Raj Global Ventures, trading engineering inquiry, trading software consultation, Tirunelveli"
      />
      <section className="w-full bg-canvas py-16 md:py-24" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">Contact</p>
          <h1 id="contact-heading" className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-[54px] md:leading-[1.08]">
            Let's talk about what you trade
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            A systems architect reads every message and replies within one business day.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="rounded-3xl bg-white p-6 md:p-10 lg:col-span-7">
            <AnimatePresence mode="wait">
              {status === "success" ?
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="flex min-h-[420px] flex-col items-start justify-center"
                role="status">
                
                  <CheckCircle2Icon className="h-10 w-10 text-gain" aria-hidden="true" />
                  <h2 className="mt-5 text-2xl font-semibold text-ink">Thanks, {values.name.split(" ")[0]} — message received.</h2>
                  <p className="mt-3 max-w-md text-muted">
                    We'll reply to {values.email} within one business day. For anything urgent, call {contactDetails.phone}.
                  </p>
                  <button
                  type="button"
                  onClick={reset}
                  className="mt-8 rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink">
                  
                    Send another message
                  </button>
                </motion.div> :

              <motion.form key="form" onSubmit={submit} noValidate exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-ink">Full name</label>
                      <input id="name" value={values.name} onChange={(e) => update("name", e.target.value)} className={`${inputClass} ${fieldBorder(!!errors.name)}`} placeholder="Priya Sharma" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
                      {errors.name && <p id="name-error" className="mt-1.5 text-xs text-loss">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-ink">Work email</label>
                      <input id="email" type="email" value={values.email} onChange={(e) => update("email", e.target.value)} className={`${inputClass} ${fieldBorder(!!errors.email)}`} placeholder="priya@firm.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
                      {errors.email && <p id="email-error" className="mt-1.5 text-xs text-loss">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="text-sm font-medium text-ink">
                        Company <span className="font-normal text-muted">(optional)</span>
                      </label>
                      <input id="company" value={values.company} onChange={(e) => update("company", e.target.value)} className={`${inputClass} ${fieldBorder(false)}`} placeholder="Northfield Capital" />
                    </div>
                    <div>
                      <label htmlFor="interest" className="text-sm font-medium text-ink">I'm interested in</label>
                      <select id="interest" value={values.interest} onChange={(e) => update("interest", e.target.value)} className={`${inputClass} ${fieldBorder(false)}`}>
                        {contactInterests.map((i) =>
                      <option key={i} value={i}>{i}</option>
                      )}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-ink">How can we help?</label>
                    <textarea id="message" rows={5} value={values.message} onChange={(e) => update("message", e.target.value)} className={`${inputClass} ${fieldBorder(!!errors.message)} resize-none`} placeholder="Markets you trade, current setup, what you'd like to improve…" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
                    {errors.message && <p id="message-error" className="mt-1.5 text-xs text-loss">{errors.message}</p>}
                  </div>
                  <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
                  
                    {status === "submitting" && <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />}
                    {status === "submitting" ? "Sending…" : "Send message"}
                  </button>
                </motion.form>
              }
            </AnimatePresence>
          </div>

          <aside className="lg:col-span-5">
            <ul className="divide-y divide-line border-y border-line">
              <li className="flex gap-4 py-6">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <a href={`mailto:${contactDetails.email}`} className="mt-1 block break-all text-muted hover:text-ink">{contactDetails.email}</a>
                </div>
              </li>
              <li className="flex gap-4 py-6">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-ink">Phone</p>
                  <a href={`tel:${contactDetails.phoneHref}`} className="mt-1 block text-muted hover:text-ink">{contactDetails.phone}</a>
                </div>
              </li>
              <li className="flex gap-4 py-6">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-ink">Address</p>
                  <address className="mt-1 not-italic leading-relaxed text-muted">
                    {contactDetails.address.map((line) =>
                    <span key={line} className="block">{line}</span>
                    )}
                  </address>
                </div>
              </li>
              <li className="flex gap-4 py-6">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-ink">Hours</p>
                  <p className="mt-1 text-muted">{contactDetails.hours}</p>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
    </>
  );

}