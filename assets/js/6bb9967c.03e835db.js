"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7971],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=i,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||n;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},86083:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),o=["components"],s={id:"security-overview",title:"Security overview",description:"Overiew of Apache Druid security. Includes best practices, configuration instructions, a description of the security model and documentation on how to report security issues."},u=void 0,l={unversionedId:"operations/security-overview",id:"operations/security-overview",title:"Security overview",description:"Overiew of Apache Druid security. Includes best practices, configuration instructions, a description of the security model and documentation on how to report security issues.",source:"@site/docs/latest/operations/security-overview.md",sourceDirName:"operations",slug:"/operations/security-overview",permalink:"/docs/latest/operations/security-overview",draft:!1,tags:[],version:"current",frontMatter:{id:"security-overview",title:"Security overview",description:"Overiew of Apache Druid security. Includes best practices, configuration instructions, a description of the security model and documentation on how to report security issues."},sidebar:"docs",previous:{title:"Durable storage",permalink:"/docs/latest/operations/durable-storage"},next:{title:"User authentication and authorization",permalink:"/docs/latest/operations/security-user-auth"}},c={},d=[{value:"Best practices",id:"best-practices",level:2},{value:"Enable TLS",id:"enable-tls",level:2},{value:"Generating keys",id:"generating-keys",level:3},{value:"Update Druid TLS configurations",id:"update-druid-tls-configurations",level:3},{value:"Authentication and authorization",id:"authentication-and-authorization",level:2},{value:"Enable an authenticator",id:"enable-an-authenticator",level:2},{value:"Enable authorizers",id:"enable-authorizers",level:2},{value:"Configuring an LDAP authenticator",id:"configuring-an-ldap-authenticator",level:2},{value:"Druid security trust model",id:"druid-security-trust-model",level:2},{value:"Reporting security issues",id:"reporting-security-issues",level:2},{value:"Vulnerability handling",id:"vulnerability-handling",level:3}],p={toc:d},h="wrapper";function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,n.kt)(h,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This document provides an overview of Apache Druid security features, configuration instructions, and some best practices to secure Druid."),(0,n.kt)("p",null,"By default, security features in Druid are disabled, which simplifies the initial deployment experience. However, security features must be configured in a production deployment. These features include TLS, authentication, and authorization."),(0,n.kt)("h2",{id:"best-practices"},"Best practices"),(0,n.kt)("p",null,"The following recommendations apply to the Druid cluster setup:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Run Druid as an unprivileged Unix user. Do not run Druid as the root user.",(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Druid administrators have the same OS permissions as the Unix user account running Druid. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/operations/security-user-auth#authentication-and-authorization-model"},"Authentication and authorization model"),". If the Druid process is running under the OS root user account, then Druid administrators can read or write all files that the root account has access to, including sensitive files such as ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/passwd"),"."))),(0,n.kt)("li",{parentName:"ul"},"Enable authentication to the Druid cluster for production environments and other environments that can be accessed by untrusted networks."),(0,n.kt)("li",{parentName:"ul"},"Enable authorization and do not expose the web console without authorization enabled. If authorization is not enabled, any user that has access to the web console has the same privileges as the operating system user that runs the web console process."),(0,n.kt)("li",{parentName:"ul"},"Grant users the minimum permissions necessary to perform their functions. For instance, do not allow users who only need to query data to write to data sources or view state."),(0,n.kt)("li",{parentName:"ul"},"Do not provide plain-text passwords for production systems in configuration specs. For example, sensitive properties should not be in the ",(0,n.kt)("inlineCode",{parentName:"li"},"consumerProperties")," field of ",(0,n.kt)("inlineCode",{parentName:"li"},"KafkaSupervisorIngestionSpec"),". See ",(0,n.kt)("a",{parentName:"li",href:"/docs/latest/operations/dynamic-config-provider#environment-variable-dynamic-config-provider"},"Environment variable dynamic config provider")," for more information."),(0,n.kt)("li",{parentName:"ul"},"Disable JavaScript, as noted in the ",(0,n.kt)("a",{parentName:"li",href:"https://druid.apache.org/docs/latest/development/javascript.html#security"},"Security section")," of the JavaScript guide.")),(0,n.kt)("p",null,"The following recommendations apply to the network where Druid runs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enable TLS to encrypt communication within the cluster."),(0,n.kt)("li",{parentName:"ul"},"Use an API gateway to:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Restrict access from untrusted networks"),(0,n.kt)("li",{parentName:"ul"},"Create an allow list of specific APIs that your users need to access"),(0,n.kt)("li",{parentName:"ul"},"Implement account lockout and throttling features."))),(0,n.kt)("li",{parentName:"ul"},"When possible, use firewall and other network layer filtering to only expose Druid services and ports specifically required for your use case. For example, only expose Broker ports to downstream applications that execute queries. You can limit access to a specific IP address or IP range to further tighten and enhance security.")),(0,n.kt)("p",null,"The following recommendation applies to Druid's authorization and authentication model:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Only grant ",(0,n.kt)("inlineCode",{parentName:"li"},"WRITE")," permissions to any ",(0,n.kt)("inlineCode",{parentName:"li"},"DATASOURCE")," to trusted users. Druid's trust model assumes those users have the same privileges as the operating system user that runs the web console process. Additionally, users with ",(0,n.kt)("inlineCode",{parentName:"li"},"WRITE")," permissions can make changes to datasources and they have access to both task and supervisor update (POST) APIs which may affect ingestion."),(0,n.kt)("li",{parentName:"ul"},"Only grant ",(0,n.kt)("inlineCode",{parentName:"li"},"STATE READ"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"STATE WRITE"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"CONFIG WRITE"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"DATASOURCE WRITE")," permissions to highly-trusted users. These permissions allow users to access resources on behalf of the Druid server process regardless of the datasource."),(0,n.kt)("li",{parentName:"ul"},"If your Druid client application allows less-trusted users to control the input source or firehose of an ingestion task, validate the URLs from the users. It is possible to point unchecked URLs to other locations and resources within your network or local file system.")),(0,n.kt)("h2",{id:"enable-tls"},"Enable TLS"),(0,n.kt)("p",null,"Enabling TLS encrypts the traffic between external clients and the Druid cluster and traffic between services within the cluster."),(0,n.kt)("h3",{id:"generating-keys"},"Generating keys"),(0,n.kt)("p",null,"Before you enable TLS in Druid, generate the KeyStore and truststore. When one Druid process, e.g. Broker, contacts another Druid process , e.g. Historical, the first service is a client for the second service, considered the server."),(0,n.kt)("p",null,"The client uses a trustStore that contains certificates trusted by the client. For example, the Broker."),(0,n.kt)("p",null,"The server uses a KeyStore that contains private keys and certificate chain used to securely identify itself."),(0,n.kt)("p",null,"The following example demonstrates how to use Java keytool to generate the KeyStore for the server and then create a trustStore to trust the key for the client:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Generate the KeyStore with the Java ",(0,n.kt)("inlineCode",{parentName:"li"},"keytool")," command:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"keytool -keystore keystore.jks -alias druid -genkey -keyalg RSA\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Export a public certificate:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"keytool -export -alias druid -keystore keystore.jks -rfc -file public.cert\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Create the trustStore:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"keytool -import -file public.cert -alias druid -keystore truststore.jks\n")),(0,n.kt)("p",null,"Druid uses Jetty as its embedded web server. See ",(0,n.kt)("a",{parentName:"p",href:"https://www.eclipse.org/jetty/documentation/jetty-11/operations-guide/index.html#og-keystore"},"Configuring SSL/TLS KeyStores\n")," from the Jetty documentation."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Do not use self-signed certificates for production environments. Instead, rely on your current public key infrastructure to generate and distribute trusted keys.")),(0,n.kt)("h3",{id:"update-druid-tls-configurations"},"Update Druid TLS configurations"),(0,n.kt)("p",null,"Edit ",(0,n.kt)("inlineCode",{parentName:"p"},"common.runtime.properties")," for all Druid services on all nodes. Add or update the following TLS options. Restart the cluster when you are finished."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},'# Turn on TLS globally\ndruid.enableTlsPort=true\n\n# Disable non-TLS communicatoins\ndruid.enablePlaintextPort=false\n\n# For Druid processes acting as a client\n# Load simple-client-sslcontext to enable client side TLS\n# Add the following to extension load list\ndruid.extensions.loadList=[......., "simple-client-sslcontext"]\n\n# Setup client side TLS\ndruid.client.https.protocol=TLSv1.2\ndruid.client.https.trustStoreType=jks\ndruid.client.https.trustStorePath=truststore.jks # replace with correct trustStore file\ndruid.client.https.trustStorePassword=secret123  # replace with your own password\n\n# Setup server side TLS\ndruid.server.https.keyStoreType=jks\ndruid.server.https.keyStorePath=my-keystore.jks # replace with correct keyStore file\ndruid.server.https.keyStorePassword=secret123 # replace with your own password\ndruid.server.https.certAlias=druid\n')),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/operations/tls-support"},"TLS support")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-core/simple-client-sslcontext"},"Simple SSLContext Provider Module"),"."),(0,n.kt)("h2",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,n.kt)("p",null,"You can configure authentication and authorization to control access to the Druid APIs. Then configure users, roles, and permissions, as described in the following sections. Make the configuration changes in the ",(0,n.kt)("inlineCode",{parentName:"p"},"common.runtime.properties")," file on all Druid servers in the cluster."),(0,n.kt)("p",null,"Within Druid's operating context, authenticators control the way user identities are verified. Authorizers employ user roles to relate authenticated users to the datasources they are permitted to access. You can set the finest-grained permissions on a per-datasource basis."),(0,n.kt)("p",null,"The following graphic depicts the course of request through the authentication process:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Druid security check flow",src:a(2106).Z,title:"Druid security check flow",width:"889",height:"638"})),(0,n.kt)("h2",{id:"enable-an-authenticator"},"Enable an authenticator"),(0,n.kt)("p",null,"To authenticate requests in Druid, you configure an Authenticator. Authenticator extensions exist for HTTP basic authentication, LDAP, and Kerberos."),(0,n.kt)("p",null,"The following takes you through sample configuration steps for enabling basic auth:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the ",(0,n.kt)("inlineCode",{parentName:"p"},"druid-basic-security")," extension to ",(0,n.kt)("inlineCode",{parentName:"p"},"druid.extensions.loadList")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"common.runtime.properties"),". For the quickstart installation, for example, the properties file is at ",(0,n.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster/_common"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-properties"},'druid.extensions.loadList=["druid-basic-security", "druid-histogram", "druid-datasketches", "druid-kafka-indexing-service"]\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the basic Authenticator, Authorizer, and Escalator settings in the same common.runtime.properties file. The Escalator defines how Druid processes authenticate with one another."),(0,n.kt)("p",{parentName:"li"},"An example configuration:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"# Druid basic security\ndruid.auth.authenticatorChain=[\"MyBasicMetadataAuthenticator\"]\ndruid.auth.authenticator.MyBasicMetadataAuthenticator.type=basic\n\n# Default password for 'admin' user, should be changed for production.\ndruid.auth.authenticator.MyBasicMetadataAuthenticator.initialAdminPassword=password1\n\n# Default password for internal 'druid_system' user, should be changed for production.\ndruid.auth.authenticator.MyBasicMetadataAuthenticator.initialInternalClientPassword=password2\n\n# Uses the metadata store for storing users.\n# You can use the authentication API to create new users and grant permissions\ndruid.auth.authenticator.MyBasicMetadataAuthenticator.credentialsValidator.type=metadata\n\n# If true and if the request credential doesn't exist in this credentials store,\n# the request will proceed to next Authenticator in the chain.\ndruid.auth.authenticator.MyBasicMetadataAuthenticator.skipOnFailure=false\n\ndruid.auth.authenticator.MyBasicMetadataAuthenticator.authorizerName=MyBasicMetadataAuthorizer\n\n# Escalator\ndruid.escalator.type=basic\ndruid.escalator.internalClientUsername=druid_system\ndruid.escalator.internalClientPassword=password2\ndruid.escalator.authorizerName=MyBasicMetadataAuthorizer\n\ndruid.auth.authorizers=[\"MyBasicMetadataAuthorizer\"]\n\ndruid.auth.authorizer.MyBasicMetadataAuthorizer.type=basic\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Restart the cluster."))),(0,n.kt)("p",null,"See the following topics for more information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/operations/auth"},"Authentication and Authorization")," for more information about the Authenticator,\nEscalator, and Authorizer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/development/extensions-core/druid-basic-security"},"Basic Security")," for more information about\nthe extension used in the examples above."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/development/extensions-core/druid-kerberos"},"Kerberos")," for Kerberos authentication."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/operations/security-user-auth"},"User authentication and authorization")," for details about permissions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/operations/security-user-auth#sql-permissions"},"SQL permissions")," for permissions on SQL system tables."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/tutorials/tutorial-jupyter-index"},"The ",(0,n.kt)("inlineCode",{parentName:"a"},"druidapi")," Python library"),",\nprovided as part of the Druid tutorials, to set up users and roles for learning how security works.")),(0,n.kt)("h2",{id:"enable-authorizers"},"Enable authorizers"),(0,n.kt)("p",null,"After enabling the basic auth extension, you can add users, roles, and permissions via the Druid Coordinator ",(0,n.kt)("inlineCode",{parentName:"p"},"user")," endpoint. Note that you cannot assign permissions directly to individual users. They must be assigned through roles."),(0,n.kt)("p",null,"The following diagram depicts the authorization model, and the relationship between users, roles, permissions, and resources."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Druid Security model",src:a(63218).Z,title:"Druid security model",width:"845",height:"406"})),(0,n.kt)("p",null,"The following steps walk through a sample setup procedure:"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"}," The default Coordinator API port is 8081 for non-TLS connections and 8281 for secured connections.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a user by issuing a POST request to ",(0,n.kt)("inlineCode",{parentName:"p"},"druid-ext/basic-security/authentication/db/MyBasicMetadataAuthenticator/users/<USERNAME>"),".\nReplace ",(0,n.kt)("inlineCode",{parentName:"p"},"<USERNAME>")," with the ",(0,n.kt)("em",{parentName:"p"},"new")," username you are trying to create. For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -u admin:password1 -XPOST https://my-coordinator-ip:8281/druid-ext/basic-security/authentication/db/MyBasicMetadataAuthenticator/users/myname\n")),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"}," If you have TLS enabled, be sure to adjust the curl command accordingly. For example, if your Druid servers use self-signed certificates,\nyou may choose to include the ",(0,n.kt)("inlineCode",{parentName:"p"},"insecure")," curl option to forgo certificate checking for the curl command."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add a credential for the user by issuing a POST request to ",(0,n.kt)("inlineCode",{parentName:"p"},"druid-ext/basic-security/authentication/db/MyBasicMetadataAuthenticator/users/<USERNAME>/credentials"),". For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -u admin:password1 -H'Content-Type: application/json' -XPOST https://my-coordinator-ip:8281/druid-ext/basic-security/authentication/db/MyBasicMetadataAuthenticator/users/myname/credentials --data-raw '{\"password\": \"my_password\"}'\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For each authenticator user you create, create a corresponding authorizer user by issuing a POST request to ",(0,n.kt)("inlineCode",{parentName:"p"},"druid-ext/basic-security/authorization/db/MyBasicMetadataAuthorizer/users/<USERNAME>"),". For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -u admin:password1 -XPOST https://my-coordinator-ip:8281/druid-ext/basic-security/authorization/db/MyBasicMetadataAuthorizer/users/myname\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create authorizer roles to control permissions by issuing a POST request to ",(0,n.kt)("inlineCode",{parentName:"p"},"druid-ext/basic-security/authorization/db/MyBasicMetadataAuthorizer/roles/<ROLENAME>"),". For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -u admin:password1 -XPOST https://my-coordinator-ip:8281/druid-ext/basic-security/authorization/db/MyBasicMetadataAuthorizer/roles/myrole\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Assign roles to users by issuing a POST request to ",(0,n.kt)("inlineCode",{parentName:"p"},"druid-ext/basic-security/authorization/db/MyBasicMetadataAuthorizer/users/<USERNAME>/roles/<ROLENAME>"),". For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -u admin:password1 -XPOST https://my-coordinator-ip:8281/druid-ext/basic-security/authorization/db/MyBasicMetadataAuthorizer/users/myname/roles/myrole | jq\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Finally, attach permissions to the roles to control how they can interact with Druid at ",(0,n.kt)("inlineCode",{parentName:"p"},"druid-ext/basic-security/authorization/db/MyBasicMetadataAuthorizer/roles/<ROLENAME>/permissions"),". For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -u admin:password1 -H'Content-Type: application/json' -XPOST --data-binary @perms.json https://my-coordinator-ip:8281/druid-ext/basic-security/authorization/db/MyBasicMetadataAuthorizer/roles/myrole/permissions\n")),(0,n.kt)("p",{parentName:"li"},"   The payload of ",(0,n.kt)("inlineCode",{parentName:"p"},"perms.json")," should be in the following form:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {\n     "resource": {\n       "type": "DATASOURCE",\n       "name": "<PATTERN>"\n     },\n     "action": "READ"\n   },\n   {\n     "resource": {\n       "type": "STATE",\n       "name": "STATE"\n     },\n     "action": "READ"\n   }\n]\n')),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"}," Note: Druid treats the resource name as a regular expression (regex). You can use a specific datasource name or regex to grant permissions for multiple datasources at a time.")))),(0,n.kt)("h2",{id:"configuring-an-ldap-authenticator"},"Configuring an LDAP authenticator"),(0,n.kt)("p",null,"As an alternative to using the basic metadata authenticator, you can use LDAP to authenticate users. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/operations/auth-ldap"},"Configure LDAP authentication")," for information on configuring Druid for LDAP and LDAPS."),(0,n.kt)("h2",{id:"druid-security-trust-model"},"Druid security trust model"),(0,n.kt)("p",null,"Within Druid's trust model there users can have different authorization levels:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Users with resource write permissions are allowed to do anything that the druid process can do."),(0,n.kt)("li",{parentName:"ul"},"Authenticated read only users can execute queries against resources to which they have permissions."),(0,n.kt)("li",{parentName:"ul"},"An authenticated user without any permissions is allowed to execute queries that don't require access to a resource.")),(0,n.kt)("p",null,"Additionally, Druid operates according to the following principles:"),(0,n.kt)("p",null,"From the innermost layer:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Druid processes have the same access to the local files granted to the specified system user running the process."),(0,n.kt)("li",{parentName:"ol"},"The Druid ingestion system can create new processes to execute tasks. Those tasks inherit the user of their parent process. This means that any user authorized to submit an ingestion task can use the ingestion task permissions to read or write any local files or external resources that the Druid process has access to.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"}," Note: Only grant the ",(0,n.kt)("inlineCode",{parentName:"p"},"DATASOURCE WRITE")," to trusted users because they can act as the Druid process.")),(0,n.kt)("p",null,"Within the cluster:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Druid assumes it operates on an isolated, protected network where no reachable IP within the network is under adversary control. When you implement Druid, take care to setup firewalls and other security measures to secure both inbound and outbound connections.\nDruid assumes network traffic within the cluster is encrypted, including API calls and data transfers. The default encryption implementation uses TLS."),(0,n.kt)("li",{parentName:"ol"},"Druid assumes auxiliary services such as the metadata store and ZooKeeper nodes are not under adversary control.")),(0,n.kt)("p",null,"Cluster to deep storage:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Druid does not make assumptions about the security for deep storage. It follows the system's native security policies to authenticate and authorize with deep storage."),(0,n.kt)("li",{parentName:"ol"},"Druid does not encrypt files for deep storage. Instead, it relies on the storage system's native encryption capabilities to ensure compatibility with encryption schemes across all storage types.")),(0,n.kt)("p",null,"Cluster to client:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Druid authenticates with the client based on the configured authenticator."),(0,n.kt)("li",{parentName:"ol"},"Druid only performs actions when an authorizer grants permission. The default configuration is ",(0,n.kt)("inlineCode",{parentName:"li"},"allowAll authorizer"),".")),(0,n.kt)("h2",{id:"reporting-security-issues"},"Reporting security issues"),(0,n.kt)("p",null,"The Apache Druid team takes security very seriously. If you find a potential security issue in Druid, such as a way to bypass the security mechanisms described earlier, please report this problem to ",(0,n.kt)("a",{parentName:"p",href:"mailto:security@apache.org"},"security@apache.org"),". This is a private mailing list. Please send one plain text email for each vulnerability you are reporting."),(0,n.kt)("h3",{id:"vulnerability-handling"},"Vulnerability handling"),(0,n.kt)("p",null,"The following list summarizes the vulnerability handling process:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The reporter reports the vulnerability privately to ",(0,n.kt)("a",{parentName:"li",href:"mailto:security@apache.org"},"security@apache.org")),(0,n.kt)("li",{parentName:"ul"},"The reporter receives a response that the Druid team has received the report and will investigate the issue."),(0,n.kt)("li",{parentName:"ul"},"The Druid project security team works privately with the reporter to resolve the vulnerability."),(0,n.kt)("li",{parentName:"ul"},"The Druid team delivers the fix by creating a new release of the package that the vulnerability affects."),(0,n.kt)("li",{parentName:"ul"},"The Druid team publicly announces the vulnerability and describes how to apply the fix.")),(0,n.kt)("p",null,"Committers should read a ",(0,n.kt)("a",{parentName:"p",href:"https://www.apache.org/security/committers.html"},"more detailed description of the process"),". Reporters of security vulnerabilities may also find it useful."))}m.isMDXComponent=!0},2106:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/security-model-1-52af921005928cc8df8fa854071ac883.png"},63218:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/security-model-2-983fc88399981fc0d7e5119e928b45e3.png"}}]);