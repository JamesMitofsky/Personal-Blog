import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getPosts } from "@/lib/posts";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const limit = 6;
  const { posts, total } = await getPosts({ page, limit });
  const totalPages = Math.ceil(total / limit);

  const pagination = {
    page,
    limit,
    totalPages,
    nextPage: page < totalPages ? page + 1 : null,
    prevPage: page > 1 ? page - 1 : null,
  };

  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />
      <BlogPostsPreview posts={posts} />
      <BlogPostsPagination pagination={pagination} />
      <Footer />
    </div>
  );
};

export default Page;
