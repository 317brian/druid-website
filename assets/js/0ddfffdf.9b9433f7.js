"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2723],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71921:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"metadata-migration",title:"Metadata Migration"},l=void 0,d={unversionedId:"operations/metadata-migration",id:"operations/metadata-migration",title:"Metadata Migration",description:"\x3c!--",source:"@site/docs/latest/operations/metadata-migration.md",sourceDirName:"operations",slug:"/operations/metadata-migration",permalink:"/docs/latest/operations/metadata-migration",draft:!1,tags:[],version:"current",frontMatter:{id:"metadata-migration",title:"Metadata Migration"},sidebar:"docs",previous:{title:"Export Metadata Tool",permalink:"/docs/latest/operations/export-metadata"},next:{title:"Content for build.sbt",permalink:"/docs/latest/operations/use_sbt_to_build_fat_jar"}},u={},p=[{value:"Shut down cluster services",id:"shut-down-cluster-services",level:2},{value:"Exporting metadata",id:"exporting-metadata",level:2},{value:"Initializing the new metadata store",id:"initializing-the-new-metadata-store",level:2},{value:"Create database",id:"create-database",level:3},{value:"Update configuration",id:"update-configuration",level:3},{value:"Create Druid tables",id:"create-druid-tables",level:3},{value:"MySQL",id:"mysql",level:4},{value:"PostgreSQL",id:"postgresql",level:4},{value:"Import metadata",id:"import-metadata",level:3},{value:"Restart cluster",id:"restart-cluster",level:3}],c={toc:p},m="wrapper";function g(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you have been running an evaluation Druid cluster using the built-in Derby metadata storage and wish to migrate to a\nmore production-capable metadata store such as MySQL or PostgreSQL, this document describes the necessary steps."),(0,o.kt)("h2",{id:"shut-down-cluster-services"},"Shut down cluster services"),(0,o.kt)("p",null,"To ensure a clean migration, shut down the non-coordinator services to ensure that metadata state will not\nchange as you do the migration."),(0,o.kt)("p",null,"When migrating from Derby, the coordinator processes will still need to be up initially, as they host the Derby database."),(0,o.kt)("h2",{id:"exporting-metadata"},"Exporting metadata"),(0,o.kt)("p",null,"Druid provides an ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/operations/export-metadata"},"Export Metadata Tool")," for exporting metadata from Derby into CSV files\nwhich can then be imported into your new metadata store."),(0,o.kt)("p",null,"The tool also provides options for rewriting the deep storage locations of segments; this is useful\nfor ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/operations/deep-storage-migration"},"deep storage migration"),"."),(0,o.kt)("p",null,"Run the ",(0,o.kt)("inlineCode",{parentName:"p"},"export-metadata")," tool on your existing cluster, and save the CSV files it generates. After a successful export, you can shut down the coordinator."),(0,o.kt)("h2",{id:"initializing-the-new-metadata-store"},"Initializing the new metadata store"),(0,o.kt)("h3",{id:"create-database"},"Create database"),(0,o.kt)("p",null,"Before importing the existing cluster metadata, you will need to set up the new metadata store."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-core/mysql"},"MySQL extension")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-core/postgresql"},"PostgreSQL extension")," docs have instructions for initial database setup."),(0,o.kt)("h3",{id:"update-configuration"},"Update configuration"),(0,o.kt)("p",null,"Update your Druid runtime properties with the new metadata configuration."),(0,o.kt)("h3",{id:"create-druid-tables"},"Create Druid tables"),(0,o.kt)("p",null,"Druid provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata-init")," tool for creating Druid's metadata tables. After initializing the Druid database, you can run the commands shown below from the root of the Druid package to initialize the tables."),(0,o.kt)("p",null,"In the example commands below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lib")," is the Druid lib directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"extensions")," is the Druid extensions directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"base")," corresponds to the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"druid.metadata.storage.tables.base")," in the configuration, ",(0,o.kt)("inlineCode",{parentName:"li"},"druid")," by default."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"--connectURI")," parameter corresponds to the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"druid.metadata.storage.connector.connectURI"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"--user")," parameter corresponds to the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"druid.metadata.storage.connector.user"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"--password")," parameter corresponds to the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"druid.metadata.storage.connector.password"),".")),(0,o.kt)("h4",{id:"mysql"},"MySQL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cd ${DRUID_ROOT}\njava -classpath "lib/*" -Dlog4j.configurationFile=conf/druid/cluster/_common/log4j2.xml -Ddruid.extensions.directory="extensions" -Ddruid.extensions.loadList="[\\"mysql-metadata-storage\\"]" -Ddruid.metadata.storage.type=mysql -Ddruid.node.type=metadata-init org.apache.druid.cli.Main tools metadata-init --connectURI="<mysql-uri>" --user <user> --password <pass> --base druid\n')),(0,o.kt)("h4",{id:"postgresql"},"PostgreSQL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cd ${DRUID_ROOT}\njava -classpath "lib/*" -Dlog4j.configurationFile=conf/druid/cluster/_common/log4j2.xml -Ddruid.extensions.directory="extensions" -Ddruid.extensions.loadList="[\\"postgresql-metadata-storage\\"]" -Ddruid.metadata.storage.type=postgresql -Ddruid.node.type=metadata-init org.apache.druid.cli.Main tools metadata-init --connectURI="<postgresql-uri>" --user <user> --password <pass> --base druid\n')),(0,o.kt)("h3",{id:"import-metadata"},"Import metadata"),(0,o.kt)("p",null,"After initializing the tables, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/operations/export-metadata#importing-metadata"},"import commands")," for your target database."),(0,o.kt)("h3",{id:"restart-cluster"},"Restart cluster"),(0,o.kt)("p",null,"After importing the metadata successfully, you can now restart your cluster."))}g.isMDXComponent=!0}}]);