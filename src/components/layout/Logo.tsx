import React from "react";
import { Link } from "react-router-dom";
import { logoUrl } from "../../data/contact";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 group ${className}`} aria-label="Raj Global Ventures home">
      <img
        src={logoUrl}
        alt="Raj Global Ventures Pvt. Ltd"
        className="h-11 w-auto max-w-[210px] object-contain transition-transform duration-150 group-hover:scale-[1.02]"
      />
    </Link>
  );
}