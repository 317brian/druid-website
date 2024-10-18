"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2511],{14137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),k=o,h=u["".concat(s,".").concat(k)]||u[k]||d[k]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},46650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),o=n(63366),r=(n(67294),n(14137)),i=["components"],l={id:"concurrent-append-replace",title:"Concurrent append and replace"},s=void 0,p={unversionedId:"ingestion/concurrent-append-replace",id:"ingestion/concurrent-append-replace",title:"Concurrent append and replace",description:"\x3c!--",source:"@site/docs/31.0.0/ingestion/concurrent-append-replace.md",sourceDirName:"ingestion",slug:"/ingestion/concurrent-append-replace",permalink:"/docs/31.0.0/ingestion/concurrent-append-replace",draft:!1,tags:[],version:"current",frontMatter:{id:"concurrent-append-replace",title:"Concurrent append and replace"},sidebar:"docs",previous:{title:"Schema design tips",permalink:"/docs/31.0.0/ingestion/schema-design"},next:{title:"Troubleshooting FAQ",permalink:"/docs/31.0.0/ingestion/faq"}},c={},u=[{value:"Update the compaction settings",id:"update-the-compaction-settings",level:2},{value:"Update the compaction settings with the UI",id:"update-the-compaction-settings-with-the-ui",level:3},{value:"Update the compaction settings with the API",id:"update-the-compaction-settings-with-the-api",level:3},{value:"Configure a task lock type for your ingestion job",id:"configure-a-task-lock-type-for-your-ingestion-job",level:2},{value:"Add a task lock using the Druid console",id:"add-a-task-lock-using-the-druid-console",level:3},{value:"Add the task lock through the API",id:"add-the-task-lock-through-the-api",level:3},{value:"Task lock types",id:"task-lock-types",level:2},{value:"Add a task lock type to your ingestion job",id:"add-a-task-lock-type-to-your-ingestion-job",level:4},{value:"Add a task lock using the Druid console",id:"add-a-task-lock-using-the-druid-console-1",level:5},{value:"Add the task lock type through the API",id:"add-the-task-lock-type-through-the-api",level:5}],d={toc:u},k="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(k,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Concurrent append and replace safely replaces the existing data in an interval of a datasource while new data is being appended to that interval. One of the most common applications of this feature is appending new data (such as with streaming ingestion) to an interval while compaction of that interval is already in progress. Druid segments the data ingested during this time dynamically. The subsequent compaction run segments the data into the  granularity you specified."),(0,r.kt)("p",null,"To set up concurrent append and replace, use the context flag ",(0,r.kt)("inlineCode",{parentName:"p"},"useConcurrentLocks"),". Druid will then determine the correct lock type for you, either append or replace. Although you can set the type of lock manually, we don't recommend it. "),(0,r.kt)("h2",{id:"update-the-compaction-settings"},"Update the compaction settings"),(0,r.kt)("p",null,"If you want to append data to a datasource while compaction is running, you need to enable concurrent append and replace for the datasource by updating the compaction settings."),(0,r.kt)("h3",{id:"update-the-compaction-settings-with-the-ui"},"Update the compaction settings with the UI"),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Compaction config")," for a datasource, enable  ",(0,r.kt)("strong",{parentName:"p"},"Use concurrent locks (experimental)"),"."),(0,r.kt)("p",null,"For details on accessing the compaction config in the UI, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/31.0.0/data-management/automatic-compaction#manage-auto-compaction-using-the-web-console"},"Enable automatic compaction with the web console"),"."),(0,r.kt)("h3",{id:"update-the-compaction-settings-with-the-api"},"Update the compaction settings with the API"),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"taskContext")," like you would any other automatic compaction setting through the API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8081/druid/coordinator/v1/config/compaction\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "dataSource": "YOUR_DATASOURCE",\n    "taskContext": {\n        "useConcurrentLocks": true\n    }\n}\'\n')),(0,r.kt)("h2",{id:"configure-a-task-lock-type-for-your-ingestion-job"},"Configure a task lock type for your ingestion job"),(0,r.kt)("p",null,"You also need to configure the ingestion job to allow concurrent tasks."),(0,r.kt)("p",null,"You can provide the context parameter like any other parameter for ingestion jobs through the API or the UI."),(0,r.kt)("h3",{id:"add-a-task-lock-using-the-druid-console"},"Add a task lock using the Druid console"),(0,r.kt)("p",null,"As part of the  ",(0,r.kt)("strong",{parentName:"p"},"Load data")," wizard for classic batch (JSON-based ingestion) and streaming ingestion, enable the following config on the ",(0,r.kt)("strong",{parentName:"p"},"Publish")," step: ",(0,r.kt)("strong",{parentName:"p"},"Use concurrent locks (experimental)"),"."),(0,r.kt)("h3",{id:"add-the-task-lock-through-the-api"},"Add the task lock through the API"),(0,r.kt)("p",null,"Add the following JSON snippet to your supervisor or ingestion spec if you're using the API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"context": {\n   "useConcurrentLocks": true\n}\n')),(0,r.kt)("h2",{id:"task-lock-types"},"Task lock types"),(0,r.kt)("p",null,"We recommend that you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useConcurrentLocks")," context parameter so that Druid automatically determines the task lock types for you. If, for some reason, you need to manually set the task lock types explicitly, you can read more about them in this section."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click here to read more about the lock types."),(0,r.kt)("p",null,"Druid uses task locks to make sure that multiple conflicting operations don't happen at once.\nThere are two task lock types: ",(0,r.kt)("inlineCode",{parentName:"p"},"APPEND")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE"),". The type of lock you use is determined by what you're trying to accomplish."),(0,r.kt)("p",null,"When setting task lock types manually, be aware of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The segment granularity of the append task must be equal to or finer than the segment granularity of the replace task."),(0,r.kt)("li",{parentName:"ul"},"Concurrent append and replace fails if the task with ",(0,r.kt)("inlineCode",{parentName:"li"},"APPEND")," lock uses a coarser segment granularity than the task with the ",(0,r.kt)("inlineCode",{parentName:"li"},"REPLACE")," lock. For example, if the ",(0,r.kt)("inlineCode",{parentName:"li"},"APPEND")," task uses a segment granularity of YEAR and the ",(0,r.kt)("inlineCode",{parentName:"li"},"REPLACE")," task uses a segment granularity of MONTH, you should not use concurrent append and replace."),(0,r.kt)("li",{parentName:"ul"},"Only a single task can hold a ",(0,r.kt)("inlineCode",{parentName:"li"},"REPLACE")," lock on a given interval of a datasource."),(0,r.kt)("li",{parentName:"ul"},"Multiple tasks can hold ",(0,r.kt)("inlineCode",{parentName:"li"},"APPEND")," locks on a given interval of a datasource and append data to that interval simultaneously.")),(0,r.kt)("h4",{id:"add-a-task-lock-type-to-your-ingestion-job"},"Add a task lock type to your ingestion job"),(0,r.kt)("p",null,"You configure the task lock type for your ingestion job as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For streaming jobs, the ",(0,r.kt)("inlineCode",{parentName:"li"},"taskLockType")," context parameter goes in your supervisor spec, and the lock type is always ",(0,r.kt)("inlineCode",{parentName:"li"},"APPEND"),"."),(0,r.kt)("li",{parentName:"ul"},"For classic JSON-based batch ingestion, the ",(0,r.kt)("inlineCode",{parentName:"li"},"taskLockType")," context parameter goes in your ingestion spec, and the lock type can be either ",(0,r.kt)("inlineCode",{parentName:"li"},"APPEND")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"REPLACE"),". ")),(0,r.kt)("p",null,"You can provide the context parameter through the API like any other parameter for ingestion job or through the UI."),(0,r.kt)("h5",{id:"add-a-task-lock-using-the-druid-console-1"},"Add a task lock using the Druid console"),(0,r.kt)("p",null,"As part of the  ",(0,r.kt)("strong",{parentName:"p"},"Load data")," wizard for classic batch (JSON-based ingestion) and streaming ingestion, you can configure the task lock type for the ingestion during the ",(0,r.kt)("strong",{parentName:"p"},"Publish")," step:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you set ",(0,r.kt)("strong",{parentName:"li"},"Append to existing")," to ",(0,r.kt)("strong",{parentName:"li"},"True"),", you can then set ",(0,r.kt)("strong",{parentName:"li"},"Allow concurrent append tasks (experimental)")," to ",(0,r.kt)("strong",{parentName:"li"},"True"),"."),(0,r.kt)("li",{parentName:"ul"},"If you set ",(0,r.kt)("strong",{parentName:"li"},"Append to existing")," to ",(0,r.kt)("strong",{parentName:"li"},"False"),", you can then set ",(0,r.kt)("strong",{parentName:"li"},"Allow concurrent replace tasks (experimental)")," to ",(0,r.kt)("strong",{parentName:"li"},"True"),".")),(0,r.kt)("h5",{id:"add-the-task-lock-type-through-the-api"},"Add the task lock type through the API"),(0,r.kt)("p",null,"Add the following JSON snippet to your supervisor or ingestion spec if you're using the API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"context": {\n   "taskLockType": LOCK_TYPE\n}   \n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LOCK_TYPE")," depends on what you're trying to accomplish."),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"taskLockType")," to  ",(0,r.kt)("inlineCode",{parentName:"p"},"APPEND")," if either of the following are true:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dynamic partitioning with append to existing is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"The ingestion job is a streaming ingestion job")),(0,r.kt)("p",null,"If you have multiple ingestion jobs that append all targeting the same datasource and want them to run simultaneously, you need to also include the following context parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"useSharedLock": "true"\n')),(0,r.kt)("p",null,"Keep in mind that ",(0,r.kt)("inlineCode",{parentName:"p"},"taskLockType")," takes precedence over ",(0,r.kt)("inlineCode",{parentName:"p"},"useSharedLock"),". Do not use ",(0,r.kt)("inlineCode",{parentName:"p"},"useSharedLock")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE")," task locks."),(0,r.kt)("p",null,"Set  ",(0,r.kt)("inlineCode",{parentName:"p"},"taskLockType")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE")," if you're replacing data. For example, if you use any of the following partitioning types, use ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hash partitioning "),(0,r.kt)("li",{parentName:"ul"},"range partitioning"),(0,r.kt)("li",{parentName:"ul"},"dynamic partitioning with append to existing set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")))))}h.isMDXComponent=!0}}]);