"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"parquet",title:"Apache Parquet Extension"},s=void 0,c={unversionedId:"development/extensions-core/parquet",id:"development/extensions-core/parquet",title:"Apache Parquet Extension",description:"\x3c!--",source:"@site/docs/latest/development/extensions-core/parquet.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/parquet",permalink:"/docs/latest/development/extensions-core/parquet",draft:!1,tags:[],version:"current",frontMatter:{id:"parquet",title:"Apache Parquet Extension"}},l={},u=[],d={toc:u},f="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This Apache Druid module extends ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/hadoop"},"Druid Hadoop based indexing")," to ingest data directly from offline\nApache Parquet files."),(0,o.kt)("p",null,"Note: If using the ",(0,o.kt)("inlineCode",{parentName:"p"},"parquet-avro")," parser for Apache Hadoop based indexing, ",(0,o.kt)("inlineCode",{parentName:"p"},"druid-parquet-extensions")," depends on the ",(0,o.kt)("inlineCode",{parentName:"p"},"druid-avro-extensions")," module, so be sure to\n",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/configuration/extensions#loading-extensions"},"include  both"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"druid-parquet-extensions")," provides the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/data-formats#parquet"},"Parquet input format"),", the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/data-formats#parquet-hadoop-parser"},"Parquet Hadoop parser"),",\nand the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/data-formats#parquet-avro-hadoop-parser"},"Parquet Avro Hadoop Parser")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"druid-avro-extensions"),".\nThe Parquet input format is available for ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/native-batch"},"native batch ingestion"),"\nand the other 2 parsers are for ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/hadoop"},"Hadoop batch ingestion"),".\nPlease see corresponding docs for details."))}m.isMDXComponent=!0}}]);