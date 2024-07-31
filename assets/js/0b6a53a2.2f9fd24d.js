"use strict";(self.webpackChunkfused_docs=self.webpackChunkfused_docs||[]).push([[9735],{1804:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>f});var t=i(4848),s=i(8453),a=i(3650);const o='import fused_app\nimport pydeck as pdk\nimport streamlit as st\n\nst.header("Buffer analysis")\n\nst.write("""\nThis app illustrates the buffer analysis between two GeoPandas GeoDataFrames: road segment represented with `LineStrings` and a table of vehicle GPS locations represented with `Points`. To determine which vehicles are using specific roads, we create a buffer around the road segments using the GeoDataFrame\'s `buffer` method and check which GPS points fall in this area using the `within` method.\n\nUsers can interact with the two sliders on the sidebar to adjust:\n- The number of vehicle points to show on the map\n- The size of the buffer, causing the blue area to expand or contract accordingly\n""")\n\n# Slider widgets\nn_points = st.sidebar.slider("Number of points:", 0, 1000, 100)\nbuffer = st.sidebar.slider("Buffer:", 0.0, 0.01, 0.0025, step=0.001)\n\n# Run UDF\n@st.cache_data\ndef load_data(n_points=15, buffer=0.0025):\n    gdf_points = fused_app.run(\n        "46bd457dddfbc47dbddaa703a2603d95ef06ed5d4d9c43bf8225758a3192955d",\n        n_points=n_points,\n        buffer=buffer,\n        return_object="points",\n    )\n    gdf_linestring = fused_app.run(\n        "46bd457dddfbc47dbddaa703a2603d95ef06ed5d4d9c43bf8225758a3192955d",\n        n_points=n_points,\n        buffer=buffer,\n        return_object="linestring",\n    )\n    buffered_polygon = fused_app.run(\n        "46bd457dddfbc47dbddaa703a2603d95ef06ed5d4d9c43bf8225758a3192955d",\n        n_points=n_points,\n        buffer=buffer,\n        return_object="other",\n    )\n    return gdf_points, gdf_linestring, buffered_polygon\n\n\ngdf_points, gdf_linestring, buffered_polygon = load_data(\n    n_points=n_points, buffer=buffer\n)\n\ngdf_points[\'lat\'], gdf_points[\'lng\'] = gdf_points.geometry.centroid.y, gdf_points.geometry.centroid.x\n\n\ncol1, col2 = st.columns(2)\n\nwith col1:\n    st.write("### \ud83d\ude97 Vehicle GPS points") # TODO: car and timestamp\n    edited_gdf_points = st.data_editor(gdf_points[[\'lat\', \'lng\']].head(10).T)\n    # TODO: geometry\n\nwith col2:\n    st.write("### \ud83d\udee3\ufe0f Roads")\n    gdf_linestring[\'geometry_str\'] = [str(each) for each in gdf_linestring.geometry]\n    st.data_editor(gdf_linestring[[\'name\', \'geometry_str\']])\n\n\n# Create map\nst.pydeck_chart(\n    pdk.Deck(\n        map_style="mapbox://styles/mapbox/dark-v9",\n        initial_view_state=pdk.ViewState(\n            latitude=37.78323,\n            longitude=-122.43259,\n            zoom=12,\n            pitch=0,\n        ),\n        layers=[\n            pdk.Layer(\n                "GeoJsonLayer",\n                data=gdf_points,\n                filled=True,\n                stroked=True,\n                get_line_color="[100*color, color, 10]",\n                get_line_width=100,\n            ),\n            pdk.Layer(\n                "GeoJsonLayer",\n                data=gdf_linestring,\n                filled=True,\n                stroked=True,\n                get_line_color="[100*color, color, 10]",\n                get_line_width=100,\n            ),\n            pdk.Layer(\n                "GeoJsonLayer",\n                data=buffered_polygon,\n                filled=False,\n                stroked=True,\n                get_line_color="[0,0,225]",\n                get_line_width=50,\n            ),\n        ],\n    )\n)',r={id:"buffer",title:"Buffer Analysis",tags:["buffer"],sidebar_position:2},l="Buffer: A Comprehensive Guide",d={id:"basics/usecases/buffer",title:"Buffer Analysis",description:"Buffer analyses helps extract meaningful insights from location-based information. It helps determine which objects fall within certain distance of areas of interest (AOIs) and account for possible real-world imprecisions in gps data. This technique can be applied to various scenarios, such as identifying the average speed on road segments or pinpointing intersections prone to accidents to improve road safety.",source:"@site/docs/basics/usecases/buffer.mdx",sourceDirName:"basics/usecases",slug:"/basics/usecases/buffer",permalink:"/basics/usecases/buffer",draft:!1,unlisted:!1,tags:[{label:"buffer",permalink:"/tags/buffer"}],version:"current",sidebarPosition:2,frontMatter:{id:"buffer",title:"Buffer Analysis",tags:["buffer"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Routing with Valhalla",permalink:"/basics/tutorials/valhalla/"},next:{title:"Point in polygon",permalink:"/basics/usecases/point-in-polygon"}},c={},f=[{value:"Applications",id:"applications",level:2},{value:"Urban analysis",id:"urban-analysis",level:3},{value:"Retail",id:"retail",level:3},{value:"Climate Risk",id:"climate-risk",level:3},{value:"Implementing buffer analysis",id:"implementing-buffer-analysis",level:2},{value:"Implementation steps",id:"implementation-steps",level:3},{value:"Example UDF",id:"example-udf",level:3},{value:"Scaling up with Fused",id:"scaling-up-with-fused",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"\u2b50 Demo app",id:"-demo-app",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"buffer-a-comprehensive-guide",children:"Buffer: A Comprehensive Guide"}),"\n",(0,t.jsx)(n.p,{children:"Buffer analyses helps extract meaningful insights from location-based information. It helps determine which objects fall within certain distance of areas of interest (AOIs) and account for possible real-world imprecisions in gps data. This technique can be applied to various scenarios, such as identifying the average speed on road segments or pinpointing intersections prone to accidents to improve road safety."}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial we'll explore how to buffer analysis between pairs of tables to determine which vehicles are using specific roads. Other common industry applications involve determining which stores are within a certain distance of an area of interest (AOI), and which buildings are within a certain distance of a body of water."}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"https://saylordotorg.github.io/text_essentials-of-geographic-information-systems/section_11/5c7eb6fc4bcbfc5117d778f0aabfded6.jpg",alt:"File",style:{width:1200}})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.em,{children:["Visual representation of buffer around GeoPandas ",(0,t.jsx)(n.code,{children:"Point"}),", ",(0,t.jsx)(n.code,{children:"LineString"}),", and ",(0,t.jsx)(n.code,{children:"Polygon"})," objects."]})," ",(0,t.jsx)(n.a,{href:"https://saylordotorg.github.io/text_essentials-of-geographic-information-systems/section_11/5c7eb6fc4bcbfc5117d778f0aabfded6.jpg",children:"Reference."})]}),"\n",(0,t.jsx)(n.h2,{id:"applications",children:"Applications"}),"\n",(0,t.jsx)(n.h3,{id:"urban-analysis",children:"Urban analysis"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Identify average speed on road segments."}),"\n",(0,t.jsx)(n.li,{children:"Improve road safety by identifying intersections prone to collisions."}),"\n",(0,t.jsx)(n.li,{children:"Analyze ride-hailing pickup locations."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"retail",children:"Retail"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Determine store visitors based on mobile GPS data."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"climate-risk",children:"Climate Risk"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Proximity analysis (e.g., find stores within 100 meters of a river or fuel source)."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"implementing-buffer-analysis",children:"Implementing buffer analysis"}),"\n",(0,t.jsx)(n.p,{children:"Once you determine which vehicle GPS points fall within a buffer, you can extract subsequent information such as average speed for each road segment. However, GPS data from vehicles isn't always perfectly accurate. Factors like satellite signal obstruction, atmospheric conditions, and device limitations can cause variations in reported locations. This means that even when a vehicle is traveling on a road, its GPS coordinates might not align exactly with the road's location on a map."}),"\n",(0,t.jsx)(n.h3,{id:"implementation-steps",children:"Implementation steps"}),"\n",(0,t.jsx)(n.p,{children:"To address this, we can create a buffer zone around the road and check which GPS point fall within this area. Here's how to do this:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a buffer around a set of target roads"}),"\n",(0,t.jsx)(n.li,{children:"Perform a spatial join between the buffered roads and the vehible GPS points"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-udf",children:"Example UDF"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@fused.udf\ndef udf(n_points: int=10000, buffer: int=0.025):\n    import geopandas as gpd\n    from shapely.geometry import Point, Polygon\n    import random\n\n\n    # Create a GeoDataFrame for points within the bounding box of an outer square\n    gdf_polygon = gpd.GeoDataFrame({'geometry': [Polygon([(-122.52690000000051, 37.70313158980733),(-122.52690000000051, 37.816395657523195),(-122.34604834372873, 37.816134829424335),(-122.34656848822227, 37.70339041384273)])]})\n    minx, miny, maxx, maxy = gdf_polygon.bounds.iloc[0]\n    points = [Point(random.uniform(minx, maxx), random.uniform(miny, maxy)) for _ in range(n_points)]\n    gdf_points = gpd.GeoDataFrame({'geometry': points})\n    gdf_points['color'] = 10\n    \n    # Create a buffer around a point at the centroid of the square\n    buffered_polygon = gdf_polygon.centroid.buffer(buffer)\n    \n    # Color the points that fall within the buffered polygon\n    points_within = gdf_points[gdf_points.geometry.within(buffered_polygon.unary_union)]\n    gdf_points.loc[points_within.index, 'color'] = 1000\n\n    return gdf_points\n"})}),"\n",(0,t.jsx)(n.h3,{id:"scaling-up-with-fused",children:"Scaling up with Fused"}),"\n",(0,t.jsx)(n.p,{children:"For large scale analysis across global datasets, you can implement the above process as a Fused UDF and spatially filter each table to only perform the calculation over overlapping areas. This will make computations more efficient and enable you to perform the analysis in parallel across multiple workers and scale up to any size dataset."}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Buffer analysis is a powerful technique, but it's important to consider its limitations and potential complexities of the data."}),"\n",(0,t.jsx)(n.p,{children:"For example, in some scenarios you'll often find that buffers of different Areas of Interest (AOI) intersect which can lead to ambiguous situations where a single point falls within multiple buffers. The significance of a point falling within multiple buffers depends on your specific use case:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For road analysis, a car can't physically be on two roads simultaneously. In such cases, you'll need to employ additional techniques to resolve ambiguities, such as speed or direction analysis."}),"\n",(0,t.jsx)(n.li,{children:'In other scenarios, like identifying "all buildings within 100m of any water body," overlapping buffers might not be problematic and could actually provide valuable insights.'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"-demo-app",children:"\u2b50 Demo app"}),"\n",(0,t.jsxs)(n.p,{children:["This app illustrates the buffer analysis between two GeoPandas GeoDataFrames: road segment represented with ",(0,t.jsx)(n.code,{children:"LineStrings"})," and a table of vehicle GPS locations represented with ",(0,t.jsx)(n.code,{children:"Points"}),". To determine which vehicles are using specific roads, we create a buffer around the road segments using the GeoDataFrame's ",(0,t.jsx)(n.code,{children:"buffer"})," method and check which GPS points fall in this area using the ",(0,t.jsx)(n.code,{children:"within"})," method."]}),"\n",(0,t.jsx)(n.p,{children:"The road segments are marked in black: the intersection of Van Ness and Main Street, and Columbus Avenue. Scattered across the map are red dots, representing arbitrary GPS locations of vehicles. The key feature of this visualization is the blue buffer zone surrounding the road segments."}),"\n",(0,t.jsx)(n.p,{children:"Users can interact with the two sliders on the sidebar to adjust:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The number of vehicle points to show on the map"}),"\n",(0,t.jsx)(n.li,{children:"The size of the buffer, causing the blue area to expand or contract accordingly"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As the buffer grows, it begins to encompass more of the red GPS points. Any GPS points that fall within the current buffer zone are highlighted in yellow, visually demonstrating how buffer analysis captures nearby points."}),"\n","\n","\n",(0,t.jsx)(a.A,{id:"buffer",url:"https://staging.fused.io/workbench#app/s/aH4sIAAAAAAAAA%2BVXzW7jNhB%2BFUI5xC5kRZbteGNAQNEGWaBYdBeb7F4sQ6FFyuJGJlWSiuMt%2Bgw9FmgPPfQl%2BlbtI3RISrbsJIsW2MuiMiDxZ%2F6%2BGc4M%2FaOXCUK9mcfWlZAa5bWiJMVVlfBmpdoSmt0hrFBF7narSkuK1yXTZkPphCdc6aCgmFDZS7xv6jynEmGOy61iKvH6DcVGMk2BwP74TcEUAmWIlWUNIrGmCumCouUhP1pSvaGUI70R6CUVbzAnoBdGl1jjK4nXVM2QFJggRVdryjWStJJUwYgStGG6QLevGKfXWjK%2BUrcgmSCMNF6WFIkc3dOCZTB8%2BeYalSLDmgmunpDxRjCu1W2AbgQiVFO5BqFoA8xFKwMASYpqBXqQqmjGcpZZ05SPNhRl4DdNQXcLUYoabDGgu%2FarRoJZ78I8VejWcd6iNdWFIBZKVpgYOTsMhsraiXJcloiB26yfQXNH6q1BxHgrJjABeqeoVCjDHJgAHM60w23ojetVyYihENwuKZgtsURaIEw%2BQABnCR%2BgG9jh9XoJ4DqebSwCUlWITSthjauWRbGPNhT78Ptgyd7eZVlThwFk0IfKwBYSZYJrayjOMiEJUJdbgGIPmD10J%2BjaWg1IyIpqlXCeNsbEcHKDBkTgsMHR%2FH5nuyObJZ6PQh8Nw9C9QWwTvKcFuMPv2ILQvob2HUYTHzhoFZvJsDHvbc3Ru8urhH8NwjIMoUwJhDvhhOZwGDGx015rdTwEIU5%2F7GT2we0InhXJ98h2iRzImvccgXkSb3y%2BJOPJlBCSL7PxlCwJwXgajnB0Ho7IxYTm4TklEzImF9l4tMxfRNFkOnmBR8OL6GIyIYBrL25nVTvo7DVGNsHcr0uqa8lTsfxAMx0nnmPcie3v0ZSQXcqm7JeFaG%2F3MSrHCjgqUW5XkAVfFC4BiSiPITmizunzj2LnP0Kd2N9%2F4QA%2F7VPB6X0M6BBHwvuHWuanJdanCx8dLPHV6QKk79eCFRVQE%2BU2yKAQS8FIsPU%2Fvf%2FgAGWihESHd%2BQqA4zqNVe9yBpiK6khadK10w1PTk7Q37%2F%2F%2Bgt63%2BlDbVr00Qm6eX35egblUNpqrxn0O43XlRNECUgh6UH6g3DjqtTsCdnrIHZe8JFDvrA9uzcM%2B8FNE89WWwuza3v0nO2%2F%2FfHXnz%2Bjt6bN2br7OIPnp63AFBasz%2Bcw6FGoeH2UQyk3I9OtDvl27l7sVB8j6yiZn3LTJQHeobZF34XoBH3rGrDtPCDLXW%2FSrMBSNwcL7jnBJSx2chGoQc62pJAEMF6Kh9nZmV1QZ25%2BRrC8G9xfHOQc40wzXKb3jG6AH%2FTGRvh7mF6bWUeDeSAwTNeExqNpMH0xikb%2B0b7gK0cwGEZRMB5Fk4sjko9CrONhdLRaMZ0VcdhZ7XfGJd5CU4%2FnRzxg6Cuzc2SkK01wJ%2FlOCW4JDiC3j4lR3MnwxxQ5XPooiW9kTZ%2FYhaiJu%2Be3oZPbsKdwKIWEqMyhMX9lJzYDzWcYLp40bccLNwJdxMB4RNQ%2Fdt9nckWnwP3f3XFc3593yBUu1WfxSOiHPjTIf%2BWEyad8sNj3v77ne5L%2BUDNJ7a3dm829s2qLpRSb9jsYTgO4qA2yajSMmne1FQRui2kURuM0TDdYrUdRsClKkNfsDWrOHgam1H8UcGxgAypaZf%2F4NErhLJnhA2jBWxiAOsdvKpq38D2mruqyvIa%2FHJR7s9w48qd%2FAMQBJs%2FxDQAA",code:o,requirements:["/pyarrow/pyarrow-17.0.0-cp312-cp312-pyodide_2024_0_wasm32.whl","pyodide-unix-timezones","geopandas","requests","xarray","yarl","pydeck"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3650:(e,n,i)=>{i.d(n,{A:()=>a});var t=i(6540),s=i(4848);function a(e){let{id:n,url:i,code:a,requirements:o}=e;const r=(0,t.useRef)(null);function l(e,n){n.style.left=`${e.left+window.scrollX}px`,n.style.top=`${e.top+window.scrollY}px`,n.style.width=`${e.width}px`,n.style.height=`${e.height}px`}return(0,t.useEffect)((()=>{let e=null;document.getElementById("magic-iframe")?e=document.getElementById("magic-iframe"):(e=document.createElement("iframe"),e.src=i,e.height="1050px",e.width="100%",e.scrolling="no",e.id="magic-iframe",document.body.appendChild(e)),e.contentWindow.postMessage({appRunner:{code:a,enabled:!0,requirements:o}},i);const n=r.current.getBoundingClientRect();e.style.position="absolute",e.style.display="block",l(n,e);const t=new IntersectionObserver((e=>{for(const n of e)if(n.isIntersecting){const e=document.getElementById("magic-iframe");if(e){l(n.boundingClientRect,e)}}}));t.observe(r.current);const s=new ResizeObserver((e=>{for(const n of e)if(n.contentBoxSize){const e=document.getElementById("magic-iframe");if(e){l(r.current.getBoundingClientRect(),e)}}}));return s.observe(r.current),()=>{const e=document.getElementById("magic-iframe");e&&(e.style.left="-10000px",e.style.top="-10000px",e.style.width="0px",e.style.height="0px",e.style.display="none"),s.disconnect(),t.disconnect()}}),[]),(0,s.jsx)("div",{ref:r,style:{width:"100%",height:"1050px"}})}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(6540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);