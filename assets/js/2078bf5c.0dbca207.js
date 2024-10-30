"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4598],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},h="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),h=m(a),d=n,c=h["".concat(p,".").concat(d)]||h[d]||u[d]||i;return a?r.createElement(c,l(l({ref:e},s),{},{components:a})):r.createElement(c,l({ref:e},s))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[h]="string"==typeof t?t:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11492:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"Apache Druid Community",sectionid:"community",layout:"simple_page",canonical:"https://druid.apache.org/community/"},p=void 0,m={type:"mdx",permalink:"/community/",source:"@site/src/pages/community/index.mdx",title:"Apache Druid Community",description:"Community",frontMatter:{title:"Apache Druid Community",sectionid:"community",layout:"simple_page",canonical:"https://druid.apache.org/community/"}},s=[{value:"Community",id:"community",level:2},{value:"Getting help",id:"getting-help",level:2},{value:"Contributing",id:"contributing",level:2},{value:"What to work on",id:"what-to-work-on",level:3},{value:"Getting your changes accepted",id:"getting-your-changes-accepted",level:3},{value:"Testing",id:"testing",level:3},{value:"Committers",id:"committers",level:3},{value:"Becoming a committer",id:"becoming-a-committer",level:3},{value:"General committer guidelines",id:"general-committer-guidelines",level:3},{value:"Governance",id:"governance",level:2}],h={toc:s},u="wrapper";function d(t){var e=t.components,a=(0,n.Z)(t,l);return(0,i.kt)(u,(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("p",null,"Most discussion about Druid happens over ",(0,i.kt)("a",{parentName:"p",href:"/community/join-slack?v=1"},"Slack"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/druid"},"GitHub"),", and the ",(0,i.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@druid.apache.org"},"Apache Dev list"),", but those aren't the only way to interact with the Druid\ncommunity. We also do chat, meetups, and more."),(0,i.kt)("p",null,"Check out the following resources if you're looking for help, to discuss Druid development, or just stay up to date:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Slack:")," Many users and committers are present on Apache Druid Slack. Use this link to join and invite others: ",(0,i.kt)("a",{parentName:"li",href:"/community/join-slack?v=1"},"https://druid.apache.org/community/join-slack"),". This is the perfect place to ask for help if you need it!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GitHub:")," Star us at ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/druid"},"apache/druid")," and use this to follow Druid development, raise\nissues, or contribute pull requests. If you're interested in development, please see the ",(0,i.kt)("a",{parentName:"li",href:"#contributing"},"Contributing"),"\nsection below for details on our development process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Development mailing list:")," ",(0,i.kt)("a",{parentName:"li",href:"https://lists.apache.org/list.html?dev@druid.apache.org"},"dev@druid.apache.org")," for\ndiscussion about project development. To join, send an email ",(0,i.kt)("inlineCode",{parentName:"li"},"dev-subscribe@druid.apache.org"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Twitter:")," Follow us on Twitter at ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/druidio"},"@druidio"),".")),(0,i.kt)("p",null,"Also check out:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User mailing list:")," ",(0,i.kt)("a",{parentName:"li",href:"https://groups.google.com/forum/#!forum/druid-user"},"druid-user@googlegroups.com")," for general\ndiscussion, questions, and announcements."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LinkedIn")," Connect with other Apache Druid professionals in the ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/groups/8791983/"},"LinkedIn group"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Meetups:")," Check out ",(0,i.kt)("a",{parentName:"li",href:"https://www.meetup.com/topics/apache-druid/"},"Apache Druid on meetup.com")," for links to regular\nmeetups in cities all over the world."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"StackOverflow:")," While the user mailing list is the primary resource for asking questions, if you prefer\nStackOverflow, make sure to tag your question with ",(0,i.kt)("inlineCode",{parentName:"li"},"druid")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"apache-druid"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Linen:")," Check out the ",(0,i.kt)("a",{parentName:"li",href:"https://www.linen.dev/s/apache-druid/c/troubleshooting"},"Apache Druid community on Linen")," for a digital archive of Apache Druid Slack threads.\nWhile Slack limits message history to the last 90 days, you can continue to access older threads on Linen."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Struct:")," Check out ",(0,i.kt)("a",{parentName:"li",href:"https://druid.struct.ai/kb"},"Apache Druid on Struct")," for AI-generated knowledge base from Apache Druid Slack threads.\nSimilar to Linen, Struct archives Slack threads so that you can continue to access messages beyond Slack's 90 day retention period.")),(0,i.kt)("h2",{id:"getting-help"},"Getting help"),(0,i.kt)("p",null,"The best place to get a wide variety of help about Druid is via ",(0,i.kt)("inlineCode",{parentName:"p"},"#druid")," on the Apache Slack team. There is also a druid user\ngoogle group ",(0,i.kt)("a",{parentName:"p",href:"https://groups.google.com/forum/#!forum/druid-user"},"druid-user@googlegroups.com")," however slack is the preferred way to get help. You can also report issues and problems, or suggest\nnew features, on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/druid"},"GitHub"),"."),(0,i.kt)("p",null,"Third party companies also provide commercial support and services for Druid, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.cloudera.com/"},"Cloudera")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://datumo.io/"},"Datumo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.deep.bi/solutions/apache-druid"},"Deep.BI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://imply.io/"},"Imply")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.rilldata.com/"},"Rill Data"))),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"Druid is a community-led project and we are delighted to receive contributions\nof anything from minor fixes to big new features."),(0,i.kt)("h3",{id:"what-to-work-on"},"What to work on"),(0,i.kt)("p",null,"If you have an itch to scratch, then by all means do that! Fixing bugs you run\ninto, or adding features you need, are both immensely helpful."),(0,i.kt)("p",null,"If you're looking for some starter projects, we maintain a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/issues?q=is%3Aopen+is%3Aissue+label%3AStarter"},"list of issues")," suitable\nfor new developers."),(0,i.kt)("p",null,"There are plenty of ways to help outside writing Druid code. ",(0,i.kt)("em",{parentName:"p"},"Code review of pull requests"),"\n(even if you are not a committer), feature suggestions, reporting bugs, ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/design"},"documentation"),"\nand usability feedback all matter immensely. Another big way to help is\nthrough ",(0,i.kt)("a",{parentName:"p",href:"../libraries"},"client libraries"),", which are\navailable in a variety of languages. If you develop a new one, we'll be happy\nto include it in the list."),(0,i.kt)("h3",{id:"getting-your-changes-accepted"},"Getting your changes accepted"),(0,i.kt)("p",null,"Patches to Druid are done through ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/pulls"},"GitHub pull requests"),"."),(0,i.kt)("p",null,"Pull requests require one approval (+1) from an established committer on code and text (for documentation) levels. The\nexception is major architectural changes or API changes, and/or changes to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP requests and responses (e. g. a new HTTP endpoint)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/development/modules"},"Interfaces for extensions")),(0,i.kt)("li",{parentName:"ul"},"Server configuration (e. g. altering the behavior of a config property)"),(0,i.kt)("li",{parentName:"ul"},"Emitted metrics"),(0,i.kt)("li",{parentName:"ul"},"Other major changes, judged by the discretion of Druid committers")),(0,i.kt)("p",null,"warrant additional design and compatibility review. Such pull requests require design approvals from three different\ncommitters (one of them could also be the author of the pull request). For those, it can help to discuss things\non the Druid development list ",(0,i.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@druid.apache.org"},"dev@druid.apache.org")," or a github issue beforehand."),(0,i.kt)("p",null,"In general please follow the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/blob/master/CONTRIBUTING.md"},"contributing guidelines"),"\nwhen sending in pull requests. This will help review proceed as quickly as\npossible."),(0,i.kt)("h3",{id:"testing"},"Testing"),(0,i.kt)("p",null,"All Pull Requests are automatically tested through ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/actions"},"GitHub Actions")," on both AMD64 and ARM64 architectures."),(0,i.kt)("h3",{id:"committers"},"Committers"),(0,i.kt)("p",null,"Committers are collectively responsible for Druid's technical management. This involves\nsetting the direction of the project, contributing code, and reviewing code contributed\nby others."),(0,i.kt)("p",null,"You don't need to be a committer to contribute- pull requests are welcome from anyone."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Organization"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/abhishekagarwal87"},"Abhishek Agarwal")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/AlexanderSaydakov"},"Alexander Saydakov")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.verizonmedia.com/"},"Verizon Media"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/AmatyaAvadhanula"},"Amatya Avadhanula")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/a2l007"},"Atul Mohan")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.apple.com"},"Apple"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/317brian"},"Brian Le")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/asdf2014"},"Benedict Jin")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.alibaba.com/"},"Alibaba"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/drcrallen"},"Charles Allen")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.snap.com/en-US/"},"Snap"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/techdocsmith"},"Charles Smith")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/ccaominh"},"Chi Cao Minh")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/clintropolis"},"Clint Wylie")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/glasser"},"David Glasser")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://apollographql.com/"},"Apollo GraphQL"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/dclim"},"David Lim")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/gaodayue"},"Daoyue Gao")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://www.meituan.com/"},"Meituan"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Dylan1312"},"Dylan Wylie")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.spotx.tv/"},"SpotX"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/egor-ryashin"},"Egor Rashin")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.rilldata.com/"},"Rill Data"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/cheddar"},"Eric Tschetter")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.splunk.com/"},"Splunk"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/fjy"},"Fangjin Yang")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Fokko"},"Fokko Driesprong")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://godatadriven.com/"},"GoDataDriven"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/FrankChen021"},"Frank Chen")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://shopee.sg/"},"Shopee"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/kamaci"},"Furkan Kamaci")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://lagom.ai/"},"Lagom"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/gianm"},"Gian Merlino")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/himanshug"},"Himanshu Gupta")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.splunk.com/"},"Splunk"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jihoonson"},"Jihoon Son")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jon-wei"},"Jonathan Wei")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/julianhyde"},"Julian Hyde")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://looker.com/"},"Looker"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/junrao"},"Jun Rao")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.confluent.io/"},"Confluent"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/kaijianding"},"Kaijian Ding")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.alibaba.com/"},"Alibaba"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/cryptoe"},"Karan Kumar")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/kfaraz"},"Kashif Faraz")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/kurtyoung"},"Kurt Young")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.alibaba.com/"},"Alibaba"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/LakshSingla"},"Laksh Singla")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/binlijin"},"Lijin Bin")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.alibaba.com/"},"Alibaba"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/capistrant"},"Lucas Capistrant")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.target.com/"},"Target"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/mcbrewster"},"Maggie Brewster")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/mistercrunch"},"Maxime Beauchemin")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://preset.io/"},"Preset"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/maytasm"},"Maytas Monsereenusorn")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.netflix.com/"},"Netflix"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/michaelschiff"},"Michael Schiff")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.adobe.com/"},"Adobe"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/QiuMM"},"Mingming Qiu")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://bytedance.com/"},"Bytedance"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/b-slim"},"Mohamed Slim Bouguerra")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.linkedin.com/"},"LinkedIn"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/navis"},"Navis Ryu")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.sktelecom.com/index.html"},"SK Telecom"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/niketh"},"Niketh Sabbineni")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.verizonmedia.com/"},"Verizon Media"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/nishantmonu51"},"Nishant Bangarwa")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.rilldata.com/"},"Rill Data"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/pjain1"},"Parag Jain")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.rilldata.com/"},"Rill Data"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/ptgoetz"},"P. Taylor Goetz")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.epam.com/"},"EPAM"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/paul-rogers"},"Paul Rogers")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rohangarg"},"Rohan Garg")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/leventov"},"Roman Leventov")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.snap.com/en-US/"},"Snap"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/samarthjain"},"Samarth Jain")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.netflix.com/"},"Netflix"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/sthetland"},"Steve Hetland")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/suneet-s"},"Suneet Saldanha")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/surekhasaharan"},"Surekha Saharan")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/tejaswini-imply"},"Tejaswini Bandlamudi")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/vogievetsky"},"Vadim Ogievetsky")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/vtlim"},"Victoria Lim")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/xvrl"},"Xavier L\xe9aut\xe9")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.confluent.io/"},"Confluent"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/zhangxinyu1"},"Xinyu Zhang")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.360.cn/"},"Qihoo 360"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/zhangyue19921010"},"Yue Zhang")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/zachjsh"},"Zach Sherman")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://imply.io/"},"Imply"))))),(0,i.kt)("h3",{id:"becoming-a-committer"},"Becoming a committer"),(0,i.kt)("p",null,"If you'd like to become a committer, that's great! Please contact one of the\nexisting committers for a walk through the process. Basically, what we're\nlooking for is an interest in ongoing contributions to Druid."),(0,i.kt)("h3",{id:"general-committer-guidelines"},"General committer guidelines"),(0,i.kt)("p",null,"If you are an official Druid committer then congratulations! You are part of a fantastic group of people. Here are some guidelines to follow to help ensure the Druid project continues to grow and improve:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'You can merge your own pull request if it fits the rest of the criteria. A common thing to see is "+1 after travis" from other committers.'),(0,i.kt)("li",{parentName:"ol"},'A pull request should have at least one +1 from a committer who is not the author, on the "code/textual" level of review.'),(0,i.kt)("li",{parentName:"ol"},"Pull requests which have just one +1 from a committer couldn't be merged earlier than after 3 working days since PR submission."),(0,i.kt)("li",{parentName:"ol"},"A pull request with just one +1 could be merged only by (or in coordination with) the committer who provided the review. Because the reviewer may think that the PR is complex or risky enough that needs another pair of eyes to look at it. If this is the case, the first reviewer should indicate this in the PR approval message."),(0,i.kt)("li",{parentName:"ol"},"If a pull request has two or more +1's from committers who are not the author, it could be merged immediately and by any committer. But still, enough time since the PR submission should pass to give folks a reasonable chance to indicate a desire to comment on the pull request. AKA: don't merge a pull request that was submitted Friday evening until at least 1~2 regular work days have passed. Use good judgement here."),(0,i.kt)("li",{parentName:"ol"},"Major architectural and backwards incompatible changes, or changes which have long-term maintenance consequences (see examples in ",(0,i.kt)("a",{parentName:"li",href:"#getting-your-changes-accepted"},'the "Getting your changes accepted" section above'),'), should have at least three +1\'s from committers, on the "design" level of review. One approval could be from the author of the PR. The first committer who indicates that a PR needs design review should add the ',(0,i.kt)("inlineCode",{parentName:"li"},"Design Review")," tag to such a pull request."),(0,i.kt)("li",{parentName:"ol"},"Travis-CI should pass or have some ",(0,i.kt)("strong",{parentName:"li"},"very")," good reason why it won't pass for a pull request."),(0,i.kt)("li",{parentName:"ol"},"You reasonably believe that all comments have been addressed."),(0,i.kt)("li",{parentName:"ol"},"You are expected to be the champion for your own pull requests."),(0,i.kt)("li",{parentName:"ol"},"Being a champion on a pull request can be a significant undertaking depending on the size of the code change and what parts of the code it touches. It may require communicating with other developers, reconciling differences, organizing community feedback, and/or following up with people who have commented in a pull request to ensure comments have been addressed."),(0,i.kt)("li",{parentName:"ol"},"Sometimes code is presented as a work-in-progress or as a point of discussion. Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"WIP")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Discuss")," tags on a pull request in such a case."),(0,i.kt)("li",{parentName:"ol"},"If a pull request you are championing is taking longer than expected to merge, be sure to raise the issue in the developer sync."),(0,i.kt)("li",{parentName:"ol"},"Limit the number of pull requests you are championing at the same time."),(0,i.kt)("li",{parentName:"ol"},"Prioritize code reviews to look at pull requests that are blockers for the next release (see the Milestone marker on the pull request)"),(0,i.kt)("li",{parentName:"ol"},"Help serve as champion for pull requests that originate from new committers."),(0,i.kt)("li",{parentName:"ol"},"If you feel a pull request is required for the next release, mark it as such in the Milestone of the pull request."),(0,i.kt)("li",{parentName:"ol"},"Do not comment on a pull request unless you are willing to follow up on the edits."),(0,i.kt)("li",{parentName:"ol"},"Give priority to getting older pull requests merged. (Either as their champion or as an active commenter)"),(0,i.kt)("li",{parentName:"ol"},"And most importantly.. the PMC desires to ensure a positive and effective developer experience! If you find that things are not functioning to your expectations, please raise the issue.")),(0,i.kt)("p",null,"Remember, we all want to see this project thrive!"),(0,i.kt)("h2",{id:"governance"},"Governance"),(0,i.kt)("p",null,"The PMC (Project Management Committee) is responsible for the administrative\naspects of the Druid project. The responsibilities of the PMC include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Approving releases"),(0,i.kt)("li",{parentName:"ul"},"Nominating new committers"),(0,i.kt)("li",{parentName:"ul"},"Maintaining the project's shared resources, including the github account,\nmailing lists, websites, social media channels, etc."),(0,i.kt)("li",{parentName:"ul"},"Maintaining guidelines for the project")))}d.isMDXComponent=!0}}]);