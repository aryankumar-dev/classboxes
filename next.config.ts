import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Placeholder photos until real assets are exported from the live site.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  // Old WordPress-style search links (/?s=java) go to the new search page; the query string is kept.
  async redirects() {
    return [{ source: "/", has: [{ type: "query", key: "s" }], destination: "/search", permanent: true }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
