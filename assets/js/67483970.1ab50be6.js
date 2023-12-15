"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2647],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),o=["components"],l={id:"dimensionspecs",title:"Query dimensions",sidebar_label:"Dimensions"},s=void 0,p={unversionedId:"querying/dimensionspecs",id:"querying/dimensionspecs",title:"Query dimensions",description:"\x3c!--",source:"@site/docs/28.0.1/querying/dimensionspecs.md",sourceDirName:"querying",slug:"/querying/dimensionspecs",permalink:"/docs/28.0.1/querying/dimensionspecs",draft:!1,tags:[],version:"current",frontMatter:{id:"dimensionspecs",title:"Query dimensions",sidebar_label:"Dimensions"},sidebar:"docs",previous:{title:"Granularities",permalink:"/docs/28.0.1/querying/granularities"},next:{title:"Aggregations",permalink:"/docs/28.0.1/querying/aggregations"}},u={},c=[{value:"DimensionSpec",id:"dimensionspec",level:2},{value:"Default DimensionSpec",id:"default-dimensionspec",level:3},{value:"Extraction DimensionSpec",id:"extraction-dimensionspec",level:3},{value:"Filtered DimensionSpecs",id:"filtered-dimensionspecs",level:3},{value:"Lookup DimensionSpecs",id:"lookup-dimensionspecs",level:3},{value:"Output Types",id:"output-types",level:2},{value:"Extraction Functions",id:"extraction-functions",level:2},{value:"Regular Expression Extraction Function",id:"regular-expression-extraction-function",level:3},{value:"Partial Extraction Function",id:"partial-extraction-function",level:3},{value:"Search query extraction function",id:"search-query-extraction-function",level:3},{value:"Substring Extraction Function",id:"substring-extraction-function",level:3},{value:"Strlen Extraction Function",id:"strlen-extraction-function",level:3},{value:"Time Format Extraction Function",id:"time-format-extraction-function",level:3},{value:"Time Parsing Extraction Function",id:"time-parsing-extraction-function",level:3},{value:"JavaScript Extraction Function",id:"javascript-extraction-function",level:3},{value:"Registered lookup extraction function",id:"registered-lookup-extraction-function",level:3},{value:"Inline lookup extraction function",id:"inline-lookup-extraction-function",level:3},{value:"Cascade Extraction Function",id:"cascade-extraction-function",level:3},{value:"String Format Extraction Function",id:"string-format-extraction-function",level:3},{value:"Upper and Lower extraction functions.",id:"upper-and-lower-extraction-functions",level:3},{value:"Bucket Extraction Function",id:"bucket-extraction-function",level:3}],d={toc:c},m="wrapper";function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)(m,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," Apache Druid supports two query languages: ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/sql"},"Druid SQL")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/"},"native queries"),".\nThis document describes the native\nlanguage. For information about functions available in SQL, refer to the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/sql-scalar"},"SQL documentation"),".")),(0,r.kt)("p",null,"The following JSON fields can be used in a query to operate on dimension values."),(0,r.kt)("h2",{id:"dimensionspec"},"DimensionSpec"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"DimensionSpec")," defines how to transform dimension values prior to aggregation."),(0,r.kt)("h3",{id:"default-dimensionspec"},"Default DimensionSpec"),(0,r.kt)("p",null,"Returns dimension values as is and optionally renames the dimension."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "default",\n  "dimension" : <dimension>,\n  "outputName": <output_name>,\n  "outputType": <"STRING"|"LONG"|"FLOAT">\n}\n')),(0,r.kt)("p",null,"When specifying a ",(0,r.kt)("inlineCode",{parentName:"p"},"DimensionSpec")," on a numeric column, you should include the type of the column in the ",(0,r.kt)("inlineCode",{parentName:"p"},"outputType")," field. The ",(0,r.kt)("inlineCode",{parentName:"p"},"outputType")," defaults to STRING when not specified."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#output-types"},"Output Types")," for more details."),(0,r.kt)("h3",{id:"extraction-dimensionspec"},"Extraction DimensionSpec"),(0,r.kt)("p",null,"Returns dimension values transformed using the given ",(0,r.kt)("a",{parentName:"p",href:"#extraction-functions"},"extraction function"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "extraction",\n  "dimension" : <dimension>,\n  "outputName" :  <output_name>,\n  "outputType": <"STRING"|"LONG"|"FLOAT">,\n  "extractionFn" : <extraction_function>\n}\n')),(0,r.kt)("p",null,"You can specify an ",(0,r.kt)("inlineCode",{parentName:"p"},"outputType")," in an ",(0,r.kt)("inlineCode",{parentName:"p"},"ExtractionDimensionSpec")," to apply type conversion to results before merging. The ",(0,r.kt)("inlineCode",{parentName:"p"},"outputType")," defaults to STRING when not specified."),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"#output-types"},"Output Types")," section for more details."),(0,r.kt)("h3",{id:"filtered-dimensionspecs"},"Filtered DimensionSpecs"),(0,r.kt)("p",null,"A filtered ",(0,r.kt)("inlineCode",{parentName:"p"},"DimensionSpec")," is only useful for multi-value dimensions. Say you have a row in Apache Druid that has a multi-value dimension with values ",'["v1", "v2", "v3"]'," and you send a groupBy/topN query grouping by that dimension with a ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/filters"},"query filter"),' for a value of "v1". In the response you will get 3 rows containing "v1", "v2" and "v3". This behavior might be unintuitive for some use cases.'),(0,r.kt)("p",null,'This happens because Druid uses the "query filter" internally on bitmaps to match the row to include in query result processing. With multi-value dimensions, "query filter" behaves like a contains check, which matches the row with dimension value ','["v1", "v2", "v3"]',". "),(0,r.kt)("p",null,'See the section on "Multi-value columns" in ',(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/design/segments"},"segment")," for more details."),(0,r.kt)("p",null,'Then the groupBy/topN processing pipeline "explodes" all multi-value dimensions resulting 3 rows for "v1", "v2" and "v3" each.'),(0,r.kt)("p",null,'In addition to "query filter", which efficiently selects the rows to be processed, you can use the filtered dimension spec to filter for specific values within the values of a multi-value dimension. These dimension specs take a delegate ',(0,r.kt)("inlineCode",{parentName:"p"},"DimensionSpec"),' and a filtering criteria. From the "exploded" rows, only rows matching the given filtering criteria are returned in the query result.'),(0,r.kt)("p",null,"The following filtered dimension spec defines the values to include or exclude as per the ",(0,r.kt)("inlineCode",{parentName:"p"},"isWhitelist")," attribute value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "type" : "listFiltered", "delegate" : <dimensionSpec>, "values": <array of strings>, "isWhitelist": <optional attribute for true/false, default is true> }\n')),(0,r.kt)("p",null,"The following filtered dimension spec retains only the values matching a regex.  You should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"listFiltered")," function for inclusion and exclusion use cases because it is faster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "type" : "regexFiltered", "delegate" : <dimensionSpec>, "pattern": <java regex pattern> }\n')),(0,r.kt)("p",null,"The following filtered dimension spec retains only the values starting with the same prefix."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "type" : "prefixFiltered", "delegate" : <dimensionSpec>, "prefix": <prefix string> }\n')),(0,r.kt)("p",null,"For more details and examples, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/multi-value-dimensions"},"multi-value dimensions"),"."),(0,r.kt)("h3",{id:"lookup-dimensionspecs"},"Lookup DimensionSpecs"),(0,r.kt)("p",null,"You can use lookup dimension specs to define a lookup implementation as a dimension spec directly.\nGenerally, there are two kinds of lookup implementations.\nThe first kind is passed at the query time like ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," implementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type":"lookup",\n  "dimension":"dimensionName",\n  "outputName":"dimensionOutputName",\n  "replaceMissingValueWith":"missing_value",\n  "retainMissingValue":false,\n  "lookup":{"type": "map", "map":{"key":"value"}, "isOneToOne":false}\n}\n')),(0,r.kt)("p",null,"A property of ",(0,r.kt)("inlineCode",{parentName:"p"},"retainMissingValue")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceMissingValueWith")," can be specified at query time to hint how to handle missing values. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceMissingValueWith")," to ",(0,r.kt)("inlineCode",{parentName:"p"},'""')," has the same effect as setting it to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or omitting the property.\nSetting ",(0,r.kt)("inlineCode",{parentName:"p"},"retainMissingValue")," to true will use the dimension's original value if it is not found in the lookup.\nThe default values are ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceMissingValueWith = null")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"retainMissingValue = false")," which causes missing values to be treated as missing."),(0,r.kt)("p",null,"It is illegal to set ",(0,r.kt)("inlineCode",{parentName:"p"},"retainMissingValue = true")," and also specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceMissingValueWith"),"."),(0,r.kt)("p",null,"A property ",(0,r.kt)("inlineCode",{parentName:"p"},"optimize")," can be supplied to allow optimization of lookup based extraction filter (by default ",(0,r.kt)("inlineCode",{parentName:"p"},"optimize = true"),")."),(0,r.kt)("p",null,"The second kind where it is not possible to pass at query time due to their size, will be based on an external lookup table or resource that is already registered via configuration file or/and Coordinator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type":"lookup",\n  "dimension":"dimensionName",\n  "outputName":"dimensionOutputName",\n  "name":"lookupName"\n}\n')),(0,r.kt)("h2",{id:"output-types"},"Output Types"),(0,r.kt)("p",null,"The dimension specs provide an option to specify the output type of a column's values. This is necessary as it is possible for a column with given name to have different value types in different segments; results will be converted to the type specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"outputType")," before merging."),(0,r.kt)("p",null,"Note that not all use cases for DimensionSpec currently support ",(0,r.kt)("inlineCode",{parentName:"p"},"outputType"),", the table below shows which use cases support this option:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Query Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GroupBy (v1)"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GroupBy (v2)"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TopN"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Search"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Select"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cardinality Aggregator"),(0,r.kt)("td",{parentName:"tr",align:null},"no")))),(0,r.kt)("h2",{id:"extraction-functions"},"Extraction Functions"),(0,r.kt)("p",null,"Extraction functions define the transformation applied to each dimension value."),(0,r.kt)("p",null,"Transformations can be applied to both regular (string) dimensions, as well\nas the special ",(0,r.kt)("inlineCode",{parentName:"p"},"__time")," dimension, which represents the current time bucket\naccording to the query ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/granularities"},"aggregation granularity"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": for functions taking string values (such as regular expressions),\n",(0,r.kt)("inlineCode",{parentName:"p"},"__time")," dimension values will be formatted in ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601 format"),"\nbefore getting passed to the extraction function."),(0,r.kt)("h3",{id:"regular-expression-extraction-function"},"Regular Expression Extraction Function"),(0,r.kt)("p",null,"Returns the first matching group for the given regular expression.\nIf there is no match, it returns the dimension value as is."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "regex",\n  "expr" : <regular_expression>,\n  "index" : <group to extract, default 1>\n  "replaceMissingValue" : true,\n  "replaceMissingValueWith" : "foobar"\n}\n')),(0,r.kt)("p",null,"For example, using ",(0,r.kt)("inlineCode",{parentName:"p"},'"expr" : "(\\\\w\\\\w\\\\w).*"')," will transform\n",(0,r.kt)("inlineCode",{parentName:"p"},"'Monday'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'Tuesday'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'Wednesday'")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"'Mon'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'Tue'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'Wed'"),"."),(0,r.kt)("p",null,'If "index" is set, it will control which group from the match to extract. Index zero extracts the string matching the\nentire pattern.'),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceMissingValue")," property is true, the extraction function will transform dimension values that do not match the regex pattern to a user-specified String. Default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceMissingValueWith")," property sets the String that unmatched dimension values will be replaced with, if ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceMissingValue")," is true. If ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceMissingValueWith")," is not specified, unmatched dimension values will be replaced with nulls."),(0,r.kt)("p",null,"For example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"expr")," is ",(0,r.kt)("inlineCode",{parentName:"p"},'"(a\\w+)"')," in the example JSON above, a regex that matches words starting with the letter ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", the extraction function will convert a dimension value like ",(0,r.kt)("inlineCode",{parentName:"p"},"banana")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"foobar"),"."),(0,r.kt)("h3",{id:"partial-extraction-function"},"Partial Extraction Function"),(0,r.kt)("p",null,"Returns the dimension value unchanged if the regular expression matches, otherwise returns null."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "type" : "partial", "expr" : <regular_expression> }\n')),(0,r.kt)("h3",{id:"search-query-extraction-function"},"Search query extraction function"),(0,r.kt)("p",null,"Returns the dimension value unchanged if the given ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/searchquery#searchqueryspec"},(0,r.kt)("inlineCode",{parentName:"a"},"SearchQuerySpec")),"\nmatches, otherwise returns null."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "type" : "searchQuery", "query" : <search_query_spec> }\n')),(0,r.kt)("h3",{id:"substring-extraction-function"},"Substring Extraction Function"),(0,r.kt)("p",null,'Returns a substring of the dimension value starting from the supplied index and of the desired length. Both index\nand length are measured in the number of Unicode code units present in the string as if it were encoded in UTF-16.\nNote that some Unicode characters may be represented by two code units. This is the same behavior as the Java String\nclass\'s "substring" method.'),(0,r.kt)("p",null,"If the desired length exceeds the length of the dimension value, the remainder of the string starting at index will\nbe returned. If index is greater than the length of the dimension value, null will be returned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "type" : "substring", "index" : 1, "length" : 4 }\n')),(0,r.kt)("p",null,"The length may be omitted for substring to return the remainder of the dimension value starting from index,\nor null if index greater than the length of the dimension value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "type" : "substring", "index" : 3 }\n')),(0,r.kt)("h3",{id:"strlen-extraction-function"},"Strlen Extraction Function"),(0,r.kt)("p",null,'Returns the length of dimension values, as measured in the number of Unicode code units present in the string as if it\nwere encoded in UTF-16. Note that some Unicode characters may be represented by two code units. This is the same\nbehavior as the Java String class\'s "length" method.'),(0,r.kt)("p",null,"null strings are considered as having zero length."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "type" : "strlen" }\n')),(0,r.kt)("h3",{id:"time-format-extraction-function"},"Time Format Extraction Function"),(0,r.kt)("p",null,"Returns the dimension value formatted according to the given format string, time zone, and locale."),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"__time")," dimension values, this formats the time value bucketed by the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/granularities"},"aggregation granularity")),(0,r.kt)("p",null,"For a regular dimension, it assumes the string is formatted in\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601 date and time format"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format")," : date time format for the resulting dimension value, in ",(0,r.kt)("a",{parentName:"li",href:"http://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html"},"Joda Time DateTimeFormat"),", or null to use the default ISO8601 format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locale")," : locale (language and country) to use, given as a ",(0,r.kt)("a",{parentName:"li",href:"http://www.oracle.com/technetwork/java/javase/java8locales-2095355.html#util-text"},"IETF BCP 47 language tag"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"en-US"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"en-GB"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"fr-FR"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"fr-CA"),", etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeZone")," : time zone to use in ",(0,r.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"IANA tz database format"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"Europe/Berlin")," (this can possibly be different than the aggregation time-zone)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"granularity")," : ",(0,r.kt)("a",{parentName:"li",href:"/docs/28.0.1/querying/granularities"},"granularity")," to apply before formatting, or omit to not apply any granularity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"asMillis")," : boolean value, set to true to treat input strings as millis rather than ISO8601 strings. Additionally, if ",(0,r.kt)("inlineCode",{parentName:"li"},"format")," is null or not specified, output will be in millis rather than ISO8601.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "type" : "timeFormat",\n  "format" : <output_format> (optional),\n  "timeZone" : <time_zone> (optional, default UTC),\n  "locale" : <locale> (optional, default current locale),\n  "granularity" : <granularity> (optional, default none) },\n  "asMillis" : <true or false> (optional) }\n')),(0,r.kt)("p",null,"For example, the following dimension spec returns the day of the week for Montr\xe9al in French:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "extraction",\n  "dimension" : "__time",\n  "outputName" :  "dayOfWeek",\n  "extractionFn" : {\n    "type" : "timeFormat",\n    "format" : "EEEE",\n    "timeZone" : "America/Montreal",\n    "locale" : "fr"\n  }\n}\n')),(0,r.kt)("h3",{id:"time-parsing-extraction-function"},"Time Parsing Extraction Function"),(0,r.kt)("p",null,"Parses dimension values as timestamps using the given input format,\nand returns them formatted using the given output format."),(0,r.kt)("p",null,"Note, if you are working with the ",(0,r.kt)("inlineCode",{parentName:"p"},"__time")," dimension, you should consider using the\n",(0,r.kt)("a",{parentName:"p",href:"#time-format-extraction-function"},"time extraction function instead")," instead,\nwhich works on time value directly as opposed to string values."),(0,r.kt)("p",null,'If "joda" is true, time formats are described in the ',(0,r.kt)("a",{parentName:"p",href:"http://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html"},"Joda DateTimeFormat documentation"),'.\nIf "joda" is false (or unspecified) then formats are described in the ',(0,r.kt)("a",{parentName:"p",href:"http://icu-project.org/apiref/icu4j/com/ibm/icu/text/SimpleDateFormat.html"},"SimpleDateFormat documentation"),'.\nIn general, we recommend setting "joda" to true since Joda format strings are more common in Druid APIs and since Joda handles certain edge cases (like weeks and weekyears near\nthe start and end of calendar years) in a more ISO8601 compliant way.'),(0,r.kt)("p",null,"If a value cannot be parsed using the provided timeFormat, it will be returned as-is."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "type" : "time",\n  "timeFormat" : <input_format>,\n  "resultFormat" : <output_format>,\n  "joda" : <true, false> }\n')),(0,r.kt)("h3",{id:"javascript-extraction-function"},"JavaScript Extraction Function"),(0,r.kt)("p",null,"Returns the dimension value, as transformed by the given JavaScript function."),(0,r.kt)("p",null,"For regular dimensions, the input value is passed as a string."),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"__time")," dimension, the input value is passed as a number\nrepresenting the number of milliseconds since January 1, 1970 UTC."),(0,r.kt)("p",null,"Example for a regular dimension"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "javascript",\n  "function" : "function(str) { return str.substr(0, 3); }"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "javascript",\n  "function" : "function(str) { return str + \'!!!\'; }",\n  "injective" : true\n}\n')),(0,r.kt)("p",null,"A property of ",(0,r.kt)("inlineCode",{parentName:"p"},"injective")," specifies if the JavaScript function preserves uniqueness. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," meaning uniqueness is not preserved"),(0,r.kt)("p",null,"Example for the ",(0,r.kt)("inlineCode",{parentName:"p"},"__time")," dimension:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "javascript",\n  "function" : "function(t) { return \'Second \' + Math.floor((t % 60000) / 1000); }"\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," JavaScript-based functionality is disabled by default. Please refer to the Druid ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/development/javascript"},"JavaScript programming guide")," for guidelines about using Druid's JavaScript functionality, including instructions on how to enable it.")),(0,r.kt)("h3",{id:"registered-lookup-extraction-function"},"Registered lookup extraction function"),(0,r.kt)("p",null,"Lookups are a concept in Druid where dimension values are (optionally) replaced with new values.\nFor more documentation on using lookups, please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/lookups"},"Lookups"),'.\nThe "registeredLookup" extraction function lets you refer to a lookup that has been registered in the cluster-wide\nconfiguration.'),(0,r.kt)("p",null,"An example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type":"registeredLookup",\n  "lookup":"some_lookup_name",\n  "retainMissingValue":true\n}\n')),(0,r.kt)("p",null,"A property of ",(0,r.kt)("inlineCode",{parentName:"p"},"retainMissingValue")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceMissingValueWith")," can be specified at query time to hint how to handle\nmissing values. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceMissingValueWith")," to ",(0,r.kt)("inlineCode",{parentName:"p"},'""')," has the same effect as setting it to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or omitting the\nproperty. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"retainMissingValue")," to true will use the dimension's original value if it is not found in the lookup.\nThe default values are ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceMissingValueWith = null")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"retainMissingValue = false")," which causes missing values to\nbe treated as missing."),(0,r.kt)("p",null,"It is illegal to set ",(0,r.kt)("inlineCode",{parentName:"p"},"retainMissingValue = true")," and also specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceMissingValueWith"),"."),(0,r.kt)("p",null,"A property of ",(0,r.kt)("inlineCode",{parentName:"p"},"injective")," can override the lookup's own sense of whether or not it is\n",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/lookups#query-execution"},"injective"),". If left unspecified, Druid will use the registered cluster-wide lookup\nconfiguration."),(0,r.kt)("p",null,"A property ",(0,r.kt)("inlineCode",{parentName:"p"},"optimize")," can be supplied to allow optimization of lookup based extraction filter (by default ",(0,r.kt)("inlineCode",{parentName:"p"},"optimize = true"),").\nThe optimization layer will run on the Broker and it will rewrite the extraction filter as clause of selector filters.\nFor instance the following filter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "filter": {\n        "type": "selector",\n        "dimension": "product",\n        "value": "bar_1",\n        "extractionFn": {\n            "type": "registeredLookup",\n            "optimize": true,\n            "lookup": "some_lookup_name"\n        }\n    }\n}\n')),(0,r.kt)("p",null,'will be rewritten as the following simpler query, assuming a lookup that maps "product_1" and "product_3" to the value\n"bar_1":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "filter":{\n      "type":"or",\n      "fields":[\n         {\n            "filter":{\n               "type":"selector",\n               "dimension":"product",\n               "value":"product_1"\n            }\n         },\n         {\n            "filter":{\n               "type":"selector",\n               "dimension":"product",\n               "value":"product_3"\n            }\n         }\n      ]\n   }\n}\n')),(0,r.kt)("p",null,"A null dimension value can be mapped to a specific value by specifying the empty string as the key in your lookup file.\nThis allows distinguishing between a null dimension and a lookup resulting in a null.\nFor example, specifying ",(0,r.kt)("inlineCode",{parentName:"p"},'{"":"bar","bat":"baz"}')," with dimension values ",(0,r.kt)("inlineCode",{parentName:"p"},'[null, "foo", "bat"]')," and replacing missing values with ",(0,r.kt)("inlineCode",{parentName:"p"},'"oof"')," will yield results of ",(0,r.kt)("inlineCode",{parentName:"p"},'["bar", "oof", "baz"]'),".\nOmitting the empty string key will cause the missing value to take over. For example, specifying ",(0,r.kt)("inlineCode",{parentName:"p"},'{"bat":"baz"}')," with dimension values ",(0,r.kt)("inlineCode",{parentName:"p"},'[null, "foo", "bat"]')," and replacing missing values with ",(0,r.kt)("inlineCode",{parentName:"p"},'"oof"')," will yield results of ",(0,r.kt)("inlineCode",{parentName:"p"},'["oof", "oof", "baz"]'),"."),(0,r.kt)("h3",{id:"inline-lookup-extraction-function"},"Inline lookup extraction function"),(0,r.kt)("p",null,"Lookups are a concept in Druid where dimension values are (optionally) replaced with new values.\nFor more documentation on using lookups, please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/lookups"},"Lookups"),'.\nThe "lookup" extraction function lets you specify an inline lookup map without registering one in the cluster-wide\nconfiguration.'),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type":"lookup",\n  "lookup":{\n    "type":"map",\n    "map":{"foo":"bar", "baz":"bat"}\n  },\n  "retainMissingValue":true,\n  "injective":true\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type":"lookup",\n  "lookup":{\n    "type":"map",\n    "map":{"foo":"bar", "baz":"bat"}\n  },\n  "retainMissingValue":false,\n  "injective":false,\n  "replaceMissingValueWith":"MISSING"\n}\n')),(0,r.kt)("p",null,"The inline lookup should be of type ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),"."),(0,r.kt)("p",null,"The properties ",(0,r.kt)("inlineCode",{parentName:"p"},"retainMissingValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceMissingValueWith"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"injective"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"optimize")," behave similarly to the\n",(0,r.kt)("a",{parentName:"p",href:"#registered-lookup-extraction-function"},"registered lookup extraction function"),"."),(0,r.kt)("h3",{id:"cascade-extraction-function"},"Cascade Extraction Function"),(0,r.kt)("p",null,"Provides chained execution of extraction functions."),(0,r.kt)("p",null,"A property of ",(0,r.kt)("inlineCode",{parentName:"p"},"extractionFns")," contains an array of any extraction functions, which is executed in the array index order."),(0,r.kt)("p",null,"Example for chaining ",(0,r.kt)("a",{parentName:"p",href:"#regular-expression-extraction-function"},"regular expression extraction function"),", ",(0,r.kt)("a",{parentName:"p",href:"#javascript-extraction-function"},"JavaScript extraction function"),", and ",(0,r.kt)("a",{parentName:"p",href:"#substring-extraction-function"},"substring extraction function")," is as followings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "cascade",\n  "extractionFns": [\n    {\n      "type" : "regex",\n      "expr" : "/([^/]+)/",\n      "replaceMissingValue": false,\n      "replaceMissingValueWith": null\n    },\n    {\n      "type" : "javascript",\n      "function" : "function(str) { return \\"the \\".concat(str) }"\n    },\n    {\n      "type" : "substring",\n      "index" : 0, "length" : 7\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"It will transform dimension values with specified extraction functions in the order named.\nFor example, ",(0,r.kt)("inlineCode",{parentName:"p"},"'/druid/prod/historical'")," is transformed to ",(0,r.kt)("inlineCode",{parentName:"p"},"'the dru'")," as regular expression extraction function first transforms it to ",(0,r.kt)("inlineCode",{parentName:"p"},"'druid'")," and then, JavaScript extraction function transforms it to ",(0,r.kt)("inlineCode",{parentName:"p"},"'the druid'"),", and lastly, substring extraction function transforms it to ",(0,r.kt)("inlineCode",{parentName:"p"},"'the dru'"),"."),(0,r.kt)("h3",{id:"string-format-extraction-function"},"String Format Extraction Function"),(0,r.kt)("p",null,"Returns the dimension value formatted according to the given format string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "type" : "stringFormat", "format" : <sprintf_expression>, "nullHandling" : <optional attribute for handling null value> }\n')),(0,r.kt)("p",null,'For example if you want to concat "','[" and "]','" before and after the actual dimension value, you need to specify "',"[%s]",'" as format string. "nullHandling" can be one of ',(0,r.kt)("inlineCode",{parentName:"p"},"nullString"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"emptyString")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"returnNull"),'. With "',"[%s]",'" format, each configuration will result ',(0,r.kt)("inlineCode",{parentName:"p"},"[null]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),". Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"nullString"),"."),(0,r.kt)("h3",{id:"upper-and-lower-extraction-functions"},"Upper and Lower extraction functions."),(0,r.kt)("p",null,"Returns the dimension values as all upper case or lower case.\nOptionally user can specify the language to use in order to perform upper or lower transformation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "upper",\n  "locale":"fr"\n}\n')),(0,r.kt)("p",null,'or without setting "locale" (in this case, the current value of the default locale for this instance of the Java Virtual Machine.)'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "lower"\n}\n')),(0,r.kt)("h3",{id:"bucket-extraction-function"},"Bucket Extraction Function"),(0,r.kt)("p",null,"Bucket extraction function is used to bucket numerical values in each range of the given size by converting them to the same base value. Non numeric values are converted to null."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"size")," : the size of the buckets (optional, default 1)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"offset")," : the offset for the buckets (optional, default 0)")),(0,r.kt)("p",null,"The following extraction function creates buckets of 5 starting from 2. In this case, values in the range of [2, 7) will be converted to 2, values in [7, 12) will be converted to 7, etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "bucket",\n  "size" : 5,\n  "offset" : 2\n}\n')))}f.isMDXComponent=!0}}]);