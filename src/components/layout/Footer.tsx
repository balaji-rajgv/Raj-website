import React from "react";
import { Link } from "react-router-dom";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  Linkedin,
  Instagram,
  Youtube
} from "lucide-react";
import { Logo } from "./Logo";
import { legalLinks } from "../../data/navigation";
import { companyDescription, companyName, contactDetails, socialLinks } from "../../data/contact";

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "LinkedIn":
      return <Linkedin className="h-4 w-4" aria-hidden="true" />;
    case "Instagram":
      return <Instagram className="h-4 w-4" aria-hidden="true" />;
    case "X":
      return (
        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "YouTube":
      return <Youtube className="h-4 w-4" aria-hidden="true" />;
    default:
      return null;
  }
}

export function Footer() {
  return (
    <footer className="w-full border-t border-line bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Main Footer Container */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Header Section: Brand Description & Social Links */}
        <div className="flex flex-col justify-between gap-8 pb-12 border-b border-line lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {companyDescription}
            </p>
          </div>

          <div className="shrink-0">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink">
              Connect With Us
            </h3>
            <div className="mt-3.5 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-canvas/40 text-muted transition-all duration-150 hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Single-Line Row: Company, Products, Services, Resources, and Contact */}
        <nav
          className="grid grid-cols-2 gap-8 pt-12 sm:grid-cols-3 lg:grid-cols-12 lg:gap-8"
          aria-label="Footer Navigation"
        >
          {/* 1. Company */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink whitespace-nowrap">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted transition-colors duration-150 hover:text-ink whitespace-nowrap"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-muted transition-colors duration-150 hover:text-ink whitespace-nowrap"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-sm text-muted transition-colors duration-150 hover:text-ink whitespace-nowrap"
                >
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Products */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink whitespace-nowrap">
              Products
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/products/tradingfootprint"
                  className="text-sm text-muted transition-colors duration-150 hover:text-ink whitespace-nowrap"
                >
                  Tradingfootprint
                </Link>
              </li>
              <li>
                <Link
                  to="/products/crushed-stone"
                  className="text-sm text-muted transition-colors duration-150 hover:text-ink whitespace-nowrap"
                >
                  Crushed stone
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink whitespace-nowrap">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/services/custom-software"
                  className="text-sm text-muted transition-colors duration-150 hover:text-ink whitespace-nowrap"
                >
                  Customize software
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink whitespace-nowrap">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/blogs"
                  className="text-sm text-muted transition-colors duration-150 hover:text-ink whitespace-nowrap"
                >
                  Blogs &amp; Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/beta"
                  className="text-sm text-muted transition-colors duration-150 hover:text-ink whitespace-nowrap"
                >
                  Early Beta Access
                </Link>
              </li>
            </ul>
          </div>

          {/* 5. Contact - Wide 4-column span so email, phone, and address NEVER bend */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink whitespace-nowrap">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="group inline-flex items-center gap-2.5 font-medium text-ink transition-colors duration-150 hover:text-brand whitespace-nowrap"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <MailIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="whitespace-nowrap">{contactDetails.email}</span>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${contactDetails.phoneHref}`}
                  className="group inline-flex items-center gap-2.5 text-muted transition-colors duration-150 hover:text-ink whitespace-nowrap"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-canvas text-muted transition-colors group-hover:bg-brand-soft group-hover:text-brand">
                    <PhoneIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="whitespace-nowrap">{contactDetails.phone}</span>
                </a>
              </li>

              <li className="pt-0.5">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-canvas text-muted mt-0.5">
                    <MapPinIcon className="h-3.5 w-3.5 text-brand" />
                  </span>
                  <address className="not-italic text-sm leading-relaxed text-muted">
                    <span className="block font-medium text-ink whitespace-nowrap">Raj Global Ventures</span>
                    <span className="block whitespace-nowrap">Tirunelveli, Tamil Nadu, India — 627359</span>
                  </address>
                </div>
              </li>

              <li className="pt-0.5">
                <div className="flex items-center gap-2.5 text-xs text-muted">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-canvas text-muted">
                    <ClockIcon className="h-3.5 w-3.5 text-brand" />
                  </span>
                  <span className="whitespace-nowrap">{contactDetails.hours}</span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-line bg-canvas/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-muted sm:flex-row">
          <ul className="flex flex-wrap items-center gap-y-2">
            {legalLinks.map((item, i) => (
              <li key={item.label} className="flex items-center">
                {i > 0 && <span className="mx-3 text-line" aria-hidden="true">|</span>}
                {item.href.startsWith("/") ? (
                  <Link to={item.href} className="transition-colors duration-150 hover:text-ink whitespace-nowrap">
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.href} className="transition-colors duration-150 hover:text-ink whitespace-nowrap">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <p className="whitespace-nowrap">© 2026 {companyName}. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}