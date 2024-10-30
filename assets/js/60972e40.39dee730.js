"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4310],{14137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return t?o.createElement(g,i(i({ref:n},c),{},{components:t})):o.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var o=t(87462),a=t(63366),r=(t(67294),t(14137)),i=["components"],s={id:"tutorial-msq-convert-spec",title:"Convert an ingestion spec for SQL-based ingestion",sidebar_label:"Convert ingestion spec to SQL",description:"How to convert an ingestion spec to a query for SQL-based ingestion in the web console."},p=void 0,l={unversionedId:"tutorials/tutorial-msq-convert-spec",id:"tutorials/tutorial-msq-convert-spec",title:"Convert an ingestion spec for SQL-based ingestion",description:"How to convert an ingestion spec to a query for SQL-based ingestion in the web console.",source:"@site/docs/31.0.0/tutorials/tutorial-msq-convert-spec.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-msq-convert-spec",permalink:"/docs/31.0.0/tutorials/tutorial-msq-convert-spec",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-msq-convert-spec",title:"Convert an ingestion spec for SQL-based ingestion",sidebar_label:"Convert ingestion spec to SQL",description:"How to convert an ingestion spec to a query for SQL-based ingestion in the web console."},sidebar:"docs",previous:{title:"Transform input data",permalink:"/docs/31.0.0/tutorials/tutorial-transform"},next:{title:"Configure data retention",permalink:"/docs/31.0.0/tutorials/tutorial-retention"}},c={},m=[],u={toc:m},d="wrapper";function g(e){var n=e.components,s=(0,a.Z)(e,i);return(0,r.kt)(d,(0,o.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," This page describes SQL-based batch ingestion using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/31.0.0/multi-stage-query/"},(0,r.kt)("inlineCode",{parentName:"a"},"druid-multi-stage-query")),"\nextension, new in Druid 24.0. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/31.0.0/ingestion/#batch"},"ingestion methods")," table to determine which\ningestion method is right for you.")),(0,r.kt)("p",null,"If you're already ingesting data with ",(0,r.kt)("a",{parentName:"p",href:"/docs/31.0.0/ingestion/native-batch"},"native batch ingestion"),", you can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/31.0.0/operations/web-console"},"web console")," to convert the ingestion spec to a SQL query that the multi-stage query task engine can use to ingest data."),(0,r.kt)("p",null,"This tutorial demonstrates how to convert the ingestion spec to a query task in the web console."),(0,r.kt)("p",null,"To convert the ingestion spec to a query task, do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Query")," view of the web console, navigate to the menu bar that includes ",(0,r.kt)("strong",{parentName:"p"},"Run"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ellipsis icon and select ",(0,r.kt)("strong",{parentName:"p"},"Convert ingestion spec to SQL"),".\n",(0,r.kt)("img",{alt:"Convert ingestion spec to SQL",src:t(73292).Z,title:"Convert ingestion spec to SQL",width:"1250",height:"640"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Ingestion spec to covert")," window, insert your ingestion spec. You can use your own spec or the sample ingestion spec provided in the tutorial. The sample spec uses data hosted at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://druid.apache.org/data/wikipedia.json.gz")," and loads it into a table named ",(0,r.kt)("inlineCode",{parentName:"p"},"wikipedia"),":"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the spec"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "index_parallel",\n  "spec": {\n    "ioConfig": {\n      "type": "index_parallel",\n      "inputSource": {\n        "type": "http",\n        "uris": [\n          "https://druid.apache.org/data/wikipedia.json.gz"\n        ]\n      },\n      "inputFormat": {\n        "type": "json"\n      }\n    },\n    "tuningConfig": {\n      "type": "index_parallel",\n      "partitionsSpec": {\n        "type": "dynamic"\n      }\n    },\n    "dataSchema": {\n      "dataSource": "wikipedia",\n      "timestampSpec": {\n        "column": "timestamp",\n        "format": "iso"\n      },\n      "dimensionsSpec": {\n        "dimensions": [\n          "isRobot",\n          "channel",\n          "flags",\n          "isUnpatrolled",\n          "page",\n          "diffUrl",\n          {\n            "type": "long",\n            "name": "added"\n          },\n          "comment",\n          {\n            "type": "long",\n            "name": "commentLength"\n          },\n          "isNew",\n          "isMinor",\n          {\n            "type": "long",\n            "name": "delta"\n          },\n          "isAnonymous",\n          "user",\n          {\n            "type": "long",\n            "name": "deltaBucket"\n          },\n          {\n            "type": "long",\n            "name": "deleted"\n          },\n          "namespace",\n          "cityName",\n          "countryName",\n          "regionIsoCode",\n          "metroCode",\n          "countryIsoCode",\n          "regionName"\n        ]\n      },\n      "granularitySpec": {\n        "queryGranularity": "none",\n        "rollup": false,\n        "segmentGranularity": "day"\n      }\n    }\n  }\n}\n')))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Submit")," to submit the spec. The web console uses the JSON-based ingestion spec to generate a SQL query that you can use instead. This is what the query looks like for the sample ingestion spec:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'-- This SQL query was auto generated from an ingestion spec\nREPLACE INTO wikipedia OVERWRITE ALL\nWITH source AS (SELECT * FROM TABLE(\n  EXTERN(\n    \'{"type":"http","uris":["https://druid.apache.org/data/wikipedia.json.gz"]}\',\n    \'{"type":"json"}\',\n    \'[{"name":"timestamp","type":"string"},{"name":"isRobot","type":"string"},{"name":"channel","type":"string"},{"name":"flags","type":"string"},{"name":"isUnpatrolled","type":"string"},{"name":"page","type":"string"},{"name":"diffUrl","type":"string"},{"name":"added","type":"long"},{"name":"comment","type":"string"},{"name":"commentLength","type":"long"},{"name":"isNew","type":"string"},{"name":"isMinor","type":"string"},{"name":"delta","type":"long"},{"name":"isAnonymous","type":"string"},{"name":"user","type":"string"},{"name":"deltaBucket","type":"long"},{"name":"deleted","type":"long"},{"name":"namespace","type":"string"},{"name":"cityName","type":"string"},{"name":"countryName","type":"string"},{"name":"regionIsoCode","type":"string"},{"name":"metroCode","type":"string"},{"name":"countryIsoCode","type":"string"},{"name":"regionName","type":"string"}]\'\n  )\n))\nSELECT\n  TIME_PARSE("timestamp") AS __time,\n  "isRobot",\n  "channel",\n  "flags",\n  "isUnpatrolled",\n  "page",\n  "diffUrl",\n  "added",\n  "comment",\n  "commentLength",\n  "isNew",\n  "isMinor",\n  "delta",\n  "isAnonymous",\n  "user",\n  "deltaBucket",\n  "deleted",\n  "namespace",\n  "cityName",\n  "countryName",\n  "regionIsoCode",\n  "metroCode",\n  "countryIsoCode",\n  "regionName"\nFROM source\nPARTITIONED BY DAY\n')))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review the generated SQL query to make sure it matches your requirements and does what you expect.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Run")," to start the ingestion."))))}g.isMDXComponent=!0},73292:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/tutorial-msq-convert-3042e5d3f5b8888781ad4d07c246e42a.png"}}]);