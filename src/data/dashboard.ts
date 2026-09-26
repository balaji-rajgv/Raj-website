export type FootprintBar = {
  time: string;
  cells: [number, number][];
};

export const footprintPrices = [
22480, 22475, 22470, 22465, 22460, 22455, 22450, 22445, 22440, 22435, 22430, 22425];


export const footprintBars: FootprintBar[] = [
{
  time: "10:00",
  cells: [[0, 0], [0, 0], [0, 0], [12, 48], [86, 142], [210, 264], [318, 296], [244, 188], [132, 96], [64, 22], [0, 0], [0, 0]]
},
{
  time: "10:05",
  cells: [[0, 0], [0, 0], [18, 74], [96, 212], [188, 340], [402, 388], [296, 254], [140, 118], [52, 31], [0, 0], [0, 0], [0, 0]]
},
{
  time: "10:10",
  cells: [[0, 0], [24, 92], [110, 236], [260, 410], [512, 468], [344, 302], [180, 146], [68, 40], [0, 0], [0, 0], [0, 0], [0, 0]]
},
{
  time: "10:15",
  cells: [[31, 118], [142, 286], [298, 352], [476, 441], [318, 260], [166, 98], [74, 21], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
}];


export const strategies = [
{ name: "Delta Absorption v4", market: "NIFTY FUT", status: "Live", pnl: "+$18,420", positive: true },
{ name: "Imbalance Breakout", market: "ES · CME", status: "Live", pnl: "+$6,915", positive: true },
{ name: "VWAP Reversion", market: "BTC-PERP", status: "Paused", pnl: "−$1,240", positive: false }];


export const recentFills = [
{ time: "10:15:42", side: "BUY", symbol: "NIFTY FUT", qty: "150", price: "22,471.50" },
{ time: "10:14:08", side: "SELL", symbol: "ES DEC", qty: "4", price: "5,812.25" },
{ time: "10:12:55", side: "BUY", symbol: "NIFTY FUT", qty: "75", price: "22,458.00" }];


export const equityCurve =
"0,62 16,58 32,60 48,52 64,54 80,46 96,48 112,40 128,42 144,34 160,36 176,28 192,24 208,26 224,18 240,14";

export const dashboardNav = ["Overview", "Strategies", "Footprint", "Backtests", "Orders", "Risk"];