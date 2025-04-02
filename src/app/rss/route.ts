export const revalidate = 60 * 60; // 1 hour

import { NextResponse } from "next/server";
import RSS from "rss";
import urlJoin from "url-join";
import { getPosts } from "@/lib/posts";
import { config } from "@/config";

const baseUrl = config.baseUrl;

export async function GET() {
  const { posts } = await getPosts({ limit: 20 });

  const feedItems = posts.map((post) => {
    return {
      title: post.title,
      description: post.description || "",
      url: urlJoin(baseUrl, `/blog/${post.slug}`),
      date: new Date(post.publishedAt),
    };
  });

  const feed = new RSS({
    title: config.blog.name,
    description: config.blog.metadata.description,
    site_url: baseUrl,
    feed_url: urlJoin(baseUrl, "/rss"),
    pubDate: new Date(),
  });

  feedItems.forEach((item) => {
    feed.item(item);
  });

  const xml: string = feed.xml({ indent: true });

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET",
    },
  });
}
