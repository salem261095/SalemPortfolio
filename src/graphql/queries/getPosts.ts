import { gql } from "graphql-request";

export const GET_POSTS = gql`
  query GetPosts($limit: Int) {
    posts(first: $limit) {
      nodes {
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
  }
`;
