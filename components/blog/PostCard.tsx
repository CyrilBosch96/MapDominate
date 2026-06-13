import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  const excerpt =
    post.description.length > 120
      ? post.description.slice(0, 120) + "…"
      : post.description;

  return (
    <article className="blog-card">
      <Link href={`/blog/${post.slug}`} className="blog-card-link" tabIndex={-1} aria-hidden="true" />
      <span className="blog-card-category">{post.category}</span>
      <h2 className="blog-card-title">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="blog-card-excerpt">{excerpt}</p>
      <div className="blog-card-meta">
        <time dateTime={post.published}>{formatDate(post.published)}</time>
        <span className="blog-card-dot">·</span>
        <span>{post.readTime} min read</span>
      </div>
      <Link href={`/blog/${post.slug}`} className="blog-card-cta">
        Read article →
      </Link>
    </article>
  );
}
