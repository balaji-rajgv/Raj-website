import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user already dismissed in this session
    const isDismissed = sessionStorage.getItem("raj_announcement_dismissed");
    if (isDismissed === "true") {
      setDismissed(true);
    }
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
    sessionStorage.setItem("raj_announcement_dismissed", "true");
  };

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="relative w-full overflow-hidden bg-ink text-white">
          <div className="relative mx-auto flex max-w-7xl items-center justify-center px-9 py-2 sm:px-12 sm:py-2.5">
            <Link
              to="/beta"
              className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[11px] font-medium transition-opacity hover:opacity-90 sm:text-xs md:text-sm">
              <span className="rounded-full bg-sun/20 px-2 py-0.5 text-[10px] font-semibold text-sun sm:text-[11px]">
                Coming Soon
              </span>
              <span className="font-semibold text-white">TradingFootprint</span>
              <span className="text-white/80">— Get Early Beta Access</span>
              <ArrowRightIcon className="inline h-3.5 w-3.5 shrink-0 text-white/70" aria-hidden="true" />
            </Link>

            {/* X Close Icon Button */}
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Close announcement bar"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/40">
              <XIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}