"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3742],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=m(n),k=r,c=u["".concat(d,".").concat(k)]||u[k]||s[k]||i;return n?a.createElement(c,o(o({ref:e},p),{},{components:n})):a.createElement(c,o({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[u]="string"==typeof t?t:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},88777:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"kafka-emitter",title:"Kafka Emitter"},d=void 0,m={unversionedId:"development/extensions-contrib/kafka-emitter",id:"development/extensions-contrib/kafka-emitter",title:"Kafka Emitter",description:"\x3c!--",source:"@site/docs/28.0.1/development/extensions-contrib/kafka-emitter.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/kafka-emitter",permalink:"/docs/28.0.1/development/extensions-contrib/kafka-emitter",draft:!1,tags:[],version:"current",frontMatter:{id:"kafka-emitter",title:"Kafka Emitter"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example",id:"example",level:3}],s={toc:u},k="wrapper";function c(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)(k,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To use this Apache Druid extension, ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.1/configuration/extensions#loading-extensions"},"include")," ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka-emitter")," in the extensions load list."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This extension emits Druid metrics to ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org"},"Apache Kafka")," directly with JSON format.",(0,i.kt)("br",null),"\nCurrently, Kafka has not only their nice ecosystem but also consumer API readily available.\nSo, If you currently use Kafka, It's easy to integrate various tool or UI\nto monitor the status of your Druid cluster with this extension."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"All the configuration parameters for the Kafka emitter are under ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.emitter.kafka"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.kafka.bootstrap.servers")),(0,i.kt)("td",{parentName:"tr",align:null},"Comma-separated Kafka broker. (",(0,i.kt)("inlineCode",{parentName:"td"},"[hostname:port],[hostname:port]..."),")"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.kafka.event.types")),(0,i.kt)("td",{parentName:"tr",align:null},"Comma-separated event types. ",(0,i.kt)("br",null),"Supported types are ",(0,i.kt)("inlineCode",{parentName:"td"},"alerts"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"metrics"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"requests"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"segment_metadata"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'["metrics", "alerts"]'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.kafka.metric.topic")),(0,i.kt)("td",{parentName:"tr",align:null},"Kafka topic name for emitter's target to emit service metrics. If ",(0,i.kt)("inlineCode",{parentName:"td"},"event.types")," contains ",(0,i.kt)("inlineCode",{parentName:"td"},"metrics"),", this field cannot be empty."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.kafka.alert.topic")),(0,i.kt)("td",{parentName:"tr",align:null},"Kafka topic name for emitter's target to emit alerts. If ",(0,i.kt)("inlineCode",{parentName:"td"},"event.types")," contains ",(0,i.kt)("inlineCode",{parentName:"td"},"alerts"),", this field cannot empty."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.kafka.request.topic")),(0,i.kt)("td",{parentName:"tr",align:null},"Kafka topic name for emitter's target to emit request logs. If ",(0,i.kt)("inlineCode",{parentName:"td"},"event.types")," contains ",(0,i.kt)("inlineCode",{parentName:"td"},"requests"),", this field cannot be empty."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.kafka.segmentMetadata.topic")),(0,i.kt)("td",{parentName:"tr",align:null},"Kafka topic name for emitter's target to emit segment metadata. If ",(0,i.kt)("inlineCode",{parentName:"td"},"event.types")," contains ",(0,i.kt)("inlineCode",{parentName:"td"},"segment_metadata"),", this field cannot be empty."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.kafka.producer.config")),(0,i.kt)("td",{parentName:"tr",align:null},"JSON configuration to set additional properties to Kafka producer."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.kafka.clusterName")),(0,i.kt)("td",{parentName:"tr",align:null},"Optional value to specify the name of your Druid cluster. It can help make groups in your monitoring environment."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none")))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'druid.emitter.kafka.bootstrap.servers=hostname1:9092,hostname2:9092\ndruid.emitter.kafka.event.types=["metrics", alerts", "requests", "segment_metadata"]\ndruid.emitter.kafka.metric.topic=druid-metric\ndruid.emitter.kafka.alert.topic=druid-alert\ndruid.emitter.kafka.request.topic=druid-request-logs\ndruid.emitter.kafka.segmentMetadata.topic=druid-segment-metadata \ndruid.emitter.kafka.producer.config={"max.block.ms":10000}\n')))}c.isMDXComponent=!0}}]);