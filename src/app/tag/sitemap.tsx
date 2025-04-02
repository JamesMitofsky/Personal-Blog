import { config } from "@/config";
import { getAllTags } from "@/lib/posts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tags = await getAllTags();

  return tags.map((tag) => ({
    url: `${config.baseUrl}/tag/${tag}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));
}
