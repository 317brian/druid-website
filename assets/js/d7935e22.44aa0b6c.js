"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9328],{14137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=n(87462),a=n(63366),i=(n(67294),n(14137)),l=["components"],o={id:"single-server",title:"Single server deployment"},s=void 0,d={unversionedId:"operations/single-server",id:"operations/single-server",title:"Single server deployment",description:"\x3c!--",source:"@site/docs/31.0.0/operations/single-server.md",sourceDirName:"operations",slug:"/operations/single-server",permalink:"/docs/31.0.0/operations/single-server",draft:!1,tags:[],version:"current",frontMatter:{id:"single-server",title:"Single server deployment"},sidebar:"docs",previous:{title:"Local quickstart",permalink:"/docs/31.0.0/tutorials/"},next:{title:"Run with Docker",permalink:"/docs/31.0.0/tutorials/docker"}},p={},u=[{value:"Single server reference configurations (deprecated)",id:"single-server-reference-configurations-deprecated",level:2}],c={toc:u},m="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Druid includes a launch script, ",(0,i.kt)("inlineCode",{parentName:"p"},"bin/start-druid")," that automatically sets various memory-related parameters based on available processors and memory.\nIt accepts optional arguments such as list of services, total memory, and a config directory to override default JVM arguments and service-specific runtime properties."),(0,i.kt)("p",null,"By default, the services started by ",(0,i.kt)("inlineCode",{parentName:"p"},"bin/start-druid"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use all processors"),(0,i.kt)("li",{parentName:"ul"},"can use up to 80% memory on the system"),(0,i.kt)("li",{parentName:"ul"},"apply the configuration files in ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/druid/auto")," for all other settings.")),(0,i.kt)("p",null,"For details about possible arguments, run ",(0,i.kt)("inlineCode",{parentName:"p"},"bin/start-druid --help"),"."),(0,i.kt)("h2",{id:"single-server-reference-configurations-deprecated"},"Single server reference configurations (deprecated)"),(0,i.kt)("p",null,"Druid includes a set of reference configurations and launch scripts for single-machine deployments.\nThese start scripts are deprecated in favor of the ",(0,i.kt)("inlineCode",{parentName:"p"},"bin/start-druid")," script documented above.\nThese configuration bundles are located in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/druid/single-server/"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,i.kt)("th",{parentName:"tr",align:null},"Sizing"),(0,i.kt)("th",{parentName:"tr",align:null},"Launch command"),(0,i.kt)("th",{parentName:"tr",align:null},"Configuration directory"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nano-quickstart")),(0,i.kt)("td",{parentName:"tr",align:null},"1 CPU, 4GiB RAM"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bin/start-nano-quickstart")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"conf/druid/single-server/nano-quickstart"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"micro-quickstart")),(0,i.kt)("td",{parentName:"tr",align:null},"4 CPU, 16GiB RAM"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bin/start-micro-quickstart")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"conf/druid/single-server/micro-quickstart"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"small")),(0,i.kt)("td",{parentName:"tr",align:null},"8 CPU, 64GiB RAM (~i3.2xlarge)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bin/start-small")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"conf/druid/single-server/small"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"medium")),(0,i.kt)("td",{parentName:"tr",align:null},"16 CPU, 128GiB RAM (~i3.4xlarge)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bin/start-medium")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"conf/druid/single-server/medium"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"large")),(0,i.kt)("td",{parentName:"tr",align:null},"32 CPU, 256GiB RAM (~i3.8xlarge)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bin/start-large")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"conf/druid/single-server/large"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"xlarge")),(0,i.kt)("td",{parentName:"tr",align:null},"64 CPU, 512GiB RAM (~i3.16xlarge)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bin/start-xlarge")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"conf/druid/single-server/xlarge"))))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"micro-quickstart")," is sized for small machines like laptops and is intended for quick evaluation use-cases."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nano-quickstart")," is an even smaller configuration, targeting a machine with 1 CPU and 4GiB memory. It is meant for limited evaluations in resource constrained environments, such as small Docker containers."),(0,i.kt)("p",null,"The other configurations are intended for general use single-machine deployments. They are sized for hardware roughly based on Amazon's i3 series of EC2 instances."),(0,i.kt)("p",null,"The startup scripts for these example configurations run a single ZK instance along with the Druid services. You can choose to deploy ZK separately as well."))}g.isMDXComponent=!0}}]);