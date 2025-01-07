"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},15606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],c={id:"cassandra",title:"Apache Cassandra"},i=void 0,p={unversionedId:"development/extensions-contrib/cassandra",id:"development/extensions-contrib/cassandra",title:"Apache Cassandra",description:"\x3c!--",source:"@site/docs/31.0.1/development/extensions-contrib/cassandra.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/cassandra",permalink:"/docs/31.0.1/development/extensions-contrib/cassandra",draft:!1,tags:[],version:"current",frontMatter:{id:"cassandra",title:"Apache Cassandra"}},l={},d=[],u={toc:d},f="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use this Apache Druid extension, ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/configuration/extensions#loading-extensions"},"include")," ",(0,o.kt)("inlineCode",{parentName:"p"},"druid-cassandra-storage")," in the extensions load list."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.datastax.com/what-we-offer/products-services/datastax-enterprise/apache-cassandra"},"Apache Cassandra")," can also\nbe leveraged for deep storage.  This requires some additional Druid configuration as well as setting up the necessary\nschema within a Cassandra keystore."))}m.isMDXComponent=!0}}]);