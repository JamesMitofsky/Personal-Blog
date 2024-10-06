import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";
import { oneLinerDescription } from "../../constants";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const content = `
![](./images/hero.jpg)
I am a researcher, activist, and student focused on humanitarian crises and international justice.

As demoracy becomes once again imperiled by new behaviors and dynamics around the globe, I'm interested in how to preserve our communication and protect the global order of peace. As ever, the problems of this generation are astounding, and it will demand new ways of thinking about multi-lateral collaboration to solve them.

I’ve had the privilege of working with organizations like the Red Cross (La Croix Rouge Française) and pursuing academic research in political science in collaboration with organizations such as Tufts University’s Institute for Democracy and Higher Education (IDHE). These experiences shape how I think about the intersection of policy, diplomacy, and humanitarian action, and I’m constantly learning from others who work in these areas.

An American having lived in France for some years, I speak French fluently and have notions of German. I am currently based in Caen, France.
`;

export async function generateMetadata() {
  return {
    title: "About",
    description: oneLinerDescription,
    openGraph: {
      title: "About",
      description: oneLinerDescription,
      images: [
        signOgImageUrl({
          title: "James Mitofsky",
          label: "About",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto my-10 md:mt-20 blog-content">
        <Markdown>{content}</Markdown>
        <div className="flex mt-10 space-x-11">
          <a
            href="https://linkedin.com/in/jamesmit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:jamesmitofsky@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
