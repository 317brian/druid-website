"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8348],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||o;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},16759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={id:"datasketches-kll",title:"DataSketches KLL Sketch module"},s=void 0,u={unversionedId:"development/extensions-core/datasketches-kll",id:"development/extensions-core/datasketches-kll",title:"DataSketches KLL Sketch module",description:"\x3c!--",source:"@site/docs/31.0.1/development/extensions-core/datasketches-kll.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/datasketches-kll",permalink:"/docs/31.0.1/development/extensions-core/datasketches-kll",draft:!1,tags:[],version:"current",frontMatter:{id:"datasketches-kll",title:"DataSketches KLL Sketch module"}},p={},c=[{value:"Aggregator",id:"aggregator",level:2},{value:"Post aggregators",id:"post-aggregators",level:2},{value:"Quantile",id:"quantile",level:3},{value:"Quantiles",id:"quantiles",level:3},{value:"Histogram",id:"histogram",level:3},{value:"Rank",id:"rank",level:3},{value:"CDF",id:"cdf",level:3},{value:"Sketch Summary",id:"sketch-summary",level:3}],h={toc:c},d="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)(d,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This module provides Apache Druid aggregators based on numeric quantiles KllFloatsSketch and KllDoublesSketch from ",(0,o.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/"},"Apache DataSketches")," library. KLL quantiles sketch is a mergeable streaming algorithm to estimate the distribution of values, and approximately answer queries about the rank of a value, probability mass function of the distribution (PMF) or histogram, cumulative distribution function (CDF), and quantiles (median, min, max, 95th percentile and such). See ",(0,o.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/docs/Quantiles/QuantilesOverview"},"Quantiles Sketch Overview"),". This document applies to both KllFloatsSketch and KllDoublesSketch. Only one of them will be used in the examples."),(0,o.kt)("p",null,"There are three major modes of operation:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ingesting sketches built outside of Druid (say, with Pig or Hive)"),(0,o.kt)("li",{parentName:"ol"},"Building sketches from raw data during ingestion"),(0,o.kt)("li",{parentName:"ol"},"Building sketches from raw data at query time")),(0,o.kt)("p",null,"To use this aggregator, make sure you ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/configuration/extensions#loading-extensions"},"include")," the extension in your config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'druid.extensions.loadList=["druid-datasketches"]\n')),(0,o.kt)("p",null,"For additional sketch types supported in Druid, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.1/development/extensions-core/datasketches-extension"},"DataSketches extension"),"."),(0,o.kt)("h2",{id:"aggregator"},"Aggregator"),(0,o.kt)("p",null,"The result of the aggregation is a KllFloatsSketch or KllDoublesSketch that is the union of all sketches either built from raw data or read from the segments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "KllDoublesSketch",\n  "name" : <output_name>,\n  "fieldName" : <metric_name>,\n  "k": <parameter that controls size and accuracy>\n }\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"type")),(0,o.kt)("td",{parentName:"tr",align:null},'Either "KllFloatsSketch" or "KllDoublesSketch"'),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"A String for the output (result) name of the calculation."),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"fieldName")),(0,o.kt)("td",{parentName:"tr",align:null},"String for the name of the input field, which may contain sketches or raw numeric values."),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"k")),(0,o.kt)("td",{parentName:"tr",align:null},"Parameter that determines the accuracy and size of the sketch. Higher k means higher accuracy but more space to store sketches. Must be from 8 to 65535. See ",(0,o.kt)("a",{parentName:"td",href:"https://datasketches.apache.org/docs/KLL/KLLAccuracyAndSize.html"},"KLL Sketch Accuracy and Size"),"."),(0,o.kt)("td",{parentName:"tr",align:null},"no, defaults to 200")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"maxStreamLength")),(0,o.kt)("td",{parentName:"tr",align:null},"This parameter defines the number of items that can be presented to each sketch before it may need to move from off-heap to on-heap memory. This is relevant to query types that use off-heap memory, including ",(0,o.kt)("a",{parentName:"td",href:"/docs/31.0.1/querying/topnquery"},"TopN")," and ",(0,o.kt)("a",{parentName:"td",href:"/docs/31.0.1/querying/groupbyquery"},"GroupBy"),". Ideally, should be set high enough such that most sketches can stay off-heap."),(0,o.kt)("td",{parentName:"tr",align:null},"no, defaults to 1000000000")))),(0,o.kt)("h2",{id:"post-aggregators"},"Post aggregators"),(0,o.kt)("h3",{id:"quantile"},"Quantile"),(0,o.kt)("p",null,"This returns an approximation to the value that would be preceded by a given fraction of a hypothetical sorted version of the input stream."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "KllDoublesSketchToQuantile",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a KllDoublesSketch (fieldAccess or another post aggregator)>,\n  "fraction" : <fractional position in the hypothetical sorted stream, number from 0 to 1 inclusive>\n}\n')),(0,o.kt)("h3",{id:"quantiles"},"Quantiles"),(0,o.kt)("p",null,"This returns an array of quantiles corresponding to a given array of fractions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "KllDoublesSketchToQuantiles",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a KllDoublesSketch (fieldAccess or another post aggregator)>,\n  "fractions" : <array of fractional positions in the hypothetical sorted stream, number from 0 to 1 inclusive>\n}\n')),(0,o.kt)("h3",{id:"histogram"},"Histogram"),(0,o.kt)("p",null,"This returns an approximation to the histogram given an array of split points that define the histogram bins or a number of bins (not both). An array of ",(0,o.kt)("i",null,"m")," unique, monotonically increasing split points divide the real number line into ",(0,o.kt)("i",null,"m+1")," consecutive disjoint intervals. The definition of an interval is inclusive of the left split point and exclusive of the right split point. If the number of bins is specified instead of split points, the interval between the minimum and maximum values is divided into the given number of equally-spaced bins."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "KllDoublesSketchToHistogram",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a KllDoublesSketch (fieldAccess or another post aggregator)>,\n  "splitPoints" : <array of split points (optional)>,\n  "numBins" : <number of bins (optional, defaults to 10)>\n}\n')),(0,o.kt)("h3",{id:"rank"},"Rank"),(0,o.kt)("p",null,"This returns an approximation to the rank of a given value that is the fraction of the distribution less than that value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "KllDoublesSketchToRank",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a KllDoublesSketch (fieldAccess or another post aggregator)>,\n  "value" : <value>\n}\n')),(0,o.kt)("h3",{id:"cdf"},"CDF"),(0,o.kt)("p",null,"This returns an approximation to the Cumulative Distribution Function given an array of split points that define the edges of the bins. An array of ",(0,o.kt)("i",null,"m")," unique, monotonically increasing split points divide the real number line into ",(0,o.kt)("i",null,"m+1")," consecutive disjoint intervals. The definition of an interval is inclusive of the left split point and exclusive of the right split point. The resulting array of fractions can be viewed as ranks of each split point with one additional rank that is always 1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "KllDoublesSketchToCDF",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a KllDoublesSketch (fieldAccess or another post aggregator)>,\n  "splitPoints" : <array of split points>\n}\n')),(0,o.kt)("h3",{id:"sketch-summary"},"Sketch Summary"),(0,o.kt)("p",null,"This returns a summary of the sketch that can be used for debugging. This is the result of calling toString() method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "KllDoublesSketchToString",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a KllDoublesSketch (fieldAccess or another post aggregator)>\n}\n')))}m.isMDXComponent=!0}}]);