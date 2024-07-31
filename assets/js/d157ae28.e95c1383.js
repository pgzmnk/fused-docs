"use strict";(self.webpackChunkfused_docs=self.webpackChunkfused_docs||[]).push([[5602],{3787:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(4848),s=t(8453),n=t(8748);const i={slug:"code-to-map",title:"Fused Code to Map. Instantly.",authors:["isaac","sina"],tags:["welcome"]},r=void 0,l={permalink:"/blog/code-to-map",source:"@site/blog/2024-03-04-welcome/index.mdx",title:"Fused Code to Map. Instantly.",description:"Fused is a toolkit to enable interoperability between geospatial datasets and tools in the modern data stack. Fused is the glue layer that integrates data platforms with data tools via a managed serverless API.",date:"2024-03-04T00:00:00.000Z",formattedDate:"March 4, 2024",tags:[{label:"welcome",permalink:"/blog/tags/welcome"}],readingTime:3.473333333333333,hasTruncateMarker:!1,authors:[{name:"Isaac Brodsky",title:"CTO",url:"https://github.com/isaacbrodsky",imageURL:"https://github.com/isaacbrodsky.png",key:"isaac"},{name:"Sina Kashuk",title:"CEO",url:"https://github.com/kashuk",imageURL:"https://github.com/kashuk.png",key:"sina"}],frontMatter:{slug:"code-to-map",title:"Fused Code to Map. Instantly.",authors:["isaac","sina"],tags:["welcome"]},unlisted:!1,prevItem:{title:"3 key aspects of UDFs.",permalink:"/blog/on-udfs"}},d={authorsImageUrls:[void 0,void 0]},c=[{value:"Current limitations with geospatial data processing",id:"current-limitations-with-geospatial-data-processing",level:2},{value:"Seizing the moment",id:"seizing-the-moment",level:2},{value:"Why Fused?",id:"why-fused",level:2}];function u(e){const a={h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)("img",{src:n.A,alt:"File",style:{width:1200}})}),"\n",(0,o.jsx)(a.p,{children:"Fused is a toolkit to enable interoperability between geospatial datasets and tools in the modern data stack. Fused is the glue layer that integrates data platforms with data tools via a managed serverless API."}),"\n",(0,o.jsx)(a.h2,{id:"current-limitations-with-geospatial-data-processing",children:"Current limitations with geospatial data processing"}),"\n",(0,o.jsx)(a.p,{children:"Today, there is a fragmented ecosystem around scalable geospatial data processing. Python geospatial libraries like GeoPandas, Shapely, and Rasterio make it easy to do small jobs, but are single-threaded and operate entirely in-memory. For bigger jobs, there are Python parallel processing tools like Dask that require complex installations and are liable to memory pressure errors. Spark-based tools like Apache Sedona and RasterFrames have a steep learning curve and are hard to debug and orchestrate. Postgres and its geospatial extension PostGIS operate on larger-than-memory datasets, but are hard to scale larger than the disk of one machine, aren\u2019t designed for OLAP workloads, and can be hard to administer. Cloud data warehouses like Databricks and Snowflake are monolithic systems that tend to bring lock-in and pricing that is hard to anticipate."}),"\n",(0,o.jsx)(a.p,{children:"Spatial SQL is a great way to run scalable operations on tables with vector data - but falls short on raster data and does not have native access to libraries for the finesse operations of data science. In fact, geospatial data science teams largely use Python and would prefer to use it both in development and in production - but tooling fragmentation forces them to juggle languages and frameworks. The present paradigm accepts the inefficiencies of complexity as a necessary evil, because there hasn\u2019t been a better way to work with both raster and vector data at scale. Data teams have an unaddressed need for a friendly Python API that scales. To increase development velocity it\u2019s convenient for most code to run in Python, moving only computationally-heavy code into specialized frameworks - as efficiently as possible. Additionally, scaling Python from local development to massive cloud workloads, calls for efficient parallelization."}),"\n",(0,o.jsx)(a.h2,{id:"seizing-the-moment",children:"Seizing the moment"}),"\n",(0,o.jsx)(a.p,{children:"The last several years have seen a commoditization of modular building blocks of OLAP systems and increased adoption of geospatial cloud-native data formats. With the convergence and popularity of columnar memory formats like Apache Arrow and Apache Parquet, easy-to-use columnar OLAP databases like DuckDB, and broader adoption of geospatial cloud-native data formats like Cloud-Optimized GeoTIFF and GeoParquet, we believe there\u2019s a window for a serverless geospatial OLAP engine. Moreover, serverless computing has emerged as a prominent trend, delegating the management of infrastructure and dynamically scaling resources in response to demand, leading to heightened flexibility and cost efficiency. Leveraging serverless cloud infrastructure like AWS Lambda, Azure Functions, Google Cloud Functions, or Cloudflare Workers enables event-driven processing closer to the data source."}),"\n",(0,o.jsx)(a.p,{children:"Parquet files have become the standard file format for columnar data and have helped to commoditize the decoupling of storage and compute by enabling queries directly on object storage like AWS S3. GeoParquet \u2013 a specification for storing point, line, and polygon geometries in Parquet \u2013 has seen recent momentum as a fast storage format for geospatial vector data and has started to be integrated into industry-standard tools like GDAL. Moreover, with spatial partitioning, operations can be broken down into small independent parts that execute simultaneously in multiple processes. For geospatial array data like satellite imagery, Cloud-Optimized GeoTIFF \u2013 an extension to GeoTIFF that enables chunked access via HTTP range requests \u2013 has taken hold as the standard way to store geospatial image data, with petabytes publicly available from AWS\u2019 open data program and buy-in from major vendors like USGS and Planet."}),"\n",(0,o.jsx)(a.p,{children:"Apache Arrow has become the universal in-memory columnar data format for columnar, analytic data because its language-independent specification enables easier movement of data between languages and frameworks. Moreover GeoArrow \u2013 an incubating specification for storing geospatial data in Arrow \u2013 gives us a way to move geospatial data from Python to compiled code for free, and will likely serve as the foundation for an ecosystem of large-data geospatial tools. Already in the frontend, deck.gl can use GeoArrow-style data buffers to visualize millions of coordinates with no serialization costs."}),"\n",(0,o.jsx)(a.p,{children:"As a result of all these trends, smaller data can be transferred to and processed on serverless cloud services in ways that are not possible ever before. Public clouds enable event-driven compute services that automatically scale, which makes for simple infrastructure and dependency management. Managed offerings reduce the complexities of data pipelines enabling geospatial workloads of any size to run on demand \u2013 to empower users with the ability to go from code to map, instantly."}),"\n",(0,o.jsx)(a.h2,{id:"why-fused",children:"Why Fused?"}),"\n",(0,o.jsx)(a.p,{children:"Fused instantly converts user\u2019s Python code to workflows and maps in Jupyter notebooks, low-code web apps, the Fused Workbench web-app, ETL pipelines, or any tool that consumes HTTP API endpoints. Fused lets developers run real-time serverless operations at any scale and build responsive maps, dashboards, and reports. Developers develop in production and run on any scale data without infrastructure friction using serverless parallel computing powered by advanced caching of geo-partitioned data. This enables bringing interoperable workflows, apps, and maps to the user's preferred stack and avoiding vendor lock-in."}),"\n",(0,o.jsx)(a.p,{children:"With Fused, users find, reuse, and share User Defined Functions (UDFs) in the Fused vibrant community. Fused User Defined Functions (UDFs) are building blocks of serverless geospatial operations that integrate across the stack - with Planetary Computer, Google Earth Engine, Big Query, Snowflake, DuckDB, and more. They load datasets from the cloud ecosystem such as NASA, NOAA, US Census, and Overture. Fused serverless API turns these UDFs into live HTTP endpoints that load their output into any tools."}),"\n",(0,o.jsx)(a.p,{children:"Fused allows people for the first time to easily work with geospatial data and integrate it with modern data tools. This is a radical departure from times when you manually conduct multistep processes fragmented across tools and data standards with the help of an army of data engineers and infra (if they are lucky) just to render data on a map. Fused is built to be the interoperable glue between geospatial data systems, and we\u2019re excited to bring best-in-class cloud infrastructure and distributed computing to this industry."}),"\n",(0,o.jsx)(a.p,{children:"Join us in our journey to break from old geospatial infrastructure. Let's revolutionize geospatial technology together! \ud83c\udf0e\ud83d\ude80"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"The Fused Founding Team"}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8748:(e,a,t)=>{t.d(a,{A:()=>o});const o=t.p+"assets/images/code-to-map-instantly-700120389504b5148f017ee1e8491366.jpg"},8453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>r});var o=t(6540);const s={},n=o.createContext(s);function i(e){const a=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(n.Provider,{value:a},e.children)}}}]);