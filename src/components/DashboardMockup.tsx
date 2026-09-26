import React from "react";
import { FootprintChart } from "./FootprintChart";
import { dashboardNav, equityCurve, recentFills, strategies } from "../data/dashboard";

export function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_80px_-30px_rgba(10,15,44,0.35)]">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-line px-4 py-3 md:px-5">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-ink">
            Trading<span className="text-brand">Footprint</span>
          </span>
          <span className="hidden rounded-md border border-line px-2 py-1 font-mono text-[11px] text-ink sm:inline">NIFTY FUT · 5m</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs font-medium text-gain">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gain opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gain" />
            </span>
            Live
          </span>
          <span className="hidden font-mono text-xs text-ink sm:inline">22,471.50</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-[11px] font-semibold text-white">RG</span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-44 shrink-0 border-r border-line bg-canvas/60 p-3 md:block">
          <ul className="space-y-1">
            {dashboardNav.map((item) =>
            <li
              key={item}
              className={`rounded-lg px-3 py-2 text-xs font-medium ${item === "Footprint" ? "bg-ink text-white" : "text-muted"}`}>
              
                {item}
              </li>
            )}
          </ul>
        </aside>

        {/* Main */}
        <div className="grid min-w-0 flex-1 gap-0 lg:grid-cols-12">
          <div className="min-w-0 border-b border-line p-4 md:p-5 lg:col-span-7 lg:border-b-0 lg:border-r">
            <div className="mb-3 flex items-baseline justify-between">
              <h3 className="text-sm font-semibold text-ink">Order-flow footprint</h3>
              <span className="text-[11px] text-muted">Bid × Ask volume</span>
            </div>
            <FootprintChart />
          </div>

          <div className="flex min-w-0 flex-col lg:col-span-5">
            <div className="border-b border-line p-4 md:p-5">
              <div className="flex items-baseline justify-between">
                <h3 className="text-sm font-semibold text-ink">Today's P&amp;L</h3>
                <span className="text-[11px] text-muted">3 strategies</span>
              </div>
              <p className="mt-1 text-2xl font-semibold tabular-nums text-gain">+$24,095</p>
              <svg viewBox="0 0 240 70" className="mt-2 h-14 w-full" preserveAspectRatio="none" aria-hidden="true">
                <polyline points={equityCurve} fill="none" stroke="#0E9F64" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>

            <ul className="divide-y divide-line border-b border-line">
              {strategies.map((s) =>
              <li key={s.name} className="flex items-center justify-between gap-3 px-4 py-3 md:px-5">
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-ink">{s.name}</p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted">
                      <span className={`h-1.5 w-1.5 rounded-full ${s.status === "Live" ? "bg-gain" : "bg-muted/50"}`} />
                      {s.status} · {s.market}
                    </p>
                  </div>
                  <span className={`shrink-0 font-mono text-xs font-medium ${s.positive ? "text-gain" : "text-loss"}`}>{s.pnl}</span>
                </li>
              )}
            </ul>

            <div className="p-4 md:p-5">
              <h3 className="text-xs font-semibold text-ink">Recent fills</h3>
              <table className="mt-2 w-full font-mono text-[11px]">
                <tbody>
                  {recentFills.map((f) =>
                  <tr key={f.time}>
                      <td className="py-1 text-muted">{f.time}</td>
                      <td className={`py-1 font-medium ${f.side === "BUY" ? "text-gain" : "text-loss"}`}>{f.side}</td>
                      <td className="hidden py-1 text-ink sm:table-cell">{f.symbol}</td>
                      <td className="py-1 text-right text-ink">{f.qty}</td>
                      <td className="py-1 text-right text-ink">{f.price}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>);

}