"use strict";(self.webpackChunkfused_docs=self.webpackChunkfused_docs||[]).push([[5876],{1631:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(4848),s=t(8453),o=t(8987);t(1023),t(290);const a={title:"Ingest your own data",sidebar_label:"Ingest",path:"basics/tutorials/ingest/ingest",nb_path:"basics/tutorials/ingest.ipynb",github:"https://github.com/fusedio/fused-docs/blob/main/docs/basics/tutorials/ingest.ipynb",colab:"https://githubtocolab.com/fusedio/fused-docs/blob/main/docs/basics/tutorials/ingest.ipynb",description:"Tutorial on how to ingest parquet data with Fused."},r="How-to: Ingestion",l={id:"basics/tutorials/ingest/Ingest",title:"Ingest your own data",description:"Tutorial on how to ingest parquet data with Fused.",source:"@site/docs/basics/tutorials/ingest/Ingest.mdx",sourceDirName:"basics/tutorials/ingest",slug:"/basics/tutorials/ingest/",permalink:"/basics/tutorials/ingest/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Ingest your own data",sidebar_label:"Ingest",path:"basics/tutorials/ingest/ingest",nb_path:"basics/tutorials/ingest.ipynb",github:"https://github.com/fusedio/fused-docs/blob/main/docs/basics/tutorials/ingest.ipynb",colab:"https://githubtocolab.com/fusedio/fused-docs/blob/main/docs/basics/tutorials/ingest.ipynb",description:"Tutorial on how to ingest parquet data with Fused."},sidebar:"tutorialSidebar",previous:{title:"HuggingFace",permalink:"/basics/tutorials/huggingface"},next:{title:"Load",permalink:"/basics/tutorials/load/"}},d={},c=[{value:"Ingest data",id:"ingest-data",level:2},{value:"Default ingestion",id:"default-ingestion",level:3},{value:"Ingest multiple files",id:"ingest-multiple-files",level:3},{value:"Row-based ingestion",id:"row-based-ingestion",level:3},{value:"Area-based ingestion",id:"area-based-ingestion",level:3},{value:"Geometry subdivision",id:"geometry-subdivision",level:3},{value:"Ingest non-geospatial",id:"ingest-non-geospatial",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{githubUrl:"https://github.com/fusedio/fused-docs/blob/main/docs/basics/tutorials/ingest.ipynb",colabUrl:"https://githubtocolab.com/fusedio/fused-docs/blob/main/docs/basics/tutorials/ingest.ipynb"}),"\n",(0,i.jsx)(n.h1,{id:"how-to-ingestion",children:"How-to: Ingestion"}),"\n",(0,i.jsx)(n.p,{children:"This example notebook shows how to use Fused to ingest data into an S3 bucket."}),"\n",(0,i.jsx)(n.p,{children:"Note: steps in this notebook require authentication to Fused."}),"\n",(0,i.jsx)(n.h2,{id:"ingest-data",children:"Ingest data"}),"\n",(0,i.jsx)(n.p,{children:"Fused delivers speed advantages thanks to spatial partitioning. Geospatial operations\nbetween two or more datasets are usually for spatially overlapping or neighboring areas\n- and usually for localized areas of interest. Breaking down datasets across geographic\nchunks loads only the relevant data for each operation."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/python-sdk/top-level-functions/#ingest",children:(0,i.jsx)(n.code,{children:"fused.ingest()"})})," method first uploads\ndata into an S3 bucket using ",(0,i.jsx)(n.a,{href:"/python-sdk/top-level-functions/#upload",children:"fused.upload"})," and\nautomatically geo partitions it."]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["At the moment, Fused won't let you ingest multiple local files simultaneously. To ingest\nmultiple local files, first upload them with\n",(0,i.jsx)(n.a,{href:"/python-sdk/top-level-functions/#upload",children:"fused.upload"})," then specify an array of their\nS3 paths as the input to ingest."]}),(0,i.jsx)(n.p,{children:"This is because Fused performs a lazy check to prevent scenarios where long uploads end\nup failing due to a single file."})]}),"\n",(0,i.jsx)(n.p,{children:"Datasets ingested with Fused are spatially partitioned collections of Parquet files.\nEach file has one or more chunks, which are a further level of spatial partitioning."}),"\n",(0,i.jsxs)(n.p,{children:["Columns in a dataset are grouped into tables. An ingested dataset contains a ",(0,i.jsx)(n.code,{children:"main"}),"\ntable with the original input columns and a ",(0,i.jsx)(n.code,{children:"fused"})," table containing spatial metadata."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ingest()"})," method has many configuration options, which the API documentation\nexplains. The following sections cover a few different ingestion use cases."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If you encounter the message\n",(0,i.jsx)(n.code,{children:"HTTPError: {'detail': 'Quota limit: Number of running instances'}"}),", please get in touch\nwith the Fused team to increase the number of workers allocated to your account."]})}),"\n",(0,i.jsxs)(n.p,{children:["Pro tip: While Fused is generally used to ingest files, it's also possible to pass the\n",(0,i.jsx)(n.code,{children:"GeoDataFrame"})," directly to ",(0,i.jsx)(n.code,{children:"fused.ingest()"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"default-ingestion",children:"Default ingestion"}),"\n",(0,i.jsxs)(n.p,{children:["By default ingestion tries to create a certain number of files (",(0,i.jsx)(n.code,{children:"target_num_files=20"}),").\nThe number of rows per file and chunk are chosen to meet this target. Note that 20 files\nis only a target and the actual number of files generated can vary."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# !pip install fused -q\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import fused\n\njob = fused.ingest(\n    input="https://www2.census.gov/geo/tiger/TIGER_RD18/LAYER/TRACT/tl_rd22_11_tract.zip",\n    output=f"fd://census/dc_tract",\n)\njob_id = job.run_remote()\n'})}),"\n",(0,i.jsx)(n.p,{children:"While the job is running, follow its logs."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"job_id.tail_logs()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"ingest-multiple-files",children:"Ingest multiple files"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import fused\n\njob = fused.ingest(\n    input=["s3://my-bucket/file1.parquet", "s3://my-bucket/file2.parquet"],\n    output=f"fd://census/dc_tract",\n)\njob_id = job.run_remote()\n'})}),"\n",(0,i.jsx)(n.h3,{id:"row-based-ingestion",children:"Row-based ingestion"}),"\n",(0,i.jsx)(n.p,{children:"Our basic ingestion is row-based, where the user set the maximum number of rows per each\nchunk and file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'job = fused.ingest(\n    input="https://www2.census.gov/geo/tiger/TIGER_RD18/LAYER/TRACT/tl_rd22_11_tract.zip",\n    explode_geometries=True,\n    partitioning_method="rows",\n    partitioning_maximum_per_file=100,\n    partitioning_maximum_per_chunk=10,\n)\njob_id = job.run_remote()\n'})}),"\n",(0,i.jsx)(n.h3,{id:"area-based-ingestion",children:"Area-based ingestion"}),"\n",(0,i.jsx)(n.p,{children:"Fused also supports area-based ingestion, where the number of rows in each partition is\ndetermined by the sum of their area."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'job = fused.ingest(\n    input="https://www2.census.gov/geo/tiger/TIGER_RD18/LAYER/TRACT/tl_rd22_11_tract.zip",\n    output=f"fd://census/dc_tract_area",\n    explode_geometries=True,\n    partitioning_method="area",\n    partitioning_maximum_per_file=None,\n    partitioning_maximum_per_chunk=None,\n)\njob_id = job.run_remote()\n'})}),"\n",(0,i.jsx)(n.h3,{id:"geometry-subdivision",children:"Geometry subdivision"}),"\n",(0,i.jsx)(n.p,{children:"It's also possible to subdivide geometries in the ingestion process."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'job = fused.ingest(\n    input="https://www2.census.gov/geo/tiger/TIGER_RD18/LAYER/TRACT/tl_rd22_11_tract.zip",\n    output=f"fd://census/dc_tract_geometry",\n    explode_geometries=True,\n    partitioning_method="area",\n    partitioning_maximum_per_file=None,\n    partitioning_maximum_per_chunk=None,\n    subdivide_start=0.001,\n    subdivide_stop=0.0001,\n    subdivide_method="area",\n)\njob_id = job.run_remote()\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Once ingestion completes,\n",(0,i.jsx)(n.a,{href:"/reference/fused/experimental/#open_table",children:(0,i.jsx)(n.code,{children:"fused.experimental.open_table"})})," returns the\ncorresponding ",(0,i.jsx)(n.code,{children:"Table"})," object."]}),"\n",(0,i.jsxs)(n.p,{children:["The notebook ",(0,i.jsx)(n.em,{children:"repr"})," provides insight into the Table structure."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Each table has one or more ",(0,i.jsx)(n.em,{children:"files"}),", which are spatially partitioned."]}),"\n",(0,i.jsxs)(n.li,{children:["Each file has one or more ",(0,i.jsx)(n.em,{children:"chunks"}),", which are again spatially partitioned within the\nfile."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Optionally, tables can be part of a ",(0,i.jsx)(n.code,{children:"Dataset"}),", which consists of one or more ",(0,i.jsx)(n.em,{children:"tables"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'census_tracts = fused.experimental.open_table(f"fd://census/dc_tract")\ncensus_tracts\n'})}),"\n",(0,i.jsx)(n.h3,{id:"ingest-non-geospatial",children:"Ingest non-geospatial"}),"\n",(0,i.jsx)(n.p,{children:"Ingest a table that doesn't have a spatial component."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'job = fused.ingest_nongeospatial(\n    input=df,\n    output="s3://sample-bucket/file.parquet",\n).run_remote()\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1023:(e,n,t)=>{t.d(n,{A:()=>p});t(6540);var i,s=new Uint8Array(16);function o(){if(!i&&!(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(s)}const a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const r=function(e){return"string"==typeof e&&a.test(e)};for(var l=[],d=0;d<256;++d)l.push((d+256).toString(16).substr(1));const c=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(l[e[n+0]]+l[e[n+1]]+l[e[n+2]]+l[e[n+3]]+"-"+l[e[n+4]]+l[e[n+5]]+"-"+l[e[n+6]]+l[e[n+7]]+"-"+l[e[n+8]]+l[e[n+9]]+"-"+l[e[n+10]]+l[e[n+11]]+l[e[n+12]]+l[e[n+13]]+l[e[n+14]]+l[e[n+15]]).toLowerCase();if(!r(t))throw TypeError("Stringified UUID is invalid");return t};const u=function(e,n,t){var i=(e=e||{}).random||(e.rng||o)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n){t=t||0;for(var s=0;s<16;++s)n[t+s]=i[s];return n}return c(i)};var h=t(4848);const p=e=>(0,h.jsxs)("div",{style:{backgroundColor:"var(--ifm-background-surface-color)",marginBottom:"var(--ifm-leading)",borderRadius:"var(--ifm-global-radius)",boxShadow:"var(--ifm-global-shadow-lw)",overflow:"hidden",padding:"10px",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace)"},children:[(0,h.jsx)("span",{style:{color:"var(--ifm-color-primary)"},children:"Out: "}),(0,h.jsx)("pre",{style:{margin:"0px",backgroundColor:"inherit"},children:e.children.split("\n").map((e=>(0,h.jsx)("p",{style:{marginBottom:"0px"},children:e},u())))})]})},8987:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var i=t(8774),s=t(4848);const o=e=>{let{githubUrl:n,colabUrl:t}=e;return(0,s.jsxs)("div",{className:"link-buttons",style:{textAlign:"right"},children:[(0,s.jsx)("br",{}),(0,s.jsx)(i.A,{to:t,children:(0,s.jsx)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open in Colab"})})," ",(0,s.jsx)(i.A,{to:n,children:(0,s.jsx)("img",{src:"https://badgen.net/static/GitHub/Open/blue?icon=github",alt:"Open in GitHub"})})]})}},290:(e,n,t)=>{t(6540);var i=t(3259),s=t.n(i),o=(t(2303),t(4848));s()({loader:()=>t.e(1236).then(t.bind(t,1236)),loading:e=>{let{timedOut:n}=e;return n?(0,o.jsx)("blockquote",{children:"Error: Loading Plotly timed out."}):(0,o.jsx)("div",{children:"loading..."})},timeout:1e4})},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);