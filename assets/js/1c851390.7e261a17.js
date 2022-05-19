/*! For license information please see 1c851390.7e261a17.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70],{9649:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r(7462),o=r(3366),u=r(7294),i=r(6010),a=r(5999),c=r(6668),s="anchorWithStickyNavbar_mojV",l="anchorWithHideOnScrollNavbar_R0VQ",f=["as","id"];function d(e){var n=e.as,r=e.id,d=(0,o.Z)(e,f),m=(0,c.L)().navbar.hideOnScroll;return"h1"!==n&&r?u.createElement(n,(0,t.Z)({},d,{className:(0,i.Z)("anchor",m?l:s),id:r}),d.children,u.createElement("a",{className:"hash-link",href:"#"+r,title:(0,a.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):u.createElement(n,(0,t.Z)({},d,{id:void 0}))}},4353:function(e,n,r){"use strict";r.d(n,{D:function(){return a},f:function(){return c}});var t=r(7294),o=r(9688),u=Symbol("EmptyContext"),i=t.createContext(u);function a(e){var n=e.children,r=(0,t.useState)(null),o=r[0],u=r[1],a=(0,t.useMemo)((function(){return{expandedItem:o,setExpandedItem:u}}),[o]);return t.createElement(i.Provider,{value:a},n)}function c(){var e=(0,t.useContext)(i);if(e===u)throw new o.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:function(e,n,r){"use strict";r.d(n,{a:function(){return i}});var t=r(7294),o=r(2466),u=r(5936);function i(e){var n=e.threshold,r=(0,t.useState)(!1),i=r[0],a=r[1],c=(0,t.useRef)(!1),s=(0,o.Ct)(),l=s.startScroll,f=s.cancelScroll;return(0,o.RF)((function(e,r){var t=e.scrollY,o=null==r?void 0:r.scrollY;o&&(c.current?c.current=!1:t>=o?(f(),a(!1)):t<n?a(!1):t+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,u.S)((function(e){e.location.hash&&(c.current=!0,a(!1))})),{shown:i,scrollToTop:function(){return l(0)}}}},5866:function(e,n,r){"use strict";r.d(n,{F:function(){return o}});var t=r(7294);function o(){var e=(0,t.useState)(!1),n=e[0],r=e[1],o=(0,t.useState)(!1),u=o[0],i=o[1],a=(0,t.useRef)(null),c=(0,t.useCallback)((function(){var e=a.current.querySelector("code");n?e.removeAttribute("style"):e.style.whiteSpace="pre-wrap",r((function(e){return!e}))}),[a,n]),s=(0,t.useCallback)((function(){var e=a.current,n=e.scrollWidth>e.clientWidth||a.current.querySelector("code").hasAttribute("style");i(n)}),[a]);return(0,t.useEffect)((function(){s()}),[n,s]),(0,t.useEffect)((function(){return window.addEventListener("resize",s,{passive:!0}),function(){window.removeEventListener("resize",s)}}),[s]),{codeBlockRef:a,isEnabled:n,isCodeScrollable:u,toggle:c}}},6412:function(e,n,r){"use strict";r.d(n,{p:function(){return u}});var t=r(2949),o=r(6668);function u(){var e=(0,o.L)().prism,n=(0,t.I)().colorMode,r=e.theme,u=e.darkTheme||r;return"dark"===n?u:r}},6841:function(e,n,r){"use strict";r.d(n,{S:function(){return c}});var t=r(7294),o=r(6668);function u(e){var n=e.getBoundingClientRect();return n.top===n.bottom?u(e.parentNode):n}function i(e,n){var r,t,o=n.anchorTopOffset,i=e.find((function(e){return u(e).top>=o}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(i))?i:null!=(t=e[e.indexOf(i)-1])?t:null:null!=(r=e[e.length-1])?r:null}function a(){var e=(0,t.useRef)(0),n=(0,o.L)().navbar.hideOnScroll;return(0,t.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function c(e){var n=(0,t.useRef)(void 0),r=a();(0,t.useEffect)((function(){if(!e)return function(){};var t=e.linkClassName,o=e.linkActiveClassName,u=e.minHeadingLevel,a=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(t),c=function(e){for(var n=e.minHeadingLevel,r=e.maxHeadingLevel,t=[],o=n;o<=r;o+=1)t.push("h"+o+".anchor");return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:u,maxHeadingLevel:a}),s=i(c,{anchorTopOffset:r.current}),l=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,r){if(r){var t;n.current&&n.current!==e&&(null==(t=n.current)||t.classList.remove(o)),e.classList.add(o),n.current=e}else e.classList.remove(o)}(e,e===l)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,r])}},549:function(e,n,r){"use strict";r.r(n),r.d(n,{AnnouncementBarProvider:function(){return E.pl},Collapsible:function(){return C.z},ColorModeProvider:function(){return V.S},DEFAULT_SEARCH_TAG:function(){return l.HX},DocSidebarItemsExpandedStateProvider:function(){return o.D},DocsPreferredVersionContextProvider:function(){return j.L5},DocsSidebarProvider:function(){return i.b},DocsVersionProvider:function(){return u.q},HtmlClassNameProvider:function(){return R.FG},NavbarProvider:function(){return B.V},NavbarSecondaryMenuFiller:function(){return U.Zo},PageMetadata:function(){return R.d},PluginHtmlClassNameProvider:function(){return R.VC},ReactContextError:function(){return D.i6},ScrollControllerProvider:function(){return F.OC},TabGroupChoiceProvider:function(){return A.z},ThemeClassNames:function(){return k.k},containsLineNumbers:function(){return s.nt},createStorageSlot:function(){return a.W},docVersionSearchTag:function(){return l.os},duplicates:function(){return y.l},findFirstCategoryLink:function(){return f.Wl},findSidebarCategory:function(){return f.em},getPrismCssVariables:function(){return s.QC},isActiveSidebarItem:function(){return f._F},isDocsPluginEnabled:function(){return f.cE},isMultiColumnFooterLinks:function(){return _.a},isRegexpStringMatch:function(){return M.F},isSamePath:function(){return H.Mg},keyboardFocusedClassName:function(){return $.h},listStorageKeys:function(){return a._},listTagsByLetters:function(){return w},parseCodeBlockTitle:function(){return s.bc},parseLanguage:function(){return s.Vo},parseLines:function(){return s.nZ},splitNavbarItems:function(){return B.A},translateTagsPageTitle:function(){return L},uniq:function(){return y.j},useAlternatePageUtils:function(){return c.l},useAnnouncementBar:function(){return E.nT},useBackToTopButton:function(){return z.a},useCodeWordWrap:function(){return ee.F},useCollapsible:function(){return C.u},useColorMode:function(){return V.I},useContextualSearchFilters:function(){return l._q},useCurrentSidebarCategory:function(){return f.jA},useDocById:function(){return f.xz},useDocRouteMetadata:function(){return f.hI},useDocSidebarItemsExpandedState:function(){return o.f},useDocsPreferredVersion:function(){return j.J},useDocsPreferredVersionByPluginId:function(){return j.Oh},useDocsSidebar:function(){return i.V},useDocsVersion:function(){return u.E},useDocsVersionCandidates:function(){return f.lO},useDynamicCallback:function(){return D.ed},useFilteredAndTreeifiedTOC:function(){return I.b},useHideableNavbar:function(){return Z.c},useHistoryPopHandler:function(){return T.R},useHomePageRoute:function(){return H.Ns},useIsomorphicLayoutEffect:function(){return D.LI},useKeyboardNavigation:function(){return $.t},useLayoutDoc:function(){return f.vY},useLayoutDocsSidebar:function(){return f.oz},useLocalPathname:function(){return P.b},useLocationChange:function(){return S.S},useLockBodyScroll:function(){return Q.N},useNavbarMobileSidebar:function(){return W.e},useNavbarSecondaryMenu:function(){return q.Y},usePluralForm:function(){return x},usePrevious:function(){return D.D9},usePrismTheme:function(){return G.p},useScrollController:function(){return F.sG},useScrollPosition:function(){return F.RF},useScrollPositionBlocker:function(){return F.o5},useSearchPage:function(){return X},useSidebarBreadcrumbs:function(){return f.s1},useSkipToContent:function(){return ne.a},useSmoothScrollTo:function(){return F.Ct},useTOCHighlight:function(){return O.S},useTabGroupChoice:function(){return A.U},useThemeConfig:function(){return t.L},useTitleFormatter:function(){return d.p},useTreeifiedTOC:function(){return I.a},useWindowSize:function(){return Y.i}});var t=r(6668),o=r(4353),u=r(4477),i=r(1116),a=r(12),c=r(4711),s=r(7016),l=r(3320),f=r(3791),d=r(2128),m=r(7294),h=r(2263),v=["zero","one","two","few","many","other"];function p(e){return v.filter((function(n){return e.includes(n)}))}var g={locale:"en",pluralForms:p(["one","other"]),select:function(e){return 1===e?"one":"other"}};function b(){var e=(0,h.default)().i18n.currentLocale;return(0,m.useMemo)((function(){try{return n=e,r=new Intl.PluralRules(n),{locale:n,pluralForms:p(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),g}var n,r}),[e])}function x(){var e=b();return{selectMessage:function(n,r){return function(e,n,r){var t=e.split("|");if(1===t.length)return t[0];t.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms+"), but the message contains "+t.length+": "+e);var o=r.select(n),u=r.pluralForms.indexOf(o);return t[Math.min(u,t.length-1)]}(r,n,e)}}}var S=r(5936),C=r(6043),j=r(373),y=r(7392),k=r(5281),E=r(9689),P=r(1753),N=r(5999),L=function(){return(0,N.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function w(e){var n={};return Object.values(e).forEach((function(e){var r=function(e){return e[0].toUpperCase()}(e.label);null!=n[r]||(n[r]=[]),n[r].push(e)})),Object.entries(n).sort((function(e,n){var r=e[0],t=n[0];return r.localeCompare(t)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,n){return e.label.localeCompare(n.label)}))}}))}var T=r(1980),O=r(6841),I=r(9665),_=r(2489),F=r(2466),D=r(9688),M=r(8022),H=r(8596),R=r(833),V=r(2949),B=r(8978),A=r(7094),W=r(3163),U=r(3102),q=r(6857),z=r(2730),Z=r(9445),$=r(9727),G=r(6412),Q=r(9800),Y=r(7524),K=r(6775),J="q";function X(){var e=(0,K.k6)(),n=(0,h.default)().siteConfig.baseUrl,r=(0,m.useState)(""),t=r[0],o=r[1];return(0,m.useEffect)((function(){var e,n=null!=(e=new URLSearchParams(window.location.search).get(J))?e:"";o(n)}),[]),{searchQuery:t,setSearchQuery:(0,m.useCallback)((function(n){var r=new URLSearchParams(window.location.search);n?r.set(J,n):r.delete(J),e.replace({search:r.toString()}),o(n)}),[e]),generateSearchPageLink:(0,m.useCallback)((function(e){return n+"search?"+"q="+encodeURIComponent(e)}),[n])}}var ee=r(5866),ne=r(8721)},7016:function(e,n,r){"use strict";r.d(n,{QC:function(){return h},Vo:function(){return d},bc:function(){return l},nZ:function(){return m},nt:function(){return f}});var t=r(6528),o=r(7594),u=r.n(o),i=(0,t.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),a=(0,t.Z)(/\{([\d,-]+)\}/,{range:1}),c={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function s(e,n){var r=e.map((function(e){var r=c[e],t=r.start,o=r.end;return"(?:"+t+"\\s*("+n.flatMap((function(e){var n,r;return[e.line,null==(n=e.block)?void 0:n.start,null==(r=e.block)?void 0:r.end].filter(Boolean)})).join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")}function l(e){var n,r;return null!=(n=null==e||null==(r=e.match(i))?void 0:r.groups.title)?n:""}function f(e){return(null==e?void 0:e.includes("showLineNumbers"))||!1}function d(e){var n=e.split(" ").find((function(e){return e.startsWith("language-")}));return null==n?void 0:n.replace(/language-/,"")}function m(e,n){var r=e.replace(/\n$/,""),t=n.language,o=n.magicComments,i=n.metastring;if(i&&a.test(i)){var l=i.match(a).groups.range;if(0===o.length)throw new Error("A highlight range has been given in code block's metastring (``` "+i+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var f=o[0].className,d=u()(l).filter((function(e){return e>0})).map((function(e){return[e-1,[f]]}));return{lineClassNames:Object.fromEntries(d),code:r}}if(void 0===t)return{lineClassNames:{},code:r};for(var m=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return s(["js","jsBlock"],n);case"jsx":case"tsx":return s(["js","jsBlock","jsx"],n);case"html":return s(["js","jsBlock","html"],n);case"python":case"py":case"bash":return s(["bash"],n);case"markdown":case"md":return s(["html","jsx","bash"],n);default:return s(Object.keys(c),n)}}(t,o),h=r.split("\n"),v=Object.fromEntries(o.map((function(e){return[e.className,{start:0,range:""}]}))),p=Object.fromEntries(o.filter((function(e){return e.line})).map((function(e){var n=e.className;return[e.line,n]}))),g=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.start,n]}))),b=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.end,n]}))),x=0;x<h.length;){var S=h[x].match(m);if(S){var C=S.slice(1).find((function(e){return void 0!==e}));p[C]?v[p[C]].range+=x+",":g[C]?v[g[C]].start=x:b[C]&&(v[b[C]].range+=v[b[C]].start+"-"+(x-1)+","),h.splice(x,1)}else x+=1}r=h.join("\n");var j={};return Object.entries(v).forEach((function(e){var n=e[0],r=e[1].range;u()(r).forEach((function(e){null!=j[e]||(j[e]=[]),j[e].push(n)}))})),{lineClassNames:j,code:r}}function h(e){var n={color:"--prism-color",backgroundColor:"--prism-background-color"},r={};return Object.entries(e.plain).forEach((function(e){var t=e[0],o=e[1],u=n[t];u&&"string"==typeof o&&(r[u]=o)})),r}},9665:function(e,n,r){"use strict";r.d(n,{a:function(){return a},b:function(){return s}});var t=r(3366),o=r(7294),u=["parentIndex"];function i(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),r=Array(7).fill(-1);n.forEach((function(e,n){var t=r.slice(2,e.level);e.parentIndex=Math.max.apply(Math,t),r[e.level]=n}));var o=[];return n.forEach((function(e){var r=e.parentIndex,i=(0,t.Z)(e,u);r>=0?n[r].children.push(i):o.push(i)})),o}function a(e){return(0,o.useMemo)((function(){return i(e)}),[e])}function c(e){var n=e.toc,r=e.minHeadingLevel,t=e.maxHeadingLevel;return n.flatMap((function(e){var n=c({toc:e.children,minHeadingLevel:r,maxHeadingLevel:t});return function(e){return e.level>=r&&e.level<=t}(e)?[Object.assign({},e,{children:n})]:n}))}function s(e){var n=e.toc,r=e.minHeadingLevel,t=e.maxHeadingLevel;return(0,o.useMemo)((function(){return c({toc:i(n),minHeadingLevel:r,maxHeadingLevel:t})}),[n,r,t])}},538:function(e,n,r){"use strict";var t=r(7294),o=r(9960),u=r(549),i=r(9649),a=r(6892),c=r(5845),s=r(7850),l=r(5893),f=function(e){return e&&e.__esModule?e:{default:e}},d=f(o),m=f(i);function h(e,n,r){if(!e.match(/api\/([\d.]+)/)&&!e.includes("api/next")&&r&&r.name!==n.label){var t="current"===r.name?"next":r.name;return e.endsWith("/api")?e+"/"+t:e.replace("/api/","/api/"+t+"/")}return e}e.exports=function(e){var n=e.options,r=e.packages,o=e.history,i=e.versionMetadata,f=u.useDocsVersion(),v=u.useDocsPreferredVersion(i.pluginId).preferredVersion;return t.useEffect((function(){1===r.length?o.replace(h(r[0].entryPoints[0].reflection.permalink,f,v)):v&&o.replace(h(o.location.pathname,f,v))}),[r,o,f,v]),l.jsx("div",{className:"row",children:l.jsxs("div",{className:"col apiItemCol",children:[n.banner&&l.jsx("div",{className:"alert alert--info margin-bottom--md",role:"alert",children:l.jsx("div",{dangerouslySetInnerHTML:{__html:n.banner}})}),l.jsx(s.VersionBanner,{versionMetadata:i}),l.jsx("div",{className:"apiItemContainer",children:l.jsxs("article",{children:[l.jsxs("div",{className:"markdown",children:[l.jsx("header",{children:l.jsx(m.default,{as:"h1",children:"API"})}),l.jsxs("section",{className:"tsd-panel",children:[l.jsx("h3",{className:"tsd-panel-header",children:"Packages"}),l.jsx("div",{className:"tsd-panel-content",children:l.jsx("ul",{className:"tsd-index-list",children:r.map((function(e){return l.jsx("li",{className:"tsd-truncate",children:l.jsxs(d.default,{className:"tsd-kind-icon",to:e.entryPoints[0].reflection.permalink,children:[l.jsxs("span",{className:"tsd-signature-symbol",children:["v",e.packageVersion]})," ",l.jsx("span",{children:a.removeScopes(e.packageName,n.scopes)})]})},e.packageName)}))})})]})]}),l.jsx(c.Footer,{})]})})]})})}},5845:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),r(7294);var t=r(5893);n.Footer=function(){return t.jsxs("footer",{className:"tsd-footer",children:["Powered by"," ",t.jsx("a",{href:"https://github.com/milesj/docusaurus-plugin-typedoc-api",children:"docusaurus-plugin-typedoc-api"})," ","and ",t.jsx("a",{href:"https://typedoc.org/",children:"TypeDoc"})]})}},7850:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=r(7294),o=r(9960),u=r(5551),i=r(549),a=r(5893),c=function(e){return e&&e.__esModule?e:{default:e}}(o);n.VersionBanner=function(e){var n=e.versionMetadata,r=n.banner,o=n.pluginId,s=n.version,l=u.useDocVersionSuggestions(o).latestVersionSuggestion,f=i.useDocsPreferredVersion(o).savePreferredVersionName,d=t.useCallback((function(){f(l.name)}),[l.name,f]);if(!r||!l)return null;var m=n.docs[l.label];return a.jsx("div",{className:i.ThemeClassNames.docs.docVersionBanner+" alert alert--warning margin-bottom--md",role:"alert",children:a.jsxs("div",{children:["unreleased"===r&&a.jsx(a.Fragment,{children:"This is documentation for an unreleased version."}),"unmaintained"===r&&a.jsxs(a.Fragment,{children:["This is documentation for version ",a.jsx("b",{children:s}),"."]})," ","For the latest API, see version"," ",a.jsx("b",{children:a.jsx(c.default,{to:m.id,onClick:d,children:m.title})}),"."]})})}},6892:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.removeScopes=function(e,n){return 0===n.length?e:n.reduce((function(e,n){return e.replace(new RegExp("^("+n+"-|@"+n+"/)"),"")}),e)}},7594:function(e,n){function r(e){let n,r=[];for(let t of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(t))r.push(parseInt(t,10));else if(n=t.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,t,o,u]=n;if(t&&u){t=parseInt(t),u=parseInt(u);const e=t<u?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(u+=e);for(let n=t;n!==u;n+=e)r.push(n)}}return r}n.default=r,e.exports=r},5251:function(e,n,r){"use strict";r(7418);var t=r(7294),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),n.Fragment=u("react.fragment")}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,r){var t,u={},s=null,l=null;for(t in void 0!==r&&(s=""+r),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,t)&&!c.hasOwnProperty(t)&&(u[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===u[t]&&(u[t]=n[t]);return{$$typeof:o,type:e,key:s,ref:l,props:u,_owner:i.current}}n.jsx=s,n.jsxs=s},5893:function(e,n,r){"use strict";e.exports=r(5251)}}]);