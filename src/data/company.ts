export const venueLogos = ["NSE", "BSE", "MCX", "CME Group", "NASDAQ", "LSE", "SGX", "Binance"];

export const services = [
{
  title: "Execution algorithms",
  description: "TWAP, VWAP, POV and custom smart order routers tuned to the microstructure of each venue you trade.",
  tags: ["Smart routing", "Slippage control"]
},
{
  title: "Market data infrastructure",
  description: "Normalized tick and depth feeds, co-located capture and deterministic replay for research and audit.",
  tags: ["Tick capture", "Replay"]
},
{
  title: "Risk & compliance engines",
  description: "Pre-trade checks, exposure limits, kill switches and exchange-grade audit trails that regulators accept.",
  tags: ["Pre-trade", "Audit"]
},
{
  title: "Research & backtesting stacks",
  description: "Tick-accurate simulators and feature stores so your quants move from idea to evidence in days, not quarters.",
  tags: ["Simulation", "Feature store"]
},
{
  title: "Broker & exchange connectivity",
  description: "FIX, native binary protocols and broker APIs — certified, monitored and maintained by our team.",
  tags: ["FIX 4.4 / 5.0", "Native APIs"]
}];


export const supportingStats = [
{ value: "38", label: "exchanges and brokers connected" },
{ value: "<1 ms", label: "median internal order latency" },
{ value: "99.99%", label: "platform uptime over 24 months" }];


export const processSteps = [
{
  title: "Discover",
  duration: "2 weeks",
  description: "We map your strategies, venues, latency budget and compliance obligations."
},
{
  title: "Architect",
  duration: "2–3 weeks",
  description: "A system design you sign off on: components, data paths, failure modes and SLAs."
},
{
  title: "Build & certify",
  duration: "6–10 weeks",
  description: "Iterative delivery with exchange certification and parallel paper trading."
},
{
  title: "Operate",
  duration: "Ongoing",
  description: "24/5 monitoring, upgrades and on-call engineers who know your system."
}];