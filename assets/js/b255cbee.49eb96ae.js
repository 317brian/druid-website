"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9589],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,y=d["".concat(u,".").concat(h)]||d[h]||c[h]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},13725:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"query-execution",title:"Query execution"},u=void 0,l={unversionedId:"querying/query-execution",id:"querying/query-execution",title:"Query execution",description:"\x3c!--",source:"@site/docs/31.0.1/querying/query-execution.md",sourceDirName:"querying",slug:"/querying/query-execution",permalink:"/docs/31.0.1/querying/query-execution",draft:!1,tags:[],version:"current",frontMatter:{id:"query-execution",title:"Query execution"},sidebar:"docs",previous:{title:"Query processing",permalink:"/docs/31.0.1/querying/query-processing"},next:{title:"Troubleshooting",permalink:"/docs/31.0.1/querying/troubleshooting"}},p={},d=[{value:"Datasource type",id:"datasource-type",level:2},{value:"<code>table</code>",id:"table",level:3},{value:"<code>lookup</code>",id:"lookup",level:3},{value:"<code>union</code>",id:"union",level:3},{value:"<code>inline</code>",id:"inline",level:3},{value:"<code>query</code>",id:"query",level:3},{value:"<code>join</code>",id:"join",level:3}],c={toc:d},h="wrapper";function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(h,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"}," This document describes how Druid executes ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/"},"native queries"),", but since ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/sql"},"Druid SQL")," queries\nare translated to native queries, this document applies to the SQL runtime as well. Refer to the SQL\n",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/sql-translation"},"Query translation")," page for information about how SQL queries are translated to native\nqueries.")),(0,o.kt)("p",null,"Druid's approach to query execution varies depending on the kind of ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/datasource"},"datasource")," you are querying."),(0,o.kt)("h2",{id:"datasource-type"},"Datasource type"),(0,o.kt)("h3",{id:"table"},(0,o.kt)("inlineCode",{parentName:"h3"},"table")),(0,o.kt)("p",null,"Queries that operate directly on ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/datasource#table"},"table datasources")," are executed using a scatter-gather approach\nled by the Broker process. The process looks like this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Broker identifies which ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/design/segments"},"segments")," are relevant to the query based on the ",(0,o.kt)("inlineCode",{parentName:"p"},'"intervals"'),"\nparameter. Segments are always partitioned by time, so any segment whose interval overlaps the query interval is\npotentially relevant.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Broker may additionally further prune the segment list based on the ",(0,o.kt)("inlineCode",{parentName:"p"},'"filter"'),", if the input data was partitioned\nby range using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/ingestion/native-batch#partitionsspec"},(0,o.kt)("inlineCode",{parentName:"a"},"single_dim")," partitionsSpec"),", and if the filter matches\nthe dimension used for partitioning.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Broker, having pruned the list of segments for the query, forwards the query to data servers (like Historicals\nand tasks running on Middle Managers) that are currently serving those segments.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For all query types except ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/scan-query"},"Scan"),", data servers process each segment in parallel and generate partial\nresults for each segment. The specific processing that is done depends on the query type. These partial results may be\ncached if ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/caching"},"query caching")," is enabled. For Scan queries, segments are processed in order by a single thread,\nand results are not cached.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Broker receives partial results from each data server, merges them into the final result set, and returns them\nto the caller. For Timeseries and Scan queries, and for GroupBy queries where there is no sorting, the Broker is able to\ndo this in a streaming fashion. Otherwise, the Broker fully computes the result set before returning anything."))),(0,o.kt)("h3",{id:"lookup"},(0,o.kt)("inlineCode",{parentName:"h3"},"lookup")),(0,o.kt)("p",null,"Queries that operate directly on ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/datasource#lookup"},"lookup datasources")," (without a join) are executed on the Broker\nthat received the query, using its local copy of the lookup. All registered lookup tables are preloaded in-memory on the\nBroker. The query runs single-threaded."),(0,o.kt)("p",null,'Execution of queries that use lookups as right-hand inputs to a join are executed in a way that depends on their\n"base" (bottom-leftmost) datasource, as described in the ',(0,o.kt)("a",{parentName:"p",href:"#join"},"join")," section below."),(0,o.kt)("h3",{id:"union"},(0,o.kt)("inlineCode",{parentName:"h3"},"union")),(0,o.kt)("p",null,"Queries that operate directly on ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/datasource#union"},"union datasources")," are split up on the Broker into a separate\nquery for each table that is part of the union. Each of these queries runs separately, and the Broker merges their\nresults together."),(0,o.kt)("h3",{id:"inline"},(0,o.kt)("inlineCode",{parentName:"h3"},"inline")),(0,o.kt)("p",null,"Queries that operate directly on ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/datasource#inline"},"inline datasources")," are executed on the Broker that received the\nquery. The query runs single-threaded."),(0,o.kt)("p",null,'Execution of queries that use inline datasources as right-hand inputs to a join are executed in a way that depends on\ntheir "base" (bottom-leftmost) datasource, as described in the ',(0,o.kt)("a",{parentName:"p",href:"#join"},"join")," section below."),(0,o.kt)("h3",{id:"query"},(0,o.kt)("inlineCode",{parentName:"h3"},"query")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/datasource#query"},"Query datasources")," are subqueries. Each subquery is executed as if it was its own query and\nthe results are brought back to the Broker. Then, the Broker continues on with the rest of the query as if the subquery\nwas replaced with an inline datasource."),(0,o.kt)("p",null,"In most cases, Druid buffers subquery results in memory on the Broker before the rest of the query proceeds.\nTherefore, subqueries execute sequentially. The total number of rows buffered across all subqueries of a given query\ncannot exceed the ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/configuration/"},(0,o.kt)("inlineCode",{parentName:"a"},"druid.server.http.maxSubqueryRows"))," which defaults to 100000 rows, or the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/configuration/"},(0,o.kt)("inlineCode",{parentName:"a"},"druid.server.http.maxSubqueryBytes"))," if set. Otherwise, Druid throws a resource limit exceeded\nexception."),(0,o.kt)("p",null,"There is one exception: if the outer query is of type ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/groupbyquery"},(0,o.kt)("inlineCode",{parentName:"a"},"groupBy")),", and has a ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSource")," of type\n",(0,o.kt)("inlineCode",{parentName:"p"},"query")," that is itself another ",(0,o.kt)("inlineCode",{parentName:"p"},"groupBy"),", then subquery results can be processed in a streaming fashion. In this case\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.server.http.maxSubqueryRows")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.server.http.maxSubqueryBytes")," limits do not apply."),(0,o.kt)("h3",{id:"join"},(0,o.kt)("inlineCode",{parentName:"h3"},"join")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/datasource#join"},"Join datasources")," are handled using a broadcast hash-join approach."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Broker executes any subqueries that are inputs the join, as described in the ",(0,o.kt)("a",{parentName:"p",href:"#query"},"query")," section, and\nreplaces them with inline datasources.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'The Broker flattens a join tree, if present, into a "base" datasource (the bottom-leftmost one) and other leaf\ndatasources (the rest).')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query execution proceeds using the same structure that the base datasource would use on its own. If the base\ndatasource is a ",(0,o.kt)("a",{parentName:"p",href:"#table"},"table"),", segments are pruned based on ",(0,o.kt)("inlineCode",{parentName:"p"},'"intervals"')," as usual, and the query is executed on the\ncluster by forwarding it to all relevant data servers in parallel. If the base datasource is a ",(0,o.kt)("a",{parentName:"p",href:"#lookup"},"lookup")," or\n",(0,o.kt)("a",{parentName:"p",href:"#inline"},"inline")," datasource (including an inline datasource that was the result of inlining a subquery), the query is\nexecuted on the Broker itself. The base query cannot be a union, because unions are not currently supported as inputs to\na join.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Before beginning to process the base datasource, the server(s) that will execute the query first inspect all the\nnon-base leaf datasources to determine if a new hash table needs to be built for the upcoming hash join. Currently,\nlookups do not require new hash tables to be built (because they are preloaded), but inline datasources do.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query execution proceeds again using the same structure that the base datasource would use on its own, with one\naddition: while processing the base datasource, Druid servers will use the hash tables built from the other join inputs\nto produce the join result row-by-row, and query engines will operate on the joined rows rather than the base rows."))))}y.isMDXComponent=!0}}]);