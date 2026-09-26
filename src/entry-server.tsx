/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "./App";
import { routesSEO, staticPreRenderRoutes, SITE_URL } from "./seo/config";
import { getFullRouteSchemas } from "./seo/schemaGenerator";

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );

  const seo = routesSEO[url] || routesSEO["/"];
  const schemas = getFullRouteSchemas(seo);

  return {
    html,
    seo,
    schemas,
    siteUrl: SITE_URL
  };
}

export { routesSEO, staticPreRenderRoutes, SITE_URL };
