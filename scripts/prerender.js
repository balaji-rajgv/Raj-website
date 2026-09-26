import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const ssrDir = path.resolve(rootDir, "dist-ssr");
const templatePath = path.resolve(distDir, "index.html");

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function prerender() {
  console.log("\n========================================================");
  console.log("  Starting Production SSG Pre-Rendering (Cloudflare)");
  console.log("========================================================\n");

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client build template not found at: ${templatePath}. Run 'vite build' first.`);
  }

  const ssrEntryPath = path.resolve(ssrDir, "entry-server.js");
  if (!fs.existsSync(ssrEntryPath)) {
    throw new Error(`SSR entry bundle not found at: ${ssrEntryPath}. Run 'vite build --ssr src/entry-server.tsx --outDir dist-ssr' first.`);
  }

  const rawTemplate = fs.readFileSync(templatePath, "utf-8");
  const ssrModule = await import(pathToFileURL(ssrEntryPath).href);

  const { render, staticPreRenderRoutes, SITE_URL } = ssrModule;

  console.log(`Using Base Site URL: ${SITE_URL}`);
  console.log(`Total Public Routes to Pre-render: ${staticPreRenderRoutes.length}\n`);

  const generatedFiles = [];

  for (const route of staticPreRenderRoutes) {
    const { html, seo, schemas } = render(route);

    let pageHtml = rawTemplate;

    // 1. Replace Title
    const formattedTitle = seo.title.includes("Raj Global Ventures")
      ? seo.title
      : `${seo.title} | Raj Global Ventures`;
    pageHtml = pageHtml.replace(
      /<title>[\s\S]*?<\/title>/i,
      `<title>${escapeHtml(formattedTitle)}</title>`
    );

    // 2. Replace Meta Description
    pageHtml = pageHtml.replace(
      /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(seo.description)}" />`
    );

    // 3. Replace Meta Keywords
    pageHtml = pageHtml.replace(
      /<meta\s+name="keywords"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="keywords" content="${escapeHtml(seo.keywords || "")}" />`
    );

    // 4. Replace Robots
    const robotsValue = seo.noindex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
    pageHtml = pageHtml.replace(
      /<meta\s+name="robots"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="robots" content="${robotsValue}" />`
    );

    // 5. Canonical Link
    const fullCanonical = `${SITE_URL}${route === "/" ? "/" : route}`;
    pageHtml = pageHtml.replace(
      /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i,
      `<link rel="canonical" href="${fullCanonical}" />`
    );

    // 6. Open Graph Tags
    const fullImageUrl = seo.image.startsWith("http") ? seo.image : `${SITE_URL}${seo.image}`;

    pageHtml = pageHtml.replace(
      /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(formattedTitle)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(seo.description)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:url" content="${fullCanonical}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:type"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:type" content="${seo.type || "website"}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:image"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:image" content="${fullImageUrl}" />`
    );

    // 7. Twitter Card Tags
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(formattedTitle)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:url"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="twitter:url" content="${fullCanonical}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:image"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="twitter:image" content="${fullImageUrl}" />`
    );

    // 8. Inject Structured Schema (JSON-LD)
    if (schemas) {
      const schemaScript = `\n    <!-- Structured Data (JSON-LD) -->\n    <script type="application/ld+json" id="page-schema-jsonld">\n${JSON.stringify(schemas, null, 2)}\n    </script>\n  `;
      pageHtml = pageHtml.replace("</head>", `${schemaScript}</head>`);
    }

    // 9. Inject Rendered Markup into #root
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    // 10. Determine Destination File Path
    let destFilePath;
    if (route === "/") {
      destFilePath = path.join(distDir, "index.html");
    } else if (route === "/404") {
      destFilePath = path.join(distDir, "404.html");
    } else {
      const cleanRoute = route.replace(/^\//, "");
      const routeDir = path.join(distDir, cleanRoute);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      destFilePath = path.join(routeDir, "index.html");
    }

    fs.writeFileSync(destFilePath, pageHtml, "utf-8");
    generatedFiles.push({ route, file: path.relative(distDir, destFilePath) });
    console.log(`✓ Pre-rendered: ${route.padEnd(42)} -> ${path.relative(distDir, destFilePath)}`);
  }

  // 11. Generate / Synchronize sitemap.xml with accurate SITE_URL and all public routes
  generateSitemapXml(distDir, staticPreRenderRoutes, SITE_URL);

  // 12. Generate / Synchronize robots.txt with accurate Sitemap URL
  generateRobotsTxt(distDir, SITE_URL);

  // 13. Clean up temporary dist-ssr directory
  try {
    fs.rmSync(ssrDir, { recursive: true, force: true });
    console.log(`\n✓ Cleaned up temporary SSR bundle (${path.relative(rootDir, ssrDir)})`);
  } catch (err) {
    console.warn(`Note: Could not delete ${ssrDir}:`, err.message);
  }

  console.log("\n========================================================");
  console.log(`  SSG Pre-rendering Completed: ${generatedFiles.length} routes generated.`);
  console.log("  Target: Cloudflare Pages (dist/)");
  console.log("========================================================\n");
}

function generateSitemapXml(distDir, routes, siteUrl) {
  const publicRoutes = routes.filter((r) => r !== "/404");
  const today = new Date().toISOString().split("T")[0];

  const urlEntries = publicRoutes
    .map((route) => {
      let priority = "0.8";
      let changefreq = "monthly";

      if (route === "/") {
        priority = "1.0";
        changefreq = "daily";
      } else if (["/products/tradingfootprint", "/beta", "/blogs"].includes(route)) {
        priority = "0.9";
        changefreq = "weekly";
      } else if (["/privacy", "/terms", "/cookies"].includes(route)) {
        priority = "0.5";
        changefreq = "yearly";
      } else if (route === "/sitemap") {
        priority = "0.6";
        changefreq = "monthly";
      }

      const loc = `${siteUrl}${route === "/" ? "/" : route}`;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n\n");

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urlEntries}

</urlset>
`;

  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapContent, "utf-8");
  console.log(`✓ Synchronized: dist/sitemap.xml (${publicRoutes.length} canonical URLs)`);
}

function generateRobotsTxt(distDir, siteUrl) {
  const robotsContent = `User-agent: *
Allow: /

# Host
Host: ${siteUrl}

# Sitemaps
Sitemap: ${siteUrl}/sitemap.xml
`;

  fs.writeFileSync(path.join(distDir, "robots.txt"), robotsContent, "utf-8");
  console.log(`✓ Synchronized: dist/robots.txt (Pointing to ${siteUrl}/sitemap.xml)`);
}

prerender().catch((err) => {
  console.error("\n❌ Pre-rendering failed:", err);
  process.exit(1);
});
