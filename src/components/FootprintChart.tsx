import React from "react";
import { footprintBars, footprintPrices } from "../data/dashboard";

export function FootprintChart() {
  return (
    <div className="flex font-mono text-[10px] sm:text-[11px]" role="img" aria-label="Footprint chart showing bid and ask volume at each price for four 5-minute bars">
      <div className="flex shrink-0 flex-col border-r border-line pr-2">
        <div className="h-6" />
        {footprintPrices.map((price) =>
        <div key={price} className="flex h-6 items-center justify-end tabular-nums text-muted">
            {price.toLocaleString("en-US")}
          </div>
        )}
      </div>
      <div className="grid flex-1 grid-cols-4 gap-1.5 pl-2">
        {footprintBars.map((bar) => {
          const totals = bar.cells.map(([bid, ask]) => bid + ask);
          const poc = totals.indexOf(Math.max(...totals));
          return (
            <div key={bar.time} className="min-w-0">
              <div className="flex h-6 items-center justify-center text-muted">{bar.time}</div>
              {bar.cells.map(([bid, ask], i) => {
                if (bid === 0 && ask === 0) return <div key={i} className="h-6" />;
                const tone =
                ask >= bid * 2 ?
                "bg-gain/15 text-gain" :
                bid >= ask * 2 ?
                "bg-loss/15 text-loss" :
                "bg-canvas text-ink";
                return (
                  <div key={i} className="h-6 py-[1.5px]">
                    <div
                      className={`flex h-full items-center justify-between rounded px-1.5 tabular-nums ${tone} ${
                      i === poc ? "ring-1 ring-inset ring-ink/70" : ""}`
                      }>
                      
                      <span>{bid}</span>
                      <span className="opacity-40">×</span>
                      <span>{ask}</span>
                    </div>
                  </div>);

              })}
            </div>);

        })}
      </div>
    </div>);

}