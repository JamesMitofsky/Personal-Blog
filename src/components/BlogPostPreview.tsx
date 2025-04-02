"use client";
import { cn } from "@/lib/utils";
import { Post } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

interface Props {
  post: Post;
}

export const BlogPostPreview = ({ post }: Props) => {
  return (
    <Link href={`/blog/${post.slug}`} className="block hover:no-underline">
      <article className="mb-8 group">
        <div className="relative w-full md:h-[300px] h-[200px] mb-4">
          {post.image ? (
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">No preview available</span>
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold mb-2 group-hover:underline">{post.title}</h2>
        <div className="mb-2 text-md text-gray-500">
          <time>{new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed line-clamp-4 text-muted-foreground dark:text-gray-400 mb-4">{post.description}</p>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          {post.tags.map((tag) => (
              <>#{tag}</>
          ))}
        </div>
      </article>
    </Link>
  );
};

export const BlogPostsPreview: FunctionComponent<{
  posts: Post[];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <div className={cn("grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2", className)}>
      {posts.map((post) => (
        <BlogPostPreview key={post.slug} post={post} />
      ))}
    </div>
  );
};
