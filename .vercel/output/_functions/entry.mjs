import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CecPHqct.mjs';
import { manifest } from './manifest_CmgBX0yQ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/api/posts.astro.mjs');
const _page4 = () => import('./pages/blogs/page/_page_.astro.mjs');
const _page5 = () => import('./pages/blogs/_slug_.astro.mjs');
const _page6 = () => import('./pages/blogs.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/portfolio/_slug_.astro.mjs');
const _page9 = () => import('./pages/portfolio.astro.mjs');
const _page10 = () => import('./pages/services/_slug_.astro.mjs');
const _page11 = () => import('./pages/services.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/api/posts.ts", _page3],
    ["src/pages/blogs/page/[page].astro", _page4],
    ["src/pages/blogs/[slug].astro", _page5],
    ["src/pages/blogs/index.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/portfolio/[slug].astro", _page8],
    ["src/pages/portfolio/index.astro", _page9],
    ["src/pages/services/[slug].astro", _page10],
    ["src/pages/services/index.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d26b4f50-4e8f-4f73-9130-913a369d155e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
