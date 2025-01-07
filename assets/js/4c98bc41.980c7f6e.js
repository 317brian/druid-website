"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),c=i,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||a;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"opentsdb-emitter",title:"OpenTSDB Emitter"},d=void 0,p={unversionedId:"development/extensions-contrib/opentsdb-emitter",id:"development/extensions-contrib/opentsdb-emitter",title:"OpenTSDB Emitter",description:"\x3c!--",source:"@site/docs/31.0.1/development/extensions-contrib/opentsdb-emitter.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/opentsdb-emitter",permalink:"/docs/31.0.1/development/extensions-contrib/opentsdb-emitter",draft:!1,tags:[],version:"current",frontMatter:{id:"opentsdb-emitter",title:"OpenTSDB Emitter"}},m={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Druid to OpenTSDB Event Converter",id:"druid-to-opentsdb-event-converter",level:3}],u={toc:s},c="wrapper";function k(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To use this Apache Druid extension, ",(0,a.kt)("a",{parentName:"p",href:"/docs/31.0.1/configuration/extensions#loading-extensions"},"include")," ",(0,a.kt)("inlineCode",{parentName:"p"},"opentsdb-emitter")," in the extensions load list."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This extension emits druid metrics to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenTSDB/opentsdb"},"OpenTSDB")," over HTTP (Using ",(0,a.kt)("inlineCode",{parentName:"p"},"Jersey client"),"). And this emitter only emits service metric events to OpenTSDB (See ",(0,a.kt)("a",{parentName:"p",href:"/docs/31.0.1/operations/metrics"},"Druid metrics")," for a list of metrics)."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"All the configuration parameters for the OpenTSDB emitter are under ",(0,a.kt)("inlineCode",{parentName:"p"},"druid.emitter.opentsdb"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"property"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"required?"),(0,a.kt)("th",{parentName:"tr",align:null},"default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.opentsdb.host")),(0,a.kt)("td",{parentName:"tr",align:null},"The host of the OpenTSDB server."),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.opentsdb.port")),(0,a.kt)("td",{parentName:"tr",align:null},"The port of the OpenTSDB server."),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.opentsdb.connectionTimeout")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Jersey client")," connection timeout(in milliseconds)."),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"2000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.opentsdb.readTimeout")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Jersey client")," read timeout(in milliseconds)."),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"2000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.opentsdb.flushThreshold")),(0,a.kt)("td",{parentName:"tr",align:null},"Queue flushing threshold.(Events will be sent as one batch)"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"100")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.opentsdb.maxQueueSize")),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum size of the queue used to buffer events."),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"1000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.opentsdb.consumeDelay")),(0,a.kt)("td",{parentName:"tr",align:null},"Queue consuming delay(in milliseconds). Actually, we use ",(0,a.kt)("inlineCode",{parentName:"td"},"ScheduledExecutorService")," to schedule consuming events, so this ",(0,a.kt)("inlineCode",{parentName:"td"},"consumeDelay")," means the delay between the termination of one execution and the commencement of the next. If your druid processes produce metric events fast, then you should decrease this ",(0,a.kt)("inlineCode",{parentName:"td"},"consumeDelay")," or increase the ",(0,a.kt)("inlineCode",{parentName:"td"},"maxQueueSize"),"."),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"10000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.opentsdb.metricMapPath")),(0,a.kt)("td",{parentName:"tr",align:null},"JSON file defining the desired metrics and dimensions for every Druid metric"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"./src/main/resources/defaultMetrics.json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.opentsdb.namespacePrefix")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional (string) prefix for metric names, for example the default metric name ",(0,a.kt)("inlineCode",{parentName:"td"},"query.count")," with a namespacePrefix set to ",(0,a.kt)("inlineCode",{parentName:"td"},"druid")," would be emitted as ",(0,a.kt)("inlineCode",{parentName:"td"},"druid.query.count")),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"null")))),(0,a.kt)("h3",{id:"druid-to-opentsdb-event-converter"},"Druid to OpenTSDB Event Converter"),(0,a.kt)("p",null,"The OpenTSDB emitter will send only the desired metrics and dimensions which is defined in a JSON file.\nIf the user does not specify their own JSON file, a default file is used.  All metrics are expected to be configured in the JSON file. Metrics which are not configured will be logged.\nDesired metrics and dimensions is organized using the following schema:",(0,a.kt)("inlineCode",{parentName:"p"},"<druid metric name> : [ <dimension list> ]"),(0,a.kt)("br",null),"\ne.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"query/time": [\n    "dataSource",\n    "type"\n]\n')),(0,a.kt)("p",null,"For most use-cases, the default configuration is sufficient."))}k.isMDXComponent=!0}}]);