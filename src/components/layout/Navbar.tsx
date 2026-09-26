import React, { useEffect, useState } from "react";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { Logo } from "./Logo";
import { navItems } from "../../data/navigation";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        {/* Left: Logo */}
        <div className="flex items-center lg:flex-1">
          <Logo />
        </div>

        {/* Center: Navigation Menu */}
        <nav className="hidden lg:flex lg:justify-center" aria-label="Main" onMouseLeave={() => setOpenMenu(null)}>
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = item.links ?
              item.links.some((l) => l.href === pathname) :
              item.href === pathname;
              const baseClass = `flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
              isActive ? "text-brand" : "text-ink"}`;

              return (
                <li key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.links ? item.label : null)}>
                  {item.links ?
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    className={baseClass}>
                    
                      {item.label}
                      <ChevronDownIcon
                      className={`h-4 w-4 transition-transform duration-200 ease-out ${openMenu === item.label ? "rotate-180" : ""}`}
                      aria-hidden="true" />
                    
                    </button> :

                  <Link to={item.href ?? "/"} className={baseClass}>
                      {item.label}
                    </Link>
                  }
                  <AnimatePresence>
                    {openMenu === item.label && item.links &&
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[360px] origin-top pt-3">
                      
                        <ul className="rounded-2xl border border-line bg-white p-2 shadow-[0_16px_40px_-12px_rgba(10,15,44,0.18)]">
                          {item.links.map((link) => {
                          const Icon = link.icon;
                          return (
                            <li key={link.title}>
                                <RouterNavLink
                                to={link.href}
                                className={({ isActive: linkActive }) =>
                                `flex items-start gap-3 rounded-xl p-3 transition-colors duration-150 hover:bg-canvas ${linkActive ? "bg-canvas" : ""}`
                                }>
                                
                                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                                  </span>
                                  <span>
                                    <span className="flex items-center gap-2 text-sm font-semibold text-ink">
                                      {link.title}
                                      {link.badge &&
                                    <span className="rounded-full bg-gain/10 px-2 py-0.5 text-[10px] font-semibold text-gain">
                                          {link.badge}
                                        </span>
                                    }
                                    </span>
                                    <span className="mt-0.5 block text-xs text-muted">{link.description}</span>
                                  </span>
                                </RouterNavLink>
                              </li>);

                        })}
                        </ul>
                      </motion.div>
                    }
                  </AnimatePresence>
                </li>);

            })}
          </ul>
        </nav>

        {/* Right: Actions */}
        <div className="hidden items-center justify-end gap-3 lg:flex lg:flex-1">
          <Link
            to="/beta"
            className="inline-flex items-center whitespace-nowrap rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink hover:text-brand">
            Get Beta Access
          </Link>
          <Link
            to="/contact"
            className="inline-flex whitespace-nowrap rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-brand">
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}>
          
          {mobileOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen &&
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden border-t border-line bg-white lg:hidden"
          aria-label="Mobile">
          
            <div className="space-y-6 px-6 py-6">
              {navItems.map((item) =>
            <div key={item.label}>
                  {item.links ?
              <>
                      <p className="text-xs font-semibold text-muted">{item.label}</p>
                      <ul className="mt-2 space-y-2">
                        {item.links.map((link) =>
                  <li key={link.title}>
                            <Link to={link.href} className="text-base font-medium text-ink">
                              {link.title}
                            </Link>
                          </li>
                  )}
                      </ul>
                    </> :

              <Link to={item.href ?? "/"} className="text-base font-medium text-ink">
                      {item.label}
                    </Link>
              }
                </div>
            )}
              <div className="space-y-2 pt-2">
                <Link
                  to="/beta"
                  className="block rounded-lg border border-line bg-white px-5 py-3 text-center text-sm font-medium text-ink">
                  Get Beta Access
                </Link>
                <Link
                  to="/contact"
                  className="block rounded-lg bg-ink px-5 py-3 text-center text-sm font-medium text-white">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.nav>
        }
      </AnimatePresence>
    </header>);

}