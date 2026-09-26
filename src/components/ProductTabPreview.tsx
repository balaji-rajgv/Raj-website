import React from "react";
import { backtestMetrics, liveLog, monthlyReturns, strategyRules, venues } from "../data/product";
import type { ProductTabId } from "../data/product";

type ProductTabPreviewProps = {
  tab: ProductTabId;
};

const toneClass: Record<string, string> = {
  gain: "text-gain",
  loss: "text-loss",
  ink: "text-ink"
};

const logTone: Record<string, string> = {
  fill: "bg-gain/15 text-gain",
  signal: "bg-brand/15 text-brand",
  risk: "bg-loss/15 text-loss"
};

export function ProductTabPreview({ tab }: ProductTabPreviewProps) {
  if (tab === "build") {
    return (
      <div>
        <p className="text-xs font-medium text-muted">Strategy · Delta Absorption v4</p>
        <ol className="mt-4 space-y-2.5">
          {strategyRules.map((rule) =>
          <li key={rule.keyword} className="flex items-center gap-3 rounded-xl border border-line bg-white p-3.5">
              <span className="w-14 shrink-0 rounded-md bg-ink py-1 text-center font-mono text-[11px] font-medium text-white">
                {rule.keyword}
              </span>
              <span className="text-sm text-ink">{rule.text}</span>
            </li>
          )}
        </ol>
        <p className="mt-4 font-mono text-[11px] text-muted">Compiled · 4 rules · 0 warnings</p>
      </div>);

  }

  if (tab === "backtest") {
    const max = Math.max(...monthlyReturns.map(Math.abs));
    return (
      <div>
        <p className="text-xs font-medium text-muted">Jan–Dec 2025 · NIFTY FUT · full depth replay</p>
        <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {backtestMetrics.map((m) =>
          <div key={m.label} className="bg-white p-4">
              <dt className="text-[11px] text-muted">{m.label}</dt>
              <dd className={`mt-1 text-xl font-semibold tabular-nums ${toneClass[m.tone]}`}>{m.value}</dd>
            </div>
          )}
        </dl>
        <div className="mt-5 rounded-xl border border-line bg-white p-4">
          <p className="text-[11px] text-muted">Monthly returns</p>
          <div className="mt-3 flex h-28 items-center gap-1.5">
            {monthlyReturns.map((r, i) =>
            <div key={i} className="flex h-full flex-1 flex-col justify-center">
                <div className="flex h-1/2 items-end">
                  {r > 0 && <div className="w-full rounded-t-sm bg-gain" style={{ height: `${r / max * 100}%` }} />}
                </div>
                <div className="flex h-1/2 items-start border-t border-line">
                  {r < 0 && <div className="w-full rounded-b-sm bg-loss" style={{ height: `${Math.abs(r) / max * 100}%` }} />}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>);

  }

  if (tab === "deploy") {
    return (
      <div>
        <p className="text-xs font-medium text-muted">Execution Gateway · connected venues</p>
        <ul className="mt-4 divide-y divide-line overflow-hidden rounded-xl border border-line bg-white">
          {venues.map((v) =>
          <li key={v.name} className="flex items-center justify-between gap-4 p-4">
              <div>
                <p className="text-sm font-semibold text-ink">{v.name}</p>
                <p className="text-xs text-muted">{v.region}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-ink">{v.latency}</span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-gain">
                  <span className="h-1.5 w-1.5 rounded-full bg-gain" />
                  Connected
                </span>
              </div>
            </li>
          )}
        </ul>
        <div className="mt-4 flex items-center justify-between rounded-xl bg-ink p-4 text-white">
          <span className="text-sm">Delta Absorption v4</span>
          <span className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-ink">Promote to live</span>
        </div>
      </div>);

  }

  return (
    <div>
      <p className="text-xs font-medium text-muted">Live console · all strategies</p>
      <ul className="mt-4 space-y-2 rounded-xl border border-line bg-white p-4 font-mono text-[11px]">
        {liveLog.map((entry) =>
        <li key={entry.time} className="flex items-start gap-3">
            <span className="shrink-0 text-muted">{entry.time}</span>
            <span className={`w-14 shrink-0 rounded px-1.5 py-0.5 text-center uppercase ${logTone[entry.level]}`}>{entry.level}</span>
            <span className="text-ink">{entry.text}</span>
          </li>
        )}
      </ul>
      <div className="mt-4 flex items-center justify-between rounded-xl border border-loss/30 bg-loss/5 p-4">
        <span className="text-sm text-ink">Account-wide kill switch</span>
        <span className="rounded-md bg-loss px-3 py-1.5 text-xs font-semibold text-white">Flatten all</span>
      </div>
    </div>);

}