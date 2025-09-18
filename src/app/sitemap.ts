import type {MetadataRoute} from "next";
import {api} from "@/helpers/api";
import {Post} from "@/types/blog";
import {ApiPostsResponse} from "@/types/common";

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL as string;

  try {
    const postsResponse = await api.get<ApiPostsResponse<Post>>("/api/posts");
    const {posts} = postsResponse;

    const sitemapEntries: MetadataRoute.Sitemap = [
      {
        url: `${appUrl}/`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      ...posts.map((post) => ({
        url: `${appUrl}/blog/${post.id}`,
        lastModified: new Date(post.createdAt),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })),
    ];

    return sitemapEntries;
  } catch (error) {
    console.error("Error generating sitemap:", error);

    return [
      {
        url: `${appUrl}/`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
    ];
  }
}
