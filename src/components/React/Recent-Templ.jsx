import { useEffect, useState } from "react";

export default function RecentPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/posts"); // Call your API endpoint
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <p key={post.uri}>{post.title}</p>
      ))}
    </div>
  );
}
