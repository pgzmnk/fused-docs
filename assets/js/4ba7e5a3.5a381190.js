"use strict";(self.webpackChunkfused_docs=self.webpackChunkfused_docs||[]).push([[9591],{6467:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=o(4848),r=o(8453);const i={},s="Contribute to Fused \ud83c\udf6a",a={id:"contribute",title:"Contribute to Fused \ud83c\udf6a",description:"Overview",source:"@site/docs/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/contribute",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Layer styling",permalink:"/workbench/viz-styling"}},h={},c=[{value:"Overview",id:"overview",level:2},{value:"Where to start?",id:"where-to-start",level:2},{value:"Share a UDF with the community",id:"share-a-udf-with-the-community",level:2},{value:"Publish a UDF to a GitHub repository",id:"publish-a-udf-to-a-github-repository",level:3},{value:"1. Update the main branch",id:"1-update-the-main-branch",level:4},{value:"2. Create a new feature branch",id:"2-create-a-new-feature-branch",level:4},{value:"3. Introduce a UDF to the repository",id:"3-introduce-a-udf-to-the-repository",level:4},{value:"4. Commit and push your changes",id:"4-commit-and-push-your-changes",level:4},{value:"5. Open a Pull Request (PR)",id:"5-open-a-pull-request-pr",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"contribute-to-fused-",children:"Contribute to Fused \ud83c\udf6a"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Fused welcomes your skills and enthusiasm in support of the geospatial community!"}),"\n",(0,n.jsx)(t.p,{children:"There are numerous opportunities to get involved, from contributing code to engaging the community on Discord, LinkedIn, and other social media platforms."}),"\n",(0,n.jsx)(t.h2,{id:"where-to-start",children:"Where to start?"}),"\n",(0,n.jsxs)(t.p,{children:["A good place to start is to acquaint yourself with Fused by reading this documentation site and joining the conversation in the ",(0,n.jsx)(t.a,{href:"https://bit.ly/fused-discord",children:"Fused Discord channel"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you are brand new to Fused or open-source development, we recommend going through the ",(0,n.jsx)(t.a,{href:"https://github.com/fusedio/udfs",children:"Fused UDFs GitHub"}),". There you'll be able to run sample UDFs in your local Python environment and familiarize yourself with how to write geospatial operations."]}),"\n",(0,n.jsx)(t.h2,{id:"share-a-udf-with-the-community",children:"Share a UDF with the community"}),"\n",(0,n.jsx)(t.p,{children:"Once you get acquainted, we encourage you to write a UDF and share it with the world by submitting a Pull Request into the repo. Publishing a UDF this way will allow others to reproduce and reuse your code, and even provide insight into improving it."}),"\n",(0,n.jsx)(t.p,{children:"When you contribute a UDF to the community, it will appear in the Fused UDF catalog. Your GitHub handle will be listed as the author and will link back to your GitHub profile."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:o(3452).A+"",width:"3732",height:"1778"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Coming soon: A button to submit UDFs with one click from Fused Workbench. For now, follow the GitHub workflow below."})}),"\n",(0,n.jsx)(t.p,{children:"Once you write a UDF, follow these steps to share it with the community."}),"\n",(0,n.jsx)(t.h3,{id:"publish-a-udf-to-a-github-repository",children:"Publish a UDF to a GitHub repository"}),"\n",(0,n.jsx)(t.p,{children:"This section shows how to publish a UDF to a GitHub repository. The same workflow can be used to modify or delete UDFs, but instead performing the corresponding actions on step 3."}),"\n",(0,n.jsx)(t.p,{children:"To keep your code organized with a readable history, and make it easy for the community or your toam to see what you've done and why you did it, we recommend this workflow:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create an account on GitHub if you do not already have one."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["You will need your own fork to work on the code. Go to the ",(0,n.jsx)(t.a,{href:"https://github.com/fusedio/udfs",children:"UDFs"})," repo page and hit the Fork button near the top of the page. This creates a copy of the code under your account on the GitHub server."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Clone your fork to your machine:"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"git clone https://github.com/your-user-name/udfs.git\ncd udfs\ngit remote add upstream https://github.com/fusedio/udfs.git\n"})}),"\n",(0,n.jsx)(t.p,{children:"This creates the directory fused and connects your repository to the upstream (main project) udfs repository."}),"\n",(0,n.jsx)(t.p,{children:"Follow the next steps to contribute a UDF to the Fused UDFs repository."}),"\n",(0,n.jsx)(t.h4,{id:"1-update-the-main-branch",children:"1. Update the main branch"}),"\n",(0,n.jsx)(t.p,{children:"Before starting on new changes to your own UDF code, fetch all changes from upstream/main, and start a new feature branch from that. From time to time you should fetch the upstream changes from GitHub:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"git fetch upstream\ngit merge upstream/main\n"})}),"\n",(0,n.jsx)(t.h4,{id:"2-create-a-new-feature-branch",children:"2. Create a new feature branch"}),"\n",(0,n.jsx)(t.p,{children:"Create a branch to save your changes, even before you start making changes. You want your main branch to contain only production-ready code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"git checkout -b your-new-feature-branch\n"})}),"\n",(0,n.jsx)(t.h4,{id:"3-introduce-a-udf-to-the-repository",children:"3. Introduce a UDF to the repository"}),"\n",(0,n.jsx)(t.p,{children:"In the repository, create a directory with the UDF and its associated files."}),"\n",(0,n.jsxs)(t.p,{children:["To add a UDF that was created on Fused Workbench, click ",(0,n.jsx)(t.a,{href:"/workbench/udf-editor/#toolbar",children:'"Download"'})," to download the UDF ",(0,n.jsx)(t.code,{children:".zip"})," to a local directory, then unzip the file. Place the resulting directory in the repo. Each UDF should have its own directory."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:o(429).A+"",width:"1264",height:"560"})}),"\n",(0,n.jsx)(t.h4,{id:"4-commit-and-push-your-changes",children:"4. Commit and push your changes"}),"\n",(0,n.jsx)(t.p,{children:"Make intended modifications, commit the changes to your branch, and push the latest to your repo."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'git add .\ngit commit -m"Create neat UDF"\ngit push origin your-new-feature-branch\n'})}),"\n",(0,n.jsx)(t.h4,{id:"5-open-a-pull-request-pr",children:"5. Open a Pull Request (PR)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",children:"PRs"})," are the mechanism to contribute to the Fused UDFs repo to share them with the world."]}),"\n",(0,n.jsxs)(t.p,{children:["When you're ready to bring your UDF into the public repo, open a PR from your repo to the Fused repo so the Fused UDFs project maintainers can give feedback and oventually include your suggested UDF into the ",(0,n.jsx)(t.code,{children:"main"})," branch."]}),"\n",(0,n.jsxs)(t.p,{children:['To open a pull request, click "New pull request" in the ',(0,n.jsx)(t.a,{href:"https://github.com/fusedio/udfs/pulls",children:"Fused UDFs repo"}),', then click "compare across forks". Review the PR code looks like you intend and click submit. The Fused team will review to ensure the UDF runs successfully and reach out with next steps. Once the PR is approved, the UDF will be part of the community!']}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:o(1927).A+"",width:"2572",height:"596"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},429:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/image-95f544a597e7a373df1a28ce1867c186.png"},1927:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/contribute1-de83f49055b9d21bc76f3d130dd4c681.png"},3452:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/contribute2-0595a412b0cfb86ec57428d8d9cd5f00.png"},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var n=o(6540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);