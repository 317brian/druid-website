"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8936],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(a),m=r,f=l["".concat(d,".").concat(m)]||l[m]||c[m]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[l]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88702:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"update",title:"Data updates"},d=void 0,p={unversionedId:"data-management/update",id:"data-management/update",title:"Data updates",description:"\x3c!--",source:"@site/docs/31.0.1/data-management/update.md",sourceDirName:"data-management",slug:"/data-management/update",permalink:"/docs/31.0.1/data-management/update",draft:!1,tags:[],version:"current",frontMatter:{id:"update",title:"Data updates"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/31.0.1/data-management/"},next:{title:"Data deletion",permalink:"/docs/31.0.1/data-management/delete"}},u={},l=[{value:"Overwrite",id:"overwrite",level:2},{value:"Reindex",id:"reindex",level:2},{value:"Rolled-up datasources",id:"rolled-up-datasources",level:2},{value:"Lookups",id:"lookups",level:2}],c={toc:l},m="wrapper";function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overwrite"},"Overwrite"),(0,i.kt)("p",null,"Apache Druid stores data ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.1/design/storage"},"partitioned by time chunk")," and supports\noverwriting existing data using time ranges. Data outside the replacement time range is not touched. Overwriting of\nexisting data is done using the same mechanisms as ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.1/ingestion/#batch"},"batch ingestion"),"."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.1/ingestion/native-batch"},"Native batch")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"appendToExisting: false"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"intervals")," set to a specific\ntime range, overwrites data for that time range."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.1/multi-stage-query/reference#replace"},"SQL ",(0,i.kt)("inlineCode",{parentName:"a"},"REPLACE <table> OVERWRITE [ALL | WHERE ...]"))," overwrites data for\nthe entire table or for a specified time range.")),(0,i.kt)("p",null,"In both cases, Druid's atomic update mechanism ensures that queries will flip seamlessly from the old data to the new\ndata on a time-chunk-by-time-chunk basis."),(0,i.kt)("p",null,"Ingestion and overwriting cannot run concurrently for the same time range of the same datasource. While an overwrite job\nis ongoing for a particular time range of a datasource, new ingestions for that time range are queued up. Ingestions for\nother time ranges proceed as normal. Read-only queries also proceed as normal, using the pre-existing version of the\ndata."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Druid does not support single-record updates by primary key.")),(0,i.kt)("h2",{id:"reindex"},"Reindex"),(0,i.kt)("p",null,"Reindexing is an ",(0,i.kt)("a",{parentName:"p",href:"#overwrite"},"overwrite of existing data")," where the source of new data is the existing data itself. It\nis used to perform schema changes, repartition data, filter out unwanted data, enrich existing data, and so on. This\nbehaves just like any other ",(0,i.kt)("a",{parentName:"p",href:"#overwrite"},"overwrite")," with regard to atomic updates and locking."),(0,i.kt)("p",null,"With ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.1/ingestion/native-batch"},"native batch"),", use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.1/ingestion/input-sources#druid-input-source"},(0,i.kt)("inlineCode",{parentName:"a"},"druid")," input\nsource"),". If needed,\n",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.1/ingestion/ingestion-spec#transformspec"},(0,i.kt)("inlineCode",{parentName:"a"},"transformSpec"))," can be used to filter or modify data during the\nreindexing job."),(0,i.kt)("p",null,"With SQL, use ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.1/multi-stage-query/reference#replace"},(0,i.kt)("inlineCode",{parentName:"a"},"REPLACE <table> OVERWRITE"))," with ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT ... FROM <table>"),".\n(Druid does not have ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," statements.) Any SQL SELECT query can be used to filter,\nmodify, or enrich the data during the reindexing job."),(0,i.kt)("h2",{id:"rolled-up-datasources"},"Rolled-up datasources"),(0,i.kt)("p",null,"Rolled-up datasources can be effectively updated using appends, without rewrites. When you append a row that has an\nidentical set of dimensions to an existing row, queries that use aggregation operators automatically combine those two\nrows together at query time."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.1/data-management/compaction"},"Compaction")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.1/data-management/automatic-compaction"},"automatic compaction")," can be used to physically combine these\nmatching rows together later on, by rewriting segments in the background."),(0,i.kt)("h2",{id:"lookups"},"Lookups"),(0,i.kt)("p",null,"If you have a dimension where values need to be updated frequently, try first using ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/lookups"},"lookups"),". A\nclassic use case of lookups is when you have an ID dimension stored in a Druid segment, and want to map the ID dimension to a\nhuman-readable string that may need to be updated periodically."))}f.isMDXComponent=!0}}]);