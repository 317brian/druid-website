"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"experimental",title:"Experimental features"},p=void 0,c={unversionedId:"development/experimental",id:"development/experimental",title:"Experimental features",description:"\x3c!--",source:"@site/docs/31.0.1/development/experimental.md",sourceDirName:"development",slug:"/development/experimental",permalink:"/docs/31.0.1/development/experimental",draft:!1,tags:[],version:"current",frontMatter:{id:"experimental",title:"Experimental features"},sidebar:"docs",previous:{title:"Contribute to Druid docs",permalink:"/docs/31.0.1/development/contribute-to-docs"},next:{title:"Release notes",permalink:"/docs/31.0.1/release-info/release-notes"}},s={},u=[],m={toc:u},f="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Features often start out in "experimental" status that indicates they are still evolving.\nThis can mean any of the following things:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The feature's API may change even in minor releases or patch releases."),(0,o.kt)("li",{parentName:"ol"},'The feature may have known "missing" pieces that will be added later.'),(0,o.kt)("li",{parentName:"ol"},"The feature may or may not have received full battle-testing in production environments.")),(0,o.kt)("p",null,"All experimental features are optional."),(0,o.kt)("p",null,"Note that not all of these points apply to every experimental feature. Some have been battle-tested in terms of\nimplementation, but are still marked experimental due to an evolving API. Please check the documentation for each\nfeature for full details."))}d.isMDXComponent=!0}}]);