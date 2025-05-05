import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BFfUKFoZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CTBwygtO.mjs';
import { c as createLucideIcon } from '../../chunks/createLucideIcon_CM_mid3N.mjs';
import { C as CalendarCheck } from '../../chunks/calendar-check_CGF1kKOW.mjs';
export { renderers } from '../../renderers.mjs';

const LaptopMinimalCheck = createLucideIcon("laptop-minimal-check", [["path", { "d": "M2 20h20" }], ["path", { "d": "m9 10 2 2 4-4" }], ["rect", { "x": "3", "y": "4", "width": "18", "height": "12", "rx": "2" }]]);

const MessageCircleCode = createLucideIcon("message-circle-code", [["path", { "d": "M10 9.5 8 12l2 2.5" }], ["path", { "d": "m14 9.5 2 2.5-2 2.5" }], ["path", { "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22z" }]]);

const User = createLucideIcon("user", [["path", { "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }], ["circle", { "cx": "12", "cy": "7", "r": "4" }]]);

async function getStaticPaths() {
  return [{ params: { slug: "ProjectSample" } }];
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const ProjectSample = {
    title: "\u062A\u0635\u0645\u064A\u0645 \u0648\u062A\u0637\u0648\u064A\u0631 \u0645\u0648\u0642\u0639 \u0634\u0631\u0643\u0629 \u062D\u0644\u0648\u0644 \u062A\u0642\u0646\u064A\u0629",
    description: "\u0645\u0634\u0631\u0648\u0639 \u0645\u062A\u0643\u0627\u0645\u0644 \u064A\u0634\u0645\u0644 \u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 \u0648\u062A\u0637\u0648\u064A\u0631 \u0645\u0648\u0642\u0639 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u062A\u062C\u0627\u0648\u0628 \u064A\u0639\u0631\u0636 \u062E\u062F\u0645\u0627\u062A \u0634\u0631\u0643\u0629 \u062D\u0644\u0648\u0644 \u062A\u0642\u0646\u064A\u0629.",
    coverImage: "https://picsum.photos/200/300?2",
    date: "2024-12-10",
    client: "\u0634\u0631\u0643\u0629 \u062D\u0644\u0648\u0644 \u062A\u0642\u0646\u064A\u0629",
    role: "\u0645\u0635\u0645\u0645 \u0648\u0627\u062C\u0647\u0627\u062A \u0648\u0645\u0637\u0648\u0651\u0631 \u0648\u0627\u062C\u0647\u0627\u062A \u0623\u0645\u0627\u0645\u064A\u0629",
    projectType: "\u0645\u0648\u0642\u0639 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS"
    ],
    toolsUsed: ["Figma", "Illustrator", "Visual Studio Code", "GitHub"]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": ProjectSample.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="text-right py-8"> <h1 class="text-4xl font-bold font-arabic leading-tight text-zinc-900"> ${ProjectSample.title} </h1> <p class="text-base mt-2 text-black">${ProjectSample.description}</p> </header> <main class="px-4 space-y-6"> <section class="text-black bg-zinc-200 p-5 rounded-md space-y-2"> <h2 class="text-3xl font-semibold font-arabic">ملخص المشروع</h2> <ul class="list-disc pr-5 space-y-1"> <li class="flex items-center gap-2"> ${renderComponent($$result2, "User", User, {})} <strong>العميل:</strong> ${ProjectSample.client} </li> <li class="flex items-center gap-2"> ${renderComponent($$result2, "MessageCircleCode", MessageCircleCode, {})} <strong>الدور:</strong> ${ProjectSample.role} </li> <li class="flex items-center gap-2"> ${renderComponent($$result2, "LaptopMinimalCheck", LaptopMinimalCheck, {})} <strong>نوع المشروع:</strong> ${ProjectSample.projectType} </li> <li class="flex items-center gap-2"> ${renderComponent($$result2, "CalendarCheck", CalendarCheck, {})} <strong>التاريخ:</strong> ${new Date(ProjectSample.date).toLocaleDateString()} </li> </ul> </section> <section class="text-black space-y-2"> <h2 class="text-xl font-semibold">التقنيات والأدوات</h2> <div class="flex flex-wrap gap-2"> ${ProjectSample.technologies.map((tech) => renderTemplate`<span class="border border-black px-3 py-1 text-sm rounded"> ${tech} </span>`)} </div> <div class="flex flex-wrap gap-2 mt-2"> ${ProjectSample.toolsUsed.map((tool) => renderTemplate`<span class="border border-black px-3 py-1 text-sm rounded"> ${tool} </span>`)} </div> </section> <div class="rounded-md overflow-hidden"> <img${addAttribute(ProjectSample.coverImage, "src")}${addAttribute(ProjectSample.title, "alt")} class="w-full h-72 object-cover" loading="lazy"> </div> </main> ` })}`;
}, "H:/Salem-Desv6/SalemPortfolio/src/pages/portfolio/[slug].astro", void 0);

const $$file = "H:/Salem-Desv6/SalemPortfolio/src/pages/portfolio/[slug].astro";
const $$url = "/portfolio/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
