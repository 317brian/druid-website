"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9284],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,y=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],s={id:"tutorial-query-deep-storage",title:"Tutorial: Query from deep storage",sidebar_label:"Query from deep storage"},i=void 0,u={unversionedId:"tutorials/tutorial-query-deep-storage",id:"tutorials/tutorial-query-deep-storage",title:"Tutorial: Query from deep storage",description:"\x3c!--",source:"@site/docs/latest/tutorials/tutorial-query-deep-storage.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-query-deep-storage",permalink:"/docs/latest/tutorials/tutorial-query-deep-storage",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-query-deep-storage",title:"Tutorial: Query from deep storage",sidebar_label:"Query from deep storage"},sidebar:"docs",previous:{title:"Unnesting arrays",permalink:"/docs/latest/tutorials/tutorial-unnest-arrays"},next:{title:"Query for latest data",permalink:"/docs/latest/tutorials/tutorial-latest-by"}},p={},d=[{value:"Load example data",id:"load-example-data",level:2},{value:"Configure a load rule",id:"configure-a-load-rule",level:2},{value:"Verify the replication factor",id:"verify-the-replication-factor",level:3},{value:"Query from deep storage",id:"query-from-deep-storage",level:2},{value:"Get query status",id:"get-query-status",level:2},{value:"Response for a running query",id:"response-for-a-running-query",level:3},{value:"Response for a completed query",id:"response-for-a-completed-query",level:3},{value:"Get query results",id:"get-query-results",level:2},{value:"Further reading",id:"further-reading",level:2}],c={toc:d},m="wrapper";function y(e){var t=e.components,s=(0,a.Z)(e,l);return(0,o.kt)(m,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Query from deep storage allows you to query segments that are stored only in deep storage, which provides lower costs than if you were to load everything onto Historical processes. The tradeoff is that queries from deep storage may take longer to complete. "),(0,o.kt)("p",null,"This tutorial walks you through loading example data, configuring load rules so that not all the segments get loaded onto Historical services, and querying data from deep storage. If you have ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#centralized-datasource-schema"},"centralized datasource schema enabled"),", you can query datasources that are only in deep storage without having any segment available on Historical."),(0,o.kt)("p",null,"To run the queries in this tutorial, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"ROUTER:PORT")," with the location of the Router process and its port number. For example, use ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8888")," for the quickstart deployment."),(0,o.kt)("p",null,"For more general information, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/query-deep-storage"},"Query from deep storage"),"."),(0,o.kt)("p",null,"If you are trying this feature on an existing cluster, make sure query from deep storage ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/query-deep-storage#prerequisites"},"prerequisites")," are met."),(0,o.kt)("h2",{id:"load-example-data"},"Load example data"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("strong",{parentName:"p"},"Load data")," wizard or the following SQL query to ingest the ",(0,o.kt)("inlineCode",{parentName:"p"},"wikipedia")," sample datasource bundled with Druid. If you use the wizard, make sure you change the partitioning to be by hour."),(0,o.kt)("p",null,"Partitioning by hour provides more segment granularity, so you can selectively load segments onto Historicals or keep them in deep storage."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show the query"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE INTO "wikipedia" OVERWRITE ALL\nWITH "ext" AS (SELECT *\nFROM TABLE(\n  EXTERN(\n    \'{"type":"http","uris":["https://druid.apache.org/data/wikipedia.json.gz"]}\',\n    \'{"type":"json"}\'\n  )\n) EXTEND ("isRobot" VARCHAR, "channel" VARCHAR, "timestamp" VARCHAR, "flags" VARCHAR, "isUnpatrolled" VARCHAR, "page" VARCHAR, "diffUrl" VARCHAR, "added" BIGINT, "comment" VARCHAR, "commentLength" BIGINT, "isNew" VARCHAR, "isMinor" VARCHAR, "delta" BIGINT, "isAnonymous" VARCHAR, "user" VARCHAR, "deltaBucket" BIGINT, "deleted" BIGINT, "namespace" VARCHAR, "cityName" VARCHAR, "countryName" VARCHAR, "regionIsoCode" VARCHAR, "metroCode" BIGINT, "countryIsoCode" VARCHAR, "regionName" VARCHAR))\nSELECT\n  TIME_PARSE("timestamp") AS "__time",\n  "isRobot",\n  "channel",\n  "flags",\n  "isUnpatrolled",\n  "page",\n  "diffUrl",\n  "added",\n  "comment",\n  "commentLength",\n  "isNew",\n  "isMinor",\n  "delta",\n  "isAnonymous",\n  "user",\n  "deltaBucket",\n  "deleted",\n  "namespace",\n  "cityName",\n  "countryName",\n  "regionIsoCode",\n  "metroCode",\n  "countryIsoCode",\n  "regionName"\nFROM "ext"\nPARTITIONED BY HOUR\n'))),(0,o.kt)("h2",{id:"configure-a-load-rule"},"Configure a load rule"),(0,o.kt)("p",null,"The load rule configures Druid to keep any segments that fall within the following interval only in deep storage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2016-06-27T00:00:00.000Z/2016-06-27T02:59:00.000Z\n")),(0,o.kt)("p",null,"The JSON form of the rule is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "interval": "2016-06-27T00:00:00.000Z/2016-06-27T02:59:00.000Z",\n    "tieredReplicants": {},\n    "useDefaultTierForNull": false,\n    "type": "loadByInterval"\n  }\n]\n')),(0,o.kt)("p",null,"The rest of the segments use the default load rules for the cluster. For the quickstart, that means all the other segments get loaded onto Historical processes."),(0,o.kt)("p",null,"You can configure the load rules through the API or the Druid console. To configure the load rules through the Druid console, go to ",(0,o.kt)("strong",{parentName:"p"},"Datasources > ... in the Actions column > Edit retention rules"),". Then, paste the provided JSON into the JSON tab:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(22765).Z,width:"1250",height:"640"})),(0,o.kt)("h3",{id:"verify-the-replication-factor"},"Verify the replication factor"),(0,o.kt)("p",null,"Segments that are only available from deep storage have a ",(0,o.kt)("inlineCode",{parentName:"p"},"replication_factor")," of 0 in the Druid system table. You can verify that your load rule worked as intended using the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT "segment_id", "replication_factor", "num_replicas"  FROM sys."segments" WHERE datasource = \'wikipedia\'\n')),(0,o.kt)("p",null,"You can also verify it through the Druid console by checking the ",(0,o.kt)("strong",{parentName:"p"},"Replication factor")," column in the ",(0,o.kt)("strong",{parentName:"p"},"Segments")," view."),(0,o.kt)("p",null,"Note that the number of replicas and replication factor may differ temporarily as Druid processes your retention rules."),(0,o.kt)("h2",{id:"query-from-deep-storage"},"Query from deep storage"),(0,o.kt)("p",null,"Now that there are segments that are only available from deep storage, run the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT page FROM wikipedia WHERE __time <  TIMESTAMP'2016-06-27 00:10:00' LIMIT 10\n")),(0,o.kt)("p",null,"With the context parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"executionMode": "ASYNC"\n')),(0,o.kt)("p",null,"For example, run the following curl command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --location 'http://localhost:8888/druid/v2/sql/statements' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"query\":\"SELECT page FROM wikipedia WHERE __time <  TIMESTAMP'\\''2016-06-27 00:10:00'\\'' LIMIT 10\",\n    \"context\":{\n        \"executionMode\":\"ASYNC\"\n    }  \n}'\n")),(0,o.kt)("p",null,"This query looks for records with timestamps that precede ",(0,o.kt)("inlineCode",{parentName:"p"},"00:10:00"),". Based on the load rule you configured earlier, this data is only available from deep storage."),(0,o.kt)("p",null,"When you submit the query from deep storage through the API, you get the following response:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show the response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "queryId": "query-6888b6f6-e597-456c-9004-222b05b97051",\n    "state": "ACCEPTED",\n    "createdAt": "2023-07-28T21:59:02.334Z",\n    "schema": [\n        {\n            "name": "page",\n            "type": "VARCHAR",\n            "nativeType": "STRING"\n        }\n    ],\n    "durationMs": -1\n}\n')),(0,o.kt)("p",null,"Make sure you note the ",(0,o.kt)("inlineCode",{parentName:"p"},"queryID"),". You'll need it to interact with the query.")),(0,o.kt)("p",null,"Compare this to if you were to submit the query to Druid SQL's regular endpoint, ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /sql"),": "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --location 'http://localhost:8888/druid/v2/sql/' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"query\":\"SELECT page FROM wikipedia WHERE __time <  TIMESTAMP'\\''2016-06-27 00:10:00'\\'' LIMIT 10\",\n    \"context\":{\n        \"executionMode\":\"ASYNC\"\n    }  \n}'\n")),(0,o.kt)("p",null,"The response you get back is an empty response cause there are no records on the Historicals that match the query."),(0,o.kt)("h2",{id:"get-query-status"},"Get query status"),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},":queryId")," with the ID for your query and run the following curl command to get your query status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --location --request GET 'http://localhost:8888/druid/v2/sql/statements/:queryId' \\\n--header 'Content-Type: application/json' \\\n")),(0,o.kt)("h3",{id:"response-for-a-running-query"},"Response for a running query"),(0,o.kt)("p",null,"The response for a running query is the same as the response from when you submitted the query except the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"RUNNING")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"ACCEPTED"),"."),(0,o.kt)("h3",{id:"response-for-a-completed-query"},"Response for a completed query"),(0,o.kt)("p",null,"A successful query also returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," object that includes the page numbers (",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"), rows per page (",(0,o.kt)("inlineCode",{parentName:"p"},"numRows"),"), and the size of the page (",(0,o.kt)("inlineCode",{parentName:"p"},"sizeInBytes"),"). You can pass the page number as a parameter when you get results to refine the results you get."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"sampleRecords")," has been truncated for brevity."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show the response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "queryId": "query-6888b6f6-e597-456c-9004-222b05b97051",\n    "state": "SUCCESS",\n    "createdAt": "2023-07-28T21:59:02.334Z",\n    "schema": [\n        {\n            "name": "page",\n            "type": "VARCHAR",\n            "nativeType": "STRING"\n        }\n    ],\n    "durationMs": 87351,\n    "result": {\n        "numTotalRows": 152,\n        "totalSizeInBytes": 9036,\n        "dataSource": "__query_select",\n        "sampleRecords": [\n            [\n                "Salo Toraut"\n            ],\n            [\n                "\u5229\u7528\u8005:\u30ef\u30fc\u30ca\u30fc\u6210\u5897/\u653e\u9001\u30a6\u30fc\u30de\u30f3\u8cde"\n            ],\n            [\n                "Bailando 2015"\n            ],\n            ...\n            ...\n            ...\n        ],\n        "pages": [\n            {\n                "id": 0,\n                "numRows": 152,\n                "sizeInBytes": 9036\n            }\n        ]\n    }\n}\n'))),(0,o.kt)("h2",{id:"get-query-results"},"Get query results"),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},":queryId")," with the ID for your query and run the following curl command to get your query results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --location 'http://ROUTER:PORT/druid/v2/sql/statements/:queryId'\n")),(0,o.kt)("p",null,"Note that the response has been truncated for brevity."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show the response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "page": "Salo Toraut"\n    },\n    {\n        "page": "\u5229\u7528\u8005:\u30ef\u30fc\u30ca\u30fc\u6210\u5897/\u653e\u9001\u30a6\u30fc\u30de\u30f3\u8cde"\n    },\n    {\n        "page": "Bailando 2015"\n    },\n    ...\n    ...\n    ...\n]\n'))),(0,o.kt)("h2",{id:"further-reading"},"Further reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/querying/query-deep-storage"},"Query from deep storage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/api-reference/sql-api#query-from-deep-storage"},"Query from deep storage API reference"))))}y.isMDXComponent=!0},22765:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tutorial-query-deepstorage-retention-rule-ed99c67c161810ee03d3301b530d0ede.png"}}]);