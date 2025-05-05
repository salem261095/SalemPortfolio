import { c as createAstro, a as createComponent, e as renderComponent, r as renderTemplate, g as renderSlot, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_BFfUKFoZ.mjs';
import 'kleur/colors';
import { S as SiteConfig, $ as $$Layout } from '../../chunks/Layout_CTBwygtO.mjs';
import { f as fetchGraphQL, g as getPosts } from '../../chunks/fetchPosts_CnnO-Y8y.mjs';
import { gql } from 'graphql-request';
import { c as createLucideIcon } from '../../chunks/createLucideIcon_CM_mid3N.mjs';
export { renderers } from '../../renderers.mjs';

const CalendarDays = createLucideIcon("calendar-days", [["path", { "d": "M8 2v4" }], ["path", { "d": "M16 2v4" }], ["rect", { "width": "18", "height": "18", "x": "3", "y": "4", "rx": "2" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "M8 14h.01" }], ["path", { "d": "M12 14h.01" }], ["path", { "d": "M16 14h.01" }], ["path", { "d": "M8 18h.01" }], ["path", { "d": "M12 18h.01" }], ["path", { "d": "M16 18h.01" }]]);

const CornerLeftUp = createLucideIcon("corner-left-up", [["polyline", { "points": "14 9 9 4 4 9" }], ["path", { "d": "M20 20h-7a4 4 0 0 1-4-4V4" }]]);

const Link = createLucideIcon("link", [["path", { "d": "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }], ["path", { "d": "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }]]);

async function getSinglePost(uri) {
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
  const res = await fetchGraphQL(query, { id: uri });
  return res.post;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.salem-des.com/");
const prerender = false;
const revalidate = 60 * 60;
async function getStaticPaths() {
  const posts = await getPosts();
  return posts.map((post) => ({
    params: { slug: post.uri.replaceAll("/", "") }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getSinglePost(`/blog/${slug}/`);
  if (!post) {
    return Astro2.redirect("/404");
  }
  const ogImage = post.featuredImage?.node?.sourceUrl ?? "/default-og.jpg";
  const description = post.excerpt.replace(/<[^>]+>/g, "").slice(0, 160);
  const H1 = `${post.title} | \u0633\u0627\u0644\u0645 \u0642\u0648\u0642\u062D`;
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.featuredImage?.node?.sourceUrl ?? "/default-og.jpg",
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "\u0633\u0627\u0644\u0645 \u0642\u0648\u0642\u062D"
    },
    publisher: {
      "@type": "Organization",
      name: "\u0633\u0627\u0644\u0645 \u0642\u0648\u0642\u062D",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SiteConfig.BaseURL}/blog/${post.uri.replaceAll("/", "")}`
    },
    description
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title }, { "default": async ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["head"], renderTemplate(_a || (_a = __template([" <title>", '</title> <meta name="description"', '> <meta property="og:title"', '> <meta property="og:description"', '> <meta property="og:image"', '> <meta property="og:type" content="article"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"', '> <meta name="twitter:description"', '> <meta name="twitter:image"', '> <script type="application/ld+json">', "<\/script> "])), H1, addAttribute(description, "content"), addAttribute(H1, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(H1, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), unescapeHTML(JSON.stringify(schemaData))))} ${maybeRenderHead()}<article class="prose max-w-4xl mx-auto text-right rtl dark:prose-invert"> <header class="mb-6 space-y-4"> <div class="flex flex-col md:flex-row-reverse md:justify-between md:items-center gap-4 text-sm text-gray-500 dark:text-zinc-400"> <a href="/blogs" class="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition self-start md:self-auto">
عرض كافة التدوينات
${renderComponent($$result2, "CornerLeftUp", CornerLeftUp, {})} </a> <div class="flex flex-wrap justify-start gap-3"> <div class="flex items-center gap-2 bg-gray-100 dark:bg-zinc-900 text-zinc-800 dark:text-white px-3 py-1.5 rounded-md"> ${renderComponent($$result2, "CalendarDays", CalendarDays, { "class": "w-4 h-4" })} <time${addAttribute(post.date, "datetime")}> ${new Date(post.date).toLocaleDateString()} </time> </div> ${post.categories?.nodes[0] && renderTemplate`<a${addAttribute(`/category/${post.categories.nodes[0].slug}`, "href")} class="flex items-center gap-2 bg-gray-100 dark:bg-zinc-900 text-zinc-800 dark:text-white px-3 py-1.5 rounded-md"> ${renderComponent($$result2, "Link", Link, { "class": "w-4 h-4" })} <span>${post.categories.nodes[0].name}</span> </a>`} </div> </div> </header> <h1 class="text-4xl font-bold font-arabic leading-tight text-zinc-900 dark:text-white"> ${post.title} </h1> ${post.featuredImage?.node?.sourceUrl && renderTemplate`<figure class="my-6"> <img${addAttribute(post.featuredImage.node.sourceUrl, "src")}${addAttribute(post.featuredImage.node.altText || post.title, "alt")}${addAttribute(post.title, "title")} class="w-full h-72 object-cover rounded-lg" loading="lazy"> </figure>`} <section class="prose prose-lg max-w-none text-gray-800 dark:text-zinc-300 dark:prose-invert prose-img:rounded-lg prose-a:text-blue-600 hover:prose-a:underline">${unescapeHTML(post.content)}</section> </article> ` })}`;
}, "H:/Salem-Desv6/SalemPortfolio/src/pages/blogs/[slug].astro", void 0);

const $$file = "H:/Salem-Desv6/SalemPortfolio/src/pages/blogs/[slug].astro";
const $$url = "/blogs/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  prerender,
  revalidate,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
