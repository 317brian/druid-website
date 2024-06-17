"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5589],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=d(n),k=r,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||o;return n?a.createElement(c,i(i({ref:e},p),{},{components:n})):a.createElement(c,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[m]="string"==typeof t?t:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},29064:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"extensions",title:"Extensions"},s=void 0,d={unversionedId:"configuration/extensions",id:"configuration/extensions",title:"Extensions",description:"\x3c!--",source:"@site/docs/latest/configuration/extensions.md",sourceDirName:"configuration",slug:"/configuration/extensions",permalink:"/docs/latest/configuration/extensions",draft:!1,tags:[],version:"current",frontMatter:{id:"extensions",title:"Extensions"},sidebar:"docs",previous:{title:"Configuration reference",permalink:"/docs/latest/configuration/"},next:{title:"Logging",permalink:"/docs/latest/configuration/logging"}},p={},m=[{value:"Core extensions",id:"core-extensions",level:2},{value:"Community extensions",id:"community-extensions",level:2},{value:"Promoting community extensions to core extensions",id:"promoting-community-extensions-to-core-extensions",level:2},{value:"Loading extensions",id:"loading-extensions",level:2},{value:"Loading core extensions",id:"loading-core-extensions",level:3},{value:"Loading community extensions",id:"loading-community-extensions",level:3},{value:"Loading extensions from the classpath",id:"loading-extensions-from-the-classpath",level:3}],u={toc:m},k="wrapper";function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)(k,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Druid implements an extension system that allows for adding functionality at runtime. Extensions\nare commonly used to add support for deep storages (like HDFS and S3), metadata stores (like MySQL\nand PostgreSQL), new aggregators, new input formats, and so on."),(0,o.kt)("p",null,"Production clusters will generally use at least two extensions; one for deep storage and one for a\nmetadata store. Many clusters will also use additional extensions."),(0,o.kt)("h2",{id:"core-extensions"},"Core extensions"),(0,o.kt)("p",null,"Core extensions are maintained by Druid committers."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Docs"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-avro-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for data in Apache Avro data format."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/avro"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-azure-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Microsoft Azure deep storage."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/azure"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-basic-security"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for Basic HTTP authentication and role-based access control."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/druid-basic-security"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-bloom-filter"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for providing Bloom filters in druid queries."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/bloom-filter"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-datasketches"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for approximate counts and set operations with ",(0,o.kt)("a",{parentName:"td",href:"https://datasketches.apache.org/"},"Apache DataSketches"),"."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/datasketches-extension"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-google-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Google Cloud Storage deep storage."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/google"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-hdfs-storage"),(0,o.kt)("td",{parentName:"tr",align:null},"HDFS deep storage."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/hdfs"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-histogram"),(0,o.kt)("td",{parentName:"tr",align:null},"Approximate histograms and quantiles aggregator. Deprecated, please use the ",(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/datasketches-quantiles"},"DataSketches quantiles aggregator")," from the ",(0,o.kt)("inlineCode",{parentName:"td"},"druid-datasketches")," extension instead."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/approximate-histograms"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-kafka-extraction-namespace"),(0,o.kt)("td",{parentName:"tr",align:null},"Apache Kafka-based namespaced lookup. Requires namespace lookup extension."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/querying/kafka-extraction-namespace"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-kafka-indexing-service"),(0,o.kt)("td",{parentName:"tr",align:null},"Supervised exactly-once Apache Kafka ingestion for the indexing service."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/ingestion/kafka-ingestion"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-kinesis-indexing-service"),(0,o.kt)("td",{parentName:"tr",align:null},"Supervised exactly-once Kinesis ingestion for the indexing service."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/ingestion/kinesis-ingestion"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-kerberos"),(0,o.kt)("td",{parentName:"tr",align:null},"Kerberos authentication for druid processes."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/druid-kerberos"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-lookups-cached-global"),(0,o.kt)("td",{parentName:"tr",align:null},"A module for ",(0,o.kt)("a",{parentName:"td",href:"/docs/latest/querying/lookups"},"lookups")," providing a jvm-global eager caching for lookups. It provides JDBC and URI implementations for fetching lookup data."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/querying/lookups-cached-global"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-lookups-cached-single"),(0,o.kt)("td",{parentName:"tr",align:null},"Per lookup caching module to support the use cases where a lookup need to be isolated from the global pool of lookups"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/druid-lookups"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-multi-stage-query"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for the multi-stage query architecture for Apache Druid and the multi-stage query task engine."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/multi-stage-query/"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-orc-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for data in Apache ORC data format."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/orc"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-parquet-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for data in Apache Parquet data format. Requires druid-avro-extensions to be loaded."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/parquet"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-protobuf-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for data in Protobuf data format."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/protobuf"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-ranger-security"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for access control through Apache Ranger."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/druid-ranger-security"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-s3-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Interfacing with data in AWS S3, and using S3 as deep storage."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/s3"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-ec2-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Interfacing with AWS EC2 for autoscaling middle managers"),(0,o.kt)("td",{parentName:"tr",align:null},"UNDOCUMENTED")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-aws-rds-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for AWS token based access to AWS RDS DB Cluster."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/druid-aws-rds"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-stats"),(0,o.kt)("td",{parentName:"tr",align:null},"Statistics related module including variance and standard deviation."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/stats"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mysql-metadata-storage"),(0,o.kt)("td",{parentName:"tr",align:null},"MySQL metadata store."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/mysql"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"postgresql-metadata-storage"),(0,o.kt)("td",{parentName:"tr",align:null},"PostgreSQL metadata store."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/postgresql"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"simple-client-sslcontext"),(0,o.kt)("td",{parentName:"tr",align:null},"Simple SSLContext provider module to be used by Druid's internal HttpClient when talking to other Druid processes over HTTPS."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/simple-client-sslcontext"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-pac4j"),(0,o.kt)("td",{parentName:"tr",align:null},"OpenID Connect authentication for druid processes."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/druid-pac4j"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-kubernetes-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Druid cluster deployment on Kubernetes without Zookeeper."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-core/kubernetes"},"link"))))),(0,o.kt)("h2",{id:"community-extensions"},"Community extensions"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"}," Community extensions are not maintained by Druid committers, although we accept patches from community members using these extensions. They may not have been as extensively tested as the core extensions.")),(0,o.kt)("p",null,"A number of community members have contributed their own extensions to Druid that are not packaged with the default Druid tarball.\nIf you'd like to take on maintenance for a community extension, please post on ",(0,o.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@druid.apache.org"},"dev@druid.apache.org")," to let us know!"),(0,o.kt)("p",null,"All of these community extensions can be downloaded using ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/operations/pull-deps"},"pull-deps")," while specifying a ",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," coordinate option to pull ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.druid.extensions.contrib:{EXTENSION_NAME}:{DRUID_VERSION}"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Docs"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aliyun-oss-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Aliyun OSS deep storage"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/aliyun-oss"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ambari-metrics-emitter"),(0,o.kt)("td",{parentName:"tr",align:null},"Ambari Metrics Emitter"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/ambari-metrics-emitter"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-cassandra-storage"),(0,o.kt)("td",{parentName:"tr",align:null},"Apache Cassandra deep storage."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/cassandra"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-cloudfiles-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Rackspace Cloudfiles deep storage and firehose."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/cloudfiles"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-compressed-bigdecimal"),(0,o.kt)("td",{parentName:"tr",align:null},"Compressed Big Decimal Type"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/compressed-big-decimal"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-ddsketch"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for DDSketch approximate quantiles based on ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/datadog/sketches-java"},"DDSketch")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/ddsketch-quantiles"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-deltalake-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for ingesting Delta Lake tables."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/delta-lake"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-distinctcount"),(0,o.kt)("td",{parentName:"tr",align:null},"DistinctCount aggregator"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/distinctcount"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-iceberg-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for ingesting Iceberg tables."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/iceberg"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-redis-cache"),(0,o.kt)("td",{parentName:"tr",align:null},"A cache implementation for Druid based on Redis."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/redis-cache"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-time-min-max"),(0,o.kt)("td",{parentName:"tr",align:null},"Min/Max aggregator for timestamp."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/time-min-max"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sqlserver-metadata-storage"),(0,o.kt)("td",{parentName:"tr",align:null},"Microsoft SQLServer deep storage."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/sqlserver"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"graphite-emitter"),(0,o.kt)("td",{parentName:"tr",align:null},"Graphite metrics emitter"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/graphite"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"statsd-emitter"),(0,o.kt)("td",{parentName:"tr",align:null},"StatsD metrics emitter"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/statsd"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kafka-emitter"),(0,o.kt)("td",{parentName:"tr",align:null},"Kafka metrics emitter"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/kafka-emitter"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-thrift-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Support thrift ingestion"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/thrift"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-opentsdb-emitter"),(0,o.kt)("td",{parentName:"tr",align:null},"OpenTSDB metrics emitter"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/opentsdb-emitter"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"materialized-view-selection, materialized-view-maintenance"),(0,o.kt)("td",{parentName:"tr",align:null},"Materialized View"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/materialized-view"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-moving-average-query"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for ",(0,o.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Moving_average"},"Moving Average")," and other Aggregate ",(0,o.kt)("a",{parentName:"td",href:"https://en.wikibooks.org/wiki/Structured_Query_Language/Window_functions"},"Window Functions")," in Druid queries."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/moving-average-query"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-influxdb-emitter"),(0,o.kt)("td",{parentName:"tr",align:null},"InfluxDB metrics emitter"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/influxdb-emitter"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-momentsketch"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for approximate quantile queries using the ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/stanford-futuredata/momentsketch"},"momentsketch")," library"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/momentsketch-quantiles"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-tdigestsketch"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for approximate sketch aggregators based on ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/tdunning/t-digest"},"T-Digest")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/tdigestsketch-quantiles"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"gce-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"GCE Extensions"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/gce-extensions"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"prometheus-emitter"),(0,o.kt)("td",{parentName:"tr",align:null},"Exposes ",(0,o.kt)("a",{parentName:"td",href:"/docs/latest/operations/metrics"},"Druid metrics")," for Prometheus server collection (",(0,o.kt)("a",{parentName:"td",href:"https://prometheus.io/"},"https://prometheus.io/"),")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/prometheus"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-kubernetes-overlord-extensions"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for launching tasks in k8s without Middle Managers"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/k8s-jobs"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-spectator-histogram"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for efficient approximate percentile queries"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/spectator-histogram"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"druid-rabbit-indexing-service"),(0,o.kt)("td",{parentName:"tr",align:null},"Support for creating and managing ",(0,o.kt)("a",{parentName:"td",href:"https://www.rabbitmq.com/"},"RabbitMQ")," indexing tasks"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/latest/development/extensions-contrib/rabbit-super-stream-injestion"},"link"))))),(0,o.kt)("h2",{id:"promoting-community-extensions-to-core-extensions"},"Promoting community extensions to core extensions"),(0,o.kt)("p",null,"Please post on ",(0,o.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@druid.apache.org"},"dev@druid.apache.org")," if you'd like an extension to be promoted to core.\nIf we see a community extension actively supported by the community, we can promote it to core based on community feedback."),(0,o.kt)("p",null,"For information how to create your own extension, please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/development/modules"},"here"),"."),(0,o.kt)("h2",{id:"loading-extensions"},"Loading extensions"),(0,o.kt)("h3",{id:"loading-core-extensions"},"Loading core extensions"),(0,o.kt)("p",null,"Apache Druid bundles all ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/configuration/extensions#core-extensions"},"core extensions")," out of the box.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/configuration/extensions#core-extensions"},"list of extensions")," for your options. You\ncan load bundled extensions by adding their names to your common.runtime.properties\n",(0,o.kt)("inlineCode",{parentName:"p"},"druid.extensions.loadList")," property. For example, to load the postgresql-metadata-storage and\ndruid-hdfs-storage extensions, use the configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},'druid.extensions.loadList=["postgresql-metadata-storage", "druid-hdfs-storage"]\n')),(0,o.kt)("p",null,"These extensions are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"extensions")," directory of the distribution."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"}," Druid bundles two sets of configurations: one for the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/tutorials/"},"quickstart")," and\none for a ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/tutorials/cluster"},"clustered configuration"),". Make sure you are updating the correct\n",(0,o.kt)("inlineCode",{parentName:"p"},"common.runtime.properties")," for your setup.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"}," Because of licensing, the mysql-metadata-storage extension does not include the required MySQL JDBC driver. For instructions\non how to install this library, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-core/mysql"},"MySQL extension page"),".")),(0,o.kt)("h3",{id:"loading-community-extensions"},"Loading community extensions"),(0,o.kt)("p",null,"You can also load community and third-party extensions not already bundled with Druid. To do this, first download the extension and\nthen install it into your ",(0,o.kt)("inlineCode",{parentName:"p"},"extensions")," directory. You can download extensions from their distributors directly, or\nif they are available from Maven, the included ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/operations/pull-deps"},"pull-deps")," can download them for you. To use ",(0,o.kt)("em",{parentName:"p"},"pull-deps"),",\nspecify the full Maven coordinate of the extension in the form ",(0,o.kt)("inlineCode",{parentName:"p"},"groupId:artifactId:version"),". For example,\nfor the (hypothetical) extension ",(0,o.kt)("em",{parentName:"p"},"com.example:druid-example-extension:1.0.0"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'java \\\n  -cp "lib/*" \\\n  -Ddruid.extensions.directory="extensions" \\\n  -Ddruid.extensions.hadoopDependenciesDir="hadoop-dependencies" \\\n  org.apache.druid.cli.Main tools pull-deps \\\n  --no-default-hadoop \\\n  -c "com.example:druid-example-extension:1.0.0"\n')),(0,o.kt)("p",null,"You only have to install the extension once. Then, add ",(0,o.kt)("inlineCode",{parentName:"p"},'"druid-example-extension"')," to\n",(0,o.kt)("inlineCode",{parentName:"p"},"druid.extensions.loadList")," in common.runtime.properties to instruct Druid to load the extension."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"}," Please make sure all the Extensions related configuration properties listed ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#extensions"},"here")," are set correctly.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"}," The Maven ",(0,o.kt)("inlineCode",{parentName:"p"},"groupId")," for almost every ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/configuration/extensions#community-extensions"},"community extension")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.druid.extensions.contrib"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"artifactId")," is the name\nof the extension, and the version is the latest Druid stable version.")),(0,o.kt)("h3",{id:"loading-extensions-from-the-classpath"},"Loading extensions from the classpath"),(0,o.kt)("p",null,"If you add your extension jar to the classpath at runtime, Druid will also load it into the system. This mechanism is relatively easy to reason about,\nbut it also means that you have to ensure that all dependency jars on the classpath are compatible. That is, Druid makes no provisions while using\nthis method to maintain class loader isolation so you must make sure that the jars on your classpath are mutually compatible."))}c.isMDXComponent=!0}}]);