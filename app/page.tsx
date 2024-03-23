import Container from "@/components/Container";
import PostCard from "@/components/ArticleCard";
import getPostMetadata, { PostMetadata } from "@/utils/getPostMetadata";
import clsx from "clsx";
import { ArticleMetadata, GetArticles } from "./articles/articleUtils";
import Link from "next/link";
import Hero from "@/components/Hero";
import ArticlePreviewCard from "@/components/ArticlePreviewCard";

export default async function Home() {
  // const postMetadata: PostMetadata[] = getPostMetadata("data/blogs");
  const articleMetadata: ArticleMetadata[] = await GetArticles();
  const articlePreviewCount = 8;
  return (
    <main>
      <Hero />
      <Container className="mt-1 md:mt-1">
        <section className="flex flex-col justify-center px-4 py-3 mx-auto sm:px-6">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 md:text-3xl">
            My latest thoughts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-1">
            {articleMetadata
              .sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
              })
              .slice(0, articlePreviewCount)
              .map((article, articleIndex) => {
                return (
                  <ArticlePreviewCard key={articleIndex} article={article} />
                );
              })}
          </div>
        </section>
      </Container>
      {/* <Container className="mt-1 md:mt-1">
        <p className="font-bold mb-6 text-3xl">Blog posts</p>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            {postMetadata.map((post, postIndex) => (
              <PostCard key={postIndex} post={post} />
            ))}
          </div>
          <div>
            {articleMetadata
              .sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
              })
              .map((article, articleIndex) => {
                let href = `articles/${article.slug}`
                return (
                  <p key={articleIndex}><Link href={href}>
                    {article.title}
                  </Link></p>
                );
              })}
          </div>
        </div>
      </Container> */}
    </main>
  );
}
