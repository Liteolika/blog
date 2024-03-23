import { ArticleMetadata } from "@/app/articles/articleUtils";

export default function ArticlePreviewCard({
  article,
}: {
  article: ArticleMetadata;
}) {
  return (
    <div className="p-4 flex flex-col justify-between border rounded-lg shadow-md">
      <a
        className="block mb-2 text-xl font-semibold"
        href={`/articles/${article.slug}`}
      >
        {article.title}
      </a>

      <div className="flex flex-wrap gap-2 text-sm text-gray-600">
        {article.tags.map((tag, tagIndex) => {
          return (
            <span
              key={tagIndex}
              className="px-2 py-0.5 rounded-full bg-gray-100"
            >
              {tag}
            </span>
          );
        })}
      </div>

      <p className="mt-2 text-gray-700 text-sm">{article.description}</p>

      <div className="flex items-center justify-between mt-4 text-sm">
        <a href={`/articles/${article.slug}`} className="hover:font-extrabold">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
            Read more
          </button>
        </a>
      </div>
    </div>
  );
}
