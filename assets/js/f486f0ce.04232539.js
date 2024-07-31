"use strict";(self.webpackChunkfused_docs=self.webpackChunkfused_docs||[]).push([[5513],{2533:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var o=n(4848),a=n(8453),r=n(8987),s=n(1023);n(290);const i={title:"Routing with Valhalla",sidebar_label:"Routing with Valhalla",path:"basics/tutorials/valhalla/valhalla",nb_path:"basics/tutorials/valhalla.ipynb",github:"https://github.com/fusedio/fused-docs/blob/main/docs/basics/tutorials/valhalla.ipynb",colab:"https://githubtocolab.com/fusedio/fused-docs/blob/main/docs/basics/tutorials/valhalla.ipynb",description:"Tutorial on how to do routing analyses with Fused."},l="Valhalla",d={id:"basics/tutorials/valhalla/Valhalla",title:"Routing with Valhalla",description:"Tutorial on how to do routing analyses with Fused.",source:"@site/docs/basics/tutorials/valhalla/Valhalla.mdx",sourceDirName:"basics/tutorials/valhalla",slug:"/basics/tutorials/valhalla/",permalink:"/basics/tutorials/valhalla/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Routing with Valhalla",sidebar_label:"Routing with Valhalla",path:"basics/tutorials/valhalla/valhalla",nb_path:"basics/tutorials/valhalla.ipynb",github:"https://github.com/fusedio/fused-docs/blob/main/docs/basics/tutorials/valhalla.ipynb",colab:"https://githubtocolab.com/fusedio/fused-docs/blob/main/docs/basics/tutorials/valhalla.ipynb",description:"Tutorial on how to do routing analyses with Fused."},sidebar:"tutorialSidebar",previous:{title:"Create Tiles async",permalink:"/basics/tutorials/seasfire/"},next:{title:"Buffer Analysis",permalink:"/basics/usecases/buffer"}},c={},h=[];function u(t){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{githubUrl:"https://github.com/fusedio/fused-docs/blob/main/docs/basics/tutorials/valhalla.ipynb",colabUrl:"https://githubtocolab.com/fusedio/fused-docs/blob/main/docs/basics/tutorials/valhalla.ipynb"}),"\n",(0,o.jsx)(e.h1,{id:"valhalla",children:"Valhalla"}),"\n",(0,o.jsxs)(e.p,{children:["This example notebook shows how to use Fused to do routing with the\n",(0,o.jsx)(e.a,{href:"https://github.com/valhalla/valhalla",children:"Valhalla"})," Open Source routing engine."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"!pip install fused -q\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'import fused\n\n\n@fused.udf\ndef udf(\n    lat_start=34.0154145,\n    lng_start=-118.2253804,\n    lat_end=33.9422,\n    lng_end=-118.4036,\n    cost="auto",  # Cost options: auto, pedestrian, bicycle,truck, bus, motor_scooter\n):\n    import time\n\n    import geopandas as gpd\n    import pandas as pd\n    from shapely.geometry import Point\n\n    # six degrees of precision in valhalla\n    inv = 1.0 / 1e6\n\n    # decode an encoded string\n    def decode(encoded):\n        decoded = []\n        previous = [0, 0]\n        i = 0\n        # for each byte\n        while i < len(encoded):\n            # for each coord (lat, lon)\n            ll = [0, 0]\n            for j in [0, 1]:\n                shift = 0\n                byte = 0x20\n                # keep decoding bytes until you have this coord\n                while byte >= 0x20:\n                    byte = ord(encoded[i]) - 63\n                    i += 1\n                    ll[j] |= (byte & 0x1F) << shift\n                    shift += 5\n                # get the final value adding the previous offset and remember it for the next\n                ll[j] = previous[j] + (~(ll[j] >> 1) if ll[j] & 1 else (ll[j] >> 1))\n                previous[j] = ll[j]\n                # scale by the precision and chop off long coords also flip the positions so\n                # its the far more standard lon,lat instead of lat,lon\n                decoded.append(\n                    [float("%.6f" % (ll[1] * inv)), float("%.6f" % (ll[0] * inv))]\n                )\n        # hand back the list of coordinates\n        return decoded\n\n    def get_route(lat_start, lng_start, lat_end, lng_end, costing="auto"):\n        """\n        costing options: auto, pedestrian, bicycle, truck, bus, motor_scooter\n        TODO: add costing_options: e.g. exclude_polygons\n        """\n        import random\n        import time\n\n        import geopandas as gpd\n        import pandas as pd\n        import requests\n        from shapely.geometry import LineString\n\n        url = "https://valhalla1.openstreetmap.de/route"\n        params = {\n            "locations": [\n                {"lon": lng_start, "lat": lat_start},\n                {"lon": lng_end, "lat": lat_end},\n            ],\n            "costing": costing,\n            "units": "miles",\n        }\n        response = requests.post(url, json=params)\n        result = response.json()\n        print(\n            "Driving Instructions:",\n            [el["instruction"] for el in result["trip"]["legs"][0]["maneuvers"]],\n        )\n        encoded_shape = result["trip"]["legs"][0]["shape"]\n        decoded_shape = decode(encoded_shape)\n        # print(decoded_shape)\n        gdf_route = gpd.GeoDataFrame(\n            columns=["geometry"], geometry=[LineString(decoded_shape)], crs=4326\n        )\n        # print(gdf_route)\n        return gdf_route\n\n    def compute_distance(shortest_path_gdf, col_name="separation"):\n        """\n        Compute distance in EPSG:3387\n\n        """\n\n        # project WGS84 to EPSG3387\n        distances = shortest_path_gdf.to_crs("EPSG:3387").geometry.length\n\n        # add\n        shortest_path_gdf[col_name] = distances\n\n        return shortest_path_gdf\n\n    start = time.time()\n    gdf = get_route(lat_start, lng_start, lat_end, lng_end, costing=cost)\n\n    print("time to create route", time.time() - start, "sec")\n    gdf = compute_distance(gdf, col_name="separation")\n    print("route length:", gdf["separation"].values[0] / 1000.0, "km")\n    gdf["r"] = 0\n    gdf["g"] = 255\n    gdf["b"] = 255\n    gdf_start = gpd.GeoDataFrame(\n        columns=["geometry", "r", "g", "b"],\n        geometry=[Point(lng_start, lat_start)],\n        crs=4326,\n    )\n    gdf_start["g"] = 255\n\n    gdf_end = gpd.GeoDataFrame(\n        columns=["geometry", "r", "g", "b"],\n        geometry=[Point(lng_end, lat_end)],\n        crs=4326,\n    )\n    gdf_end["r"] = 255\n    return pd.concat([gdf, gdf_start, gdf_end])\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'fused.run(udf=udf, engine="local")\n'})}),"\n",(0,o.jsx)(s.A,{children:"Driving Instructions: ['Drive west on East 25th Street.', 'Turn right onto Minerva Street.', 'Turn right onto East 23rd Street.', 'Turn left onto East Washington Boulevard.', 'Turn right onto South Alameda Street.', 'Turn left onto Newton Street.', 'Turn left to take the I 10 West ramp toward Santa Monica.', 'Take exit 13 on the right onto I 110 South toward San Pedro.', 'Keep left to take I 110 South toward San Pedro.', 'Keep left to take I 110 South toward San Pedro.', 'Take the I 105 West exit on the right toward Los Angeles International Airport.', 'Keep right to take I 105 West toward Los Angeles International Airport.', 'Keep right to take exit 1C onto CA 1 North toward Sepulveda Boulevard/Los Angeles International Airport.', 'Take the exit on the right toward LAX Airport/Century Boulevard.', 'Keep right toward Departing Flights.', 'Keep right to take World Way toward Departing Flights.', 'Bear left toward P2/P5/P6/Airport Exit.', 'Bear left onto World Way.', 'Your destination is on the right.']\ntime to create route 0.9851841926574707 sec\nroute length: 12907197.414523723 km"}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{style:{textAlign:"right"}}),(0,o.jsx)(e.th,{style:{textAlign:"left"},children:"geometry"}),(0,o.jsx)(e.th,{style:{textAlign:"right"},children:"separation"}),(0,o.jsx)(e.th,{style:{textAlign:"right"},children:"r"}),(0,o.jsx)(e.th,{style:{textAlign:"right"},children:"g"}),(0,o.jsx)(e.th,{style:{textAlign:"right"},children:"b"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,o.jsx)(e.td,{style:{textAlign:"left"},children:"LINESTRING (0.00000 34.01532, -118.22538 34.01..."}),(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"1.29072e+10"}),(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"255"}),(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"255"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,o.jsx)(e.td,{style:{textAlign:"left"},children:"POINT (-118.22538 34.01541)"}),(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"nan"}),(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"nan"}),(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"255"}),(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"nan"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,o.jsx)(e.td,{style:{textAlign:"left"},children:"POINT (-118.40360 33.94220)"}),(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"nan"}),(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"255"}),(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"nan"}),(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"nan"})]})]})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python"})})]})}function g(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},1023:(t,e,n)=>{n.d(e,{A:()=>g});n(6540);var o,a=new Uint8Array(16);function r(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(a)}const s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const i=function(t){return"string"==typeof t&&s.test(t)};for(var l=[],d=0;d<256;++d)l.push((d+256).toString(16).substr(1));const c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};const h=function(t,e,n){var o=(t=t||{}).random||(t.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=o[a];return e}return c(o)};var u=n(4848);const g=t=>(0,u.jsxs)("div",{style:{backgroundColor:"var(--ifm-background-surface-color)",marginBottom:"var(--ifm-leading)",borderRadius:"var(--ifm-global-radius)",boxShadow:"var(--ifm-global-shadow-lw)",overflow:"hidden",padding:"10px",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace)"},children:[(0,u.jsx)("span",{style:{color:"var(--ifm-color-primary)"},children:"Out: "}),(0,u.jsx)("pre",{style:{margin:"0px",backgroundColor:"inherit"},children:t.children.split("\n").map((t=>(0,u.jsx)("p",{style:{marginBottom:"0px"},children:t},h())))})]})},8987:(t,e,n)=>{n.d(e,{A:()=>r});n(6540);var o=n(8774),a=n(4848);const r=t=>{let{githubUrl:e,colabUrl:n}=t;return(0,a.jsxs)("div",{className:"link-buttons",style:{textAlign:"right"},children:[(0,a.jsx)("br",{}),(0,a.jsx)(o.A,{to:n,children:(0,a.jsx)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open in Colab"})})," ",(0,a.jsx)(o.A,{to:e,children:(0,a.jsx)("img",{src:"https://badgen.net/static/GitHub/Open/blue?icon=github",alt:"Open in GitHub"})})]})}},290:(t,e,n)=>{n(6540);var o=n(3259),a=n.n(o),r=(n(2303),n(4848));a()({loader:()=>n.e(1236).then(n.bind(n,1236)),loading:t=>{let{timedOut:e}=t;return e?(0,r.jsx)("blockquote",{children:"Error: Loading Plotly timed out."}):(0,r.jsx)("div",{children:"loading..."})},timeout:1e4})},8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>i});var o=n(6540);const a={},r=o.createContext(a);function s(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);