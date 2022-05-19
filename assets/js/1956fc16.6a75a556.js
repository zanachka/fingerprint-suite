"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[526],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,h=c["".concat(o,".").concat(u)]||c[u]||d[u]||a;return n?r.createElement(h,p(p({ref:t},g),{},{components:n})):r.createElement(h,p({ref:t},g))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2437:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),p=["components"],l={},o="Fingerprint injector",s={unversionedId:"examples/injectorREADME",id:"examples/injectorREADME",title:"Fingerprint injector",description:"The Fingerprint injector is a sparse javascript library built for stealth override of browser signatures or so-called fingerprints. Overriding browser fingerprints help simulate real user browsers.",source:"@site/../docs/examples/injectorREADME.md",sourceDirName:"examples",slug:"/examples/injectorREADME",permalink:"/fingerprint-suite/docs/examples/injectorREADME",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1652962630,formattedLastUpdatedAt:"5/19/2022",frontMatter:{},sidebar:"docs",previous:{title:"Header generator",permalink:"/fingerprint-suite/docs/examples/headergenREADME"}},g={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage with the playwright",id:"usage-with-the-playwright",level:2},{value:"Usage with the puppeteer",id:"usage-with-the-puppeteer",level:2},{value:"Advanced usage with the Browser pool hooks system",id:"advanced-usage-with-the-browser-pool-hooks-system",level:2},{value:"API",id:"api",level:2},{value:"Class: FingerprintInjector",id:"class-fingerprintinjector",level:2},{value:"Table of contents",id:"table-of-contents",level:3},{value:"Constructors",id:"constructors",level:4},{value:"Properties",id:"properties",level:4},{value:"Methods",id:"methods",level:4},{value:"Constructors",id:"constructors-1",level:3},{value:"constructor",id:"constructor",level:4},{value:"Properties",id:"properties-1",level:3},{value:"log",id:"log",level:4},{value:"Defined in",id:"defined-in",level:5},{value:"utilsJs",id:"utilsjs",level:4},{value:"Defined in",id:"defined-in-1",level:5},{value:"Methods",id:"methods-1",level:3},{value:"_enhanceFingerprint",id:"_enhancefingerprint",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-2",level:5},{value:"_getInjectableFingerprintFunction",id:"_getinjectablefingerprintfunction",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-3",level:5},{value:"_loadUtils",id:"_loadutils",level:4},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-4",level:5},{value:"_randomInRange",id:"_randominrange",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-5",level:5},{value:"attachFingerprintToPlaywright",id:"attachfingerprinttoplaywright",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Defined in",id:"defined-in-6",level:5},{value:"attachFingerprintToPuppeteer",id:"attachfingerprinttopuppeteer",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns-5",level:5},{value:"Defined in",id:"defined-in-7",level:5},{value:"getInjectableScript",id:"getinjectablescript",level:4},{value:"Parameters",id:"parameters-5",level:5},{value:"Returns",id:"returns-6",level:5},{value:"Defined in",id:"defined-in-8",level:5},{value:"Table of contents",id:"table-of-contents-1",level:2},{value:"Classes",id:"classes-1",level:3}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fingerprint-injector"},"Fingerprint injector"),(0,a.kt)("p",null,"The Fingerprint injector is a sparse javascript library built for stealth override of browser signatures or so-called fingerprints. Overriding browser fingerprints help simulate real user browsers.\nThis library can inject fingerprints to ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer")," controlled browsers through a unified interface.\nIt is recommended to use this library with the Apify ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify/fingerprint-generator"},(0,a.kt)("inlineCode",{parentName:"a"},"fingerprint-generator"))," to achieve the best results and meet the necessary fingerprint structure."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#fingerprint-injector"},"Fingerprint injector"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#usage-with-the-playwright"},"Usage with the playwright")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#usage-with-the-puppeteer"},"Usage with the puppeteer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#advanced-usage-with-the-browser-pool-hooks-system"},"Advanced usage with the Browser pool hooks system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#api"},"API"))))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install fingerprint-injector\n")),(0,a.kt)("h2",{id:"usage-with-the-playwright"},"Usage with the playwright"),(0,a.kt)("p",null,"This example shows how to use fingerprint injector with ",(0,a.kt)("inlineCode",{parentName:"p"},"browser-pool")," plugin system, ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright")," firefox browser, and the Apify ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify/fingerprint-generator"},(0,a.kt)("inlineCode",{parentName:"a"},"fingerprint-generator"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { PlaywrightPlugin } = require('browser-pool');\nconst FingerprintGenerator = require('fingerprint-generator');\nconst { FingerprintInjector } = require('fingerprint-injector');\n\n// An asynchronous IIFE (immediately invoked function expression)\n// allows us to use the 'await' keyword.\n(async () => {\n  const playwrightPlugin = new PlaywrightPlugin(\n    playwright.firefox,\n    pluginOptions\n  );\n\n  const fingerprintGenerator = new FingerprintGenerator({\n    devices: ['desktop'],\n    browsers: [{ name: 'firefox', minVersion: 88 }]\n  });\n\n  const { fingerprint } = fingerprintGenerator.getFingerprint();\n\n  const fingerprintInjector = new FingerprintInjector();\n\n  const launchContext = playwrightPlugin.createLaunchContext();\n  const browser = await playwrightPlugin.launch(launchContext);\n  // Forward properties to the browserContext\n  const context = await browser.newContext({\n    userAgent: fingerprint.userAgent,\n    locale: fingerprint.navigator.language\n  });\n  // Attach fingerprint\n  await fingerprintInjector.attachFingerprintToPlaywright(context, fingerprint);\n\n  const page = await context.newPage();\n})();\n")),(0,a.kt)("h2",{id:"usage-with-the-puppeteer"},"Usage with the puppeteer"),(0,a.kt)("p",null,"This example demonstrates, how to use the fingerprint injector library with puppeteer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const FingerprintGenerator = require('fingerprint-generator');\nconst { FingerprintInjector } = require('fingerprint-injector');\nconst puppeteer = require('puppeteer')(\n  // An asynchronous IIFE (immediately invoked function expression)\n  // allows us to use the 'await' keyword.\n  async () => {\n    const fingerprintInjector = new FingerprintInjector();\n\n    const fingerprintGenerator = new FingerprintGenerator({\n      devices: ['desktop'],\n      browsers: [{ name: 'chrome', minVersion: 88 }]\n    });\n\n    const { fingerprint } = fingerprintGenerator.getFingerprint();\n    const browser = await puppeteer.launch({ headless: false });\n    const page = await browser.newPage();\n    // Attach fingerprint to page\n    await fingerprintInjector.attachFingerprintToPuppeteer(page, fingerprint);\n    // Now you can use the page\n    await page.goto('https://google.com');\n  }\n)();\n")),(0,a.kt)("h2",{id:"advanced-usage-with-the-browser-pool-hooks-system"},"Advanced usage with the Browser pool hooks system"),(0,a.kt)("p",null,"This approach handles injection for both incognito context and persistent context. It is also prepared for usage with both playwright nad puppeteer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const {\n  BrowserPool,\n  PlaywrightPlugin,\n  PuppeteerPlugin\n} = require('browser-pool');\nconst FingerprintGenerator = require('fingerprint-generator');\nconst { FingerprintInjector } = require('fingerprint-injector');\nconst playwright = require('playwright');\n\n// An asynchronous IIFE (immediately invoked function expression)\n// allows us to use the 'await' keyword.\n(async () => {\n  const pluginOptions = {\n    launchOptions: {\n      headless: false,\n      channel: 'chrome'\n    }\n  };\n\n  const playwrightPlugin = new PlaywrightPlugin(\n    playwright.chromium,\n    pluginOptions\n  );\n  const fingerprintGenerator = new FingerprintGenerator({\n    devices: ['desktop'],\n    browsers: [{ name: 'chrome', minVersion: 90 }],\n    operatingSystems: ['linux']\n  });\n\n  const { fingerprint } = fingerprintGenerator.getFingerprint();\n  const fingerprintInjector = new FingerprintInjector({ fingerprint });\n\n  const browserPool = new BrowserPool({\n    browserPlugins: [playwrightPlugin],\n    preLaunchHooks: [\n      (pageId, launchContext) => {\n        const { useIncognitoPages, launchOptions } = launchContext;\n\n        if (useIncognitoPages) {\n          return;\n        }\n\n        launchContext.launchOptions = {\n          ...launchOptions,\n          userAgent: fingerprint.userAgent,\n          viewport: {\n            width: fingerprint.screen.width,\n            height: fingerprint.screen.height\n          }\n        };\n      }\n    ],\n    prePageCreateHooks: [\n      (pageId, browserController, pageOptions) => {\n        const { launchContext } = browserController;\n\n        if (launchContext.useIncognitoPages && pageOptions) {\n          pageOptions.userAgent = fingerprint.userAgent;\n          pageOptions.viewport = {\n            width: fingerprint.screen.width,\n            height: fingerprint.screen.height\n          };\n        }\n      }\n    ],\n    postPageCreateHooks: [\n      async (page, browserController) => {\n        const { browserPlugin, launchContext } = browserController;\n\n        if (browserPlugin instanceof PlaywrightPlugin) {\n          const { useIncognitoPages, isFingerprintInjected } = launchContext;\n\n          if (isFingerprintInjected) {\n            // If not incognitoPages are used we would add the injection script over and over which could cause memory leaks.\n            return;\n          }\n          console.log('Injecting fingerprint to playwright');\n\n          const context = page.context();\n          await fingerprintInjector.attachFingerprintToPlaywright(\n            context,\n            fingerprint\n          );\n\n          if (!useIncognitoPages) {\n            // If not incognitoPages are used we would add the injection script over and over which could cause memory leaks.\n            launchContext.extend({ isFingerprintInjected: true });\n          }\n        } else if (browserPlugin instanceof PuppeteerPlugin) {\n          console.log('Injecting fingerprint to puppeteer');\n          await fingerprintInjector.attachFingerprintToPuppeteer(\n            page,\n            fingerprint\n          );\n        }\n      }\n    ]\n  });\n\n  const page = await browserPool.newPage();\n  await page.goto('https://google.com');\n})();\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h1",{id:"classes"},"Classes"),(0,a.kt)("a",{name:"classesfingerprintinjectormd"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#readmemd"},"fingerprint-injector")," / ",(0,a.kt)("a",{parentName:"p",href:"#modulesmd"},"Exports")," / FingerprintInjector"),(0,a.kt)("h2",{id:"class-fingerprintinjector"},"Class: FingerprintInjector"),(0,a.kt)("p",null,"Fingerprint injector class."),(0,a.kt)("h3",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h4",{id:"constructors"},"Constructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#constructor"},"constructor"))),(0,a.kt)("h4",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#log"},"log")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#utilsjs"},"utilsJs"))),(0,a.kt)("h4",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#_enhancefingerprint"},"_","enhanceFingerprint")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#_getinjectablefingerprintfunction"},"_","getInjectableFingerprintFunction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#_loadutils"},"_","loadUtils")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#_randominrange"},"_","randomInRange")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#attachfingerprinttoplaywright"},"attachFingerprintToPlaywright")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#attachfingerprinttopuppeteer"},"attachFingerprintToPuppeteer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#getinjectablescript"},"getInjectableScript"))),(0,a.kt)("h3",{id:"constructors-1"},"Constructors"),(0,a.kt)("h4",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new FingerprintInjector"),"()"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)("h4",{id:"log"},"log"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"log"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Log")),(0,a.kt)("h5",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify-packages/fingerprint-injector/blob/2ff8367/src/fingerprint-injector.ts#L39"},"fingerprint-injector.ts:39")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"utilsjs"},"utilsJs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"utilsJs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h5",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify-packages/fingerprint-injector/blob/2ff8367/src/fingerprint-injector.ts#L41"},"fingerprint-injector.ts:41")),(0,a.kt)("h3",{id:"methods-1"},"Methods"),(0,a.kt)("h4",{id:"_enhancefingerprint"},"_","enhanceFingerprint"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"_enhanceFingerprint"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"fingerprint"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"EnhancedFingerprint")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"fingerprint")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Fingerprint"))))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"EnhancedFingerprint")),(0,a.kt)("h5",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify-packages/fingerprint-injector/blob/2ff8367/src/fingerprint-injector.ts#L209"},"fingerprint-injector.ts:209")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"_getinjectablefingerprintfunction"},"_","getInjectableFingerprintFunction"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"_getInjectableFingerprintFunction"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"fingerprint"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Create injection function string."),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"fingerprint")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"EnhancedFingerprint")),(0,a.kt)("td",{parentName:"tr",align:"left"},"enhanced fingerprint.")))),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"script that overrides browser fingerprint.")),(0,a.kt)("h5",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify-packages/fingerprint-injector/blob/2ff8367/src/fingerprint-injector.ts#L110"},"fingerprint-injector.ts:110")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"_loadutils"},"_","loadUtils"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"_loadUtils"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h5",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h5",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify-packages/fingerprint-injector/blob/2ff8367/src/fingerprint-injector.ts#L223"},"fingerprint-injector.ts:223")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"_randominrange"},"_","randomInRange"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"_randomInRange"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"min"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"max"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h5",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"min")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"max")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h5",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h5",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify-packages/fingerprint-injector/blob/2ff8367/src/fingerprint-injector.ts#L230"},"fingerprint-injector.ts:230")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"attachfingerprinttoplaywright"},"attachFingerprintToPlaywright"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"attachFingerprintToPlaywright"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"browserContext"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"browserFingerprintWithHeaders"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,"Adds init script to the browser context, so the fingerprint is changed before every document creation.\nDISCLAIMER: Since the playwright does not support changing viewport and User-agent after the context is created,\nyou have to set it manually when the context is created. Check the playwright usage example."),(0,a.kt)("h5",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"browserContext")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"BrowserContext")),(0,a.kt)("td",{parentName:"tr",align:"left"},"playwright browser context")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"browserFingerprintWithHeaders")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"BrowserFingerprintWithHeaders")),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,a.kt)("h5",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h5",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify-packages/fingerprint-injector/blob/2ff8367/src/fingerprint-injector.ts#L50"},"fingerprint-injector.ts:50")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"attachfingerprinttopuppeteer"},"attachFingerprintToPuppeteer"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"attachFingerprintToPuppeteer"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"page"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"browserFingerprintWithHeaders"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,"Adds script that is evaluated before every document creation.\nSets User-Agent and viewport using native puppeteer interface"),(0,a.kt)("h5",{id:"parameters-4"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"page")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Page")),(0,a.kt)("td",{parentName:"tr",align:"left"},"puppeteer page")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"browserFingerprintWithHeaders")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"BrowserFingerprintWithHeaders")),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,a.kt)("h5",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h5",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify-packages/fingerprint-injector/blob/2ff8367/src/fingerprint-injector.ts#L73"},"fingerprint-injector.ts:73")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"getinjectablescript"},"getInjectableScript"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getInjectableScript"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"browserFingerprintWithHeaders"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Gets the override script that should be evaluated in the browser."),(0,a.kt)("h5",{id:"parameters-5"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"browserFingerprintWithHeaders")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"BrowserFingerprintWithHeaders"))))),(0,a.kt)("h5",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h5",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify-packages/fingerprint-injector/blob/2ff8367/src/fingerprint-injector.ts#L96"},"fingerprint-injector.ts:96")),(0,a.kt)("a",{name:"modulesmd"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#readmemd"},"fingerprint-injector")," / Exports"),(0,a.kt)("h1",{id:"fingerprint-injector-1"},"fingerprint-injector"),(0,a.kt)("h2",{id:"table-of-contents-1"},"Table of contents"),(0,a.kt)("h3",{id:"classes-1"},"Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#classesfingerprintinjectormd"},"FingerprintInjector"))))}u.isMDXComponent=!0}}]);