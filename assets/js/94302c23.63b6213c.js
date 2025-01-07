"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1917],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={id:"druid-vs-key-value",title:"Apache Druid vs. Key/Value Stores (HBase/Cassandra/OpenTSDB)"},l=void 0,u={unversionedId:"comparisons/druid-vs-key-value",id:"comparisons/druid-vs-key-value",title:"Apache Druid vs. Key/Value Stores (HBase/Cassandra/OpenTSDB)",description:"\x3c!--",source:"@site/docs/31.0.1/comparisons/druid-vs-key-value.md",sourceDirName:"comparisons",slug:"/comparisons/druid-vs-key-value",permalink:"/docs/31.0.1/comparisons/druid-vs-key-value",draft:!1,tags:[],version:"current",frontMatter:{id:"druid-vs-key-value",title:"Apache Druid vs. Key/Value Stores (HBase/Cassandra/OpenTSDB)"}},c={},p=[],d={toc:p},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Druid is highly optimized for scans and aggregations, it supports arbitrarily deep drill downs into data sets. This same functionality\nis supported in key/value stores in 2 ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pre-compute all permutations of possible user queries"),(0,o.kt)("li",{parentName:"ol"},"Range scans on event data")),(0,o.kt)("p",null,"When pre-computing results, the key is the exact parameters of the query, and the value is the result of the query.\nThe queries return extremely quickly, but at the cost of flexibility, as ad-hoc exploratory queries are not possible with\npre-computing every possible query permutation. Pre-computing all permutations of all ad-hoc queries leads to result sets\nthat grow exponentially with the number of columns of a data set, and pre-computing queries for complex real-world data sets\ncan require hours of pre-processing time."),(0,o.kt)("p",null,"The other approach to using key/value stores for aggregations to use the dimensions of an event as the key and the event measures as the value.\nAggregations are done by issuing range scans on this data. Timeseries specific databases such as OpenTSDB use this approach.\nOne of the limitations here is that the key/value storage model does not have indexes for any kind of filtering other than prefix ranges,\nwhich can be used to filter a query down to a metric and time range, but cannot resolve complex predicates to narrow the exact data to scan.\nWhen the number of rows to scan gets large, this limitation can greatly reduce performance. It is also harder to achieve good\nlocality with key/value stores because most don\u2019t support pushing down aggregates to the storage layer."),(0,o.kt)("p",null,"For arbitrary exploration of data (flexible data filtering), Druid's custom column format enables ad-hoc queries without pre-computation. The format\nalso enables fast scans on columns, which is important for good aggregation performance."))}f.isMDXComponent=!0}}]);