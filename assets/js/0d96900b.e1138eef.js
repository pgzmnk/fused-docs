"use strict";(self.webpackChunkfused_docs=self.webpackChunkfused_docs||[]).push([[8347],{7340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(4848),s=n(8453);const r={},o="Mapbox (HTML)",i={id:"basics/out/mapbox",title:"Mapbox (HTML)",description:"Bring your apps to life with embedded responsive maps that dynamically respond to user input.",source:"@site/docs/basics/out/mapbox.md",sourceDirName:"basics/out",slug:"/basics/out/mapbox",permalink:"/fused-docs/basics/out/mapbox",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lonboard",permalink:"/fused-docs/basics/out/lonboard/"},next:{title:"Excel",permalink:"/fused-docs/basics/out/microsoft_excel"}},l={},c=[{value:"1. Generate a signed URL for a UDF",id:"1-generate-a-signed-url-for-a-udf",level:2},{value:"2. Create a Mapbox HTML map",id:"2-create-a-mapbox-html-map",level:2},{value:"a. Vector Tile layers",id:"a-vector-tile-layers",level:3},{value:"b. Raster Tile layers",id:"b-raster-tile-layers",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"mapbox-html",children:"Mapbox (HTML)"}),"\n",(0,a.jsx)(t.p,{children:"Bring your apps to life with embedded responsive maps that dynamically respond to user input."}),"\n",(0,a.jsxs)(t.p,{children:["This guide shows how to create a web map using the ",(0,a.jsx)(t.a,{href:"https://docs.mapbox.com/mapbox-gl-js/example/",children:"Mapbox GL JS"})," library to display vector or raster tiles from a custom tile server provided by Fused."]}),"\n",(0,a.jsxs)(t.p,{children:["You'll first generate a signed UDF URL and render it on an HTML map. You can then use the HTML map in a low-code app like Retool or render it as an ",(0,a.jsx)(t.code,{children:"iframe"})," in an app such as Notion."]}),"\n",(0,a.jsx)(t.h2,{id:"1-generate-a-signed-url-for-a-udf",children:"1. Generate a signed URL for a UDF"}),"\n",(0,a.jsxs)(t.p,{children:["First, on Workbench, create and save a UDF that successfully renders in ",(0,a.jsx)(t.code,{children:"Tile"}),' mode. Under the "Settings" tab, click "Share" to ',(0,a.jsx)(t.a,{href:"/basics/core-concepts/#generate-endpoints-with-workbench",children:"generate a signed URL"})," that can be called via HTTP requests."]}),"\n",(0,a.jsxs)(t.p,{children:["If looking to render a ",(0,a.jsx)(t.a,{href:"http://localhost:3000/basics/core-concepts/#file--tile",children:"Tile"})," map, modify the generated ",(0,a.jsx)(t.code,{children:"HTTP"})," URL to run as a ",(0,a.jsx)(t.a,{href:"/basics/utilities/#call-udfs-with-http-requests",children:"Tile"})," by setting the ",(0,a.jsx)(t.code,{children:"tiles/"})," path paramater, followed by templated ",(0,a.jsx)(t.code,{children:"/{z}/{x}/{y}"})," path. You can optionally pass UDF parameters as UDF-encoded strings, which can be configured to change based on UI user input."]}),"\n",(0,a.jsx)(t.h2,{id:"2-create-a-mapbox-html-map",children:"2. Create a Mapbox HTML map"}),"\n",(0,a.jsxs)(t.p,{children:["Create an ",(0,a.jsx)(t.code,{children:".html"})," file following this template. This code creates a mapbox map, adds a source, then a layer that renders data from that source. This is a basic example. Read on to see how to configure vector and raster layers."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n<title>Add a vector tile source</title>\n<meta name=\"viewport\" content=\"initial-scale=1,maximum-scale=1,user-scalable=no\">\n<link href=\"https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.css\" rel=\"stylesheet\">\n<script src=\"https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.js\"><\/script>\n<style>\nbody { margin: 0; padding: 0; }\n#map { position: absolute; top: 0; bottom: 0; width: 100%; }\n</style>\n</head>\n<body>\n<div id=\"map\"></div>\n<script>\n\tmapboxgl.accessToken = 'pk.eyJ1IjoiZXN0b3JudWRhbWUiLCJhIjoiY2xneTh0Y3czMDczODNmcG11ZTNuazZvbSJ9.QFTdgqDlAFQKaJ_QLA35ew';\n    const map = new mapboxgl.Map({\n        container: 'map',\n        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio\n        style: 'mapbox://styles/mapbox/dark-v10',\n        zoom: 13,\n        center: [-122.447303, 37.753574]\n    });\n\n    // Optionally, pass parameters to the tile source\n    const model = {\n        theme: 'building'\n    }\n\n    map.on('load', () => {\n        map.addSource('fused-vector-source', {\n            'type': 'vector',\n            'tiles': [ // Vector Tile URL that returns mvt (https://docs.mapbox.com/data/tilesets/guides/vector-tiles-standards/)\n                `https://www.fused.io/server/v1/realtime-shared/55ffe996fc2bd635cde3beda7e2632005e228798a1ef333297240b86af7d12a4/run/tiles/{z}/{x}/{y}?dtype_out_vector=mvt&type=${model.theme}`\n            ],\n            'minzoom': 6,\n            'maxzoom': 14\n        });\n        map.addLayer(\n            {\n                'id': 'fused-vector-layer', // Layer ID\n                'type': 'line',\n                'source': 'fused-vector-source', // ID of the tile source created above\n                'source-layer': 'udf', // Important! The source-layer name is 'udf' for all Fused vector tiles\n                'layout': {\n                    'line-cap': 'round',\n                    'line-join': 'round'\n                },\n                'paint': {\n                    'line-opacity': 0.6,\n                    'line-color': 'rgb(53, 175, 109)',\n                    'line-width': 2\n                }\n            }\n        );\n    })\n<\/script>\n\n</body>\n</html>\n\n"})}),"\n",(0,a.jsx)(t.h3,{id:"a-vector-tile-layers",children:"a. Vector Tile layers"}),"\n",(0,a.jsxs)(t.p,{children:["Use the following snippet to introduce a vector layer, which should look similar to this. The layer in the sample map comes from ",(0,a.jsx)(t.a,{href:"https://github.com/fusedio/udfs/tree/main/public/Overture_Maps_Example",children:"Overture Buildings UDF"}),"."]}),"\n",(0,a.jsx)("iframe",{src:"/img/mapbox_vector.html",height:"300px",width:"100%",scrolling:"no"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"<script>\n    map.addSource('fused-vector-source', {\n        'type': 'vector',\n        'tiles': [ // Vector Tile URL that returns mvt (https://docs.mapbox.com/data/tilesets/guides/vector-tiles-standards/)\n            `https://www.fused.io/server/v1/realtime-shared/55ffe996fc2bd635cde3beda7e2632005e228798a1ef333297240b86af7d12a4/run/tiles/{z}/{x}/{y}?dtype_out_vector=mvt&type=${model.theme}`\n        ],\n        'minzoom': 6,\n        'maxzoom': 14\n    });\n    map.addLayer(\n        {\n            'id': 'fused-vector-layer', // Layer ID\n            'type': 'line',\n            'source': 'fused-vector-source', // ID of the tile source created above\n            'source-layer': 'udf', // Important! The source-layer name is 'udf' for Fused vector tiles\n            'layout': {\n                'line-cap': 'round',\n                'line-join': 'round'\n            },\n            'paint': {\n                'line-opacity': 0.6,\n                'line-color': 'rgb(53, 175, 109)',\n                'line-width': 2\n            }\n        }\n    );\n<\/script>\n"})}),"\n",(0,a.jsx)(t.h3,{id:"b-raster-tile-layers",children:"b. Raster Tile layers"}),"\n",(0,a.jsxs)(t.p,{children:["Use the following snippet to introduce a raster layer, which should look similar to this. The layer in the sample map comes from the ",(0,a.jsx)(t.a,{href:"https://github.com/fusedio/udfs/tree/main/public/Solar_Irradiance",children:"Solar Irradiance UDF"}),"."]}),"\n",(0,a.jsx)("iframe",{src:"/img/mapbox_raster.html",height:"300px",width:"100%",scrolling:"no"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"<script>\n    map.addSource('fused-irradiation-source', {\n        'type': 'raster',\n        'tiles': [ // Raster Tile URL that returns png\n            'https://www.fused.io/server/v1/realtime-shared/af0bc71e64075233b731f316988b323ac28658059db9e87388393fe187752501/run/tiles/{z}/{x}/{y}?dtype_out_raster=png'\n        ],\n        'tileSize': 256,\n        'minzoom': 10,\n        'maxzoom': 18\n    });\n    map.addLayer(\n        {\n            'id': 'wms-test-layer',\n            'type': 'raster',\n            'source': 'fused-irradiation-source',\n            'paint': {}\n        },\n        'building' // Place layer under labels, roads and buildings.\n    ); \n<\/script>\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);