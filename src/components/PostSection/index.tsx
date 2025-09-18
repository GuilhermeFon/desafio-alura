import Image from "next/image";
import type {Post} from "@/types/blog";

interface PostSectionProps {
  post: Post;
}

export default function PostSection({post}: PostSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-[72px]">
      <div className="flex justify-between gap-6">
        <div className="w-1/2 flex flex-col justify-between gap-6">
          <h1 className="text-3xl md:text-5xl font-chakra font-bold text-tertiary">
            {post.title}
          </h1>

          <div className="w-fit flex flex-col gap-5">
            <span className="font-bold text-secondary">Categoria:</span>
            <div className="bg-primary px-3 py-2 rounded-sm font-bold text-white">
              {post.category.name}
            </div>
          </div>

          <div className="w-fit flex flex-col gap-5">
            <span className="font-bold text-secondary">Tags:</span>
            <div className="flex flex-wrap gap-[14px]">
              {post.tags.map((tag) => (
                <div
                  key={tag.slug}
                  className="border border-primary px-3 py-2 rounded-sm font-bold text-primary"
                >
                  {tag.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-1/2 justify-items-end">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={608}
            height={358}
            className="w-[608px] h-[358px] object-cover"
            priority
          />
        </div>
      </div>

      <div className="text-secondary mt-16">
        <p>{post.content}</p>
      </div>
    </section>
  );
}
