import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { AnimatePresence, motion } from "framer-motion";
import {
  CookieIcon,
  SlidersHorizontalIcon,
  CheckIcon,
  XIcon
} from "lucide-react";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [showCenterModal, setShowCenterModal] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    functional: true
  });

  useEffect(() => {
    // Check if consent has already been saved in cookies
    const existingConsent = Cookies.get("raj_global_cookie_consent");
    if (!existingConsent) {
      // 2-second delay after page loads before showing banner
      const timer = setTimeout(() => {
        setVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (status: "accepted" | "essential_only" | "custom", prefs: typeof preferences) => {
    Cookies.set("raj_global_cookie_consent", status, { expires: 365 });
    Cookies.set("raj_cookie_analytics", prefs.analytics ? "enabled" : "disabled", { expires: 365 });
    Cookies.set("raj_cookie_functional", prefs.functional ? "enabled" : "disabled", { expires: 365 });
    Cookies.set("raj_cookie_timestamp", new Date().toISOString(), { expires: 365 });
    setShowCenterModal(false);
    setVisible(false);
  };

  const handleAcceptAll = () => {
    const full = { necessary: true, analytics: true, functional: true };
    setPreferences(full);
    saveConsent("accepted", full);
  };

  const handleEssentialOnly = () => {
    const essential = { necessary: true, analytics: false, functional: false };
    setPreferences(essential);
    saveConsent("essential_only", essential);
  };

  const handleSaveCustom = () => {
    saveConsent("custom", preferences);
  };

  return (
    <>
      {/* Right-Bottom Box Banner */}
      <AnimatePresence>
        {visible && !showCenterModal && (
          <motion.aside
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="fixed bottom-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-sm rounded-2xl border border-white/10 bg-ink p-5 text-white shadow-2xl shadow-ink/40 sm:bottom-6 sm:right-6 sm:max-w-md sm:p-6"
            role="dialog"
            aria-modal="false"
            aria-labelledby="cookie-banner-title">
            
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/20 text-brand-soft">
                  <CookieIcon className="h-4 w-4 text-sun" />
                </span>
                <h2 id="cookie-banner-title" className="text-base font-semibold tracking-tight text-white">
                  Cookie Preferences
                </h2>
              </div>
              <button
                type="button"
                onClick={handleEssentialOnly}
                aria-label="Dismiss banner with essential only"
                className="rounded-lg p-1 text-white/50 hover:bg-white/10 hover:text-white cursor-pointer">
                <XIcon className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-white/70">
              We use cookies and browser cache storage to optimize session performance, remember your preferences, and maintain security.
              Read our{" "}
              <Link to="/cookies" className="text-white underline underline-offset-2 hover:text-sun">
                Cookies Policy
              </Link>
              .
            </p>

            <div className="mt-5 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="rounded-lg bg-brand px-4 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-brand-dark cursor-pointer">
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={handleEssentialOnly}
                  className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-center text-xs font-medium text-white/90 transition-colors hover:bg-white/10 cursor-pointer">
                  Essential Only
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowCenterModal(true)}
                className="flex w-full items-center justify-center gap-1.5 rounded-lg py-2 text-center text-xs font-medium text-white/70 transition-colors hover:text-white cursor-pointer">
                <SlidersHorizontalIcon className="h-3.5 w-3.5 text-sun" />
                Customize Options
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Center Screen Modal Popup for Customizing Options */}
      <AnimatePresence>
        {showCenterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCenterModal(false)}
              className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Centered Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-ink p-6 sm:p-8 text-white shadow-2xl shadow-ink/60"
              role="dialog"
              aria-modal="true"
              aria-labelledby="customize-modal-title">
              
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sun">
                    <SlidersHorizontalIcon className="h-3.5 w-3.5" />
                    <span>Preference Center</span>
                  </div>
                  <h2 id="customize-modal-title" className="mt-1.5 text-xl font-semibold tracking-tight text-white">
                    Customize Cookie Preferences
                  </h2>
                  <p className="mt-1 text-xs text-white/60">
                    Control how cookies and local storage are utilized during your sessions.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCenterModal(false)}
                  aria-label="Close customization modal"
                  className="rounded-xl p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white cursor-pointer">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Toggles Container */}
              <div className="mt-5 space-y-4 max-h-[340px] overflow-y-auto pr-1">
                {/* 1. Necessary */}
                <div className="flex items-start justify-between gap-4 rounded-2xl bg-white/5 p-4 border border-white/5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white">Essential Cookies</span>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/70">Always Active</span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                      Required for website navigation, user sessions, CSRF security, and core trading infrastructure operations.
                    </p>
                  </div>
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand text-white">
                    <CheckIcon className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                </div>

                {/* 2. Performance & Analytics */}
                <div className="flex items-start justify-between gap-4 rounded-2xl bg-white/5 p-4 border border-white/5">
                  <div>
                    <span className="text-sm font-semibold text-white">Performance &amp; Diagnostics</span>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                      Collects anonymous telemetry regarding network latency, load times, and error diagnostics to help optimize speed.
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.analytics}
                    onClick={() => setPreferences((p) => ({ ...p, analytics: !p.analytics }))}
                    className={`mt-1 relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
                      preferences.analytics ? "bg-brand" : "bg-white/20"
                    }`}>
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ${
                        preferences.analytics ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* 3. Functional Preferences */}
                <div className="flex items-start justify-between gap-4 rounded-2xl bg-white/5 p-4 border border-white/5">
                  <div>
                    <span className="text-sm font-semibold text-white">Functional Preferences</span>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                      Remembers your market view preferences (Options, Futures, Commodities, Equities) and console interface layout.
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.functional}
                    onClick={() => setPreferences((p) => ({ ...p, functional: !p.functional }))}
                    className={`mt-1 relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
                      preferences.functional ? "bg-brand" : "bg-white/20"
                    }`}>
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ${
                        preferences.functional ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-5">
                <button
                  type="button"
                  onClick={handleEssentialOnly}
                  className="w-full sm:w-auto rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-center text-xs font-medium text-white/80 transition-colors hover:bg-white/10 cursor-pointer">
                  Essential Only
                </button>
                <div className="flex w-full sm:w-auto items-center gap-2">
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="flex-1 sm:flex-initial rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-white/20 cursor-pointer">
                    Accept All
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveCustom}
                    className="flex-1 sm:flex-initial rounded-xl bg-brand px-5 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-brand-dark cursor-pointer shadow-lg shadow-brand/20">
                    Save Preferences
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
