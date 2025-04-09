import { oneLinerDescription } from "./constants";

const buildConfig = () => {
  const defaultTitle = "James Mitofsky – Policy, Global Affairs, & Reflections";

  return {
    baseUrl: "https://www.jamesm.it",
    site: {
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
  };
};

export const config = buildConfig();