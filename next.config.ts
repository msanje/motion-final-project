import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  // options: {
  //   // providerImportSource: "@mdx-js/react",
  //   providerImportSource: "./app/mdx-provider",
  // },
});

export default withMDX(nextConfig);
