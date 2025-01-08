"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"delta-lake",title:"Delta Lake extension"},s=void 0,d={unversionedId:"development/extensions-contrib/delta-lake",id:"development/extensions-contrib/delta-lake",title:"Delta Lake extension",description:"\x3c!--",source:"@site/docs/30.0.1/development/extensions-contrib/delta-lake.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/delta-lake",permalink:"/docs/30.0.1/development/extensions-contrib/delta-lake",draft:!1,tags:[],version:"current",frontMatter:{id:"delta-lake",title:"Delta Lake extension"}},p={},c=[{value:"Version support",id:"version-support",level:2},{value:"Downloading Delta Lake extension",id:"downloading-delta-lake-extension",level:2},{value:"Known limitations",id:"known-limitations",level:2}],u={toc:c},m="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Delta Lake is an open source storage framework that enables building a\nLakehouse architecture with various compute engines. ",(0,a.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/input-sources#delta-lake-input-source"},"DeltaLakeInputSource")," lets\nyou ingest data stored in a Delta Lake table into Apache Druid. To use the Delta Lake extension, add the ",(0,a.kt)("inlineCode",{parentName:"p"},"druid-deltalake-extensions")," to the list of loaded extensions.\nSee ",(0,a.kt)("a",{parentName:"p",href:"/docs/30.0.1/configuration/extensions#loading-extensions"},"Loading extensions")," for more information."),(0,a.kt)("p",null,"The Delta input source reads the configured Delta Lake table and extracts the underlying Delta files in the table's latest snapshot\nbased on an optional Delta filter. These Delta Lake files are versioned Parquet files."),(0,a.kt)("h2",{id:"version-support"},"Version support"),(0,a.kt)("p",null,"The Delta Lake extension uses the Delta Kernel introduced in Delta Lake 3.0.0, which is compatible with Apache Spark 3.5.x.\nOlder versions are unsupported, so consider upgrading to Delta Lake 3.0.x or higher to use this extension."),(0,a.kt)("h2",{id:"downloading-delta-lake-extension"},"Downloading Delta Lake extension"),(0,a.kt)("p",null,"To download ",(0,a.kt)("inlineCode",{parentName:"p"},"druid-deltalake-extensions"),", run the following command after replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"<VERSION>")," with the desired\nDruid version:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'java \\\n  -cp "lib/*" \\\n  -Ddruid.extensions.directory="extensions" \\\n  -Ddruid.extensions.hadoopDependenciesDir="hadoop-dependencies" \\\n  org.apache.druid.cli.Main tools pull-deps \\\n  --no-default-hadoop \\\n  -c "org.apache.druid.extensions.contrib:druid-deltalake-extensions:<VERSION>"\n')),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/30.0.1/configuration/extensions#loading-community-extensions"},"Loading community extensions")," for more information."),(0,a.kt)("h2",{id:"known-limitations"},"Known limitations"),(0,a.kt)("p",null,"This extension relies on the Delta Kernel API and can only read from the latest Delta table snapshot. Ability to read from\narbitrary snapshots is tracked ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/delta-io/delta/issues/2581"},"here"),"."))}f.isMDXComponent=!0}}]);