import { useEffect, useState } from "react";
import {CalendarCheck} from "lucide-react"

export default function RecentPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="mt-2 space-y-4">
      {posts.map((post) => {
        const excerptText = post.excerpt.replace(/<[^>]+>/g, "");
        const shortExcerpt =
          excerptText.length > 120
            ? excerptText.slice(0, 120) + "..."
            : excerptText;

        return (
          <a
            key={post.uri}
            href={`/blogs/${post.uri.replaceAll("/", "")}`}
            className="flex flex-col md:flex-row items-start gap-4 hover:bg-white dark:hover:bg-zinc-900 p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <img
              src={post.featuredImage?.node.sourceUrl}
              alt={post.featuredImage?.node.altText || post.title}
              className="w-full md:w-[9.5rem] h-[7.125rem] object-cover aspect-ratio-1/1 rounded-md"
              loading="lazy"
            />
            <div className="flex flex-col justify-between flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-arabic">
                {post.title}
              </h3>
              <time
                dateTime={post.date}
                className="text-xs font-bold font-sans text-gray-900 dark:text-white mb-1 flex items-center gap-1"
              >
                <CalendarCheck className="w-4 h-4 text-gray-500 dark:text-zinc-300" />
                {new Date(post.date).toLocaleDateString()}
              </time>
              <p className="text-sm text-gray-600 dark:text-zinc-300 leading-relaxed">{shortExcerpt}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
