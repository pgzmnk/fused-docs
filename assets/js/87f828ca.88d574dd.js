"use strict";(self.webpackChunkfused_docs=self.webpackChunkfused_docs||[]).push([[1876],{6832:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var t=s(4848),r=s(8453);const l={sidebar_label:"experimental",title:"fused.experimental"},i=void 0,d={id:"reference/fused/experimental",title:"fused.experimental",description:"open\\_project",source:"@site/docs/reference/fused/experimental.md",sourceDirName:"reference/fused",slug:"/reference/fused/experimental",permalink:"/fused-docs/reference/fused/experimental",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"experimental",title:"fused.experimental"},sidebar:"tutorialSidebar",previous:{title:"_udf_ops",permalink:"/fused-docs/reference/fused/core/_udf_ops"},next:{title:"Dependencies",permalink:"/fused-docs/python-sdk/dependencies"}},o={},c=[{value:"open_project",id:"open_project",level:2},{value:"load_udf",id:"load_udf",level:2},{value:"open_table",id:"open_table",level:2},{value:"job",id:"job",level:2},{value:"sign_url",id:"sign_url",level:2},{value:"sign_url_prefix",id:"sign_url_prefix",level:2}];function a(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"open_project",children:"open_project"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def open_project(path: str,\n                 *,\n                 lazy: bool = False,\n                 fetch_table_metadata: Optional[bool] = None,\n                 fetch_samples: Optional[bool] = None,\n                 _fetch_minimal_table_metadata: Optional[bool] = None,\n                 _max_depth: Optional[int] = 1,\n                 _eager: bool = False) -> Project\n"})}),"\n",(0,t.jsx)(n.p,{children:"Open a project folder."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"path"})," - Path to the project folder, e.g. ",(0,t.jsx)(n.code,{children:'"s3://bucket-name/project-name/"'})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"lazy"})," - If True, no metadata about the project is loaded."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fetch_table_metadata"})," - This is passed on to the ",(0,t.jsx)(n.code,{children:"Table"})," open calls."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fetch_samples"})," - This is passed on to the ",(0,t.jsx)(n.code,{children:"Table"})," open calls."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"_fetch_minimal_table_metadata"})," - If True and fetch_table_metadata is also True,\na reduced set of Table metadata will be fetched."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"_max_depth"})," - Maximum depth of folders to load."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"_eager"})," - If True, recursive calls will be made to materialize all virtual\nfolders that ",(0,t.jsx)(n.code,{children:"max_depth"})," would otherwise cause."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"load_udf",children:"load_udf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def load_udf(udf_paths: Sequence[str],\n             *,\n             parameters: Optional[Dict[str, Any]] = None,\n             content_type: Optional[str] = None,\n             load_schema: bool = True,\n             header_paths: Optional[Sequence[Header]] = None) -> UdfRegistry\n"})}),"\n",(0,t.jsx)(n.p,{children:"Load UDF(s) in a UdfRegistry object."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"udf_paths"})," - The paths to the UDF source code files or URLs.\nIf provided as a list, it loads and registers multiple UDFs as a UdfRegistry."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"function"})," - The name of the UDF function to load."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"parameters"})," - A dictionary of parameters to be passed to the UDF."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"table_schema"})," - The schema of the input data table."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"content_type"}),' - The content type of the UDF source, e.g., "file", "py", or "url".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"load_schema"})," - Whether to automatically detect and load the table schema."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"header_paths"})," - A sequence of headers for the UDF."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"UdfRegistry or UDF: Returns a UdfRegistry containing registered UDFs."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Raises"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ValueError: If multiple UDFs with the same name are found in a list of UDF paths."}),"\n",(0,t.jsx)(n.li,{children:"AssertionError: If an unsupported content type is provided."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Examples"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"Load multiple UDFs from a list of files and register them in a UdfRegistry:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'load_udf(udf_paths=["udf1.py", "udf2.py"], header_paths=["header.py"])\nload_udf("my_udf.py", function="my_function", content_type="file")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"open_table",children:"open_table"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def open_table(path: Union[str, DatasetOutputV2],\n               *,\n               fetch_samples: Optional[bool] = None) -> Table\n"})}),"\n",(0,t.jsx)(n.p,{children:"Open a Table object given a path to the root of the table"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"path"})," - The path to the root of the table on remote storage"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fetch_samples"})," - If True, fetch sample on each table when getting dataset metadata."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"A Table object"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Examples"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'table = fused.experimental.open_table("s3://my_bucket/path/to/dataset/table/")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"job",children:"job"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def job(input: Union[\n    str,\n    Dict,\n    JobStepConfig,\n    JobConfig,\n    Sequence[Union[Dict, JobStepConfig, JobConfig]],\n],\n        content_type: Optional[str] = None,\n        ignore_chunk_error: bool = False) -> JobConfig\n"})}),"\n",(0,t.jsx)(n.p,{children:"Construct a JobConfig"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"input"})," - A object or list of objects describing job steps."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"content_type"})," - How to interpret ",(0,t.jsx)(n.code,{children:"input"}),' when it is a string. E.g. "json" for JSON or "fused_job_id" for a Fused Job ID.']}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"A combined job config."}),"\n",(0,t.jsx)(n.h2,{id:"sign_url",children:"sign_url"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def sign_url(path: str) -> str\n"})}),"\n",(0,t.jsx)(n.p,{children:"Create a signed URL to access the path."}),"\n",(0,t.jsx)(n.p,{children:"This function may not check that the file represented by the path exists."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"path"})," - URL to a file, like ",(0,t.jsx)(n.code,{children:"fd://bucket-name/file.parquet"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"HTTPS URL to access the file using signed access."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Examples"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'fused.experimental.sign_url("fd://bucket-name/table_directory/file.parquet")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"sign_url_prefix",children:"sign_url_prefix"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def sign_url_prefix(path: str) -> Dict[str, str]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Create signed URLs to access all blobs under the path."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"path"})," - URL to a prefix, like ",(0,t.jsx)(n.code,{children:"fd://bucket-name/some_directory/"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"Dictionary mapping from blob store key to signed HTTPS URL."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Examples"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'fused.experimental.sign_url_prefix("fd://bucket-name/table_directory/")\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var t=s(6540);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);