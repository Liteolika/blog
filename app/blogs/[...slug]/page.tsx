// import Markdown from "markdown-to-jsx";
import Markdown from "react-markdown";
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";

function getPostContent(slug: string[]) {
  const folder = "blogs/";
  const file = folder + `${slug.join("/")}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("blogs");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }: { params: any, searchParams: any }) {
  const id = params?.slug ? " ⋅ " + params?.slug : "";
  return {
    title: `The Bubbly Baker ${id.replaceAll("_", " ")}`,
  };
}

export default function RecipePage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  // console.log(post);
  return (
    <main>
      <article>
        <Markdown className="prose">{post.content}</Markdown>
      </article>
    </main>
  );
}
