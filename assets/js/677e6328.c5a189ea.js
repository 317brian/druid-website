"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2434],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),p=r,g=c["".concat(l,".").concat(p)]||c[p]||m[p]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},25718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"faq",title:"Ingestion troubleshooting FAQ",sidebar_label:"Troubleshooting FAQ"},l=void 0,d={unversionedId:"ingestion/faq",id:"ingestion/faq",title:"Ingestion troubleshooting FAQ",description:"\x3c!--",source:"@site/docs/30.0.1/ingestion/faq.md",sourceDirName:"ingestion",slug:"/ingestion/faq",permalink:"/docs/30.0.1/ingestion/faq",draft:!1,tags:[],version:"current",frontMatter:{id:"faq",title:"Ingestion troubleshooting FAQ",sidebar_label:"Troubleshooting FAQ"},sidebar:"docs",previous:{title:"Concurrent append and replace",permalink:"/docs/30.0.1/ingestion/concurrent-append-replace"},next:{title:"Overview",permalink:"/docs/30.0.1/data-management/"}},u={},c=[{value:"Batch Ingestion",id:"batch-ingestion",level:2},{value:"Druid ingested my events but they are not in my query results",id:"druid-ingested-my-events-but-they-are-not-in-my-query-results",level:2},{value:"Where do my Druid segments end up after ingestion?",id:"where-do-my-druid-segments-end-up-after-ingestion",level:2},{value:"My stream ingest is not handing segments off",id:"my-stream-ingest-is-not-handing-segments-off",level:2},{value:"How do I get HDFS to work?",id:"how-do-i-get-hdfs-to-work",level:2},{value:"How do I know when I can make query to Druid after submitting batch ingestion task?",id:"how-do-i-know-when-i-can-make-query-to-druid-after-submitting-batch-ingestion-task",level:2},{value:"I don&#39;t see my Druid segments on my Historical processes",id:"i-dont-see-my-druid-segments-on-my-historical-processes",level:2},{value:"My queries are returning empty results",id:"my-queries-are-returning-empty-results",level:2},{value:"Real-time ingestion seems to be stuck",id:"real-time-ingestion-seems-to-be-stuck",level:2}],m={toc:c},p="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"batch-ingestion"},"Batch Ingestion"),(0,o.kt)("p",null,"If you are trying to batch load historical data but no events are being loaded, make sure the interval of your ingestion spec actually encapsulates the interval of your data. Events outside this interval are dropped."),(0,o.kt)("h2",{id:"druid-ingested-my-events-but-they-are-not-in-my-query-results"},"Druid ingested my events but they are not in my query results"),(0,o.kt)("p",null,"If the number of ingested events seem correct, make sure your query is correctly formed. If you included a ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," aggregator in your ingestion spec, you will need to query for the results of this aggregate with a ",(0,o.kt)("inlineCode",{parentName:"p"},"longSum")," aggregator. Issuing a query with a count aggregator will count the number of Druid rows, which includes ",(0,o.kt)("a",{parentName:"p",href:"/docs/30.0.1/design/"},"roll-up"),"."),(0,o.kt)("h2",{id:"where-do-my-druid-segments-end-up-after-ingestion"},"Where do my Druid segments end up after ingestion?"),(0,o.kt)("p",null,"Depending on what ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.storage.type")," is set to, Druid will upload segments to some ",(0,o.kt)("a",{parentName:"p",href:"/docs/30.0.1/design/deep-storage"},"Deep Storage"),". Local disk is used as the default deep storage."),(0,o.kt)("h2",{id:"my-stream-ingest-is-not-handing-segments-off"},"My stream ingest is not handing segments off"),(0,o.kt)("p",null,"First, make sure there are no exceptions in the logs of the ingestion process. Also make sure that ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.storage.type")," is set to a deep storage that isn't ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," if you are running a distributed cluster."),(0,o.kt)("p",null,"Other common reasons that hand-off fails are as follows:"),(0,o.kt)("p",null,"1) Druid is unable to write to the metadata storage. Make sure your configurations are correct."),(0,o.kt)("p",null,"2) Historical processes are out of capacity and cannot download any more segments. You'll see exceptions in the Coordinator logs if this occurs and the web console will show the Historicals are near capacity."),(0,o.kt)("p",null,"3) Segments are corrupt and cannot be downloaded. You'll see exceptions in your Historical processes if this occurs."),(0,o.kt)("p",null,"4) Deep storage is improperly configured. Make sure that your segment actually exists in deep storage and that the Coordinator logs have no errors."),(0,o.kt)("h2",{id:"how-do-i-get-hdfs-to-work"},"How do I get HDFS to work?"),(0,o.kt)("p",null,"Make sure to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"druid-hdfs-storage")," and all the hadoop configuration, dependencies (that can be obtained by running command ",(0,o.kt)("inlineCode",{parentName:"p"},"hadoop classpath")," on a machine where hadoop has been setup) in the classpath. And, provide necessary HDFS settings as described in ",(0,o.kt)("a",{parentName:"p",href:"/docs/30.0.1/design/deep-storage"},"deep storage")," ."),(0,o.kt)("h2",{id:"how-do-i-know-when-i-can-make-query-to-druid-after-submitting-batch-ingestion-task"},"How do I know when I can make query to Druid after submitting batch ingestion task?"),(0,o.kt)("p",null,"You can verify if segments created by a recent ingestion task are loaded onto historicals and available for querying using the following workflow."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Submit your ingestion task."),(0,o.kt)("li",{parentName:"ol"},"Repeatedly poll the ",(0,o.kt)("a",{parentName:"li",href:"/docs/30.0.1/api-reference/tasks-api"},"Overlord's tasks API")," ( ",(0,o.kt)("inlineCode",{parentName:"li"},"/druid/indexer/v1/task/{taskId}/status"),") until your task is shown to be successfully completed."),(0,o.kt)("li",{parentName:"ol"},"Poll the ",(0,o.kt)("a",{parentName:"li",href:"/docs/30.0.1/api-reference/legacy-metadata-api#segment-loading-by-datasource"},"Segment Loading by Datasource API")," (",(0,o.kt)("inlineCode",{parentName:"li"},"/druid/coordinator/v1/datasources/{dataSourceName}/loadstatus"),") with\n",(0,o.kt)("inlineCode",{parentName:"li"},"forceMetadataRefresh=true")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"interval=<INTERVAL_OF_INGESTED_DATA>")," once.\n(Note: ",(0,o.kt)("inlineCode",{parentName:"li"},"forceMetadataRefresh=true")," refreshes Coordinator's metadata cache of all datasources. This can be a heavy operation in terms of the load on the metadata store but is necessary to make sure that we verify all the latest segments' load status)\nIf there are segments not yet loaded, continue to step 4, otherwise you can now query the data."),(0,o.kt)("li",{parentName:"ol"},"Repeatedly poll the ",(0,o.kt)("a",{parentName:"li",href:"/docs/30.0.1/api-reference/legacy-metadata-api#segment-loading-by-datasource"},"Segment Loading by Datasource API")," (",(0,o.kt)("inlineCode",{parentName:"li"},"/druid/coordinator/v1/datasources/{dataSourceName}/loadstatus"),") with\n",(0,o.kt)("inlineCode",{parentName:"li"},"forceMetadataRefresh=false")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"interval=<INTERVAL_OF_INGESTED_DATA>"),".\nContinue polling until all segments are loaded. Once all segments are loaded you can now query the data.\nNote that this workflow only guarantees that the segments are available at the time of the ",(0,o.kt)("a",{parentName:"li",href:"/docs/30.0.1/api-reference/legacy-metadata-api#segment-loading-by-datasource"},"Segment Loading by Datasource API")," call. Segments can still become missing because of historical process failures or any other reasons afterward.")),(0,o.kt)("h2",{id:"i-dont-see-my-druid-segments-on-my-historical-processes"},"I don't see my Druid segments on my Historical processes"),(0,o.kt)("p",null,"You can check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/30.0.1/operations/web-console"},"web console")," to make sure that your segments have actually loaded on ",(0,o.kt)("a",{parentName:"p",href:"/docs/30.0.1/design/historical"},"Historical processes"),". If your segments are not present, check the Coordinator logs for messages about capacity of replication errors. One reason that segments are not downloaded is because Historical processes have maxSizes that are too small, making them incapable of downloading more data. You can change that with (for example):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'-Ddruid.segmentCache.locations=[{"path":"/tmp/druid/storageLocation","maxSize":"500000000000"}]\n')),(0,o.kt)("h2",{id:"my-queries-are-returning-empty-results"},"My queries are returning empty results"),(0,o.kt)("p",null,"You can use a ",(0,o.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/segmentmetadataquery"},"segment metadata query")," for the dimensions and metrics that have been created for your datasource. Make sure that the name of the aggregators you use in your query match one of these metrics. Also make sure that the query interval you specify match a valid time range where data exists."),(0,o.kt)("h2",{id:"real-time-ingestion-seems-to-be-stuck"},"Real-time ingestion seems to be stuck"),(0,o.kt)("p",null,"There are a few ways this can occur. Druid will throttle ingestion to prevent out of memory problems if the intermediate persists are taking too long or if hand-off is taking too long. If your process logs indicate certain columns are taking a very long time to build (for example, if your segment granularity is hourly, but creating a single column takes 30 minutes), you should re-evaluate your configuration or scale up your real-time ingestion."))}g.isMDXComponent=!0}}]);