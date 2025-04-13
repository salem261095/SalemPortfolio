import { getTestimonials } from "@/graphql/fetcher/fetchTestimonials";

export async function GET(){
    const Testimonials = await getTestimonials();
return new Response(JSON.stringify(Testimonials), {
    headers:{"Content-Type": "application/json"}
});
}