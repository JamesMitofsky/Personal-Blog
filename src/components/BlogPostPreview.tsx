"use client";
import { cn } from "@/lib/utils";
import { Post } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Post;
}

export const BlogPostPreview = ({ post }: Props) => {
  return (
    <article className="mb-8">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative w-full h-[300px] mb-4">
          {post.image ? (
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              className="object-cover rounded-lg hover:opacity-90 transition-opacity"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">No preview available</span>
            </div>
          )}
        </div>
      </Link>

      <Link href={`/blog/${post.slug}`} className="hover:underline">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      </Link>
      <div className="mb-2 text-md text-gray-500">
        <time>{new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
      </div>
      <p className="text-gray-600 text-lg leading-relaxed line-clamp-4 text-muted-foreground dark:text-gray-400 mb-4">{post.description}</p>

      <div className="text-sm text-gray-500 dark:text-gray-400">
        {post.tags.map((tag) => (
            <>#{tag}</>
        ))}
      </div>
      {/* <div>    ———— TODO: eventually want to make tags clickable and searchable
        {post.tags.map((tag) => (
          <Link
            key={tag}
            href={`/tag/${tag}`}
            className="mr-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            #{tag}
          </Link>
        ))}
      </div> */}

    </article>
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
