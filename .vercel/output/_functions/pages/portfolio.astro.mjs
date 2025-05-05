import { a as createComponent, e as renderComponent, r as renderTemplate } from '../chunks/astro/server_BFfUKFoZ.mjs';
import 'kleur/colors';
import { $ as $$H1 } from '../chunks/H1_BoqP1JAE.mjs';
import { $ as $$Layout, S as SiteConfig } from '../chunks/Layout_CTBwygtO.mjs';
import { $ as $$SEO } from '../chunks/SEO_Bv1HtGoG.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const AppName = SiteConfig.AppName;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SEO", $$SEO, { "title": "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639", "description": "\u0645\u0639\u0631\u0636 \u0627\u0644\u0627\u0639\u0645\u0627\u0644 \u0627\u0644\u062C\u0631\u0627\u0641\u064A\u0643 \u0648\u0627\u0644\u0647\u0648\u064A\u0627\u062A \u0627\u0644\u0628\u0635\u0631\u064A\u0629 \u0648\u0645\u0634\u0627\u0631\u064A\u0639 \u0628\u0631\u0645\u062C\u0629 \u0648\u062A\u0635\u0645\u064A\u0645 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0648\u064A\u0628", "url": `${AppName}/portfolio`, "image": "/assets/og-image.png" })} ${renderComponent($$result2, "H1", $$H1, { "text": "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0627\u0628\u062F\u0627\u0639\u064A\u0629" })} ` })}`;
}, "H:/Salem-Desv6/SalemPortfolio/src/pages/portfolio/index.astro", void 0);

const $$file = "H:/Salem-Desv6/SalemPortfolio/src/pages/portfolio/index.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
