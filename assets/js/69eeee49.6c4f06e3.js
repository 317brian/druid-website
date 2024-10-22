"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5582],{14137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,k=s["".concat(d,".").concat(m)]||s[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=n(63366),l=(n(67294),n(14137)),i=["components"],o={id:"cloudfiles",title:"Rackspace Cloud Files"},d=void 0,p={unversionedId:"development/extensions-contrib/cloudfiles",id:"development/extensions-contrib/cloudfiles",title:"Rackspace Cloud Files",description:"\x3c!--",source:"@site/docs/31.0.0/development/extensions-contrib/cloudfiles.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/cloudfiles",permalink:"/docs/31.0.0/development/extensions-contrib/cloudfiles",draft:!1,tags:[],version:"current",frontMatter:{id:"cloudfiles",title:"Rackspace Cloud Files"}},u={},s=[{value:"Deep Storage",id:"deep-storage",level:2}],c={toc:s},m="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To use this Apache Druid extension, ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.0/configuration/extensions#loading-extensions"},"include")," ",(0,l.kt)("inlineCode",{parentName:"p"},"druid-cloudfiles-extensions")," in the extensions load list."),(0,l.kt)("h2",{id:"deep-storage"},"Deep Storage"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.rackspace.com/cloud/files/"},"Rackspace Cloud Files")," is another option for deep storage. This requires some additional Druid configuration."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.type")),(0,l.kt)("td",{parentName:"tr",align:null},"cloudfiles"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.region")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rackspace Cloud Files region."),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.container")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rackspace Cloud Files container name."),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.basePath")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rackspace Cloud Files base path to use in the container."),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.operationMaxRetries")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Number of tries before cancel a Rackspace operation."),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.cloudfiles.userName")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rackspace Cloud username"),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.cloudfiles.apiKey")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rackspace Cloud API key."),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.cloudfiles.provider")),(0,l.kt)("td",{parentName:"tr",align:null},"rackspace-cloudfiles-us,rackspace-cloudfiles-uk"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the provider depending on the region."),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.cloudfiles.useServiceNet")),(0,l.kt)("td",{parentName:"tr",align:null},"true,false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to use the internal service net."),(0,l.kt)("td",{parentName:"tr",align:null},"true")))))}k.isMDXComponent=!0}}]);