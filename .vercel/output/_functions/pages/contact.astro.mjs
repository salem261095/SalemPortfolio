import { a as createComponent, m as maybeRenderHead, e as renderComponent, f as renderScript, r as renderTemplate } from '../chunks/astro/server_BFfUKFoZ.mjs';
import 'kleur/colors';
import { $ as $$Layout, S as SiteConfig } from '../chunks/Layout_DKUeaqIP.mjs';
import { $ as $$SEO } from '../chunks/SEO_BTbY70n8.mjs';
import { $ as $$H2 } from '../chunks/H2_Dfheojfx.mjs';
import { c as createLucideIcon } from '../chunks/createLucideIcon_CM_mid3N.mjs';
import { $ as $$H1 } from '../chunks/H1_BoqP1JAE.mjs';
export { renderers } from '../renderers.mjs';

const Send = createLucideIcon("send", [["path", { "d": "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" }], ["path", { "d": "m21.854 2.147-10.94 10.939" }]]);

const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="px-4 py-12 rounded-2xl bg-zinc-200 dark:bg-zinc-900 text-zinc-900 dark:text-white"> ${renderComponent($$result, "H2", $$H2, { "text": "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u064A " })} <form class="space-y-4" aria-labelledby="contact-heading" onsubmit="handleSubmit(event)"> <input type="hidden" name="recaptcha"> <div class="mt-4"> <label for="name" class="block mb-1 text-sm">الاسم الكريم</label> <input type="text" id="name" name="name" autocomplete="name" placeholder="سالم محمد" class="w-full rounded-lg mt-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-gray-400 focus:outline-none" required> </div> <div class="mt-4"> <label for="email" class="block mb-1 text-sm">إيميل التواصل</label> <input type="email" id="email" name="email" autocomplete="email" placeholder="contact@salem-des.com" class="w-full rounded-lg mt-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-gray-400 focus:outline-none" required> </div> <div class="mt-4"> <label for="social" class="block mb-1 text-sm">حسابك على السوشال ميديا</label> <input type="text" id="social" name="social" placeholder="@salem" class="w-full rounded-lg mt-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-gray-400 focus:outline-none"> </div> <div class="mt-4"> <label for="details" class="block mb-1 text-sm">أي تفاصيل إضافية؟</label> <textarea id="details" name="details" placeholder="خل نتلكم في التفاصيل" rows="4" class="w-full rounded-xl px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-gray-400 focus:outline-none"></textarea> </div> <div class="mt-4"> <button type="submit" class="w-full flex justify-center gap-2 rounded-lg mt-2 dark:bg-zinc-950 dark:text-white bg-white text-zinc-900 py-2 font-medium hover:opacity-90 transition"> ${renderComponent($$result, "Send", Send, { "class": "w-5 h-5" })} إرسال
</button> </div> </form> <p class="text-center text-sm mt-4 text-gray-600 dark:text-zinc-400">
بإذن الله يتم الرد خلال يومين
</p> ${renderScript($$result, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/ContactForm.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/ContactForm.astro?astro&type=script&index=1&lang.ts")} </section>`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/ContactForm.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const AppName = SiteConfig.AppName;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SEO", $$SEO, { "title": "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u064A", "description": "\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u064A \u0644\u0623\u064A \u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u0623\u0648 \u0645\u0634\u0631\u0648\u0639 \u0639\u0628\u0631 \u0646\u0645\u0648\u0630\u062C \u0627\u0644\u0627\u062A\u0635\u0627\u0644.", "url": `${AppName}/contact`, "image": "/assets/og-image.png" })} ${renderComponent($$result2, "H1", $$H1, { "text": "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627" })} ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} ` })}`;
}, "H:/Salem-Desv6/SalemPortfolio/src/pages/contact.astro", void 0);

const $$file = "H:/Salem-Desv6/SalemPortfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
