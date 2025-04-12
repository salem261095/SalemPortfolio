import { fetchGraphQL } from "../client";
import { GET_POSTS } from "../queries/getPosts";
import type { Post } from "../types/Posts";

export async function getPosts(limit: number = 100): Promise<Post[]> {
  const res = await fetchGraphQL<{
    posts: {
      nodes: Post[];
    };
  }>(GET_POSTS, { limit });

  return res.posts.nodes;
}
