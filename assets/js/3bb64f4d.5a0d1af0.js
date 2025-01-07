"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4550],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=m(a),k=r,N=u["".concat(d,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(N,i(i({ref:e},p),{},{components:a})):n.createElement(N,i({ref:e},p))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},10002:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>N,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"tutorial-update-data",title:"Update data",sidebar_label:"Update data",description:"Learn how to update data in Apache Druid."},d=void 0,m={unversionedId:"tutorials/tutorial-update-data",id:"tutorials/tutorial-update-data",title:"Update data",description:"Learn how to update data in Apache Druid.",source:"@site/docs/31.0.1/tutorials/tutorial-update-data.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-update-data",permalink:"/docs/31.0.1/tutorials/tutorial-update-data",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-update-data",title:"Update data",sidebar_label:"Update data",description:"Learn how to update data in Apache Druid."},sidebar:"docs",previous:{title:"Append data",permalink:"/docs/31.0.1/tutorials/tutorial-append-data"},next:{title:"Compact segments",permalink:"/docs/31.0.1/tutorials/tutorial-compaction"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Load sample data",id:"load-sample-data",level:2},{value:"Overwrite all data",id:"overwrite-all-data",level:2},{value:"Overwrite records for a specific time range",id:"overwrite-records-for-a-specific-time-range",level:2},{value:"Update a row using partial segment overshadowing",id:"update-a-row-using-partial-segment-overshadowing",level:2},{value:"Learn more",id:"learn-more",level:2}],s={toc:u},k="wrapper";function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)(k,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Apache Druid stores data and indexes in ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/design/segments"},"segment files")," partitioned by time.\nAfter Druid creates a segment, its contents can't be modified.\nYou can either replace data for the whole segment, or, in some cases, overshadow a portion of the segment data."),(0,l.kt)("p",null,"In Druid, use time ranges to specify the data you want to update, as opposed to a primary key or dimensions often used in transactional databases. Data outside the specified replacement time range remains unaffected.\nYou can use this Druid functionality to perform data updates, inserts, and deletes, similar to UPSERT functionality for transactional databases."),(0,l.kt)("p",null,"This tutorial shows you how to use the Druid SQL ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/multi-stage-query/reference#replace"},"REPLACE")," function with the OVERWRITE clause to update existing data."),(0,l.kt)("p",null,"The tutorial walks you through the following use cases:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#overwrite-all-data"},"Overwrite all data")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#overwrite-records-for-a-specific-time-range"},"Overwrite records for a specific time range")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#update-a-row-using-partial-segment-overshadowing"},"Update a row using partial segment overshadowing"))),(0,l.kt)("p",null,"All examples use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/multi-stage-query/"},"multi-stage query (MSQ)")," task engine to executes SQL statements."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Before you follow the steps in this tutorial, download Druid as described in ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/tutorials/"},"Quickstart (local)")," and have it running on your local machine. You don't need to load any data into the Druid cluster."),(0,l.kt)("p",null,"You should be familiar with data querying in Druid. If you haven't already, go through the ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/tutorials/tutorial-query"},"Query data")," tutorial first."),(0,l.kt)("h2",{id:"load-sample-data"},"Load sample data"),(0,l.kt)("p",null,"Load a sample dataset using ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/multi-stage-query/reference#replace"},"REPLACE")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/multi-stage-query/reference#extern-function"},"EXTERN")," functions.\nIn Druid SQL, the REPLACE function can create a new ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/design/storage"},"datasource")," or update an existing datasource."),(0,l.kt)("p",null,"In the Druid ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/operations/web-console"},"web console"),", go to the ",(0,l.kt)("strong",{parentName:"p"},"Query")," view and run the following query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE INTO "update_tutorial" OVERWRITE ALL\nWITH "ext" AS (\n  SELECT *\n  FROM TABLE(\n    EXTERN(\n     \'{"type":"inline","data":"{\\"timestamp\\":\\"2024-01-01T07:01:35Z\\",\\"animal\\":\\"octopus\\", \\"number\\":115}\\n{\\"timestamp\\":\\"2024-01-01T05:01:35Z\\",\\"animal\\":\\"mongoose\\", \\"number\\":737}\\n{\\"timestamp\\":\\"2024-01-01T06:01:35Z\\",\\"animal\\":\\"snake\\", \\"number\\":1234}\\n{\\"timestamp\\":\\"2024-01-01T01:01:35Z\\",\\"animal\\":\\"lion\\", \\"number\\":300}\\n{\\"timestamp\\":\\"2024-01-02T07:01:35Z\\",\\"animal\\":\\"seahorse\\", \\"number\\":115}\\n{\\"timestamp\\":\\"2024-01-02T05:01:35Z\\",\\"animal\\":\\"skunk\\", \\"number\\":737}\\n{\\"timestamp\\":\\"2024-01-02T06:01:35Z\\",\\"animal\\":\\"iguana\\", \\"number\\":1234}\\n{\\"timestamp\\":\\"2024-01-02T01:01:35Z\\",\\"animal\\":\\"opossum\\", \\"number\\":300}"}\',\n     \'{"type":"json"}\'\n    )\n  ) EXTEND ("timestamp" VARCHAR, "animal" VARCHAR, "number" BIGINT)\n)\nSELECT\n  TIME_PARSE("timestamp") AS "__time",\n  "animal",\n  "number"\nFROM "ext"\nPARTITIONED BY DAY\n\n')),(0,l.kt)("p",null,"In the resulting ",(0,l.kt)("inlineCode",{parentName:"p"},"update_tutorial")," datasource, individual rows are uniquely identified by ",(0,l.kt)("inlineCode",{parentName:"p"},"__time"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"animal"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),".\nTo view the results, open a new tab and run the following query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM "update_tutorial"\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null," View the results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"__time")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"animal")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"number")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-01T01:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lion")),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-01T05:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mongoose")),(0,l.kt)("td",{parentName:"tr",align:null},"737")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-01T06:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"snake")),(0,l.kt)("td",{parentName:"tr",align:null},"1234")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-01T07:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"octopus")),(0,l.kt)("td",{parentName:"tr",align:null},"115")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T01:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"opossum")),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T05:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"skunk")),(0,l.kt)("td",{parentName:"tr",align:null},"737")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T06:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iguana")),(0,l.kt)("td",{parentName:"tr",align:null},"1234")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T07:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"seahorse")),(0,l.kt)("td",{parentName:"tr",align:null},"115"))))),(0,l.kt)("p",null,"The results contain records for eight animals over two days."),(0,l.kt)("h2",{id:"overwrite-all-data"},"Overwrite all data"),(0,l.kt)("p",null,"You can use the REPLACE function with OVERWRITE ALL to replace the entire datasource with new data while dropping the old data."),(0,l.kt)("p",null,"In the web console, open a new tab and run the following query to overwrite timestamp data for the entire ",(0,l.kt)("inlineCode",{parentName:"p"},"update_tutorial")," datasource:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE INTO "update_tutorial" OVERWRITE ALL\nWITH "ext" AS (SELECT *\nFROM TABLE(\n  EXTERN(\n    \'{"type":"inline","data":"{\\"timestamp\\":\\"2024-01-02T07:01:35Z\\",\\"animal\\":\\"octopus\\", \\"number\\":115}\\n{\\"timestamp\\":\\"2024-01-02T05:01:35Z\\",\\"animal\\":\\"mongoose\\", \\"number\\":737}\\n{\\"timestamp\\":\\"2024-01-02T06:01:35Z\\",\\"animal\\":\\"snake\\", \\"number\\":1234}\\n{\\"timestamp\\":\\"2024-01-02T01:01:35Z\\",\\"animal\\":\\"lion\\", \\"number\\":300}\\n{\\"timestamp\\":\\"2024-01-03T07:01:35Z\\",\\"animal\\":\\"seahorse\\", \\"number\\":115}\\n{\\"timestamp\\":\\"2024-01-03T05:01:35Z\\",\\"animal\\":\\"skunk\\", \\"number\\":737}\\n{\\"timestamp\\":\\"2024-01-03T06:01:35Z\\",\\"animal\\":\\"iguana\\", \\"number\\":1234}\\n{\\"timestamp\\":\\"2024-01-03T01:01:35Z\\",\\"animal\\":\\"opossum\\", \\"number\\":300}"}\',\n    \'{"type":"json"}\'\n  )\n) EXTEND ("timestamp" VARCHAR, "animal" VARCHAR, "number" BIGINT))\nSELECT\n  TIME_PARSE("timestamp") AS "__time",\n  "animal",\n  "number"\nFROM "ext"\nPARTITIONED BY DAY\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null," View the results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"__time")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"animal")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"number")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T01:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lion")),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T05:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mongoose")),(0,l.kt)("td",{parentName:"tr",align:null},"737")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T06:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"snake")),(0,l.kt)("td",{parentName:"tr",align:null},"1234")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T07:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"octopus")),(0,l.kt)("td",{parentName:"tr",align:null},"115")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-03T01:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"opossum")),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-03T05:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"skunk")),(0,l.kt)("td",{parentName:"tr",align:null},"737")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-03T06:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iguana")),(0,l.kt)("td",{parentName:"tr",align:null},"1234")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-03T07:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"seahorse")),(0,l.kt)("td",{parentName:"tr",align:null},"115"))))),(0,l.kt)("p",null,"Note that the values in the ",(0,l.kt)("inlineCode",{parentName:"p"},"__time")," column have changed to one day later."),(0,l.kt)("h2",{id:"overwrite-records-for-a-specific-time-range"},"Overwrite records for a specific time range"),(0,l.kt)("p",null,"You can use the REPLACE function to overwrite a specific time range of a datasource. When you overwrite a specific time range, that time range must align with the granularity specified in the PARTITIONED BY clause."),(0,l.kt)("p",null,"In the web console, open a new tab and run the following query to insert a new row and update specific rows. Note that the OVERWRITE WHERE clause tells the query to only update records for the date 2024-01-03."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE INTO "update_tutorial" \n  OVERWRITE WHERE "__time" >= TIMESTAMP\'2024-01-03 00:00:00\' AND "__time" < TIMESTAMP\'2024-01-04 00:00:00\'\nWITH "ext" AS (SELECT *\nFROM TABLE(\n  EXTERN(\n    \'{"type":"inline","data":"{\\"timestamp\\":\\"2024-01-03T01:01:35Z\\",\\"animal\\":\\"tiger\\", \\"number\\":300}\\n{\\"timestamp\\":\\"2024-01-03T07:01:35Z\\",\\"animal\\":\\"seahorse\\", \\"number\\":500}\\n{\\"timestamp\\":\\"2024-01-03T05:01:35Z\\",\\"animal\\":\\"polecat\\", \\"number\\":626}\\n{\\"timestamp\\":\\"2024-01-03T06:01:35Z\\",\\"animal\\":\\"iguana\\", \\"number\\":300}\\n{\\"timestamp\\":\\"2024-01-03T01:01:35Z\\",\\"animal\\":\\"flamingo\\", \\"number\\":999}"}\',\n    \'{"type":"json"}\'\n  )\n) EXTEND ("timestamp" VARCHAR, "animal" VARCHAR, "number" BIGINT))\nSELECT\n  TIME_PARSE("timestamp") AS "__time",\n  "animal",\n  "number"\nFROM "ext"\nPARTITIONED BY DAY\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null," View the results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"__time")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"animal")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"number")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T01:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lion")),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T05:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mongoose")),(0,l.kt)("td",{parentName:"tr",align:null},"737")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T06:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"snake")),(0,l.kt)("td",{parentName:"tr",align:null},"1234")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T07:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"octopus")),(0,l.kt)("td",{parentName:"tr",align:null},"115")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-03T01:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flamingo")),(0,l.kt)("td",{parentName:"tr",align:null},"999")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-03T01:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tiger")),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-03T05:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"polecat")),(0,l.kt)("td",{parentName:"tr",align:null},"626")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-03T06:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iguana")),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-03T07:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"seahorse")),(0,l.kt)("td",{parentName:"tr",align:null},"500"))))),(0,l.kt)("p",null,"Note the changes in the resulting datasource:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There is now a new row called ",(0,l.kt)("inlineCode",{parentName:"li"},"flamingo"),"."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"opossum")," row has the value ",(0,l.kt)("inlineCode",{parentName:"li"},"tiger"),"."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"skunk")," row has the value ",(0,l.kt)("inlineCode",{parentName:"li"},"polecat"),"."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"iguana")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"seahorse")," rows have different numbers.")),(0,l.kt)("h2",{id:"update-a-row-using-partial-segment-overshadowing"},"Update a row using partial segment overshadowing"),(0,l.kt)("p",null,"In Druid, you can overlay older data with newer data for the entire segment or portions of the segment within a particular partition.\nThis capability is called ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/ingestion/tasks#overshadowing-between-segments"},"overshadowing"),"."),(0,l.kt)("p",null,"You can use partial overshadowing to update a single row by adding a smaller time granularity segment on top of the existing data.\nIt's a less common variation on a more common approach where you replace the entire time chunk."),(0,l.kt)("p",null,"The following example demonstrates how update data using partial overshadowing with mixed segment granularity.",(0,l.kt)("br",{parentName:"p"}),"\n","Note the following important points about the example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The query updates a single record for a specific ",(0,l.kt)("inlineCode",{parentName:"li"},"number")," row."),(0,l.kt)("li",{parentName:"ul"},"The original datasource uses DAY segment granularity."),(0,l.kt)("li",{parentName:"ul"},"The new data segment is at HOUR granularity and represents a time range that's smaller than the existing data."),(0,l.kt)("li",{parentName:"ul"},"The OVERWRITE WHERE and WHERE TIME_IN_INTERVAL clauses specify the destination where the update occurs and the source of the update, respectively."),(0,l.kt)("li",{parentName:"ul"},"The query replaces everything within the specified interval. To update only a subset of data in that interval, you have to carry forward all records, changing only what you want to change. You can accomplish that by using the ",(0,l.kt)("a",{parentName:"li",href:"/docs/31.0.1/querying/sql-functions#case"},"CASE")," function in the SELECT list.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE INTO "update_tutorial"\n   OVERWRITE\n       WHERE "__time" >= TIMESTAMP\'2024-01-03 05:00:00\' AND "__time" < TIMESTAMP\'2024-01-03 06:00:00\'\nSELECT \n   "__time", \n   "animal", \n   CAST(486 AS BIGINT) AS "number"\nFROM "update_tutorial" \nWHERE TIME_IN_INTERVAL("__time", \'2024-01-03T05:01:35Z/PT1S\')\nPARTITIONED BY FLOOR(__time TO HOUR)\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null," View the results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"__time")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"animal")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"number")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T01:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lion")),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T05:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mongoose")),(0,l.kt)("td",{parentName:"tr",align:null},"737")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T06:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"snake")),(0,l.kt)("td",{parentName:"tr",align:null},"1234")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T07:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"octopus")),(0,l.kt)("td",{parentName:"tr",align:null},"115")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-03T01:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flamingo")),(0,l.kt)("td",{parentName:"tr",align:null},"999")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-03T01:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tiger")),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-03T05:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"polecat")),(0,l.kt)("td",{parentName:"tr",align:null},"486")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-03T06:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iguana")),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-03T07:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"seahorse")),(0,l.kt)("td",{parentName:"tr",align:null},"500"))))),(0,l.kt)("p",null,"Note that the ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"polecat")," has changed from 626 to 486."),(0,l.kt)("p",null,"When you perform partial segment overshadowing multiple times, you can create segment fragmentation that could affect query performance. Use ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/data-management/compaction"},"compaction")," to correct any fragmentation."),(0,l.kt)("h2",{id:"learn-more"},"Learn more"),(0,l.kt)("p",null,"See the following topics for more information:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/31.0.1/data-management/update"},"Data updates")," for an overview of updating data in Druid."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/31.0.1/tutorials/tutorial-msq-extern"},"Load files with SQL-based ingestion")," for generating a query that references externally hosted data."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/31.0.1/multi-stage-query/concepts#overwrite-data-with-replace"},"Overwrite data with REPLACE")," for details on how the MSQ task engine executes SQL REPLACE queries.")))}N.isMDXComponent=!0}}]);