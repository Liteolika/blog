import { MDXProvider } from "@mdx-js/react";
import { MDXContent } from "mdx/types";
import React from "react";
import MdxLayout from "./layout";
import { notFound } from "next/navigation";
import { ArticleMetadata, Article, GetArticles, GetArticleAt, ArticleExists } from "../articleUtils";
import SiteData from "@/sitedata";

export async function generateMetadata({ params, searchParams }: { params: any, searchParams: any }) {
  let articles = await GetArticles();
  let articleMetaData = articles.filter((a) => a.slug == params.slug.join("/"))
  return {
    title: `${SiteData.title} - ${articleMetaData[0].title}`
  }
  // const id = params?.slug ? " ⋅ " + params?.slug : "";
  // return {
  //   title: `Peters blog - ${id.replaceAll("_", " ")}`,
  // };
}

export const generateStaticParams = async () => {
  let articles = await GetArticles();
  let slugs = articles.map((article) => {
    return {
      slug: article.slug.split("/")
    }
  });
  return slugs;

};

export default async function Article(props: any) {

  // Slugs with a subfolder are sent as an array.
  const slug = (props.params.slug as string[]).join("/");
  
  // If the slug doesnt exist, return notfound.
  if (await ArticleExists(slug) == false) {
    notFound();
  }
  
  const Article = await GetArticleAt(props.params.slug.join("/"));

  return (
    <div>
      <h1>{Article.metadata.title}</h1>
      <h4>Date: {Article.metadata.date.toLocaleString()}</h4>
      <h4>Author: {Article.metadata.author}</h4>
      <p>{slug}</p>
      <Article.content />
    </div>
  );
}
