import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const mostRecentPost = posts[0];

  const blogIndex: MetadataRoute.Sitemap[number] = {
    url: "https://www.mapdominate.com/blog",
    lastModified: mostRecentPost
      ? new Date(mostRecentPost.published)
      : new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  };

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://www.mapdominate.com/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.published),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://www.mapdominate.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    blogIndex,
    ...postEntries,
    ...["terms", "privacy", "refund-policy", "contact"].map((path) => ({
      url: `https://www.mapdominate.com/${path}`,
      lastModified: new Date("2026-10-29"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
