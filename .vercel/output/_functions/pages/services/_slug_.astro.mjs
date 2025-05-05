import { c as createAstro, a as createComponent, e as renderComponent, r as renderTemplate, F as Fragment, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BFfUKFoZ.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_Cszyqtkc.mjs';
import { $ as $$Layout, S as SiteConfig } from '../../chunks/Layout_CTBwygtO.mjs';
import { $ as $$SEO } from '../../chunks/SEO_Bv1HtGoG.mjs';
import { $ as $$H2 } from '../../chunks/H2_Dfheojfx.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.salem-des.com/");
async function getStaticPaths() {
  const services = await getCollection("services");
  return services.map((service) => ({
    params: { slug: service.slug },
    props: { service }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const BaseURL = SiteConfig.BaseURL;
  const { service } = Astro2.props;
  let Content;
  if (service) {
    const rendered = await service.render();
    Content = rendered.Content;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`${service && Content && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "SEO", $$SEO, { "title": service.data.title, "description": service.data.Subetitle, "url": `${BaseURL}/services/${service.slug}`, "image": service.data.image })} ${maybeRenderHead()}<main class="max-w-3xl mx-auto p-6"> ${renderComponent($$result3, "H2", $$H2, { "text": service.data.title })} <img${addAttribute(service.data.image, "src")}${addAttribute(service.data.title, "alt")} class="w-full max-h-[300px] object-cover rounded mb-6"> <p class="text-lg text-gray-500 mb-4">${service.data.Subetitle}</p> ${renderComponent($$result3, "Content", Content, {})} </main> ` })}`}` })}`;
}, "H:/Salem-Desv6/SalemPortfolio/src/pages/services/[slug].astro", void 0);

const $$file = "H:/Salem-Desv6/SalemPortfolio/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
