import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BFfUKFoZ.mjs';
import 'kleur/colors';
import { $ as $$H1 } from '../chunks/H1_BoqP1JAE.mjs';
import { $ as $$Layout, S as SiteConfig } from '../chunks/Layout_DKUeaqIP.mjs';
import { g as getCollection } from '../chunks/_astro_content_Cszyqtkc.mjs';
import { $ as $$SEO } from '../chunks/SEO_BTbY70n8.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const BaseURL = SiteConfig.BaseURL;
  const services = await getCollection("services");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SEO", $$SEO, { "title": "\u0627\u0644\u062E\u062F\u0645\u0627\u062A", "description": "\u0627\u0643\u062A\u0634\u0641 \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u062C\u0631\u0627\u0641\u064A\u0643\u064A \u0648\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 \u0627\u0644\u062A\u064A \u0623\u0642\u062F\u0645\u0647\u0627\u060C \u0627\u0644\u0645\u0635\u0645\u0645\u0629 \u062E\u0635\u064A\u0635\u064B\u0627 \u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062A \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0639\u0644\u0649 \u0628\u0646\u0627\u0621 \u0647\u0648\u064A\u0627\u062A \u0628\u0635\u0631\u064A\u0629 \u0645\u0645\u064A\u0632\u0629 \u0648\u0645\u0648\u0627\u0642\u0639 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u062A\u0639\u0643\u0633 \u0631\u0624\u064A\u062A\u0647\u0627 \u0648\u062A\u062D\u0642\u0642 \u0623\u0647\u062F\u0627\u0641\u0647\u0627.", "url": `${BaseURL}/services`, "image": "/assets/og-image.png" })} ${renderComponent($$result2, "H1", $$H1, { "text": "\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0625\u0628\u062F\u0627\u0639\u064A\u0629" })} ${maybeRenderHead()}<div class="grid grid-cols-1 sm:grid-cols-2 gap-6"> ${services.map((service) => renderTemplate`<a${addAttribute(`/services/${service.slug}`, "href")} class="bg-white border border-zinc-300 text-black rounded-xl p-2 hover:scale-[1.01] transition-all flex flex-col"> <div class="rounded-lg overflow-hidden mb-4"> <img${addAttribute(service.data.image, "src")}${addAttribute(service.data.title, "alt")} class="w-full h-40 object-cover" loading="lazy"> </div> <div class="px-2"> <h3 class="text-2xl font-bold mb-2 font-arabic"> ${service.data.title} </h3> <p class="text-sm text-zinc-800 leading-relaxed"> ${service.data.Subetitle} </p> </div> </a>`)} </div> ` })}`;
}, "H:/Salem-Desv6/SalemPortfolio/src/pages/services/index.astro", void 0);

const $$file = "H:/Salem-Desv6/SalemPortfolio/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
