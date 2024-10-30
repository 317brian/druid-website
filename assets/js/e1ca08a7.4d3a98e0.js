"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3064],{14137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=r(87462),n=r(63366),o=(r(67294),r(14137)),s=["components"],i={id:"query-deep-storage",title:"Query from deep storage"},l=void 0,u={unversionedId:"querying/query-deep-storage",id:"querying/query-deep-storage",title:"Query from deep storage",description:"\x3c!--",source:"@site/docs/31.0.0/querying/query-from-deep-storage.md",sourceDirName:"querying",slug:"/querying/query-deep-storage",permalink:"/docs/31.0.0/querying/query-deep-storage",draft:!1,tags:[],version:"current",frontMatter:{id:"query-deep-storage",title:"Query from deep storage"},sidebar:"docs",previous:{title:"Tips for writing good queries",permalink:"/docs/31.0.0/querying/tips-good-queries"},next:{title:"SQL data types",permalink:"/docs/31.0.0/querying/sql-data-types"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Keep segments in deep storage only",id:"keep-segments-in-deep-storage-only",level:2},{value:"Run a query from deep storage",id:"run-a-query-from-deep-storage",level:2},{value:"Submit a query",id:"submit-a-query",level:3},{value:"Get query status",id:"get-query-status",level:3},{value:"Get query results",id:"get-query-results",level:3},{value:"Further reading",id:"further-reading",level:2}],c={toc:d},m="wrapper";function h(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)(m,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Druid can query segments that are only stored in deep storage. Running a query from deep storage is slower than running queries from segments that are loaded on Historical processes, but it's a great tool for data that you either access infrequently or where the low latency results that typical Druid queries provide is not necessary. Queries from deep storage can increase the surface area of data available to query without requiring you to scale your Historical processes to accommodate more segments."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Query from deep storage requires the Multi-stage query (MSQ) task engine. Load the extension for it if you don't already have it enabled before you begin. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/multi-stage-query/#load-the-extension"},"enable MSQ")," for more information."),(0,o.kt)("p",null,"To be queryable, your datasource must meet one of the following conditions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"At least one segment from the datasource is loaded onto a Historical service for Druid to plan the query. This segment can be any segment from the datasource. You can verify that a datasource has at least one segment on a Historical service if it's visible in the Druid console."),(0,o.kt)("li",{parentName:"ul"},"You have the centralized datasource schema feature enabled. For more information, see ",(0,o.kt)("a",{parentName:"li",href:"/docs/31.0.0/configuration/#centralized-datasource-schema"},"Centralized datasource schema"),".")),(0,o.kt)("p",null,"If you use centralized data source schema, there's an additional step for any datasource created prior to enabling it to make the datasource queryable from deep storage. You need to load the segments from deep storage onto a Historical so that the schema can be backfilled in the metadata database. You can load some or all of the segments that are only in deep storage. If you don't load all the segments, any dimensions that are only in the segments you didn't load will not be in the queryable datasource schema and won't be queryable from deep storage. That is, only the dimensions that are present in the segment schema in metadata database are queryable. Once that process is complete, you can unload all the segments from the Historical and only keep the data in deep storage."),(0,o.kt)("h2",{id:"keep-segments-in-deep-storage-only"},"Keep segments in deep storage only"),(0,o.kt)("p",null,"Any data you ingest into Druid is already stored in deep storage, so you don't need to perform any additional configuration from that perspective. However, to take advantage of the cost savings that querying from deep storage provides, make sure not all your segments get loaded onto Historical processes. If you use centralized datasource schema, a datasource can be kept only in deep storage but remain queryable."),(0,o.kt)("p",null,"To manage which segments are kept only in deep storage and which get loaded onto Historical processes, configure ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/operations/rule-configuration#load-rules"},"load rules")," "),(0,o.kt)("p",null,"The easiest way to keep segments only in deep storage is to explicitly configure the segments that don't get loaded onto Historical processes. Set ",(0,o.kt)("inlineCode",{parentName:"p"},"tieredReplicants")," to an empty array and ",(0,o.kt)("inlineCode",{parentName:"p"},"useDefaultTierForNull")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". For example, if you configure the following rule for a datasource:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "interval": "2016-06-27T00:00:00.000Z/2016-06-27T02:59:00.000Z",\n    "tieredReplicants": {},\n    "useDefaultTierForNull": false,\n    "type": "loadByInterval"\n  }\n]\n')),(0,o.kt)("p",null,"Any segment that falls within the specified interval exists only in deep storage. For segments that aren't in this interval, they'll use the default cluster load rules or any other load rules you configure."),(0,o.kt)("p",null,"To configure the load rules through the Druid console, go to ",(0,o.kt)("strong",{parentName:"p"},"Datasources > ... in the Actions column > Edit retention rules"),". Then, paste the provided JSON into the JSON tab:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(50319).Z,width:"1250",height:"640"})),(0,o.kt)("p",null,"You can verify that a segment is not loaded on any Historical tiers by querying the Druid metadata table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT "segment_id", "replication_factor" FROM sys."segments" WHERE "replication_factor" = 0 AND "datasource" = YOUR_DATASOURCE\n')),(0,o.kt)("p",null,"Segments with a ",(0,o.kt)("inlineCode",{parentName:"p"},"replication_factor")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," are not assigned to any Historical tiers. Queries against these segments are run directly against the segment in deep storage. "),(0,o.kt)("p",null,"You can also confirm this through the Druid console. On the ",(0,o.kt)("strong",{parentName:"p"},"Segments")," page, see the ",(0,o.kt)("strong",{parentName:"p"},"Replication factor")," column."),(0,o.kt)("p",null,"Note that the actual number of replicas may differ from the replication factor temporarily as Druid processes your load rules."),(0,o.kt)("h2",{id:"run-a-query-from-deep-storage"},"Run a query from deep storage"),(0,o.kt)("h3",{id:"submit-a-query"},"Submit a query"),(0,o.kt)("p",null,"You can query data from deep storage by submitting a query to the API using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /sql/statements"),"  or the Druid console. Druid uses the multi-stage query (MSQ) task engine to perform the query."),(0,o.kt)("p",null,"To run a query from deep storage, send your query to the Router using the POST method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST https://ROUTER:8888/druid/v2/sql/statements\n")),(0,o.kt)("p",null,'Submitting a query from deep storage uses the same syntax as any other Druid SQL query where the query is contained in the "query" field in the JSON object within the request payload. For example:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"query" : "SELECT COUNT(*) FROM data_source WHERE foo = \'bar\'"}\n')),(0,o.kt)("p",null,"Generally, the request body fields are the same between the ",(0,o.kt)("inlineCode",{parentName:"p"},"sql")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sql/statements")," endpoints."),(0,o.kt)("p",null,"Apart from the context parameters mentioned ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/multi-stage-query/reference#context-parameters"},"here")," there are additional context parameters for ",(0,o.kt)("inlineCode",{parentName:"p"},"sql/statements"),": "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"executionMode"),"  (required) determines how query results are fetched. Set this to ",(0,o.kt)("inlineCode",{parentName:"li"},"ASYNC"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"selectDestination")," (optional) set to ",(0,o.kt)("inlineCode",{parentName:"li"},"durableStorage")," instructs Druid to write the results of SELECT queries to durable storage. For result sets with more than 3000 rows, it is highly recommended to use ",(0,o.kt)("inlineCode",{parentName:"li"},"durableStorage"),". Note that this requires you to have ",(0,o.kt)("a",{parentName:"li",href:"/docs/31.0.0/operations/durable-storage"},"durable storage for MSQ enabled"),".")),(0,o.kt)("p",null,"The following sample query includes the two additional context parameters that querying from deep storage supports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location \'http://localhost:8888/druid/v2/sql/statements\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "query":"SELECT * FROM \\"YOUR_DATASOURCE\\" where \\"__time\\" >TIMESTAMP\'\\\'\'2017-09-01\'\\\'\' and \\"__time\\" <= TIMESTAMP\'\\\'\'2017-09-02\'\\\'\'",\n    "context":{\n        "executionMode":"ASYNC",\n        "selectDestination": "durableStorage"\n\n    }  \n}\'\n')),(0,o.kt)("p",null,"The response for submitting a query includes the query ID along with basic information, such as when you submitted the query and the schema of the results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryId": "query-ALPHANUMBERIC-STRING",\n  "state": "ACCEPTED",\n  "createdAt": CREATION_TIMESTAMP,\n"schema": [\n  {\n    "name": COLUMN_NAME,\n    "type": COLUMN_TYPE,\n    "nativeType": COLUMN_TYPE\n  },\n  ...\n],\n"durationMs": DURATION_IN_MS,\n}\n')),(0,o.kt)("h3",{id:"get-query-status"},"Get query status"),(0,o.kt)("p",null,"You can check the status of a query with the following API call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET https://ROUTER:8888/druid/v2/sql/statements/QUERYID\n")),(0,o.kt)("p",null,"The query returns the status of the query, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ACCEPTED")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"RUNNING"),". Before you attempt to get results, make sure the state is ",(0,o.kt)("inlineCode",{parentName:"p"},"SUCCESS"),". "),(0,o.kt)("p",null,"When you check the status on a successful query,  it includes useful information about your query results including a sample record and information about how the results are organized by ",(0,o.kt)("inlineCode",{parentName:"p"},"pages"),". The information for each page includes the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"numRows"),": the number of rows in that page of results"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sizeInBytes"),": the size of the page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id"),": the indexed page number that you can use to reference a specific page when you get query results")),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," as a parameter to refine the results you retrieve. "),(0,o.kt)("p",null,"The following snippet shows the structure of the ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "result": {\n    "numTotalRows": INTEGER,\n    "totalSizeInBytes": INTEGER,\n    "dataSource": "__query_select",\n    "sampleRecords": [\n      [\n        RECORD_1,\n        RECORD_2,\n        ...\n      ]\n    ],\n    "pages": [\n      {\n        "numRows": INTEGER,\n        "sizeInBytes": INTEGER,\n        "id": INTEGER_PAGE_NUMBER\n      }\n      ...\n    ]\n}\n}\n')),(0,o.kt)("h3",{id:"get-query-results"},"Get query results"),(0,o.kt)("p",null,"Only the user who submitted a query can retrieve the results for the query."),(0,o.kt)("p",null,"Use the following endpoint to retrieve results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET https://ROUTER:8888/druid/v2/sql/statements/QUERYID/results?page=PAGENUMBER&resultFormat=FORMAT\n")),(0,o.kt)("p",null,"Results are returned in JSON format."),(0,o.kt)("p",null,"You can use the optional ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," parameter to refine your results, and ",(0,o.kt)("inlineCode",{parentName:"p"},"resultFormat")," parameter to define the format in which the results will be presented. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can retrieve the ",(0,o.kt)("inlineCode",{parentName:"li"},"page")," information for your results by fetching the status of the completed query."),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"resultFormat")," the following options are supported ",(0,o.kt)("inlineCode",{parentName:"li"},"arrayLines"),",",(0,o.kt)("inlineCode",{parentName:"li"},"objectLines"),",",(0,o.kt)("inlineCode",{parentName:"li"},"array"),",",(0,o.kt)("inlineCode",{parentName:"li"},"object"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"csv"),". Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),". More documentation present ",(0,o.kt)("a",{parentName:"li",href:"/docs/31.0.0/api-reference/sql-api#request-body"},"here"),". ")),(0,o.kt)("p",null,"When you try to get results for a query from deep storage, you may receive an error that states the query is still running. Wait until the query completes before you try again."),(0,o.kt)("h2",{id:"further-reading"},"Further reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/31.0.0/tutorials/tutorial-query-deep-storage"},"Query from deep storage tutorial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/31.0.0/api-reference/sql-api#query-from-deep-storage"},"Query from deep storage API reference"))))}h.isMDXComponent=!0},50319:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/tutorial-query-deepstorage-retention-rule-ed99c67c161810ee03d3301b530d0ede.png"}}]);