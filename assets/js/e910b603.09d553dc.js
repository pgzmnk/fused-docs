"use strict";(self.webpackChunkfused_docs=self.webpackChunkfused_docs||[]).push([[597],{7942:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=a(4848),s=a(8453);const i={},r="Felt",d={id:"basics/out/felt",title:"Felt",description:"alt text",source:"@site/docs/basics/out/felt.md",sourceDirName:"basics/out",slug:"/basics/out/felt",permalink:"/fused-docs/basics/out/felt",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DuckDB",permalink:"/fused-docs/basics/out/duckdb"},next:{title:"Geemap",permalink:"/fused-docs/basics/out/geemap/"}},o={},l=[{value:"1. Generate a signed URL for a UDF",id:"1-generate-a-signed-url-for-a-udf",level:2},{value:"2. Load data into Felt",id:"2-load-data-into-felt",level:2},{value:"Raster Tiles",id:"raster-tiles",level:3},{value:"Vector",id:"vector",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"felt",children:"Felt"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://fused-magic.s3.us-west-2.amazonaws.com/docs_assets/gifs/felt_fused.gif",alt:"alt text"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://felt.com/",children:"Felt"})," is an interactive and collaborative map making platform. Teams use it to quickly create stunning map visualizations - without needing to move data around nor install software."]}),"\n",(0,n.jsxs)(t.p,{children:["Felt supports a number of ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=zgadqdMMYp0&ab_channel=Felt",children:"file formats"}),", some of which can originate from hosted URLs. Fused UDFs can be configured to return data in some of those formats - all it takes is a simple URL call."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:a(4822).A+"",width:"2348",height:"1440"})}),"\n",(0,n.jsx)(t.p,{children:"To follow along, you'll need a Felt account - which you can create for free."}),"\n",(0,n.jsx)(t.p,{children:"To load data from Fused, you'll first generate a signed UDF URL."}),"\n",(0,n.jsx)(t.h2,{id:"1-generate-a-signed-url-for-a-udf",children:"1. Generate a signed URL for a UDF"}),"\n",(0,n.jsxs)(t.p,{children:['First, on Workbench, create and save a UDF. Under the "Settings" tab, click "Share" to ',(0,n.jsx)(t.a,{href:"/basics/utilities/#generate-endpoints-with-workbench",children:"generate a signed URL"})," that can be called via HTTP requests."]}),"\n",(0,n.jsxs)(t.p,{children:["Modify the generated ",(0,n.jsx)(t.code,{children:"HTTP"})," URL depending on the data type, as detailed below. You can optionally pass UDF parameters as URL-encoded strings, which can be configured to change based on query input."]}),"\n",(0,n.jsx)(t.h2,{id:"2-load-data-into-felt",children:"2. Load data into Felt"}),"\n",(0,n.jsxs)(t.p,{children:['There\'s 2 ways to load data from Fused into Felt, depending on whether the UDF returns a raster or vector data type. Both are passed through the "Upload from URL" modal, but require particular URL structures. Read the ',(0,n.jsx)(t.a,{href:"https://feltmaps.notion.site/Upload-Anything-b26d739e80184127872faa923b55d232#3e37f06bc38c4971b435fbff2f4da6cb",children:"Felt docs"})," for a deeper dive into this feature."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:a(1534).A+"",width:"2054",height:"716"})}),"\n",(0,n.jsx)(t.h3,{id:"raster-tiles",children:"Raster Tiles"}),"\n",(0,n.jsx)(t.p,{children:"Dynamically render XYZ raster tiles on the Felt map."}),"\n",(0,n.jsxs)(t.p,{children:["As an example, the ",(0,n.jsx)(t.a,{href:"https://github.com/fusedio/udfs/tree/main/public/Sentinel_Tile_Example",children:'"Sentinel Tile Example"'})," public UDF returns an XYZ tile URL of NDVI from the Sentinel dataset. Create a new instance of it on your workbench and ensure it successfully renders data under ",(0,n.jsx)(t.code,{children:"Tile"})," mode. Next, generate a shared URL and moddify it as such:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Set ",(0,n.jsx)(t.code,{children:"dtype_out_raster"})," to ",(0,n.jsx)(t.code,{children:"png"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Set replace the values after ",(0,n.jsx)(t.code,{children:"/run/tiles"})," with the ",(0,n.jsx)(t.code,{children:"/{z}/{x}/{y}"})," template."]}),"\n",(0,n.jsx)(t.li,{children:"Set UDF parameters as needed."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"https://www.fused.io/server/v1/realtime-shared/da71c7bf79376f2e88b37be9ecd2679f2e40a5b79f9b0f2c75e7ea9a3f0c5171/run/tiles/{z}/{x}/{y}?dtype_out_raster=png\n"})}),"\n",(0,n.jsx)(t.p,{children:"This should render the raster output tiles on the map. This example shows NDVI on the area surrounding the Panama Canal."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:a(2911).A+"",width:"2046",height:"1798"})}),"\n",(0,n.jsx)(t.h3,{id:"vector",children:"Vector"}),"\n",(0,n.jsx)(t.p,{children:"Load vector data in a one-off manner onto the Felt map."}),"\n",(0,n.jsxs)(t.p,{children:["As an example, the ",(0,n.jsx)(t.a,{href:"https://github.com/fusedio/udfs/tree/main/public/single_route",children:'"Single Route"'})," public UDF returns a composite vector line of driving directions between an origin and destination locations. Create a new instance of it on your workbench and ensure it successfully renders data under ",(0,n.jsx)(t.code,{children:"File"})," mode. Next, generate a shared URL and modify it as such:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Set ",(0,n.jsx)(t.code,{children:"dtype_out_vector"})," to ",(0,n.jsx)(t.code,{children:"csv"})," or ",(0,n.jsx)(t.code,{children:"parquet"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Set UDF parameters as needed."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"https://www.fused.io/server/v1/realtime-shared/4f8fe6b81811ce011d7045b9fffbcfb43663637a4c626955821566fe62e6fb57/run/file?dtype_out_vector=csv&lat_start=35.0154145&lng_start=-114.2253804&lat_end=33.9422&lng_end=-114.4036\n"})}),"\n",(0,n.jsx)(t.p,{children:'Click "Upload from URL", paste the URL, and click "Add to map".'}),"\n",(0,n.jsx)(t.p,{children:"This should load the data and render it on the map."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:a(2996).A+"",width:"1034",height:"1442"})}),"\n",(0,n.jsx)(t.p,{children:"Note that once the data is loaded, it's cached in the Felt platform so it won't be affected by modifications to the UDF."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},2996:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-1-6df1e9214ab9a6f45c777862f8f53a68.png"},2911:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-2-21be2edb594e5eeacb505208244af1ad.png"},4822:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-3-686db98f8b6739354b164cd76ca7f8fa.png"},1534:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-8b288e9e45dc2ced665b091e3fd03049.png"},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>d});var n=a(6540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);