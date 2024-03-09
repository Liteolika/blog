/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
//const withMDX = require("@next/mdx")();


const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};
//export default nextConfig;
const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
    //   remarkPlugins: [remarkGfm],
    //   rehypePlugins: [rehypePrism],
    },
  });
  
  export default withMDX(nextConfig);


