"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6865],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,d=p["".concat(u,".").concat(f)]||p[f]||y[f]||c;return t?n.createElement(d,a(a({ref:r},s),{},{components:t})):n.createElement(d,a({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},39636:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(87462),o=t(63366),c=(t(67294),t(3905)),a=["components"],i={id:"select-query",title:"Select queries",sidebar_label:"Select"},u=void 0,l={unversionedId:"querying/select-query",id:"querying/select-query",title:"Select queries",description:"\x3c!--",source:"@site/docs/31.0.1/querying/select-query.md",sourceDirName:"querying",slug:"/querying/select-query",permalink:"/docs/31.0.1/querying/select-query",draft:!1,tags:[],version:"current",frontMatter:{id:"select-query",title:"Select queries",sidebar_label:"Select"}},s={},p=[],y={toc:p},f="wrapper";function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,c.kt)(f,(0,n.Z)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Older versions of Apache Druid included a Select query type. Since Druid 0.17.0, it has been removed and replaced by the ",(0,c.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/scan-query"},"Scan query"),", which offers improved memory usage and performance. This solves issues that users had with Select queries causing Druid to run out of memory or slow down."))}d.isMDXComponent=!0}}]);