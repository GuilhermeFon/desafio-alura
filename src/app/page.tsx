import HeroSection from "@/components/HeroSection";
import PostsGridSection from "@/components/PostsGridSection";
import SearchBar from "@/components/SearchBar";
import {api} from "@/helpers/api";
import type {Post} from "@/types/blog";
import type {ApiPostsResponse} from "@/types/common";
import Footer from "@/components/Footer";

interface HomeProps {
  searchParams: Promise<{category?: string; page?: string; search?: string}>;
}

export default async function Home({searchParams}: HomeProps) {
  const {category, page = 1, search} = await searchParams;

  const categoryFilter = category ? `/category/${category}` : "";

  const response = await api.get<ApiPostsResponse<Post>>(
    `/api/posts${categoryFilter}?limit=6&page=${page}`
  );
  const {posts, pagination} = response;

  const filteredPosts = search
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase().trim())
      )
    : posts;

  const adjustedPagination = search
    ? {
        ...pagination,
        total: filteredPosts.length,
        totalPages: Math.ceil(filteredPosts.length / 6),
      }
    : pagination;

  return (
    <>
      <HeroSection />
      <SearchBar />
      <PostsGridSection posts={filteredPosts} pagination={adjustedPagination} />
      <Footer />
    </>
  );
}
