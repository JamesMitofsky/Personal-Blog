import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/posts";
import { Header } from "./Header";

export const NotFound = async () => {
  // Get 3 random posts to suggest
  const { posts } = await getPosts({ limit: 3 });

  return (
    <div className="container mx-auto px-5 min-h-screen flex flex-col">
      <Header />
      <div className="flex justify-center items-center flex-col flex-1 md:gap-24">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-5">
          <h1 className="text-3xl font-semibold mb-4 text-center">Oops! This page couldn't be found.</h1>
          <Button asChild className="mb-16">
            <Link href="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" />Return home
            </Link>
          </Button>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group bg-card hover:bg-accent rounded-lg overflow-hidden transition-colors duration-200 block"
              >
                {post.image && (
                  <div className="relative w-full h-48">
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors transform group-hover:translate-x-1 duration-200 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
