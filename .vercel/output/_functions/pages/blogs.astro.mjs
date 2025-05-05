import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_BFfUKFoZ.mjs';
import 'kleur/colors';
import { g as getPosts } from '../chunks/fetchPosts_CnnO-Y8y.mjs';
import { $ as $$Layout, S as SiteConfig } from '../chunks/Layout_CTBwygtO.mjs';
import { $ as $$H1 } from '../chunks/H1_BoqP1JAE.mjs';
import { $ as $$SEO } from '../chunks/SEO_Bv1HtGoG.mjs';
import { p as paginate } from '../chunks/paginate_BoTOWzE1.mjs';
import { C as CalendarCheck } from '../chunks/calendar-check_CGF1kKOW.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const AppName = SiteConfig.AppName;
  const allPosts = await getPosts();
  const { paginated, totalPages } = paginate(allPosts, 1, 8);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SEO", $$SEO, { "title": "\u0627\u0644\u0645\u062F\u0648\u0646\u0629", "description": "\u0645\u0642\u0627\u0644\u0627\u062A \u0648\u0643\u062A\u0628 \u0623\u062B\u0652\u0631\u062A\u0646\u064A\u060C \u0623\u0634\u0627\u0631\u0643\u0643\u0645 \u062E\u0640\u0640\u0644\u0627\u0635\u0629 \u0628\u0639\u0636 \u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0648\u0627\u0644\u0625\u0644\u0647\u0627\u0645.", "url": `${AppName}/blogs`, "image": "/assets/og-image.png" })} ${renderComponent($$result2, "H1", $$H1, { "text": "\u0627\u0644\u0645\u062F\u0648\u0646\u0629" })} ${maybeRenderHead()}<p class="text-zinc-800 dark:text-zinc-300">
مقالات وكتب أثْرتني، أشارككم خــلاصة بعض الأفكار والإلهام
</p> ${paginated.map((post) => renderTemplate`<a${addAttribute(`/blogs/${encodeURIComponent(post.uri.replaceAll("/", ""))}`, "href")} class="flex flex-col md:flex-row items-start gap-4 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 p-4 rounded-xl shadow hover:shadow-md transition"> <img${addAttribute(post.featuredImage?.node.sourceUrl, "src")}${addAttribute(post.featuredImage?.node.altText || post.title, "alt")} class="w-full md:w-[9.5rem] h-[7.125rem] object-cover aspect-ratio-1/1 rounded-md" loading="lazy"> <div class="flex flex-col justify-between flex-1"> <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-arabic"> ${post.title} </h3> <time${addAttribute(post.date, "datetime")} class="text-xs font-bold font-sans text-gray-900 dark:text-zinc-300 mb-1 flex items-center gap-1"> ${renderComponent($$result2, "CalendarCheck", CalendarCheck, { "class": "w-4 h-4 text-gray-500 dark:text-zinc-400" })} ${new Date(post.date).toLocaleDateString()} </time> <p class="text-sm text-gray-600 dark:text-zinc-300 leading-relaxed">${unescapeHTML(post.excerpt)}</p> </div> </a>`)}${totalPages > 1 && renderTemplate`<div class="mt-10 text-center"> <a href="/blogs/page/2" class="underline text-zinc-600 hover:zinc-blue-800 dark:text-slate-100 dark:hover:text-slate-300">
التالي
</a> </div>`}` })}`;
}, "H:/Salem-Desv6/SalemPortfolio/src/pages/blogs/index.astro", void 0);

const $$file = "H:/Salem-Desv6/SalemPortfolio/src/pages/blogs/index.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
