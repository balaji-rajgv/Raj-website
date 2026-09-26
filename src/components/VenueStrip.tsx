import React from "react";
import { venueLogos } from "../data/company";

export function VenueStrip() {
  return (
    <section className="w-full bg-white py-14" aria-labelledby="venues-heading">
      <div className="mx-auto max-w-7xl px-6">
        <h2 id="venues-heading" className="text-center text-sm text-muted">
          Systems we build route orders to 38 exchanges and brokers worldwide
        </h2>
        <ul className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {venueLogos.map((name) =>
          <li key={name} className="text-center text-lg font-semibold tracking-tight text-ink/40">
              {name}
            </li>
          )}
        </ul>
      </div>
    </section>);

}