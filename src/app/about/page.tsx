import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { oneLinerDescription } from "../../constants";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import heroImage from "../../../public/images/hero.webp";

export async function generateMetadata() {
  return {
    title: "About",
    description: oneLinerDescription,
    openGraph: {
      title: "About",
      description: oneLinerDescription,
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5 min-h-screen">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto blog-content [&_img]:rounded-lg">
        <Image
          src={heroImage}
          alt="Hero Image"
          placeholder="blur"
          className="rounded-lg mb-4"
          priority
        />
        <p>I am a researcher and activist focused on humanitarian crises and transatlantic cooperation.</p>

        <p>As democracy is further endangered by new behaviors and dynamics around the globe, I&apos;m interested in how to preserve our communication and protect a global order of peace. I believe the problems of this moment demand new ways of thinking about multilateral collaboration.</p>

        <p>I&apos;ve volunteered for the Red Cross (la Croix Rouge Française) and published research with Tufts&apos; Institute for Democracy and Higher Education (IDHE). These experiences shape how I think about the intersection of policy, diplomacy, and humanitarian action, and I&apos;m constantly learning from others who share my motivation to help the world through policy.</p>

        <p>I grew up in Vermont&apos;s Northeast Kingdom, spent three years in Caen, France, and currently live in Bonn, Germany. I speak French fluently and have notions of German.</p>
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
