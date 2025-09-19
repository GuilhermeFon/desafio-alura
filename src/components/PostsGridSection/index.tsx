import PostCard from "@/components/PostCard";
import Pagination from "@/components/Pagination";
import type {Pagination as PaginationType} from "@/types/common";
import type {Post} from "@/types/blog";

import Link from "next/link";

interface PostsGridSectionProps {
  posts: Post[];
  pagination?: PaginationType;
}

export default function PostsGridSection({
  posts,
  pagination,
}: PostsGridSectionProps) {
  if (posts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-16">
          <h3 className="text-lg font-bold mb-2">Nenhum post encontrado</h3>
          <p>Tente ajustar seus filtros ou termos de busca.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 justify-items-center">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        role="main"
        aria-label="Lista de posts do blog"
      >
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="w-fit">
            <PostCard post={post} />
          </Link>
        ))}
      </div>

      {pagination && pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </section>
  );
}
