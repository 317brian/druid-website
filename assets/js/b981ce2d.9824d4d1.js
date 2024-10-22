"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8688],{14137:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},h="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),h=s(n),p=r,m=h["".concat(u,".").concat(p)]||h[p]||c[p]||i;return n?a.createElement(m,o(o({ref:e},d),{},{components:n})):a.createElement(m,o({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[h]="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19096:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});var a=n(87462),r=n(63366),i=(n(67294),n(14137)),o=["components"],l={id:"auth",title:"Authentication and Authorization"},u=void 0,s={unversionedId:"operations/auth",id:"operations/auth",title:"Authentication and Authorization",description:"\x3c!--",source:"@site/docs/31.0.0/operations/auth.md",sourceDirName:"operations",slug:"/operations/auth",permalink:"/docs/31.0.0/operations/auth",draft:!1,tags:[],version:"current",frontMatter:{id:"auth",title:"Authentication and Authorization"}},d={},h=[{value:"Enabling Authentication/AuthorizationLoadingLookupTest",id:"enabling-authenticationauthorizationloadinglookuptest",level:2},{value:"Authenticator chain",id:"authenticator-chain",level:2},{value:"AllowAll authenticator",id:"allowall-authenticator",level:3},{value:"Anonymous authenticator",id:"anonymous-authenticator",level:3},{value:"Trusted domain Authenticator",id:"trusted-domain-authenticator",level:3},{value:"Escalator",id:"escalator",level:2},{value:"Noop escalator",id:"noop-escalator",level:3},{value:"Authorizers",id:"authorizers",level:2},{value:"AllowAll authorizer",id:"allowall-authorizer",level:3},{value:"Default Unsecured Configuration",id:"default-unsecured-configuration",level:2},{value:"Authenticator to Authorizer Routing",id:"authenticator-to-authorizer-routing",level:2},{value:"Internal system user",id:"internal-system-user",level:2},{value:"Authorizer Internal System User Handling",id:"authorizer-internal-system-user-handling",level:3},{value:"Authenticator and Escalator Internal System User Handling",id:"authenticator-and-escalator-internal-system-user-handling",level:3},{value:"Reserved Name Configuration Property",id:"reserved-name-configuration-property",level:2}],c={toc:h},p="wrapper";function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)(p,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes non-extension specific Apache Druid authentication and authorization configurations."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.authenticatorChain")),(0,i.kt)("td",{parentName:"tr",align:null},"JSON List of Strings"),(0,i.kt)("td",{parentName:"tr",align:null},"List of Authenticator type names"),(0,i.kt)("td",{parentName:"tr",align:null},'["allowAll"]'),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.escalator.type")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Type of the Escalator that should be used for internal Druid communications. This Escalator must use an authentication scheme that is supported by an Authenticator in ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.authenticatorChain"),"."),(0,i.kt)("td",{parentName:"tr",align:null},'"noop"'),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.authorizers")),(0,i.kt)("td",{parentName:"tr",align:null},"JSON List of Strings"),(0,i.kt)("td",{parentName:"tr",align:null},"List of Authorizer type names"),(0,i.kt)("td",{parentName:"tr",align:null},'["allowAll"]'),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.unsecuredPaths")),(0,i.kt)("td",{parentName:"tr",align:null},"List of Strings"),(0,i.kt)("td",{parentName:"tr",align:null},"List of paths for which security checks will not be performed. All requests to these paths will be allowed."),(0,i.kt)("td",{parentName:"tr",align:null},"[]"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.allowUnauthenticatedHttpOptions")),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"If true, allow HTTP OPTIONS requests by unauthenticated users. This is primarily useful for supporting CORS preflight requests, which Druid does not support directly, but which can be enabled using third-party extensions.",(0,i.kt)("br",null),(0,i.kt)("br",null),'Note that you must add "OPTIONS" to ',(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.http.allowedHttpMethods"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),"Also note that disabling authentication checks for OPTIONS requests will allow unauthenticated users to determine what Druid endpoints are valid (by checking if the OPTIONS request returns a 200 instead of 404). Enabling this option will reveal information about server configuration, including information about what extensions are loaded, to unauthenticated users."),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("h2",{id:"enabling-authenticationauthorizationloadinglookuptest"},"Enabling Authentication/AuthorizationLoadingLookupTest"),(0,i.kt)("h2",{id:"authenticator-chain"},"Authenticator chain"),(0,i.kt)("p",null,"Authentication decisions are handled by a chain of Authenticator instances. A request will be checked by Authenticators in the sequence defined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.auth.authenticatorChain"),"."),(0,i.kt)("p",null,"Authenticator implementations are provided by extensions."),(0,i.kt)("p",null,"For example, the following authenticator chain definition enables the Kerberos and HTTP Basic authenticators, from the ",(0,i.kt)("inlineCode",{parentName:"p"},"druid-kerberos")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"druid-basic-security")," core extensions, respectively:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'druid.auth.authenticatorChain=["kerberos", "basic"]\n')),(0,i.kt)("p",null,"A request will pass through all Authenticators in the chain, until one of the Authenticators successfully authenticates the request or sends an HTTP error response. Authenticators later in the chain will be skipped after the first successful authentication or if the request is terminated with an error response."),(0,i.kt)("p",null,"If no Authenticator in the chain successfully authenticated a request or sent an HTTP error response, an HTTP error response will be sent at the end of the chain."),(0,i.kt)("p",null,"Druid includes two built-in Authenticators, one of which is used for the default unsecured configuration."),(0,i.kt)("h3",{id:"allowall-authenticator"},"AllowAll authenticator"),(0,i.kt)("p",null,"This built-in Authenticator authenticates all requests, and always directs them to an Authorizer named ",(0,i.kt)("inlineCode",{parentName:"p"},"allowAll"),". It's not intended to be used for anything other than the default unsecured configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"druid.auth.authorizer.allowAll.type=allowAll\n")),(0,i.kt)("h3",{id:"anonymous-authenticator"},"Anonymous authenticator"),(0,i.kt)("p",null,"This built-in Authenticator authenticates all requests, and directs them to an Authorizer specified in the configuration by the user. It is intended to be used for adding a default level of access so\nthe Anonymous Authenticator should be added to the end of the authenticator chain. A request that reaches the Anonymous Authenticator at the end of the chain will succeed or fail depending on how the Authorizer linked to the Anonymous Authenticator is configured."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.authenticator.<authenticatorName>.authorizerName")),(0,i.kt)("td",{parentName:"tr",align:null},"Authorizer that requests should be directed to."),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.authenticator.<authenticatorName>.identity")),(0,i.kt)("td",{parentName:"tr",align:null},"The identity of the requester."),(0,i.kt)("td",{parentName:"tr",align:null},"defaultUser"),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("p",null,"To use the Anonymous Authenticator, add an authenticator with type ",(0,i.kt)("inlineCode",{parentName:"p"},"anonymous")," to the authenticatorChain."),(0,i.kt)("p",null,"For example, the following enables the Anonymous Authenticator with the ",(0,i.kt)("inlineCode",{parentName:"p"},"druid-basic-security")," extension:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'druid.auth.authenticatorChain=["basic", "anonymous"]\n\ndruid.auth.authenticator.anonymous.type=anonymous\ndruid.auth.authenticator.anonymous.identity=defaultUser\ndruid.auth.authenticator.anonymous.authorizerName=myBasicAuthorizer\n\n# ... usual configs for basic authentication would go here ...\n')),(0,i.kt)("h3",{id:"trusted-domain-authenticator"},"Trusted domain Authenticator"),(0,i.kt)("p",null,"This built-in Trusted Domain Authenticator authenticates requests originating from the configured trusted domain, and directs them to an Authorizer specified in the configuration by the user. It is intended to be used for adding a default level of trust and allow access for hosts within same domain. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.authenticator.<authenticatorName>.name")),(0,i.kt)("td",{parentName:"tr",align:null},"authenticator name."),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.authenticator.<authenticatorName>.domain")),(0,i.kt)("td",{parentName:"tr",align:null},"Trusted Domain from which requests should be authenticated. If authentication is allowed for connections from only a given host, fully qualified hostname of that host needs to be specified."),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.authenticator.<authenticatorName>.useForwardedHeaders")),(0,i.kt)("td",{parentName:"tr",align:null},"Clients connecting to druid could pass through many layers of proxy. Some proxies also append its own IP address to 'X-Forwarded-For' header before passing on the request to another proxy. Some proxies also connect on behalf of client. If this config is set to true and if 'X-Forwarded-For' is present, trusted domain authenticator will use left most host name from X-Forwarded-For header. Note: It is possible to spoof X-Forwarded-For headers in HTTP requests, enable this with caution."),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.authenticator.<authenticatorName>.authorizerName")),(0,i.kt)("td",{parentName:"tr",align:null},"Authorizer that requests should be directed to."),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.authenticator.<authenticatorName>.identity")),(0,i.kt)("td",{parentName:"tr",align:null},"The identity of the requester."),(0,i.kt)("td",{parentName:"tr",align:null},"defaultUser"),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("p",null,"To use the Trusted Domain Authenticator, add an authenticator with type ",(0,i.kt)("inlineCode",{parentName:"p"},"trustedDomain")," to the authenticatorChain."),(0,i.kt)("p",null,"For example, the following enables the Trusted Domain Authenticator :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'druid.auth.authenticatorChain=["trustedDomain"]\n\ndruid.auth.authenticator.trustedDomain.type=trustedDomain\ndruid.auth.authenticator.trustedDomain.domain=trustedhost.mycompany.com\ndruid.auth.authenticator.trustedDomain.identity=defaultUser\ndruid.auth.authenticator.trustedDomain.authorizerName=myBasicAuthorizer\ndruid.auth.authenticator.trustedDomain.name=myTrustedAutenticator\n# ... usual configs for druid would go here ...\n')),(0,i.kt)("h2",{id:"escalator"},"Escalator"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.escalator.type")," property determines what authentication scheme should be used for internal Druid cluster communications (such as when a Broker process communicates with Historical processes for query processing)."),(0,i.kt)("p",null,"The Escalator chosen for this property must use an authentication scheme that is supported by an Authenticator in ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.auth.authenticatorChain"),". Authenticator extension implementers must also provide a corresponding Escalator implementation if they intend to use a particular authentication scheme for internal Druid communications."),(0,i.kt)("h3",{id:"noop-escalator"},"Noop escalator"),(0,i.kt)("p",null,"This built-in default Escalator is intended for use only with the default AllowAll Authenticator and Authorizer."),(0,i.kt)("h2",{id:"authorizers"},"Authorizers"),(0,i.kt)("p",null,"Authorization decisions are handled by an Authorizer. The ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.auth.authorizers")," property determines what Authorizer implementations will be active."),(0,i.kt)("p",null,'There are two built-in Authorizers, "default" and "noop". Other implementations are provided by extensions.'),(0,i.kt)("p",null,'For example, the following authorizers definition enables the "basic" implementation from ',(0,i.kt)("inlineCode",{parentName:"p"},"druid-basic-security"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'druid.auth.authorizers=["basic"]\n')),(0,i.kt)("p",null,"Only a single Authorizer will authorize any given request."),(0,i.kt)("p",null,"Druid includes one built in authorizer:"),(0,i.kt)("h3",{id:"allowall-authorizer"},"AllowAll authorizer"),(0,i.kt)("p",null,'The Authorizer with type name "allowAll" accepts all requests.'),(0,i.kt)("h2",{id:"default-unsecured-configuration"},"Default Unsecured Configuration"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.auth.authenticatorChain"),' is left empty or unspecified, Druid will create an authenticator chain with a single AllowAll Authenticator named "allowAll".'),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.auth.authorizers"),' is left empty or unspecified, Druid will create a single AllowAll Authorizer named "allowAll".'),(0,i.kt)("p",null,"The default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.escalator.type"),' is "noop" to match the default unsecured Authenticator/Authorizer configurations.'),(0,i.kt)("h2",{id:"authenticator-to-authorizer-routing"},"Authenticator to Authorizer Routing"),(0,i.kt)("p",null,"When an Authenticator successfully authenticates a request, it must attach a AuthenticationResult to the request, containing an information about the identity of the requester, as well as the name of the Authorizer that should authorize the authenticated request."),(0,i.kt)("p",null,"An Authenticator implementation should provide some means through configuration to allow users to select what Authorizer(s) the Authenticator should route requests to."),(0,i.kt)("h2",{id:"internal-system-user"},"Internal system user"),(0,i.kt)("p",null,"Internal requests between Druid processes (non-user initiated communications) need to have authentication credentials attached."),(0,i.kt)("p",null,'These requests should be run as an "internal system user", an identity that represents the Druid cluster itself, with full access permissions.'),(0,i.kt)("p",null,"The details of how the internal system user is defined is left to extension implementations."),(0,i.kt)("h3",{id:"authorizer-internal-system-user-handling"},"Authorizer Internal System User Handling"),(0,i.kt)("p",null,'Authorizers implementations must recognize and authorize an identity for the "internal system user", with full access permissions.'),(0,i.kt)("h3",{id:"authenticator-and-escalator-internal-system-user-handling"},"Authenticator and Escalator Internal System User Handling"),(0,i.kt)("p",null,'An Authenticator implementation that is intended to support internal Druid communications must recognize credentials for the "internal system user", as provided by a corresponding Escalator implementation.'),(0,i.kt)("p",null,"An Escalator must implement three methods related to the internal system user:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"  public HttpClient createEscalatedClient(HttpClient baseClient);\n\n  public org.eclipse.jetty.client.HttpClient createEscalatedJettyClient(org.eclipse.jetty.client.HttpClient baseClient);\n\n  public AuthenticationResult createEscalatedAuthenticationResult();\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createEscalatedClient"),' returns an wrapped HttpClient that attaches the credentials of the "internal system user" to requests.'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createEscalatedJettyClient")," is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"createEscalatedClient"),", except that it operates on a Jetty HttpClient."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createEscalatedAuthenticationResult"),' returns an AuthenticationResult containing the identity of the "internal system user".'),(0,i.kt)("h2",{id:"reserved-name-configuration-property"},"Reserved Name Configuration Property"),(0,i.kt)("p",null,"For extension implementers, please note that the following configuration properties are reserved for the names of Authenticators and Authorizers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"druid.auth.authenticator.<authenticator-name>.name=<authenticator-name>\ndruid.auth.authorizer.<authorizer-name>.name=<authorizer-name>\n\n")),(0,i.kt)("p",null,"These properties provide the authenticator and authorizer names to the implementations as @JsonProperty parameters, potentially useful when multiple authenticators or authorizers of the same type are configured."))}m.isMDXComponent=!0}}]);