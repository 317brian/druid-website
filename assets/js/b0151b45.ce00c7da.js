"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6341],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,N=u["".concat(d,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},61078:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>N,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"tutorial-append-data",title:"Append data",sidebar_label:"Append data",description:"Learn how to append data to a datasource without changing the existing data in Apache Druid."},d=void 0,p={unversionedId:"tutorials/tutorial-append-data",id:"tutorials/tutorial-append-data",title:"Append data",description:"Learn how to append data to a datasource without changing the existing data in Apache Druid.",source:"@site/docs/31.0.1/tutorials/tutorial-append-data.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-append-data",permalink:"/docs/31.0.1/tutorials/tutorial-append-data",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-append-data",title:"Append data",sidebar_label:"Append data",description:"Learn how to append data to a datasource without changing the existing data in Apache Druid."},sidebar:"docs",previous:{title:"Configure data retention",permalink:"/docs/31.0.1/tutorials/tutorial-retention"},next:{title:"Update data",permalink:"/docs/31.0.1/tutorials/tutorial-update-data"}},m={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Load sample data",id:"load-sample-data",level:2},{value:"Append data",id:"append-data",level:2},{value:"Learn more",id:"learn-more",level:2}],s={toc:u},k="wrapper";function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)(k,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This tutorial shows you how to use the Apache Druid SQL ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/multi-stage-query/reference#insert"},"INSERT")," function to append data to a ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/design/storage"},"datasource")," without changing the existing data.\nThe examples in the tutorial use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/multi-stage-query/"},"multi-stage query (MSQ)")," task engine to executes SQL statements."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Before you follow the steps in this tutorial, download Druid as described in ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/tutorials/"},"Quickstart (local)")," and have it running on your local machine. You don't need to load any data into the Druid cluster."),(0,l.kt)("p",null,"You should be familiar with data querying in Druid. If you haven't already, go through the ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/tutorials/tutorial-query"},"Query data")," tutorial first."),(0,l.kt)("h2",{id:"load-sample-data"},"Load sample data"),(0,l.kt)("p",null,"Load a sample dataset using ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/multi-stage-query/reference#insert"},"INSERT")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/multi-stage-query/reference#extern-function"},"EXTERN")," functions. The EXTERN function lets you read external data or write to an external location."),(0,l.kt)("p",null,"In the Druid ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/operations/web-console"},"web console"),", go to the ",(0,l.kt)("strong",{parentName:"p"},"Query")," view and run the following query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO "append_tutorial"\nSELECT\n  TIME_PARSE("timestamp") AS "__time",\n  "animal",\n  "number"\nFROM TABLE(\n  EXTERN(\n    \'{"type":"inline","data":"{\\"timestamp\\":\\"2024-01-01T07:01:35Z\\",\\"animal\\":\\"octopus\\", \\"number\\":115}\\n{\\"timestamp\\":\\"2024-01-01T05:01:35Z\\",\\"animal\\":\\"mongoose\\", \\"number\\":737}\\n{\\"timestamp\\":\\"2024-01-01T06:01:35Z\\",\\"animal\\":\\"snake\\", \\"number\\":1234}\\n{\\"timestamp\\":\\"2024-01-01T01:01:35Z\\",\\"animal\\":\\"lion\\", \\"number\\":300}\\n{\\"timestamp\\":\\"2024-01-02T07:01:35Z\\",\\"animal\\":\\"seahorse\\", \\"number\\":115}\\n{\\"timestamp\\":\\"2024-01-02T05:01:35Z\\",\\"animal\\":\\"skunk\\", \\"number\\":737}\\n{\\"timestamp\\":\\"2024-01-02T06:01:35Z\\",\\"animal\\":\\"iguana\\", \\"number\\":1234}\\n{\\"timestamp\\":\\"2024-01-02T01:01:35Z\\",\\"animal\\":\\"opossum\\", \\"number\\":300}"}\',\n      \'{"type":"json"}\'\n    )\n  ) EXTEND ("timestamp" VARCHAR, "animal" VARCHAR, "number" BIGINT)\nPARTITIONED BY DAY\n')),(0,l.kt)("p",null,"The resulting ",(0,l.kt)("inlineCode",{parentName:"p"},"append_tutorial")," datasource contains records for eight animals over two days.\nTo view the results, open a new tab and run the following query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM "append_tutorial"\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null," View the results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"__time")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"animal")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"number")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-01T01:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lion")),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-01T05:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mongoose")),(0,l.kt)("td",{parentName:"tr",align:null},"737")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-01T06:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"snake")),(0,l.kt)("td",{parentName:"tr",align:null},"1234")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-01T07:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"octopus")),(0,l.kt)("td",{parentName:"tr",align:null},"115")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T01:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"opossum")),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T05:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"skunk")),(0,l.kt)("td",{parentName:"tr",align:null},"737")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T06:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iguana")),(0,l.kt)("td",{parentName:"tr",align:null},"1234")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T07:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"seahorse")),(0,l.kt)("td",{parentName:"tr",align:null},"115"))))),(0,l.kt)("h2",{id:"append-data"},"Append data"),(0,l.kt)("p",null,"You can use the INSERT function to append data to the datasource without changing the existing data.\nIn a new tab, run the following query to ingest and append data to the ",(0,l.kt)("inlineCode",{parentName:"p"},"append_tutorial")," datasource:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO "append_tutorial"\nSELECT\n  TIME_PARSE("timestamp") AS "__time",\n  "animal",\n  "number"\nFROM TABLE(\n  EXTERN(\n    \'{"type":"inline","data":"{\\"timestamp\\":\\"2024-01-03T01:09:35Z\\",\\"animal\\":\\"zebra\\", \\"number\\":233}\\n{\\"timestamp\\":\\"2024-01-04T07:01:35Z\\",\\"animal\\":\\"bear\\", \\"number\\":577}\\n{\\"timestamp\\":\\"2024-01-04T05:01:35Z\\",\\"animal\\":\\"falcon\\", \\"number\\":848}\\n{\\"timestamp\\":\\"2024-01-04T06:01:35Z\\",\\"animal\\":\\"giraffe\\", \\"number\\":113}\\n{\\"timestamp\\":\\"2024-01-04T01:01:35Z\\",\\"animal\\":\\"rhino\\", \\"number\\":473}"}\',\n    \'{"type":"json"}\'\n    )\n  ) EXTEND ("timestamp" VARCHAR, "animal" VARCHAR, "number" BIGINT)\nPARTITIONED BY DAY\n')),(0,l.kt)("p",null,"Druid adds rows for the subsequent days after ",(0,l.kt)("inlineCode",{parentName:"p"},"seahorse"),".\nWhen the task completes, open a new tab and run the following query to view the results:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM "append_tutorial"\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null," View the results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"__time")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"animal")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"number")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-01T01:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lion")),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-01T05:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mongoose")),(0,l.kt)("td",{parentName:"tr",align:null},"737")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-01T06:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"snake")),(0,l.kt)("td",{parentName:"tr",align:null},"1234")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-01T07:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"octopus")),(0,l.kt)("td",{parentName:"tr",align:null},"115")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T01:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"opossum")),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T05:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"skunk")),(0,l.kt)("td",{parentName:"tr",align:null},"737")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T06:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iguana")),(0,l.kt)("td",{parentName:"tr",align:null},"1234")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-02T07:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"seahorse")),(0,l.kt)("td",{parentName:"tr",align:null},"115")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-03T01:09:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"zebra")),(0,l.kt)("td",{parentName:"tr",align:null},"233")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-04T01:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rhino")),(0,l.kt)("td",{parentName:"tr",align:null},"473")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-04T05:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"falcon")),(0,l.kt)("td",{parentName:"tr",align:null},"848")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-04T06:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"giraffe")),(0,l.kt)("td",{parentName:"tr",align:null},"113")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2024-01-04T07:01:35.000Z")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bear")),(0,l.kt)("td",{parentName:"tr",align:null},"577"))))),(0,l.kt)("h2",{id:"learn-more"},"Learn more"),(0,l.kt)("p",null,"See the following topics for more information:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/31.0.1/multi-stage-query/reference"},"SQL-based ingestion reference")," for a reference on MSQ architecture."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/31.0.1/multi-stage-query/examples"},"SQL-based ingestion query examples")," for example queries using the MSQ task engine.")))}N.isMDXComponent=!0}}]);