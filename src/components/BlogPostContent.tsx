"use client";
import { Post } from "@/lib/posts";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github-dark.css";

export const PostContent = ({ content }: { content: string }) => {
  return (
    <div className="
      prose-img:rounded-lg">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          pre: ({ children }) => <pre className="not-prose">{children}</pre>,
          code: ({ node, className, children }) => {
            const match = /language-(\w+)/.exec(className || '')
            const isInPre = node?.type === 'element' &&
              'tagName' in node &&
              node.tagName === 'code' &&
              node.position?.start.line !== node.position?.end.line

            if (isInPre) {
              return (
                <code className={className}>
                  {children}
                </code>
              )
            }

            return (
              <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded-md text-sm">
                {children}
              </code>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export const BlogPostContent = ({ post }: { post: Post }) => {
  if (!post) return null;

  return (
    <article className="max-w-3xl mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.description && <p className="text-lg text-muted-foreground mb-6">{post.description}</p>}
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
        {post.author && (
          <div className="flex items-center gap-2">
            {post.author.name}
          </div>
        )}
        <time dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString()}
        </time>
      </div>
      <PostContent content={post.contentHtml} />

      {post.tags && post.tags.length > 0 && (
        <div className="mt-10 opacity-40 text-sm">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${tag}`}
              className="text-primary mr-2"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
};
