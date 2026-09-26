import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { footerColumns, legalLinks } from "../../data/navigation";
import { companyDescription, companyName, contactDetails } from "../../data/contact";

export function Footer() {
  return (
    <footer className="w-full border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{companyDescription}</p>
          </div>

          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:col-span-8" aria-label="Footer">
            {footerColumns.map((col) =>
            <div key={col.title}>
                <h3 className="text-xs font-semibold tracking-wide text-ink">{col.title.toUpperCase()}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) =>
                <li key={link.label}>
                      <Link to={link.href} className="text-sm text-muted transition-colors duration-150 hover:text-ink">
                        {link.label}
                      </Link>
                    </li>
                )}
                </ul>
              </div>
            )}

            <div className="col-span-2 sm:col-span-1 lg:col-span-1">
              <h3 className="text-xs font-semibold tracking-wide text-ink">CONTACT</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>
                  <a href={`mailto:${contactDetails.email}`} className="break-all transition-colors duration-150 hover:text-ink">
                    {contactDetails.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${contactDetails.phoneHref}`} className="whitespace-nowrap transition-colors duration-150 hover:text-ink">
                    {contactDetails.phone}
                  </a>
                </li>
                <li>
                  <address className="not-italic leading-relaxed">
                    {contactDetails.address.map((line) =>
                    <span key={line} className="block">
                        {line}
                      </span>
                    )}
                  </address>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-muted sm:flex-row">
          <ul className="flex flex-wrap items-center gap-y-2">
            {legalLinks.map((item, i) =>
            <li key={item.label} className="flex items-center">
                {i > 0 && <span className="mx-3 text-line" aria-hidden="true">|</span>}
                {item.href.startsWith("/") ? (
                  <Link to={item.href} className="transition-colors duration-150 hover:text-ink">
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.href} className="transition-colors duration-150 hover:text-ink">
                    {item.label}
                  </a>
                )}
              </li>
            )}
          </ul>
          <p>© 2026 {companyName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>);

}