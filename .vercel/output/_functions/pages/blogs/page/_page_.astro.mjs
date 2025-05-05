import { c as createAstro, a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../../../chunks/astro/server_BFfUKFoZ.mjs';
import 'kleur/colors';
import { g as getPosts } from '../../../chunks/fetchPosts_CnnO-Y8y.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_DKUeaqIP.mjs';
import { $ as $$H1 } from '../../../chunks/H1_BoqP1JAE.mjs';
import { p as paginate } from '../../../chunks/paginate_BoTOWzE1.mjs';
import { C as CalendarCheck } from '../../../chunks/calendar-check_CGF1kKOW.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://www.salem-des.com/");
async function getStaticPaths() {
  const posts = await getPosts();
  const pageSize = 8;
  const totalPages = Math.ceil(posts.length / pageSize);
  return Array.from({ length: totalPages - 1 }).map((_, i) => ({
    params: { page: `${i + 2}` }
  }));
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.params;
  const currentPage = Number(page);
  const allPosts = await getPosts();
  const { paginated, totalPages } = paginate(allPosts, currentPage, 8);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u0627\u0644\u0645\u062F\u0648\u0646\u0629 - \u0635\u0641\u062D\u0629 ${currentPage}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "H1", $$H1, { "text": `\u0627\u0644\u0645\u062F\u0648\u0646\u0629 - \u0635\u0641\u062D\u0629 ${currentPage}` })} ${paginated.map((post) => renderTemplate`${maybeRenderHead()}<a${addAttribute(`/blogs/${encodeURIComponent(post.uri.replaceAll("/", ""))}`, "href")} class="flex flex-row items-start gap-4 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 p-4 rounded-xl shadow hover:shadow-md transition"> <img${addAttribute(post.featuredImage?.node.sourceUrl, "src")}${addAttribute(post.featuredImage?.node.altText || post.title, "alt")} class="w-[9.5rem] h-[7.125rem] object-cover aspect-ratio-1/1 rounded-md" loading="lazy"> <div class="flex flex-col justify-between flex-1"> <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-2 font-arabic"> ${post.title} </h3> <time${addAttribute(post.date, "datetime")} class="text-xs font-bold font-sans text-zinc-700 dark:text-zinc-300 mb-1 flex items-center gap-1"> ${renderComponent($$result2, "CalendarCheck", CalendarCheck, { "class": "w-4 h-4 text-zinc-500 dark:text-zinc-400" })} ${new Date(post.date).toLocaleDateString()} </time> <p class="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">${unescapeHTML(post.excerpt)}</p> </div> </a>`)}<div class="mt-10 text-center flex justify-center gap-4"> ${currentPage > 1 && renderTemplate`<a${addAttribute(currentPage === 2 ? "/blogs" : `/blogs/page/${currentPage - 1}`, "href")} class="text-zinc-900 dark:text-white">
← السابق
</a>`} ${currentPage < totalPages && renderTemplate`<a${addAttribute(`/blogs/page/${currentPage + 1}`, "href")} class="font-bold text-zinc-900 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300">
التالي
</a>`} </div> ` })}`;
}, "H:/Salem-Desv6/SalemPortfolio/src/pages/blogs/page/[page].astro", void 0);

const $$file = "H:/Salem-Desv6/SalemPortfolio/src/pages/blogs/page/[page].astro";
const $$url = "/blogs/page/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
