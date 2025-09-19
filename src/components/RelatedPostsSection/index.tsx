import type {Post} from "@/types/blog";
import Link from "next/link";
import PostCard from "../PostCard";

interface RelatedPostsSectionProps {
  posts: Post[];
}

export default function RelatedPostsSection({posts}: RelatedPostsSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1.5 pb-11 relative z-20">
      <h2 className="text-2xl font-chakra font-bold mb-10 text-tertiary">
        Postagens relacionadas
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
        role="main"
        aria-label="Lista de posts do blog"
      >
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="w-fit">
            <PostCard post={post} />
          </Link>
        ))}
      </div>
      <div className="mt-[38px] justify-items-center relative z-10">
        <p className="text-xs sm:text-base text-secondary">
          © Copyright 2025. Produzido por Fernanda Mascheti
        </p>
      </div>
    </section>
  );
}
