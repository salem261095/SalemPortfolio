import { a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, e as renderComponent, f as renderScript, g as renderSlot, c as createAstro, d as renderHead } from './astro/server_BFfUKFoZ.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';
import { jsx } from 'react/jsx-runtime';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

const SiteConfig = {
  AppName: "سالم قوقح",
  des: "مطور ويب ومصمم جرافيك",
  About: "مطور ويب ومصمم جرافيك",
  BaseURL: "https://salem-des.com",
  Bio: "سالم قوقح مصمم جرافيك ومطوّر ويب يمني، بخبرة تتجاوز 8 سنوات من الإبداع والإبتكار. عملت مع مؤسسات وشركات محلية وعربية، وساهمت في بناء وتأسيس هويات بصرية مبتكرة ومواقع احترافية لعدد من المشاريع الناشئة، مقدّمًا حلولًا بصرية ورقمية تعكس الاحترافية والتميّز.",
  social: {
    instagram: "/",
    x: "",
    linkedin: "/",
    behance: "/",
    dribble: "",
    github: ""
  },
  contact: {
    email: "contact@salem-des.com",
    whatsapp: "775657617"
  }
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-12 border-t pt-6 text-center text-sm" role="contentinfo" aria-label="Site footer"> <div class="max-w-xl mx-auto space-y-4 px-4"> <p class="leading-relaxed my-4">${SiteConfig.Bio}</p> <ul class="flex justify-center gap-4 font-sans font-semibold"> ${renderTemplate`<li> <a${addAttribute(SiteConfig.social.instagram, "href")} target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram profile">
Instagram
</a> </li>`} ${SiteConfig.social.x} ${renderTemplate`<li> <a${addAttribute(SiteConfig.social.linkedin, "href")} target="_blank" rel="noopener noreferrer" aria-label="Visit Linkedin profile">
LinkedIn
</a> </li>`} ${renderTemplate`<li> <a${addAttribute(SiteConfig.social.behance, "href")} target="_blank" rel="noopener noreferrer" aria-label="Visit Bhenace Portfolio">
Behance
</a> </li>`} ${SiteConfig.social.dribble} ${SiteConfig.social.github} </ul> </div> <p class="text-sm text-center text-gray-500 mt-4">
© <time>${(/* @__PURE__ */ new Date()).getFullYear()}</time> ${SiteConfig.AppName}. جميع الحقوق محفوظة.
</p> </footer>`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/Footer.astro", void 0);

const navbarLinks = [
  { id: "1", title: "الرئيسية", url: "/" },
  { id: "2", title: "المشاريع", url: "/portfolio" },
  { id: "3", title: "الخدمات", url: "/services" },
  { id: "4", title: "المدونة", url: "/blogs" },
  { id: "5", title: "تواصل معي", url: "/contact" }
];

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/" class="flex items-center gap-3 overflow-hidden"> <img src="/assets/SalemLogo.avif" alt="Logo" class="w-10 h-10 rounded-md object-cover"> <div class="flex flex-col leading-tight"> <h2 class="text-lg font-bold font-arabic text-gray-900 dark:text-white truncate"> <img src="/assets/logo-light.avif"${addAttribute(SiteConfig.AppName, "alt")} class="block dark:hidden h-8" loading="lazy"> <img src="/assets/logo-dark.avif"${addAttribute(SiteConfig.AppName, "alt")} class="hidden dark:block h-8" loading="lazy"> </h2> <p class="text-xs font-kunkun text-gray-600 dark:text-white mt-0.5"> ${SiteConfig.About} </p> </div> </a>`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/Logo.astro", void 0);

function ThemeToggle() {
  const [dark, setDark] = useState(
    () => typeof window !== "undefined" ? localStorage.theme === "dark" || !localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches : false
  );
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("transition-colors", "duration-500");
    root.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => setDark(!dark),
      className: "p-2 text-zinc-900 dark:text-white",
      "aria-label": "Toggle Theme",
      children: dark ? /* @__PURE__ */ jsx(Sun, { size: 20 }) : /* @__PURE__ */ jsx(Moon, { size: 20 })
    }
  );
}

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ThemeToggleRaect", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/React/ThemeToggle", "client:component-export": "default" })}`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/ThemeToggle.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="relative bg-white dark:bg-zinc-900 flex justify-between items-center p-4 mb-5 rounded-md shadow-sm" role="banner"> <div class="text-xl font-bold"> ${renderComponent($$result, "Logo", $$Logo, {})} </div> <div class="flex items-center gap-1"> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} <button id="menu-btn" class="hamburger relative w-6 h-[18px] cursor-pointer text-base font-medium" aria-controls="menu" aria-expanded="false" aria-label="Toggle main navigation"> <span class="absolute left-0 w-full h-[2px] bg-black dark:bg-white transition-all duration-300 ease-in-out"></span> <span class="absolute left-0 w-full h-[2px] bg-black dark:bg-white transition-all duration-300 ease-in-out"></span> <span class="absolute left-0 w-full h-[2px] bg-black dark:bg-white transition-all duration-300 ease-in-out"></span> </button> <nav id="menu" class="menu flex flex-col items-start px-4 py-4 space-y-2 text-base font-medium shadow-md bg-white dark:bg-zinc-900" aria-label="Main navigation"> ${navbarLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} class="block py-2 text-gray-700 dark:text-white hover:text-brand-dark"> ${link.title} </a>`)} </nav> </div> ${renderScript($$result, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/Header.astro?astro&type=script&index=0&lang.ts")} </header>`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/Header.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="p-6 mx-auto max-w-full md:max-w-[50%] flex flex-col gap-8"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/Main.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.salem-des.com/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="ar" dir="rtl" class="h-full min-h-screen"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="generator"', ">", '<meta name="google-site-verification" content="hW2KDYTgX6SOtk2ZGFyKtJdoVUg_DoRCdtZvEw9vYhI"><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-J6JVCYTGEY"><\/script>', '<!-- VERY IMPORTANT: allow pages to inject their own SEO here --><script defer data-domain="salem-des.com" src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.tagged-events.js"><\/script>', "", '</head> <body class="min-h-screen bg-gray-100 text-gray-900 dark:bg-zinc-800 dark:text-white font-kunkun"> ', " </body></html>"])), addAttribute(Astro2.generator, "content"), renderSlot($$result, $$slots["head"]), renderScript($$result, "H:/Salem-Desv6/SalemPortfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "H:/Salem-Desv6/SalemPortfolio/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts"), renderHead(), renderComponent($$result, "Main", $$Main, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Footer", $$Footer, {})} ` }));
}, "H:/Salem-Desv6/SalemPortfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $, SiteConfig as S };
