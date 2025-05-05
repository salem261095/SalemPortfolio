import { g as getPosts } from '../../chunks/fetchPosts_CnnO-Y8y.mjs';
export { renderers } from '../../renderers.mjs';

async function GET() {
  const posts = await getPosts(3);
  return new Response(JSON.stringify(posts), {
    headers: { "Content-Type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
