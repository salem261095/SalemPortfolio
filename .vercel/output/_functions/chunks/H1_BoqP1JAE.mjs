import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_BFfUKFoZ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.salem-des.com/");
const $$H1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$H1;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-3xl text-right font-bold font-arabic py-2">${text}</h1>`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/H1.astro", void 0);

export { $$H1 as $ };
