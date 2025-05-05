import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BFfUKFoZ.mjs';
import 'kleur/colors';
import { $ as $$H1 } from '../chunks/H1_BoqP1JAE.mjs';
import { $ as $$Layout, S as SiteConfig } from '../chunks/Layout_CTBwygtO.mjs';
import { Undo2 } from 'lucide-react';
import { $ as $$SEO } from '../chunks/SEO_Bv1HtGoG.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const AppName = SiteConfig.AppName;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SEO", $$SEO, { "title": "\u0635\u0641\u062D\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629", "description": "\u0639\u0630\u0631\u064B\u0627\u060C \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u064A \u062A\u0628\u062D\u062B \u0639\u0646\u0647\u0627 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629. \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0623\u0648 \u0627\u0633\u062A\u0643\u0634\u0627\u0641 \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A", "url": `${AppName}/404`, "image": "/assets/og-image.png" })} ${maybeRenderHead()}<section class="min-h-full flex justify-start text-right text-zinc-900 dark:text-white"> <div> ${renderComponent($$result2, "H1", $$H1, { "text": "\u062E\u0637\u0623 404" })} <p class="text-lg mt-4 text-zinc-800 dark:text-zinc-300">
لم نجد ما تبحث عنه..
</p> <a href="/" class="mt-6 flex gap-2 border border-black dark:border-white px-4 py-2 rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"> ${renderComponent($$result2, "Undo2", Undo2, {})} الرئيسية
</a> </div> </section> ` })}`;
}, "H:/Salem-Desv6/SalemPortfolio/src/pages/404.astro", void 0);

const $$file = "H:/Salem-Desv6/SalemPortfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
