import {ApiPostResponse, ApiPostsResponse} from "@/types/common";
import {Post} from "@/types/blog";
import {api} from "@/helpers/api";
import {Metadata} from "next";
import PostSection from "@/components/PostSection";
import RelatedPostsSection from "@/components/RelatedPostsSection";

interface BlogPostPageProps {
  params: Promise<{id: string}>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const {id} = await params;
  const response = await api.get<ApiPostResponse<Post>>(`/api/posts/id/${id}`);
  const {post} = response;

  return {
    title: `Fernanda Mascheti - ${post.title}`,
    description: post.content,
    openGraph: {
      title: post.title,
      description: post.content,
    },
    alternates: {
      canonical: `/blog/${id}`,
    },
  };
}

export default async function BlogPage({params}: BlogPostPageProps) {
  const {id} = await params;

  const response = await api.get<ApiPostResponse<Post>>(`/api/posts/id/${id}`);
  const {post} = response;

  const relatedPostsResponse = await api.get<ApiPostsResponse<Post>>(
    `/api/posts/category/${post.category.slug}`
  );
  const {posts} = relatedPostsResponse;

  const filteredPosts = posts
    .filter((relatedPost) => relatedPost.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <PostSection post={post} />
      <RelatedPostsSection posts={filteredPosts} />
    </>
  );
}
