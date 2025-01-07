"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5403],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,h=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return r?a.createElement(h,l(l({ref:t},d),{},{components:r})):a.createElement(h,l({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"querying",title:"Native queries"},u=void 0,s={unversionedId:"querying/querying",id:"querying/querying",title:"Native queries",description:"\x3c!--",source:"@site/docs/latest/querying/querying.md",sourceDirName:"querying",slug:"/querying/",permalink:"/docs/latest/querying/",draft:!1,tags:[],version:"current",frontMatter:{id:"querying",title:"Native queries"},sidebar:"docs",previous:{title:"SQL query translation",permalink:"/docs/latest/querying/sql-translation"},next:{title:"Query processing",permalink:"/docs/latest/querying/query-processing"}},d={},p=[{value:"Available queries",id:"available-queries",level:2},{value:"Aggregation queries",id:"aggregation-queries",level:3},{value:"Metadata queries",id:"metadata-queries",level:3},{value:"Other queries",id:"other-queries",level:3},{value:"Which query type should I use?",id:"which-query-type-should-i-use",level:2},{value:"Query cancellation",id:"query-cancellation",level:2},{value:"Query errors",id:"query-errors",level:2},{value:"Authentication and authorization failures",id:"authentication-and-authorization-failures",level:3},{value:"Query execution failures",id:"query-execution-failures",level:3}],c={toc:p},m="wrapper";function h(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.kt)(m,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Apache Druid supports two query languages: ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql"},"Druid SQL")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"native queries"),".\nThis document describes the\nnative query language. For information about how Druid SQL chooses which native query types to use when\nit runs a SQL query, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-translation#query-types"},"SQL documentation"),".")),(0,i.kt)("p",null,"Native queries in Druid are JSON objects and are typically issued to the Broker or Router processes. Queries can be\nposted like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST '<queryable_host>:<port>/druid/v2/?pretty' -H 'Content-Type:application/json' -H 'Accept:application/json' -d @<query_json_file>\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<queryable_host>:<port>")," with the appropriate address and port for your system. For example, if running the quickstart configuration, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<queryable_host>:<port>")," with localhost:8888.")),(0,i.kt)("p",null,"You can also enter them directly in the web console's Query view. Simply pasting a native query into the console switches the editor into JSON mode."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Native query",src:r(97850).Z,title:"Native query",width:"1250",height:"640"})),(0,i.kt)("p",null,"Druid's native query language is JSON over HTTP, although many members of the community have contributed different\n",(0,i.kt)("a",{parentName:"p",href:"https://druid.apache.org/libraries.html"},"client libraries")," in other languages to query Druid."),(0,i.kt)("p",null,"The Content-Type/Accept Headers can also take 'application/x-jackson-smile'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST '<queryable_host>:<port>/druid/v2/?pretty' -H 'Content-Type:application/json' -H 'Accept:application/x-jackson-smile' -d @<query_json_file>\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," If the Accept header is not provided, it defaults to the value of 'Content-Type' header.")),(0,i.kt)("p",null,"Druid's native query is relatively low level, mapping closely to how computations are performed internally. Druid queries\nare designed to be lightweight and complete very quickly. This means that for more complex analysis, or to build\nmore complex visualizations, multiple Druid queries may be required."),(0,i.kt)("p",null,"Even though queries are typically made to Brokers or Routers, they can also be accepted by\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/design/historical"},"Historical")," processes and by ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/design/peons"},"Peons (task JVMs)")," that are running\nstream ingestion tasks. This may be valuable if you want to query results for specific segments that are served by\nspecific processes."),(0,i.kt)("h2",{id:"available-queries"},"Available queries"),(0,i.kt)("p",null,"Druid has numerous query types for various use cases. Queries are composed of various JSON properties and Druid has different types of queries for different use cases. The documentation for the various query types describe all the JSON properties that can be set."),(0,i.kt)("h3",{id:"aggregation-queries"},"Aggregation queries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/querying/timeseriesquery"},"Timeseries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/querying/topnquery"},"TopN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/querying/groupbyquery"},"GroupBy"))),(0,i.kt)("h3",{id:"metadata-queries"},"Metadata queries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/querying/timeboundaryquery"},"TimeBoundary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/querying/segmentmetadataquery"},"SegmentMetadata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/querying/datasourcemetadataquery"},"DatasourceMetadata"))),(0,i.kt)("h3",{id:"other-queries"},"Other queries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/querying/scan-query"},"Scan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/querying/searchquery"},"Search"))),(0,i.kt)("h2",{id:"which-query-type-should-i-use"},"Which query type should I use?"),(0,i.kt)("p",null,"For aggregation queries, if more than one would satisfy your needs, we generally recommend using Timeseries or TopN\nwhenever possible, as they are specifically optimized for their use cases. If neither is a good fit, you should use\nthe GroupBy query, which is the most flexible."),(0,i.kt)("h2",{id:"query-cancellation"},"Query cancellation"),(0,i.kt)("p",null,"Queries can be cancelled explicitly using their unique identifier.  If the\nquery identifier is set at the time of query, or is otherwise known, the following\nendpoint can be used on the Broker or Router to cancel the query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"DELETE /druid/v2/{queryId}\n")),(0,i.kt)("p",null,"For example, if the query ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"abc123"),", the query can be cancelled as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X DELETE "http://host:port/druid/v2/abc123"\n')),(0,i.kt)("h2",{id:"query-errors"},"Query errors"),(0,i.kt)("h3",{id:"authentication-and-authorization-failures"},"Authentication and authorization failures"),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/operations/auth"},"secured")," Druid clusters, query requests respond with an HTTP 401 response code in case of an authentication failure. For authorization failures, an HTTP 403 response code is returned. "),(0,i.kt)("h3",{id:"query-execution-failures"},"Query execution failures"),(0,i.kt)("p",null,"If a query fails, Druid returns a response with an HTTP response code and a JSON object with the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error" : "Query timeout",\n  "errorMessage" : "Timeout waiting for task.",\n  "errorClass" : "java.util.concurrent.TimeoutException",\n  "host" : "druid1.example.com:8083"\n}\n')),(0,i.kt)("p",null,"The fields in the response are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"field"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"error"),(0,i.kt)("td",{parentName:"tr",align:null},"A well-defined error code (see below).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"errorMessage"),(0,i.kt)("td",{parentName:"tr",align:null},"A free-form message with more information about the error. May be null.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"errorClass"),(0,i.kt)("td",{parentName:"tr",align:null},"The class of the exception that caused this error. May be null.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"host"),(0,i.kt)("td",{parentName:"tr",align:null},"The host on which this error occurred. May be null.")))),(0,i.kt)("p",null,"Possible Druid error codes for the ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," field include:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Error code"),(0,i.kt)("th",{parentName:"tr",align:null},"HTTP response code"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SQL parse failed")),(0,i.kt)("td",{parentName:"tr",align:null},"400"),(0,i.kt)("td",{parentName:"tr",align:null},"Only for SQL queries. The SQL query failed to parse.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Plan validation failed")),(0,i.kt)("td",{parentName:"tr",align:null},"400"),(0,i.kt)("td",{parentName:"tr",align:null},"Only for SQL queries. The SQL query failed to validate.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Resource limit exceeded")),(0,i.kt)("td",{parentName:"tr",align:null},"400"),(0,i.kt)("td",{parentName:"tr",align:null},"The query exceeded a configured resource limit (e.g. groupBy maxResults).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Query capacity exceeded")),(0,i.kt)("td",{parentName:"tr",align:null},"429"),(0,i.kt)("td",{parentName:"tr",align:null},"The query failed to execute because of the lack of resources available at the time when the query was submitted. The resources could be any runtime resources such as ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/configuration/#query-prioritization-and-laning"},"query scheduler lane capacity"),", merge buffers, and so on. The error message should have more details about the failure.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Unsupported operation")),(0,i.kt)("td",{parentName:"tr",align:null},"501"),(0,i.kt)("td",{parentName:"tr",align:null},"The query attempted to perform an unsupported operation. This may occur when using undocumented features or when using an incompletely implemented extension.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Query timeout")),(0,i.kt)("td",{parentName:"tr",align:null},"504"),(0,i.kt)("td",{parentName:"tr",align:null},"The query timed out.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Query interrupted")),(0,i.kt)("td",{parentName:"tr",align:null},"500"),(0,i.kt)("td",{parentName:"tr",align:null},"The query was interrupted, possibly due to JVM shutdown.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Query cancelled")),(0,i.kt)("td",{parentName:"tr",align:null},"500"),(0,i.kt)("td",{parentName:"tr",align:null},"The query was cancelled through the query cancellation API.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Truncated response context")),(0,i.kt)("td",{parentName:"tr",align:null},"500"),(0,i.kt)("td",{parentName:"tr",align:null},"An intermediate response context for the query exceeded the built-in limit of 7KiB.",(0,i.kt)("br",null),(0,i.kt)("br",null),"The response context is an internal data structure that Druid servers use to share out-of-band information when sending query results to each other. It is serialized in an HTTP header with a maximum length of 7KiB. This error occurs when an intermediate response context sent from a data server (like a Historical) to the Broker exceeds this limit.",(0,i.kt)("br",null),(0,i.kt)("br",null),"The response context is used for a variety of purposes, but the one most likely to generate a large context is sharing details about segments that move during a query. That means this error can potentially indicate that a very large number of segments moved in between the time a Broker issued a query and the time it was processed on Historicals. This should rarely, if ever, occur during normal operation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Unknown exception")),(0,i.kt)("td",{parentName:"tr",align:null},"500"),(0,i.kt)("td",{parentName:"tr",align:null},"Some other exception occurred. Check errorMessage and errorClass for details, although keep in mind that the contents of those fields are free-form and may change from release to release.")))))}h.isMDXComponent=!0},97850:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/native-queries-01-9fe30809e74a2183b369dbe491f2d998.png"}}]);