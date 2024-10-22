"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1250],{14137:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?n.createElement(h,o(o({ref:r},u),{},{components:t})):n.createElement(h,o({ref:r},u))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76479:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=t(87462),i=t(63366),a=(t(67294),t(14137)),o=["components"],s={id:"query-processing",title:"Query processing"},c=void 0,l={unversionedId:"querying/query-processing",id:"querying/query-processing",title:"Query processing",description:"\x3c!--",source:"@site/docs/31.0.0/querying/query-processing.md",sourceDirName:"querying",slug:"/querying/query-processing",permalink:"/docs/31.0.0/querying/query-processing",draft:!1,tags:[],version:"current",frontMatter:{id:"query-processing",title:"Query processing"},sidebar:"docs",previous:{title:"Native queries",permalink:"/docs/31.0.0/querying/"},next:{title:"Query execution",permalink:"/docs/31.0.0/querying/query-execution"}},u={},p=[{value:"Learn more",id:"learn-more",level:2}],d={toc:p},m="wrapper";function h(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)(m,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This topic provides a high-level overview of how Apache Druid distributes and processes queries."),(0,a.kt)("p",null,"The general flow is as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A query enters the ",(0,a.kt)("a",{parentName:"li",href:"/docs/31.0.0/design/broker"},"Broker")," service, which identifies the segments with data that may pertain to that query. The list of segments is always pruned by time, and may also be pruned by other attributes depending on how the datasource is partitioned."),(0,a.kt)("li",{parentName:"ol"},"The Broker identifies which ",(0,a.kt)("a",{parentName:"li",href:"/docs/31.0.0/design/historical"},"Historical")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/31.0.0/design/middlemanager"},"Middle Manager")," services are serving those segments and distributes a rewritten subquery to each of the services."),(0,a.kt)("li",{parentName:"ol"},"The Historical and Middle Manager services execute each subquery and return results to the Broker."),(0,a.kt)("li",{parentName:"ol"},"The Broker merges the partial results to get the final answer, which it returns to the original caller.")),(0,a.kt)("p",null,"Druid uses time and attribute pruning to minimize the data it must scan for each query."),(0,a.kt)("p",null,"For filters that are more precise than what the Broker uses for pruning, the ",(0,a.kt)("a",{parentName:"p",href:"/docs/31.0.0/design/storage#indexing-and-handoff"},"indexing structures")," inside each segment allow Historical services to identify matching rows before accessing the data. Once the Historical service knows which rows match a particular query, it only accesses the requires rows and columns."),(0,a.kt)("p",null,"To maximize query performance, Druid uses the following techniques:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pruning the set of segments accessed for a query."),(0,a.kt)("li",{parentName:"ul"},"Within each segment, using indexes to identify which rows must be accessed."),(0,a.kt)("li",{parentName:"ul"},"Within each segment, only reading the specific rows and columns that are relevant to a particular query.")),(0,a.kt)("h2",{id:"learn-more"},"Learn more"),(0,a.kt)("p",null,"See the following topic for more information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/31.0.0/querying/query-execution"},"Query execution")," to learn how Druid services process query statements.")))}h.isMDXComponent=!0}}]);