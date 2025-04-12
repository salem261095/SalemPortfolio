export interface Post {
    title: string;
    excerpt: string;
    content: string;
    date: string;
    uri: string;
    featuredImage?: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    };
    categories?: {
      nodes: {
        name: string;
        slug: string;
      }[];
    };
    tags?: {
      nodes: {
        name: string;
        slug: string;
      }[];
    };
  }
  