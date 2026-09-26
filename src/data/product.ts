export type ProductTabId = "build" | "backtest" | "deploy" | "monitor";

export type ProductTab = {
  id: ProductTabId;
  label: string;
  title: string;
  description: string;
};

export const productTabs: ProductTab[] = [
{
  id: "build",
  label: "Build & AI",
  title: "AI-assisted recommendations & order-flow logic",
  description:
  "Compose rules visually or in Python with AI anomaly detectors scanning bid-ask absorption, delta divergence, and live news sentiment in real time."
},
{
  id: "backtest",
  label: "Backtest",
  title: "Tick-accurate backtests across all market segments",
  description:
  "Replay Options, Futures, Equity and Commodities depth-of-book with queue position, exchange fees, and broker latency accurately modeled."
},
{
  id: "deploy",
  label: "20+ Brokers",
  title: "One unified gateway across 20+ broker connectors",
  description:
  "Seamlessly route orders across Zerodha, Interactive Brokers, Angel One, Upstox, Dhan, Fyers, and institutional FIX gateways from one interface."
},
{
  id: "monitor",
  label: "Live Monitor",
  title: "Real-time market flows & live news stream",
  description:
  "Live institutional news wire, P&L, fills, and risk limits stream into one console. Emergency kill switches sit one keystroke away."
}];


export const strategyRules = [
{ keyword: "WHEN", text: "AI recommendation flags cumulative delta divergence > 2.1σ" },
{ keyword: "AND", text: "Options call open interest unwinding + live news sentiment positive" },
{ keyword: "THEN", text: "buy 2 lots NIFTY FUT at market, route through Zerodha / Dhan" },
{ keyword: "EXIT", text: "trail 0.5 × ATR or emergency kill switch on 2% adverse shift" }];


export const backtestMetrics = [
{ label: "Net return", value: "42.6%", tone: "gain" },
{ label: "Sharpe", value: "2.45", tone: "ink" },
{ label: "Max drawdown", value: "−5.9%", tone: "loss" },
{ label: "Win rate", value: "61.4%", tone: "ink" }];


export const monthlyReturns = [3.2, 1.8, -1.1, 4.6, 2.4, -0.6, 3.9, 5.1, 1.2, -2.0, 4.4, 3.7];

export const venues = [
{ name: "Zerodha Kite", region: "NSE · BSE · MCX (Equity, F&O)", latency: "2.8 ms" },
{ name: "Interactive Brokers", region: "Global Multi-Asset & Futures", latency: "4.5 ms" },
{ name: "Angel One & Dhan", region: "High-Speed Options & Commodities", latency: "2.4 ms" },
{ name: "Upstox & Fyers", region: "Multi-Broker Certified APIs", latency: "3.1 ms" },
{ name: "CME & Institutional", region: "Commodities, Rates & FX", latency: "0.9 ms" }];


export const liveLog = [
{ time: "10:15:42.118", level: "fill", text: "Delta Absorption v4 · BUY 150 NIFTY FUT @ 22,471.50" },
{ time: "10:15:41.903", level: "signal", text: "Stacked ask imbalance detected at 22,465–22,475" },
{ time: "10:14:08.550", level: "fill", text: "Imbalance Breakout · SELL 4 ES DEC @ 5,812.25" },
{ time: "10:13:20.004", level: "risk", text: "VWAP Reversion paused — daily loss limit 80% reached" },
{ time: "10:12:55.731", level: "fill", text: "Delta Absorption v4 · BUY 75 NIFTY FUT @ 22,458.00" }];