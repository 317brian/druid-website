"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1471],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),c=o,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},93351:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={id:"export-metadata",title:"Export Metadata Tool"},s=void 0,d={unversionedId:"operations/export-metadata",id:"operations/export-metadata",title:"Export Metadata Tool",description:"\x3c!--",source:"@site/docs/31.0.1/operations/export-metadata.md",sourceDirName:"operations",slug:"/operations/export-metadata",permalink:"/docs/31.0.1/operations/export-metadata",draft:!1,tags:[],version:"current",frontMatter:{id:"export-metadata",title:"Export Metadata Tool"},sidebar:"docs",previous:{title:"Deep storage migration",permalink:"/docs/31.0.1/operations/deep-storage-migration"},next:{title:"Metadata Migration",permalink:"/docs/31.0.1/operations/metadata-migration"}},p={},u=[{value:"<code>export-metadata</code> Options",id:"export-metadata-options",level:2},{value:"Connection Properties",id:"connection-properties",level:3},{value:"Output Path",id:"output-path",level:3},{value:"Export Format Options",id:"export-format-options",level:3},{value:"Deep Storage Migration",id:"deep-storage-migration",level:3},{value:"Migration to S3 Deep Storage",id:"migration-to-s3-deep-storage",level:4},{value:"Migration to HDFS Deep Storage",id:"migration-to-hdfs-deep-storage",level:4},{value:"Migration to New Local Deep Storage Path",id:"migration-to-new-local-deep-storage-path",level:4},{value:"Running the tool",id:"running-the-tool",level:2},{value:"Importing Metadata",id:"importing-metadata",level:2},{value:"Derby",id:"derby",level:3},{value:"MySQL",id:"mysql",level:3},{value:"PostgreSQL",id:"postgresql",level:3}],m={toc:u},c="wrapper";function g(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Druid includes an ",(0,r.kt)("inlineCode",{parentName:"p"},"export-metadata")," tool for assisting with migration of cluster metadata and deep storage."),(0,r.kt)("p",null,"This tool exports the contents of the following Druid metadata tables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"segments"),(0,r.kt)("li",{parentName:"ul"},"rules"),(0,r.kt)("li",{parentName:"ul"},"config"),(0,r.kt)("li",{parentName:"ul"},"datasource"),(0,r.kt)("li",{parentName:"ul"},"supervisors")),(0,r.kt)("p",null,"Additionally, the tool can rewrite the local deep storage location descriptors in the rows of the segments table\nto point to new deep storage locations (S3, HDFS, and local rewrite paths are supported)."),(0,r.kt)("p",null,"The tool has the following limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only exporting from Derby metadata is currently supported"),(0,r.kt)("li",{parentName:"ul"},"If rewriting load specs for deep storage migration, only migrating from local deep storage is currently supported.")),(0,r.kt)("h2",{id:"export-metadata-options"},(0,r.kt)("inlineCode",{parentName:"h2"},"export-metadata")," Options"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"export-metadata")," tool provides the following options:"),(0,r.kt)("h3",{id:"connection-properties"},"Connection Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--connectURI"),": The URI of the Derby database, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"jdbc:derby://localhost:1527/var/druid/metadata.db;create=true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--user"),": Username"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--password"),": Password"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--base"),": corresponds to the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"druid.metadata.storage.tables.base")," in the configuration, ",(0,r.kt)("inlineCode",{parentName:"li"},"druid")," by default.")),(0,r.kt)("h3",{id:"output-path"},"Output Path"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--output-path"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-o"),": The output directory of the tool. CSV files for the Druid segments, rules, config, datasource, and supervisors tables will be written to this directory.")),(0,r.kt)("h3",{id:"export-format-options"},"Export Format Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--use-hex-blobs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-x"),": If set, export BLOB payload columns as hexadecimal strings. This needs to be set if importing back into Derby. Default is false."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--booleans-as-strings"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-t"),': If set, write boolean values as "true" or "false" instead of "1" and "0". This needs to be set if importing back into Derby. Default is false.')),(0,r.kt)("h3",{id:"deep-storage-migration"},"Deep Storage Migration"),(0,r.kt)("h4",{id:"migration-to-s3-deep-storage"},"Migration to S3 Deep Storage"),(0,r.kt)("p",null,"By setting the options below, the tool will rewrite the segment load specs to point to a new S3 deep storage location."),(0,r.kt)("p",null,"This helps users migrate segments stored in local deep storage to S3."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--s3bucket"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-b"),": The S3 bucket that will hold the migrated segments"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--s3baseKey"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-k"),": The base S3 key where the migrated segments will be stored")),(0,r.kt)("p",null,"When copying the local deep storage segments to S3, the rewrite performed by this tool requires that the directory structure of the segments be unchanged."),(0,r.kt)("p",null,"For example, if the cluster had the following local deep storage configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"druid.storage.type=local\ndruid.storage.storageDirectory=/druid/segments\n")),(0,r.kt)("p",null,"If the target S3 bucket was ",(0,r.kt)("inlineCode",{parentName:"p"},"migration"),", with a base key of ",(0,r.kt)("inlineCode",{parentName:"p"},"example"),", the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"s3://migration/example/")," must be identical to that of ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/segments")," on the old local filesystem."),(0,r.kt)("h4",{id:"migration-to-hdfs-deep-storage"},"Migration to HDFS Deep Storage"),(0,r.kt)("p",null,"By setting the options below, the tool will rewrite the segment load specs to point to a new HDFS deep storage location."),(0,r.kt)("p",null,"This helps users migrate segments stored in local deep storage to HDFS."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--hadoopStorageDirectory"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-h"),": The HDFS path that will hold the migrated segments"),(0,r.kt)("p",null,"When copying the local deep storage segments to HDFS, the rewrite performed by this tool requires that the directory structure of the segments be unchanged, with the exception of directory names containing colons (",(0,r.kt)("inlineCode",{parentName:"p"},":"),")."),(0,r.kt)("p",null,"For example, if the cluster had the following local deep storage configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"druid.storage.type=local\ndruid.storage.storageDirectory=/druid/segments\n")),(0,r.kt)("p",null,"If the target hadoopStorageDirectory was ",(0,r.kt)("inlineCode",{parentName:"p"},"/migration/example"),", the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"hdfs:///migration/example/")," must be identical to that of ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/segments")," on the old local filesystem."),(0,r.kt)("p",null,"Additionally, the segments paths in local deep storage contain colons(",(0,r.kt)("inlineCode",{parentName:"p"},":"),") in their names, e.g.:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wikipedia/2016-06-27T02:00:00.000Z_2016-06-27T03:00:00.000Z/2019-05-03T21:57:15.950Z/1/index.zip")),(0,r.kt)("p",null,"HDFS cannot store files containing colons, and this tool expects the colons to be replaced with underscores (",(0,r.kt)("inlineCode",{parentName:"p"},"_"),") in HDFS."),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"wikipedia")," segment above under ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/segments")," in local deep storage would need to be migrated to HDFS under ",(0,r.kt)("inlineCode",{parentName:"p"},"hdfs:///migration/example/")," with the following path:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wikipedia/2016-06-27T02_00_00.000Z_2016-06-27T03_00_00.000Z/2019-05-03T21_57_15.950Z/1/index.zip")),(0,r.kt)("h4",{id:"migration-to-new-local-deep-storage-path"},"Migration to New Local Deep Storage Path"),(0,r.kt)("p",null,"By setting the options below, the tool will rewrite the segment load specs to point to a new local deep storage location."),(0,r.kt)("p",null,"This helps users migrate segments stored in local deep storage to a new path (e.g., a new NFS mount)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--newLocalPath"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-n"),": The new path on the local filesystem that will hold the migrated segments"),(0,r.kt)("p",null,"When copying the local deep storage segments to a new path, the rewrite performed by this tool requires that the directory structure of the segments be unchanged."),(0,r.kt)("p",null,"For example, if the cluster had the following local deep storage configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"druid.storage.type=local\ndruid.storage.storageDirectory=/druid/segments\n")),(0,r.kt)("p",null,"If the new path  was ",(0,r.kt)("inlineCode",{parentName:"p"},"/migration/example"),", the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"/migration/example/")," must be identical to that of ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/segments")," on the local filesystem."),(0,r.kt)("h2",{id:"running-the-tool"},"Running the tool"),(0,r.kt)("p",null,"To use the tool, you can run the following from the root of the Druid package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd ${DRUID_ROOT}\nmkdir -p /tmp/csv\njava -classpath "lib/*" -Dlog4j.configurationFile=conf/druid/cluster/_common/log4j2.xml -Ddruid.extensions.directory="extensions" -Ddruid.extensions.loadList=[] org.apache.druid.cli.Main tools export-metadata --connectURI "jdbc:derby://localhost:1527/var/druid/metadata.db;" -o /tmp/csv\n')),(0,r.kt)("p",null,"In the example command above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lib")," is the Druid lib directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extensions")," is the Druid extensions directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/tmp/csv")," is the output directory. Please make sure that this directory exists.")),(0,r.kt)("h2",{id:"importing-metadata"},"Importing Metadata"),(0,r.kt)("p",null,"After running the tool, the output directory will contain ",(0,r.kt)("inlineCode",{parentName:"p"},"<table-name>_raw.csv")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<table-name>.csv")," files."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<table-name>_raw.csv")," files are intermediate files used by the tool, containing the table data as exported by Derby without modification."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<table-name>.csv")," files are used for import into another database such as MySQL and PostgreSQL and have any configured deep storage location rewrites applied."),(0,r.kt)("p",null,"Example import commands for Derby, MySQL, and PostgreSQL are shown below."),(0,r.kt)("p",null,"These example import commands expect ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/csv")," and its contents to be accessible from the server. For other options, such as importing from the client filesystem, please refer to the database's documentation."),(0,r.kt)("h3",{id:"derby"},"Derby"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CALL SYSCS_UTIL.SYSCS_IMPORT_TABLE (null,'DRUID_SEGMENTS','/tmp/csv/druid_segments.csv',',','\"',null,0);\n\nCALL SYSCS_UTIL.SYSCS_IMPORT_TABLE (null,'DRUID_RULES','/tmp/csv/druid_rules.csv',',','\"',null,0);\n\nCALL SYSCS_UTIL.SYSCS_IMPORT_TABLE (null,'DRUID_CONFIG','/tmp/csv/druid_config.csv',',','\"',null,0);\n\nCALL SYSCS_UTIL.SYSCS_IMPORT_TABLE (null,'DRUID_DATASOURCE','/tmp/csv/druid_dataSource.csv',',','\"',null,0);\n\nCALL SYSCS_UTIL.SYSCS_IMPORT_TABLE (null,'DRUID_SUPERVISORS','/tmp/csv/druid_supervisors.csv',',','\"',null,0);\n")),(0,r.kt)("h3",{id:"mysql"},"MySQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"LOAD DATA INFILE '/tmp/csv/druid_segments.csv' INTO TABLE druid_segments FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\\\"' (id,dataSource,created_date,start,end,partitioned,version,used,payload); SHOW WARNINGS;\n\nLOAD DATA INFILE '/tmp/csv/druid_rules.csv' INTO TABLE druid_rules FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\\\"' (id,dataSource,version,payload); SHOW WARNINGS;\n\nLOAD DATA INFILE '/tmp/csv/druid_config.csv' INTO TABLE druid_config FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\\\"' (name,payload); SHOW WARNINGS;\n\nLOAD DATA INFILE '/tmp/csv/druid_dataSource.csv' INTO TABLE druid_dataSource FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\\\"' (dataSource,created_date,commit_metadata_payload,commit_metadata_sha1); SHOW WARNINGS;\n\nLOAD DATA INFILE '/tmp/csv/druid_supervisors.csv' INTO TABLE druid_supervisors FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\\\"' (id,spec_id,created_date,payload); SHOW WARNINGS;\n")),(0,r.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"COPY druid_segments(id,dataSource,created_date,start,\"end\",partitioned,version,used,payload) FROM '/tmp/csv/druid_segments.csv' DELIMITER ',' CSV;\n\nCOPY druid_rules(id,dataSource,version,payload) FROM '/tmp/csv/druid_rules.csv' DELIMITER ',' CSV;\n\nCOPY druid_config(name,payload) FROM '/tmp/csv/druid_config.csv' DELIMITER ',' CSV;\n\nCOPY druid_dataSource(dataSource,created_date,commit_metadata_payload,commit_metadata_sha1) FROM '/tmp/csv/druid_dataSource.csv' DELIMITER ',' CSV;\n\nCOPY druid_supervisors(id,spec_id,created_date,payload) FROM '/tmp/csv/druid_supervisors.csv' DELIMITER ',' CSV;\n")))}g.isMDXComponent=!0}}]);