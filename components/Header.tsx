import siteData from "@/sitedata";
import Link from "next/link";
import { Alumni_Sans } from "next/font/google";
import { UserIcon } from "@heroicons/react/24/solid";

const titleFont = Alumni_Sans({
  subsets: ["latin"],
  weight: "variable",
  style: "italic",
  display: "swap",
});
const titleFontClasses = `${titleFont.className} text-5xl`;

export default function Header(props: any) {
  return (
    <header className={`sticky top-0 bg-white shadow ${props.className}`}>
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <Link href="/">
          <div className="flex items-center text-2xl">
            <div className="w-12 mr-3">
              <img className="rounded-full" src="/peter_s_small.png" />
            </div>
            <p className={titleFontClasses}>{siteData.title}</p>
          </div>
        </Link>
        <div className="flex mt-4 sm:mt-0 ">
          <Link className="px-4" href="/about">
            About
          </Link>
          <Link className="px-4" href="/articles">
            Articles
          </Link>
          {/* <Link className="px-4" href="/projects">
            Projects
          </Link> */}
        </div>
      </div>
    </header>
  );
}
