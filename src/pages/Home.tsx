import React from "react";
import { Hero } from "../components/Hero";
import { VenueStrip } from "../components/VenueStrip";
import { ProductSpotlight } from "../components/ProductSpotlight";
import { Services } from "../components/Services";
import { Stats } from "../components/Stats";
import { Process } from "../components/Process";
import { Testimonial } from "../components/Testimonial";
import { FinalCta } from "../components/FinalCta";

export function Home() {
  return (
    <>
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