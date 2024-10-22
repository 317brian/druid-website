"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9072],{14137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(87462),r=n(63366),i=(n(67294),n(14137)),o=["components"],l={id:"s3",title:"S3-compatible"},s=void 0,d={unversionedId:"development/extensions-core/s3",id:"development/extensions-core/s3",title:"S3-compatible",description:"\x3c!--",source:"@site/docs/31.0.0/development/extensions-core/s3.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/s3",permalink:"/docs/31.0.0/development/extensions-core/s3",draft:!1,tags:[],version:"current",frontMatter:{id:"s3",title:"S3-compatible"}},p={},m=[{value:"S3 extension",id:"s3-extension",level:2},{value:"Reading data from S3",id:"reading-data-from-s3",level:3},{value:"Deep Storage",id:"deep-storage",level:3},{value:"Deep storage specific configuration",id:"deep-storage-specific-configuration",level:4},{value:"Configuration",id:"configuration",level:2},{value:"S3 authentication methods",id:"s3-authentication-methods",level:3},{value:"S3 permissions settings",id:"s3-permissions-settings",level:3},{value:"ACL permissions",id:"acl-permissions",level:4},{value:"Object Ownership permissions",id:"object-ownership-permissions",level:4},{value:"AWS region",id:"aws-region",level:3},{value:"Connecting to S3 configuration",id:"connecting-to-s3-configuration",level:3},{value:"Server-side encryption",id:"server-side-encryption",level:2}],u={toc:m},c="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"s3-extension"},"S3 extension"),(0,i.kt)("p",null,"This extension allows you to do 2 things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reading-data-from-s3"},"Ingest data")," from files stored in S3."),(0,i.kt)("li",{parentName:"ul"},"Write segments to ",(0,i.kt)("a",{parentName:"li",href:"#deep-storage"},"deep storage")," in S3.")),(0,i.kt)("p",null,"To use this Apache Druid extension, ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.0/configuration/extensions#loading-extensions"},"include")," ",(0,i.kt)("inlineCode",{parentName:"p"},"druid-s3-extensions")," in the extensions load list."),(0,i.kt)("h3",{id:"reading-data-from-s3"},"Reading data from S3"),(0,i.kt)("p",null,"Use a native batch ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.0/ingestion/native-batch"},"Parallel task")," with an ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.0/ingestion/input-sources#s3-input-source"},"S3 input source")," to read objects directly from S3."),(0,i.kt)("p",null,"Alternatively, use a ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.0/ingestion/hadoop"},"Hadoop task"),",\nand specify S3 paths in your ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.0/ingestion/hadoop#inputspec"},(0,i.kt)("inlineCode",{parentName:"a"},"inputSpec")),"."),(0,i.kt)("p",null,"To read objects from S3, you must supply ",(0,i.kt)("a",{parentName:"p",href:"#configuration"},"connection information")," in configuration."),(0,i.kt)("h3",{id:"deep-storage"},"Deep Storage"),(0,i.kt)("p",null,"S3-compatible deep storage means either Amazon S3 or a compatible service like Google Storage which exposes the same API as S3."),(0,i.kt)("p",null,"S3 deep storage needs to be explicitly enabled by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.storage.type=s3"),". ",(0,i.kt)("strong",{parentName:"p"},"Only after setting the storage type to S3 will any of the settings below take effect.")),(0,i.kt)("p",null,"To use S3 for Deep Storage, you must supply ",(0,i.kt)("a",{parentName:"p",href:"#configuration"},"connection information")," in configuration ",(0,i.kt)("em",{parentName:"p"},"and")," set additional configuration, specific for ",(0,i.kt)("a",{parentName:"p",href:"#deep-storage-specific-configuration"},"Deep Storage"),"."),(0,i.kt)("h4",{id:"deep-storage-specific-configuration"},"Deep storage specific configuration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.storage.bucket")),(0,i.kt)("td",{parentName:"tr",align:null},"Bucket to store in."),(0,i.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.storage.baseKey")),(0,i.kt)("td",{parentName:"tr",align:null},"A prefix string that will be prepended to the object names for the segments published to S3 deep storage"),(0,i.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.storage.type")),(0,i.kt)("td",{parentName:"tr",align:null},"Global deep storage provider. Must be set to ",(0,i.kt)("inlineCode",{parentName:"td"},"s3")," to make use of this extension."),(0,i.kt)("td",{parentName:"tr",align:null},"Must be set (likely ",(0,i.kt)("inlineCode",{parentName:"td"},"s3"),").")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.storage.disableAcl")),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean flag for how object permissions are handled. To use ACLs, set this property to ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),". To use Object Ownership, set it to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),". The permission requirements for ACLs and Object Ownership are different. For more information, see ",(0,i.kt)("a",{parentName:"td",href:"#s3-permissions-settings"},"S3 permissions settings"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.storage.useS3aSchema")),(0,i.kt)("td",{parentName:"tr",align:null},'If true, use the "s3a" filesystem when using Hadoop-based ingestion. If false, the "s3n" filesystem will be used. Only affects Hadoop-based ingestion.'),(0,i.kt)("td",{parentName:"tr",align:null},"false")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"s3-authentication-methods"},"S3 authentication methods"),(0,i.kt)("p",null,"You can provide credentials to connect to S3 in a number of ways, whether for ",(0,i.kt)("a",{parentName:"p",href:"#deep-storage"},"deep storage")," or as an ",(0,i.kt)("a",{parentName:"p",href:"#reading-data-from-s3"},"ingestion source"),"."),(0,i.kt)("p",null,"The configuration options are listed in order of precedence.  For example, if you would like to use profile information given in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.aws/credentials"),", do not set ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.s3.accessKey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.s3.secretKey")," in your Druid config file because they would take precedence."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"order"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"details"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Druid config file"),(0,i.kt)("td",{parentName:"tr",align:null},"Based on your runtime.properties if it contains values ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.accessKey")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.secretKey"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom properties file"),(0,i.kt)("td",{parentName:"tr",align:null},"Based on custom properties file where you can supply ",(0,i.kt)("inlineCode",{parentName:"td"},"sessionToken"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"accessKey")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"secretKey")," values. This file is provided to Druid through ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.fileSessionCredentials")," properties")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"Environment variables"),(0,i.kt)("td",{parentName:"tr",align:null},"Based on environment variables ",(0,i.kt)("inlineCode",{parentName:"td"},"AWS_ACCESS_KEY_ID")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"AWS_SECRET_ACCESS_KEY"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"Java system properties"),(0,i.kt)("td",{parentName:"tr",align:null},"Based on JVM properties ",(0,i.kt)("inlineCode",{parentName:"td"},"aws.accessKeyId")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"aws.secretKey"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"Profile information"),(0,i.kt)("td",{parentName:"tr",align:null},"Based on credentials you may have on your druid instance (generally in ",(0,i.kt)("inlineCode",{parentName:"td"},"~/.aws/credentials"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},"ECS container credentials"),(0,i.kt)("td",{parentName:"tr",align:null},"Based on environment variables available on AWS ECS (AWS_CONTAINER_CREDENTIALS_RELATIVE_URI or AWS_CONTAINER_CREDENTIALS_FULL_URI) as described in the ",(0,i.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/EC2ContainerCredentialsProviderWrapper.html"},"EC2ContainerCredentialsProviderWrapper documentation"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7"),(0,i.kt)("td",{parentName:"tr",align:null},"Instance profile information"),(0,i.kt)("td",{parentName:"tr",align:null},"Based on the instance profile you may have attached to your druid instance")))),(0,i.kt)("p",null,"For more information, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/fr_fr/sdk-for-java/v1/developer-guide/credentials"},"Amazon Developer Guide"),"."),(0,i.kt)("p",null,"Alternatively, you can bypass this chain by specifying an access key and secret key using a ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.0/ingestion/input-sources#s3-input-source"},"Properties Object")," inside your ingestion specification."),(0,i.kt)("p",null,"Use the property ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.0/configuration/#startup-logging"},(0,i.kt)("inlineCode",{parentName:"a"},"druid.startup.logging.maskProperties"))," to mask credentials information in Druid logs. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},'["password", "secretKey", "awsSecretAccessKey"]'),"."),(0,i.kt)("h3",{id:"s3-permissions-settings"},"S3 permissions settings"),(0,i.kt)("p",null,"To manage the permissions for objects in an S3 bucket, you can use either ACLs or Object Ownership. The permissions required for each method are different."),(0,i.kt)("p",null,"By default, Druid uses ACLs. With ACLs, any object that Druid puts into the bucket inherits the ACL settings from the bucket."),(0,i.kt)("p",null,"You can switch from using ACLs to Object Ownership by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.storage.disableAcl")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". The bucket owner owns any object that gets created, so you need to use S3's bucket policies to manage permissions."),(0,i.kt)("p",null,"Note that this setting only affects Druid's behavior. Changing S3 to use Object Ownership requires additional configuration. For more information, see the AWS documentation on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html"},"Controlling ownership of objects and disabling ACLs for your bucket"),"."),(0,i.kt)("h4",{id:"acl-permissions"},"ACL permissions"),(0,i.kt)("p",null,"If you're using ACLs, Druid needs the following permissions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3:GetObject")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3:PutObject")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3:DeleteObject")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3:GetBucketAcl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3:PutObjectAcl"))),(0,i.kt)("h4",{id:"object-ownership-permissions"},"Object Ownership permissions"),(0,i.kt)("p",null,"If you're using Object Ownership, Druid needs the following permissions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3:GetObject")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3:PutObject")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3:DeleteObject"))),(0,i.kt)("h3",{id:"aws-region"},"AWS region"),(0,i.kt)("p",null,"The AWS SDK requires that a target region be specified.  You can set these by using the JVM system property ",(0,i.kt)("inlineCode",{parentName:"p"},"aws.region")," or by setting an environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_REGION"),"."),(0,i.kt)("p",null,"For example, to set the region to 'us-east-1' through system properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"-Daws.region=us-east-1")," to the ",(0,i.kt)("inlineCode",{parentName:"li"},"jvm.config")," file for all Druid services."),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"-Daws.region=us-east-1")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"druid.indexer.runner.javaOpts")," in ",(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.0/configuration/#middle-manager-configuration"},"Middle Manager configuration")," so that the property will be passed to Peon (worker) processes.")),(0,i.kt)("h3",{id:"connecting-to-s3-configuration"},"Connecting to S3 configuration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.accessKey")),(0,i.kt)("td",{parentName:"tr",align:null},"S3 access key. See ",(0,i.kt)("a",{parentName:"td",href:"#s3-authentication-methods"},"S3 authentication methods")," for more details"),(0,i.kt)("td",{parentName:"tr",align:null},"Can be omitted according to authentication methods chosen.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.secretKey")),(0,i.kt)("td",{parentName:"tr",align:null},"S3 secret key. See ",(0,i.kt)("a",{parentName:"td",href:"#s3-authentication-methods"},"S3 authentication methods")," for more details"),(0,i.kt)("td",{parentName:"tr",align:null},"Can be omitted according to authentication methods chosen.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.fileSessionCredentials")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to properties file containing ",(0,i.kt)("inlineCode",{parentName:"td"},"sessionToken"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"accessKey")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"secretKey")," value. One key/value pair per line (format ",(0,i.kt)("inlineCode",{parentName:"td"},"key=value"),"). See ",(0,i.kt)("a",{parentName:"td",href:"#s3-authentication-methods"},"S3 authentication methods")," for more details"),(0,i.kt)("td",{parentName:"tr",align:null},"Can be omitted according to authentication methods chosen.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.protocol")),(0,i.kt)("td",{parentName:"tr",align:null},"Communication protocol type to use when sending requests to AWS. ",(0,i.kt)("inlineCode",{parentName:"td"},"http")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"https")," can be used. This configuration would be ignored if ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.endpoint.url")," is filled with a URL with a different protocol."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.disableChunkedEncoding")),(0,i.kt)("td",{parentName:"tr",align:null},"Disables chunked encoding. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/AmazonS3Builder.html#disableChunkedEncoding--"},"AWS document")," for details."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.enablePathStyleAccess")),(0,i.kt)("td",{parentName:"tr",align:null},"Enables path style access. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/AmazonS3Builder.html#enablePathStyleAccess--"},"AWS document")," for details."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.forceGlobalBucketAccessEnabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Enables global bucket access. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/AmazonS3Builder.html#setForceGlobalBucketAccessEnabled-java.lang.Boolean-"},"AWS document")," for details."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.endpoint.url")),(0,i.kt)("td",{parentName:"tr",align:null},"Service endpoint either with or without the protocol."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.endpoint.signingRegion")),(0,i.kt)("td",{parentName:"tr",align:null},"Region to use for SigV4 signing of requests (e.g. us-west-1)."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.proxy.host")),(0,i.kt)("td",{parentName:"tr",align:null},"Proxy host to connect through."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.proxy.port")),(0,i.kt)("td",{parentName:"tr",align:null},"Port on the proxy host to connect through."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.proxy.username")),(0,i.kt)("td",{parentName:"tr",align:null},"User name to use when connecting through a proxy."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.s3.proxy.password")),(0,i.kt)("td",{parentName:"tr",align:null},"Password to use when connecting through a proxy."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.storage.sse.type")),(0,i.kt)("td",{parentName:"tr",align:null},"Server-side encryption type. Should be one of ",(0,i.kt)("inlineCode",{parentName:"td"},"s3"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"kms"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"custom"),". See the below ",(0,i.kt)("a",{parentName:"td",href:"#server-side-encryption"},"Server-side encryption section")," for more details."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.storage.sse.kms.keyId")),(0,i.kt)("td",{parentName:"tr",align:null},"AWS KMS key ID. This is used only when ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.storage.sse.type")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"kms")," and can be empty to use the default key ID."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.storage.sse.custom.base64EncodedKey")),(0,i.kt)("td",{parentName:"tr",align:null},"Base64-encoded key. Should be specified if ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.storage.sse.type")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"custom"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("h2",{id:"server-side-encryption"},"Server-side encryption"),(0,i.kt)("p",null,"You can enable ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption"},"server-side encryption")," by setting\n",(0,i.kt)("inlineCode",{parentName:"p"},"druid.storage.sse.type")," to a supported type of server-side encryption. The current supported types are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"s3: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption"},"Server-side encryption with S3-managed encryption keys")),(0,i.kt)("li",{parentName:"ul"},"kms: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption"},"Server-side encryption with AWS KMS\u2013Managed Keys")),(0,i.kt)("li",{parentName:"ul"},"custom: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys"},"Server-side encryption with Customer-Provided Encryption Keys"))))}k.isMDXComponent=!0}}]);