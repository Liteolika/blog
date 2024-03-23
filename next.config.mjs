/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
//const withMDX = require("@next/mdx")();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"]
};
//export default nextConfig;
const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
      // providerImportSource: '@mdx-js/react',
      // providerImportSource: "@mdx-js/react",
    },
  });
  
  export default withMDX(nextConfig);


