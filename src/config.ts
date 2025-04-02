import { oneLinerDescription } from "./constants";

const buildConfig = () => {
  const defaultTitle = "James Mitofsky – Policy, Global Affairs, & Reflections";

  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    blog: {
      name: "James Mitofsky",
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: oneLinerDescription,
      },
    },
    ogImageSecret: process.env.OG_IMAGE_SECRET || "your-secret-key-for-og-image-generation",
  };
};

export const config = buildConfig();