import Image from "next/image";
import type {Post} from "@/types/blog";

interface PostCardProps {
  post: Post;
}

export default function PostCard({post}: PostCardProps) {
  return (
    <div className="relative drop-shadow-primary transition-all duration-300 border border-primary p-6 rounded-sm max-w-[381px] h-[458px]">
      <div className="relative overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={333}
          height={196}
          className="h-[196px] object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 right-0 bg-primary min-w-[130px] p-1.5 justify-items-center">
          <div className="text-[14px] text-background">
            {post.category.name}
          </div>
        </div>
      </div>

      <div className="py-[26px] space-y-[26px]">
        <h3 className="text-xl font-bold font-chakra text-tertiary transition-colors line-clamp-2 leading-5">
          {post.title}
        </h3>
        <p className="text-secondary line-clamp-3">{post.content}</p>
      </div>
      <p className="absolute bottom-6 text-primary font-bold">Ler mais</p>
    </div>
  );
}
