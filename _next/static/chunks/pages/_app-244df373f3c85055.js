(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4705:function(e,t,n){"use strict";n.d(t,{f:function(){return s},F:function(){return a}});var r=n(7378),o=n(8038);const i=(0,r.createContext)({setTheme:e=>{},themes:[]}),a=()=>(0,r.useContext)(i),c=["light","dark"],l="(prefers-color-scheme: dark)",s=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:o=!0,storageKey:a="theme",themes:s=["light","dark"],defaultTheme:p=(n?"system":"light"),attribute:h="data-theme",value:y,children:v})=>{const[g,b]=(0,r.useState)((()=>d(a,p))),[w,E]=(0,r.useState)((()=>d(a))),S=y?Object.values(y):s,x=(0,r.useCallback)((t=>{const n=f(t);E(n),"system"!==g||e||j(n,!1)}),[g,e]),_=(0,r.useRef)(x);_.current=x;const j=(0,r.useCallback)(((e,r=!0,o=!0)=>{let i=(null==y?void 0:y[e])||e;const c=t&&o?m():null;if(r)try{localStorage.setItem(a,e)}catch(e){}if("system"===e&&n){const e=f();i=(null==y?void 0:y[e])||e}if(o){const e=document.documentElement;"class"===h?(e.classList.remove(...S),e.classList.add(i)):e.setAttribute(h,i),null==c||c()}}),[]);(0,r.useEffect)((()=>{const e=function(){return _.current(...[].slice.call(arguments))},t=window.matchMedia(l);return t.addListener(e),e(t),()=>t.removeListener(e)}),[]);const O=(0,r.useCallback)((t=>{e?j(t,!0,!1):j(t),b(t)}),[e]);return(0,r.useEffect)((()=>{const e=e=>{e.key===a&&O(e.newValue||p)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[O]),(0,r.useEffect)((()=>{if(!o)return;let t=e&&c.includes(e)?e:g&&c.includes(g)?g:"system"===g&&w||null;document.documentElement.style.setProperty("color-scheme",t)}),[o,g,w,e]),r.createElement(i.Provider,{value:{theme:g,setTheme:O,forcedTheme:e,resolvedTheme:"system"===g?w:g,themes:n?[...s,"system"]:s,systemTheme:n?w:void 0}},r.createElement(u,{forcedTheme:e,storageKey:a,attribute:h,value:y,enableSystem:n,defaultTheme:p,attrs:S}),v)},u=(0,r.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,defaultTheme:a,value:c,attrs:s})=>{const u="class"===n?`var d=document.documentElement.classList;d.remove(${s.map((e=>`'${e}'`)).join(",")});`:"var d=document.documentElement;",d=(e,t)=>{e=(null==c?void 0:c[e])||e;const r=t?e:`'${e}'`;return"class"===n?`d.add(${r})`:`d.setAttribute('${n}', ${r})`},m="system"===a;return r.createElement(o.default,null,r.createElement("script",e?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){${u}${d(e)}}()`}}:i?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try {${u}var e=localStorage.getItem('${t}');${m?"":d(a)+";"}if("system"===e||(!e&&${m})){var t="${l}",m=window.matchMedia(t);m.media!==t||m.matches?${d("dark")}:${d("light")}}else if(e) ${c?`var x=${JSON.stringify(c)};`:""}${d(c?"x[e]":"e",!0)}}catch(e){}}()`}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try{${u}var e=localStorage.getItem("${t}");if(e){${c?`var x=${JSON.stringify(c)};`:""}${d(c?"x[e]":"e",!0)}}else{${d(a)};}}catch(t){}}();`}}))}),((e,t)=>e.forcedTheme===t.forcedTheme)),d=(e,t)=>{if("undefined"==typeof window)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},m=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},f=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},4284:function(e,t,n){"use strict";e.exports=n.g.process||n(6118)},5385:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9945)}])},6055:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(4246),o=n(8038),i=n(7378),a=JSON.parse('{"TN":"ACME Storefront | Powered by Next.js Commerce","_r":"%s - ACME Storefront","WL":"Next.js Commerce - https://www.nextjs.org/commerce","Vb":{"TN":"ACME Storefront | Powered by Next.js Commerce","WL":"Next.js Commerce - https://www.nextjs.org/commerce","dt":"website","HQ":"https://nextjs.org/commerce","rR":"Next.js Commerce","Wc":[{"url":"/card.png","width":"800","height":"600","alt":"Next.js Commerce"}]},"km":{"pr":"@nextjs","lz":"@nextjs","Iw":"summary_large_image"}}'),c=n(4284),l=c.env.NEXT_PUBLIC_STORE_URL||c.env.NEXT_PUBLIC_VERCEL_URL,s=l?"https://".concat(l):null,u=function(e,t){var n=e.url,o=e.width,a=e.height,c=e.alt,l=s?new URL(n,s).toString():n;return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)("meta",{property:"og:image",content:l},"og:image:url:".concat(t)),(0,r.jsx)("meta",{property:"og:image:width",content:o},"og:image:width:".concat(t)),(0,r.jsx)("meta",{property:"og:image:height",content:a},"og:image:height:".concat(t)),(0,r.jsx)("meta",{property:"og:image:alt",content:c},"og:image:alt:".concat(t))]},"og:image:".concat(t))},d=function(e){var t,n,i,c,l,s,d,m,f,p,h=e.title,y=e.description,v=e.openGraph,g=e.robots,b=e.children;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:h?"".concat(a._r.replace(/%s/g,h)):a.TN},"title"),(0,r.jsx)("meta",{name:"description",content:y||a.WL},"description"),(0,r.jsx)("meta",{property:"og:type",content:null!==(n=null===v||void 0===v?void 0:v.type)&&void 0!==n?n:a.Vb.dt},"og:type"),(0,r.jsx)("meta",{property:"og:title",content:null!==(l=null!==(c=null!==(i=null===v||void 0===v?void 0:v.title)&&void 0!==i?i:a.Vb.TN)&&void 0!==c?c:h)&&void 0!==l?l:a.TN},"og:title"),(0,r.jsx)("meta",{property:"og:description",content:null!==(m=null!==(d=null!==(s=null===v||void 0===v?void 0:v.description)&&void 0!==s?s:a.Vb.WL)&&void 0!==d?d:y)&&void 0!==m?m:a.WL},"og:description"),(0,r.jsx)("meta",{property:"og:site_name",content:null!==(f=null===v||void 0===v?void 0:v.site_name)&&void 0!==f?f:a.Vb.rR},"og:site_name"),(0,r.jsx)("meta",{property:"og:url",content:null!==(p=null===v||void 0===v?void 0:v.url)&&void 0!==p?p:a.Vb.HQ},"og:url"),(null===v||void 0===v?void 0:v.locale)&&(0,r.jsx)("meta",{property:"og:locale",content:v.locale},"og:locale"),(null===v||void 0===v||null===(t=v.images)||void 0===t?void 0:t.length)?v.images.map((function(e,t){return u(e,t)})):u(a.Vb.Wc[0],0),a.km.Iw&&(0,r.jsx)("meta",{name:"twitter:card",content:a.km.Iw},"twitter:card"),a.km.lz&&(0,r.jsx)("meta",{name:"twitter:site",content:a.km.lz},"twitter:site"),a.km.pr&&(0,r.jsx)("meta",{name:"twitter:creator",content:a.km.pr},"twitter:creator"),(0,r.jsx)("meta",{name:"robots",content:null!==g&&void 0!==g?g:"index,follow"},"robots"),(0,r.jsx)("meta",{name:"googlebot",content:null!==g&&void 0!==g?g:"index,follow"},"googlebot"),b]})}},9716:function(e,t,n){"use strict";n.d(t,{l8:function(){return p},DA:function(){return h}});var r=n(4246),o=n(7378),i=n(4705);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u={displaySidebar:!1,displayDropdown:!1,displayModal:!1,modalView:"LOGIN_VIEW",sidebarView:"CART_VIEW",userAvatar:""},d=o.createContext(u);function m(e,t){switch(t.type){case"OPEN_SIDEBAR":return l({},e,{displaySidebar:!0});case"CLOSE_SIDEBAR":return l({},e,{displaySidebar:!1});case"OPEN_DROPDOWN":return l({},e,{displayDropdown:!0});case"CLOSE_DROPDOWN":return l({},e,{displayDropdown:!1});case"OPEN_MODAL":return l({},e,{displayModal:!0,displaySidebar:!1});case"CLOSE_MODAL":return l({},e,{displayModal:!1});case"SET_MODAL_VIEW":return l({},e,{modalView:t.view});case"SET_SIDEBAR_VIEW":return l({},e,{sidebarView:t.view});case"SET_USER_AVATAR":return l({},e,{userAvatar:t.value})}}d.displayName="UIContext";var f=function(e){var t=s(o.useReducer(m,u),2),n=t[0],i=t[1],a=(0,o.useCallback)((function(){return i({type:"OPEN_SIDEBAR"})}),[i]),c=(0,o.useCallback)((function(){return i({type:"CLOSE_SIDEBAR"})}),[i]),f=(0,o.useCallback)((function(){return n.displaySidebar?i({type:"CLOSE_SIDEBAR"}):i({type:"OPEN_SIDEBAR"})}),[i,n.displaySidebar]),p=(0,o.useCallback)((function(){return n.displaySidebar&&i({type:"CLOSE_SIDEBAR"})}),[i,n.displaySidebar]),h=(0,o.useCallback)((function(){return i({type:"OPEN_DROPDOWN"})}),[i]),y=(0,o.useCallback)((function(){return i({type:"CLOSE_DROPDOWN"})}),[i]),v=(0,o.useCallback)((function(){return i({type:"OPEN_MODAL"})}),[i]),g=(0,o.useCallback)((function(){return i({type:"CLOSE_MODAL"})}),[i]),b=(0,o.useCallback)((function(e){return i({type:"SET_USER_AVATAR",value:e})}),[i]),w=(0,o.useCallback)((function(e){return i({type:"SET_MODAL_VIEW",view:e})}),[i]),E=(0,o.useCallback)((function(e){return i({type:"SET_SIDEBAR_VIEW",view:e})}),[i]),S=(0,o.useMemo)((function(){return l({},n,{openSidebar:a,closeSidebar:c,toggleSidebar:f,closeSidebarIfPresent:p,openDropdown:h,closeDropdown:y,openModal:v,closeModal:g,setModalView:w,setSidebarView:E,setUserAvatar:b})}),[n]);return(0,r.jsx)(d.Provider,l({value:S},e))},p=function(){var e=o.useContext(d);if(void 0===e)throw new Error("useUI must be used within a UIProvider");return e},h=function(e){var t=e.children;return(0,r.jsx)(f,{children:(0,r.jsx)(i.f,{children:t})})}},9945:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(4246),o=(n(8955),n(8398),n(4278),n(7378)),i=n(6055),a=function(){return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"viewport"),(0,r.jsx)("link",{rel:"manifest",href:"/site.webmanifest"},"site-manifest")]})},c=n(9716);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}var u=function(e){var t=e.children;return(0,r.jsx)(r.Fragment,{children:t})};function d(e){var t=e.Component,n=e.pageProps,i=t.Layout||u;return(0,o.useEffect)((function(){var e;null===(e=document.body.classList)||void 0===e||e.remove("loading")}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),(0,r.jsx)(c.DA,{children:(0,r.jsx)(i,{pageProps:n,children:(0,r.jsx)(t,s({},n))})})]})}},4278:function(){},8398:function(){},8955:function(){},6118:function(e){!function(){var t={162:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,l=[],s=!1,u=-1;function d(){s&&c&&(s=!1,c.length?l=c.concat(l):u=-1,l.length&&m())}function m(){if(!s){var e=a(d);s=!0;for(var t=l.length;t;){for(c=l,l=[];++u<t;)c&&c[u].run();u=-1,t=l.length}c=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||s||a(m)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(162);e.exports=o}()},8038:function(e,t,n){e.exports=n(555)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(5385),t(5817)}));var n=e.O();_N_E=n}]);