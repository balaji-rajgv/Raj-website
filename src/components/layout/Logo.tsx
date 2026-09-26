import React from "react";
import { Link } from "react-router-dom";
import { logoUrl } from "../../data/contact";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Raj Global Ventures home">
      <img src={logoUrl} alt="" className="h-10 w-auto object-contain" />
      <span className="leading-none text-ink">
        <span className="block text-[15px] font-semibold tracking-tight">Raj Global</span>
        <span className="mt-0.5 block text-[11px] font-medium tracking-[0.18em] text-muted">VENTURES</span>
      </span>
    </Link>);

}