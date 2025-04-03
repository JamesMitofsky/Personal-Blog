import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from 'remark';
import html from 'remark-html';
import type { ImageProps } from "next/image";

const postsDirectory = path.join(process.cwd(), "posts");
const postImagesDirectory = path.join(process.cwd(), "public", "post-images");

export interface Post {
  title: string;
  description: string;
  content: string;
  contentHtml: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author: {
    name: string;
  };
  tags: string[];
  image?: ImageProps;
  youtube?: string;
}

export async function getPost(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  // If there's an image in the frontmatter, import it
  let imageProps: ImageProps | undefined;
  if (data.image?.src) {
    const imagePath = path.join(postImagesDirectory, data.image.src);
    if (fs.existsSync(imagePath)) {
      const imageModule = await import(`../../public/post-images/${data.image.src}`);
      imageProps = {
        ...imageModule.default,
        alt: data.image.alt,
      };
    }
  }

  return {
    title: data.title,
    description: data.description,
    content,
    contentHtml,
    slug,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    author: data.author,
    tags: data.tags || [],
    image: imageProps,
    youtube: data.youtube,
  };
}

export async function getPosts({ limit = 10, page = 1, tags = [] }: { limit?: number; page?: number; tags?: string[] } = {}): Promise<{ posts: Post[]; total: number }> {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        return getPost(slug);
      })
  );

  // Sort posts by date in descending order
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  // Filter by tags if provided
  const filteredPosts = tags.length > 0
    ? sortedPosts.filter(post => tags.some(tag => post.tags.includes(tag)))
    : sortedPosts;

  const start = (page - 1) * limit;
  const paginatedPosts = limit === Infinity 
    ? filteredPosts 
    : filteredPosts.slice(start, start + limit);

  return {
    posts: paginatedPosts,
    total: filteredPosts.length,
  };
}

export async function getRelatedPosts(currentPost: Post, limit = 3): Promise<Post[]> {
  const { posts } = await getPosts({ limit: Infinity });
  
  // Filter out the current post and graduation address post
  const otherPosts = posts.filter(post => post.slug !== currentPost.slug);
  
  // Score each post based on tag matches
  const scoredPosts = otherPosts.map(post => {
    const matchingTags = post.tags.filter(tag => currentPost.tags.includes(tag));
    return {
      post,
      score: matchingTags.length,
    };
  });
  
  // Sort by score and get top posts
  const sortedPosts = scoredPosts
    .sort((a, b) => b.score - a.score);

  // Get posts with matching tags first
  const postsWithTags = sortedPosts
    .filter(({ score }) => score > 0)
    .map(({ post }) => post);

  if (postsWithTags.length >= limit) {
    return postsWithTags.slice(0, limit);
  }

  // If we need more posts, get posts without the graduation address
  const remainingPosts = sortedPosts
    .filter(({ score }) => score === 0)
    .map(({ post }) => post)
    .filter(post => !post.slug.includes('hazen-graduation-address'));

  return [...postsWithTags, ...remainingPosts].slice(0, limit);
}

export async function getAllTags(): Promise<string[]> {
  const { posts } = await getPosts({ limit: Infinity });
  const tags = new Set<string>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}
