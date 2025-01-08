"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[466],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),g=o,f=p["".concat(l,".").concat(g)]||p[g]||c[g]||n;return r?a.createElement(f,s(s({ref:t},d),{},{components:r})):a.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<n;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},36820:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),s=["components"],i={id:"durable-storage",title:"Durable storage for the multi-stage query engine",sidebar_label:"Durable storage"},l=void 0,u={unversionedId:"operations/durable-storage",id:"operations/durable-storage",title:"Durable storage for the multi-stage query engine",description:"\x3c!--",source:"@site/docs/31.0.1/operations/durable-storage.md",sourceDirName:"operations",slug:"/operations/durable-storage",permalink:"/docs/31.0.1/operations/durable-storage",draft:!1,tags:[],version:"current",frontMatter:{id:"durable-storage",title:"Durable storage for the multi-stage query engine",sidebar_label:"Durable storage"},sidebar:"docs",previous:{title:"Java runtime",permalink:"/docs/31.0.1/operations/java"},next:{title:"Security overview",permalink:"/docs/31.0.1/operations/security-overview"}},d={},p=[{value:"Enable durable storage",id:"enable-durable-storage",level:2},{value:"Use durable storage for SQL-based ingestion queries",id:"use-durable-storage-for-sql-based-ingestion-queries",level:2},{value:"Use durable storage for queries from deep storage",id:"use-durable-storage-for-queries-from-deep-storage",level:2},{value:"Durable storage clean up",id:"durable-storage-clean-up",level:2}],c={toc:p},g="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,n.kt)(g,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use durable storage to improve querying from deep storage and SQL-based ingestion."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note that S3, Azure and Google are all supported as durable storage locations.")),(0,n.kt)("p",null,"Durable storage for queries from deep storage provides a location where you can write the results of deep storage queries to. Durable storage for SQL-based ingestion is used to temporarily house intermediate files, which can improve reliability."),(0,n.kt)("p",null,"Enabling durable storage also enables the use of local disk to store temporary files, such as the intermediate files produced\nwhile sorting the data. Tasks will use whatever has been configured for their temporary usage as described in ",(0,n.kt)("a",{parentName:"p",href:"/docs/31.0.1/ingestion/tasks#configuring-task-storage-sizes"},"Configuring task storage sizes"),".\nIf the configured limit is too low, Druid may throw the error, ",(0,n.kt)("inlineCode",{parentName:"p"},"NotEnoughTemporaryStorageFault"),"."),(0,n.kt)("h2",{id:"enable-durable-storage"},"Enable durable storage"),(0,n.kt)("p",null,"To enable durable storage, you need to set the following common service properties:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"druid.msq.intermediate.storage.enable=true\ndruid.msq.intermediate.storage.tempDir=/path/to/your/temp/dir\n\n# Include these configs if you're using S3\n# druid.msq.intermediate.storage.type=s3\n# druid.msq.intermediate.storage.bucket=YOUR_BUCKET\n\n# Include these configs if you're using Azure Blob Storage\n# druid.msq.intermediate.storage.type=azure\n# druid.sq.intermediate.storage.container=YOUR_CONTAINER\n\ndruid.msq.intermediate.storage.prefix=YOUR_PREFIX\n")),(0,n.kt)("p",null,"For detailed information about these and additional settings related to durable storage, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/31.0.1/multi-stage-query/reference#durable-storage-configurations"},"Durable storage configurations"),"."),(0,n.kt)("h2",{id:"use-durable-storage-for-sql-based-ingestion-queries"},"Use durable storage for SQL-based ingestion queries"),(0,n.kt)("p",null,"When you run a query, include the context parameter ",(0,n.kt)("inlineCode",{parentName:"p"},"durableShuffleStorage")," and set it to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("p",null,"For queries where you want to use fault tolerance for workers,  set ",(0,n.kt)("inlineCode",{parentName:"p"},"faultTolerance")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", which automatically sets ",(0,n.kt)("inlineCode",{parentName:"p"},"durableShuffleStorage")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("h2",{id:"use-durable-storage-for-queries-from-deep-storage"},"Use durable storage for queries from deep storage"),(0,n.kt)("p",null,"Depending on the size of the results you're expecting, saving the final results for queries from deep storage to durable storage might be needed."),(0,n.kt)("p",null,"By default, Druid saves the final results for queries from deep storage to task reports. Generally, this is acceptable for smaller result sets but may lead to timeouts for larger result sets. "),(0,n.kt)("p",null,"When you run a query, include the context parameter ",(0,n.kt)("inlineCode",{parentName:"p"},"selectDestination")," and set it to ",(0,n.kt)("inlineCode",{parentName:"p"},"durableStorage"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'    "context":{\n        ...\n        "selectDestination": "durableStorage"\n    }\n')),(0,n.kt)("p",null,"You can also write intermediate results to durable storage (",(0,n.kt)("inlineCode",{parentName:"p"},"durableShuffleStorage"),") for better reliability. The location where workers write intermediate results is different than the location where final results get stored. This means that durable storage for results can be enabled even if you don't write intermediate results to durable storage. "),(0,n.kt)("p",null,"If you write the results for queries from deep storage to durable storage, the results are cleaned up when the task is removed from the metadata store. "),(0,n.kt)("h2",{id:"durable-storage-clean-up"},"Durable storage clean up"),(0,n.kt)("p",null,"To prevent durable storage from getting filled up with temporary files in case the tasks fail to clean them up, a periodic\ncleaner can be scheduled to clean the directories corresponding to which there isn't a controller task running. It utilizes\nthe storage connector to work upon the durable storage. The durable storage location should only be utilized to store the output\nfor the cluster's MSQ tasks. If the location contains other files or directories, then they will get cleaned up as well."),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"druid.msq.intermediate.storage.cleaner.enabled")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"druid.msq.intermediate.storage.cleaner.delaySeconds")," to configure the cleaner. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/31.0.1/multi-stage-query/reference#durable-storage-configurations"},"Durable storage configurations"),"."),(0,n.kt)("p",null,"Note that if you choose to write query results to durable storage,the results are cleaned up when the task is removed from the metadata store."))}f.isMDXComponent=!0}}]);