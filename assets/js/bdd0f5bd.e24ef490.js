"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4707],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),k=r,m=u["".concat(p,".").concat(k)]||u[k]||c[k]||o;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},83193:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={id:"kafka-extraction-namespace",title:"Apache Kafka Lookups"},p=void 0,s={unversionedId:"querying/kafka-extraction-namespace",id:"querying/kafka-extraction-namespace",title:"Apache Kafka Lookups",description:"\x3c!--",source:"@site/docs/30.0.1/querying/kafka-extraction-namespace.md",sourceDirName:"querying",slug:"/querying/kafka-extraction-namespace",permalink:"/docs/30.0.1/querying/kafka-extraction-namespace",draft:!1,tags:[],version:"current",frontMatter:{id:"kafka-extraction-namespace",title:"Apache Kafka Lookups"},sidebar:"docs",previous:{title:"Globally Cached Lookups",permalink:"/docs/30.0.1/querying/lookups-cached-global"},next:{title:"Multi-value dimensions",permalink:"/docs/30.0.1/querying/multi-value-dimensions"}},d={},u=[{value:"How it Works",id:"how-it-works",level:2},{value:"Example",id:"example",level:3},{value:"Tombstones and Deleting Records",id:"tombstones-and-deleting-records",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Testing the Kafka rename functionality",id:"testing-the-kafka-rename-functionality",level:2}],c={toc:u},k="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)(k,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use this Apache Druid extension, ",(0,o.kt)("a",{parentName:"p",href:"/docs/30.0.1/configuration/extensions#loading-extensions"},"include")," ",(0,o.kt)("inlineCode",{parentName:"p"},"druid-lookups-cached-global")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"druid-kafka-extraction-namespace")," in the extensions load list."),(0,o.kt)("p",null,"If you need updates to populate as promptly as possible, it is possible to plug into a Kafka topic whose key is the old value and message is the desired new value (both in UTF-8) as a LookupExtractorFactory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type":"kafka",\n  "kafkaTopic":"testTopic",\n  "kafkaProperties":{\n    "bootstrap.servers":"kafka.service:9092"\n  }\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"kafkaTopic")),(0,o.kt)("td",{parentName:"tr",align:null},"The Kafka topic to read the data from"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"kafkaProperties")),(0,o.kt)("td",{parentName:"tr",align:null},"Kafka consumer properties (",(0,o.kt)("inlineCode",{parentName:"td"},"bootstrap.servers")," must be specified)"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"connectTimeout")),(0,o.kt)("td",{parentName:"tr",align:null},"How long to wait for an initial connection"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0")," (do not wait)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"isOneToOne")),(0,o.kt)("td",{parentName:"tr",align:null},"The map is a one-to-one (see ",(0,o.kt)("a",{parentName:"td",href:"/docs/30.0.1/querying/dimensionspecs"},"Lookup DimensionSpecs"),")"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))))),(0,o.kt)("p",null,"The extension ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka-extraction-namespace")," enables reading from an ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Apache Kafka")," topic which has name/key pairs to allow renaming of dimension values. An example use case would be to rename an ID to a human-readable format."),(0,o.kt)("h2",{id:"how-it-works"},"How it Works"),(0,o.kt)("p",null,"The extractor works by consuming the configured Kafka topic from the beginning, and appending every record to an internal map. The key of the Kafka record is used as they key of the map, and the payload of the record is used as the value. At query time, a lookup can be used to transform the key into the associated value. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/lookups"},"lookups")," for how to configure and use lookups in a query. Keys and values are both stored as strings by the lookup extractor."),(0,o.kt)("p",null,"The extractor remains subscribed to the topic, so new records are added to the lookup map as they appear. This allows for lookup values to be updated in near-realtime. If two records are added to the topic with the same key, the record with the larger offset will replace the previous record in the lookup map. A record with a ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," payload will be treated as a tombstone record, and the associated key will be removed from the lookup map."),(0,o.kt)("p",null,"The extractor treats the input topic much like a ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org/23/javadoc/org/apache/kafka/streams/kstream/KTable.html"},"KTable"),". As such, it is best to create your Kafka topic using a ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#compaction"},"log compaction")," strategy, so that the most-recent version of a key is always preserved in Kafka. Without properly configuring retention and log compaction, older keys that are automatically removed from Kafka will not be available and will be lost when Druid services are restarted."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Consider a ",(0,o.kt)("inlineCode",{parentName:"p"},"country_codes")," topic is being consumed, and the following records are added to the topic in the following order:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Offset"),(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Payload"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"NZ"),(0,o.kt)("td",{parentName:"tr",align:null},"Nu Zeelund")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"AU"),(0,o.kt)("td",{parentName:"tr",align:null},"Australia")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"NZ"),(0,o.kt)("td",{parentName:"tr",align:null},"New Zealand")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"AU"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"null"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5"),(0,o.kt)("td",{parentName:"tr",align:null},"NZ"),(0,o.kt)("td",{parentName:"tr",align:null},"Aotearoa")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"6"),(0,o.kt)("td",{parentName:"tr",align:null},"CZ"),(0,o.kt)("td",{parentName:"tr",align:null},"Czechia")))),(0,o.kt)("p",null,"This input topic would be consumed from the beginning, and result in a lookup namespace containing the following mappings (notice that the entry for ",(0,o.kt)("em",{parentName:"p"},"Australia")," was added and then deleted):"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NZ"),(0,o.kt)("td",{parentName:"tr",align:null},"Aotearoa")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CZ"),(0,o.kt)("td",{parentName:"tr",align:null},"Czechia")))),(0,o.kt)("p",null,"Now when a query uses this extraction namespace, the country codes can be mapped to the full country name at query time."),(0,o.kt)("h2",{id:"tombstones-and-deleting-records"},"Tombstones and Deleting Records"),(0,o.kt)("p",null,"The Kafka lookup extractor treats ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," Kafka messages as tombstones. This means that a record on the input topic with a ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," message payload on Kafka will remove the associated key from the lookup map, effectively deleting it."),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"The consumer properties ",(0,o.kt)("inlineCode",{parentName:"p"},"group.id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"auto.offset.reset")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"enable.auto.commit")," cannot be set in ",(0,o.kt)("inlineCode",{parentName:"p"},"kafkaProperties")," as they are set by the extension as ",(0,o.kt)("inlineCode",{parentName:"p"},"UUID.randomUUID().toString()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"earliest")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," respectively. This is because the entire topic must be consumed by the Druid service from the very beginning so that a complete map of lookup values can be built. Setting any of these consumer properties will cause the extractor to not start."),(0,o.kt)("p",null,"Currently, the Kafka lookup extractor feeds the entire Kafka topic into a local cache. If you are using on-heap caching, this can easily clobber your java heap if the Kafka stream spews a lot of unique keys. Off-heap caching should alleviate these concerns, but there is still a limit to the quantity of data that can be stored.  There is currently no eviction policy."),(0,o.kt)("h2",{id:"testing-the-kafka-rename-functionality"},"Testing the Kafka rename functionality"),(0,o.kt)("p",null,"To test this setup, you can send key/value pairs to a Kafka stream via the following producer console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'./bin/kafka-console-producer.sh --property parse.key=true --property key.separator="->" --broker-list localhost:9092 --topic testTopic\n')),(0,o.kt)("p",null,"Renames can then be published as ",(0,o.kt)("inlineCode",{parentName:"p"},"OLD_VAL->NEW_VAL")," followed by newline (enter or return)"))}m.isMDXComponent=!0}}]);