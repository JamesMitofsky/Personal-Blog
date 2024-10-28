/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
  redirects: async () => {
    return [  {
        source: '/strava',
        destination: 'https://www.strava.com/athletes/18429685',
        permanent: false, // Set to true for a 308 permanent redirect, false for a 307 temporary redirect
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/jamesmit',
        permanent: false, // Set to true for a 308 permanent redirect, false for a 307 temporary redirect
      },
      {
        source: '/survival-guide',
        destination: 'https://www.jamesm.it/blog/the-survival-guide-for-study-abroad-in-caen-france',
        permanent: false, // Set to true for a 308 permanent redirect, false for a 307 temporary redirect
      },
    ];
  },
};

export default nextConfig;
