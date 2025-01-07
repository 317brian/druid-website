"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2292],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,v=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return t?r.createElement(v,o(o({ref:n},p),{},{components:t})):r.createElement(v,o({ref:n},p))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64285:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"overview",title:"Developing on Apache Druid",sidebar_label:"Developing on Druid"},l=void 0,d={unversionedId:"development/overview",id:"development/overview",title:"Developing on Apache Druid",description:"\x3c!--",source:"@site/docs/31.0.1/development/overview.md",sourceDirName:"development",slug:"/development/overview",permalink:"/docs/31.0.1/development/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Developing on Apache Druid",sidebar_label:"Developing on Druid"},sidebar:"docs",previous:{title:"Content for build.sbt",permalink:"/docs/31.0.1/operations/use_sbt_to_build_fat_jar"},next:{title:"Creating extensions",permalink:"/docs/31.0.1/development/modules"}},p={},c=[{value:"Storage format",id:"storage-format",level:2},{value:"Segment creation",id:"segment-creation",level:2},{value:"Storage engine",id:"storage-engine",level:2},{value:"Query engine",id:"query-engine",level:2},{value:"Coordination",id:"coordination",level:2},{value:"Real-time Ingestion",id:"real-time-ingestion",level:2},{value:"Native Batch Ingestion",id:"native-batch-ingestion",level:2},{value:"Hadoop-based Batch Ingestion",id:"hadoop-based-batch-ingestion",level:2},{value:"Internal UIs",id:"internal-uis",level:2},{value:"Client libraries",id:"client-libraries",level:2}],u={toc:c},m="wrapper";function v(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Druid's codebase consists of several major components. For developers interested in learning the code, this document provides\na high level overview of the main components that make up Druid and the relevant classes to start from to learn the code."),(0,i.kt)("h2",{id:"storage-format"},"Storage format"),(0,i.kt)("p",null,"Data in Druid is stored in a custom column format known as a ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.1/design/segments"},"segment"),". Segments are composed of\ndifferent types of columns. ",(0,i.kt)("inlineCode",{parentName:"p"},"Column.java")," and the classes that extend it is a great place to looking into the storage format."),(0,i.kt)("h2",{id:"segment-creation"},"Segment creation"),(0,i.kt)("p",null,"Raw data is ingested in ",(0,i.kt)("inlineCode",{parentName:"p"},"IncrementalIndex.java"),", and segments are created in ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexMerger.java"),"."),(0,i.kt)("h2",{id:"storage-engine"},"Storage engine"),(0,i.kt)("p",null,"Druid segments are memory mapped in ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexIO.java")," to be exposed for querying."),(0,i.kt)("h2",{id:"query-engine"},"Query engine"),(0,i.kt)("p",null,"Most of the logic related to Druid queries can be found in the Query* classes. Druid leverages query runners to run queries.\nQuery runners often embed other query runners and each query runner adds on a layer of logic. A good starting point to trace\nthe query logic is to start from ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryResource.java"),"."),(0,i.kt)("h2",{id:"coordination"},"Coordination"),(0,i.kt)("p",null,"Most of the coordination logic for Historical processes is on the Druid Coordinator. The starting point here is ",(0,i.kt)("inlineCode",{parentName:"p"},"DruidCoordinator.java"),".\nMost of the coordination logic for (real-time) ingestion is in the Druid indexing service. The starting point here is ",(0,i.kt)("inlineCode",{parentName:"p"},"OverlordResource.java"),"."),(0,i.kt)("h2",{id:"real-time-ingestion"},"Real-time Ingestion"),(0,i.kt)("p",null,"Druid streaming tasks are based on the 'seekable stream' classes such as ",(0,i.kt)("inlineCode",{parentName:"p"},"SeekableStreamSupervisor.java"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"SeekableStreamIndexTask.java"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"SeekableStreamIndexTaskRunner.java"),". The data processing happens through\n",(0,i.kt)("inlineCode",{parentName:"p"},"StreamAppenderator.java"),", and the persist and hand-off logic is in ",(0,i.kt)("inlineCode",{parentName:"p"},"StreamAppenderatorDriver.java"),"."),(0,i.kt)("h2",{id:"native-batch-ingestion"},"Native Batch Ingestion"),(0,i.kt)("p",null,"Druid native batch ingestion main task types are based on ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractBatchTask.java")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractBatchSubtask.java"),".\nParallel processing uses ",(0,i.kt)("inlineCode",{parentName:"p"},"ParallelIndexSupervisorTask.java"),", which spawns subtasks to perform various operations such\nas data analysis and partitioning depending on the task specification. Segment generation happens in\n",(0,i.kt)("inlineCode",{parentName:"p"},"SinglePhaseSubTask.java"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PartialHashSegmentGenerateTask.java"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"PartialRangeSegmentGenerateTask.java")," through\n",(0,i.kt)("inlineCode",{parentName:"p"},"BatchAppenderator"),", and the persist and hand-off logic is in ",(0,i.kt)("inlineCode",{parentName:"p"},"BatchAppenderatorDriver.java"),"."),(0,i.kt)("h2",{id:"hadoop-based-batch-ingestion"},"Hadoop-based Batch Ingestion"),(0,i.kt)("p",null,"The two main Hadoop indexing classes are ",(0,i.kt)("inlineCode",{parentName:"p"},"HadoopDruidDetermineConfigurationJob.java")," for the job to determine how many Druid\nsegments to create, and ",(0,i.kt)("inlineCode",{parentName:"p"},"HadoopDruidIndexerJob.java"),", which creates Druid segments."),(0,i.kt)("p",null,"At some point in the future, we may move the Hadoop ingestion code out of core Druid."),(0,i.kt)("h2",{id:"internal-uis"},"Internal UIs"),(0,i.kt)("p",null,"Druid currently has two internal UIs. One is for the Coordinator and one is for the Overlord."),(0,i.kt)("p",null,"At some point in the future, we will likely move the internal UI code out of core Druid."),(0,i.kt)("h2",{id:"client-libraries"},"Client libraries"),(0,i.kt)("p",null,"We welcome contributions for new client libraries to interact with Druid. See the\n",(0,i.kt)("a",{parentName:"p",href:"https://druid.apache.org/libraries.html"},"Community and third-party libraries")," page for links to existing client\nlibraries."))}v.isMDXComponent=!0}}]);