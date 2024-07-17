"use strict";(self.webpackChunkfused_docs=self.webpackChunkfused_docs||[]).push([[476],{3608:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var o=s(4848),i=s(8453);const l={sidebar_label:"_public_api",title:"fused.api._public_api"},t=void 0,r={id:"reference/fused/api/_public_api",title:"fused.api._public_api",description:"job\\get\\logs",source:"@site/docs/reference/fused/api/_public_api.md",sourceDirName:"reference/fused/api",slug:"/reference/fused/api/_public_api",permalink:"/reference/fused/api/_public_api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"_public_api",title:"fused.api._public_api"},sidebar:"tutorialSidebar",previous:{title:"Top-Level Functions",permalink:"/python-sdk/top-level-functions"},next:{title:"api",permalink:"/reference/fused/api/"}},c={},d=[{value:"job_get_logs",id:"job_get_logs",level:2},{value:"job_print_logs",id:"job_print_logs",level:2},{value:"job_tail_logs",id:"job_tail_logs",level:2},{value:"job_get_status",id:"job_get_status",level:2},{value:"job_cancel",id:"job_cancel",level:2},{value:"job_get_exec_time",id:"job_get_exec_time",level:2},{value:"job_wait_for_job",id:"job_wait_for_job",level:2}];function j(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"job_get_logs",children:"job_get_logs"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def job_get_logs(job: CoerceableToJobId,\n                 since_ms: Optional[int] = None) -> List[Any]\n"})}),"\n",(0,o.jsx)(n.p,{children:"Fetch logs for a job"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"job"})," - the identifier of a job or a ",(0,o.jsx)(n.code,{children:"RunResponse"})," object."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"since_ms"})," - Timestamp, in milliseconds since epoch, to get logs for. Defaults to None for all logs."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,o.jsx)(n.p,{children:"Log messages for the given job."}),"\n",(0,o.jsx)(n.h2,{id:"job_print_logs",children:"job_print_logs"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def job_print_logs(job: CoerceableToJobId,\n                   since_ms: Optional[int] = None,\n                   file: Optional[IO] = None) -> None\n"})}),"\n",(0,o.jsx)(n.p,{children:"Fetch and print logs for a job"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"job"})," - the identifier of a job or a ",(0,o.jsx)(n.code,{children:"RunResponse"})," object."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"since_ms"})," - Timestamp, in milliseconds since epoch, to get logs for. Defaults to None for all logs."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"file"})," - Where to print logs to. Defaults to sys.stdout."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,o.jsx)(n.p,{children:"None"}),"\n",(0,o.jsx)(n.h2,{id:"job_tail_logs",children:"job_tail_logs"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def job_tail_logs(job: CoerceableToJobId,\n                  refresh_seconds: float = 1,\n                  sample_logs: bool = True,\n                  timeout: Optional[float] = None,\n                  get_logs_retries: int = 1)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Continuously print logs for a job"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"job"})," - the identifier of a job or a ",(0,o.jsx)(n.code,{children:"RunResponse"})," object."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"refresh_seconds"})," - how frequently, in seconds, to check for new logs. Defaults to 1."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"sample_logs"})," - if true, print out only a sample of logs. Defaults to True."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"timeout"})," - if not None, how long to continue tailing logs for. Defaults to None for indefinite."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"get_logs_retries"})," - Number of additional retries for log requests. Defaults to 1."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"job_get_status",children:"job_get_status"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def job_get_status(job: CoerceableToJobId) -> RunResponse\n"})}),"\n",(0,o.jsx)(n.p,{children:"Fetch the status of a running job"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"job"})," - the identifier of a job or a ",(0,o.jsx)(n.code,{children:"RunResponse"})," object."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,o.jsx)(n.p,{children:"The status of the given job."}),"\n",(0,o.jsx)(n.h2,{id:"job_cancel",children:"job_cancel"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def job_cancel(job: CoerceableToJobId) -> RunResponse\n"})}),"\n",(0,o.jsx)(n.p,{children:"Cancel an existing job"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"job"})," - the identifier of a job or a ",(0,o.jsx)(n.code,{children:"RunResponse"})," object."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,o.jsx)(n.p,{children:"A new job object."}),"\n",(0,o.jsx)(n.h2,{id:"job_get_exec_time",children:"job_get_exec_time"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def job_get_exec_time(job: CoerceableToJobId) -> timedelta\n"})}),"\n",(0,o.jsx)(n.p,{children:"Determine the execution time of this job, using the logs."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,o.jsx)(n.p,{children:"Time the job took. If the job is in progress, time from first to last log message is returned."}),"\n",(0,o.jsx)(n.h2,{id:"job_wait_for_job",children:"job_wait_for_job"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def job_wait_for_job(job: CoerceableToJobId,\n                     poll_interval_seconds: float = 5,\n                     timeout: Optional[float] = None) -> RunResponse\n"})}),"\n",(0,o.jsx)(n.p,{children:"Block the Python kernel until this job has finished"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"poll_interval_seconds"})," - How often (in seconds) to poll for status updates. Defaults to 5."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"timeout"})," - The length of time in seconds to wait for the job. Defaults to None."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Raises"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"TimeoutError"})," - if waiting for the job timed out."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,o.jsx)(n.p,{children:"The status of the given job."})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var o=s(6540);const i={},l=o.createContext(i);function t(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);