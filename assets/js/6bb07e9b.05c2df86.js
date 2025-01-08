"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4208],{14137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(n),c=r,m=g["".concat(d,".").concat(c)]||g[c]||s[c]||a;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>g});var o=n(87462),r=n(63366),a=(n(67294),n(14137)),l=["components"],i={id:"google",title:"Google Cloud Storage"},d=void 0,p={unversionedId:"development/extensions-core/google",id:"development/extensions-core/google",title:"Google Cloud Storage",description:"\x3c!--",source:"@site/docs/31.0.0/development/extensions-core/google.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/google",permalink:"/docs/31.0.0/development/extensions-core/google",draft:!1,tags:[],version:"current",frontMatter:{id:"google",title:"Google Cloud Storage"}},u={},g=[{value:"Google Cloud Storage Extension",id:"google-cloud-storage-extension",level:2},{value:"Required Configuration",id:"required-configuration",level:3},{value:"Reading data from Google Cloud Storage",id:"reading-data-from-google-cloud-storage",level:3},{value:"Deep Storage",id:"deep-storage",level:3},{value:"Configuration",id:"configuration",level:4}],s={toc:g},c="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)(c,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"google-cloud-storage-extension"},"Google Cloud Storage Extension"),(0,a.kt)("p",null,"This extension allows you to do 2 things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#reading-data-from-google-cloud-storage"},"Ingest data")," from files stored in Google Cloud Storage."),(0,a.kt)("li",{parentName:"ul"},"Write segments to ",(0,a.kt)("a",{parentName:"li",href:"#deep-storage"},"deep storage")," in GCS.")),(0,a.kt)("p",null,"To use this Apache Druid extension, ",(0,a.kt)("a",{parentName:"p",href:"/docs/31.0.0/configuration/extensions#loading-extensions"},"include")," ",(0,a.kt)("inlineCode",{parentName:"p"},"druid-google-extensions")," in the extensions load list."),(0,a.kt)("h3",{id:"required-configuration"},"Required Configuration"),(0,a.kt)("p",null,"To configure connectivity to google cloud, run druid processes with ",(0,a.kt)("inlineCode",{parentName:"p"},"GOOGLE_APPLICATION_CREDENTIALS=/path/to/service_account_keyfile")," in the environment."),(0,a.kt)("h3",{id:"reading-data-from-google-cloud-storage"},"Reading data from Google Cloud Storage"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/31.0.0/ingestion/input-sources"},"Google Cloud Storage input source")," is supported by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/31.0.0/ingestion/native-batch"},"Parallel task"),"\nto read objects directly from Google Cloud Storage. If you use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/31.0.0/ingestion/hadoop"},"Hadoop task"),",\nyou can read data from Google Cloud Storage by specifying the paths in your ",(0,a.kt)("a",{parentName:"p",href:"/docs/31.0.0/ingestion/hadoop#inputspec"},(0,a.kt)("inlineCode",{parentName:"a"},"inputSpec")),"."),(0,a.kt)("h3",{id:"deep-storage"},"Deep Storage"),(0,a.kt)("p",null,"Deep storage can be written to Google Cloud Storage either via this extension or the ",(0,a.kt)("a",{parentName:"p",href:"/docs/31.0.0/development/extensions-core/hdfs"},"druid-hdfs-storage extension"),"."),(0,a.kt)("h4",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"To configure connectivity to google cloud, run druid processes with ",(0,a.kt)("inlineCode",{parentName:"p"},"GOOGLE_APPLICATION_CREDENTIALS=/path/to/service_account_keyfile")," in the environment."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.storage.type")),(0,a.kt)("td",{parentName:"tr",align:null},"google"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.google.bucket")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Google Storage bucket name."),(0,a.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.google.prefix")),(0,a.kt)("td",{parentName:"tr",align:null},"A prefix string that will be prepended to the blob names for the segments published to Google deep storage"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},'""')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.google.maxListingLength")),(0,a.kt)("td",{parentName:"tr",align:null},"maximum number of input files matching a given prefix to retrieve at a time"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"1024")))))}m.isMDXComponent=!0}}]);