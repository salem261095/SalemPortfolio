import { getPosts } from "@/graphql/fetcher/fetchPosts";

export async function GET() {
  const posts = await getPosts(3);
  return new Response(JSON.stringify(posts), {
    headers: { "Content-Type": "application/json" },
  });
}
