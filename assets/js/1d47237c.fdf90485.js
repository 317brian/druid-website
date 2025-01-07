"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5234],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(r),c=a,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},83142:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"prometheus",title:"Prometheus Emitter"},s=void 0,d={unversionedId:"development/extensions-contrib/prometheus",id:"development/extensions-contrib/prometheus",title:"Prometheus Emitter",description:"\x3c!--",source:"@site/docs/31.0.1/development/extensions-contrib/prometheus.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/prometheus",permalink:"/docs/31.0.1/development/extensions-contrib/prometheus",draft:!1,tags:[],version:"current",frontMatter:{id:"prometheus",title:"Prometheus Emitter"}},p={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Ports for colocated Druid processes",id:"ports-for-colocated-druid-processes",level:3},{value:"Override properties for Peon Tasks",id:"override-properties-for-peon-tasks",level:3},{value:"Metric names",id:"metric-names",level:3},{value:"Metric mapping",id:"metric-mapping",level:3}],u={toc:m},c="wrapper";function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To use this Apache Druid extension, ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.1/configuration/extensions#loading-extensions"},"include")," ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus-emitter")," in the extensions load list."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This extension exposes ",(0,i.kt)("a",{parentName:"p",href:"https://druid.apache.org/docs/latest/operations/metrics.html"},"Druid metrics")," for collection by a Prometheus server (",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"https://prometheus.io/"),")."),(0,i.kt)("p",null,"Emitter is enabled by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.emitter=prometheus")," ",(0,i.kt)("a",{parentName:"p",href:"https://druid.apache.org/docs/latest/configuration/index.html#enabling-metrics"},"configs")," or include ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus")," in the composing emitter list."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"All the configuration parameters for the Prometheus emitter are under ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.emitter.prometheus"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"),(0,i.kt)("th",{parentName:"tr",align:null},"default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.prometheus.strategy")),(0,i.kt)("td",{parentName:"tr",align:null},"The strategy to expose prometheus metrics. ",(0,i.kt)("br",null),"Should be one of ",(0,i.kt)("inlineCode",{parentName:"td"},"exporter")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"pushgateway"),". Default strategy ",(0,i.kt)("inlineCode",{parentName:"td"},"exporter")," would expose metrics for scraping purpose. Peon tasks (short-lived jobs) should use ",(0,i.kt)("inlineCode",{parentName:"td"},"pushgateway")," strategy."),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"exporter")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.prometheus.port")),(0,i.kt)("td",{parentName:"tr",align:null},"The port on which to expose the prometheus HTTPServer. Required if using ",(0,i.kt)("inlineCode",{parentName:"td"},"exporter")," strategy."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.prometheus.namespace")),(0,i.kt)("td",{parentName:"tr",align:null},"Optional metric namespace. Must match the regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-zA-Z_:][a-zA-Z0-9_:]*")),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"druid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.prometheus.dimensionMapPath")),(0,i.kt)("td",{parentName:"tr",align:null},"JSON file defining the Prometheus metric type, desired dimensions, help text, and conversionFactor for every Druid metric."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"Default mapping provided. See below.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.prometheus.addHostAsLabel")),(0,i.kt)("td",{parentName:"tr",align:null},"Flag to include the hostname as a prometheus label."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.prometheus.addServiceAsLabel")),(0,i.kt)("td",{parentName:"tr",align:null},"Flag to include the druid service name (e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"druid/broker"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"druid/coordinator"),", etc.) as a prometheus label."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.prometheus.pushGatewayAddress")),(0,i.kt)("td",{parentName:"tr",align:null},"Pushgateway address. Required if using ",(0,i.kt)("inlineCode",{parentName:"td"},"pushgateway")," strategy."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.prometheus.flushPeriod")),(0,i.kt)("td",{parentName:"tr",align:null},"Emit metrics to Pushgateway every ",(0,i.kt)("inlineCode",{parentName:"td"},"flushPeriod")," seconds. Required if ",(0,i.kt)("inlineCode",{parentName:"td"},"pushgateway")," strategy is used."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"15")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.prometheus.extraLabels")),(0,i.kt)("td",{parentName:"tr",align:null},"JSON key-value pairs for additional labels on all metrics. Keys (label names) must match the regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-zA-Z_:][a-zA-Z0-9_:]*"),". Example: ",(0,i.kt)("inlineCode",{parentName:"td"},'{"cluster_name": "druid_cluster1", "env": "staging"}'),"."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.prometheus.deletePushGatewayMetricsOnShutdown")),(0,i.kt)("td",{parentName:"tr",align:null},"Flag to delete metrics from Pushgateway on task shutdown. Works only if ",(0,i.kt)("inlineCode",{parentName:"td"},"pushgateway")," strategy is used. This feature allows to delete a stale metrics from batch executed tasks. Otherwise, the Pushgateway will store these stale metrics indefinitely as there is ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/prometheus/pushgateway/issues/117"},"no time to live mechanism"),", using the memory to hold data that was already scraped by Prometheus."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.prometheus.waitForShutdownDelay")),(0,i.kt)("td",{parentName:"tr",align:null},"Time in milliseconds to wait for peon tasks to delete metrics from the Pushgateway on shutdown (e.g. 60_000). Applicable only when ",(0,i.kt)("inlineCode",{parentName:"td"},"pushgateway")," strategy is used and ",(0,i.kt)("inlineCode",{parentName:"td"},"deletePushGatewayMetricsOnShutdown")," is set to true. There is no guarantee that a peon task will delete metrics from the gateway if the configured delay is more than the ",(0,i.kt)("a",{parentName:"td",href:"https://druid.apache.org/docs/latest/configuration/#additional-peon-configuration"},"Peon's ",(0,i.kt)("inlineCode",{parentName:"a"},"druid.indexer.task.gracefulShutdownTimeout"))," value. For best results, set this value is 1.2 times the configured Prometheus ",(0,i.kt)("inlineCode",{parentName:"td"},"scrape_interval")," of Pushgateway to ensure that  Druid scrapes the metrics before cleanup."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none")))),(0,i.kt)("h3",{id:"ports-for-colocated-druid-processes"},"Ports for colocated Druid processes"),(0,i.kt)("p",null,"In certain instances, Druid processes may be colocated on the same host. For example, the Broker and Router may share the same server. Other colocated processes include the Historical and Middle Manager or the Coordinator and Overlord. When you have colocated processes, specify ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.emitter.prometheus.port")," separately for each process on each host. For example, even if the Broker and Router share the same host, the Broker runtime properties and the Router runtime properties each need to list ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.emitter.prometheus.port"),", and the port value for both must be different."),(0,i.kt)("h3",{id:"override-properties-for-peon-tasks"},"Override properties for Peon Tasks"),(0,i.kt)("p",null,"Peon tasks are created dynamically by middle managers and have dynamic host and port addresses. Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"exporter")," strategy allows Prometheus to read only from a fixed address, it cannot be used for peon tasks.\nSo, these tasks need to be configured to use ",(0,i.kt)("inlineCode",{parentName:"p"},"pushgateway")," strategy to push metrics from Druid to prometheus gateway."),(0,i.kt)("p",null,"If this emitter is configured to use ",(0,i.kt)("inlineCode",{parentName:"p"},"exporter")," strategy globally, some of the above configurations need to be overridden in the middle manager so that spawned peon tasks can still use the ",(0,i.kt)("inlineCode",{parentName:"p"},"pushgateway")," strategy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#\n# Override global prometheus emitter configuration for peon tasks to use `pushgateway` strategy.\n# Other configurations can also be overridden by adding `druid.indexer.fork.property.` prefix to above configuration properties.\n# \ndruid.indexer.fork.property.druid.emitter.prometheus.strategy=pushgateway\ndruid.indexer.fork.property.druid.emitter.prometheus.pushGatewayAddress=http://<push-gateway-address>\n")),(0,i.kt)("h3",{id:"metric-names"},"Metric names"),(0,i.kt)("p",null,"All metric names and labels are reformatted to match Prometheus standards."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For names: all characters which are not alphanumeric, underscores, or colons (matching ",(0,i.kt)("inlineCode",{parentName:"li"},"[^a-zA-Z_:][^a-zA-Z0-9_:]*"),") are replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},"_")),(0,i.kt)("li",{parentName:"ul"},"For labels: all characters which are not alphanumeric or underscores (matching ",(0,i.kt)("inlineCode",{parentName:"li"},"[^a-zA-Z0-9_][^a-zA-Z0-9_]*"),") are replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},"_"))),(0,i.kt)("h3",{id:"metric-mapping"},"Metric mapping"),(0,i.kt)("p",null,"Each metric to be collected by Prometheus must specify a type, one of ",(0,i.kt)("inlineCode",{parentName:"p"},"[timer, counter, guage]"),". Prometheus Emitter expects this mapping to\nbe provided as a JSON file.  Additionally, this mapping specifies which dimensions should be included for each metric.  Prometheus expects\nhistogram timers to use Seconds as the base unit.  Timers which do not use seconds as a base unit can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"conversionFactor")," to set\nthe base time unit. If the user does not specify their own JSON file, a default mapping is used.  All\nmetrics are expected to be mapped. Metrics which are not mapped will not be tracked."),(0,i.kt)("p",null,"Prometheus metric path is organized using the following schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'<druid metric name> : { \n  "dimensions" : <dimension list>, \n  "type" : <timer|counter|gauge>, \n  "conversionFactor": <conversionFactor>, \n  "help" : <help text>\n}\n')),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"query/time" : { \n  "dimensions" : ["dataSource", "type"],\n  "type" : "timer",\n  "conversionFactor": 1000.0,\n  "help": "Seconds taken to complete a query."\n}\n')),(0,i.kt)("p",null,"For metrics which are emitted from multiple services with different dimensions, the metric name is prefixed with\nthe service name. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"druid/coordinator-segment/count" : { "dimensions" : ["dataSource"], "type" : "gauge" },\n"druid/historical-segment/count" : { "dimensions" : ["dataSource", "tier", "priority"], "type" : "gauge" }\n')),(0,i.kt)("p",null,"For most use cases, the default mapping is sufficient."))}h.isMDXComponent=!0}}]);