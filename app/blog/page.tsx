import LeftPanel from "@/components/LeftPanel";
import NavRail from "@/components/NavRail";
import MobileHeader from "@/components/MobileHeader";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const posts = [
  {
    slug: "design-systems-2024",
    category: "Design",
    title: "How to Build a Design System That Scales",
    excerpt: "A practical guide to building token-based design systems that your whole team will love using — from color tokens to component APIs.",
    date: "Jul 28, 2024",
    readTime: "6 min read",
  },
  {
    slug: "nocode-vs-code",
    category: "Development",
    title: "No-Code vs. Code: Choosing the Right Tool",
    excerpt: "When should you reach for Webflow, Framer, or a full-code solution? The honest breakdown after 10 years in the industry.",
    date: "Jun 15, 2024",
    readTime: "5 min read",
  },
  {
    slug: "gsap-animations",
    category: "Development",
    title: "GSAP: The Only Animation Library You Need",
    excerpt: "Why GSAP beats CSS animations, Framer Motion, and every other option for production-quality web animations.",
    date: "May 3, 2024",
    readTime: "8 min read",
  },
  {
    slug: "typography-dark-mode",
    category: "Design",
    title: "Typography Rules for Dark Mode Interfaces",
    excerpt: "Dark backgrounds change everything about typography. Here's how to pick fonts, weights, and sizes that read beautifully.",
    date: "Apr 10, 2024",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <MobileHeader />
      <LeftPanel />
      <main className="flex-1 xl:ml-left-panel-width-lg min-h-screen p-8 md:px-container-padding md:py-container-padding md:pr-24">
        <div className="max-w-3xl mx-auto w-full pt-16 md:pt-0">
          <div className="mb-12">
            <p className="section-label mb-3">05 / Blog</p>
            <h1 className="font-grotesk text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface mb-4">
              Thoughts &amp; <span className="text-primary-container">Insights</span>
            </h1>
            <p className="text-on-surface-variant text-body-md max-w-lg">
              Writing about design, development, and the craft of building digital products.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-surface-container rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col md:flex-row gap-6"
              >
                {/* Number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center border border-white/5">
                  <span className="font-geist text-[11px] text-primary-container font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-geist text-[10px] uppercase tracking-wider text-primary-container bg-primary-container/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="font-geist text-[10px] text-on-surface-variant">{post.date}</span>
                    <span className="font-geist text-[10px] text-on-surface-variant">·</span>
                    <span className="font-geist text-[10px] text-on-surface-variant">{post.readTime}</span>
                  </div>
                  <h2 className="font-grotesk text-lg font-semibold text-on-surface mb-2 group-hover:text-primary-container transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-on-surface-variant text-[15px] leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="flex-shrink-0 flex items-center">
                  <span
                    className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
                    style={{ fontSize: "20px" }}
                  >
                    arrow_outward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <NavRail />
    </div>
  );
}
