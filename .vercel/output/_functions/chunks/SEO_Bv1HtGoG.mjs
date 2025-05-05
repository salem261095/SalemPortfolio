import { c as createAstro, a as createComponent, b as addAttribute, d as renderHead, r as renderTemplate } from './astro/server_BFfUKFoZ.mjs';
import 'kleur/colors';
import 'clsx';
import { S as SiteConfig } from './Layout_CTBwygtO.mjs';

const $$Astro = createAstro("https://www.salem-des.com/");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SEO;
  const AppName = SiteConfig.AppName;
  const defaultDescription = SiteConfig.des;
  const defaultImage = "/assets/og-image.png";
  const defaultUrl = SiteConfig.BaseURL;
  const {
    title = AppName,
    description = defaultDescription,
    image = defaultImage,
    url = defaultUrl
  } = Astro2.props;
  const fullTitle = title ? `${title} - ${AppName}` : AppName;
  return renderTemplate`<head><title>${fullTitle}</title><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(fullTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:image"${addAttribute(image, "content")}><meta property="og:url"${addAttribute(url, "content")}>${renderHead()}</head>`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/SEO.astro", void 0);

export { $$SEO as $ };
