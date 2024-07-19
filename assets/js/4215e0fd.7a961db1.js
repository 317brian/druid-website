"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4746],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>g});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=t.createContext({}),u=function(e){var a=t.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},p=function(e){var a=u(e.components);return t.createElement(o.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),y=n,g=m["".concat(o,".").concat(y)]||m[y]||d[y]||l;return r?t.createElement(g,i(i({ref:a},p),{},{components:r})):t.createElement(g,i({ref:a},p))}));function g(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=y;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},71424:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var t=r(87462),n=r(63366),l=(r(67294),r(3905)),i=["components"],s={id:"migr-mvd-array",title:"Migration guide: MVDs to arrays",sidebar_label:"MVDs to arrays"},o=void 0,u={unversionedId:"release-info/migr-mvd-array",id:"release-info/migr-mvd-array",title:"Migration guide: MVDs to arrays",description:"\x3c!--",source:"@site/docs/30.0.0/release-info/migr-mvd-array.md",sourceDirName:"release-info",slug:"/release-info/migr-mvd-array",permalink:"/docs/30.0.0/release-info/migr-mvd-array",draft:!1,tags:[],version:"current",frontMatter:{id:"migr-mvd-array",title:"Migration guide: MVDs to arrays",sidebar_label:"MVDs to arrays"},sidebar:"docs",previous:{title:"SQL compliant mode",permalink:"/docs/30.0.0/release-info/migr-ansi-sql-null"},next:{title:"Papers",permalink:"/docs/30.0.0/misc/papers-and-talks"}},p={},m=[{value:"Comparison between arrays and MVDs",id:"comparison-between-arrays-and-mvds",level:2},{value:"Querying arrays and MVDs",id:"querying-arrays-and-mvds",level:2},{value:"Examples",id:"examples",level:2},{value:"Filter by an array element",id:"filter-by-an-array-element",level:3},{value:"Array",id:"array",level:4},{value:"MVD",id:"mvd",level:4},{value:"Filter by one or more elements",id:"filter-by-one-or-more-elements",level:3},{value:"Array",id:"array-1",level:4},{value:"MVD",id:"mvd-1",level:4},{value:"Filter using array equality",id:"filter-using-array-equality",level:3},{value:"Array",id:"array-2",level:4},{value:"MVD",id:"mvd-2",level:4},{value:"Group results by array",id:"group-results-by-array",level:3},{value:"Array",id:"array-3",level:4},{value:"MVD",id:"mvd-3",level:4},{value:"Group by array elements",id:"group-by-array-elements",level:3},{value:"Array",id:"array-4",level:4},{value:"MVD",id:"mvd-4",level:4},{value:"Filter and group by array elements",id:"filter-and-group-by-array-elements",level:3},{value:"How to ingest data as arrays",id:"how-to-ingest-data-as-arrays",level:2}],d={toc:m},y="wrapper";function g(e){var a=e.components,r=(0,n.Z)(e,i);return(0,l.kt)(y,(0,t.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Druid now supports SQL-compliant ",(0,l.kt)("a",{parentName:"p",href:"/docs/30.0.0/querying/arrays"},"arrays"),". We recommend using arrays over ",(0,l.kt)("a",{parentName:"p",href:"/docs/30.0.0/querying/multi-value-dimensions"},"multi-value dimensions")," (MVDs) whenever possible.\nFor new projects and complex use cases involving multiple data types, use arrays. Use MVDs for specific use cases, such as operating directly on individual elements like regular strings. If your operations involve entire arrays of values, including the ordering of values within a row, use arrays over MVDs."),(0,l.kt)("h2",{id:"comparison-between-arrays-and-mvds"},"Comparison between arrays and MVDs"),(0,l.kt)("p",null,"The following table compares the general behavior between arrays and MVDs.\nFor specific query differences between arrays and MVDs, see ",(0,l.kt)("a",{parentName:"p",href:"#querying-arrays-and-mvds"},"Querying arrays and MVDs"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Array"),(0,l.kt)("th",{parentName:"tr",align:null},"MVD"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data types"),(0,l.kt)("td",{parentName:"tr",align:null},"Supports VARCHAR, BIGINT, and DOUBLE types (ARRAY<STRING",">",", ARRAY<LONG",">",", ARRAY<DOUBLE",">",")"),(0,l.kt)("td",{parentName:"tr",align:null},"Only supports arrays of strings (VARCHAR)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQL compliance"),(0,l.kt)("td",{parentName:"tr",align:null},"Behaves like standard SQL arrays with SQL-compliant behavior"),(0,l.kt)("td",{parentName:"tr",align:null},"Behaves like SQL VARCHAR rather than standard SQL arrays and requires special SQL functions to achieve array-like behavior. See the ",(0,l.kt)("a",{parentName:"td",href:"#examples"},"examples"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ingestion"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"JSON arrays are ingested as Druid arrays"),(0,l.kt)("li",null,"Managed through the query context parameter ",(0,l.kt)("inlineCode",{parentName:"td"},"arrayIngestMode")," in SQL-based ingestion. Supported options are ",(0,l.kt)("inlineCode",{parentName:"td"},"array"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"mvd"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"none"),". Note that if you set this mode to ",(0,l.kt)("inlineCode",{parentName:"td"},"none"),", Druid raises an exception if you try to store any type of array."))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"JSON arrays are ingested as MVDs"),(0,l.kt)("li",null,"Managed using functions like ",(0,l.kt)("a",{parentName:"td",href:"/docs/30.0.0/querying/sql-functions#array_to_mv"},"ARRAY_TO_MV")," in SQL-based ingestion")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Filtering and grouping"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Filters and groupings match the entire array value"),(0,l.kt)("li",null,"Can be used as GROUP BY keys, grouping based on the entire array value"),(0,l.kt)("li",null,"Use the ",(0,l.kt)("a",{parentName:"td",href:"#group-by-array-elements"},"UNNEST operator")," to group based on individual array elements"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Filters match any value within the array"),(0,l.kt)("li",null,"Grouping generates a group for each individual value, similar to an implicit UNNEST")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Conversion"),(0,l.kt)("td",{parentName:"tr",align:null},"Convert an MVD to an array using ",(0,l.kt)("a",{parentName:"td",href:"/docs/30.0.0/querying/sql-functions#mv_to_array"},"MV_TO_ARRAY")),(0,l.kt)("td",{parentName:"tr",align:null},"Convert an array to an MVD using ",(0,l.kt)("a",{parentName:"td",href:"/docs/30.0.0/querying/sql-functions#array_to_mv"},"ARRAY_TO_MV"))))),(0,l.kt)("h2",{id:"querying-arrays-and-mvds"},"Querying arrays and MVDs"),(0,l.kt)("p",null,"In SQL queries, Druid operates on arrays differently than MVDs.\nA value in an array column is treated as a single array entity (SQL ARRAY), whereas a value in an MVD column is treated as individual strings (SQL VARCHAR).\nThis behavior applies even though multiple string values within the same MVD are still stored as a single field in the MVD column."),(0,l.kt)("p",null,"For example, consider the same value, ",(0,l.kt)("inlineCode",{parentName:"p"},"['a', 'b', 'c']")," ingested into an array column and an MVD column.\nIn your query, you want to filter results by comparing some value with ",(0,l.kt)("inlineCode",{parentName:"p"},"['a', 'b', 'c']"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For array columns, Druid only returns the row when an equality filter matches the entire array.",(0,l.kt)("br",{parentName:"p"}),"\n","For example: ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE \"array_column\" = ARRAY['a', 'b', 'c']"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For MVD columns, Druid returns the row when an equality filter matches any value of the MVD.",(0,l.kt)("br",{parentName:"p"}),"\n","For example, any of the following filters return the row for the query:",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE \"mvd_column\" = 'a'"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE \"mvd_column\" = 'b'"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE \"mvd_column\" = 'c'")))),(0,l.kt)("p",null,"Note this difference between arrays and MVDs when you write queries that involve filtering or grouping."),(0,l.kt)("p",null,"When your query applies both filters and grouping, MVDs may return rows that don't seem to match the filter,\nsince the grouping occurs after Druid applies the filter. For an example, see ",(0,l.kt)("a",{parentName:"p",href:"#filter-and-group-by-array-elements"},"Filter and group by array elements"),"."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The following examples highlight a few analogous queries between arrays and MVDs.\nFor more information and examples, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/30.0.0/querying/arrays#querying-arrays"},"Querying arrays")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/30.0.0/querying/multi-value-dimensions#querying-multi-value-dimensions"},"Querying multi-value dimensions"),"."),(0,l.kt)("h3",{id:"filter-by-an-array-element"},"Filter by an array element"),(0,l.kt)("p",null,"Filter rows that have a certain value in the array or MVD."),(0,l.kt)("h4",{id:"array"},"Array"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT label, tags\nFROM \"array_example\"\nWHERE ARRAY_CONTAINS(tags, 't3')\n")),(0,l.kt)("h4",{id:"mvd"},"MVD"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT label, tags\nFROM \"mvd_example\"\nWHERE tags = 't3'\n")),(0,l.kt)("h3",{id:"filter-by-one-or-more-elements"},"Filter by one or more elements"),(0,l.kt)("p",null,"Filter rows for which the array or MVD contains one or more elements.\nNotice that ",(0,l.kt)("a",{parentName:"p",href:"/docs/30.0.0/querying/sql-functions#array_overlap"},"ARRAY_OVERLAP")," checks for any overlapping elements, whereas ",(0,l.kt)("a",{parentName:"p",href:"/docs/30.0.0/querying/sql-functions#array_contains"},"ARRAY_CONTAINS")," in the previous example checks that all elements are included."),(0,l.kt)("h4",{id:"array-1"},"Array"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM \"array_example\"\nWHERE ARRAY_OVERLAP(tags, ARRAY['t1', 't7'])\n")),(0,l.kt)("h4",{id:"mvd-1"},"MVD"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM \"mvd_example\"\nWHERE tags = 't1' OR tags = 't7'\n")),(0,l.kt)("h3",{id:"filter-using-array-equality"},"Filter using array equality"),(0,l.kt)("p",null,"Filter rows for which the array or MVD is equivalent to a reference array."),(0,l.kt)("h4",{id:"array-2"},"Array"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM \"array_example\"\nWHERE tags = ARRAY['t1', 't2', 't3']\n")),(0,l.kt)("h4",{id:"mvd-2"},"MVD"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM \"mvd_example\"\nWHERE MV_TO_ARRAY(tags) = ARRAY['t1', 't2', 't3']\n")),(0,l.kt)("h3",{id:"group-results-by-array"},"Group results by array"),(0,l.kt)("p",null,"Group results by the array or MVD."),(0,l.kt)("h4",{id:"array-3"},"Array"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT label, tags\nFROM "array_example"\nGROUP BY 1, 2\n')),(0,l.kt)("h4",{id:"mvd-3"},"MVD"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT label, MV_TO_ARRAY(tags)\nFROM "mvd_example"\nGROUP BY 1, 2\n')),(0,l.kt)("h3",{id:"group-by-array-elements"},"Group by array elements"),(0,l.kt)("p",null,"Group results by individual array or MVD elements."),(0,l.kt)("h4",{id:"array-4"},"Array"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT label, strings\nFROM "array_example" CROSS JOIN UNNEST(tags) as u(strings)\nGROUP BY 1, 2\n')),(0,l.kt)("h4",{id:"mvd-4"},"MVD"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT label, tags\nFROM "mvd_example"\nGROUP BY 1, 2\n')),(0,l.kt)("h3",{id:"filter-and-group-by-array-elements"},"Filter and group by array elements"),(0,l.kt)("p",null,"Filter rows that have a certain value, then group by elements in the array or MVD.\nThis example illustrates that while the results of filtering may match between arrays and MVDs,\nbe aware that MVDs implicitly unnest their values so that results differ when you also apply a GROUP BY."),(0,l.kt)("p",null,"For example, consider the queries from ",(0,l.kt)("a",{parentName:"p",href:"#filter-by-an-array-element"},"Filter by an array element"),".\nBoth queries return the following rows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"label":"row1","tags":["t1","t2","t3"]}\n{"label":"row2","tags":["t3","t4","t5"]}\n')),(0,l.kt)("p",null,"However, adding ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY 1, 2")," to both queries changes the output.\nThe two queries are now:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Array\nSELECT label, tags\nFROM \"array_example\"\nWHERE ARRAY_CONTAINS(tags, 't3')\nGROUP BY 1, 2\n\n-- MVD\nSELECT label, tags\nFROM \"mvd_example\"\nWHERE tags = 't3'\nGROUP BY 1, 2\n")),(0,l.kt)("p",null,"The array query returns the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"label":"row1","tags":["t1","t2","t3"]}\n{"label":"row2","tags":["t3","t4","t5"]}\n')),(0,l.kt)("p",null,"The MVD query returns the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"label":"row1","tags":"t1"}\n{"label":"row1","tags":"t2"}\n{"label":"row1","tags":"t3"}\n{"label":"row2","tags":"t3"}\n{"label":"row2","tags":"t4"}\n{"label":"row2","tags":"t5"}\n')),(0,l.kt)("p",null,"The MVD results appear to show four extra rows for which ",(0,l.kt)("inlineCode",{parentName:"p"},"tags")," does not equal ",(0,l.kt)("inlineCode",{parentName:"p"},"t3"),".\nHowever, the rows match the filter based on how Druid evaluates equalities for MVDs."),(0,l.kt)("p",null,"For the equivalent query on MVDs, use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/30.0.0/querying/sql-functions#mv_filter_only"},"MV_FILTER_ONLY")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT label, MV_FILTER_ONLY(tags, ARRAY['t3'])\nFROM \"mvd_example\"\nWHERE tags = 't3'\nGROUP BY 1, 2\n")),(0,l.kt)("h2",{id:"how-to-ingest-data-as-arrays"},"How to ingest data as arrays"),(0,l.kt)("p",null,"You can ingest arrays in Druid as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For native batch and streaming ingestion, configure the dimensions in ",(0,l.kt)("a",{parentName:"p",href:"/docs/30.0.0/ingestion/ingestion-spec#dimensionsspec"},(0,l.kt)("inlineCode",{parentName:"a"},"dimensionsSpec")),".\nWithin ",(0,l.kt)("inlineCode",{parentName:"p"},"dimensionsSpec"),", set ",(0,l.kt)("inlineCode",{parentName:"p"},'"useSchemaDiscovery": true'),", and use ",(0,l.kt)("inlineCode",{parentName:"p"},"dimensions")," to list the array inputs with type ",(0,l.kt)("inlineCode",{parentName:"p"},"auto"),".",(0,l.kt)("br",{parentName:"p"}),"\n","For an example, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/30.0.0/querying/arrays#native-batch-and-streaming-ingestion"},"Ingesting arrays: Native batch and streaming ingestion"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For SQL-based batch ingestion, include the ",(0,l.kt)("a",{parentName:"p",href:"/docs/30.0.0/multi-stage-query/reference#context-parameters"},"query context parameter")," ",(0,l.kt)("inlineCode",{parentName:"p"},'"arrayIngestMode": "array"')," and reference the relevant array type (",(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR ARRAY"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"BIGINT ARRAY"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"DOUBLE ARRAY"),") in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/30.0.0/multi-stage-query/reference#extern-function"},"EXTEND clause")," that lists the column names and data types.\nFor examples, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/30.0.0/querying/arrays#sql-based-ingestion"},"Ingesting arrays: SQL-based ingestion"),"."),(0,l.kt)("p",{parentName:"li"},"   As a best practice, always use the ARRAY data type in your input schema. If you want to ingest MVDs, explicitly wrap the string array in ",(0,l.kt)("a",{parentName:"p",href:"/docs/30.0.0/querying/sql-functions#array_to_mv"},"ARRAY_TO_MV"),". For an example, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/30.0.0/querying/multi-value-dimensions#sql-based-ingestion"},"Multi-value dimensions: SQL-based ingestion"),"."))))}g.isMDXComponent=!0}}]);