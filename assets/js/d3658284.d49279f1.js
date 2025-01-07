"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3538],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),g=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=g(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=g(t),u=r,f=c["".concat(s,".").concat(u)]||c[u]||p[u]||i;return t?o.createElement(f,a(a({ref:n},d),{},{components:t})):o.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var g=2;g<i;g++)a[g]=t[g];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},46362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>g,toc:()=>c});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],l={id:"logging",title:"Logging"},s=void 0,g={unversionedId:"configuration/logging",id:"configuration/logging",title:"Logging",description:"\x3c!--",source:"@site/docs/31.0.1/configuration/logging.md",sourceDirName:"configuration",slug:"/configuration/logging",permalink:"/docs/31.0.1/configuration/logging",draft:!1,tags:[],version:"current",frontMatter:{id:"logging",title:"Logging"},sidebar:"docs",previous:{title:"Extensions",permalink:"/docs/31.0.1/configuration/extensions"},next:{title:"Automatic compaction",permalink:"/docs/31.0.1/api-reference/automatic-compaction-api"}},d={},c=[{value:"Log directory",id:"log-directory",level:2},{value:"All-in-one start commands",id:"all-in-one-start-commands",level:2},{value:"Set the logs to asynchronously write",id:"set-the-logs-to-asynchronously-write",level:2}],p={toc:c},u="wrapper";function f(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)(u,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Druid services emit logs that to help you debug.\nThe same services also emit periodic ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.1/configuration/#enabling-metrics"},"metrics")," about their state.\nTo disable metric info logs set the following runtime property: ",(0,i.kt)("inlineCode",{parentName:"p"},"-Ddruid.emitter.logging.logLevel=debug"),"."),(0,i.kt)("p",null,"Druid uses ",(0,i.kt)("a",{parentName:"p",href:"http://logging.apache.org/log4j/2.x/"},"log4j2")," for logging.\nThe default configuration file log4j2.xml ships with Druid at the following path: ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/druid/{config}/_common/log4j2.xml"),"."),(0,i.kt)("p",null,"By default, Druid uses ",(0,i.kt)("inlineCode",{parentName:"p"},"RollingRandomAccessFile")," for rollover daily, and keeps log files up to 7 days.\nIf that's not suitable in your case, modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"log4j2.xml")," accordingly."),(0,i.kt)("p",null,"The following example log4j2.xml is based upon the micro quickstart:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8" ?>\n<Configuration status="WARN">\n  <Properties>\n    \x3c!-- to change log directory, set DRUID_LOG_DIR environment variable to your directory before launching Druid --\x3e\n    <Property name="druid.log.path" value="log" />\n  </Properties>\n\n  <Appenders>\n    <Console name="Console" target="SYSTEM_OUT">\n      <PatternLayout pattern="%d{ISO8601} %p [%t] %c -%notEmpty{ [%markerSimpleName]} %m%n"/>\n    </Console>\n\n    \x3c!-- Rolling Files--\x3e\n    <RollingRandomAccessFile name="FileAppender"\n                             fileName="${sys:druid.log.path}/${sys:druid.node.type}.log"\n                             filePattern="${sys:druid.log.path}/${sys:druid.node.type}.%d{yyyyMMdd}.log">\n      <PatternLayout pattern="%d{ISO8601} %p [%t] %c -%notEmpty{ [%markerSimpleName]} %m%n"/>\n      <Policies>\n        <TimeBasedTriggeringPolicy interval="1" modulate="true"/>\n      </Policies>\n      <DefaultRolloverStrategy>\n        <Delete basePath="${sys:druid.log.path}/" maxDepth="1">\n          <IfFileName glob="*.log" />\n          <IfLastModified age="7d" />\n        </Delete>\n      </DefaultRolloverStrategy>\n    </RollingRandomAccessFile>\n\n  </Appenders>\n\n  <Loggers>\n    <Root level="info">\n      <AppenderRef ref="FileAppender"/>\n    </Root>\n\n    \x3c!-- Set level="debug" to see stack traces for query errors --\x3e\n    <Logger name="org.apache.druid.server.QueryResource" level="info" additivity="false">\n      <Appender-ref ref="FileAppender"/>\n    </Logger>\n    <Logger name="org.apache.druid.server.QueryLifecycle" level="info" additivity="false">\n      <Appender-ref ref="FileAppender"/>\n    </Logger>\n\n    \x3c!-- Set level="debug" or "trace" to see more Coordinator details (segment balancing, load/drop rules, etc) --\x3e\n    <Logger name="org.apache.druid.server.coordinator" level="info" additivity="false">\n      <Appender-ref ref="FileAppender"/>\n    </Logger>\n\n    \x3c!-- Set level="debug" to see low-level details about segments and ingestion --\x3e\n    <Logger name="org.apache.druid.segment" level="info" additivity="false">\n      <Appender-ref ref="FileAppender"/>\n    </Logger>\n\n    \x3c!-- Set level="debug" to see more information about extension initialization --\x3e\n    <Logger name="org.apache.druid.initialization" level="info" additivity="false">\n      <Appender-ref ref="FileAppender"/>\n    </Logger>\n\n    \x3c!-- Quieter logging at startup --\x3e\n    <Logger name="org.skife.config" level="warn" additivity="false">\n      <Appender-ref ref="FileAppender"/>\n    </Logger>\n    <Logger name="com.sun.jersey.guice" level="warn" additivity="false">\n      <Appender-ref ref="FileAppender"/>\n    </Logger>\n  </Loggers>\n</Configuration>\n')),(0,i.kt)("p",null,"Peons always output logs to standard output. Middle Managers redirect task logs from standard output to\n",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.1/configuration/#log-long-term-storage"},"long-term storage"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," NOTE:\nDruid shares the log4j configuration file among all services, including task peon processes.\nHowever, you must define a console appender in the logger for your peon processes.\nIf you don't define a console appender, Druid creates and configures a new console appender\nthat retains the log level, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"warn"),", but does not retain any other appender\nconfiguration, including non-console ones.")),(0,i.kt)("h2",{id:"log-directory"},"Log directory"),(0,i.kt)("p",null,"The included log4j2.xml configuration for Druid and ZooKeeper writes logs to the ",(0,i.kt)("inlineCode",{parentName:"p"},"log")," directory at the root of the distribution."),(0,i.kt)("p",null,"If you want to change the log directory, set the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"DRUID_LOG_DIR")," to the right directory before you start Druid."),(0,i.kt)("h2",{id:"all-in-one-start-commands"},"All-in-one start commands"),(0,i.kt)("p",null,"If you use one of the all-in-one start commands, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"bin/start-micro-quickstart"),", the default configuration for each service has two kinds of log files.\nLog4j2 writes the main log file and rotates it periodically.\nFor example, ",(0,i.kt)("inlineCode",{parentName:"p"},"log/historical.log"),"."),(0,i.kt)("p",null,"The secondary log file contains anything that is written by the component\ndirectly to standard output or standard error without going through log4j2.\nFor example, ",(0,i.kt)("inlineCode",{parentName:"p"},"log/historical.stdout.log"),".\nThis consists mainly of messages from the\nJava runtime itself.\nThis file is not rotated, but it is generally small due to the low volume of messages.\nIf necessary, you can truncate it using the Linux command ",(0,i.kt)("inlineCode",{parentName:"p"},"truncate --size 0 log/historical.stdout.log"),"."),(0,i.kt)("h2",{id:"set-the-logs-to-asynchronously-write"},"Set the logs to asynchronously write"),(0,i.kt)("p",null,"If your logs are really chatty, you can set them to write asynchronously.\nThe following example shows a ",(0,i.kt)("inlineCode",{parentName:"p"},"log4j2.xml")," that configures some of the more chatty classes to write asynchronously:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8" ?>\n<Configuration status="WARN">\n  <Appenders>\n    <Console name="Console" target="SYSTEM_OUT">\n      <PatternLayout pattern="%d{ISO8601} %p [%t] %c -%notEmpty{ [%markerSimpleName]} %m%n"/>\n    </Console>\n  </Appenders>\n  \n<Loggers>\n    \x3c!-- AsyncLogger instead of Logger --\x3e\n    <AsyncLogger name="org.apache.druid.curator.inventory.CuratorInventoryManager" level="debug" additivity="false">\n      <AppenderRef ref="Console"/>\n    </AsyncLogger>\n    <AsyncLogger name="org.apache.druid.client.BatchServerInventoryView" level="debug" additivity="false">\n      <AppenderRef ref="Console"/>\n    </AsyncLogger>\n    \x3c!-- Make extra sure nobody adds logs in a bad way that can hurt performance --\x3e\n    <AsyncLogger name="org.apache.druid.client.ServerInventoryView" level="debug" additivity="false">\n      <AppenderRef ref="Console"/>\n    </AsyncLogger>\n    <AsyncLogger name ="org.apache.druid.java.util.http.client.pool.ChannelResourceFactory" level="info" additivity="false">\n      <AppenderRef ref="Console"/>\n    </AsyncLogger>\n    <Root level="info">\n      <AppenderRef ref="Console"/>\n    </Root>\n  </Loggers>\n</Configuration>\n')))}f.isMDXComponent=!0}}]);