import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { ProductTabPreview } from "./ProductTabPreview";
import { productTabs } from "../data/product";
import type { ProductTabId } from "../data/product";

type ProductSpotlightProps = {
  variant?: "home" | "page";
};

export function ProductSpotlight({ variant = "home" }: ProductSpotlightProps) {
  const [active, setActive] = useState<ProductTabId>("build");
  const isHome = variant === "home";

  return (
    <section className="w-full bg-white py-20 md:py-28" aria-labelledby="tf-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-brand">{isHome ? "Our flagship product" : "How it works"}</p>
            <h2 id="tf-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              {isHome ?
              <>
                  Trading<span className="text-brand">Footprint</span>
                </> :

              "From idea to live strategy in one workspace"
              }
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              {isHome ?
              "An algo trading platform that reads the market the way professionals do — through order flow. Build, test, deploy and monitor strategies in one place." :
              "Four stages, one engine. What you research is exactly what runs in production."}
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <span className="rounded-full bg-sun/20 px-2.5 py-1 text-xs font-semibold text-ink">
                Coming Soon
              </span>
              <Link
                to="/beta"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand">
                Get Beta Access
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5" role="tablist" aria-label="TradingFootprint workflow" aria-orientation="vertical">
            {productTabs.map((tab) => {
              const isActive = tab.id === active;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls="tf-panel"
                  onClick={() => setActive(tab.id)}
                  className={`relative block w-full border-l-2 py-5 pl-6 pr-2 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  isActive ? "border-brand" : "border-line hover:border-ink/30"}`
                  }>
                  
                  <span className={`text-xs font-semibold ${isActive ? "text-brand" : "text-muted"}`}>{tab.label}</span>
                  <span className={`mt-1 block text-lg font-semibold ${isActive ? "text-ink" : "text-ink/60"}`}>{tab.title}</span>
                  <AnimatePresence initial={false}>
                    {isActive &&
                    <motion.span
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                      className="block overflow-hidden">
                      
                        <span className="block pt-2 text-sm leading-relaxed text-muted">{tab.description}</span>
                      </motion.span>
                    }
                  </AnimatePresence>
                </button>);

            })}
          </div>

          <div className="lg:col-span-7">
            <div
              id="tf-panel"
              role="tabpanel"
              aria-labelledby={`tab-${active}`}
              className="min-h-[440px] rounded-2xl bg-canvas p-5 md:p-8">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}>
                  
                  <ProductTabPreview tab={active} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>);

}