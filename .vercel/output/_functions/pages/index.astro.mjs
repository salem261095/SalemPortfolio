import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderComponent, r as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_BFfUKFoZ.mjs';
import 'kleur/colors';
import { S as SiteConfig, $ as $$Layout } from '../chunks/Layout_DKUeaqIP.mjs';
import { c as createLucideIcon } from '../chunks/createLucideIcon_CM_mid3N.mjs';
import { $ as $$H2 } from '../chunks/H2_Dfheojfx.mjs';
/* empty css                                 */
/* empty css                                  */
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { CalendarCheck } from 'lucide-react';
import { $ as $$SEO } from '../chunks/SEO_BTbY70n8.mjs';
export { renderers } from '../renderers.mjs';

const CornerLeftDown = createLucideIcon("corner-left-down", [["polyline", { "points": "14 15 9 20 4 15" }], ["path", { "d": "M20 4h-7a4 4 0 0 0-4 4v12" }]]);

const MailPlus = createLucideIcon("mail-plus", [["path", { "d": "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }], ["path", { "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { "d": "M19 16v6" }], ["path", { "d": "M16 19h6" }]]);

const MessageCircle = createLucideIcon("message-circle", [["path", { "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }]]);

const $$Astro = createAstro("https://www.salem-des.com/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { link, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a rel="noopener noreferrer"${addAttribute(link, "href")} class="bg-gray-300 text-gray-900 border-gray-500  dark:bg-zinc-950 dark:border-black dark:text-white flex items-center gap-2 border-1 px-6 py-2 rounded-md transition duration-200 hover:opacity-90"> ${text} ${renderComponent($$result, "CornerLeftDown", CornerLeftDown, { "class": "w-5 h-5" })} </a>
<a`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/Button.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-6" aria-lable="الصفحة الرئيسية"> <h1 class="text-5xl md:text-5xl font-bold font-arabic text-gray-900 dark:text-white mb-3 md:mb-6">
أخلق تجربة بصرية مُلهمة وأطوّر حضورك الرقمي
</h1> <p class="text-lg text-gray-600 dark:text-white leading-loose font-kunkun">
أساعدك على تقديم تجربة رقمية متكاملة تجمع بين تصميم العلامة، تطوير المواقع،
    وإبراز ظهورك على المنصات الرقمية من خلال إبداع بصري لا يُنسى.
</p> <div class="my-6 flex flex-col-reverse md:flex-row flex-wrap gap-4 font-kunkun font-bold"> ${renderComponent($$result, "Button", $$Button, { "link": "/portfolio", "text": "\u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644" })} <a${addAttribute(`https://wa.me/${SiteConfig.contact.whatsapp}`, "href")} target="_blank" rel="noopener noreferrer" class="bg-green-600 text-white px-6 py-2 rounded-md flex items-center gap-2 transition duration-200 hover:opacity-90 hover:shadow-md"> ${renderComponent($$result, "MessageCircle", MessageCircle, { "class": "w-5 h-5" })}
تواصل معي
</a> </div> </section>`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/Hero.astro", void 0);

const WebProjects = [
	{
		title: "موقع شخصي / تجاري",
		description: "الجزء المرجح من خطتك التسويقية، بدونه إعلاناتك ",
		image: "https://picsum.photos/200/300?1",
		link: "#service1"
	},
	{
		title: "بناء مشروعك الاستشاري",
		description: "العمل على تحديد تخصصك + عمل الموقع لمشاركته مع العالم وعرض خدماتك + تدريبك ",
		image: "https://picsum.photos/200/300?2",
		link: "#service2"
	},
	{
		title: "منصة استشارية / تدريبية",
		description: "توسيع في بيع أفكارك، خدماتك ومنتجاتك",
		image: "https://picsum.photos/200/300?3",
		link: "#service3"
	},
	{
		title: "تسويق الخبرات",
		description: "حاليا محجوزة بالكامل. تواصل معي لتنضم الى قائمة الانتظار",
		image: "https://picsum.photos/200/300?4",
		link: "#service4"
	}
];

const $$WebProject = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section aria-label="مشاريع تطوير الويب" class="py-12 px-4"> ${renderComponent($$result, "H2", $$H2, { "text": "\u0645\u0634\u0627\u0631\u064A\u0639 \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628" })} <div class="grid grid-cols-1 sm:grid-cols-2 gap-6"> ${WebProjects.map((WebProject) => renderTemplate`<article class="bg-white border border-zinc-300 text-black dark:bg-zinc-900 dark:border-zinc-800 dark:text-white rounded-xl p-2 hover:scale-[1.01] transition-all flex flex-col focus-within:ring-2 focus-within:ring-brand"> <a${addAttribute(WebProject.link, "href")}${addAttribute(`\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639: ${WebProject.title}`, "aria-label")} class="focus:outline-none"> <div class="rounded-lg overflow-hidden mb-4"> <img${addAttribute(WebProject.image, "src")}${addAttribute(WebProject.title, "alt")} width="400" height="160" class="w-full h-40 object-cover" loading="lazy"> </div> <div class="px-2"> <h3 class="text-2xl font-bold mb-2 font-arabic"> ${WebProject.title} </h3> <p class="text-sm text-zinc-800 dark:text-white leading-relaxed"> ${WebProject.description} </p> </div> </a> </article>`)} </div> <div class="pt-4 text-center inline-block"> ${renderComponent($$result, "Button", $$Button, { "link": "#portfolio", "text": "\u0639\u0631\u0636 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639" })} </div> </section>`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/WebProject.astro", void 0);

const $$GraphicProject = createComponent(($$result, $$props, $$slots) => {
  const GraphicProjects = [
    {
      image: "https://picsum.photos/400/250?7",
      name: "\u062F. \u0634\u0639\u0627\u0639 \u062F\u0631\u062F\u0648\u0645",
      link: "/"
    },
    {
      image: "https://picsum.photos/400/250?5",
      name: "\u0625\u064A\u0627\u0646 \u0627\u0644\u0644\u0648\u0627\u064A",
      link: "/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-12 px-5 space-y-6" aria-label="مشاريع التصميم"> ${renderComponent($$result, "H2", $$H2, { "text": "\u0645\u0634\u0627\u0631\u064A\u0639 \u062A\u0635\u0627\u0645\u064A\u0645 \u0627\u0644\u062C\u0631\u0627\u0641\u064A\u0643" })} ${GraphicProjects.map((GraphicProject) => renderTemplate`<article> <a${addAttribute(GraphicProject.link, "href")} class="relative block overflow-hidden rounded-lg bg-zinc-100 hover:shadow-md hover:scale-[1.01] transition-all"${addAttribute(`\u062A\u0641\u0627\u0635\u064A\u0644 ${GraphicProject.name}`, "aria-label")}> <img${addAttribute(GraphicProject.image, "src")}${addAttribute(GraphicProject.name, "alt")} width="400" height="250" loading="lazy" class="w-full h-auto object-cover"> <span class="absolute bottom-4 right-4 bg-gray-900 text-white text-sm px-4 py-1 rounded-md"> ${GraphicProject.name} </span> </a> </article>`)} <div class="pt-4 text-center inline-block"> ${renderComponent($$result, "Button", $$Button, { "link": "#portfolio", "text": "\u0639\u0631\u0636 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639" })} </div> </section>`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/GraphicProject.astro", void 0);

const testimonialsData = [
	{
		Title: "عبدالرحمن العتيبي",
		testimonialPosition: "مطعم أصايل المملكة",
		content: "سالم ماشاء الله عليه شخص محترف في شغله ومتمكن والأهم أنه صبور, اشتغلت وياه هوية بصرية كاملة لمطعمنا وكانت النتيجة خرافي ولازلت اتعامل معه",
		url: "/"
	},
	{
		Title: "أحمد صالح أبوعمر",
		testimonialPosition: "منسق جمعية خيرية بمكة",
		content: "الأخ سالم قوقح نعم الأخ مصمم محترف له لمسات مميزة جدا هذا من حيث القدرة  صبور يفهم طلب العميل ويعطيها افضل مما يريد يهتم برضى العميل تعاملي معه أكثر من يزيد عن 6 أو 5 سنوات يسلمنا الأعمال غالبا في الوقت المحدد أنصح به جدا  وكل الشكر لك على جهودك معنا",
		url: "/"
	},
	{
		Title: "سمر ياسين",
		testimonialPosition: "متجر دكان أثر",
		content: "الاستاذ سالم اشتغلت معاه فترة صممت وياه التقويم وبعض منتجات المتجر الشغل احترافي والصمم فاهم وش يسوي وملتزم بموعد التسليم",
		url: "https://www.instagram.com/dokkan_athr/"
	},
	{
		Title: "ابوحمزة بن خالد",
		testimonialPosition: "مطعم برقر حساوي",
		content: "طلبت من هذا المصم البكج مال المطعم والشغل كان عالمي وقعد يتابعني حتى اثناء الطباعة الله يجزاه خير ويبارك له",
		url: "/"
	},
	{
		Title: "سمية محمد",
		testimonialPosition: "متجر عطور ماركة",
		content: "ماشاء الله المصمم سالم عنده ذوق وخبرة في الافكار عملنا تصاميم حملة لأحد منتجاتنا وكانت النتيجة رهيبة أتمنى اشتغل وياه مستقبلا",
		url: "/"
	},
	{
		Title: "ابو فهد الزهراني",
		testimonialPosition: "موقع فندق الريان بالرياض",
		content: "المبرمج اشتغل لنا موقع الشركة WordPress + Next Js الموقع ماشاء الله كان سريع بشكل رهيبة والارشفة كانت ممتازة باختصار اخترنا الشخص المناسب",
		url: "/"
	},
	{
		Title: "الدكتور ابراهيم بن مالك",
		testimonialPosition: "موقع متسشقى الرعاية الطبي بالمدينة",
		content: "المشروع كان عبارة عن موقع تعريفي وخدمي للمتسشفى والمبرمج بشكل احترافي اقترح علينا خيارات العمل واخترنا العمل على الوردبرس ومكتبة Astro وكان الموقع ممتاز ومنظم من ناحية التصميم اما الاداء فقد اثبتت الارقام في Google Insight قوة المبرمج",
		url: "/"
	}
];

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full max-w-xl mx-auto py-8 text-center" data-astro-cid-wb6eraa4> ${renderComponent($$result, "H2", $$H2, { "text": "\u0627\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621", "data-astro-cid-wb6eraa4": true })} <div id="carousel" class="carousel-track" data-astro-cid-wb6eraa4> ${testimonialsData.map((testi) => renderTemplate`<div class="testimonial-card border rounded-lg p-6 bg-white dark:bg-zinc-900 dark:border-zinc-950" data-astro-cid-wb6eraa4> <p data-astro-cid-wb6eraa4>${unescapeHTML(testi.content)}</p> <div class="mt-6" data-astro-cid-wb6eraa4> <a${addAttribute(testi.url, "href")} class="font-bold" data-astro-cid-wb6eraa4>${testi.Title}</a> <p class="text-sm mt-2 text-gray-500 dark:text-white" data-astro-cid-wb6eraa4> ${testi.testimonialPosition} </p> </div> </div>`)} </div> </section>`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/testimonials.astro", void 0);

const ServicesData = [
    {
        id: 1,
        icon: "PenTool",
        title: "تصميم الهوية البصرية والعلامات التجارية",
        description: "تصميم هوية متكاملة تعبر عن علامتك التجارية بلمسة احترافية",
        cta: {
            text: "ناقش تفاصيل المشروع",
            link: "https://wa.me/967775657617?text=تصميم الهوية البصرية والعلامات التجارية",
        },
    },
    {
        id: 2,
        icon: "Code",
        title: "تصميم وتطوير المواقع الإلكترونية",
        description: "تطوير مواقع تفاعلية تلبي احتياجات عملك وتعزز حضورك الرقمي",
        cta: {
            text: "استفسر عن الخيارات المتاحة",
            link: "https://wa.me/967775657617?text=تصميم وتطوير المواقع الإلكترونية",
        },
    },
    {
        id: 3,
        icon: "Rocket",
        title: "تعزيز الحضور الرقمي وإدارة السوشال ميديا",
        description: "إدارة احترافية لوسائل التواصل الاجتماعي لتعزيز تواجدك الرقمي.",
        cta: {
            text: "ناقش تفاصيل المشروع",
            link: "https://wa.me/967775657617?text=تعزيز الحضور الرقمي وإدارة السوشال ميديا",
        },
    },
    {
        id: 4,
        icon: "Shirt",
        title: "إنشاء وتطوير المتاجر الإلكترونية",
        description: "حلول مبتكرة لتطوير منصات المتاجر الإلكترونية سلة وزد وشوبيفاي.",
        cta: {
            text: "اعرض فكرتك",
            link: "https://wa.me/967775657617?text=إنشاء وتطوير حلول التجارة الإلكترونية",
        },
    },
];

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section aria-label="\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0648\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628" class="py-4"> ', ' <div class="max-w-full mx-auto space-y-2 md:space-y-4"> ', ' </div> </section> <script type="module">\n  function toggle(index) {\n    const panel = document.getElementById(`panel-${index}`);\n    const icon = document.getElementById(`icon-${index}`);\n    const button = document.getElementById(`button-${index}`);\n    const isCollapsed = panel.classList.contains("max-h-0");\n\n    if (isCollapsed) {\n      panel.classList.remove("max-h-0", "opacity-0", "pb-0");\n      panel.classList.add("max-h-96", "opacity-100", "pb-4");\n      icon.textContent = "\u2212";\n    } else {\n      panel.classList.remove("max-h-96", "opacity-100", "pb-4");\n      panel.classList.add("max-h-0", "opacity-0", "pb-0");\n      icon.textContent = "+";\n    }\n\n    button.setAttribute("aria-expanded", String(isCollapsed));\n  }\n\n  window.toggle = toggle;\n<\/script>'], ["", '<section aria-label="\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0648\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628" class="py-4"> ', ' <div class="max-w-full mx-auto space-y-2 md:space-y-4"> ', ' </div> </section> <script type="module">\n  function toggle(index) {\n    const panel = document.getElementById(\\`panel-\\${index}\\`);\n    const icon = document.getElementById(\\`icon-\\${index}\\`);\n    const button = document.getElementById(\\`button-\\${index}\\`);\n    const isCollapsed = panel.classList.contains("max-h-0");\n\n    if (isCollapsed) {\n      panel.classList.remove("max-h-0", "opacity-0", "pb-0");\n      panel.classList.add("max-h-96", "opacity-100", "pb-4");\n      icon.textContent = "\u2212";\n    } else {\n      panel.classList.remove("max-h-96", "opacity-100", "pb-4");\n      panel.classList.add("max-h-0", "opacity-0", "pb-0");\n      icon.textContent = "+";\n    }\n\n    button.setAttribute("aria-expanded", String(isCollapsed));\n  }\n\n  window.toggle = toggle;\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "H2", $$H2, { "text": "\u0627\u0628\u0631\u0632 \u0627\u0644\u062E\u062F\u0645\u0627\u062A" }), ServicesData.map((service, index) => renderTemplate`<div class="border border-black rounded-md bg-white dark:bg-zinc-900 hover:shadow-md overflow-hidden transition-all duration-300"> <button class="w-full flex justify-between items-center p-4 text-right"${addAttribute(`toggle(${index})`, "onclick")} aria-expanded="false"${addAttribute(`panel-${index}`, "aria-controls")}${addAttribute(`button-${index}`, "id")}> <h3 class="text-2xl font-bold font-arabic">${service.title}</h3> <span${addAttribute(`icon-${index}`, "id")} class="font-bold">
+
</span> </button> <div${addAttribute(`panel-${index}`, "id")} class="max-h-0 opacity-0 overflow-hidden px-4 pb-0 text-right space-y-2 transition-all duration-300 ease-in-out" role="region"${addAttribute(`button-${index}`, "aria-labelledby")}> <p>${service.description}</p> <a${addAttribute(service.cta.link, "href")} target="_blank" rel="noopener noreferrer" class="bg-gray-300 text-gray-900 border-gray-500 dark:bg-zinc-950 dark:border-black dark:text-white inline-flex items-center gap-2 border px-6 py-2 rounded-md transition duration-200 hover:opacity-90"> ${service.cta.text} </a> </div> </div>`));
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/Services.astro", void 0);

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-zinc-700 dark:bg-zinc-400 dark:text-black text-white rounded-xl p-6 sm:px-10 sm:py-12 text-center" aria-label="call to action"> <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold font-arabic leading-tight">
جاهز لتحويل فكرتك إلى واقع؟
</h2> <p class="mt-2 text-base sm:text-lg text-gray-300 dark:text-black">
ابدأ رحلتك نحو تحويل فكرتك إلى مشروع ناجح يعكس شغفك.
</p> <a${addAttribute(`mailto:${SiteConfig.contact.email}`, "href")} class="inline-flex flex-wrap items-center justify-between mt-10 bg-white dark:bg-zinc-900 text-black dark:text-white rounded-full px-6 py-3 font-sans text-md md:text-xl font-bold hover:opacity-90 transition"> ${SiteConfig.contact.email} <span class="mr-2 inline-block bg-gray-200 dark:zinc-950 text-white dark:text-black rounded-lg px-1 md:px-2 py-1"> ${renderComponent($$result, "MailPlus", MailPlus, { "class": "text-black" })} </span> </a> </section>`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/CallToAction.astro", void 0);

const logos = [
  { src: "/clients/1.avif", alt: "Client Logo 1" },
  { src: "/clients/2.avif", alt: "Client Logo 2" },
  { src: "/clients/3.avif", alt: "Client Logo 3" },
  { src: "/clients/4.avif", alt: "Client Logo 4" },
  { src: "/clients/5.avif", alt: "Client Logo 5" },
  { src: "/clients/6.avif", alt: "Client Logo 6" }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$LogoCarousel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="relative w-[90vw] md:w-[46vw] mx-auto py-8 overflow-hidden dark:bg-zinc-300 dark:rounded-md" dir="ltr"> <div class="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-100 via-gray-100 dark:from-zinc-300 dark:via-zinc-300 to-transparent z-10"></div> <div class="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-100 via-gray-100 to-transparent dark:from-zinc-300 dark:via-zinc-300 z-10"></div> <div id="logo-carousel-track" class="flex gap-7 w-max grayscale opacity-50 dark:opacity-70" style="transform: translateX(0)"> ', ' </div> <script>\n    const track = document.getElementById("logo-carousel-track");\n    let offset = 0;\n    const speed = 1.0;\n\n    function animate() {\n      offset -= speed;\n      track.style.transform = `translateX(${offset}px)`;\n\n      const first = track.children[0];\n      const firstStyle = getComputedStyle(first);\n      const firstWidth =\n        first.offsetWidth + parseFloat(firstStyle.marginRight || 0);\n\n      if (Math.abs(offset) >= firstWidth) {\n        track.appendChild(first);\n        offset += firstWidth;\n        track.style.transform = `translateX(${offset}px)`;\n      }\n\n      requestAnimationFrame(animate);\n    }\n\n    requestAnimationFrame(animate);\n  <\/script> </div>'], ["", '<div class="relative w-[90vw] md:w-[46vw] mx-auto py-8 overflow-hidden dark:bg-zinc-300 dark:rounded-md" dir="ltr"> <div class="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-100 via-gray-100 dark:from-zinc-300 dark:via-zinc-300 to-transparent z-10"></div> <div class="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-100 via-gray-100 to-transparent dark:from-zinc-300 dark:via-zinc-300 z-10"></div> <div id="logo-carousel-track" class="flex gap-7 w-max grayscale opacity-50 dark:opacity-70" style="transform: translateX(0)"> ', ' </div> <script>\n    const track = document.getElementById("logo-carousel-track");\n    let offset = 0;\n    const speed = 1.0;\n\n    function animate() {\n      offset -= speed;\n      track.style.transform = \\`translateX(\\${offset}px)\\`;\n\n      const first = track.children[0];\n      const firstStyle = getComputedStyle(first);\n      const firstWidth =\n        first.offsetWidth + parseFloat(firstStyle.marginRight || 0);\n\n      if (Math.abs(offset) >= firstWidth) {\n        track.appendChild(first);\n        offset += firstWidth;\n        track.style.transform = \\`translateX(\\${offset}px)\\`;\n      }\n\n      requestAnimationFrame(animate);\n    }\n\n    requestAnimationFrame(animate);\n  <\/script> </div>'])), maybeRenderHead(), logos.map((logo) => renderTemplate`<img${addAttribute(logo.src, "src")}${addAttribute(logo.alt, "alt")} class="h-7 w-auto shrink-0" loading="lazy">`));
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/LogoCarousel.astro", void 0);

function RecentPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "mt-2 space-y-4", children: posts.map((post) => {
    const excerptText = post.excerpt.replace(/<[^>]+>/g, "");
    const shortExcerpt = excerptText.length > 120 ? excerptText.slice(0, 120) + "..." : excerptText;
    return /* @__PURE__ */ jsxs(
      "article",
      {
        className: "flex flex-col md:flex-row items-start gap-4 hover:bg-white dark:hover:bg-zinc-900 p-4 rounded-xl shadow hover:shadow-md transition",
        children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `/blogs/${post.uri.replaceAll("/", "")}`,
              className: "block md:w-[9.5rem] w-full h-[7.125rem] rounded-md overflow-hidden",
              "aria-label": `Read more: ${post.title}`,
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: post.featuredImage?.node.sourceUrl || "/fallback.jpg",
                  alt: post.featuredImage?.node.altText || post.title,
                  className: "w-full h-full object-cover",
                  loading: "lazy"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-2 font-arabic", children: post.title }),
            /* @__PURE__ */ jsxs(
              "time",
              {
                dateTime: post.date,
                className: "text-xs font-bold font-sans text-gray-900 dark:text-white mb-1 flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsx(CalendarCheck, { className: "w-4 h-4 text-gray-500 dark:text-zinc-300" }),
                  new Date(post.date).toLocaleDateString("ar-EG", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })
                ]
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-zinc-300 leading-relaxed", children: shortExcerpt })
          ] })
        ]
      },
      post.uri
    );
  }) });
}

const $$Blogs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-12 px-4 max-w-screen-xl mx-auto space-y-6"> ${renderComponent($$result, "H2", $$H2, { "text": "\u0627\u0644\u0645\u062F\u0648\u0646\u0629" })} <p>مقالات وكتب أثْرتني، أشارككم خــلاصة بعض الأفكار والإلهام</p> ${renderComponent($$result, "RecentPosts", RecentPosts, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/React/RecentPosts", "client:component-export": "default" })} <div class="pt-4 text-center inline-block"> ${renderComponent($$result, "Button", $$Button, { "link": "/blogs", "text": "\u0627\u0646\u062A\u0642\u0644 \u0644\u0644\u0645\u062F\u0648\u0646\u0629" })} </div> </section>`;
}, "H:/Salem-Desv6/SalemPortfolio/src/components/astro/Blogs.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const AppName = SiteConfig.AppName;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SEO", $$SEO, { "title": "\u0645\u0637\u0648\u0651\u0631 \u0648\u064A\u0628 \u0648\u0645\u0635\u0645\u0645 \u062C\u0631\u0627\u0641\u064A\u0643", "description": "\u0633\u0627\u0644\u0645 \u0642\u0648\u0642\u062D\u060C \u0645\u0635\u0645\u0645 \u062C\u0631\u0627\u0641\u064A\u0643 \u0648\u0645\u0637\u0648\u0651\u0631 \u0648\u064A\u0628 \u0628\u062E\u0628\u0631\u0629 +8 \u0633\u0646\u0648\u0627\u062A\u060C \u0633\u0627\u0647\u0645 \u0641\u064A \u062A\u0623\u0633\u064A\u0633 \u0647\u0648\u064A\u0627\u062A \u0628\u0635\u0631\u064A\u0629 \u0648\u0645\u0648\u0627\u0642\u0639 \u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0644\u0645\u0624\u0633\u0633\u0627\u062A \u0648\u0645\u0634\u0627\u0631\u064A\u0639 \u0639\u0631\u0628\u064A\u0629.", "url": AppName, "image": "/assets/og-image.png" })} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "LogoCarousel", $$LogoCarousel, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "WebProject", $$WebProject, {})} ${renderComponent($$result2, "GraphicProject", $$GraphicProject, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Blogs", $$Blogs, {})} ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} ` })}`;
}, "H:/Salem-Desv6/SalemPortfolio/src/pages/index.astro", void 0);

const $$file = "H:/Salem-Desv6/SalemPortfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
