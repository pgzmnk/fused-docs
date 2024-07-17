"use strict";(self.webpackChunkfused_docs=self.webpackChunkfused_docs||[]).push([[5808],{7494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(4848),a=n(8453);const o={},i="Notion",r={id:"basics/out/notion",title:"Notion",description:"Embed responsive maps into your Notion pages to significantly enhance the utility and interactivity of your documentation, project plans, internal apps, or any other type of content you manage within Notion.",source:"@site/docs/basics/out/notion.md",sourceDirName:"basics/out",slug:"/basics/out/notion",permalink:"/fused-docs/basics/out/notion",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MotherDuck",permalink:"/fused-docs/basics/out/motherduck"},next:{title:"QGIS",permalink:"/fused-docs/basics/out/qgis"}},c={},l=[{value:"Step 1. Generate a signed URL for a UDF",id:"step-1-generate-a-signed-url-for-a-udf",level:2},{value:"Step 2. Create a Leaflet HTML map",id:"step-2-create-a-leaflet-html-map",level:2},{value:"Vector map",id:"vector-map",level:3},{value:"Raster map",id:"raster-map",level:3},{value:"Step 3. Upload the HTML file to S3",id:"step-3-upload-the-html-file-to-s3",level:2},{value:"Step 4. Embed the map into Notion",id:"step-4-embed-the-map-into-notion",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"notion",children:"Notion"}),"\n",(0,s.jsx)(t.p,{children:"Embed responsive maps into your Notion pages to significantly enhance the utility and interactivity of your documentation, project plans, internal apps, or any other type of content you manage within Notion."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://fused-magic.s3.us-west-2.amazonaws.com/docs_assets/a_notion.png",alt:"alt text"})}),"\n",(0,s.jsx)(t.p,{children:"To render a map into a Notion page you'll embed an HTML map that you can host on AWS S3."}),"\n",(0,s.jsx)(t.h2,{id:"step-1-generate-a-signed-url-for-a-udf",children:"Step 1. Generate a signed URL for a UDF"}),"\n",(0,s.jsxs)(t.p,{children:["First, on Workbench, create and save a UDF that successfully renders in ",(0,s.jsx)(t.code,{children:"Tile"}),' mode. Under the "Settings" tab, click "Share" to ',(0,s.jsx)(t.a,{href:"/basics/core-concepts/#generate-endpoints-with-workbench",children:"generate a signed URL"})," that enables running the specific URL via HTTP requests. Copy the generated ",(0,s.jsx)(t.code,{children:"HTTP"})," URL which you will use in the next step."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://fused-magic.s3.us-west-2.amazonaws.com/docs_assets/snippets_share.png",alt:"Alt text"})}),"\n",(0,s.jsx)(t.h2,{id:"step-2-create-a-leaflet-html-map",children:"Step 2. Create a Leaflet HTML map"}),"\n",(0,s.jsxs)(t.p,{children:["On your local system, create a ",(0,s.jsx)(t.code,{children:".html"})," file following the template below."]}),"\n",(0,s.jsx)(t.h3,{id:"vector-map",children:"Vector map"}),"\n",(0,s.jsxs)(t.p,{children:["If rendering a vector map, ensure the URL string is suffixed with ",(0,s.jsx)(t.code,{children:"?dtype_out_vector=mvt"})," and use the following lines to render it as a ",(0,s.jsx)(t.code,{children:"vectorGrid"})," layer."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"const url = `https://www.fused.io/server/v1/realtime-shared/******/run/tiles/{z}/{x}/{y}?dtype_out_vector=mvt`\nL.vectorGrid.protobuf(mvtUrl, {}).addTo(map);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"raster-map",children:"Raster map"}),"\n",(0,s.jsxs)(t.p,{children:["If rendering a vector map, ensure the URL string is suffixed with ",(0,s.jsx)(t.code,{children:"?dtype_out_raster=png"})," and use the following lines to render it as a ",(0,s.jsx)(t.code,{children:"tileLayer"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"const url = `https://www.fused.io/server/v1/realtime-shared/******/run/tiles/{z}/{x}/{y}?dtype_out_raster=png`\nL.tileLayer(url, {maxZoom: 19}).addTo(map);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This template uses the Leaflet javascript package to create a map, and introduces a basemap ",(0,s.jsx)(t.code,{children:"tileLayer"})," and a custom ",(0,s.jsx)(t.code,{children:"vectorGrid"})," layer. Modify accordingly."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n  <head>\n    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />\n    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />\n    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>\n    <script src="https://unpkg.com/leaflet.vectorgrid@latest/dist/Leaflet.VectorGrid.bundled.js"><\/script>\n    <style>\n      #map {position: absolute; top: 0; right: 0; bottom: 0; left: 0;}\n    </style>\n  </head>\n  <body>\n    <div id="map">\n    </div>\n    <script>\n      const map = L.map(\'map\').setView([0, 0], 1);\n      // Basemap\n      L.tileLayer(\'https://tile.openstreetmap.org/{z}/{x}/{y}.png\', {\n        maxZoom: 19,\n        attribution: \'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>\'\n      }).addTo(map);\n\n      // Vector map\n      const url = `https://app.fused.io/server/v1/realtime-shared/********/run/tiles/{z}/{x}/{y}?dtype_out_vector=mvt`;\n      L.vectorGrid.protobuf(url, {}).addTo(map);\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"step-3-upload-the-html-file-to-s3",children:"Step 3. Upload the HTML file to S3"}),"\n",(0,s.jsxs)(t.p,{children:["Upload the ",(0,s.jsx)(t.code,{children:".html"})," file to an S3 bucket and set public access permissions. Get the object's URL, which you'll embed into Notion in the next step."]}),"\n",(0,s.jsx)(t.p,{children:"A sample object URL looks like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"https://fused-magic.s3.us-west-2.amazonaws.com/username/notion_test_map.html\n"})}),"\n",(0,s.jsx)(t.h2,{id:"step-4-embed-the-map-into-notion",children:"Step 4. Embed the map into Notion"}),"\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.code,{children:"+"})," that appears when you hover on a new line and select embed, or simply type ",(0,s.jsx)(t.code,{children:"/embed"}),". Paste the map's URL in the menu that appears."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://fused-magic.s3.us-west-2.amazonaws.com/docs_assets/gifs/notion2.gif",alt:"Alt text"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://fusedio.notion.site/Demo-Overture-Dataset-Technical-Documentation-8b4138aa56a8483890a93febcc2f2f7f",children:"This Notion Page"})," shows what a sample Notion page looks like with an embedded map."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(6540);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);