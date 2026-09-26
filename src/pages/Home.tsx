import React from "react";
import { Hero } from "../components/Hero";
import { VenueStrip } from "../components/VenueStrip";
import { ProductSpotlight } from "../components/ProductSpotlight";
import { Services } from "../components/Services";
import { Stats } from "../components/Stats";
import { Process } from "../components/Process";
import { Testimonial } from "../components/Testimonial";
import { FinalCta } from "../components/FinalCta";
import { SEO } from "../components/SEO";
import { homePageSchemas } from "../data/schemas";

export function Home() {
  return (
    <>
      <SEO
        title="Raj Global Ventures | Institutional Trading Infrastructure & TradingFootprint"
        description="Raj Global Ventures builds high-performance quantitative trading systems, 20+ broker connectors, and TradingFootprint for Options, Futures, Equity, and Commodities."
        canonical="/"
        keywords="Raj Global Ventures, TradingFootprint, algo trading platform, 20+ broker connectors, order flow footprint charts, institutional trading, Tirunelveli"
        schema={homePageSchemas}
      />
      <Hero />
      <VenueStrip />
      <ProductSpotlight />
      <Services />
      <Stats />
      <Process />
      <Testimonial />
      <FinalCta />
    </>);

}