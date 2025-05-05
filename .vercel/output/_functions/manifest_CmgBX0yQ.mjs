import 'kleur/colors';
import { h as decodeKey } from './chunks/astro/server_BFfUKFoZ.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Cn2Y7M2a.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///H:/Salem-Desv6/SalemPortfolio/","cacheDir":"file:///H:/Salem-Desv6/SalemPortfolio/node_modules/.astro/","outDir":"file:///H:/Salem-Desv6/SalemPortfolio/dist/","srcDir":"file:///H:/Salem-Desv6/SalemPortfolio/src/","publicDir":"file:///H:/Salem-Desv6/SalemPortfolio/public/","buildClientDir":"file:///H:/Salem-Desv6/SalemPortfolio/dist/client/","buildServerDir":"file:///H:/Salem-Desv6/SalemPortfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.C7fCh4Ec.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/posts","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/posts\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/posts.ts","pathname":"/api/posts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.C7fCh4Ec.css"}],"routeData":{"route":"/blogs/page/[page]","isIndex":false,"type":"page","pattern":"^\\/blogs\\/page\\/([^/]+?)\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}],[{"content":"page","dynamic":false,"spread":false}],[{"content":"page","dynamic":true,"spread":false}]],"params":["page"],"component":"src/pages/blogs/page/[page].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.C7fCh4Ec.css"}],"routeData":{"route":"/blogs/[slug]","isIndex":false,"type":"page","pattern":"^\\/blogs\\/([^/]+?)\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blogs/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.C7fCh4Ec.css"}],"routeData":{"route":"/blogs","isIndex":true,"type":"page","pattern":"^\\/blogs\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/index.astro","pathname":"/blogs","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.C7fCh4Ec.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.C7fCh4Ec.css"}],"routeData":{"route":"/portfolio/[slug]","isIndex":false,"type":"page","pattern":"^\\/portfolio\\/([^/]+?)\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/portfolio/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.C7fCh4Ec.css"}],"routeData":{"route":"/portfolio","isIndex":true,"type":"page","pattern":"^\\/portfolio\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/index.astro","pathname":"/portfolio","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.C7fCh4Ec.css"}],"routeData":{"route":"/services/[slug]","isIndex":false,"type":"page","pattern":"^\\/services\\/([^/]+?)\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/services/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.C7fCh4Ec.css"}],"routeData":{"route":"/services","isIndex":true,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.C7fCh4Ec.css"},{"type":"inline","content":".carousel-track[data-astro-cid-wb6eraa4]{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;gap:1rem;padding:1rem}.carousel-track[data-astro-cid-wb6eraa4]::-webkit-scrollbar{display:none}.testimonial-card[data-astro-cid-wb6eraa4]{scroll-snap-align:start;flex:0 0 100%;max-width:100%;box-sizing:border-box}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.salem-des.com/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["H:/Salem-Desv6/SalemPortfolio/src/pages/404.astro",{"propagation":"none","containsHead":true}],["H:/Salem-Desv6/SalemPortfolio/src/pages/blogs/index.astro",{"propagation":"none","containsHead":true}],["H:/Salem-Desv6/SalemPortfolio/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["H:/Salem-Desv6/SalemPortfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["H:/Salem-Desv6/SalemPortfolio/src/pages/portfolio/index.astro",{"propagation":"none","containsHead":true}],["H:/Salem-Desv6/SalemPortfolio/src/pages/services/[slug].astro",{"propagation":"in-tree","containsHead":true}],["H:/Salem-Desv6/SalemPortfolio/src/pages/services/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/services/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/services/index@_@astro",{"propagation":"in-tree","containsHead":false}],["H:/Salem-Desv6/SalemPortfolio/src/pages/blogs/[slug].astro",{"propagation":"none","containsHead":true}],["H:/Salem-Desv6/SalemPortfolio/src/pages/blogs/page/[page].astro",{"propagation":"none","containsHead":true}],["H:/Salem-Desv6/SalemPortfolio/src/pages/portfolio/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/api/posts@_@ts":"pages/api/posts.astro.mjs","\u0000@astro-page:src/pages/blogs/page/[page]@_@astro":"pages/blogs/page/_page_.astro.mjs","\u0000@astro-page:src/pages/blogs/index@_@astro":"pages/blogs.astro.mjs","\u0000@astro-page:src/pages/portfolio/index@_@astro":"pages/portfolio.astro.mjs","\u0000@astro-page:src/pages/services/[slug]@_@astro":"pages/services/_slug_.astro.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"pages/services.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/portfolio/[slug]@_@astro":"pages/portfolio/_slug_.astro.mjs","\u0000@astro-page:src/pages/blogs/[slug]@_@astro":"pages/blogs/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","H:/Salem-Desv6/SalemPortfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_UJU9ieZ2.mjs","H:\\Salem-Desv6\\SalemPortfolio\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","H:\\Salem-Desv6\\SalemPortfolio\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BUnbgq5R.mjs","\u0000@astrojs-manifest":"manifest_CmgBX0yQ.mjs","H:/Salem-Desv6/SalemPortfolio/src/components/astro/ContactForm.astro?astro&type=script&index=0&lang.ts":"_astro/ContactForm.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","H:/Salem-Desv6/SalemPortfolio/src/components/astro/ContactForm.astro?astro&type=script&index=1&lang.ts":"_astro/ContactForm.astro_astro_type_script_index_1_lang.COFF5GEr.js","H:/Salem-Desv6/SalemPortfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BpE00R2B.js","H:/Salem-Desv6/SalemPortfolio/src/components/astro/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.C3KmWGZf.js","@/components/React/RecentPosts":"_astro/RecentPosts.DM39vPIo.js","@/components/React/ThemeToggle":"_astro/ThemeToggle.olcasxOJ.js","@astrojs/react/client.js":"_astro/client.DyS41jpO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["H:/Salem-Desv6/SalemPortfolio/src/components/astro/ContactForm.astro?astro&type=script&index=0&lang.ts",""],["H:/Salem-Desv6/SalemPortfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)};"],["H:/Salem-Desv6/SalemPortfolio/src/components/astro/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"menu-btn\"),t=document.getElementById(\"menu\");e&&t&&e.addEventListener(\"click\",()=>{const n=e.getAttribute(\"aria-expanded\")===\"true\";e.setAttribute(\"aria-expanded\",String(!n)),e.classList.toggle(\"active\"),t.classList.toggle(\"show\")});"]],"assets":["/_astro/_slug_.C7fCh4Ec.css","/favicon.svg","/assets/favicon.ico","/assets/logo-dark.avif","/assets/logo-light.avif","/assets/SalemLogo.avif","/clients/1.avif","/clients/2.avif","/clients/3.avif","/clients/4.avif","/clients/5.avif","/clients/6.avif","/fonts/adobe-arabic-bold.ttf","/fonts/adobe-arabic-regular.ttf","/fonts/kunkun-arabic-bold.ttf","/fonts/kunkun-arabic-regular.ttf","/_astro/client.DyS41jpO.js","/_astro/ContactForm.astro_astro_type_script_index_1_lang.COFF5GEr.js","/_astro/createLucideIcon.uBAZnt_T.js","/_astro/index.BVOCwoKb.js","/_astro/RecentPosts.DM39vPIo.js","/_astro/ThemeToggle.olcasxOJ.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"auFuEAy57g8d2uZz6RAu0AkWC6m8vI5EZqEfTE63W4g="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
