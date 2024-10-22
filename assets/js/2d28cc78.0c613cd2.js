"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9919],{14137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(r),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},58780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=r(87462),a=r(63366),i=(r(67294),r(14137)),s=["components"],o={layout:"doc_page",title:"Indexer service",sidebar_label:"Indexer"},l=void 0,d={unversionedId:"design/indexer",id:"design/indexer",title:"Indexer service",description:"\x3c!--",source:"@site/docs/31.0.0/design/indexer.md",sourceDirName:"design",slug:"/design/indexer",permalink:"/docs/31.0.0/design/indexer",draft:!1,tags:[],version:"current",frontMatter:{layout:"doc_page",title:"Indexer service",sidebar_label:"Indexer"},sidebar:"docs",previous:{title:"Peon",permalink:"/docs/31.0.0/design/peons"},next:{title:"Storage",permalink:"/docs/31.0.0/design/storage"}},p={},u=[{value:"Configuration",id:"configuration",level:2},{value:"HTTP endpoints",id:"http-endpoints",level:2},{value:"Running",id:"running",level:2},{value:"Task resource sharing",id:"task-resource-sharing",level:2},{value:"Query resources",id:"query-resources",level:3},{value:"Server HTTP threads",id:"server-http-threads",level:3},{value:"Memory sharing",id:"memory-sharing",level:3},{value:"Concurrent segment persist/merge limits",id:"concurrent-segment-persistmerge-limits",level:3},{value:"Current limitations",id:"current-limitations",level:2}],c={toc:u},h="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)(h,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," The Indexer is an optional and ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.0/development/experimental"},"experimental")," feature.\nIts memory management system is still under development and will be significantly enhanced in later releases.")),(0,i.kt)("p",null,"The Apache Druid Indexer service is an alternative to the Middle Manager + Peon task execution system. Instead of forking a separate JVM process per-task, the Indexer runs tasks as separate threads within a single JVM process."),(0,i.kt)("p",null,"The Indexer is designed to be easier to configure and deploy compared to the Middle Manager + Peon system and to better enable resource sharing across tasks."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"For Apache Druid Indexer service configuration, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.0/configuration/#indexer"},"Indexer Configuration"),"."),(0,i.kt)("h2",{id:"http-endpoints"},"HTTP endpoints"),(0,i.kt)("p",null,"The Indexer service shares the same HTTP endpoints as the ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.0/api-reference/service-status-api#middle-manager"},"Middle Manager"),"."),(0,i.kt)("h2",{id:"running"},"Running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"org.apache.druid.cli.Main server indexer\n")),(0,i.kt)("h2",{id:"task-resource-sharing"},"Task resource sharing"),(0,i.kt)("p",null,"The following resources are shared across all tasks running inside the Indexer service."),(0,i.kt)("h3",{id:"query-resources"},"Query resources"),(0,i.kt)("p",null,"The query processing threads and buffers are shared across all tasks. The Indexer serves queries from a single endpoint shared by all tasks."),(0,i.kt)("p",null,"If ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.0/configuration/#indexer-caching"},"query caching")," is enabled, the query cache is also shared across all tasks."),(0,i.kt)("h3",{id:"server-http-threads"},"Server HTTP threads"),(0,i.kt)("p",null,'The Indexer maintains two equally sized pools of HTTP threads.\nOne pool is exclusively used for task control messages between the Overlord and the Indexer ("chat handler threads"). The other pool is used for handling all other HTTP requests.'),(0,i.kt)("p",null,"To configure the number of threads, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.server.http.numThreads")," property. For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.server.http.numThreads")," is set to 10, there will be 10 chat handler threads and 10 non-chat handler threads."),(0,i.kt)("p",null,"In addition to these two pools, the Indexer allocates two separate threads for lookup handling. If lookups are not used, these threads will not be used."),(0,i.kt)("h3",{id:"memory-sharing"},"Memory sharing"),(0,i.kt)("p",null,"The Indexer uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.worker.globalIngestionHeapLimitBytes")," property to impose a global heap limit across all of the tasks it is running."),(0,i.kt)("p",null,"This global limit is evenly divided across the number of task slots configured by ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.worker.capacity"),"."),(0,i.kt)("p",null,"To apply the per-task heap limit, the Indexer overrides ",(0,i.kt)("inlineCode",{parentName:"p"},"maxBytesInMemory")," in task tuning configurations, that is ignoring the default value or any user configured value. It also overrides ",(0,i.kt)("inlineCode",{parentName:"p"},"maxRowsInMemory")," to an essentially unlimited value: the Indexer does not support row limits."),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.worker.globalIngestionHeapLimitBytes")," is set to 1/6th of the available JVM heap. This default is chosen to align with the default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"maxBytesInMemory")," in task tuning configs when using the Middle Manager + Peon system, which is also 1/6th of the JVM heap."),(0,i.kt)("p",null,"The peak usage for rows held in heap memory relates to the interaction between the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxBytesInMemory")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"maxPendingPersists")," properties in the task tuning configs. When the amount of row data held in-heap by a task reaches the limit specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"maxBytesInMemory"),", a task will persist the in-heap row data. After the persist has been started, the task can again ingest up to ",(0,i.kt)("inlineCode",{parentName:"p"},"maxBytesInMemory")," bytes worth of row data while the persist is running."),(0,i.kt)("p",null,"This means that the peak in-heap usage for row data can be up to approximately ",(0,i.kt)("inlineCode",{parentName:"p"},"maxBytesInMemory * (2 + maxPendingPersists)"),". The default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"maxPendingPersists")," is 0, which allows for 1 persist to run concurrently with ingestion work."),(0,i.kt)("p",null,"The remaining portion of the heap is reserved for query processing and segment persist/merge operations, and miscellaneous heap usage."),(0,i.kt)("h3",{id:"concurrent-segment-persistmerge-limits"},"Concurrent segment persist/merge limits"),(0,i.kt)("p",null,"To help reduce peak memory usage, the Indexer imposes a limit on the number of concurrent segment persist/merge operations across all running tasks."),(0,i.kt)("p",null,"By default, the number of concurrent persist/merge operations is limited to ",(0,i.kt)("inlineCode",{parentName:"p"},"(druid.worker.capacity / 2)"),", rounded down. This limit can be configured with the ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.worker.numConcurrentMerges")," property."),(0,i.kt)("h2",{id:"current-limitations"},"Current limitations"),(0,i.kt)("p",null,"Separate task logs are not currently supported when using the Indexer; all task log messages will instead be logged in the Indexer service log."),(0,i.kt)("p",null,"The Indexer currently imposes an identical memory limit on each task. In later releases, the per-task memory limit will be removed and only the global limit will apply. The limit on concurrent merges will also be removed."),(0,i.kt)("p",null,"In later releases, per-task memory usage will be dynamically managed. Please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/issues/7900"},"https://github.com/apache/druid/issues/7900")," for details on future enhancements to the Indexer."))}m.isMDXComponent=!0}}]);