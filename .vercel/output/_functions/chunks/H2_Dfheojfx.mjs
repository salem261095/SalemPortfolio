import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_BFfUKFoZ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.salem-des.com/");
const $$H2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$H2;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="text-2xl text-right font-bold font-arabic">${text}</h2>`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/H2.astro", void 0);

export { $$H2 as $ };
