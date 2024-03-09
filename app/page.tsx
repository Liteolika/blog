import Container from "@/components/Container";
import PostCard from "@/components/ArticleCard";
import getPostMetadata, { PostMetadata } from "@/utils/getPostMetadata";
import clsx from "clsx";

export default function Home() {
  const postMetadata: PostMetadata[] = getPostMetadata("blogs");

  return (
    <main>
      <Container className="mt-1 md:mt-1">
        <p className="font-bold mb-6 text-3xl">Blog posts</p>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            {postMetadata.map((post, postIndex) => (
              <PostCard key={postIndex} post={post} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
