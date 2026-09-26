import React from "react";
import { Outlet } from "react-router-dom";
import { AnnouncementBar } from "./AnnouncementBar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CookieConsentBanner } from "./CookieConsentBanner";

export function SiteLayout() {
  return (
    <div className="min-h-screen w-full bg-white text-ink">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieConsentBanner />
    </div>);

}