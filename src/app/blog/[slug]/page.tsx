import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getPost, getRelatedPosts } from "@/lib/posts";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [{
        url: post.image.src,
        width: 1200,
        height: 630,
        alt: post.image.alt,
      }] : [],
    },
  };
}

export default async function Page({ params }: Props) {
  const post = await getPost(params.slug);
  const relatedPosts = await getRelatedPosts(post);

  return (
    <div className="container mx-auto px-5 min-h-screen">
      <Header />
      
      <div className="mb-10">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto break-words">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            {post.title}
          </h1>

          {post.youtube ? (
            <div className="w-full aspect-video mb-8">
              <iframe
                src={`https://www.youtube.com/embed/${post.youtube}`}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg w-full h-full"
              />
            </div>
          ) : post.image ? (
            <Image
              src={post.image.src}
              alt={post.image.alt}
              className="w-full object-cover mt-0 rounded-lg"
              width={1920}
              height={1080}
              quality={100}
              priority
            />
          ) : null}

          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />


          <div className="mb-6 mt-24 text-sm">
            <time className="text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
          </div>

          {/* the list of tags should be here */}
        </article>

        {relatedPosts.length > 0 && (
          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-xl font-bold mb-6">Other Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug} 
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg overflow-hidden transition-colors duration-200 block"
                >
                  {relatedPost.image && (
                    <div className="relative w-full h-48">
                      <Image
                        src={relatedPost.image.src}
                        alt={relatedPost.image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{relatedPost.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                          {relatedPost.description}
                        </p>
                      </div>
                      <svg 
                        className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1 duration-200" 
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
        )}
      </div>

      <Footer />
    </div>
  );
}
