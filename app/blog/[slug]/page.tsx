import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  extractHeadings,
  formatDate,
} from "@/lib/posts";
import TableOfContents from "@/components/blog/TableOfContents";
import CTABox from "@/components/blog/CTABox";
import RelatedPosts from "@/components/blog/RelatedPosts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    return {};
  }

  return {
    title: `${post.title} | MapDominate`,
    description: post.description,
    alternates: {
      canonical:
        post.canonicalUrl ?? `https://mapdominate.com/blog/${post.slug}`,
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://mapdominate.com/blog/${post.slug}`,
      siteName: "MapDominate",
      type: "article",
      publishedTime: post.published,
      modifiedTime: post.updated || post.published,
      authors: ["MapDominate"],
      ...(post.ogImage && {
        images: [
          {
            url: `https://mapdominate.com${post.ogImage}`,
            width: 1200,
            height: 630,
          },
        ],
      }),
    },
    twitter: {
      card: post.ogImage ? "summary_large_image" : "summary",
      title: post.title,
      description: post.description,
      ...(post.ogImage && {
        images: [`https://mapdominate.com${post.ogImage}`],
      }),
    },
  };
}

function ArticleSchema({ post }: { post: ReturnType<typeof getPostBySlug> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.updated || post.published,
    author: {
      "@type": "Organization",
      name: "MapDominate",
      url: "https://mapdominate.com",
    },
    publisher: {
      "@type": "Organization",
      name: "MapDominate",
      url: "https://mapdominate.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mapdominate.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mapdominate.com/blog/${post.slug}`,
    },
    url: `https://mapdominate.com/blog/${post.slug}`,
    inLanguage: "en-US",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema({ post }: { post: ReturnType<typeof getPostBySlug> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mapdominate.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://mapdominate.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://mapdominate.com/blog/${post.slug}`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const headings = extractHeadings(post.content);
  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);
  const truncatedTitle =
    post.title.length > 40 ? post.title.slice(0, 40) + "…" : post.title;

  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema post={post} />

      <div className="blog-post-page">
        <div className="blog-post-container">
          {/* Breadcrumb */}
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li aria-current="page">{truncatedTitle}</li>
            </ol>
          </nav>

          <div className="blog-post-layout">
            {/* TOC — desktop sidebar, mobile accordion */}
            <TableOfContents headings={headings} />

            {/* Main content */}
            <div className="blog-post-main">
              <a
                href={`/blog?category=${post.category.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                className="blog-card-category"
              >
                {post.category}
              </a>

              <h1 className="blog-post-title">{post.title}</h1>

              <div className="blog-post-meta">
                <time dateTime={post.published}>{formatDate(post.published)}</time>
                <span className="blog-card-dot">·</span>
                <span>{post.readTime} min read</span>
                <span className="blog-card-dot">·</span>
                <span>{post.author}</span>
              </div>

              {post.updated && post.updated !== post.published && (
                <p className="blog-post-updated">
                  Updated {formatDate(post.updated)}
                </p>
              )}

              <article
                className="blog-post-body"
                itemScope
                itemType="https://schema.org/Article"
              >
                <MDXRemote
                  source={post.content}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [rehypeSlug],
                    },
                  }}
                />
              </article>
            </div>
          </div>
        </div>

        {/* CTA — outside <article> */}
        <div className="blog-post-cta-wrap container">
          <CTABox />
        </div>

        {/* Related posts */}
        <div className="blog-post-related container">
          <RelatedPosts posts={relatedPosts} />
        </div>
      </div>
    </>
  );
}
