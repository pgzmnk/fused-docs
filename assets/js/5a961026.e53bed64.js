"use strict";(self.webpackChunkfused_docs=self.webpackChunkfused_docs||[]).push([[8999],{4325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>h,toc:()=>p});var s=t(4848),i=t(8453),o=t(6012);const a=t.p+"assets/images/gh1-2e7b9dcea27060e1ce21799d19e5119e.png",r=t.p+"assets/images/gh2-c15da0a8866ba3b4c0ec1d380e7e15ad.png",l=t.p+"assets/images/gh3-3a27bf18b9f647e3e34c4f0ea8a0feb0.png",d={},c="Utilities",h={id:"basics/utilities",title:"Utilities",description:"Saving UDFs",source:"@site/docs/basics/utilities.mdx",sourceDirName:"basics",slug:"/basics/utilities",permalink:"/basics/utilities",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pacific Highways",permalink:"/basics/usecases/pacific"},next:{title:"FAQ",permalink:"/basics/faq"}},u={},p=[{value:"Saving UDFs",id:"saving-udfs",level:2},{value:"Utility modules",id:"utility-modules",level:2},{value:"From local",id:"from-local",level:3},{value:"From GitHub",id:"from-github",level:3},{value:"Cache",id:"cache",level:2},{value:"Minimal example",id:"minimal-example",level:4},{value:"Intermediate example",id:"intermediate-example",level:4},{value:"Download",id:"download",level:2},{value:"Example: download <code>.zip</code> file",id:"example-download-zip-file",level:3},{value:"File systems",id:"file-systems",level:2},{value:"<code>fd://</code> S3 bucket",id:"fd-s3-bucket",level:3},{value:"<code>/mnt/cache</code> disk",id:"mntcache-disk",level:3},{value:"Environment variables",id:"environment-variables",level:2},{value:"Hosted API",id:"hosted-api",level:2},{value:"Generate endpoints with Workbench",id:"generate-endpoints-with-workbench",level:3},{value:"Shareable public endpoints",id:"shareable-public-endpoints",level:4},{value:"Private endpoints",id:"private-endpoints",level:4},{value:"Generate endpoints with <code>fused-py</code>",id:"generate-endpoints-with-fused-py",level:3},{value:"Get an account&#39;s private token",id:"get-an-accounts-private-token",level:4},{value:"Create and manage shared tokens (recommended)",id:"create-and-manage-shared-tokens-recommended",level:4},{value:"Manage shared tokens",id:"manage-shared-tokens",level:4},{value:"Single File HTTP endpoints",id:"single-file-http-endpoints",level:4},{value:"Tile HTTP endpoints",id:"tile-http-endpoints",level:4},{value:"Call UDFs",id:"call-udfs",level:3},{value:"Call UDFs with Python",id:"call-udfs-with-python",level:4},{value:"Call UDF and return its output",id:"call-udf-and-return-its-output",level:5},{value:"Call UDF asynchronously and return its output",id:"call-udf-asynchronously-and-return-its-output",level:5},{value:"Import as a UDF object",id:"import-as-a-udf-object",level:5},{value:"Call UDFs with HTTP requests",id:"call-udfs-with-http-requests",level:4},{value:"Shared token",id:"shared-token",level:5},{value:"Private token",id:"private-token",level:5},{value:"Response formats",id:"response-formats",level:4},{value:"GitHub Integration",id:"github-integration",level:2},{value:"Connect your GitHub repository",id:"connect-your-github-repository",level:3}];function m(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"utilities",children:"Utilities"}),"\n",(0,s.jsx)(n.h2,{id:"saving-udfs",children:"Saving UDFs"}),"\n",(0,s.jsx)(n.p,{children:"UDFs are saved as a directory of associated files containing the UDF's code, utility modules, and metadata, and documentation. This section explains how to save UDFs and load UDFs."}),"\n",(0,s.jsxs)(n.p,{children:["For example, the following snippet saves a UDF in a local directory, ",(0,s.jsx)(n.code,{children:"Sample_UDF"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import fused\n\n@fused.udf\ndef my_udf():\n    return \"Hello from Fused!\"\n\n# Save locally\nmy_udf.to_directory('Sample_UDF')\n"})}),"\n",(0,s.jsx)(n.p,{children:"The directory contains the UDF's documentation, code, metadata, and utility function code."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u2514\u2500\u2500 Sample_UDF\n    \u251c\u2500\u2500 README.MD\n    \u251c\u2500\u2500 Sample_UDF.py\n    \u251c\u2500\u2500 meta.json\n    \u2514\u2500\u2500 utils.py\n"})}),"\n",(0,s.jsx)(n.p,{children:"Files relevant to each UDF are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"README.md"})," Provides details of the UDF's purpose and how it works."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Sample_UDF.py"})," This eponymous Python file contains the UDF's business logic as a Python function decorated with ",(0,s.jsx)(n.code,{children:"@fused.udf"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"meta.json"})," This file contains metadata needed to render the UDF in the Fused explorer and for the UDF to run correctly."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"utils.py"})," This Python file contains helper functions the UDF (optionally) imports and references."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"utility-modules",children:"Utility modules"}),"\n",(0,s.jsx)(n.p,{children:"Utility modules enhance the functionality and maintainability of UDFs."}),"\n",(0,s.jsx)(n.p,{children:"As UDFs grow in complexity, it's useful to modularize the code to make it reusable and composable. It's also a good practice to keep only the essential \"business logic\" in the decorated UDF function - this makes it easy to know what a UDF does at a glance."}),"\n",(0,s.jsx)(n.p,{children:"With this in mind, a Fused UDF can optionally reference a module to import Python objects from it, with an import statement as if importing from a Python package. These modules are reusable Python functions that promote code reuse and speed up development time. UDFs can import from a variety of sources: from the local environment, from GitHub, and from other UDFs. This section shows how to import modules into UDFs form each of these sources."}),"\n",(0,s.jsx)(n.h3,{id:"from-local",children:"From local"}),"\n",(0,s.jsx)(n.p,{children:"Local modules are Python files in the same environment as the UDF."}),"\n",(0,s.jsxs)(n.p,{children:['In the Workbench, the "module" code editor tab is the place for helper functions and other associated Python objects for the UDF to import. Keep in mind that the module\'s name is configurable in order to avoid naming collisions. In this example, UDF imports the function ',(0,s.jsx)(n.code,{children:"arr_to_plasma"})," from its module, which is named ",(0,s.jsx)(n.code,{children:"utils"}),". The function contains support logic the UDF uses it to transform an array."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@fused.udf\ndef udf(bbox):\n    from utils import arr_to_plasma\n    ...\n    return arr_to_plasma(arr.values, min_max=(0, .8))\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://fused-magic.s3.us-west-2.amazonaws.com/docs_assets/image-33.png",alt:"Alt text"})}),"\n",(0,s.jsxs)(n.p,{children:["When importing a module from a Python environment other than Workbench, the module must be specified as the locally-scoped file name in the ",(0,s.jsx)(n.code,{children:"headers"})," argument of the ",(0,s.jsx)(n.code,{children:"@fused.udf"})," decorator. This lets Fused know how to complete the reference."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@fused.udf(\n    headers=['utils.py']\n)\ndef udf(bbox):\n    from utils import arr_to_plasma\n    ...\n    return arr_to_plasma(arr.values, min_max=(0, .8))\n"})}),"\n",(0,s.jsx)(n.h3,{id:"from-github",children:"From GitHub"}),"\n",(0,s.jsx)(n.p,{children:"Fused UDFs can import utility modules from other UDFs. This enables the community and teams to share and reuse version controlled helper functions. Once a module is loaded, it can be used as a standard Python module to reference functions and objects using dot notation."}),"\n",(0,s.jsxs)(n.p,{children:["Load a UDF with ",(0,s.jsx)(n.a,{href:"/python-sdk/top-level-functions/#load",children:"fused.load"})," then reference its utilities module. The utilities modules is referenced by its file name - in this example, the ",(0,s.jsx)(n.a,{href:"https://github.com/fusedio/udfs/blob/0dcc8/public/common/utils.py",children:"file"})," is named ",(0,s.jsx)(n.code,{children:"utils"}),", it's found within the UDF named ",(0,s.jsx)(n.code,{children:"common"}),", and it contains the ",(0,s.jsx)(n.code,{children:"table_to_tile"})," helper function. Notice how the commit sha ",(0,s.jsx)(n.code,{children:"0dcc8"})," is included in the URL to ensure the UDF is loaded from a specific commit."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'my_utilities = fused.load(\n    "https://github.com/fusedio/udfs/blob/0dcc8/public/common/"\n    ).utils\n\nmy_utilities.table_to_tile(...)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"cache",children:"Cache"}),"\n",(0,s.jsx)(n.p,{children:"Fused runs UDFs from top to bottom each time. This execution model makes development easy, but can be encumbered if long-running helper functions are called again and again."}),"\n",(0,s.jsx)(n.p,{children:"Sometimes a UDF might take a while to download or process data. When this happens, developers can take advantage of Fused's built-in caching. Caching stores the results of slow function calls so they only need to run once."}),"\n",(0,s.jsxs)(n.p,{children:["All a developer must do is place slow code inside a helper function, decorate the function with ",(0,s.jsx)(n.code,{children:"@fused.cache"}),", and assign the returned data object to a variable. The object will persist across runs. This empowers users to quickly iterate on downstream code without having to wait for the slow code to run each time."]}),"\n",(0,s.jsxs)(n.p,{children:["Fused caches the function's output using a unique hash identifier generated based on the function's code, the value of its parameters, and the ",(0,s.jsx)(n.code,{children:"_cache_id"})," argument."]}),"\n",(0,s.jsx)(n.h4,{id:"minimal-example",children:"Minimal example"}),"\n",(0,s.jsxs)(n.p,{children:["To illustrate, this function accepts an argument and a keywork argument. When the function is called to set ",(0,s.jsx)(n.code,{children:"output_1"})," and ",(0,s.jsx)(n.code,{children:"output_2"}),", Fused caches the output of each call as separate objects. That way, the UDF only runs the function once for each set of passed arguments."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'@fused.cache\ndef sample_function(name, company="Fused"):\n    # Function logic\n    return f"{name}, at {company}, cached this function\'s output."\n\n@fused.udf\ndef udf(bbox):\n    ...\n    output_1 = sample_function("Sina")\n    output_2 = sample_function("Plinio", company="Fused.io")\n    ...\n\n'})}),"\n",(0,s.jsx)(n.h4,{id:"intermediate-example",children:"Intermediate example"}),"\n",(0,s.jsx)(n.p,{children:"At this point, ony might ask: if UDFs run for each tile in the viewport, how does Fused distinguish the cache for each tile?"}),"\n",(0,s.jsxs)(n.p,{children:["UDFs give spatial awareness to the cache decorator by setting ",(0,s.jsx)(n.code,{children:"_cache_id"})," as string identifier unique to the tile's ",(0,s.jsx)(n.code,{children:"bbox"}),". This can for example be a string such as ",(0,s.jsx)(n.code,{children:"str(bbox.to_json())"}),", or something more complex that could include a date to distinguish cached outputs by."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that a custom caching directory can be set with the optional ",(0,s.jsx)(n.code,{children:"path"})," parameter."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'@fused.cache(path=\'optional_cache_dir\')\ndef sample_function(name, company="Fused"):\n    # Function logic\n    return f"{name}, at {company}, cached this function\'s output."\n\n@fused.udf\ndef udf(bbox):\n    ...\n    output = sample_function("Plinio", company="Fused.io", _cache_id=str(bbox.to_json())")\n    ...\n'})}),"\n",(0,s.jsx)(n.h2,{id:"download",children:"Download"}),"\n",(0,s.jsx)(n.p,{children:"Fused Workbench runs UDFs from top to bottom each time code changes. This means objects in the UDF are recreated each time, which can slow down a UDF that downloads files from a remote server."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\ud83d\udca1 Downloaded files are written to a mounted volume shared across all UDFs in an organization. This means that a file downloaded by one UDF can be read by other UDFs."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Fused addresses the latency of downloading files with the ",(0,s.jsx)(n.code,{children:"download"})," utility function. It stores files in the mounted filesystem so they only download the first time."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\ud83d\udca1 Because a Tile UDF runs multiple chunks in parallel, the ",(0,s.jsx)(n.code,{children:"download"})," function sets a signal lock during the first download attempt, to ensure the download happens only once."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"example-download-zip-file",children:["Example: download ",(0,s.jsx)(n.code,{children:".zip"})," file"]}),"\n",(0,s.jsxs)(n.p,{children:["To download a file to disk, call ",(0,s.jsx)(n.code,{children:"fused.core.download"}),". The function downloads the file only on the first execution, and returns the file path for downstream functions to reference."]}),"\n",(0,s.jsxs)(n.p,{children:["This example downloads a ",(0,s.jsx)(n.code,{children:".zip"})," file then returs it as a GeoDataFrame. Note how GeoPandas reads the local file path returned by ",(0,s.jsx)(n.code,{children:"download"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@fused.udf\ndef udf(url='https://www2.census.gov/geo/tiger/TIGER_RD18/STATE/11_DISTRICT_OF_COLUMBIA/11/tl_rd22_11_bg.zip'):\n    import fused\n    import geopandas as gpd\n\n    # Download zip file\n    out_path = fused.core.download(url=url, file_path='out.zip')\n\n    # Show path to file\n    print(out_path)\n\n    return gpd.read_file(out_path)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"file-systems",children:"File systems"}),"\n",(0,s.jsx)(n.p,{children:"The Fused runtime has two file systems to persist and share artifacts across UDF runs: an S3 bucket and a disk file system. These are used to store downloaded or generated objects, environment variables, and auxiliary files."}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"Access to the file systems is tightly scoped at the organization level, so files stored in either system can only be accessed by accounts in the same organization."}),(0,s.jsx)(n.p,{children:"Given the flexibility of Fused to run any Python code on files in the file system, users should take precautions standard to working with sensitive files."})]}),"\n",(0,s.jsxs)(n.h3,{id:"fd-s3-bucket",children:[(0,s.jsx)(n.code,{children:"fd://"})," S3 bucket"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"fd://"})," bucket file system serves as a namespace for an S3 bucket provisioned by Fused Cloud for your organization. It provides a unified interface for accessing files and directories stored within the bucket, abstracting away the complexities of direct interaction with S3. Fused helper functions access it like an object on S3."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(9279).A+"",width:"1836",height:"809"})}),"\n",(0,s.jsxs)(n.p,{children:["In this image, the bucket path ",(0,s.jsx)(n.code,{children:"s3://fused-users/fused/plinio/dir-name/file.parquet"})," is conveniently aliased as ",(0,s.jsx)(n.code,{children:"fd://dir-name/file.parquet"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"For example, to fetch a file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'fused.get("fd://dir-name/file.parquet")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or, for example, to ingest a table:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'job = fused.ingest(\n    input="https://www2.census.gov/geo/tiger/TIGER_RD18/STATE/06_CALIFORNIA/06/tl_rd22_06_bg.zip",\n    output="fd://dir-name/census/ca_bg_2022/",\n).run_remote()\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"mntcache-disk",children:[(0,s.jsx)(n.code,{children:"/mnt/cache"})," disk"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"/mnt/cache"})," disk file system is the UDF runtime's local directory that persists across UDF runs. Use it store downloaded files, the output of cached functions, access keys, and to set environment variables with ",(0,s.jsx)(n.code,{children:".env"})," files."]}),"\n",(0,s.jsx)(n.p,{children:"To list files in the directory, run this in a UDF."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import os\n\nfor each in os.listdir('/mnt/cache/'):\n    print(each)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,s.jsxs)(n.p,{children:["Save constants and secrets to an ",(0,s.jsx)(n.code,{children:".env"})," file to make them available to your UDFs via environment variables."]}),"\n",(0,s.jsxs)(n.p,{children:["First, run a UDF that sets variables in an ",(0,s.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To be accessible to all UDF run events, the file must be placed on the runtime's mount path ",(0,s.jsx)(n.code,{children:"/mnt/cache/"}),"."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'@fused.udf\ndef udf():\n    env_vars = """\n    MY_ENV_VAR=123\n    DB_USER=username\n    DB_PASS=******\n    """\n\n    # Path to .env file in disk file system\n    env_file_path = \'/mnt/cache/.env\'\n\n    # Write the environment variables to the .env file\n    with open(env_file_path, \'w\') as file:\n        file.write(env_vars)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then, in a different UDF, load the variables into the environment."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"@fused.udf\ndef udf():\n    from dotenv import load_dotenv\n\n    # Load environment variable\n    env_file_path = '/mnt/cache/.env'\n    load_dotenv(env_file_path, override=True)\n    print(f\"Updated MY_ENV_VAR: {os.getenv('MY_ENV_VAR')}\")\n"})}),"\n",(0,s.jsx)(n.h2,{id:"hosted-api",children:"Hosted API"}),"\n",(0,s.jsx)(n.p,{children:"Fused automatically creates HTTP endpoints for every UDF saved in the Fused cloud."}),"\n",(0,s.jsx)(n.p,{children:"Using the Fused Hosted API supercharges your stack with the ability to trigger and load the output of any scale workflows. API calls automatically provision serverless compute resources to run workflows in parallel using advanced caching and geo partitioning - without your team needing to spend time on setup."}),"\n",(0,s.jsx)(n.p,{children:"Endpoints created with Fused Hosted API seamlessly integrate with tools such as:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tile-based maps: Simply pass the endpoint into tile-based maps such as open source JavaScript tools (e.g. leaflet, Deck.gl, and Kepler.gl), proprietary web-based apps (such as Felt and Foursquare Studio), or desktop based tools such as ArcGIS, ESRI, and QGIS."}),"\n",(0,s.jsx)(n.li,{children:"Apps that make HTTP requests: Load data into low-code app builders such as Streamlit & Retool."}),"\n",(0,s.jsx)(n.li,{children:"Apps that render embeddable maps: Embed responsive maps to significantly enhance the utility and interactivity of documentation sites and apps, such as Notion."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Shared endpoints cache UDF outputs by default for each combination of code and input parameters, which can be useful for performance and cost savings. A client application calling an endpoint will compute the UDF only once for each unique input, and subsequent calls will return the cached result. This might be experienced in the form of a slight latency in the first call, with subsequent calls running faster."})}),"\n",(0,s.jsxs)(n.p,{children:["The following sections describes how to create a UDF endpoint either in Workbench or with the Fused Python SDK, and how to authenticate requests to call the endpoint. They also describe how to make authenticated calls to these endpoints. Browse the ",(0,s.jsx)(n.a,{href:"/basics/out/",children:'"Get data out"'})," section for examples of how to use them to load data into specific tools."]}),"\n",(0,s.jsx)(n.h3,{id:"generate-endpoints-with-workbench",children:"Generate endpoints with Workbench"}),"\n",(0,s.jsx)(n.p,{children:'Once a UDF is saved in Workbench, the "Settings" tab of the editor shows code snippets that can be used to call the UDF from different environments.'}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:'Endpoints can be called with "private" or "shared" authentication tokens. Shared tokens are easy to create and revoke. Use shared tokens to call UDFs from 3rd party applications or to share them with others.'})}),"\n",(0,s.jsx)(n.h4,{id:"shareable-public-endpoints",children:"Shareable public endpoints"}),"\n",(0,s.jsx)(n.p,{children:'The "Share" subsection contains snippets with shared tokens and signed URLs.'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"HTTP"})," is the URL to call the UDF endpoint."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cURL"})," is the command to call the UDF endpoint from the terminal."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Python"})," is the code to call the UDF endpoint from a Python environment using the token."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Token"})," is the shared token, which you'll notice appears in the above snippets."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://fused-magic.s3.us-west-2.amazonaws.com/docs_assets/share.png",alt:"alt text"})}),"\n",(0,s.jsx)(n.h4,{id:"private-endpoints",children:"Private endpoints"}),"\n",(0,s.jsx)(n.p,{children:'The "Snippets" subsection below it contains snippets that can only be called with the authoring account\'s authentication.'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cURL"})," is the command to call the UDF endpoint from the terminal, which requires the authoring account's private token."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Python"})," is the code to call the UDF endpoint from a Python environment using the token."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Load this UDF"})," is loads the UDF into a Python environment where it can be modified, chained with other UDFs, or called."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://fused-magic.s3.us-west-2.amazonaws.com/docs_assets/snippets.png",alt:"alt text"})}),"\n",(0,s.jsxs)(n.h3,{id:"generate-endpoints-with-fused-py",children:["Generate endpoints with ",(0,s.jsx)(n.code,{children:"fused-py"})]}),"\n",(0,s.jsx)(n.h4,{id:"get-an-accounts-private-token",children:"Get an account's private token"}),"\n",(0,s.jsxs)(n.p,{children:["Python environments where the authentication flow completed successfully store a credentials key in the default location ",(0,s.jsx)(n.code,{children:" ~/.fused/credentials"}),". Calls to UDFs from those environments will use that key, unless a token for a different account is explicitly set in the call. Making calls to endpoints from a non-authenticated environment will need the authenticated account's access token, which can be retrieved with the following commands."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from fused._auth import CREDENTIALS\n\nCREDENTIALS.credentials.access_token\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"danger",children:[(0,s.jsx)(n.p,{children:'Note that the "private" token can access all UDFs and should be kept private. The recommended approach is instead to use "shared" tokens with tightly scoped permissions, as detailed below.'}),(0,s.jsx)(n.p,{children:"Remember that tokens are tied to the account that created them and requests to their corresponding endpoints will accrue charges on that account."})]}),"\n",(0,s.jsx)(n.p,{children:"This is how to call UDF endpoints via HTTP requests with the token."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -XGET https://app.fused.io/server/v1/realtime-shared/$SHARED_TOKEN/run/file\n"})}),"\n",(0,s.jsx)(n.h4,{id:"create-and-manage-shared-tokens-recommended",children:"Create and manage shared tokens (recommended)"}),"\n",(0,s.jsx)(n.p,{children:"Shared tokens are tightly scoped to a single UDF, and can easily be revoked. Creating a shared token for a UDF returns a token object that, among other attributes, contains the token as a string and sample endpoint URLs."}),"\n",(0,s.jsx)(n.p,{children:"This is how to to call UDF endpoints in Python with signed token URLs."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from fused.api import FusedAPI\napi = FusedAPI()\n\ntoken_object = api.create_udf_access_token(udf_email="user@fused.io", udf_name="caltrain_live_location")\noutput = fused.core.run_shared_file(token=token_object.token, my_param="...")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"manage-shared-tokens",children:"Manage shared tokens"}),"\n",(0,s.jsx)(n.p,{children:"Fetch a specific UDF token object using its unique token string:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"token_object = api.get_udf_access_token(token=token.token)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Fetch all UDF tokens:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"token_objects = api.get_udf_access_tokens()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Update a specific UDF token using its unique token string:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"token_object = api.update_udf_access_token(token=token.token, enabled=True)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Delete a specific UDF token using its unique token string:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"api.delete_udf_access_token(token=token.token, enabled=True)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Similarly, signed URLs endpoints can be created that can be called from another application via HTTP requests."}),"\n",(0,s.jsx)(n.h4,{id:"single-file-http-endpoints",children:"Single File HTTP endpoints"}),"\n",(0,s.jsxs)(n.p,{children:["Single file HTTP endpoints are suitable for handling individual requests, ideal for scenarios where a single resource is required, such as loading data into ",(0,s.jsx)(n.a,{href:"/basics/out/googlesheets/",children:"Google Sheets"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from fused.api import FusedAPI\napi = FusedAPI()\n\n# URL for single call\napi.create_udf_access_token(udf_email="user@fused.io", udf_name="caltrain_live_location").get_file_url()\n'})}),"\n",(0,s.jsx)(n.h4,{id:"tile-http-endpoints",children:"Tile HTTP endpoints"}),"\n",(0,s.jsxs)(n.p,{children:["Tile HTTP endpoints are designed for serving map applications that consume Tiles, such as ",(0,s.jsx)(n.a,{href:"/basics/out/lonboard/",children:"Lonboard"})," or ",(0,s.jsx)(n.a,{href:"/basics/out/geemap/",children:"geemap"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from fused.api import FusedAPI\napi = FusedAPI()\n\n# URL for XYZ tiles\napi.create_udf_access_token(udf_email="user@fused.io", udf_name="caltrain_live_location").get_tile_url()\n'})}),"\n",(0,s.jsx)(n.h3,{id:"call-udfs",children:"Call UDFs"}),"\n",(0,s.jsx)(n.p,{children:"UDFs can be triggered via the Python SDK or HTTP requests, and they can return data in different formats depending on how they're called. The following sections describe how to call UDFs and how to configure calls to return data in different formats."}),"\n",(0,s.jsx)(n.h4,{id:"call-udfs-with-python",children:"Call UDFs with Python"}),"\n",(0,s.jsx)(n.p,{children:"The Fused Python SDK exposes methods to call UDFs. In Python environments authenticated to Fused, the UDF be called or imported in these 3 ways:"}),"\n",(0,s.jsx)(n.h5,{id:"call-udf-and-return-its-output",children:"Call UDF and return its output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'fused.run("user@fused.io", "Overture_Maps", x=2808, y=6542, z=14, my_udf_parameter=5)\n'})}),"\n",(0,s.jsx)(n.h5,{id:"call-udf-asynchronously-and-return-its-output",children:"Call UDF asynchronously and return its output"}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://pypi.org/project/nest-asyncio/",children:"nest_asyncio"})," might be required to run UDFs async from Jupyter Notebooks."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"!pip install nest-asyncio -q\nimport nest_asyncio\nnest_asyncio.apply()\n"})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import asyncio\nimport fused\n\n# Run the UDF in an async function\nasync def main():\n    return await fused.run("user@fused.io", "Overture_Maps", x=2808, y=6542, z=14, sync=False)\n\n# Run the coroutine and capture the result\ngdf = asyncio.run(main())\n\n# Use the returned value outside the event loop\ngdf.head()\n\n'})}),"\n",(0,s.jsx)(n.h5,{id:"import-as-a-udf-object",children:"Import as a UDF object"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'my_udf = fused.core.load_udf_from_fused("user@fused.io", "caltrain_live_location")\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Did you know UDFs can also call other UDFs? It's an easy way to chain UDFs together or even run them in parallel."})}),"\n",(0,s.jsx)(n.h4,{id:"call-udfs-with-http-requests",children:"Call UDFs with HTTP requests"}),"\n",(0,s.jsxs)(n.p,{children:["Beyond Python, other frameworks can call the UDF endpoint via HTTP requests and receive output data in the response. This makes it easy to load data from UDFs into Tile-based mapping tools such as ",(0,s.jsx)(n.a,{href:"https://deck.gl/docs/api-reference/geo-layers/tile-layer",children:"DeckGL"}),", ",(0,s.jsx)(n.a,{href:"https://docs.mapbox.com/mapbox-gl-js/example/vector-source/",children:"Mapbox"}),", and ",(0,s.jsx)(n.a,{href:"https://felt.com/",children:"Felt"}),", or no-code data analytics environments like ",(0,s.jsx)(n.a,{href:"https://support.google.com/docs/answer/3093335?hl=en",children:"Google Sheets"})," and ",(0,s.jsx)(n.a,{href:"https://docs.retool.com/apps/web/guides/components/custom",children:"Retool"}),". Read the ",(0,s.jsx)(n.a,{href:"/basics/out/",children:'"Get data out"'})," section of the documentation for example integrations with your favorite tools."]}),"\n",(0,s.jsx)(n.h5,{id:"shared-token",children:"Shared token"}),"\n",(0,s.jsxs)(n.p,{children:["To run a UDF via HTTP request, generate a ",(0,s.jsx)(n.a,{href:"/basics/core-concepts/#generate-endpoints-with-workbench",children:"signed UDF endpoint"})," then modify the provided URL."]}),"\n",(0,s.jsxs)(n.p,{children:["Structure the URL with the ",(0,s.jsx)(n.code,{children:"file"})," path parameter to run as a single batch operation."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://www.fused.io/server/v1/realtime-shared/******/run/file?dtype_out_raster=png\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To integrate with a tiling service, structure the URL with the ",(0,s.jsx)(n.code,{children:"tiles"})," path paramater, followed by templated ",(0,s.jsx)(n.code,{children:"/{z}/{x}/{y}"})," path parameters. See ",(0,s.jsx)(n.a,{href:"/basics/out/lonboard/",children:"Lonboard"})," for an example."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://www.fused.io/server/v1/realtime-shared/******/run/tiles/{z}/{x}/{y}?dtype_out_raster=png\n"})}),"\n",(0,s.jsx)(n.h5,{id:"private-token",children:"Private token"}),"\n",(0,s.jsxs)(n.p,{children:["Calling UDFs with ",(0,s.jsx)(n.a,{href:"https://swagger.io/docs/specification/authentication/bearer-authentication/",children:"Bearer authentication"})," requires an account's ",(0,s.jsx)(n.a,{href:"/basics/utilities/#get-an-accounts-private-token",children:"private token"}),". The URL structure to run UDFs with the private token varies slightly, as the URL specifies the UDF's name and the owner's user account."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -XGET "https://app.fused.io/server/v1/realtime/fused/api/v1/run/udf/saved/user@fused.io/caltrain_live_location?dtype_out_raster=png" -H "Authorization: Bearer $ACCESS_TOKEN"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"response-formats",children:"Response formats"}),"\n",(0,s.jsxs)(n.p,{children:["The response data format is configured with the ",(0,s.jsx)(n.code,{children:"dtype_out_vector"})," and ",(0,s.jsx)(n.code,{children:"dtype_out_raster"})," parameter. Because the UDF's returned object determines whether response is a vector or raster, both parameters can be specified simultaneously, which the sample snippets show in query parameters like: ",(0,s.jsx)(n.code,{children:"?dtype_out_raster=png&dtype_out_vector=csv"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Vector:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"parquet"}),"\n",(0,s.jsx)(n.li,{children:"geojson"}),"\n",(0,s.jsx)(n.li,{children:"json"}),"\n",(0,s.jsx)(n.li,{children:"feather"}),"\n",(0,s.jsx)(n.li,{children:"csv"}),"\n",(0,s.jsx)(n.li,{children:"mvt"}),"\n",(0,s.jsx)(n.li,{children:"html"}),"\n",(0,s.jsx)(n.li,{children:"excel"}),"\n",(0,s.jsx)(n.li,{children:"xml"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Raster:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"png"}),"\n",(0,s.jsx)(n.li,{children:"gif"}),"\n",(0,s.jsx)(n.li,{children:"jpg"}),"\n",(0,s.jsx)(n.li,{children:"jpeg"}),"\n",(0,s.jsx)(n.li,{children:"webp"}),"\n",(0,s.jsx)(n.li,{children:"tif"}),"\n",(0,s.jsx)(n.li,{children:"tiff"}),"\n"]}),"\n","\n",(0,s.jsx)(n.h2,{id:"github-integration",children:"GitHub Integration"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(o.A,{color:"#3399ff",children:"Enterprise"})," ",(0,s.jsx)(n.em,{children:"This feature is only accessible to organizations with a Fused Enterprise subscription."})]}),"\n",(0,s.jsx)(n.p,{children:"Use Fused's built-in GitHub integration to load UDFs and helper functions directly from your team's private GitHub repository."}),"\n",(0,s.jsxs)(n.p,{children:["As you progress through this section, you'll benefit from learning how to ",(0,s.jsx)(n.a,{href:"/contribute/#publish-a-udf-to-a-github-repository",children:"publish a UDF"})," to your team's GitHub repository and how to ",(0,s.jsx)(n.a,{href:"/basics/utilities/#from-github",children:"load modules"})," from the repo into a new UDF."]}),"\n",(0,s.jsx)(n.p,{children:'You can configure one or multiple GitHub repositories for your organization - which means all accounts under that organization will have read access to the UDFs. UDFs will appear under the "Team UDFs" tab of the UDF explorer. Because those UDFs are read-only, users must first "duplicate" them in order to make changes.'}),"\n","\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:a,alt:"File",style:{width:600}})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"At the moment, the GitHub integration is one-way. Fused can read from the GitHub repository. Managing UDFs in the repository involves direct interaction via git, as explained below."})}),"\n",(0,s.jsx)(n.h3,{id:"connect-your-github-repository",children:"Connect your GitHub repository"}),"\n",(0,s.jsxs)(n.p,{children:["The Fused GitHub app places a webhook on the target repository that listens for changes to the ",(0,s.jsx)(n.code,{children:"main"})," branch. When a change is detected, Fused scans the repository for UDFs and their helper functions, then loads them into the Workbench UDF explorer."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a repo where UDFs will be stored. There's no enforced repo structure because Fused will scan the entire repo for UDFs, although the ",(0,s.jsx)(n.a,{href:"https://github.com/fusedio/udfs",children:"Public UDFs repo"})," can serve as a guideline."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install the Fused GitHub app for your organization. Navigate to ",(0,s.jsx)(n.a,{href:"https://github.com/apps/fused-io",children:"this GitHub URL"}),', click "Configure", and select the GitHub organization that contains the repository.']}),"\n"]}),"\n"]}),"\n","\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:r,alt:"File",style:{width:400}})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Scope the app to the target repository. It's recommended to select only the specific repo."}),"\n"]}),"\n","\n","\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:l,alt:"File",style:{width:400}})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Once the above is complete, get in touch with the Fused team to enable the GitHub integration for your organization."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Confirm the integration is enabled by checking the "Team UDFs" tab in the UDF explorer. UDFs from the GitHub repository will appear in the Workbench UDF explorer under the "Team UDFs" tab.'}),"\n"]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},6012:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var s=t(4848);function i(e){let{children:n,color:t}=e;return(0,s.jsx)("span",{style:{backgroundColor:t,borderRadius:"4px",color:"#fff",padding:"0.2rem 0.5rem",fontWeight:"bold"},children:n})}},9279:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/image-ccf26b7c7aedb7c3d47c32cec5fb91b4.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);