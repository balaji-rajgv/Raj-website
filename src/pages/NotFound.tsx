import React from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-canvas px-6 py-32 text-center">
      <p className="font-mono text-sm text-brand">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">This page isn't on the order book</h1>
      <p className="mt-4 max-w-md text-muted">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="mt-8 rounded-lg bg-ink px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-brand">
        Back to home
      </Link>
    </section>);

}