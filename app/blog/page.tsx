import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";

export const metadata: Metadata = {
  title: "Local SEO Blog for Home Service Contractors | MapDominate",
  description:
    "Google Maps ranking tips, GBP optimisation guides, and local SEO strategies for roofers and remodelers in mid-size US cities.",
  alternates: {
    canonical: "https://mapdominate.com/blog",
  },
  openGraph: {
    title: "Local SEO Blog for Home Service Contractors | MapDominate",
    description:
      "Google Maps ranking tips, GBP optimisation guides, and local SEO strategies for roofers and remodelers in mid-size US cities.",
    url: "https://mapdominate.com/blog",
    siteName: "MapDominate",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Local SEO Blog for Home Service Contractors | MapDominate",
    description:
      "Google Maps ranking tips, GBP optimisation guides, and local SEO strategies for roofers and remodelers in mid-size US cities.",
  },
};

const CATEGORIES = [
  { label: "All", value: "" },
  { label: "Roofing SEO", value: "roofing-seo" },
  { label: "GBP Optimisation", value: "gbp-optimisation" },
  { label: "Local SEO", value: "local-seo" },
  { label: "Kitchen Bath SEO", value: "kitchen-bath-seo" },
];

function categoryToSlug(cat: string) {
  return cat.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const allPosts = getAllPosts();

  const filtered = category
    ? allPosts.filter((p) => categoryToSlug(p.category) === category)
    : allPosts;

  return (
    <main className="blog-index">
      <div className="container">
        <header className="blog-header">
          <h1 className="blog-index-title">
            Local SEO Insights for Home Service Contractors
          </h1>
          <p className="blog-index-subtitle">
            Google Maps, GBP optimisation, and ranking strategies for roofers
            and remodelers in mid-size US cities.
          </p>
        </header>

        <nav className="blog-filter" aria-label="Filter posts by category">
          {CATEGORIES.map((cat) => {
            const href = cat.value ? `/blog?category=${cat.value}` : "/blog";
            const isActive = (category ?? "") === cat.value;
            return (
              <a
                key={cat.value}
                href={href}
                className={`blog-filter-tab${isActive ? " blog-filter-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {cat.label}
              </a>
            );
          })}
        </nav>

        {filtered.length === 0 ? (
          <p className="blog-empty">No posts in this category yet.</p>
        ) : (
          <section className="blog-grid" aria-label="Blog posts">
            {filtered.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
