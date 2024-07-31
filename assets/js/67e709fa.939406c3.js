"use strict";(self.webpackChunkfused_docs=self.webpackChunkfused_docs||[]).push([[8172],{3549:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(4848),s=t(8453);const r={},i="DeckGL (HTML)",o={id:"basics/out/deckgl",title:"DeckGL (HTML)",description:"DeckGL is a highly performant framework for large-scale data visualization.",source:"@site/docs/basics/out/deckgl.md",sourceDirName:"basics/out",slug:"/basics/out/deckgl",permalink:"/basics/out/deckgl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get data out",permalink:"/basics/out"},next:{title:"DuckDB",permalink:"/basics/out/duckdb"}},l={},c=[{value:"1. Generate a signed URL for a UDF",id:"1-generate-a-signed-url-for-a-udf",level:2},{value:"2. Create a DeckGL HTML map",id:"2-create-a-deckgl-html-map",level:2},{value:"a. H3HexagonLayer",id:"a-h3hexagonlayer",level:3},{value:"Vector Tile layers",id:"vector-tile-layers",level:3},{value:"Raster Tile layers",id:"raster-tile-layers",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"deckgl-html",children:"DeckGL (HTML)"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://deck.gl/",children:"DeckGL"})," is a highly performant framework for large-scale data visualization."]}),"\n",(0,a.jsx)(n.p,{children:"This guide shows how to load data from Fused into DeckGL maps created from a single standalone HTML page. It contains example for vector, raster, and H3."}),"\n",(0,a.jsx)(n.p,{children:"That said, DeckGL is React-friendly and can be used to create powerful applications. In fact, the Fused Workbench map is DeckGL."}),"\n",(0,a.jsx)(n.p,{children:"You'll first generate a signed UDF URL and render it on an HTML map."}),"\n",(0,a.jsx)(n.h2,{id:"1-generate-a-signed-url-for-a-udf",children:"1. Generate a signed URL for a UDF"}),"\n",(0,a.jsxs)(n.p,{children:["First, on Workbench, create and save a UDF that successfully renders in ",(0,a.jsx)(n.code,{children:"Tile"}),' mode. Under the "Settings" tab, click "Share" to ',(0,a.jsx)(n.a,{href:"/basics/core-concepts/#generate-endpoints-with-workbench",children:"generate a signed URL"})," that can be called via HTTP requests."]}),"\n",(0,a.jsxs)(n.p,{children:["If looking to render a ",(0,a.jsx)(n.a,{href:"http://localhost:3000/basics/core-concepts/#file--tile",children:"Tile"})," map, modify the generated ",(0,a.jsx)(n.code,{children:"HTTP"})," URL to run as a ",(0,a.jsx)(n.a,{href:"/basics/utilities/#call-udfs-with-http-requests",children:"Tile"})," by setting the ",(0,a.jsx)(n.code,{children:"tiles/"})," path paramater, followed by templated ",(0,a.jsx)(n.code,{children:"/{z}/{x}/{y}"})," path. You can optionally pass UDF parameters as UDF-encoded strings, which can be configured to change based on UI user input."]}),"\n",(0,a.jsx)(n.h2,{id:"2-create-a-deckgl-html-map",children:"2. Create a DeckGL HTML map"}),"\n",(0,a.jsxs)(n.p,{children:["Create an ",(0,a.jsx)(n.code,{children:".html"})," file following this template. This code creates a DeckGL map then introduces a layer that renders data from the specified Fused endpoint. This is a basic example. Read on to see how to configure ",(0,a.jsx)(n.code,{children:"H3HexagonLayer"}),", and raster layers."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <title>Fused DeckGL</title>\n    <meta\n      name="viewport"\n      content="initial-scale=1,maximum-scale=1,user-scalable=no"\n    />\n\n    <script src="https://unpkg.com/@deck.gl/core@^9.0.0/dist.min.js"><\/script>\n    <script src="https://unpkg.com/@deck.gl/layers@^9.0.0/dist.min.js"><\/script>\n    <script src="https://unpkg.com/@deck.gl/geo-layers@^9.0.0/dist.min.js"><\/script>\n    <script src="https://unpkg.com/@deck.gl/carto@^9.0.0/dist.min.js"><\/script>\n    <script src="https://unpkg.com/h3-js"><\/script>\n    <script src="https://unpkg.com/deck.gl@latest/dist.min.js"><\/script>\n    <script src="https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.js"><\/script>\n    <link\n      href="https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.css"\n      rel="stylesheet"\n    />\n    <style>\n      body {\n        width: 100vw;\n        height: 100vh;\n        margin: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="map"></div>\n    <script>\n      const { DeckGL, H3HexagonLayer, GeoJsonLayer, BitmapLayer, TileLayer } = deck;\n\n      new DeckGL({\n        mapboxApiAccessToken:\n          "pk.eyJ1IjoiZXN0b3JudWRhbWUiLCJhIjoiY2xneTh0Y3czMDczODNmcG11ZTNuazZvbSJ9.QFTdgqDlAFQKaJ_QLA35ew",\n        mapStyle: "mapbox://styles/mapbox/dark-v10",\n        initialViewState: {\n          longitude: -122.417759,\n          latitude: 37.776452,\n          zoom: 12,\n        },\n        controller: true,\n        layers: [\n          new H3HexagonLayer({\n            id: "H3HexagonLayer",\n            data: "https://www.fused.io/server/v1/realtime-shared/f393efed9c75425365f2f00254d37cb15166e22fc5defabcc7ee6fd9e2d7a3b4/run/file?dtype_out_vector=json",\n            extruded: true,\n            getElevation: (d) => d.count,\n            elevationScale: 20,\n            filled: true,\n            stroked: true,\n            getFillColor: (d) => [255, (1 - d.count / 500) * 255, 0],\n            getHexagon: (d) => d.hex,\n            getLineColor: [255, 255, 255],\n            getLineWidth: 2,\n            lineWidthUnits: "pixels",\n          }),\n        ],\n      });\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,a.jsx)(n.h3,{id:"a-h3hexagonlayer",children:"a. H3HexagonLayer"}),"\n",(0,a.jsxs)(n.p,{children:["Use the following snippet to introduce an ",(0,a.jsx)(n.a,{href:"https://deck.gl/docs/api-reference/geo-layers/h3-hexagon-layer",children:(0,a.jsx)(n.code,{children:"H3HexagonLayer"})}),", which should look similar to this."]}),"\n",(0,a.jsx)("iframe",{src:"/img/deckgl_h3.html",height:"400px",width:"100%",scrolling:"no"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'new H3HexagonLayer({\n    id: "H3HexagonLayer",\n    data: "https://www.fused.io/server/v1/realtime-shared/f393efed9c75425365f2f00254d37cb15166e22fc5defabcc7ee6fd9e2d7a3b4/run/file?dtype_out_vector=json",\n    extruded: true,\n    getElevation: (d) => d.count,\n    elevationScale: 20,\n    filled: true,\n    stroked: true,\n    getFillColor: (d) => [255, (1 - d.count / 500) * 255, 0],\n    getHexagon: (d) => d.hex,\n    getLineColor: [255, 255, 255],\n    getLineWidth: 2,\n    lineWidthUnits: "pixels",\n}),\n'})}),"\n",(0,a.jsx)(n.h3,{id:"vector-tile-layers",children:"Vector Tile layers"}),"\n",(0,a.jsxs)(n.p,{children:["Vector Tile layers can be created by placing a ",(0,a.jsx)(n.a,{href:"https://deck.gl/docs/api-reference/layers/geojson-layer",children:(0,a.jsx)(n.code,{children:"GeoJsonLayer"})})," sublayer within a ",(0,a.jsx)(n.a,{href:"https://deck.gl/docs/api-reference/geo-layers/tile-layer",children:(0,a.jsx)(n.code,{children:"TileLayer"})}),". Use the following snippet to introduce a vector layer, which should look similar to this."]}),"\n",(0,a.jsxs)(n.p,{children:["The layer in the sample map comes from ",(0,a.jsx)(n.a,{href:"https://github.com/fusedio/udfs/tree/main/public/Overture_Maps_Example",children:"Overture Buildings UDF"}),"."]}),"\n",(0,a.jsx)("iframe",{src:"/img/deckgl_vector.html",height:"400px",width:"100%",scrolling:"no"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'new TileLayer({\n  // Use geojsonlayer inside of tilelayer. This is instead of MVT Layer, which has optimizations that can cause clipping when polygon extends beyond Tile area.\n  id: "VectorTileLayer",\n  data: "https://www.fused.io/server/v1/realtime-shared/3aadf7a892ace2f6efab8da9720f1da241fc4403e7722f501ab45503e094a13d/run/tiles/{z}/{x}/{y}?dtype_out_vector=geojson",\n  maxZoom: 19,\n  minZoom: 0,\n\n  renderSubLayers: (props) => {\n    const { boundingBox } = props.tile;\n\n    return new GeoJsonLayer(props, {\n      data: props.data,\n      stroked: true,\n      getLineColor: [0, 255, 10],\n      getLineWidth: 10,\n      getFillColor: [0, 40, 0, 0.5],\n      getPointRadius: 4,\n      getLineWidth: 5,\n      pointRadiusUnits: "pixels",\n      bounds: [\n        boundingBox[0][0],\n        boundingBox[0][1],\n        boundingBox[1][0],\n        boundingBox[1][1],\n      ],\n    });\n  },\n});\n'})}),"\n",(0,a.jsx)(n.h3,{id:"raster-tile-layers",children:"Raster Tile layers"}),"\n",(0,a.jsxs)(n.p,{children:["Raster Tile layers can be created by placing a ",(0,a.jsx)(n.a,{href:"https://deck.gl/docs/api-reference/layers/bitmap-layer",children:(0,a.jsx)(n.code,{children:"BitmapLayer"})})," sublayer within a ",(0,a.jsx)(n.a,{href:"https://deck.gl/docs/api-reference/geo-layers/tile-layer",children:(0,a.jsx)(n.code,{children:"TileLayer"})}),". Use the following snippet to introduce a raster layer, which should look similar to this. The layer in the sample map comes from the ",(0,a.jsx)(n.a,{href:"https://github.com/fusedio/udfs/tree/main/public/NAIP_Tile_Example",children:"NAIP Tile UDF"}),"."]}),"\n",(0,a.jsx)("iframe",{src:"/img/deckgl_raster.html",height:"300px",width:"100%",scrolling:"no"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'new TileLayer({\n  id: "RasterTileLayer",\n  data: "https://staging.fused.io/server/v1/realtime-shared/3a6030eb4fa9c70780bba1b62cdfffe2eca24745db78aba62ddd96ebb0f6e0cc/run/tiles/{z}/{x}/{y}?dtype_out_raster=png",\n  maxZoom: 19,\n  minZoom: 0,\n\n  renderSubLayers: (props) => {\n    const { boundingBox } = props.tile;\n\n    return new BitmapLayer(props, {\n      data: null,\n      image: props.data,\n      bounds: [\n        boundingBox[0][0],\n        boundingBox[0][1],\n        boundingBox[1][0],\n        boundingBox[1][1],\n      ],\n    });\n  },\n  pickable: true,\n});\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(6540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);