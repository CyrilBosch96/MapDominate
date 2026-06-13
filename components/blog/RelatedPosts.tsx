import type { PostMeta } from "@/lib/posts";
import PostCard from "./PostCard";

interface RelatedPostsProps {
  posts: PostMeta[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="related-posts" aria-label="Related articles">
      <h2 className="related-posts-heading">Related Articles</h2>
      <div className="blog-grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
