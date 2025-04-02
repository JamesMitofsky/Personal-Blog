import { config } from "@/config";
import { getPosts } from "@/lib/posts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts } = await getPosts({ limit: Infinity });

  return posts.map((post) => ({
    url: `${config.baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
}
