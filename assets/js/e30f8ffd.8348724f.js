"use strict";(self.webpackChunkfused_docs=self.webpackChunkfused_docs||[]).push([[8953],{7483:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>r,metadata:()=>h,toc:()=>o});var l=i(4848),s=i(8453),n=i(8987);i(1023),i(290);const r={title:"Shapefile",sidebar_label:"Shapefile",path:"basics/in/shapefile/shapefile",nb_path:"basics/in/shapefile.ipynb",github:"https://github.com/fusedio//fused-docs/blob/main/docs/basics/in/shapefile.ipynb",colab:"https://githubtocolab.com/fusedio//fused-docs/blob/main/docs/basics/in/shapefile.ipynb",description:"Load Shapefile data with Fused!"},d="Shapefile",h={id:"basics/in/shapefile/Shapefile",title:"Shapefile",description:"Load Shapefile data with Fused!",source:"@site/docs/basics/in/shapefile/Shapefile.mdx",sourceDirName:"basics/in/shapefile",slug:"/basics/in/shapefile/",permalink:"/fused-docs/basics/in/shapefile/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Shapefile",sidebar_label:"Shapefile",path:"basics/in/shapefile/shapefile",nb_path:"basics/in/shapefile.ipynb",github:"https://github.com/fusedio//fused-docs/blob/main/docs/basics/in/shapefile.ipynb",colab:"https://githubtocolab.com/fusedio//fused-docs/blob/main/docs/basics/in/shapefile.ipynb",description:"Load Shapefile data with Fused!"},sidebar:"tutorialSidebar",previous:{title:"Planetary Computer",permalink:"/fused-docs/basics/in/pc/"},next:{title:"Transform data",permalink:"/fused-docs/basics/transform"}},c={},o=[];function a(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.A,{githubUrl:"https://github.com/fusedio//fused-docs/blob/main/docs/basics/in/shapefile.ipynb",colabUrl:"https://githubtocolab.com/fusedio//fused-docs/blob/main/docs/basics/in/shapefile.ipynb"}),"\n",(0,l.jsx)(e.h1,{id:"shapefile",children:"Shapefile"}),"\n",(0,l.jsx)(e.p,{children:"Load shapefiles with GeoPandas."}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"#!pip install fused -q\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'import fused\n\n\n@fused.udf\ndef udf():\n    import geopandas as gpd\n\n    # Shape file as zip\n    url = "https://www2.census.gov/geo/tiger/TIGER_RD18/STATE/11_DISTRICT_OF_COLUMBIA/11/tl_rd22_11_bg.zip"\n    gdf = gpd.read_file(url)\n    return gdf\n\n\ngdf = fused.run(udf=udf, engine="local")\ngdf.head()\n'})}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"right"}}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"STATEFP"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"COUNTYFP"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"TRACTCE"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"BLKGRPCE"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"GEOID"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"NAMELSAD"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"MTFCC"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"FUNCSTAT"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"ALAND"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"AWATER"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"INTPTLAT"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"INTPTLON"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"geometry"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"11"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"10800"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"110010108001"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Block Group 1"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"G5030"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"S"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"112810"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"38.9006"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"-77.0475"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"POLYGON ((-77.05014 38.90033, -77.05013 38.900..."})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"11"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"10900"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"110010109002"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Block Group 2"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"G5030"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"S"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"2270174"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"2933566"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"38.8132"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"-77.0238"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"POLYGON ((-77.03919 38.80050, -77.03913 38.800..."})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"2"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"11"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"7401"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"110010074011"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Block Group 1"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"G5030"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"S"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1029053"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"200980"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"38.8668"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"-76.9949"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"POLYGON ((-77.00540 38.86879, -77.00341 38.870..."})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"3"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"11"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"7403"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"110010074031"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Block Group 1"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"G5030"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"S"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"126738"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"38.8481"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"-76.9774"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"POLYGON ((-76.98127 38.84662, -76.98098 38.846..."})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"4"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"11"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"7404"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"110010074041"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Block Group 1"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"G5030"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"S"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"360630"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"38.8515"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"-76.9785"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"POLYGON ((-76.98334 38.85337, -76.98277 38.853..."})]})]})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python"})})]})}function g(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(a,{...t})}):a(t)}},1023:(t,e,i)=>{i.d(e,{A:()=>x});i(6540);var l,s=new Uint8Array(16);function n(){if(!l&&!(l="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(s)}const r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const d=function(t){return"string"==typeof t&&r.test(t)};for(var h=[],c=0;c<256;++c)h.push((c+256).toString(16).substr(1));const o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(h[t[e+0]]+h[t[e+1]]+h[t[e+2]]+h[t[e+3]]+"-"+h[t[e+4]]+h[t[e+5]]+"-"+h[t[e+6]]+h[t[e+7]]+"-"+h[t[e+8]]+h[t[e+9]]+"-"+h[t[e+10]]+h[t[e+11]]+h[t[e+12]]+h[t[e+13]]+h[t[e+14]]+h[t[e+15]]).toLowerCase();if(!d(i))throw TypeError("Stringified UUID is invalid");return i};const a=function(t,e,i){var l=(t=t||{}).random||(t.rng||n)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,e){i=i||0;for(var s=0;s<16;++s)e[i+s]=l[s];return e}return o(l)};var g=i(4848);const x=t=>(0,g.jsxs)("div",{style:{backgroundColor:"var(--ifm-background-surface-color)",marginBottom:"var(--ifm-leading)",borderRadius:"var(--ifm-global-radius)",boxShadow:"var(--ifm-global-shadow-lw)",overflow:"hidden",padding:"10px",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace)"},children:[(0,g.jsx)("span",{style:{color:"var(--ifm-color-primary)"},children:"Out: "}),(0,g.jsx)("pre",{style:{margin:"0px",backgroundColor:"inherit"},children:t.children.split("\n").map((t=>(0,g.jsx)("p",{style:{marginBottom:"0px"},children:t},a())))})]})},8987:(t,e,i)=>{i.d(e,{A:()=>n});i(6540);var l=i(8774),s=i(4848);const n=t=>{let{githubUrl:e,colabUrl:i}=t;return(0,s.jsxs)("div",{className:"link-buttons",style:{textAlign:"right"},children:[(0,s.jsx)("br",{}),(0,s.jsx)(l.A,{to:i,children:(0,s.jsx)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open in Colab"})})," ",(0,s.jsx)(l.A,{to:e,children:(0,s.jsx)("img",{src:"https://badgen.net/static/GitHub/Open/blue?icon=github",alt:"Open in GitHub"})})]})}},290:(t,e,i)=>{i(6540);var l=i(3259),s=i.n(l),n=(i(2303),i(4848));s()({loader:()=>i.e(1236).then(i.bind(i,1236)),loading:t=>{let{timedOut:e}=t;return e?(0,n.jsx)("blockquote",{children:"Error: Loading Plotly timed out."}):(0,n.jsx)("div",{children:"loading..."})},timeout:1e4})},8453:(t,e,i)=>{i.d(e,{R:()=>r,x:()=>d});var l=i(6540);const s={},n=l.createContext(s);function r(t){const e=l.useContext(n);return l.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),l.createElement(n.Provider,{value:e},t.children)}}}]);