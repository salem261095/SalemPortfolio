import { GraphQLClient } from "graphql-request";

const endpoint = import.meta.env.PUBLIC_GRAPHQL_URL;

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
  },
});

// Generic fetcher with type support
export async function fetchGraphQL<T = any>(query: string, variables?: Record<string, any>): Promise<T> {
  return await graphQLClient.request<T>(query, variables);
}
