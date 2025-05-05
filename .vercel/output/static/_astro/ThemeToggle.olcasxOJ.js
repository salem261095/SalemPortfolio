import{c as s,j as t}from"./createLucideIcon.uBAZnt_T.js";import{r as a}from"./index.BVOCwoKb.js";/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],r=s("moon",n);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],i=s("sun",d);function h(){const[e,c]=a.useState(()=>typeof window<"u"?localStorage.theme==="dark"||!localStorage.theme&&window.matchMedia("(prefers-color-scheme: dark)").matches:!1);return a.useEffect(()=>{const o=document.documentElement;o.classList.add("transition-colors","duration-500"),o.classList.toggle("dark",e),localStorage.theme=e?"dark":"light"},[e]),t.jsx("button",{onClick:()=>c(!e),className:"p-2 text-zinc-900 dark:text-white","aria-label":"Toggle Theme",children:e?t.jsx(i,{size:20}):t.jsx(r,{size:20})})}export{h as default};
