import { gql } from "graphql-request";

export const GET_TESTI = gql `
query GetTestimonials {
  testimonials {
    nodes {
      id
      title
      content
      testimonialFields {
        testimonialPosition
      }
    }
  }
}`;