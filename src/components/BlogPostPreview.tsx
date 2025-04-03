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
    <Link href={`/posts/${post.slug}`} className="block hover:no-underline">
      <article className="group">
        <div className="relative w-full md:h-[300px] h-[200px] mb-4 dark:bg-gray-400 bg-gray-300 rounded-lg">
          {post.image ? (
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              placeholder="blur"
              blurDataURL={post.image.blurDataURL}
              className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">No preview available</span>
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold mb-2 group-hover:underline">{post.title}</h2>
        <div className="mb-2 text-md text-gray-500 flex justify-between w-full">
          <time>{new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
          <div className="hidden sm:block text-sm text-gray-400 dark:text-gray-400">
            {post.tags.map((tag) => (
              <>#{tag}</>
            ))}
          </div>
        </div>
        <p className="text-gray-600 text-md sm:text-lg leading-tight sm:leading-relaxed line-clamp-4 text-muted-foreground dark:text-gray-400 mb-4">{post.description}</p>

      </article>
    </Link>
  );
};

export const BlogPostsPreview: FunctionComponent<{
  posts: Post[];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <div className={cn("grid grid-cols-1 gap-x-12 md:gap-y-16 gap-y-10 md:grid-cols-2", className)}>
      {posts.map((post) => (
        <BlogPostPreview key={post.slug} post={post} />
      ))}
    </div>
  );
};
