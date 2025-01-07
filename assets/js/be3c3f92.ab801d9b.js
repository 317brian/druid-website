"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8122],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(a),g=r,c=p["".concat(o,".").concat(g)]||p[g]||d[g]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},87174:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],s={id:"segmentmetadataquery",title:"SegmentMetadata queries",sidebar_label:"SegmentMetadata"},o=void 0,u={unversionedId:"querying/segmentmetadataquery",id:"querying/segmentmetadataquery",title:"SegmentMetadata queries",description:"\x3c!--",source:"@site/docs/31.0.1/querying/segmentmetadataquery.md",sourceDirName:"querying",slug:"/querying/segmentmetadataquery",permalink:"/docs/31.0.1/querying/segmentmetadataquery",draft:!1,tags:[],version:"current",frontMatter:{id:"segmentmetadataquery",title:"SegmentMetadata queries",sidebar_label:"SegmentMetadata"},sidebar:"docs",previous:{title:"TimeBoundary",permalink:"/docs/31.0.1/querying/timeboundaryquery"},next:{title:"DatasourceMetadata",permalink:"/docs/31.0.1/querying/datasourcemetadataquery"}},m={},p=[{value:"intervals",id:"intervals",level:2},{value:"toInclude",id:"toinclude",level:2},{value:"All",id:"all",level:3},{value:"None",id:"none",level:3},{value:"List",id:"list",level:3},{value:"analysisTypes",id:"analysistypes",level:2},{value:"cardinality",id:"cardinality",level:3},{value:"minmax",id:"minmax",level:3},{value:"size",id:"size",level:3},{value:"interval",id:"interval",level:3},{value:"timestampSpec",id:"timestampspec",level:3},{value:"queryGranularity",id:"querygranularity",level:3},{value:"aggregators",id:"aggregators",level:3},{value:"rollup",id:"rollup",level:3},{value:"aggregatorMergeStrategy",id:"aggregatormergestrategy",level:3},{value:"lenientAggregatorMerge (deprecated)",id:"lenientaggregatormerge-deprecated",level:3}],d={toc:p},g="wrapper";function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)(g,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"}," Apache Druid supports two query languages: ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/sql"},"Druid SQL")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/"},"native queries"),".\nThis document describes a query\ntype that is only available in the native language. However, Druid SQL contains similar functionality in\nits ",(0,l.kt)("a",{parentName:"p",href:"/docs/31.0.1/querying/sql-metadata-tables"},"metadata tables"),".")),(0,l.kt)("p",null,"Segment metadata queries return per-segment information about:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Number of rows stored inside the segment"),(0,l.kt)("li",{parentName:"ul"},"Interval the segment covers"),(0,l.kt)("li",{parentName:"ul"},"Estimated total segment byte size in if it was stored in a 'flat format' (e.g. a csv file)"),(0,l.kt)("li",{parentName:"ul"},"Segment id"),(0,l.kt)("li",{parentName:"ul"},"Is the segment rolled up"),(0,l.kt)("li",{parentName:"ul"},"Detailed per column information such as:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"type"),(0,l.kt)("li",{parentName:"ul"},"cardinality"),(0,l.kt)("li",{parentName:"ul"},"min/max values"),(0,l.kt)("li",{parentName:"ul"},"presence of null values"),(0,l.kt)("li",{parentName:"ul"},"estimated 'flat format' byte size")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType":"segmentMetadata",\n  "dataSource":"sample_datasource",\n  "intervals":["2013-01-01/2014-01-01"]\n}\n')),(0,l.kt)("p",null,"There are several main parts to a segment metadata query:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"property"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queryType"),(0,l.kt)("td",{parentName:"tr",align:null},'This String should always be "segmentMetadata"; this is the first thing Apache Druid looks at to figure out how to interpret the query'),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,l.kt)("td",{parentName:"tr",align:null},"A String or Object defining the data source to query, very similar to a table in a relational database. See ",(0,l.kt)("a",{parentName:"td",href:"/docs/31.0.1/querying/datasource"},"DataSource")," for more information."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"intervals"),(0,l.kt)("td",{parentName:"tr",align:null},"A JSON Object representing ISO-8601 Intervals. This defines the time ranges to run the query over."),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"toInclude"),(0,l.kt)("td",{parentName:"tr",align:null},'A JSON Object representing what columns should be included in the result. Defaults to "all".'),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"merge"),(0,l.kt)("td",{parentName:"tr",align:null},"Merge all individual segment metadata results into a single result"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"/docs/31.0.1/querying/query-context"},"Context")),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"analysisTypes"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of Strings specifying what column properties (e.g. cardinality, size) should be calculated and returned in the result. Defaults to ",'["cardinality", "interval", "minmax"]',", but can be overridden with using the ",(0,l.kt)("a",{parentName:"td",href:"/docs/31.0.1/configuration/#segmentmetadata-query-config"},"segment metadata query config"),". See section ",(0,l.kt)("a",{parentName:"td",href:"#analysistypes"},"analysisTypes")," for more details."),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aggregatorMergeStrategy"),(0,l.kt)("td",{parentName:"tr",align:null},"The strategy Druid uses to merge aggregators across segments. If true and if the ",(0,l.kt)("inlineCode",{parentName:"td"},"aggregators")," analysis type is enabled, ",(0,l.kt)("inlineCode",{parentName:"td"},"aggregatorMergeStrategy")," defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"strict"),". Possible values include ",(0,l.kt)("inlineCode",{parentName:"td"},"strict"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"lenient"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"earliest"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"latest"),". See ",(0,l.kt)("a",{parentName:"td",href:"#aggregatormergestrategy"},(0,l.kt)("inlineCode",{parentName:"a"},"aggregatorMergeStrategy"))," for details."),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lenientAggregatorMerge"),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"aggregatorMergeStrategy")," property instead. If true, and if the ",(0,l.kt)("inlineCode",{parentName:"td"},"aggregators")," analysis type is enabled, Druid merges aggregators leniently."),(0,l.kt)("td",{parentName:"tr",align:null},"no")))),(0,l.kt)("p",null,"The format of the result is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[ {\n  "id" : "some_id",\n  "intervals" : [ "2013-05-13T00:00:00.000Z/2013-05-14T00:00:00.000Z" ],\n  "columns" : {\n    "__time" : { "type" : "LONG", "hasMultipleValues" : false, "hasNulls": false, "size" : 407240380, "cardinality" : null, "errorMessage" : null },\n    "dim1" : { "type" : "STRING", "hasMultipleValues" : false, "hasNulls": false, "size" : 100000, "cardinality" : 1944, "errorMessage" : null },\n    "dim2" : { "type" : "STRING", "hasMultipleValues" : true, "hasNulls": true, "size" : 100000, "cardinality" : 1504, "errorMessage" : null },\n    "metric1" : { "type" : "FLOAT", "hasMultipleValues" : false, "hasNulls": false, "size" : 100000, "cardinality" : null, "errorMessage" : null }\n  },\n  "aggregators" : {\n    "metric1" : { "type" : "longSum", "name" : "metric1", "fieldName" : "metric1" }\n  },\n  "queryGranularity" : {\n    "type": "none"\n  },\n  "size" : 300000,\n  "numRows" : 5000000\n} ]\n')),(0,l.kt)("p",null,"All columns contain a ",(0,l.kt)("inlineCode",{parentName:"p"},"typeSignature")," that Druid uses to represent the column type information internally. The ",(0,l.kt)("inlineCode",{parentName:"p"},"typeSignature")," is typically the same value used to identify the JSON type information at query or ingest time. One of: ",(0,l.kt)("inlineCode",{parentName:"p"},"STRING"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"FLOAT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DOUBLE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"LONG"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"COMPLEX<typeName>"),", e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"COMPLEX<hyperUnique>"),"."),(0,l.kt)("p",null,"Columns also have a legacy ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," name. For some column types, the value may match the ",(0,l.kt)("inlineCode",{parentName:"p"},"typeSignature"),"  (",(0,l.kt)("inlineCode",{parentName:"p"},"STRING"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"FLOAT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DOUBLE"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"LONG"),"). For ",(0,l.kt)("inlineCode",{parentName:"p"},"COMPLEX")," columns, the ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," only contains the name of the underlying complex type such as ",(0,l.kt)("inlineCode",{parentName:"p"},"hyperUnique"),"."),(0,l.kt)("p",null,"New applications should use ",(0,l.kt)("inlineCode",{parentName:"p"},"typeSignature"),", not ",(0,l.kt)("inlineCode",{parentName:"p"},"type"),"."),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"errorMessage")," field is non-null, you should not trust the other fields in the response. Their contents are\nundefined."),(0,l.kt)("p",null,"Only columns which are dictionary encoded (i.e., have type ",(0,l.kt)("inlineCode",{parentName:"p"},"STRING"),") will have any cardinality. Rest of the columns (timestamp and metric columns) will show cardinality as ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("h2",{id:"intervals"},"intervals"),(0,l.kt)("p",null,"If an interval is not specified, the query will use a default interval that spans a configurable period before the end time of the most recent segment."),(0,l.kt)("p",null,"The length of this default time period is set in the Broker configuration via:\ndruid.query.segmentMetadata.defaultHistory"),(0,l.kt)("h2",{id:"toinclude"},"toInclude"),(0,l.kt)("p",null,"There are 3 types of toInclude objects."),(0,l.kt)("h3",{id:"all"},"All"),(0,l.kt)("p",null,"The grammar is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"toInclude": { "type": "all"}\n')),(0,l.kt)("h3",{id:"none"},"None"),(0,l.kt)("p",null,"The grammar is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"toInclude": { "type": "none"}\n')),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("p",null,"The grammar is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"toInclude": { "type": "list", "columns": [<string list of column names>]}\n')),(0,l.kt)("h2",{id:"analysistypes"},"analysisTypes"),(0,l.kt)("p",null,"This is a list of properties that determines the amount of information returned about the columns, i.e. analyses to be performed on the columns."),(0,l.kt)("p",null,'By default, the "cardinality", "interval", and "minmax" types will be used. If a property is not needed, omitting it from this list will result in a more efficient query.'),(0,l.kt)("p",null,"The default analysis types can be set in the Broker configuration via:\n",(0,l.kt)("inlineCode",{parentName:"p"},"druid.query.segmentMetadata.defaultAnalysisTypes")),(0,l.kt)("p",null,"Types of column analyses are described below:"),(0,l.kt)("h3",{id:"cardinality"},"cardinality"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cardinality")," is the number of unique values present in string columns. It is null for other column types.")),(0,l.kt)("p",null,"Druid examines the size of string column dictionaries to compute the cardinality value. There is one dictionary per column per\nsegment. If ",(0,l.kt)("inlineCode",{parentName:"p"},"merge")," is off (false), this reports the cardinality of each column of each segment individually. If\n",(0,l.kt)("inlineCode",{parentName:"p"},"merge")," is on (true), this reports the highest cardinality encountered for a particular column across all relevant\nsegments."),(0,l.kt)("h3",{id:"minmax"},"minmax"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Estimated min/max values for each column. Only reported for string columns.")),(0,l.kt)("h3",{id:"size"},"size"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"size")," is the estimated total byte size as if the data were stored in text format. This is ",(0,l.kt)("em",{parentName:"li"},"not")," the actual storage\nsize of the column in Druid. If you want the actual storage size in bytes of a segment, look elsewhere. Some pointers:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To get the storage size in bytes of an entire segment, check the ",(0,l.kt)("inlineCode",{parentName:"li"},"size")," field in the\n",(0,l.kt)("a",{parentName:"li",href:"/docs/31.0.1/querying/sql-metadata-tables#segments-table"},(0,l.kt)("inlineCode",{parentName:"a"},"sys.segments")," table"),". This is the size of the memory-mappable content."),(0,l.kt)("li",{parentName:"ul"},"To get the storage size in bytes of a particular column in a particular segment, unpack the segment and look at the\n",(0,l.kt)("inlineCode",{parentName:"li"},"meta.smoosh")," file inside the archive. The difference between the third and fourth columns is the size in bytes.\nCurrently, there is no API for retrieving this information.")),(0,l.kt)("h3",{id:"interval"},"interval"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"intervals")," in the result will contain the list of intervals associated with the queried segments.")),(0,l.kt)("h3",{id:"timestampspec"},"timestampSpec"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestampSpec")," in the result will contain timestampSpec of data stored in segments. this can be null if timestampSpec of segments was unknown or unmergeable (if merging is enabled).")),(0,l.kt)("h3",{id:"querygranularity"},"queryGranularity"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"queryGranularity")," in the result will contain query granularity of data stored in segments. this can be null if query granularity of segments was unknown or unmergeable (if merging is enabled).")),(0,l.kt)("h3",{id:"aggregators"},"aggregators"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"aggregators")," in the result will contain the list of aggregators usable for querying metric columns. This may be\nnull if the aggregators are unknown or unmergeable (if merging is enabled).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Merging can be ",(0,l.kt)("inlineCode",{parentName:"p"},"strict"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lenient"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"earliest"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"latest"),". See ",(0,l.kt)("a",{parentName:"p",href:"#aggregatormergestrategy"},(0,l.kt)("inlineCode",{parentName:"a"},"aggregatorMergeStrategy"))," for details.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The form of the result is a map of column name to aggregator."))),(0,l.kt)("h3",{id:"rollup"},"rollup"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rollup")," in the result is true/false/null."),(0,l.kt)("li",{parentName:"ul"},"When merging is enabled, if some are rollup, others are not, result is null.")),(0,l.kt)("h3",{id:"aggregatormergestrategy"},"aggregatorMergeStrategy"),(0,l.kt)("p",null,"Conflicts between aggregator metadata across segments can occur if some segments have unknown aggregators, or if\ntwo segments use incompatible aggregators for the same column, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"longSum")," changed to ",(0,l.kt)("inlineCode",{parentName:"p"},"doubleSum"),".\nDruid supports the following aggregator merge strategies:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"strict"),": If there are any segments with unknown aggregators or any conflicts of any kind, the merged aggregators\nlist is ",(0,l.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lenient"),": Druid ignores segments with unknown aggregators. Conflicts between aggregators set the aggregator for\nthat particular column to null."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"earliest"),": In the event of conflicts between segments, Druid selects the aggregator from the earliest segment\nfor that particular column."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"latest"),": In the event of conflicts between segments, Druid selects the aggregator from the most recent segment\nfor that particular column.")),(0,l.kt)("h3",{id:"lenientaggregatormerge-deprecated"},"lenientAggregatorMerge (deprecated)"),(0,l.kt)("p",null,"Deprecated. Use ",(0,l.kt)("a",{parentName:"p",href:"#aggregatormergestrategy"},(0,l.kt)("inlineCode",{parentName:"a"},"aggregatorMergeStrategy"))," instead."))}c.isMDXComponent=!0}}]);