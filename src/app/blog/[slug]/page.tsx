import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getPost, getRelatedPosts } from "@/lib/posts";
import { Metadata } from "next";
import Image from "next/image";

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
      images: [{
        url: post.image.src,
        width: 1200,
        height: 630,
        alt: post.image.alt,
      }],
    },
  };
}

export default async function Page({ params }: Props) {
  const post = await getPost(params.slug);
  const relatedPosts = await getRelatedPosts(post);

  console.log('special', post.contentHtml);

  return (
    <div className="container mx-auto px-5">
      <Header />
      
      <div className="mb-10">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto break-words">
        

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            {post.title}
          </h1>
          <Image
            src={post.image.src}
            alt={post.image.alt}
            className="w-full h-[300px] object-cover mt-0"
            width={800}
            height={500}
            priority
          />
       
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />


          <div className="mb-6 text-lg">
            <time className="text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
          </div>

          {/* the list of tags should be here */}
        </article>

        {relatedPosts.length > 0 && (
          <div className="max-w-2xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
            <div className="grid gap-4">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.slug} className="border p-4 rounded">
                  <h3 className="font-semibold">{relatedPost.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {relatedPost.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
