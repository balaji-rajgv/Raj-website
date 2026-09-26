import React, { useState, useMemo, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  BookOpenIcon,
  ClockIcon,
  CalendarIcon,
  Share2Icon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckCircle2Icon,
  SearchIcon,
  XIcon,
  SparklesIcon,
  CheckIcon
} from "lucide-react";
import { blogPosts, blogCategories } from "../data/blogs";
import { FinalCta } from "../components/FinalCta";
import { SEO } from "../components/SEO";

export function Blogs() {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Copy share feedback
  const [copied, setCopied] = useState(false);

  // If a slug is in URL, find the post for deep-link reader view
  const currentPost = useMemo(() => {
    if (!slug) return null;
    return blogPosts.find((p) => p.slug === slug) ?? null;
  }, [slug]);

  // Sync scroll on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Filtered posts for catalog view
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = blogPosts[0];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // -------------------------------------------------------------
  // VIEW: Single Post Reader (when /blogs/:slug is accessed)
  // -------------------------------------------------------------
  if (currentPost) {
    return (
      <article className="min-h-screen bg-white">
        <SEO
          title={`${currentPost.title} | Raj Global Ventures`}
          description={currentPost.subtitle || currentPost.excerpt}
          canonical={`/blogs/${currentPost.slug}`}
          type="article"
          image={currentPost.coverImage}
          publishedTime={currentPost.publishDate}
          author={currentPost.author.name}
          keywords={currentPost.tags.join(", ")}
          schema={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: currentPost.title,
            description: currentPost.excerpt,
            image: `https://rajglobalventures.com${currentPost.coverImage}`,
            author: {
              "@type": "Organization",
              name: currentPost.author.name
            },
            publisher: {
              "@type": "Organization",
              name: "Raj Global Ventures",
              logo: {
                "@type": "ImageObject",
                url: "https://rajglobalventures.com/image.png"
              }
            },
            datePublished: currentPost.publishDate,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://rajglobalventures.com/blogs/${currentPost.slug}`
            }
          }}
        />
        {/* Reader Top Navigation Bar */}
        <div className="sticky top-[72px] z-30 border-b border-line bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
            <button
              type="button"
              onClick={() => navigate("/blogs")}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-ink"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span>Back to all Blogs &amp; Resources</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs font-medium text-ink transition-colors duration-150 hover:bg-canvas"
              >
                {copied ? (
                  <>
                    <CheckIcon className="h-3.5 w-3.5 text-gain" />
                    <span>Link Copied</span>
                  </>
                ) : (
                  <>
                    <Share2Icon className="h-3.5 w-3.5 text-muted" />
                    <span>Share</span>
                  </>
                )}
              </button>
              <Link
                to="/beta"
                className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-3 py-1.5 text-xs font-medium text-white transition-colors duration-150 hover:bg-brand"
              >
                <span>Get Beta Access</span>
                <ArrowRightIcon className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Reader Header */}
        <header className="border-b border-line bg-canvas/40 py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                {currentPost.badge}
              </span>
              <span className="rounded-full bg-ink/5 px-2.5 py-0.5 text-xs font-medium text-ink">
                {currentPost.category}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl md:leading-tight">
              {currentPost.title}
            </h1>
            <p className="mt-4 text-lg text-muted md:text-xl">
              {currentPost.subtitle}
            </p>

            {/* Author & Meta Row */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-semibold text-white">
                  {currentPost.author.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{currentPost.author.name}</p>
                  <p className="text-xs text-muted">{currentPost.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-5 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarIcon className="h-4 w-4" />
                  {currentPost.publishDate}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ClockIcon className="h-4 w-4" />
                  {currentPost.readTime}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Reader Body */}
        <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
          {/* Cover Image in Reader */}
          <div className="mb-12 overflow-hidden rounded-2xl border border-line bg-ink shadow-md">
            <img
              src={currentPost.coverImage}
              alt={currentPost.imageAlt}
              className="h-72 w-full object-cover md:h-[420px]"
            />
          </div>

          {/* In-depth Article Sections */}
          <div className="space-y-12">
            {currentPost.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-base leading-relaxed text-muted md:text-lg">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {section.callout && (
                  <div className="rounded-xl border-l-4 border-brand bg-brand-soft/30 p-5 text-base font-medium text-ink">
                    <p>{section.callout}</p>
                  </div>
                )}

                {section.bulletPoints && (
                  <ul className="space-y-2.5 pt-2">
                    {section.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-ink md:text-base">
                        <CheckCircle2Icon className="mt-1 h-4 w-4 shrink-0 text-brand" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.codeSnippet && (
                  <div className="mt-4 overflow-hidden rounded-xl border border-line bg-ink shadow-md">
                    {section.codeSnippet.caption && (
                      <div className="border-b border-white/10 bg-white/5 px-4 py-2.5 text-xs font-mono text-white/70">
                        {section.codeSnippet.caption}
                      </div>
                    )}
                    <pre className="overflow-x-auto p-4 text-xs font-mono leading-relaxed text-white md:text-sm">
                      <code>{section.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Key Takeaways Card */}
          <div className="mt-14 rounded-2xl border border-gain/20 bg-gain/[0.04] p-8">
            <h3 className="text-xl font-semibold text-ink">Key Engineering Takeaways</h3>
            <ul className="mt-4 space-y-3">
              {currentPost.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-ink md:text-base">
                  <CheckCircle2Icon className="mt-1 h-5 w-5 shrink-0 text-gain" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Beta CTA Box */}
          <div className="mt-12 rounded-2xl border border-line bg-canvas p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                <SparklesIcon className="h-3.5 w-3.5" />
                Coming Soon to Active Traders
              </span>
              <h3 className="mt-2 text-xl font-semibold text-ink">
                Test TradingFootprint in our Early Beta
              </h3>
              <p className="mt-1 max-w-lg text-sm text-muted">
                Experience order-flow delta footprints, live 20+ broker connections, and AI recommendations firsthand.
              </p>
            </div>
            <div className="mt-6 shrink-0 sm:mt-0 sm:ml-6">
              <Link
                to="/beta"
                className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-colors duration-150 hover:bg-brand"
              >
                <span>Apply for Beta</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Other Resources Recommendations */}
          <div className="mt-16 border-t border-line pt-12">
            <h3 className="text-xl font-semibold text-ink">Explore More Articles</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {blogPosts
                .filter((p) => p.id !== currentPost.id)
                .map((otherPost) => (
                  <div
                    key={otherPost.id}
                    onClick={() => navigate(`/blogs/${otherPost.slug}`)}
                    className="group cursor-pointer rounded-xl border border-line bg-white p-5 transition-all duration-200 hover:border-brand hover:shadow-md"
                  >
                    <div className="relative h-44 overflow-hidden rounded-lg">
                      <img
                        src={otherPost.coverImage}
                        alt={otherPost.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-3 block text-xs font-semibold text-brand">
                      {otherPost.category}
                    </span>
                    <h4 className="mt-1 text-base font-semibold text-ink group-hover:text-brand line-clamp-2">
                      {otherPost.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-muted line-clamp-2">
                      {otherPost.excerpt}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-muted">
                      <span>{otherPost.author.name}</span>
                      <span className="flex items-center gap-1 font-semibold text-ink group-hover:text-brand">
                        Read Article <ArrowRightIcon className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // -------------------------------------------------------------
  // VIEW: Main Resources & Blogs Hub (when at /blogs)
  // -------------------------------------------------------------
  return (
    <>
      <SEO
        title="Trading Systems, Research & Market Insights | Raj Global Ventures"
        description="In-depth engineering articles and market flow breakdowns covering Options, Futures, Equity, and Commodities infrastructure."
        canonical="/blogs"
        keywords="trading blogs, order flow articles, footprint charts, broker API architecture, machine learning market regimes"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-line bg-canvas/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
              <BookOpenIcon className="h-3.5 w-3.5" />
              RESOURCES &amp; RESEARCH DESK
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl">
              Trading Systems, Order Flow &amp; Market Insights
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted md:text-xl">
              In-depth engineering articles and market flow breakdowns covering Options, Futures, Equity, and Commodities infrastructure.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-lg px-4 py-2 text-xs font-medium transition-colors duration-150 ${
                    selectedCategory === category
                      ? "bg-ink text-white"
                      : "border border-line bg-white text-muted hover:border-ink hover:text-ink"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <SearchIcon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Search articles &amp; topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-line bg-white py-2 pl-10 pr-4 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
                >
                  <XIcon className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Hero Card */}
      {selectedCategory === "All" && !searchQuery && (
        <section className="border-b border-line bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider text-muted uppercase">
                Featured Article
              </span>
              <span className="text-xs font-medium text-brand">
                Latest Release &bull; {featuredPost.publishDate}
              </span>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-ink text-white shadow-xl lg:grid lg:grid-cols-12">
              {/* Media Preview Column */}
              <div className="relative min-h-[300px] lg:col-span-7">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.imageAlt}
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink" />
              </div>

              {/* Text Info Column */}
              <div className="flex flex-col justify-between p-8 lg:col-span-5 lg:p-10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-semibold text-brand">
                      {featuredPost.badge}
                    </span>
                    <span className="text-xs text-white/60">
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white lg:text-3xl">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-white/10 pt-4">
                    <p className="text-xs font-medium text-white/60">Key highlights:</p>
                    <ul className="space-y-1 text-xs text-white/90">
                      <li className="flex items-center gap-2">
                        <CheckCircle2Icon className="h-3.5 w-3.5 text-gain" />
                        <span>Sub-millisecond diagonal tick delta evaluation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2Icon className="h-3.5 w-3.5 text-gain" />
                        <span>Detecting institutional absorption before candle close</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2Icon className="h-3.5 w-3.5 text-gain" />
                        <span>Stacked buy/sell imbalances on BankNifty &amp; Nifty options</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-semibold text-white">
                      {featuredPost.author.initials}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">{featuredPost.author.name}</p>
                      <p className="text-[10px] text-white/60">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link
                    to={`/blogs/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-ink transition-colors duration-150 hover:bg-brand hover:text-white"
                  >
                    <span>Read Article</span>
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All 3 Blogs Grid */}
      <section className="bg-canvas/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              All 3 Articles &amp; Research Papers
            </h2>
            <span className="text-sm text-muted">
              Showing {filteredPosts.length} of {blogPosts.length} posts
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="my-16 rounded-2xl border border-line bg-white p-12 text-center">
              <SearchIcon className="mx-auto h-8 w-8 text-muted" />
              <h3 className="mt-3 text-lg font-semibold text-ink">No articles match your criteria</h3>
              <p className="mt-1 text-sm text-muted">
                Try clearing search terms or selecting another category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 rounded-lg bg-ink px-4 py-2 text-xs font-medium text-white hover:bg-brand"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
                >
                  <div>
                    {/* Media Thumbnail with Category Badge */}
                    <div className="relative h-56 w-full overflow-hidden bg-ink">
                      <img
                        src={post.coverImage}
                        alt={post.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-semibold text-ink shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <span className="font-semibold text-brand">{post.badge}</span>
                        <span>&bull;</span>
                        <span>{post.readTime}</span>
                        <span>&bull;</span>
                        <span>{post.publishDate}</span>
                      </div>

                      <h3 className="mt-3 text-lg font-semibold leading-snug text-ink transition-colors duration-150 group-hover:text-brand">
                        <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-canvas px-2 py-0.5 text-[11px] font-medium text-muted"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="border-t border-line/60 bg-canvas/30 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
                          {post.author.initials}
                        </div>
                        <span className="text-xs font-medium text-ink">{post.author.name}</span>
                      </div>

                      <Link
                        to={`/blogs/${post.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-3.5 py-1.5 text-xs font-semibold text-white transition-colors duration-150 hover:bg-brand"
                      >
                        <span>Read</span>
                        <ArrowRightIcon className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCta />
    </>
  );
}
