"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[861],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=["components"],o={},d="Header generator",s={unversionedId:"examples/headergenREADME",id:"examples/headergenREADME",title:"Header generator",description:"NodeJs package for generating browser-like headers.",source:"@site/../docs/examples/headergenREADME.md",sourceDirName:"examples",slug:"/examples/headergenREADME",permalink:"/fingerprint-suite/docs/examples/headergenREADME",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1652962630,formattedLastUpdatedAt:"5/19/2022",frontMatter:{},sidebar:"docs",previous:{title:"Fingerprint generator",permalink:"/fingerprint-suite/docs/examples/generatorREADME"},next:{title:"Fingerprint injector",permalink:"/fingerprint-suite/docs/examples/injectorREADME"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Presets",id:"presets",level:2},{value:"Result example",id:"result-example",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"HeaderGenerator",id:"headergenerator",level:3},{value:"<code>new HeaderGenerator(options)</code>",id:"new-headergeneratoroptions",level:4},{value:"<code>headerGenerator.getHeaders(options, requestDependentHeaders)</code>",id:"headergeneratorgetheadersoptions-requestdependentheaders",level:4},{value:"<code>headerGenerator.orderHeaders(headers, order)</code>",id:"headergeneratororderheadersheaders-order",level:4},{value:"<code>BrowserSpecification</code>",id:"browserspecification",level:3},{value:"<code>HeaderGeneratorOptions</code>",id:"headergeneratoroptions",level:3}],m={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"header-generator"},"Header generator"),(0,l.kt)("p",null,"NodeJs package for generating browser-like headers."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#presets"},"Presets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#result-example"},"Result example")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#api-reference"},"API Reference"))),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Run the ",(0,l.kt)("inlineCode",{parentName:"p"},"npm install header-generator")," command. No further setup is needed afterwards."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"To use the generator, you need to create an instance of the ",(0,l.kt)("inlineCode",{parentName:"p"},"HeaderGenerator")," class which is exported from this package. Constructor of this class accepts a ",(0,l.kt)("inlineCode",{parentName:"p"},"HeaderGeneratorOptions")," object, which can be used to globally specify what kind of headers you are looking for: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const { HeaderGenerator } = require(\'header-generator\');\nlet headerGenerator = new HeaderGenerator({\n        browsers: [\n            {name: "firefox", minVersion: 80},\n            {name: "chrome", minVersion: 87},\n            "safari"\n        ],\n        devices: [\n            "desktop"\n        ],\n        operatingSystems: [\n            "windows"\n        ]\n});\n')),(0,l.kt)("p",null,"You can then get the headers using the ",(0,l.kt)("inlineCode",{parentName:"p"},"getHeaders")," method, either with no argument, or with another ",(0,l.kt)("inlineCode",{parentName:"p"},"HeaderGeneratorOptions")," object, this time specifying the options only for this call (overwriting the global options when in conflict) and using the global options specified beforehands for the unspecified options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let headers = headersGenerator.getHeaders({\n        operatingSystems: [\n            "linux"\n        ],\n        locales: ["en-US", "en"]\n});\n')),(0,l.kt)("p",null,"This method always generates a random realistic set of headers, excluding the request dependant headers, which need to be filled in afterwards. Since the generation is randomized, multiple calls to this method with the same parameters can generate multiple different outputs."),(0,l.kt)("h2",{id:"presets"},"Presets"),(0,l.kt)("p",null,"Presets are setting templates for common use cases. It saves time writing the same configuration over and over."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { HeaderGenerator, PRESETS } = require('header-generator');\nlet headerGenerator = new HeaderGenerator(PRESETS.MODERN_WINDOWS_CHROME);\n")),(0,l.kt)("p",null,"This preset will fill the configuration for the latest five versions of chrome for windows desktops. Checkout the available presets list ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apify/header-generator/blob/master/src/presets.ts"},"here"),"."),(0,l.kt)("h2",{id:"result-example"},"Result example"),(0,l.kt)("p",null,"A result that can be generated for the usage example above:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sec-ch-ua-mobile": "?0",\n  "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Safari/537.36",\n  "accept-encoding": "gzip, deflate, br",\n  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",\n  "upgrade-insecure-requests": "1",\n  "accept-language": "en-US,en;0.9",\n  "sec-fetch-site": "same-site",\n  "sec-fetch-mode": "navigate",\n  "sec-fetch-user": "?1",\n  "sec-fetch-dest": "document"\n}\n')),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("p",null,"All public classes, methods and their parameters can be inspected in this API reference."),(0,l.kt)("a",{name:"HeaderGenerator"}),(0,l.kt)("h3",{id:"headergenerator"},"HeaderGenerator"),(0,l.kt)("p",null,"HeaderGenerator randomly generates realistic browser headers based on specified options."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#HeaderGenerator"},"HeaderGenerator"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#new_HeaderGenerator_new"},(0,l.kt)("inlineCode",{parentName:"a"},"new HeaderGenerator(options)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#HeaderGenerator+getHeaders"},(0,l.kt)("inlineCode",{parentName:"a"},".getHeaders(options, requestDependentHeaders)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#HeaderGenerator+orderHeaders"},(0,l.kt)("inlineCode",{parentName:"a"},".orderHeaders(headers, order)")))))),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"new_HeaderGenerator_new"}),(0,l.kt)("h4",{id:"new-headergeneratoroptions"},(0,l.kt)("inlineCode",{parentName:"h4"},"new HeaderGenerator(options)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#HeaderGeneratorOptions"},(0,l.kt)("code",null,"HeaderGeneratorOptions"))),(0,l.kt)("td",{parentName:"tr",align:null},"default header generation options used unless overridden")))),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"HeaderGenerator+getHeaders"}),(0,l.kt)("h4",{id:"headergeneratorgetheadersoptions-requestdependentheaders"},(0,l.kt)("inlineCode",{parentName:"h4"},"headerGenerator.getHeaders(options, requestDependentHeaders)")),(0,l.kt)("p",null,"Generates a single set of ordered headers using a combination of the default options specified in the constructor\nand their possible overrides provided here."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#HeaderGeneratorOptions"},(0,l.kt)("code",null,"HeaderGeneratorOptions"))),(0,l.kt)("td",{parentName:"tr",align:null},"specifies options that should be overridden for this one call")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"requestDependentHeaders"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"specifies known values of headers dependent on the particular request")))),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"HeaderGenerator+orderHeaders"}),(0,l.kt)("h4",{id:"headergeneratororderheadersheaders-order"},(0,l.kt)("inlineCode",{parentName:"h4"},"headerGenerator.orderHeaders(headers, order)")),(0,l.kt)("p",null,"Returns a new object that contains ordered headers."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"specifies known values of headers dependent on the particular request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"order"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Array.","<","string",">")),(0,l.kt)("td",{parentName:"tr",align:null},"an array of ordered header names, optional (will be deducted from ",(0,l.kt)("inlineCode",{parentName:"td"},"user-agent"),")")))),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"BrowserSpecification"}),(0,l.kt)("h3",{id:"browserspecification"},(0,l.kt)("inlineCode",{parentName:"h3"},"BrowserSpecification")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"One of ",(0,l.kt)("inlineCode",{parentName:"td"},"chrome"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"firefox")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"safari"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minVersion"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimal version of browser used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxVersion"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximal version of browser used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"httpVersion"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Http version to be used to generate headers (the headers differ depending on the version).  Either 1 or 2. If none specified the httpVersion specified in ",(0,l.kt)("inlineCode",{parentName:"td"},"HeaderGeneratorOptions")," is used.")))),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"HeaderGeneratorOptions"}),(0,l.kt)("h3",{id:"headergeneratoroptions"},(0,l.kt)("inlineCode",{parentName:"h3"},"HeaderGeneratorOptions")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"browsers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Array.","<","(BrowserSpecification","|","string)",">")),(0,l.kt)("td",{parentName:"tr",align:null},"List of BrowserSpecifications to generate the headers for,  or one of ",(0,l.kt)("inlineCode",{parentName:"td"},"chrome"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"firefox")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"safari"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"browserListQuery"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Browser generation query based on the real world data.  For more info see the ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/browserslist/browserslist#full-list"},"query docs"),".  If ",(0,l.kt)("inlineCode",{parentName:"td"},"browserListQuery")," is passed the ",(0,l.kt)("inlineCode",{parentName:"td"},"browsers")," array is ignored.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operatingSystems"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Array.","<","string",">")),(0,l.kt)("td",{parentName:"tr",align:null},"List of operating systems to generate the headers for.  The options are ",(0,l.kt)("inlineCode",{parentName:"td"},"windows"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"macos"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"linux"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"android")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"ios"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"devices"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Array.","<","string",">")),(0,l.kt)("td",{parentName:"tr",align:null},"List of devices to generate the headers for. Options are ",(0,l.kt)("inlineCode",{parentName:"td"},"desktop")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"mobile"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"locales"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Array.","<","string",">")),(0,l.kt)("td",{parentName:"tr",align:null},"List of at most 10 languages to include in the  ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language"},"Accept-Language")," request header  in the language format accepted by that header, for example ",(0,l.kt)("inlineCode",{parentName:"td"},"en"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"en-US")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"de"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"httpVersion"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Http version to be used to generate headers (the headers differ depending on the version).  Can be either 1 or 2. Default value is 2.")))),(0,l.kt)("hr",null))}c.isMDXComponent=!0}}]);