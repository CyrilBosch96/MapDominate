import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  title: string;
  slug: string;
  description: string;
  category: string;
  published: string;
  updated: string;
  readTime: number;
  featured: boolean;
  author: string;
  canonicalUrl: string;
  ogImage: string | null;
}

export interface Post extends PostMeta {
  content: string;
}

function parseFrontmatter(filePath: string): PostMeta {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);
  return {
    title: data.title ?? "",
    slug: data.slug ?? path.basename(filePath, ".mdx"),
    description: data.description ?? "",
    category: data.category ?? "",
    published: data.published ?? "",
    updated: data.updated ?? data.published ?? "",
    readTime: Number(data.readTime) || 5,
    featured: Boolean(data.featured),
    author: data.author ?? "MapDominate",
    canonicalUrl:
      data.canonicalUrl ??
      `https://mapdominate.com/blog/${data.slug ?? path.basename(filePath, ".mdx")}`,
    ogImage: data.ogImage || null,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"));

  const posts = files.map((f) => parseFrontmatter(path.join(POSTS_DIR, f)));

  return posts.sort((a, b) => {
    // Featured first, then newest published date
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return new Date(b.published).getTime() - new Date(a.published).getTime();
  });
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    title: data.title ?? "",
    slug: data.slug ?? slug,
    description: data.description ?? "",
    category: data.category ?? "",
    published: data.published ?? "",
    updated: data.updated ?? data.published ?? "",
    readTime: Number(data.readTime) || 5,
    featured: Boolean(data.featured),
    author: data.author ?? "MapDominate",
    canonicalUrl:
      data.canonicalUrl ?? `https://mapdominate.com/blog/${slug}`,
    ogImage: data.ogImage || null,
    content,
  };
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  count = 3
): PostMeta[] {
  const all = getAllPosts();
  const sameCat = all.filter(
    (p) =>
      p.slug !== currentSlug &&
      p.category.toLowerCase() === category.toLowerCase()
  );
  if (sameCat.length >= 2) return sameCat.slice(0, count);
  // Fall back to most recent from any category
  return all.filter((p) => p.slug !== currentSlug).slice(0, count);
}

// Extract H2/H3 headings from raw MDX content for server-side TOC generation
export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

export function extractHeadings(content: string): Heading[] {
  const lines = content.split("\n");
  const headings: Heading[] = [];
  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)$/);
    const h3 = line.match(/^###\s+(.+)$/);
    if (h3) {
      const text = h3[1].trim();
      headings.push({ id: slugifyHeading(text), text, level: 3 });
    } else if (h2) {
      const text = h2[1].trim();
      headings.push({ id: slugifyHeading(text), text, level: 2 });
    }
  }
  return headings;
}

// Must match rehype-slug's algorithm exactly
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
