"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[5786],{1038:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=s(5893),i=s(1151),o=s(4996);const t={id:"dbcontext-read-write",title:"9.28 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236",sidebar_label:"9.28 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236"},c=void 0,l={id:"dbcontext-read-write",title:"9.28 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236",description:"9.28.1 \u8bfb\u5199\u5206\u79bb",source:"@site/docs/dbcontext-read-write.mdx",sourceDirName:".",slug:"/dbcontext-read-write",permalink:"/furion-doc/docs/dbcontext-read-write",draft:!1,unlisted:!1,editUrl:"https://github.com/IcedMango/Furion/tree/v4/handbook/docs/dbcontext-read-write.mdx",tags:[],version:"current",lastUpdatedBy:"IcedMango",lastUpdatedAt:1701091806,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"dbcontext-read-write",title:"9.28 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236",sidebar_label:"9.28 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236"},sidebar:"docs",previous:{title:"9.27 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143 (UnitOfWork)",permalink:"/furion-doc/docs/tran"},next:{title:"9.29 \u5206\u8868\u5206\u5e93",permalink:"/furion-doc/docs/split-db"}},d={},a=[{value:"9.28.1 \u8bfb\u5199\u5206\u79bb",id:"9281-\u8bfb\u5199\u5206\u79bb",level:2},{value:"9.28.1.1 \u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898",id:"92811-\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898",level:3},{value:"9.28.1.2 \u6ce8\u610f\u4e8b\u9879",id:"92812-\u6ce8\u610f\u4e8b\u9879",level:3},{value:"9.28.2 \u5982\u4f55\u5b9e\u73b0",id:"9282-\u5982\u4f55\u5b9e\u73b0",level:2},{value:"9.28.2.1 \u521b\u5efa <code>\u4e3b\u5e93</code> \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"92821-\u521b\u5efa-\u4e3b\u5e93-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",level:3},{value:"9.28.2.2 \u521b\u5efa <code>\u4ece\u5e93</code> \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"92822-\u521b\u5efa-\u4ece\u5e93-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",level:3},{value:"9.28.2.3 \u6ce8\u518c <code>\u4e3b\u4ece\u5e93</code> \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"92823-\u6ce8\u518c-\u4e3b\u4ece\u5e93-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",level:3},{value:"9.28.2.4 \u521b\u5efa <code>Person</code> \u5b9e\u4f53",id:"92824-\u521b\u5efa-person-\u5b9e\u4f53",level:3},{value:"9.28.2.5 \u5c06 <code>Person</code> \u8f6c\u6362\u6210\u6570\u636e\u5e93\u8868",id:"92825-\u5c06-person-\u8f6c\u6362\u6210\u6570\u636e\u5e93\u8868",level:3},{value:"9.28.2.6 \u56fa\u5b9a\u4e3b\u4ece\u5e93\u4f7f\u7528\u4f8b\u5b50",id:"92826-\u56fa\u5b9a\u4e3b\u4ece\u5e93\u4f7f\u7528\u4f8b\u5b50",level:3},{value:"9.28.2.7 <code>\u968f\u673a</code>\u6216 <code>\u81ea\u5b9a\u4e49</code>\u8fd4\u56de\u4ece\u5e93 \u2728",id:"92827-\u968f\u673a\u6216-\u81ea\u5b9a\u4e49\u8fd4\u56de\u4ece\u5e93-",level:3},{value:"9.28.3 \u4e3b\u4ece\u590d\u5236",id:"9283-\u4e3b\u4ece\u590d\u5236",level:2},{value:"9.28.4 \u4e3b\u4ece\u590d\u5236\u51e0\u79cd\u65b9\u5f0f",id:"9284-\u4e3b\u4ece\u590d\u5236\u51e0\u79cd\u65b9\u5f0f",level:2},{value:"9.28.4.1 \u540c\u6b65\u590d\u5236",id:"92841-\u540c\u6b65\u590d\u5236",level:3},{value:"9.28.4.2 \u5f02\u6b65\u590d\u5236",id:"92842-\u5f02\u6b65\u590d\u5236",level:3},{value:"9.28.4.3 \u534a\u540c\u6b65\u590d\u5236",id:"92843-\u534a\u540c\u6b65\u590d\u5236",level:3},{value:"9.28.5 <code>SqlServer</code> \u4e3b\u5e93\u914d\u7f6e",id:"9285-sqlserver-\u4e3b\u5e93\u914d\u7f6e",level:2},{value:"9.28.5.1 \u6dfb\u52a0 <code>\u672c\u5730\u53d1\u5e03</code>",id:"92851-\u6dfb\u52a0-\u672c\u5730\u53d1\u5e03",level:3},{value:"9.28.5.2 \u9009\u62e9 <code>\u5206\u53d1\u670d\u52a1\u5668</code>",id:"92852-\u9009\u62e9-\u5206\u53d1\u670d\u52a1\u5668",level:3},{value:"9.28.5.3 \u542f\u7528 <code>\u4ee3\u7406</code>",id:"92853-\u542f\u7528-\u4ee3\u7406",level:3},{value:"9.28.5.4 \u53d1\u5e03\u6570\u636e\u5e93",id:"92854-\u53d1\u5e03\u6570\u636e\u5e93",level:3},{value:"9.28.5.5 \u5feb\u7167\u53d1\u5e03",id:"92855-\u5feb\u7167\u53d1\u5e03",level:3},{value:"9.28.5.6 \u9009\u62e9\u53d1\u5e03\u9879\u76ee",id:"92856-\u9009\u62e9\u53d1\u5e03\u9879\u76ee",level:3},{value:"9.28.5.7 \u914d\u7f6e\u5206\u53d1\u8ba1\u5212",id:"92857-\u914d\u7f6e\u5206\u53d1\u8ba1\u5212",level:3},{value:"9.28.5.8 \u914d\u7f6e\u5b89\u5168\u8bbe\u7f6e",id:"92858-\u914d\u7f6e\u5b89\u5168\u8bbe\u7f6e",level:3},{value:"9.28.5.9 \u5b8c\u6210\u914d\u7f6e",id:"92859-\u5b8c\u6210\u914d\u7f6e",level:3},{value:"9.28.6 <code>SqlServer</code> \u4ece\u5e93\u914d\u7f6e",id:"9286-sqlserver-\u4ece\u5e93\u914d\u7f6e",level:2},{value:"9.28.6.1 \u6dfb\u52a0 <code>\u672c\u5730\u8ba2\u9605</code>",id:"92861-\u6dfb\u52a0-\u672c\u5730\u8ba2\u9605",level:3},{value:"9.28.6.2 \u9009\u62e9 <code>\u5206\u53d1\u670d\u52a1\u5668</code>",id:"92862-\u9009\u62e9-\u5206\u53d1\u670d\u52a1\u5668",level:3},{value:"9.28.6.3 \u9009\u62e9 <code>\u5206\u53d1\u4ee3\u7406\u4f4d\u7f6e</code>",id:"92863-\u9009\u62e9-\u5206\u53d1\u4ee3\u7406\u4f4d\u7f6e",level:3},{value:"9.28.6.4 \u9009\u62e9 <code>\u8ba2\u9605\u6570\u636e\u5e93</code>",id:"92864-\u9009\u62e9-\u8ba2\u9605\u6570\u636e\u5e93",level:3},{value:"9.28.6.5 \u9009\u62e9 <code>\u5206\u53d1\u5b89\u5168\u8bbe\u7f6e</code>",id:"92865-\u9009\u62e9-\u5206\u53d1\u5b89\u5168\u8bbe\u7f6e",level:3},{value:"9.28.6.6 \u9009\u62e9 <code>\u540c\u6b65\u8ba1\u5212</code>",id:"92866-\u9009\u62e9-\u540c\u6b65\u8ba1\u5212",level:3},{value:"9.28.6.7 \u5b8c\u6210\u8ba2\u9605",id:"92867-\u5b8c\u6210\u8ba2\u9605",level:3},{value:"9.28.7 \u5206\u53d1\u5b9a\u4e49\u76d1\u89c6",id:"9287-\u5206\u53d1\u5b9a\u4e49\u76d1\u89c6",level:2},{value:"9.28.8 \u67e5\u770b\u4e3b\u4ece\u590d\u5236\u7ed3\u679c",id:"9288-\u67e5\u770b\u4e3b\u4ece\u590d\u5236\u7ed3\u679c",level:2},{value:"9.28.9 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9289-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"9281-\u8bfb\u5199\u5206\u79bb",children:"9.28.1 \u8bfb\u5199\u5206\u79bb"}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u5b9e\u5c31\u662f\u5c06\u6570\u636e\u5e93\u5206\u4e3a\u4e86\u4e3b\u4ece\u5e93\uff0c\u4e00\u4e2a\u4e3b\u5e93\u7528\u4e8e\u5199\u6570\u636e\uff0c\u591a\u4e2a\u4ece\u5e93\u5b8c\u6210\u8bfb\u6570\u636e\u7684\u64cd\u4f5c\uff0c\u4e3b\u4ece\u5e93\u4e4b\u95f4\u901a\u8fc7\u67d0\u79cd\u673a\u5236\u8fdb\u884c\u6570\u636e\u7684\u540c\u6b65\uff0c\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u6570\u636e\u5e93\u67b6\u6784\u3002"}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/readwrite.png"),style:{height:300}}),"\n",(0,r.jsx)(n.h3,{id:"92811-\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898",children:"9.28.1.1 \u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898"}),"\n",(0,r.jsx)(n.p,{children:"\u5927\u591a\u6570\u4e92\u8054\u7f51\u4e1a\u52a1\uff0c\u5f80\u5f80\u8bfb\u591a\u5199\u5c11\uff0c\u8fd9\u65f6\u5019\uff0c\u6570\u636e\u5e93\u7684\u8bfb\u4f1a\u9996\u5148\u6210\u4e3a\u6570\u636e\u5e93\u7684\u74f6\u9888\uff0c\u8fd9\u65f6\uff0c\u5982\u679c\u6211\u4eec\u5e0c\u671b\u80fd\u591f\u7ebf\u6027\u7684\u63d0\u5347\u6570\u636e\u5e93\u7684\u8bfb\u6027\u80fd\uff0c\u6d88\u9664\u8bfb\u5199\u9501\u51b2\u7a81\u4ece\u800c\u63d0\u5347\u6570\u636e\u5e93\u7684\u5199\u6027\u80fd\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u4f7f\u7528\u201c\u5206\u7ec4\u67b6\u6784\u201d\uff08\u8bfb\u5199\u5206\u79bb\u67b6\u6784\uff09\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u4e00\u53e5\u8bdd\u6982\u62ec\uff0c\u8bfb\u5199\u5206\u79bb\u662f\u7528\u6765\u89e3\u51b3\u6570\u636e\u5e93\u7684\u8bfb\u6027\u80fd\u74f6\u9888\u7684\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"92812-\u6ce8\u610f\u4e8b\u9879",children:"9.28.1.2 \u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u8981\u8fdb\u884c\u533a\u5206\uff0c\u54ea\u4e9b\u662f\u8bfb\u8fde\u63a5\u6c60\uff0c\u54ea\u4e2a\u662f\u5199\u8fde\u63a5\u6c60\uff0c\u7814\u53d1\u7684\u96be\u5ea6\u4f1a\u589e\u52a0\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u4e3a\u4e86\u4fdd\u8bc1\u9ad8\u53ef\u7528\uff0c\u8bfb\u8fde\u63a5\u6c60\u8981\u80fd\u591f\u5b9e\u73b0\u6545\u969c\u81ea\u52a8\u8f6c\u79fb\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u4e3b\u4ece\u7684\u4e00\u81f4\u6027\u95ee\u9898\u9700\u8981\u8003\u8651\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"9282-\u5982\u4f55\u5b9e\u73b0",children:"9.28.2 \u5982\u4f55\u5b9e\u73b0"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Furion"})," \u5728\u6570\u636e\u5e93\u6a21\u5757\u8bbe\u8ba1\u4e4b\u521d\uff0c\u5c31\u8003\u8651\u4e86\u8bfb\u5199\u5206\u79bb\u8fd9\u79cd\u60c5\u51b5\uff0c\u6240\u4ee5\u4ece\u5e95\u5c42\u5c31\u652f\u6301\u52a8\u6001\u5207\u6362\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u53ca\u8bfb\u5199\u64cd\u4f5c\u65b9\u6cd5\u7ea6\u675f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8bfb\u5199\u5206\u79bb\u64cd\u4f5c\u4e3b\u8981\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"IMSRepository"})," \u4ed3\u50a8\uff0c\u8be5\u4ed3\u50a8\u5df2\u7ecf\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u65b9\u4fbf\u7684\u64cd\u4f5c\u8c03\u7528\u3002\u5f53\u7136\u4e5f\u53ef\u4ee5\u4e0d\u4f7f\u7528\u8be5\u4ed3\u50a8\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e0b\u9762\u5c31\u7ed9\u5927\u5bb6\u6f14\u793a\u5982\u4f55\u8bfb\u5199\u591a\u5e93\u8bfb\u5199\u64cd\u4f5c\u3002"}),"\n",(0,r.jsxs)(n.h3,{id:"92821-\u521b\u5efa-\u4e3b\u5e93-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:["9.28.2.1 \u521b\u5efa ",(0,r.jsx)(n.code,{children:"\u4e3b\u5e93"})," \u6570\u636e\u5e93\u4e0a\u4e0b\u6587"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Furion.EntityFramework.Core\n{\n    /// <summary>\n    /// \u4e3b\u5e93\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\n    /// </summary>\n    [AppDbContext("MasterConnectionString")]\n    public class MasterDbContext : AppDbContext<MasterDbContext>\n    {\n        public MasterDbContext(DbContextOptions<MasterDbContext> options) : base(options)\n        {\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff1a"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\n  "ConnectionStrings": {\n    "MasterConnectionString": "Server=localhost;Database=Furion;User=sa;Password=000000;MultipleActiveResultSets=True;"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"92822-\u521b\u5efa-\u4ece\u5e93-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:["9.28.2.2 \u521b\u5efa ",(0,r.jsx)(n.code,{children:"\u4ece\u5e93"})," \u6570\u636e\u5e93\u4e0a\u4e0b\u6587"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {11}",children:'using Furion.Core;\nusing Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Furion.EntityFramework.Core\n{\n    /// <summary>\n    /// \u4ece\u5e93\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\n    /// </summary>\n    [AppDbContext("SlaveConnectionString")]\n    public class SlaveDbContext : AppDbContext<SlaveDbContext, SlaveDbContextLocator>\n    {\n        public SlaveDbContext(DbContextOptions<SlaveDbContext> options) : base(options)\n        {\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"\u7279\u522b\u6ce8\u610f",type:"important",children:(0,r.jsxs)(n.p,{children:["\u591a\u6570\u636e\u5e93\u64cd\u4f5c\u9664\u4e86\u9ed8\u8ba4\u6570\u636e\u5e93\u65e0\u9700\u81ea\u5b9a\u4e49 ",(0,r.jsx)(n.strong,{children:"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668"}),"\uff0c\u5176\u4ed6\u6570\u636e\u5e93\u90fd\u9700\u8981\u6709\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\u3002\u5982 ",(0,r.jsx)(n.code,{children:"SlaveDbContextLocator"})]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4ece\u5e93\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\uff1a"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {8}",children:"using Furion.DatabaseAccessor;\n\nnamespace Furion.Core\n{\n    /// <summary>\n    /// \u4ece\u5e93\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\n    /// </summary>\n    public class SlaveDbContextLocator : IDbContextLocator\n    {\n    }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff1a"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\n  "ConnectionStrings": {\n    "SlaveConnectionString": "Server=localhost;Database=FurSlave;User=sa;Password=000000;MultipleActiveResultSets=True;"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"92823-\u6ce8\u518c-\u4e3b\u4ece\u5e93-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:["9.28.2.3 \u6ce8\u518c ",(0,r.jsx)(n.code,{children:"\u4e3b\u4ece\u5e93"})," \u6570\u636e\u5e93\u4e0a\u4e0b\u6587"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {13-14}",children:"using Furion.Core;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppStartup(600)]\n    public sealed class FurEntityFrameworkCoreStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddDatabaseAccessor(options =>\n            {\n                services.AddDbPool<MasterDbContext>();\n                services.AddDbPool<SlaveDbContext, SlaveDbContextLocator>();\n            });\n        }\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"92824-\u521b\u5efa-person-\u5b9e\u4f53",children:["9.28.2.4 \u521b\u5efa ",(0,r.jsx)(n.code,{children:"Person"})," \u5b9e\u4f53"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,r.jsx)(n.code,{children:"\u4e3b\u4ece\u5e93"})," \u5177\u6709\u76f8\u540c\u7684\u6570\u636e\u5e93\u7ed3\u6784\uff0c\u6240\u4ee5\u5b9e\u4f53\u4e5f\u5fc5\u987b\u58f0\u660e ",(0,r.jsx)(n.code,{children:"\u4e3b\u4ece\u5e93"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {7}",children:"using Furion.DatabaseAccessor;\nusing System.ComponentModel.DataAnnotations;\nusing System.ComponentModel.DataAnnotations.Schema;\n\nnamespace Furion.Core\n{\n    public class Person : IEntity<MasterDbContextLocator, SlaveDbContextLocator>\n    {\n        /// <summary>\n        /// \u4e3b\u952eId\n        /// </summary>\n        [Key]\n        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]\n        public int Id { get; set; }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"92825-\u5c06-person-\u8f6c\u6362\u6210\u6570\u636e\u5e93\u8868",children:["9.28.2.5 \u5c06 ",(0,r.jsx)(n.code,{children:"Person"})," \u8f6c\u6362\u6210\u6570\u636e\u5e93\u8868"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u521b\u5efa\u4e3b\u5e93\u6570\u636e\u5e93\u8868\uff1a"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"Add-Migration v0.0.1 -Context MasterDbContext\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"Update-Database -Context MasterDbContext\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u521b\u5efa\u4ece\u5e93\u6570\u636e\u5e93\u8868\uff1a"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"Add-Migration v0.0.1 -Context SlaveDbContext\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"Update-Database -Context SlaveDbContext\n"})}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/readwrite1.png")}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/readwrite2.png")}),"\n",(0,r.jsx)(n.h3,{id:"92826-\u56fa\u5b9a\u4e3b\u4ece\u5e93\u4f7f\u7528\u4f8b\u5b50",children:"9.28.2.6 \u56fa\u5b9a\u4e3b\u4ece\u5e93\u4f7f\u7528\u4f8b\u5b50"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {13,19,31,40}",children:'using Furion.Core;\nusing Furion.DatabaseAccessor;\nusing Furion.DynamicApiController;\nusing System.Collections.Generic;\n\nnamespace Furion.Application\n{\n    public class PersonService : IDynamicApiController\n    {\n        /// <summary>\n        /// \u53ef\u8c03\u914d\u4ed3\u50a8\uff08\u8bfb\u5199\u5206\u79bb\uff09\n        /// </summary>\n        private readonly IMSRepository<MasterDbContextLocator, SlaveDbContextLocator> _msRepository;\n\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\u521d\u59cb\u5316\n        /// </summary>\n        /// <param name="msRepository"></param>\n        public PersonService(IMSRepository<MasterDbContextLocator, SlaveDbContextLocator> msRepository)\n        {\n            _msRepository = msRepository;\n        }\n\n        /// <summary>\n        /// \u65b0\u589e\u8d70\u4e3b\u5e93\n        /// </summary>\n        /// <param name="person"></param>\n        /// <returns></returns>\n        public void Insert(Person person)\n        {\n            _msRepository.Master<Person>().Insert(person);\n        }\n\n        /// <summary>\n        /// \u67e5\u8be2\u8d70\u4ece\u5e93\n        /// </summary>\n        /// <returns></returns>\n        public List<Person> Get()\n        {\n            return _msRepository.Slave1<Person>().AsEnumerable().ToList();\n        }\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"92827-\u968f\u673a\u6216-\u81ea\u5b9a\u4e49\u8fd4\u56de\u4ece\u5e93-",children:["9.28.2.7 ",(0,r.jsx)(n.code,{children:"\u968f\u673a"}),"\u6216 ",(0,r.jsx)(n.code,{children:"\u81ea\u5b9a\u4e49"}),"\u8fd4\u56de\u4ece\u5e93 \u2728"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"Furion 2.4.1 + "})," \u7248\u672c\u65b0\u589e\u4e86 ",(0,r.jsx)(n.code,{children:"IMSRepository"})," \u548c ",(0,r.jsx)(n.code,{children:"IMSRepository<TMasterDbContextLocator>"})," \u4ed3\u50a8\u7c7b\u578b\uff0c\u53ef\u4ee5\u83b7\u53d6\u968f\u673a\u4ed3\u50a8\u6216\u81ea\u5b9a\u4e49\u4ed3\u50a8\u3002\u4f7f\u7528\u4f8b\u5b50\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u914d\u7f6e \u4e3b\u5e93 ",(0,r.jsx)(n.code,{children:"[AppDbContext]"})," \u7279\u6027\u7684 ",(0,r.jsx)(n.code,{children:"SlaveDbContextLocators"})," \u5c5e\u6027\uff0c\u53ef\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6700\u540e\u53c2\u6570\u4f20\u5165\uff0c\u5982\uff1a"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {6}",children:'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString", DbProvider.Sqlite, typeof(\u4ece\u5e93\u5b9a\u4f4d\u56681), typeof(\u4ece\u5e93\u5b9a\u4f4d\u56682), typeof(\u4ece\u5e93\u5b9a\u4f4d\u56683))]\n    public class MasterDbContext : AppDbContext<MasterDbContext>\n    {\n        public MasterDbContext(DbContextOptions<MasterDbContext> options) : base(options)\n        {\n        }\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"IMSRepository"})," \u6216 ",(0,r.jsx)(n.code,{children:"IMSRepository<TMasterDbContextLocator>"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {13,19,31,40,49-53}",children:'using Furion.Core;\nusing Furion.DatabaseAccessor;\nusing Furion.DynamicApiController;\nusing System.Collections.Generic;\n\nnamespace Furion.Application\n{\n    public class PersonService : IDynamicApiController\n    {\n        /// <summary>\n        /// \u53ef\u8c03\u914d\u4ed3\u50a8\uff08\u8bfb\u5199\u5206\u79bb\uff09\n        /// </summary>\n        private readonly IMSRepository _msRepository;   // \u4e0d\u6307\u5b9a\u5b9a\u4f4d\u5668\uff0c\u9ed8\u8ba4\u662f MasterDbContextLocator\n\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\u521d\u59cb\u5316\n        /// </summary>\n        /// <param name="msRepository"></param>\n        public PersonService(IMSRepository msRepository)\n        {\n            _msRepository = msRepository;\n        }\n\n        /// <summary>\n        /// \u65b0\u589e\u8d70\u4e3b\u5e93\n        /// </summary>\n        /// <param name="person"></param>\n        /// <returns></returns>\n        public void Insert(Person person)\n        {\n            _msRepository.Master<Person>().Insert(person);\n        }\n\n        /// <summary>\n        /// \u968f\u673a\u4ece\u5e93\n        /// </summary>\n        /// <returns></returns>\n        public List<Person> Get()\n        {\n            return _msRepository.Slave<Person>().AsEnumerable().ToList();\n        }\n\n        /// <summary>\n        /// \u81ea\u5b9a\u4e49\u4ece\u5e93\n        /// </summary>\n        /// <returns></returns>\n        public List<Person> Get()\n        {\n            return _msRepository.Slave<Person>(() => {\n                // \u8fd9\u91cc\u5199\u4f60\u7684\u903b\u8f91\u8fd4\u56de\u4ece\u5e93\u5b9a\u4f4d\u5668\n\n                return \u4f60\u7684\u4ece\u5e93\u5b9a\u4f4d\u5668;\n            }).AsEnumerable().ToList();\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"\u7279\u522b\u8bf4\u660e",type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"IMSRepository"})," \u4e0d\u5e26\u6cdb\u578b\u9ed8\u8ba4\u6307\u7684\u662f ",(0,r.jsx)(n.code,{children:"IMSRepository<TMasterDbContextLocator>"}),"\uff0c\u5982\u9700\u6cdb\u578b\u7248\u672c\uff0c\u5219\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"IMSRepository<\u5b9a\u4f4d\u5668>"})]})}),"\n",(0,r.jsx)(n.h2,{id:"9283-\u4e3b\u4ece\u590d\u5236",children:"9.28.3 \u4e3b\u4ece\u590d\u5236"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3b\u4ece\u590d\u5236\uff1a\u662f\u4e00\u79cd\u6570\u636e\u5907\u4efd\u7684\u65b9\u6848\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u7b80\u5355\u6765\u8bf4\uff0c\u662f\u4f7f\u7528\u4e24\u4e2a\u6216\u4e24\u4e2a\u4ee5\u4e0a\u76f8\u540c\u7684\u6570\u636e\u5e93\uff0c\u5c06\u4e00\u4e2a\u6570\u636e\u5e93\u5f53\u505a\u4e3b\u6570\u636e\u5e93\uff0c\u800c\u53e6\u4e00\u4e2a\u6570\u636e\u5e93\u5f53\u505a\u4ece\u6570\u636e\u5e93\u3002",(0,r.jsx)(n.strong,{children:"\u5728\u4e3b\u6570\u636e\u5e93\u4e2d\u8fdb\u884c\u76f8\u5e94\u64cd\u4f5c\u65f6\uff0c\u4ece\u6570\u636e\u5e93\u8bb0\u5f55\u4e0b\u6240\u6709\u4e3b\u6570\u636e\u5e93\u7684\u64cd\u4f5c\uff0c\u4f7f\u5176\u4e8c\u8005\u4e00\u6a21\u4e00\u6837\u3002"})]}),"\n",(0,r.jsx)(n.h2,{id:"9284-\u4e3b\u4ece\u590d\u5236\u51e0\u79cd\u65b9\u5f0f",children:"9.28.4 \u4e3b\u4ece\u590d\u5236\u51e0\u79cd\u65b9\u5f0f"}),"\n",(0,r.jsx)(n.h3,{id:"92841-\u540c\u6b65\u590d\u5236",children:"9.28.4.1 \u540c\u6b65\u590d\u5236"}),"\n",(0,r.jsxs)(n.p,{children:["\u6240\u8c13\u7684\u540c\u6b65\u590d\u5236\uff0c\u610f\u601d\u662f ",(0,r.jsx)(n.code,{children:"Master"})," \u7684\u53d8\u5316\uff0c\u5fc5\u987b\u7b49\u5f85 ",(0,r.jsx)(n.code,{children:"Slave-1\uff0cSlave-2\uff0c...\uff0cSlave-n"})," \u5b8c\u6210\u540e\u624d\u80fd\u8fd4\u56de\u3002\n\u8fd9\u6837\uff0c\u663e\u7136\u4e0d\u53ef\u53d6\uff0c\u6bd4\u5982\uff0c\u5728 ",(0,r.jsx)(n.code,{children:"Web"})," \u524d\u7aef\u9875\u9762\u4e0a\uff0c\u7528\u6237\u589e\u52a0\u4e86\u6761\u8bb0\u5f55\uff0c\u9700\u8981\u7b49\u5f85\u5f88\u957f\u65f6\u95f4\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"92842-\u5f02\u6b65\u590d\u5236",children:"9.28.4.2 \u5f02\u6b65\u590d\u5236"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u540c AJAX \u8bf7\u6c42\u4e00\u6837\u3002",(0,r.jsx)(n.code,{children:"Master"})," \u53ea\u9700\u8981\u5b8c\u6210\u81ea\u5df1\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u5373\u53ef\u3002\u81f3\u4e8e ",(0,r.jsx)(n.code,{children:"Slaves"})," \u662f\u5426\u6536\u5230\u4e8c\u8fdb\u5236\u65e5\u5fd7\uff0c\u662f\u5426\u5b8c\u6210\u64cd\u4f5c\uff0c\u4e0d\u7528\u5173\u5fc3\u3002",(0,r.jsx)(n.strong,{children:"\uff08\u63a8\u8350\u65b9\u5f0f\uff09"})]}),"\n",(0,r.jsx)(n.h3,{id:"92843-\u534a\u540c\u6b65\u590d\u5236",children:"9.28.4.3 \u534a\u540c\u6b65\u590d\u5236"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Master"})," \u53ea\u4fdd\u8bc1 ",(0,r.jsx)(n.code,{children:"Slaves"})," \u4e2d\u7684\u4e00\u4e2a\u64cd\u4f5c\u6210\u529f\uff0c\u5c31\u8fd4\u56de\uff0c\u5176\u4ed6 ",(0,r.jsx)(n.code,{children:"Slave"})," \u4e0d\u7ba1\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0b\u9762\u5c06\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"SqlServer"})," \u7b80\u5355\u914d\u7f6e\u4e3b\u4ece\u590d\u5236\u529f\u80fd\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"9285-sqlserver-\u4e3b\u5e93\u914d\u7f6e",children:["9.28.5 ",(0,r.jsx)(n.code,{children:"SqlServer"})," \u4e3b\u5e93\u914d\u7f6e"]}),"\n",(0,r.jsxs)(n.h3,{id:"92851-\u6dfb\u52a0-\u672c\u5730\u53d1\u5e03",children:["9.28.5.1 \u6dfb\u52a0 ",(0,r.jsx)(n.code,{children:"\u672c\u5730\u53d1\u5e03"})]}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbcopy1.png")}),"\n",(0,r.jsxs)(n.h3,{id:"92852-\u9009\u62e9-\u5206\u53d1\u670d\u52a1\u5668",children:["9.28.5.2 \u9009\u62e9 ",(0,r.jsx)(n.code,{children:"\u5206\u53d1\u670d\u52a1\u5668"})]}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbcopy2.png")}),"\n",(0,r.jsxs)(n.h3,{id:"92853-\u542f\u7528-\u4ee3\u7406",children:["9.28.5.3 \u542f\u7528 ",(0,r.jsx)(n.code,{children:"\u4ee3\u7406"})]}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbcopy3.png")}),"\n",(0,r.jsx)(n.h3,{id:"92854-\u53d1\u5e03\u6570\u636e\u5e93",children:"9.28.5.4 \u53d1\u5e03\u6570\u636e\u5e93"}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbcopy4.png")}),"\n",(0,r.jsx)(n.h3,{id:"92855-\u5feb\u7167\u53d1\u5e03",children:"9.28.5.5 \u5feb\u7167\u53d1\u5e03"}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbcopy5.png")}),"\n",(0,r.jsx)(n.p,{children:"\u5177\u4f53\u9009\u62e9\u4f55\u79cd\u53d1\u5e03\u7c7b\u578b\uff0c\u89c6\u5177\u4f53\u4e1a\u52a1\u573a\u666f\u800c\u5b9a\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"92856-\u9009\u62e9\u53d1\u5e03\u9879\u76ee",children:"9.28.5.6 \u9009\u62e9\u53d1\u5e03\u9879\u76ee"}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbcopy6.png")}),"\n",(0,r.jsx)(n.h3,{id:"92857-\u914d\u7f6e\u5206\u53d1\u8ba1\u5212",children:"9.28.5.7 \u914d\u7f6e\u5206\u53d1\u8ba1\u5212"}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbcopy7.png")}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbcopy8.png")}),"\n",(0,r.jsx)(n.h3,{id:"92858-\u914d\u7f6e\u5b89\u5168\u8bbe\u7f6e",children:"9.28.5.8 \u914d\u7f6e\u5b89\u5168\u8bbe\u7f6e"}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbcopy9.png")}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbcopy10.png")}),"\n",(0,r.jsx)(n.h3,{id:"92859-\u5b8c\u6210\u914d\u7f6e",children:"9.28.5.9 \u5b8c\u6210\u914d\u7f6e"}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbcopy11.png")}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbcopy12.png")}),"\n",(0,r.jsxs)(n.h2,{id:"9286-sqlserver-\u4ece\u5e93\u914d\u7f6e",children:["9.28.6 ",(0,r.jsx)(n.code,{children:"SqlServer"})," \u4ece\u5e93\u914d\u7f6e"]}),"\n",(0,r.jsxs)(n.h3,{id:"92861-\u6dfb\u52a0-\u672c\u5730\u8ba2\u9605",children:["9.28.6.1 \u6dfb\u52a0 ",(0,r.jsx)(n.code,{children:"\u672c\u5730\u8ba2\u9605"})]}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbrece1.png")}),"\n",(0,r.jsxs)(n.h3,{id:"92862-\u9009\u62e9-\u5206\u53d1\u670d\u52a1\u5668",children:["9.28.6.2 \u9009\u62e9 ",(0,r.jsx)(n.code,{children:"\u5206\u53d1\u670d\u52a1\u5668"})]}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbrece2.png")}),"\n",(0,r.jsxs)(n.h3,{id:"92863-\u9009\u62e9-\u5206\u53d1\u4ee3\u7406\u4f4d\u7f6e",children:["9.28.6.3 \u9009\u62e9 ",(0,r.jsx)(n.code,{children:"\u5206\u53d1\u4ee3\u7406\u4f4d\u7f6e"})]}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbrece3.png")}),"\n",(0,r.jsxs)(n.h3,{id:"92864-\u9009\u62e9-\u8ba2\u9605\u6570\u636e\u5e93",children:["9.28.6.4 \u9009\u62e9 ",(0,r.jsx)(n.code,{children:"\u8ba2\u9605\u6570\u636e\u5e93"})]}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbrece4.png")}),"\n",(0,r.jsxs)(n.h3,{id:"92865-\u9009\u62e9-\u5206\u53d1\u5b89\u5168\u8bbe\u7f6e",children:["9.28.6.5 \u9009\u62e9 ",(0,r.jsx)(n.code,{children:"\u5206\u53d1\u5b89\u5168\u8bbe\u7f6e"})]}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbrece5.png")}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbrece6.png")}),"\n",(0,r.jsxs)(n.h3,{id:"92866-\u9009\u62e9-\u540c\u6b65\u8ba1\u5212",children:["9.28.6.6 \u9009\u62e9 ",(0,r.jsx)(n.code,{children:"\u540c\u6b65\u8ba1\u5212"})]}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbrece7.png")}),"\n",(0,r.jsx)(n.h3,{id:"92867-\u5b8c\u6210\u8ba2\u9605",children:"9.28.6.7 \u5b8c\u6210\u8ba2\u9605"}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbrece8.png")}),"\n",(0,r.jsx)(n.h2,{id:"9287-\u5206\u53d1\u5b9a\u4e49\u76d1\u89c6",children:"9.28.7 \u5206\u53d1\u5b9a\u4e49\u76d1\u89c6"}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbrece9.png")}),"\n",(0,r.jsx)(n.h2,{id:"9288-\u67e5\u770b\u4e3b\u4ece\u590d\u5236\u7ed3\u679c",children:"9.28.8 \u67e5\u770b\u4e3b\u4ece\u590d\u5236\u7ed3\u679c"}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbrece10.png")}),"\n",(0,r.jsx)("img",{src:(0,o.Z)("img/dbrece11.png")}),"\n",(0,r.jsx)(n.admonition,{title:"\u7279\u522b\u7279\u6027",type:"important",children:(0,r.jsx)(n.p,{children:'\u4e3b\u4ece\u590d\u5236\u6709\u4e00\u5b9a\u8fdf\u5ef6\u6027\uff0c\u6240\u4ee5\u7cfb\u7edf\u8bbe\u8ba1\u8981\u6709\u4e00\u5b9a\u201c\u5bb9\u5fcd\u6027"\u3002'})}),"\n",(0,r.jsx)(n.h2,{id:"9289-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"9.28.9 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,r.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,r.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,r.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>t});var r=s(7294);const i={},o=r.createContext(i);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);