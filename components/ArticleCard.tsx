import Link from "next/link";

export default function PostCard(props: any) {
  const { post } = props;
  return (
    <Link className="unstyled" href={`/blogs/${post.slug.join("/")}`}>
      <div className="px-4 py-4 mx-5 font-normal bg-gray-300 rounded-lg">
        <div className="flex flex-col justify-between md:flex-row">
          <h3 className="mb-2 text-2xl font-semibold leading-snug">
            {post.title}
          </h3>
        </div>
        <p className="text-gray-700">{post.bio}</p>
        <div className="flex items-center mt-3 space-x-2">
          <p className="px-2 text-gray-200 bg-blue-600 rounded">#gatsby</p>
          <p className="px-2 text-gray-800 bg-teal-400 rounded">#tailwindcss</p>
          <p className="px-2 text-gray-200 bg-purple-600 rounded">#css</p>
        </div>
      </div>
    </Link>
  );
}
