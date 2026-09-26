import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/layout/SiteLayout";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { TradingFootprint } from "./pages/TradingFootprint";
import { FinancialSolutions } from "./pages/FinancialSolutions";
import { Development } from "./pages/Development";
import { Consulting } from "./pages/Consulting";
import { Contact } from "./pages/Contact";
import { BetaApplication } from "./pages/BetaApplication";
import { CookiesPolicy } from "./pages/CookiesPolicy";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { Sitemap } from "./pages/Sitemap";
import { Blogs } from "./pages/Blogs";
import { NotFound } from "./pages/NotFound";

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/tradingfootprint" element={<TradingFootprint />} />
          <Route path="/beta" element={<BetaApplication />} />
          <Route path="/solutions/financial" element={<FinancialSolutions />} />
          <Route path="/services/development" element={<Development />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/resources" element={<Blogs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}