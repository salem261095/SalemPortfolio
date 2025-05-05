import { GraphQLClient, gql } from 'graphql-request';

const endpoint = "https://darkslategray-wasp-853987.hostingersite.com/graphql";
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json"
  }
});
async function fetchGraphQL(query, variables) {
  return await graphQLClient.request(query, variables);
}

const GET_POSTS = gql`
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

async function getPosts(limit = 100) {
  const res = await fetchGraphQL(GET_POSTS, { limit });
  return res.posts.nodes;
}

export { fetchGraphQL as f, getPosts as g };
