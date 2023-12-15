"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"rollup",title:"Data rollup",sidebar_label:"Rollup",description:"Introduces rollup as a concept. Provides suggestions to maximize the benefits of rollup. Differentiates between perfect and best-effort rollup."},s=void 0,u={unversionedId:"ingestion/rollup",id:"ingestion/rollup",title:"Data rollup",description:"Introduces rollup as a concept. Provides suggestions to maximize the benefits of rollup. Differentiates between perfect and best-effort rollup.",source:"@site/docs/28.0.1/ingestion/rollup.md",sourceDirName:"ingestion",slug:"/ingestion/rollup",permalink:"/docs/28.0.1/ingestion/rollup",draft:!1,tags:[],version:"current",frontMatter:{id:"rollup",title:"Data rollup",sidebar_label:"Rollup",description:"Introduces rollup as a concept. Provides suggestions to maximize the benefits of rollup. Differentiates between perfect and best-effort rollup."},sidebar:"docs",previous:{title:"Schema model",permalink:"/docs/28.0.1/ingestion/schema-model"},next:{title:"Partitioning",permalink:"/docs/28.0.1/ingestion/partitioning"}},p={},d=[{value:"Maximizing rollup ratio",id:"maximizing-rollup-ratio",level:2},{value:"Perfect rollup vs best-effort rollup",id:"perfect-rollup-vs-best-effort-rollup",level:2},{value:"Learn more",id:"learn-more",level:2}],m={toc:d},c="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Druid can roll up data at ingestion time to reduce the amount of raw data to  store on disk. Rollup is a form of summarization or pre-aggregation. Rolling up data can dramatically reduce the size of data to be stored and reduce row counts by potentially orders of magnitude. As a trade-off for the efficiency of rollup, you lose the ability to query individual events."),(0,o.kt)("p",null,"At ingestion time, you control rollup with the ",(0,o.kt)("inlineCode",{parentName:"p"},"rollup")," setting in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/ingestion/ingestion-spec#granularityspec"},(0,o.kt)("inlineCode",{parentName:"a"},"granularitySpec")),". Rollup is enabled by default. This means Druid combines into a single row any rows that have identical ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/ingestion/schema-model#dimensions"},"dimension")," values and ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/ingestion/schema-model#primary-timestamp"},"timestamp")," values after ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/ingestion/ingestion-spec#granularityspec"},(0,o.kt)("inlineCode",{parentName:"a"},"queryGranularity"),"-based truncation"),"."),(0,o.kt)("p",null,"When you disable rollup, Druid loads each row as-is without doing any form of pre-aggregation. This mode is similar to databases that do not support a rollup feature. Set ",(0,o.kt)("inlineCode",{parentName:"p"},"rollup")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if you want Druid to store each record as-is, without any rollup summarization."),(0,o.kt)("p",null,"Use roll-up when creating a table datasource if both:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You want optimal performance or you have strict space constraints."),(0,o.kt)("li",{parentName:"ul"},"You don't need raw values from ",(0,o.kt)("a",{parentName:"li",href:"/docs/28.0.1/ingestion/schema-design#sketches"},"high-cardinality dimensions"),".")),(0,o.kt)("p",null,"Conversely, disable roll-up if either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need results for individual rows."),(0,o.kt)("li",{parentName:"ul"},"You need to execute ",(0,o.kt)("inlineCode",{parentName:"li"},"GROUP BY")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"WHERE")," queries on ",(0,o.kt)("em",{parentName:"li"},"any")," column.")),(0,o.kt)("p",null,"If you have conflicting needs for different use cases, you can create multiple tables with different roll-up configurations on each table."),(0,o.kt)("h2",{id:"maximizing-rollup-ratio"},"Maximizing rollup ratio"),(0,o.kt)("p",null,"To measure the rollup ratio of a datasource, compare the number of rows in Druid (",(0,o.kt)("inlineCode",{parentName:"p"},"COUNT"),") with the number of ingested events. For example, run a ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/sql"},"Druid SQL"),' query where "num_rows" refers to a ',(0,o.kt)("inlineCode",{parentName:"p"},"count"),"-type metric generated at ingestion time as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT SUM("num_rows") / (COUNT(*) * 1.0) FROM datasource\n')),(0,o.kt)("p",null,"The higher the result, the greater the benefit you gain from rollup. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/ingestion/schema-design#counting"},"Counting the number of ingested events")," for more details about how counting works with rollup is enabled."),(0,o.kt)("p",null,"Tips for maximizing rollup:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Design your schema with fewer dimensions and lower cardinality dimensions to yield better rollup ratios."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("a",{parentName:"li",href:"/docs/28.0.1/ingestion/schema-design#sketches"},"sketches")," to avoid storing high cardinality dimensions, which decrease rollup ratios."),(0,o.kt)("li",{parentName:"ul"},"Adjust your ",(0,o.kt)("inlineCode",{parentName:"li"},"queryGranularity")," at ingestion time to increase the chances that multiple rows in Druid having matching timestamps. For example, use five minute query granularity (",(0,o.kt)("inlineCode",{parentName:"li"},"PT5M"),") instead of one minute (",(0,o.kt)("inlineCode",{parentName:"li"},"PT1M"),")."),(0,o.kt)("li",{parentName:"ul"},"You can optionally load the same data into more than one Druid datasource. For example:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Create a "full" datasource that has rollup disabled, or enabled, but with a minimal rollup ratio.'),(0,o.kt)("li",{parentName:"ul"},'Create a second "abbreviated" datasource with fewer dimensions and a higher rollup ratio.\nWhen queries only involve dimensions in the "abbreviated" set, use the second datasource to reduce query times. Often, this method only requires a small increase in storage footprint because abbreviated datasources tend to be substantially smaller.'))),(0,o.kt)("li",{parentName:"ul"},"If you use a ",(0,o.kt)("a",{parentName:"li",href:"#perfect-rollup-vs-best-effort-rollup"},"best-effort rollup")," ingestion configuration that does not guarantee perfect rollup, try one of the following:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Switch to a guaranteed perfect rollup option."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/28.0.1/data-management/update#reindex"},"Reindex")," or ",(0,o.kt)("a",{parentName:"li",href:"/docs/28.0.1/data-management/compaction"},"compact")," your data in the background after initial ingestion.")))),(0,o.kt)("h2",{id:"perfect-rollup-vs-best-effort-rollup"},"Perfect rollup vs best-effort rollup"),(0,o.kt)("p",null,"Depending on the ingestion method, Druid has the following rollup options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Guaranteed ",(0,o.kt)("em",{parentName:"li"},"perfect rollup"),": Druid perfectly aggregates input data at ingestion time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Best-effort rollup"),": Druid may not perfectly aggregate input data. Therefore, multiple segments might contain rows with the same timestamp and dimension values.")),(0,o.kt)("p",null,"In general, ingestion methods that offer best-effort rollup do this for one of the following reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ingestion method parallelizes ingestion without a shuffling step required for perfect rollup."),(0,o.kt)("li",{parentName:"ul"},"The ingestion method uses ",(0,o.kt)("em",{parentName:"li"},"incremental publishing")," which means it finalizes and publishes segments before all data for a time chunk has been received.\nIn both of these cases, records that could theoretically be rolled up may end up in different segments. All types of streaming ingestion run in this mode.")),(0,o.kt)("p",null,"Ingestion methods that guarantee perfect rollup use an additional preprocessing step to determine intervals and partitioning before data ingestion. This preprocessing step scans the entire input dataset. While this step increases the time required for ingestion, it provides information necessary for perfect rollup."),(0,o.kt)("p",null,"The following table shows how each method handles rollup:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"How it works"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/28.0.1/ingestion/native-batch"},"Native batch")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"index_parallel")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"index")," type may be either perfect or best-effort, based on configuration.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/28.0.1/multi-stage-query/"},"SQL-based batch")),(0,o.kt)("td",{parentName:"tr",align:null},"Always perfect.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/28.0.1/ingestion/hadoop"},"Hadoop")),(0,o.kt)("td",{parentName:"tr",align:null},"Always perfect.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/28.0.1/development/extensions-core/kafka-ingestion"},"Kafka indexing service")),(0,o.kt)("td",{parentName:"tr",align:null},"Always best-effort.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/28.0.1/development/extensions-core/kinesis-ingestion"},"Kinesis indexing service")),(0,o.kt)("td",{parentName:"tr",align:null},"Always best-effort.")))),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("p",null,"See the following topic for more information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/28.0.1/tutorials/tutorial-rollup"},"Rollup tutorial")," for an example of how to configure rollup, and of how the feature modifies your data.")))}f.isMDXComponent=!0}}]);