"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,c=p["".concat(d,".").concat(g)]||p[g]||m[g]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},20656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"stats",title:"Stats aggregator"},d=void 0,u={unversionedId:"development/extensions-core/stats",id:"development/extensions-core/stats",title:"Stats aggregator",description:"\x3c!--",source:"@site/docs/30.0.1/development/extensions-core/stats.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/stats",permalink:"/docs/30.0.1/development/extensions-core/stats",draft:!1,tags:[],version:"current",frontMatter:{id:"stats",title:"Stats aggregator"}},s={},p=[{value:"Variance aggregator",id:"variance-aggregator",level:2},{value:"Variance and Standard Deviation SQL Aggregators",id:"variance-and-standard-deviation-sql-aggregators",level:3},{value:"Pre-aggregating variance at ingestion time",id:"pre-aggregating-variance-at-ingestion-time",level:3},{value:"Standard deviation post-aggregator",id:"standard-deviation-post-aggregator",level:3},{value:"Query examples:",id:"query-examples",level:2},{value:"Timeseries query",id:"timeseries-query",level:3},{value:"Druid SQL",id:"druid-sql",level:4},{value:"Native Query",id:"native-query",level:4},{value:"TopN query",id:"topn-query",level:3},{value:"Druid SQL",id:"druid-sql-1",level:4},{value:"Native Query",id:"native-query-1",level:4},{value:"GroupBy query",id:"groupby-query",level:3},{value:"Druid SQL",id:"druid-sql-2",level:4},{value:"Native Query",id:"native-query-2",level:4}],m={toc:p},g="wrapper";function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(g,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This Apache Druid extension includes stat-related aggregators, including variance and standard deviations, etc. Make sure to ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/configuration/extensions#loading-extensions"},"include")," ",(0,i.kt)("inlineCode",{parentName:"p"},"druid-stats")," in the extensions load list."),(0,i.kt)("h2",{id:"variance-aggregator"},"Variance aggregator"),(0,i.kt)("p",null,"Algorithm of the aggregator is the same with that of apache hive. This is the description in GenericUDAFVariance in hive."),(0,i.kt)("p",null,'Evaluate the variance using the algorithm described by Chan, Golub, and LeVeque in\n"Algorithms for computing the sample variance: analysis and recommendations"\nThe American Statistician, 37 (1983) pp. 242--247.'),(0,i.kt)("p",null,"variance = variance1 + variance2 + n/(m",(0,i.kt)("em",{parentName:"p"},"(m+n)) ")," pow(((m/n)*t1 - t2),2)"),(0,i.kt)("p",null,"where: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"variance is sum(x-avg^2) (this is actually n times the variance)\nand is updated at every step. "),(0,i.kt)("li",{parentName:"ul"},"n is the count of elements in chunk1 "),(0,i.kt)("li",{parentName:"ul"},"m is the count of elements in chunk2 "),(0,i.kt)("li",{parentName:"ul"},"t1 is the sum of elements in chunk1"),(0,i.kt)("li",{parentName:"ul"},"t2 is the sum of elements in chunk2")),(0,i.kt)("p",null,'This algorithm was proven to be numerically stable by J.L. Barlow in\n"Error analysis of a pairwise summation algorithm to compute sample variance"\nNumer. Math, 58 (1991) pp. 583--590'),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," As with all ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/sql-aggregations"},"aggregators"),', the order of operations across segments is\nnon-deterministic. This means that if this aggregator operates with an input type of "float" or "double", the result\nof the aggregation may not be precisely the same across multiple runs of the query.'),(0,i.kt)("p",{parentName:"admonition"}," To produce consistent results, round the variance to a fixed number of decimal places so that the results are\nprecisely the same across query runs.")),(0,i.kt)("h3",{id:"variance-and-standard-deviation-sql-aggregators"},"Variance and Standard Deviation SQL Aggregators"),(0,i.kt)("p",null,"You can use the variance and standard deviation aggregation functions in the SELECT clause of any Druid SQL query."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Function"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"VAR_POP(expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Computes variance population of ",(0,i.kt)("inlineCode",{parentName:"td"},"expr"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," if ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.generic.useDefaultValueForNull=true")," (deprecated legacy mode)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"VAR_SAMP(expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Computes variance sample of ",(0,i.kt)("inlineCode",{parentName:"td"},"expr"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," if ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.generic.useDefaultValueForNull=true")," (deprecated legacy mode)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"VARIANCE(expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Computes variance sample of ",(0,i.kt)("inlineCode",{parentName:"td"},"expr"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," if ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.generic.useDefaultValueForNull=true")," (deprecated legacy mode)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STDDEV_POP(expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Computes standard deviation population of ",(0,i.kt)("inlineCode",{parentName:"td"},"expr"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," if ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.generic.useDefaultValueForNull=true")," (deprecated legacy mode)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STDDEV_SAMP(expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Computes standard deviation sample of ",(0,i.kt)("inlineCode",{parentName:"td"},"expr"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," if ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.generic.useDefaultValueForNull=true")," (deprecated legacy mode)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STDDEV(expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Computes standard deviation sample of ",(0,i.kt)("inlineCode",{parentName:"td"},"expr"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," if ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.generic.useDefaultValueForNull=true")," (deprecated legacy mode)")))),(0,i.kt)("h3",{id:"pre-aggregating-variance-at-ingestion-time"},"Pre-aggregating variance at ingestion time"),(0,i.kt)("p",null,'To use this feature, an "variance" aggregator must be included at indexing time.\nThe ingestion aggregator can only apply to numeric values. If you use "variance"\nthen any input rows missing the value will be considered to have a value of 0.'),(0,i.kt)("p",null,'User can specify expected input type as one of "float", "double", "long", "variance" for ingestion, which is by default "float".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "variance",\n  "name" : <output_name>,\n  "fieldName" : <metric_name>,\n  "inputType" : <input_type>,\n  "estimator" : <string>\n}\n')),(0,i.kt)("p",null,'To query for results, "variance" aggregator with "variance" input type or simply a "varianceFold" aggregator must be included in the query.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "varianceFold",\n  "name" : <output_name>,\n  "fieldName" : <metric_name>,\n  "estimator" : <string>\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"estimator")),(0,i.kt)("td",{parentName:"tr",align:null},'Set "population" to get variance_pop rather than variance_sample, which is default.'),(0,i.kt)("td",{parentName:"tr",align:null},"null")))),(0,i.kt)("h3",{id:"standard-deviation-post-aggregator"},"Standard deviation post-aggregator"),(0,i.kt)("p",null,'To acquire standard deviation from variance, user can use "stddev" post aggregator.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "stddev",\n  "name": "<output_name>",\n  "fieldName": "<aggregator_name>",\n  "estimator": <string>\n}\n')),(0,i.kt)("h2",{id:"query-examples"},"Query examples:"),(0,i.kt)("h3",{id:"timeseries-query"},"Timeseries query"),(0,i.kt)("h4",{id:"druid-sql"},"Druid SQL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT \n  DATE_TRUNC('day', __time),\n  VARIANCE(\"index_var\") AS index_var\nFROM \"testing\"\nWHERE TIME_IN_INTERVAL(__time, '2013-03-01/2016-03-20')\nGROUP BY 1\n")),(0,i.kt)("h4",{id:"native-query"},"Native Query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "timeseries",\n  "dataSource": "testing",\n  "granularity": "day",\n  "aggregations": [\n    {\n      "type": "variance",\n      "name": "index_var",\n      "fieldName": "index_var"\n    }\n  ],\n  "intervals": [\n    "2016-03-01/2013-03-20"\n  ]\n}\n')),(0,i.kt)("h3",{id:"topn-query"},"TopN query"),(0,i.kt)("h4",{id:"druid-sql-1"},"Druid SQL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SQL"},'SELECT\n  alias,\n  VARIANCE("index") AS index_var\nFROM "testing"\nWHERE TIME_IN_INTERVAL(__time, \'2016-03-06/2016-03-07\')\nGROUP BY 1\nORDER BY 2\nLIMIT 5\n')),(0,i.kt)("h4",{id:"native-query-1"},"Native Query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "topN",\n  "dataSource": "testing",\n  "dimensions": ["alias"],\n  "threshold": 5,\n  "granularity": "all",\n  "aggregations": [\n    {\n      "type": "variance",\n      "name": "index_var",\n      "fieldName": "index"\n    }\n  ],\n  "postAggregations": [\n    {\n      "type": "stddev",\n      "name": "index_stddev",\n      "fieldName": "index_var"\n    }\n  ],\n  "intervals": [\n    "2016-03-06/2016-03-07"\n  ]\n}\n')),(0,i.kt)("h3",{id:"groupby-query"},"GroupBy query"),(0,i.kt)("h4",{id:"druid-sql-2"},"Druid SQL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SQL"},'SELECT\n  alias,\n  VARIANCE("index") AS index_var\nFROM "testing"\nWHERE TIME_IN_INTERVAL(__time, \'2016-03-06/2016-03-07\')\nGROUP BY alias\n')),(0,i.kt)("h4",{id:"native-query-2"},"Native Query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "groupBy",\n  "dataSource": "testing",\n  "dimensions": ["alias"],\n  "granularity": "all",\n  "aggregations": [\n    {\n      "type": "variance",\n      "name": "index_var",\n      "fieldName": "index"\n    }\n  ],\n  "postAggregations": [\n    {\n      "type": "stddev",\n      "name": "index_stddev",\n      "fieldName": "index_var"\n    }\n  ],\n  "intervals": [\n    "2016-03-06/2016-03-07"\n  ]\n}\n')))}c.isMDXComponent=!0}}]);