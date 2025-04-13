import { fetchGraphQL } from "../client";
import { GET_TESTI } from "../queries/GetTestimonials";
import type { Testi } from "../types/Testimonials";

export async function getTestimonials(): Promise<Testi[]> {
  const res = await fetchGraphQL<{
    testimonials: {
      nodes: {
        title: string;
        content: string;
        testimonialFields: {
          testimonialPosition: string;
        };
      }[];
    };
  }>(GET_TESTI);

  return res.testimonials.nodes.map((node) => ({
    Title: node.title,
    content: node.content,
    testimonialPosition: node.testimonialFields.testimonialPosition,
  }));
}
