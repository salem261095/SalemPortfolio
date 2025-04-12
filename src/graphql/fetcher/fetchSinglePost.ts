import { fetchGraphQL } from "../client";
import { gql } from "graphql-request";
import type { Post } from "../types/Posts";

export async function getSinglePost(uri: string): Promise<Post | null> {
  const query = gql`
    query GetSinglePost($id: ID!) {
      post(id: $id, idType: URI) {
        title
        excerpt
        content
        date
        uri
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
      }
    }
  `;

  const res = await fetchGraphQL<{ post: Post | null }>(query, { id: uri });
  return res.post;
}
