"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6366],{5186:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var r=s(5893),a=s(1151);const t={id:"dbcontext-update",title:"9.7 \u66f4\u65b0\u64cd\u4f5c",sidebar_label:"9.7 \u66f4\u65b0\u64cd\u4f5c"},o=void 0,i={id:"dbcontext-update",title:"9.7 \u66f4\u65b0\u64cd\u4f5c",description:"\u4ee5\u4e0b\u5185\u5bb9\u5305\u542b Exists \u5355\u8bcd\u7684\u5728 Furion 2.6.0 + \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002",source:"@site/docs/dbcontext-update.mdx",sourceDirName:".",slug:"/dbcontext-update",permalink:"/furion-doc/docs/dbcontext-update",draft:!1,unlisted:!1,editUrl:"https://github.com/IcedMango/Furion/tree/v4/handbook/docs/dbcontext-update.mdx",tags:[],version:"current",lastUpdatedBy:"IcedMango",lastUpdatedAt:1701091806,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"dbcontext-update",title:"9.7 \u66f4\u65b0\u64cd\u4f5c",sidebar_label:"9.7 \u66f4\u65b0\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.6 \u65b0\u589e\u64cd\u4f5c",permalink:"/furion-doc/docs/dbcontext-add"},next:{title:"9.8 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c",permalink:"/furion-doc/docs/dbcontext-add-or-update"}},d={},c=[{value:"9.7.1 \u66f4\u65b0\u5168\u90e8\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"971-\u66f4\u65b0\u5168\u90e8\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.2 \u66f4\u65b0\u5168\u90e8\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"972-\u66f4\u65b0\u5168\u90e8\u5217\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.3 \u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"973-\u66f4\u65b0\u90e8\u5206\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.4 \u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"974-\u66f4\u65b0\u90e8\u5206\u5217\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.5 \u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"975-\u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\u4e0d\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.6 \u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"976-\u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.7 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"977-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.8 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"978-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.9 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"979-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.10 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"9710-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.11 \u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"9711-\u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\u4e0d\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.12 \u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"9712-\u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.13 \u66f4\u65b0\u591a\u6761\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"9713-\u66f4\u65b0\u591a\u6761\u8bb0\u5f55\u4e0d\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.14 \u66f4\u65b0\u591a\u6761\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"9714-\u66f4\u65b0\u591a\u6761\u8bb0\u5f55\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.15 \u5ffd\u7565\u7a7a\u503c\u66f4\u65b0",id:"9715-\u5ffd\u7565\u7a7a\u503c\u66f4\u65b0",level:2},{value:"9.7.16 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9716-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"\u529f\u80fd\u79fb\u9664\u58f0\u660e",type:"warning",children:(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u5305\u542b ",(0,r.jsx)(n.code,{children:"Exists"})," \u5355\u8bcd\u7684\u5728 ",(0,r.jsx)(n.code,{children:"Furion 2.6.0 +"})," \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"971-\u66f4\u65b0\u5168\u90e8\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4",children:"9.7.1 \u66f4\u65b0\u5168\u90e8\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Update(user);\n\n// \u793a\u4f8b\u4e8c\nuser.Update();\n\n// \u793a\u4f8b\u4e09\nrepository.ChangeEntityState(user, EntityState.Modified);\n\n// \u793a\u4f8b\u56db\nrepository.Entities.Update(user);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.UpdateAsync();\n"})}),"\n",(0,r.jsx)(n.h2,{id:"972-\u66f4\u65b0\u5168\u90e8\u5217\u7acb\u5373\u63d0\u4ea4",children:"9.7.2 \u66f4\u65b0\u5168\u90e8\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateNow(user);\n\n// \u793a\u4f8b\u4e8c\nuser.UpdateNow();\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateNowAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.UpdateNowAsync();\n"})}),"\n",(0,r.jsx)(n.h2,{id:"973-\u66f4\u65b0\u90e8\u5206\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4",children:"9.7.3 \u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateInclude(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateInclude(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateInclude(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nuser.UpdateInclude(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.UpdateInclude(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nuser.UpdateInclude(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateIncludeAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateIncludeAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateIncludeAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nawait user.UpdateIncludeAsync(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.UpdateIncludeAsync(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nawait user.UpdateIncludeAsync(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n'})}),"\n",(0,r.jsx)(n.h2,{id:"974-\u66f4\u65b0\u90e8\u5206\u5217\u7acb\u5373\u63d0\u4ea4",children:"9.7.4 \u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateIncludeNow(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateIncludeNow(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateIncludeNow(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nuser.UpdateIncludeNow(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.UpdateIncludeNow(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nuser.UpdateInclude(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateIncludeNowAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateIncludeNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateIncludeNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nawait user.UpdateIncludeNowAsync(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.UpdateIncludeNowAsync(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nawait user.UpdateIncludeNowAsync(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n'})}),"\n",(0,r.jsx)(n.h2,{id:"975-\u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\u4e0d\u7acb\u5373\u63d0\u4ea4",children:"9.7.5 \u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateExclude(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateExclude(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateExclude(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nuser.UpdateExclude(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.UpdateExclude(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nuser.UpdateExclude(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateExcludeAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateExcludeAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateExcludeAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nawait user.UpdateExcludeAsync(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.UpdateExcludeAsync(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nawait user.UpdateExcludeAsync(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n'})}),"\n",(0,r.jsx)(n.h2,{id:"976-\u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\u7acb\u5373\u63d0\u4ea4",children:"9.7.6 \u6392\u9664\u7279\u5b9a\u5217\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateExcludeNow(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateExcludeNow(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateExcludeNow(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nuser.UpdateExcludeNow(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.UpdateExcludeNow(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nuser.UpdateExcludeNow(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateExcludeNowAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateExcludeNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateExcludeNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// \u793a\u4f8b\u56db\nawait user.UpdateExcludeNowAsync(new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.UpdateExcludeNowAsync(new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u516d\nawait user.UpdateExcludeNowAsync(new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n'})}),"\n",(0,r.jsx)(n.h2,{id:"977-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4",children:"9.7.7 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"}),"\n",(0,r.jsx)(n.admonition,{title:"\u529f\u80fd\u79fb\u9664\u58f0\u660e",type:"caution",children:(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u5df2\u5728 ",(0,r.jsx)(n.code,{children:"Furion 2.6.0 +"})," \u7248\u672c\u79fb\u9664\u3002"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateExists(user);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateExistsAsync(user);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"978-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\u7acb\u5373\u63d0\u4ea4",children:"9.7.8 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u6240\u6709\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"}),"\n",(0,r.jsx)(n.admonition,{title:"\u529f\u80fd\u79fb\u9664\u58f0\u660e",type:"caution",children:(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u5df2\u5728 ",(0,r.jsx)(n.code,{children:"Furion 2.6.0 +"})," \u7248\u672c\u79fb\u9664\u3002"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateExistsNow(user);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateExistsNowAsync(user);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"979-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4",children:"9.7.9 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"}),"\n",(0,r.jsx)(n.admonition,{title:"\u529f\u80fd\u79fb\u9664\u58f0\u660e",type:"caution",children:(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u5df2\u5728 ",(0,r.jsx)(n.code,{children:"Furion 2.6.0 +"})," \u7248\u672c\u79fb\u9664\u3002"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateIncludeExists(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateIncludeExists(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateIncludeExists(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateIncludeExistsAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateIncludeExistsAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateIncludeExistsAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n'})}),"\n",(0,r.jsx)(n.h2,{id:"9710-\u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\u7acb\u5373\u63d0\u4ea4",children:"9.7.10 \u6570\u636e\u5b58\u5728\u624d\u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"}),"\n",(0,r.jsx)(n.admonition,{title:"\u529f\u80fd\u79fb\u9664\u58f0\u660e",type:"caution",children:(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u5df2\u5728 ",(0,r.jsx)(n.code,{children:"Furion 2.6.0 +"})," \u7248\u672c\u79fb\u9664\u3002"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateIncludeExistsNow(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateIncludeExistsNow(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateIncludeExistsNow(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateIncludeExistsNowAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateIncludeExistsNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateIncludeExistsNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n'})}),"\n",(0,r.jsx)(n.h2,{id:"9711-\u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\u4e0d\u7acb\u5373\u63d0\u4ea4",children:"9.7.11 \u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"}),"\n",(0,r.jsx)(n.admonition,{title:"\u529f\u80fd\u79fb\u9664\u58f0\u660e",type:"caution",children:(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u5df2\u5728 ",(0,r.jsx)(n.code,{children:"Furion 2.6.0 +"})," \u7248\u672c\u79fb\u9664\u3002"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateExcludeExists(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateExcludeExists(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateExcludeExists(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateExcludeExistsAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateExcludeExistsAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateExcludeExistsAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n'})}),"\n",(0,r.jsx)(n.h2,{id:"9712-\u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\u7acb\u5373\u63d0\u4ea4",children:"9.7.12 \u6570\u636e\u5b58\u5728\u624d\u6392\u9664\u7279\u5b9a\u90e8\u5206\u5217\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09"}),"\n",(0,r.jsx)(n.admonition,{title:"\u529f\u80fd\u79fb\u9664\u58f0\u660e",type:"caution",children:(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u5df2\u5728 ",(0,r.jsx)(n.code,{children:"Furion 2.6.0 +"})," \u7248\u672c\u79fb\u9664\u3002"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateExcludeExistsNow(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateExcludeExistsNow(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateExcludeExistsNow(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateExcludeExistsNowAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateExcludeExistsNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)});\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateExcludeExistsNowAsync(user, new[] {nameof(User.Name), nameof(User.Age)}, true);  // \u5ffd\u7565\u7a7a\u503c\n'})}),"\n",(0,r.jsx)(n.h2,{id:"9713-\u66f4\u65b0\u591a\u6761\u8bb0\u5f55\u4e0d\u7acb\u5373\u63d0\u4ea4",children:"9.7.13 \u66f4\u65b0\u591a\u6761\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Update(user, user2);\n\n// \u793a\u4f8b\u4e8c\nrepository.Update(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nrepository.Update(new[] {user, user2 });\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateAsync(user, user2);\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateAsync(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateAsync(new[] {user, user2 });\n"})}),"\n",(0,r.jsx)(n.h2,{id:"9714-\u66f4\u65b0\u591a\u6761\u8bb0\u5f55\u7acb\u5373\u63d0\u4ea4",children:"9.7.14 \u66f4\u65b0\u591a\u6761\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.UpdateNow(user, user2);\n\n// \u793a\u4f8b\u4e8c\nrepository.UpdateNow(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nrepository.UpdateNow(new[] {user, user2 });\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.UpdateNowAsync(user, user2);\n\n// \u793a\u4f8b\u4e8c\nawait repository.UpdateNowAsync(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nawait repository.UpdateNowAsync(new[] {user, user2 });\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u5c0f\u77e5\u8bc6",type:"tip",children:(0,r.jsxs)(n.p,{children:["\u6240\u6709\u5e26 ",(0,r.jsx)(n.code,{children:"Now"})," \u7ed3\u5c3e\u7684\u8868\u793a\u7acb\u5373\u63d0\u4ea4\u5230\u6570\u636e\u5e93\uff0c\u4e5f\u5c31\u662f\u7acb\u5373\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"SaveChanges"})," \u6216 ",(0,r.jsx)(n.code,{children:"SaveChangesAsync"}),"\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"9715-\u5ffd\u7565\u7a7a\u503c\u66f4\u65b0",children:"9.7.15 \u5ffd\u7565\u7a7a\u503c\u66f4\u65b0"}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.jsx)(n.code,{children:"EFCore"})," \u66f4\u65b0\u4f1a\u66f4\u65b0\u5168\u90e8\u5217\uff08\u9664\u5b9e\u4f53\u8ddf\u8e2a\u65b9\u5f0f\u4ee5\u5916\uff09\uff0c\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u5e0c\u671b ",(0,r.jsx)(n.code,{children:"Null"})," \u503c\u65e0\u9700\u66f4\u65b0\uff0c\u8fd9\u662f\u6211\u4eec\u53ea\u9700\u8981\u5728\u66f4\u65b0\u65f6\u5019\u914d\u7f6e ",(0,r.jsx)(n.code,{children:"ignoreNullValues"})," \u53c2\u6570\u5373\u53ef\uff0c\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"repository.Update(entity, ignoreNullValues: true);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e5f\u53ef\u4ee5\u5168\u5c40\u914d\u7f6e\uff0c\u5728 ",(0,r.jsx)(n.code,{children:"AppDbContext"})," \u7684\u6d3e\u751f\u7c7b\u7684\u6784\u9020\u51fd\u6570\u4e2d\u542f\u7528\u5373\u53ef\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {11}",children:'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString", DbProvider.Sqlite)]\n    public class DefaultDbContext : AppDbContext<DefaultDbContext>\n    {\n        public DefaultDbContext(DbContextOptions<DefaultDbContext> options) : base(options)\n        {\n            InsertOrUpdateIgnoreNullValues = true;\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"9716-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"9.7.16 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,r.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,r.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,r.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var r=s(7294);const a={},t=r.createContext(a);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);