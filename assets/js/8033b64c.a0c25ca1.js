"use strict";(self.webpackChunkfused_docs=self.webpackChunkfused_docs||[]).push([[9522],{305:(t,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var e=o(4848),s=o(8453),r=o(3650);const i={},u="Point to H3",c={id:"basics/transform/h3/point-to-h3",title:"Point to H3",description:"",source:"@site/docs/basics/transform/h3/point-to-h3.mdx",sourceDirName:"basics/transform/h3",slug:"/basics/transform/h3/point-to-h3",permalink:"/fused-docs/basics/transform/h3/point-to-h3",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"H3 to Polygon",permalink:"/fused-docs/basics/transform/h3/h3-to-vector"},next:{title:"Polygon to H3",permalink:"/fused-docs/basics/transform/h3/polygon-to-h3"}},d={},a=[];function l(t){const n={code:"code",h1:"h1",pre:"pre",...(0,s.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"point-to-h3",children:"Point to H3"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-python",children:'@fused.udf\ndef udf(bbox=None, resolution: int = 9, min_count: int = 10):\n    import duckdb\n    import shapely\n    import geopandas as gpd\n\n    utils = fused.load("https://github.com/fusedio/udfs/tree/f928ee1/public/common/").utils\n    h3_utils = fused.load("https://github.com/fusedio/udfs/tree/fb65aff/public/DuckDB_H3_Example/").utils\n    con = duckdb.connect(config = {\'allow_unsigned_extensions\': True})\n\n    h3_utils.load_h3_duckdb(con)\n    con.sql(f"""INSTALL httpfs; LOAD httpfs;""")\n    \n    @fused.cache\n    def read_data(url, resolution, min_count):\n        df = con.sql("""\n        SELECT h3_h3_to_string(h3_latlng_to_cell(pickup_latitude, pickup_longitude, $resolution)) cell_id,\n               count(1) cnt\n        FROM read_parquet($url) \n        GROUP BY cell_id\n        HAVING cnt>$min_count\n        """, params={\'url\': url, \'resolution\': resolution, \'min_count\': min_count}).df()\n        return df\n\n    df = read_data(\'https://d37ci6vzurychx.cloudfront.net/trip-data/yellow_tripdata_2010-01.parquet\', resolution, min_count)\n    print("number of trips:", df.cnt.sum())\n    print(df)\n    return df\n\n'})}),"\n","\n","\n",(0,e.jsx)(r.A,{url:"https://staging.fused.io/workbench#app/s/aH4sIAAAAAAAAA1VTDWvbMBD9K0IbNAE3H01CloBhoyV0UMa2rttYFIxinR01suRJcpus9L%2FvZLtuKtvo7t3pnXRPfqKpEUCXVBalsZ6URwHpnnBHSrFnukWdt8ALJX0ION%2FhWeVAJLwsOyQHU3ItMA3fvBRMh8f5gZdeQY%2FRr0ZqT7wh1xNG%2B034HbkxXBDBPSeZNQW5u1qRlCvFtDd70CQmZ5nbJen4152aXP75fL%2F9%2FUXNFvOV0PffzgLFRyyR8nQHSWBhWkBGFJLWbq%2B%2FZJrgEBlSdZse2Er36gL9JmzBV1ZjVmCsc08omFY6j4jiHvHe%2BXwyWHyYzxeziExHg%2FlsOltM%2B81hLrFZHvCAmHwEiwvDhKuwpYObYPeaeoxeT67hwHOja5jR6GWfrVHKdM%2B3CuIftoIWQzFwz%2BIUyqRSbxE4eFsJxFZcuRcwB5%2FsmnoxoykolUjRFQ3RQJSkRhmLCetU%2Bwi%2F4Xg0CvPmTaqSGtrU9cV0FJELbMVo02bU0Ucp%2FC4ppE5KeQDl4jFG2yZ9B9TI1lejuXNJuuPWt50JnbpCsHXDKHiZOH%2FEXjCK9tYclsNhDbhh4w8Ft%2Fvzh%2FG422cYUksvuUoeJDwiASoTB%2Faf6N4Gr4eKSo%2B9itFAfY3OWzfI%2Fc%2BYIh7j6bbArdR5jGYpfbqLL0b9kyq1xC5evyIdGpG34LsGTkqjjqjEa3BzwueNUV6W8ROjHrVkdIm35dNDTlbcAuGFqbRfkvdPGbpJ4z4z%2BtwQ9Nsu04ha%2BFtJCwVo7%2BhyTbv%2Fs42B88E8cGv5EY0jtwqnRhK6iah0q0qp29QCaLrMwm16%2Fg8Nq5nvNQQAAA%3D%3D"})]})}function f(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(l,{...t})}):l(t)}},3650:(t,n,o)=>{o.d(n,{A:()=>s});o(6540);var e=o(4848);function s(t){let{children:n,url:o}=t;return(0,e.jsx)("iframe",{src:o,height:"1050px",width:"100%",scrolling:"no"})}},8453:(t,n,o)=>{o.d(n,{R:()=>i,x:()=>u});var e=o(6540);const s={},r=e.createContext(s);function i(t){const n=e.useContext(r);return e.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function u(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),e.createElement(r.Provider,{value:n},t.children)}}}]);