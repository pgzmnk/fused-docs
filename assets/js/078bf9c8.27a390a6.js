"use strict";(self.webpackChunkfused_docs=self.webpackChunkfused_docs||[]).push([[8720],{5939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var s=n(4848),a=n(8453),i=n(3650);const r="import pydeck as pdk\nimport streamlit as st\nimport fused_app\nimport geopandas as gpd\n\nst.title(\"Raster to H3\")\n\nASSETS = {\n    \"JRC_GFC2020_V1_S40_E50.tif\": {'url': 's3://fused-asset/gfc2020/JRC_GFC2020_V1_N60_E20.tif', 'latlng': [55, 25]},\n    \"JRC_GFC2020_V1_S40_E60.tif\": {'url': 's3://fused-asset/gfc2020/JRC_GFC2020_V1_S40_E60.tif', 'latlng': [-45, 65]},\n    \"JRC_GFC2020_V1_N40_E130.tif\": {'url': 's3://fused-asset/gfc2020/JRC_GFC2020_V1_N40_E130.tif', 'latlng': [35, 135]},\n    \"JRC_GFC2020_V1_S20_E130.tif\": {'url': 's3://fused-asset/gfc2020/JRC_GFC2020_V1_S20_E130.tif', 'latlng': [-25,135]},\n    \"JRC_GFC2020_V1_N20_E70.tif\": {'url': 's3://fused-asset/gfc2020/JRC_GFC2020_V1_N20_E70.tif', 'latlng': [15, 75]},\n    \"JRC_GFC2020_V1_N10_E40.tif\": {'url': 's3://fused-asset/gfc2020/JRC_GFC2020_V1_N10_E40.tif', 'latlng': [5, 45]},\n    \"JRC_GFC2020_V1_N50_E0.tif\": {'url': 's3://fused-asset/gfc2020/JRC_GFC2020_V1_N50_E0.tif', 'latlng': [45, 5]},\n    \"JRC_GFC2020_V1_N30_W110.tif\": {'url': 's3://fused-asset/gfc2020/JRC_GFC2020_V1_N30_W110.tif', 'latlng': [25, -105]}\n}\n\n\nasset = st.selectbox(\"Select Tiff asset\", ASSETS.keys())\nasset_custom = st.text_input(\"Or pass your own TIFF _(clear this box to return focus to dropdown)_\", None)\nst.write(\"Your TIFF path is\", asset_custom)\nh3_size = st.selectbox(\"Select H3 size\", range(4,8))\n\nst.write(\"You selected:\", ASSETS[asset]['url'])\n\nset_asset = asset_custom or ASSETS[asset]['url']\n\n@st.cache_data\ndef load_data(asset, h3_size=5):\n    df = fused_app.run('d3802030c15910e19d180c88d5b4cd50281e110a42846eba2d5b73cfb6e93bdb', tiff_path = asset, h3_size=h3_size)\n    return df\n\ndf = load_data(set_asset, h3_size=h3_size)\nlat, lng = ASSETS[asset]['latlng']\n\n# Define a layer to display on a map\nlayer = pdk.Layer(\n    \"H3HexagonLayer\",\n    df,\n    pickable=True,\n    stroked=True,\n    filled=True,\n    extruded=False,\n    get_hexagon=\"hex\",\n    get_fill_color=\"[255 - metric*10, 255, metric*10]\", #metric\n    get_line_color=[240, 25, 0],\n    line_width_min_pixels=2,\n)\n\n\n# Render\nst.pydeck_chart(\n    pdk.Deck(\n        map_style=\"mapbox://styles/mapbox/satellite-v9\",\n        initial_view_state=pdk.ViewState(latitude=lat, longitude=lng, zoom=4, bearing=0, pitch=0),\n        layers=[layer],\n        tooltip={\"text\": \"Agg value: {agg_data}\"}\n    )\n)",o={id:"raster-h3",title:"Raster to H3",tags:["raster","H3"],sidebar_position:2},l="Raster to H3: A Deep Dive",d={id:"basics/usecases/raster-h3",title:"Raster to H3",description:"Transforming raster data to the H3 grid system is a powerful technique that offers significant advantages in geospatial data analysis and processing. This conversion process uses DuckDB to aggregate numpy arrays by H3 indices. It opens up new possibilities for efficient raster analysis.",source:"@site/docs/basics/usecases/raster_to_h3.mdx",sourceDirName:"basics/usecases",slug:"/basics/usecases/raster-h3",permalink:"/basics/usecases/raster-h3",draft:!1,unlisted:!1,tags:[{label:"raster",permalink:"/tags/raster"},{label:"H3",permalink:"/tags/h-3"}],version:"current",sidebarPosition:2,frontMatter:{id:"raster-h3",title:"Raster to H3",tags:["raster","H3"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Point in polygon",permalink:"/basics/usecases/point-in-polygon"},next:{title:"Zonal Stats",permalink:"/basics/usecases/zonal-stats"}},c={},u=[{value:"Application",id:"application",level:2},{value:"Earth Observation imagery analysis",id:"earth-observation-imagery-analysis",level:3},{value:"Implementing Raster to H3",id:"implementing-raster-to-h3",level:2},{value:"Implementation steps",id:"implementation-steps",level:3},{value:"Example UDF",id:"example-udf",level:3},{value:"Scaling up with Fused",id:"scaling-up-with-fused",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"\u2b50 Demo app",id:"-demo-app",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"raster-to-h3-a-deep-dive",children:"Raster to H3: A Deep Dive"}),"\n",(0,s.jsx)(t.p,{children:"Transforming raster data to the H3 grid system is a powerful technique that offers significant advantages in geospatial data analysis and processing. This conversion process uses DuckDB to aggregate numpy arrays by H3 indices. It opens up new possibilities for efficient raster analysis."}),"\n",(0,s.jsx)(t.h2,{id:"application",children:"Application"}),"\n",(0,s.jsx)(t.h3,{id:"earth-observation-imagery-analysis",children:"Earth Observation imagery analysis"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Agricultural parcels and field-level data"}),"\n",(0,s.jsx)(t.li,{children:"Global environmental"}),"\n",(0,s.jsx)(t.li,{children:"Land cover and land use change detection"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"implementing-raster-to-h3",children:"Implementing Raster to H3"}),"\n",(0,s.jsx)(t.h3,{id:"implementation-steps",children:"Implementation steps"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Load and chunk the raster into manageable parts"}),"\n",(0,s.jsx)(t.li,{children:"Optionally coarsen the data to reduce resolution and speed up processing"}),"\n",(0,s.jsx)(t.li,{children:"Bin the raster data to H3 indices based on points"}),"\n",(0,s.jsx)(t.li,{children:"Aggregate the data by H3 indices"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"example-udf",children:"Example UDF"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'@fused.udf\ndef udf(\n    tiff_path: str = "s3://fused-asset/gfc2020/JRC_GFC2020_V1_N60_E20.tif",\n    chunk_id: int = 0,\n    x_chunks: int = 1,\n    y_chunks: int = 1,\n    coarsen: int = 100,\n    h3_size=6,\n):\n    import geopandas as gpd\n    import pandas as pd\n    from shapely.geometry import box\n    from utils import chunked_tiff_to_points, run_query\n\n    df_tiff = chunked_tiff_to_points(\n        tiff_path, i=chunk_id, x_chunks=x_chunks, y_chunks=y_chunks, coarsen=coarsen\n    )\n\n    qr = f"""\n        SELECT h3_latlng_to_cell(lat, lng, {h3_size}) AS hex, ARRAY_AGG(data) as agg_data\n        FROM df_tiff\n        group by 1\n      --  order by 1\n\n    """\n\n    df = run_query(qr, return_arrow=True)\n    df = df.to_pandas()\n    df["agg_data"] = df.agg_data.map(lambda x: pd.Series(x).sum())\n    df["hex"] = df["hex"].map(lambda x: hex(x)[2:])\n    df["metric"] = df.agg_data / df.agg_data.max() * 100\n    return df\n\n'})}),"\n",(0,s.jsx)(t.h3,{id:"scaling-up-with-fused",children:"Scaling up with Fused"}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(t.h2,{id:"-demo-app",children:"\u2b50 Demo app"}),"\n","\n","\n",(0,s.jsx)(i.A,{id:"raster-h3",url:"https://staging.fused.io/workbench#app/s/aH4sIAAAAAAAAA6VWbWvjOBD%2BK8L9kPhwG7%2FEbRow3LK7ve5x9KApexxxMIolO6KK5JPkttnS%2F34j2c1L2cuHizFYM6NnHs1oNPKrV0pCvanH1o1UBjUbQstHhDVqyGMueq02iuI1Z8YatNnqq1ZTUuCm2WpqKhssCEyDt25ILnKhzYVhhtNh7t1jbahCRqLbJPd8a%2F00m319mKEMveYCwZN7v99%2FLn67%2BRyHcVh8j4rZOCy%2BpiH4qHJvil4HreKDKRroZDoauRWcY62pGdVVaTGjD%2Fi7S8DHDj8I0IBjw0UNDuZpGqA4XbwFx4gv%2Fz%2FxHv6Q%2BHwMzJdHmO8sMkpOiHnPwSF3AtRRcizq%2BETufQcf4o7T4Cj3nYVenRD2Dn%2FIHEHUV8eIIwCOTyDe4T%2FUWIDGx3hTwJ1Au4Ufstr6OsaahMVfUXQC756DQ2bYYXQehUCeizd7vHPhPMH5hjagKaelWcoXaAUzN0YPrKqQm5J7AeqawcUj3eih7%2FfYomy1kevOhaEvpmCiaQ34%2BFOhBqagjWwVks8CPXy7uUHFsOQUQ5dZMY2AzLYbRU2rBKok%2BLIyUbIhgPALS3snBfVdo3pWzNhG9bf16Lw12KwQ03ba%2Fmpg%2BiopNPtB%2FzO02wRZu0UqLGo6HAcT3%2B874h4R6rCUTHcpmDuuxdztzKIDAfd7Lg%2FyItVPQRbzKzCVuFzRgmCDc0FohbjExIlDNz1AfRxZ6k%2B7giEVUGx7%2B4VqxXBAkglsfhKWUXodhTS6JtEkLCcTki7HJUnDeBJRqAg8jifjS7rEMRiukrJaXtLrZEmWUCZQLFXh0tkHsKPuv37H328WqWwIbjG7NW%2Bz8DMw1GGAoBIB8SEjfYW6pJyhL7RigiKMON501xFhugEBSQHaNW6sL2vK7D148YcdD99P021yS19wLYVTw569Z60fNKx8xEtOswfV0l4HN6h8pGRfVTHODzVQ2qoloLvBXL8rawh41fFluQejLaG1WCdFKblUYITTl6JztKZGsfKXKLTXG5zHrbyw9XXWiTsXHFLRu5jHYwcKULjoSZz1mRGzKtZMFA17oVxnMVj97nifoXsKdaVcVXe%2FD0W5wsr0%2BbL5%2BwLKXrQP5LfQZgMZyj0Yw6GBtuMUetTJI40N5fDDQc%2BfrrcB24cJZhjmxROjz%2BAEpmWW4TuIMysNYaeZgSxmXTFIUfeiqAP0Q8p1Ng7QEvoDE3UG0TbMlKss9Pc43NbrbO6%2Biz2DkZIb1mSvuWf7kO2dufeprtET5i2FRorr2pXpW%2B69dTB%2Fm6hceIGn6D8tU3RNhdHedO5t%2F5d6G9XGDl%2BwUngDgw1WHD5dXr1F4DF903I%2BKxWlwptWtlDe%2FgWPhWeExQkAAA%3D%3D",code:r,requirements:["/pyarrow/pyarrow-17.0.0-cp312-cp312-pyodide_2024_0_wasm32.whl","pyodide-unix-timezones","geopandas","requests","xarray","yarl","pydeck"]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},3650:(e,t,n)=>{n.d(t,{A:()=>i});var s=n(6540),a=n(4848);function i(e){let{id:t,url:n,code:i,requirements:r}=e;const o=(0,s.useRef)(null);function l(e,t){t.style.left=`${e.left+window.scrollX}px`,t.style.top=`${e.top+window.scrollY}px`,t.style.width=`${e.width}px`,t.style.height=`${e.height}px`}return(0,s.useEffect)((()=>{let e=null;document.getElementById("magic-iframe")?e=document.getElementById("magic-iframe"):(e=document.createElement("iframe"),e.src=n,e.height="1050px",e.width="100%",e.scrolling="no",e.id="magic-iframe",document.body.appendChild(e)),e.contentWindow.postMessage({appRunner:{code:i,enabled:!0,requirements:r}},n);const t=o.current.getBoundingClientRect();e.style.position="absolute",e.style.display="block",l(t,e);const s=new IntersectionObserver((e=>{for(const t of e)if(t.isIntersecting){const e=document.getElementById("magic-iframe");if(e){l(t.boundingClientRect,e)}}}));s.observe(o.current);const a=new ResizeObserver((e=>{for(const t of e)if(t.contentBoxSize){const e=document.getElementById("magic-iframe");if(e){l(o.current.getBoundingClientRect(),e)}}}));return a.observe(o.current),()=>{const e=document.getElementById("magic-iframe");e&&(e.style.left="-10000px",e.style.top="-10000px",e.style.width="0px",e.style.height="0px",e.style.display="none"),a.disconnect(),s.disconnect()}}),[]),(0,a.jsx)("div",{ref:o,style:{width:"100%",height:"1050px"}})}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);