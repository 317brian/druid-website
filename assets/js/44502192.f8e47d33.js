"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9943],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(f,s(s({ref:t},l),{},{components:r})):a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),s=["components"],o={id:"papers-and-talks",title:"Papers"},p=void 0,c={unversionedId:"misc/papers-and-talks",id:"misc/papers-and-talks",title:"Papers",description:"\x3c!--",source:"@site/docs/31.0.1/misc/papers-and-talks.md",sourceDirName:"misc",slug:"/misc/papers-and-talks",permalink:"/docs/31.0.1/misc/papers-and-talks",draft:!1,tags:[],version:"current",frontMatter:{id:"papers-and-talks",title:"Papers"},sidebar:"docs",previous:{title:"SQL compliant mode",permalink:"/docs/31.0.1/release-info/migr-ansi-sql-null"}},l={},u=[{value:"Papers",id:"papers",level:2},{value:"Presentations",id:"presentations",level:2}],m={toc:u},d="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"papers"},"Papers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"http://static.druid.io/docs/druid.pdf"},"Druid: A Real-time Analytical Data Store")," - Discusses the Druid architecture in detail.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"http://static.druid.io/docs/radstack.pdf"},"The RADStack: Open Source Lambda Architecture for Interactive Analytics")," - Discusses how Druid supports real-time and batch workflows."))),(0,i.kt)("h2",{id:"presentations"},"Presentations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=hgmxVPx4vVw"},"Introduction to Druid")," - Discusses the motivations behind Druid and the architecture of the system.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Dlqj34l2upk"},"Druid: Interactive Queries Meet Real-Time Data")," - Discusses how real-time ingestion in Druid works and use cases at Netflix.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Hpd3f_MLdXo"},"Not Exactly! Fast Queries via Approximation Algorithms")," - Discusses how approximate algorithms work in Druid.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=3Qb_2GGRz24"},"Real-time Analytics with Open Source Technologies")," - Discusses Lambda architectures with Druid.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=yuSLeIzG98w&t=55s"},"Stories from the Trenches - The Challenges of Building an Analytics Stack")," - Discusses features that were added to scale Druid.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=bZ3LqG3iHbM"},"Building Interactive Applications at Scale")," - Discusses building applications on top of Druid."))))}f.isMDXComponent=!0}}]);