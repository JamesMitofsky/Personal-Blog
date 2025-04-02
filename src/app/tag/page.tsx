import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { getAllTags } from "@/lib/posts";
import Link from "next/link";

export const metadata = {
  title: "Tags",
  description: "Browse posts by tag",
};

const Page = async () => {
  const tags = await getAllTags();

  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />
      <div className="prose dark:prose-invert mx-auto">
        <h1>Tags</h1>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link key={tag} href={`/tag/${tag}`}>
              <Badge variant="secondary">#{tag}</Badge>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
