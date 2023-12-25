"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9138],{1018:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var i=s(5893),t=s(1151),c=s(510),r=s(4996);const l={id:"sensitive-detection",title:"30. \u8131\u654f\u5904\u7406",sidebar_label:"30. \u8131\u654f\u5904\u7406"},o=void 0,d={id:"sensitive-detection",title:"30. \u8131\u654f\u5904\u7406",description:"\ud83d\udcdd \u6a21\u5757\u66f4\u65b0\u65e5\u5fd7",source:"@site/docs/sensitive-detection.mdx",sourceDirName:".",slug:"/sensitive-detection",permalink:"/furion-doc/docs/sensitive-detection",draft:!1,unlisted:!1,editUrl:"https://github.com/IcedMango/Furion/tree/v4/handbook/docs/sensitive-detection.mdx",tags:[],version:"current",lastUpdatedBy:"IcedMango",lastUpdatedAt:1701091806,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"sensitive-detection",title:"30. \u8131\u654f\u5904\u7406",sidebar_label:"30. \u8131\u654f\u5904\u7406"},sidebar:"docs",previous:{title:"29. \u7c98\u571f\u5bf9\u8c61",permalink:"/furion-doc/docs/clayobj"},next:{title:"31. \u865a\u62df\u6587\u4ef6\u7cfb\u7edf\uff08\u4e0a\u4f20\u4e0b\u8f7d\uff09",permalink:"/furion-doc/docs/file-provider"}},a={},h=[{value:"30.1 \u5173\u4e8e\u8131\u654f",id:"301-\u5173\u4e8e\u8131\u654f",level:2},{value:"30.2 \u5982\u4f55\u4f7f\u7528",id:"302-\u5982\u4f55\u4f7f\u7528",level:2},{value:"30.2.1 \u6ce8\u518c <code>\u8131\u654f\u8bcd\u6c47\u68c0\u6d4b</code> \u670d\u52a1",id:"3021-\u6ce8\u518c-\u8131\u654f\u8bcd\u6c47\u68c0\u6d4b-\u670d\u52a1",level:3},{value:"30.2.2 \u521b\u5efa <code>sensitive-words.txt</code> \u6587\u4ef6",id:"3022-\u521b\u5efa-sensitive-wordstxt-\u6587\u4ef6",level:3},{value:"30.2.3 \u4f7f\u7528\u8131\u654f\u68c0\u6d4b",id:"3023-\u4f7f\u7528\u8131\u654f\u68c0\u6d4b",level:3},{value:"30.2.4 \u8131\u654f\u8bcd\u6c47\u66ff\u6362",id:"3024-\u8131\u654f\u8bcd\u6c47\u66ff\u6362",level:3},{value:"30.3 \u81ea\u5b9a\u4e49\u8131\u654f\u8bcd\u6c47\u5904\u7406",id:"303-\u81ea\u5b9a\u4e49\u8131\u654f\u8bcd\u6c47\u5904\u7406",level:2},{value:"30.3.1 \u81ea\u5b9a\u4e49 <code>ISensitiveDetectionProvider</code> \u5b9e\u73b0",id:"3031-\u81ea\u5b9a\u4e49-isensitivedetectionprovider-\u5b9e\u73b0",level:3},{value:"30.3.2 \u6ce8\u518c\u81ea\u5b9a\u4e49\u8131\u654f\u63d0\u4f9b\u5668",id:"3032-\u6ce8\u518c\u81ea\u5b9a\u4e49\u8131\u654f\u63d0\u4f9b\u5668",level:3},{value:"30.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"304-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function x(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"\ud83d\udcdd \u6a21\u5757\u66f4\u65b0\u65e5\u5fd7"}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u95ee\u9898\u4fee\u590d"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\xa0",(0,i.jsx)(c.Z,{children:"\u4fee\u590d"})," \u8131\u654f\u5904\u7406\u5982\u679c\u5b57\u5178\u5b58\u5728\u91cd\u590d\u8bcd\u5bfc\u81f4\u5f02\u5e38\u95ee\u9898 ",(0,i.jsx)("sup",{children:"4.8.8.4"})," ",(0,i.jsx)("sup",{children:"\u23f1\ufe0f2023.04.23"})," ",(0,i.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/I6Y19K",children:"#I6Y19K"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5176\u4ed6\u66f4\u6539"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\xa0",(0,i.jsx)(c.Z,{children:"\u8c03\u6574"})," \u8131\u654f\u5904\u7406 ",(0,i.jsx)(n.code,{children:"sensitive-words.txt"})," \u5d4c\u5165\u6587\u4ef6\u652f\u6301 ",(0,i.jsx)(n.code,{children:"UTF8 BOM"})," \u7f16\u7801\uff0c\u611f\u8c22 ",(0,i.jsx)(n.a,{href:"https://gitee.com/man119",children:"@man119"})," ",(0,i.jsx)("sup",{children:"4.8.6.7"})," ",(0,i.jsx)("sup",{children:"\u23f1\ufe0f2023.02.18"})," ",(0,i.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/I6G1JN",children:"#I6G1JN"})]}),"\n"]}),"\n"]}),"\n"]})})})]}),"\n",(0,i.jsx)(n.admonition,{title:"\u7248\u672c\u8bf4\u660e",type:"important",children:(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,i.jsx)(n.code,{children:"Furion 2.4.4 +"})," \u7248\u672c\u4f7f\u7528\u3002"]})}),"\n","\n","\n",(0,i.jsx)(n.h2,{id:"301-\u5173\u4e8e\u8131\u654f",children:"30.1 \u5173\u4e8e\u8131\u654f"}),"\n",(0,i.jsx)(n.p,{children:"\u5f15\u7528\u767e\u5ea6\u767e\u79d1\uff1a"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6570\u636e\u8131\u654f\u662f\u6307\u5bf9\u67d0\u4e9b\u654f\u611f\u4fe1\u606f\u901a\u8fc7\u8131\u654f\u89c4\u5219\u8fdb\u884c\u6570\u636e\u7684\u53d8\u5f62\uff0c\u5b9e\u73b0\u654f\u611f\u9690\u79c1\u6570\u636e\u7684\u53ef\u9760\u4fdd\u62a4\u3002\u5728\u6d89\u53ca\u5ba2\u6237\u5b89\u5168\u6570\u636e\u6216\u8005\u4e00\u4e9b\u5546\u4e1a\u6027\u654f\u611f\u6570\u636e\u7684\u60c5\u51b5\u4e0b\uff0c\u5728\u4e0d\u8fdd\u53cd\u7cfb\u7edf\u89c4\u5219\u6761\u4ef6\u4e0b\uff0c\u5bf9\u771f\u5b9e\u6570\u636e\u8fdb\u884c\u6539\u9020\u5e76\u63d0\u4f9b\u6d4b\u8bd5\u4f7f\u7528\uff0c\u5982\u8eab\u4efd\u8bc1\u53f7\u3001\u624b\u673a\u53f7\u3001\u5361\u53f7\u3001\u5ba2\u6237\u53f7\u7b49\u4e2a\u4eba\u4fe1\u606f\u90fd\u9700\u8981\u8fdb\u884c\u6570\u636e\u8131\u654f\u3002\u6570\u636e\u5b89\u5168\u6280\u672f\u4e4b\u4e00\uff0c\u6570\u636e\u5e93\u5b89\u5168\u6280\u672f\u4e3b\u8981\u5305\u62ec\uff1a\u6570\u636e\u5e93\u6f0f\u626b\u3001\u6570\u636e\u5e93\u52a0\u5bc6\u3001\u6570\u636e\u5e93\u9632\u706b\u5899\u3001\u6570\u636e\u8131\u654f\u3001\u6570\u636e\u5e93\u5b89\u5168\u5ba1\u8ba1\u7cfb\u7edf\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"Furion"})," \u7cfb\u7edf\u4e2d\uff0c",(0,i.jsx)(n.code,{children:"\u8131\u654f\u5904\u7406"})," \u6307\u7684\u662f\u5bf9\u4e0d\u7b26\u5408\u7cfb\u7edf\u5408\u6cd5\u8bcd\u6c47\u68c0\u6d4b\u9a8c\u8bc1\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"302-\u5982\u4f55\u4f7f\u7528",children:"30.2 \u5982\u4f55\u4f7f\u7528"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u5185\u7f6e\u4e86\u4e00\u5957\u9ed8\u8ba4\u7684\u8131\u654f\u8bcd\u6c47\u8131\u654f\u5904\u7406\u673a\u5236\uff0c\u5e76\u4e14\u63d0\u4f9b\u81ea\u5b9a\u4e49\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsxs)(n.h3,{id:"3021-\u6ce8\u518c-\u8131\u654f\u8bcd\u6c47\u68c0\u6d4b-\u670d\u52a1",children:["30.2.1 \u6ce8\u518c ",(0,i.jsx)(n.code,{children:"\u8131\u654f\u8bcd\u6c47\u68c0\u6d4b"})," \u670d\u52a1"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {3}",children:"public void ConfigureServices(IServiceCollection services)\n{\n    services.AddSensitiveDetection();\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"3022-\u521b\u5efa-sensitive-wordstxt-\u6587\u4ef6",children:["30.2.2 \u521b\u5efa ",(0,i.jsx)(n.code,{children:"sensitive-words.txt"})," \u6587\u4ef6"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"Web"})," \u542f\u52a8\u5c42\u9879\u76ee\u4e2d\u521b\u5efa ",(0,i.jsx)(n.code,{children:"sensitive-words.txt"})," \u6587\u4ef6\uff0c",(0,i.jsxs)(n.strong,{children:["\u786e\u4fdd\u91c7\u7528 ",(0,i.jsx)(n.code,{children:"UTF-8"})," \u7f16\u7801\u683c\u5f0f\uff08",(0,i.jsx)(n.code,{children:"Furion 4.8.6.7+"})," \u652f\u6301 ",(0,i.jsx)(n.code,{children:"UTF8 BOM"})," \u7f16\u7801\u683c\u5f0f\uff09 \u4e14\u8bbe\u7f6e\u4e3a\u5d4c\u5165\u5f0f\u8d44\u6e90\uff01"]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"sensitive-words.txt"})," \u5185\u5bb9\u683c\u5f0f\u4e3a\u6bcf\u4e00\u884c\u6807\u8bc6\u4e00\u4e2a\u8131\u654f\u8bcd\u6c47\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-showLineNumbers",children:"\u574f\u4eba\n\u65e0\u8bed\n\u6eda\u5f00\n\u516b\u560e\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:[(0,i.jsx)(n.code,{children:"Furion 3.8.9+"})," \u7248\u672c"]}),(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"Furion 3.8.9+"})," \u7248\u672c\u652f\u6301 ",(0,i.jsx)(n.code,{children:"|"})," \u5206\u9694\u7b26\u8fdb\u884c\u5206\u5272\uff0c\u4e5f\u540c\u65f6\u652f\u6301 ",(0,i.jsx)(n.code,{children:"\u6362\u884c"})," \u548c ",(0,i.jsx)(n.code,{children:"|"})," \u6df7\u7528\uff0c\u5982\uff1a"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-showLineNumbers",children:"\u574f\u4eba|\u65e0\u8bed|\u6eda\u5f00\n\u516b\u560e\n"})}),(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["\u63a8\u8350\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"|"})," \u65b9\u5f0f\uff0c\u53ef\u4ee5\u8282\u7701\u8bcd\u5e93\u5360\u7528\u5b58\u50a8\u7a7a\u95f4\u3002"]})})]}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u8bbe\u7f6e\u4e3a\u5d4c\u5165\u5f0f\u8d44\u6e90\uff1a"}),"\n",(0,i.jsx)("img",{src:(0,r.Z)("img/tm.png")}),"\n",(0,i.jsx)(n.h3,{id:"3023-\u4f7f\u7528\u8131\u654f\u68c0\u6d4b",children:"30.2.3 \u4f7f\u7528\u8131\u654f\u68c0\u6d4b"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.strong,{children:["\u5b9e\u73b0\u6570\u636e\u9a8c\u8bc1\u8131\u654f\u68c0\u6d4b ",(0,i.jsx)(n.code,{children:"[SensitiveDetection]"})]})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u63d0\u4f9b\u4e86 ",(0,i.jsx)(n.code,{children:"[SensitiveDetection]"})," \u9a8c\u8bc1\u7279\u6027\uff0c\u53ef\u4ee5\u5bf9\u53c2\u6570\u3001\u5c5e\u6027\u8fdb\u884c\u8131\u654f\u9a8c\u8bc1\uff0c\u7528\u6cd5\u548c ",(0,i.jsx)(n.code,{children:"[DataValidation]"})," \u4e00\u81f4\uff0c\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {4,9}",children:"// \u5728\u5c5e\u6027\u4e2d\u4f7f\u7528\npublic class Content\n{\n    [SensitiveDetection]\n    public string Text { get; set; }\n}\n\n// \u5728 \u52a8\u6001API/Controller \u4e2d\u4f7f\u7528\npublic void Test([SensitiveDetection] string text)\n{\n\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.strong,{children:["\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"ISensitiveDetectionProvider"})," \u670d\u52a1\u4f7f\u7528"]})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86 ",(0,i.jsx)(n.code,{children:"ISensitiveDetectionProvider"})," \u670d\u52a1\u8fdb\u884c\u624b\u52a8\u8131\u654f\u9a8c\u8bc1\u5904\u7406\uff0c\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {4,15,25,35}",children:'public class FurionService\n{\n    private readonly ISensitiveDetectionProvider _sensitiveDetectionProvider;\n    public FurionService(ISensitiveDetectionProvider sensitiveDetectionProvider)\n    {\n        _sensitiveDetectionProvider = sensitiveDetectionProvider;\n    }\n\n    /// <summary>\n    /// \u83b7\u53d6\u6240\u6709\u8131\u654f\u8bcd\u6c47\n    /// </summary>\n    /// <returns></returns>\n    public async Task<IEnumerable<string>> GetWordsAsync()\n    {\n        return await _sensitiveDetectionProvider.GetWordsAsync();\n    }\n\n    /// <summary>\n    /// \u5224\u65ad\u662f\u5426\u662f\u6b63\u5e38\u7684\u8bcd\u6c47\n    /// </summary>\n    /// <param name="text"></param>\n    /// <returns></returns>\n    public async Task<bool> VaildedAsync(string text)\n    {\n        return await _sensitiveDetectionProvider.VaildedAsync(text);\n    }\n\n    /// <summary>\n    /// \u66ff\u6362\u975e\u6b63\u5e38\u8bcd\u6c47\n    /// </summary>\n    /// <param name="text"></param>\n    /// <returns></returns>\n    public async Task<string> ReplaceAsync(string text)\n    {\n        return await _sensitiveDetectionProvider.ReplaceAsync(text, \'*\');\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"3024-\u8131\u654f\u8bcd\u6c47\u66ff\u6362",children:"30.2.4 \u8131\u654f\u8bcd\u6c47\u66ff\u6362"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86\u66ff\u6362\u8131\u654f\u8bcd\u6c47\u7684\u7279\u6027\u652f\u6301\uff0c\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {4}",children:"// \u5728\u5c5e\u6027\u4e2d\u4f7f\u7528\npublic class Content\n{\n    [SensitiveDetection('*')]\n    public string Text { get; set; }\n}\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"\u7279\u522b\u6ce8\u610f",type:"caution",children:[(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"Furion 3.8.8+"})," \u7248\u672c\u540e\u652f\u6301\u65b9\u6cd5\u7279\u6027\u76f4\u63a5\u66ff\u6362"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {1}",children:"public void Test([SensitiveDetection('*')] string text)\n{\n}\n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"303-\u81ea\u5b9a\u4e49\u8131\u654f\u8bcd\u6c47\u5904\u7406",children:"30.3 \u81ea\u5b9a\u4e49\u8131\u654f\u8bcd\u6c47\u5904\u7406"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u9664\u4e86\u5185\u7f6e\u4e86\u4e00\u5957\u9ed8\u8ba4\u7684 ",(0,i.jsx)(n.code,{children:"\u8131\u654f\u5904\u7406"})," \u7a0b\u5e8f\uff0c\u4e5f\u652f\u6301\u81ea\u5b9a\u4e49\u8131\u654f\u5904\u7406\u7a0b\u5e8f\u3002"]}),"\n",(0,i.jsxs)(n.h3,{id:"3031-\u81ea\u5b9a\u4e49-isensitivedetectionprovider-\u5b9e\u73b0",children:["30.3.1 \u81ea\u5b9a\u4e49 ",(0,i.jsx)(n.code,{children:"ISensitiveDetectionProvider"})," \u5b9e\u73b0"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {4,15,25,36}",children:'/// <summary>\n/// \u81ea\u5b9a\u4e49\u8131\u654f\u8bcd\u6c47\u68c0\u6d4b\u5668\n/// </summary>\npublic class YourSensitiveDetectionProvider : ISensitiveDetectionProvider\n{\n    // \u652f\u6301\u6784\u9020\u51fd\u6570\u6ce8\u5165\n    public YourSensitiveDetectionProvider()\n    {\n    }\n\n    /// <summary>\n    /// \u8fd4\u56de\u6240\u6709\u8131\u654f\u8bcd\u6c47\n    /// </summary>\n    /// <returns></returns>\n    public async Task<IEnumerable<string>> GetWordsAsync()\n    {\n        // \u8fd9\u91cc\u5199\u4f60\u8131\u654f\u8bcd\u6c47\u6570\u636e\u7684\u6765\u6e90\uff08\u5982\u4ece\u6570\u636e\u5e93\u8bfb\u53d6\uff09\uff0c\u5efa\u8bae\u505a\u597d\u7f13\u5b58\u64cd\u4f5c\n    }\n\n    /// <summary>\n    /// \u5224\u65ad\u8131\u654f\u8bcd\u6c47\u662f\u5426\u6709\u6548\n    /// </summary>\n    /// <param name="text"></param>\n    /// <returns></returns>\n    public async Task<bool> VaildedAsync(string text)\n    {\n        // \u8fd9\u91cc\u5199\u4f60\u5982\u4f55\u5224\u65ad\u662f\u6b63\u5e38\u7684\u5b57\u7b26\uff0c\u8fd4\u56de true \u6b63\u5e38\uff0c\u8fd4\u56de false \u8868\u793a\u662f\u4e2a\u8131\u654f\u8bcd\u6c47\n    }\n\n    /// <summary>\n    /// \u66ff\u6362\u8131\u654f\u8bcd\u6c47\n    /// </summary>\n    /// <param name="text"></param>\n    /// <param name="transfer"></param>\n    /// <returns></returns>\n    public async Task<string> ReplaceAsync(string text, char transfer = \'*\')\n    {\n        // \u8fd9\u91cc\u5199\u4f60\u66ff\u6362\u975e\u6b63\u5e38\u5b57\u7b26\u4e3a\u6307\u5b9a\u5b57\u7b26\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"3032-\u6ce8\u518c\u81ea\u5b9a\u4e49\u8131\u654f\u63d0\u4f9b\u5668",children:"30.3.2 \u6ce8\u518c\u81ea\u5b9a\u4e49\u8131\u654f\u63d0\u4f9b\u5668"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {3}",children:"public void ConfigureServices(IServiceCollection services)\n{\n    services.AddSensitiveDetection<YourSensitiveDetectionProvider>();\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e4b\u540e\u7cfb\u7edf\u5c06\u81ea\u52a8\u91c7\u7528\u81ea\u5b9a\u4e49\u7684\u65b9\u5f0f\u8fdb\u884c\u8131\u654f\u5904\u7406\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"304-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"30.4 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,i.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,i.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,i.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})}),"\n",(0,i.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},510:(e,n,s)=>{s.d(n,{Z:()=>Y});s(7294);const i=(e,n,s)=>e?"string"==typeof e?e:e[n]||s:s;var t=s(5893);const c={display:"block"},r=e=>{let{size:n,color:s,style:r,...l}=e;const o=r?{...c,...r}:c;return(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:o,...l,children:(0,t.jsx)("path",{d:"M856.4 292.8c-63.3-63.6-126.6-127.1-190.2-190.3-15.3-15.2-32.7-16.1-48.1-0.8-64.3 63.6-128.1 127.6-191.8 191.9-14 14.2-16.3 31.6-1.7 46 14.8 14.7 31.5 10.6 46.1-2.7 5.1-4.6 9.8-9.7 14.7-14.7 39.2-39.7 78.5-79.5 122.8-124.4 0 170 3 332.2-1.1 494-2.4 96.4-91.2 174.6-187.4 176.6-110.6 2.3-198.6-84.4-199-197.4-0.6-136.3-0.2-272.6-0.1-408.9 0-21.8-7.9-37.4-31.2-39.9-18.9-2-33.2 13.2-33.1 37.5 0 145.8-3.4 291.7 2.4 437.2 6 152.1 160.4 263.5 309.5 230.5C591.8 900 672.8 797.2 673.6 664.6c0.8-144 0.2-288.1 0.2-432.1v-33.3c11.2 10.2 17.6 15.4 23.3 21.3 38.5 38.4 76.7 77 115.3 115.2 14.8 14.6 32.2 19.2 47.8 2.9 13.8-14.8 10.3-31.7-3.8-45.8z",fill:i(s,0,"#333333")})})};r.defaultProps={size:18};const l=r,o={display:"block"},d=e=>{let{size:n,color:s,style:c,...r}=e;const l=c?{...o,...c}:o;return(0,t.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...r,children:[(0,t.jsx)("path",{d:"M143.872 768a51.2 51.2 0 0 1-15.36-2.56 51.2 51.2 0 0 1-35.328-51.2V283.136a148.992 148.992 0 0 1 141.824-153.6h450.56a148.992 148.992 0 0 1 141.824 153.6V512a148.992 148.992 0 0 1-141.824 153.6H244.224l-60.928 80.896a51.2 51.2 0 0 1-39.424 21.504zM235.008 180.224a97.792 97.792 0 0 0-90.624 102.4v430.592L218.624 614.4h466.944a97.792 97.792 0 0 0 90.624-102.4V283.136a97.792 97.792 0 0 0-90.624-102.4z",fill:i(s,0,"#333333")}),(0,t.jsx)("path",{d:"M880.128 875.52a51.2 51.2 0 0 1-39.424-20.48l-60.928-80.896h-243.2a25.6 25.6 0 0 1 0-51.2h268.8l76.288 102.4v-295.936a25.6 25.6 0 0 1 25.6-25.6 25.6 25.6 0 0 1 25.6 25.6v293.888a51.2 51.2 0 0 1-51.2 51.2z",fill:i(s,1,"#333333")})]})};d.defaultProps={size:18};const a=d,h={display:"block"},x=e=>{let{size:n,color:s,style:c,...r}=e;const l=c?{...h,...c}:h;return(0,t.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...r,children:[(0,t.jsx)("path",{d:"M223.425605 449.2744l161.632237 0 0 253.65714c0 16.954137 13.745049 30.699186 30.699186 30.699186 16.95516 0 30.699186-13.745049 30.699186-30.699186l0-284.356326c0-16.95516-13.744026-30.699186-30.699186-30.699186L291.035446 387.876028l217.23665-248.51605L733.039255 387.580293 607.104031 387.580293c-16.954137 0-30.699186 13.745049-30.699186 30.699186l0 284.652062c0 16.954137 13.745049 30.699186 30.699186 30.699186s30.699186-13.745049 30.699186-30.699186L637.803217 448.978664l164.448376 0c12.140505 0 23.140023-7.154957 28.063149-18.251689 4.922103-11.097756 2.841721-24.053835-5.307889-33.05279L530.62315 72.570829c-5.881964-6.495948-14.273075-10.134825-23.024389-10.091846-8.763594 0.076748-17.076934 3.895727-22.844288 10.494005L200.312188 398.371056c-7.92653 9.067516-9.818623 21.931498-4.839215 32.896224S211.383338 449.2744 223.425605 449.2744z",fill:i(s,0,"#333333")}),(0,t.jsx)("path",{d:"M222.354204 829.113381l581.732178 0c16.954137 0 30.699186-13.745049 30.699186-30.699186s-13.745049-30.699186-30.699186-30.699186L222.354204 767.715009c-16.954137 0-30.699186 13.745049-30.699186 30.699186S205.400067 829.113381 222.354204 829.113381z",fill:i(s,1,"#333333")}),(0,t.jsx)("path",{d:"M804.086381 896.729361 222.354204 896.729361c-16.954137 0-30.699186 13.745049-30.699186 30.699186s13.745049 30.699186 30.699186 30.699186l581.732178 0c16.954137 0 30.699186-13.745049 30.699186-30.699186S821.041542 896.729361 804.086381 896.729361z",fill:i(s,2,"#333333")})]})};x.defaultProps={size:18};const u=x,p={display:"block"},j=e=>{let{size:n,color:s,style:c,...r}=e;const l=c?{...p,...c}:p;return(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...r,children:(0,t.jsx)("path",{d:"M380.15463648 874.54223633c0 18.12744166-14.83154297 32.95898463-32.95898463 32.95898463s-32.95898463-14.83154297-32.95898462-32.95898463V228.9152832L172.71078883 370.86962865a33.04467773 33.04467773 0 0 1-46.60400416 0 33.04467773 33.04467773 0 0 1 0-46.6040034l197.55615234-198.14941406A32.76782227 32.76782227 0 0 1 347.0967749 116.52514674c0.03295924 0 0.06591772-0.03295924 0.09887695-0.03295924 1.54907201 0 2.90039088 0.69213867 4.41650366 0.88989258 2.66967773 0.39550781 5.40527318 0.59326172 7.94311548 1.61499049 12.03002904 4.94384766 20.59936549 16.71020508 20.59936549 30.45410156v725.0910642z m320.15698192 23.34155248a32.85351537 32.85351537 0 0 1-23.43383789 9.59106445c-0.03295924 0-0.06591772 0.03295924-0.09887696 0.03295924-1.54907201 0-2.90039088-0.69213867-4.41650365-0.92285182-2.70263697-0.36254857-5.40527318-0.56030248-7.94311549-1.61498972-12.03002904-4.91088842-20.59936549-16.67724584-20.59936473-30.42114309V149.45776367c0-18.12744166 14.83154297-32.95898463 32.95898387-32.95898463s32.95898463 14.83154297 32.95898463 32.95898463v645.60058619l141.52587916-141.92138697c12.81445313-12.82104467 33.81591797-12.82104467 46.63037109 0 12.78808619 12.81445313 12.78808619 33.77636719 0 46.60400416L700.3116184 897.88378881z",fill:i(s,0,"#333333")})})};j.defaultProps={size:18};const v=j,m={display:"block"},g=e=>{let{size:n,color:s,style:c,...r}=e;const l=c?{...m,...c}:m;return(0,t.jsx)("svg",{viewBox:"0 0 1172 1024",width:n+"px",height:n+"px",style:l,...r,children:(0,t.jsx)("path",{d:"M870.0416 250.4704a38.4 38.4 0 0 0-8.96 53.5552c13.056 18.2784 24.4224 37.8368 33.7408 58.112a38.4512 38.4512 0 0 0 50.944 18.8928 38.4512 38.4512 0 0 0 18.8416-50.944 436.0192 436.0192 0 0 0-40.96-70.6048 38.3488 38.3488 0 0 0-53.6064-9.0112zM181.4528 566.016a35.9936 35.9936 0 0 0 25.5488-10.5984L351.7952 410.624a36.096 36.096 0 1 0-51.0976-51.0976L217.6 442.5728C250.0096 278.1184 395.264 153.6 569.1392 153.6c50.7904 0 99.8912 10.3936 145.92 30.9248a38.4 38.4 0 1 0 31.232-70.0928 431.36 431.36 0 0 0-177.152-37.632c-214.6816 0-393.1136 156.416-428.4416 361.216L62.1568 359.4752a36.1984 36.1984 0 0 0-51.0976 51.0976l144.8448 144.7936a36.0448 36.0448 0 0 0 25.5488 10.6496zM978.5344 463.104a36.1984 36.1984 0 0 0-51.0976 0l-144.8448 144.7936a36.096 36.096 0 1 0 51.0976 51.0976l88.6272-88.576C894.3104 740.2496 746.8032 870.4 569.1392 870.4a357.7856 357.7856 0 0 1-325.2736-207.7184 38.4 38.4 0 1 0-69.7344 32.3072 434.3808 434.3808 0 0 0 394.9568 252.2112c215.1936 0 393.984-157.184 428.6464-362.7008l74.496 74.496a35.9936 35.9936 0 0 0 51.0976 0 36.096 36.096 0 0 0 0-51.0976l-144.7936-144.7936z",fill:i(s,0,"#333333")})})};g.defaultProps={size:18};const b=g,y={display:"block"},f=e=>{let{size:n,color:s,style:c,...r}=e;const l=c?{...y,...c}:y;return(0,t.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...r,children:[(0,t.jsx)("path",{d:"M302 332a30 30 0 1 1 0-60h420a30 30 0 0 1 0 60H302zM302 542a30 30 0 0 1 0-60h420a30 30 0 0 1 0 60H302zM302 752a30 30 0 0 1 0-60h120a30 30 0 0 1 0 60H302z",fill:i(s,0,"#333333")}),(0,t.jsx)("path",{d:"M789.47 784.1a30 30 0 0 1 39.36 45.3l-144.24 125.25a30 30 0 0 1-19.68 7.35H214.85C163.4 962 122 919.46 122 867.38V156.62C122 104.54 163.4 62 214.85 62h594.3C860.6 62 902 104.54 902 156.62v529.05a30 30 0 1 1-60 0V156.62C842 137.3 827.09 122 809.15 122H214.85C196.91 122 182 137.3 182 156.62v710.76C182 886.7 196.91 902 214.85 902h438.84l135.78-117.9z",fill:i(s,1,"#333333")}),(0,t.jsx)("path",{d:"M692 931.19a30 30 0 1 1-60 0v-174.6C632 704.57 673.4 662 724.85 662h147.78a30 30 0 0 1 0 60h-147.78c-17.94 0-32.85 15.3-32.85 34.62v174.6z",fill:i(s,2,"#333333")})]})};f.defaultProps={size:18};const z=f,w={display:"block"},C=e=>{let{size:n,color:s,style:c,...r}=e;const l=c?{...w,...c}:w;return(0,t.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...r,children:[(0,t.jsx)("path",{d:"M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z",fill:i(s,0,"#333333")}),(0,t.jsx)("path",{d:"M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z",fill:i(s,1,"#333333")})]})};C.defaultProps={size:18};const M=C,k={display:"block"},P=e=>{let{size:n,color:s,style:c,...r}=e;const l=c?{...k,...c}:k;return(0,t.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...r,children:[(0,t.jsx)("path",{d:"M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 34.8-28.2 63-63 63H232c-34.8 0-63-28.2-63-63 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5 0.2 13 0.7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7 6 17.2 13.6 33.6 22.7 49 24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2c41.5-24.3 76.2-59 100.5-100.5 9.1-15.5 16.7-31.9 22.7-49C812.1 793.1 836 831.8 836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7 0.4-6.4 0.7-12.8 0.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3-20.1 11.8-42 20-64.9 24.3V484c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v396.5c-22.9-4.3-44.8-12.5-64.9-24.3-30.3-17.7-55.6-43-73.3-73.3C317.7 752 308 716.8 308 680V412h408v268z",fill:i(s,0,"#333333")}),(0,t.jsx)("path",{d:"M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1-17.2-31.5-42.5-56.8-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9-31.5 17.2-56.8 42.5-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z",fill:i(s,1,"#333333")})]})};P.defaultProps={size:18};const D=P,L={display:"block"},S=e=>{let{size:n,color:s,style:c,...r}=e;const l=c?{...L,...c}:L;return(0,t.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...r,children:[(0,t.jsx)("path",{d:"M512 71.68c-242.688 0-440.32 197.632-440.32 440.32s197.632 440.32 440.32 440.32 440.32-197.632 440.32-440.32-197.632-440.32-440.32-440.32z m0 819.2c-208.896 0-378.88-169.984-378.88-378.88s169.984-378.88 378.88-378.88 378.88 169.984 378.88 378.88-169.984 378.88-378.88 378.88z",fill:i(s,0,"#333333")}),(0,t.jsx)("path",{d:"M542.72 261.12H481.28v220.16H261.12v61.44h220.16v220.16h61.44v-220.16h220.16V481.28h-220.16z",fill:i(s,1,"#333333")})]})};S.defaultProps={size:18};const N=S,F={display:"block"},A=e=>{let{size:n,color:s,style:c,...r}=e;const l=c?{...F,...c}:F;return(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...r,children:(0,t.jsx)("path",{d:"M384 896h-64v-70.4c0-15.2-10.4-28-24.8-31.2C159.2 768 64 644.8 64 496v-32h64v32c0 118.4 73.6 215.2 179.2 236 44.8 8.8 76.8 48 76.8 94.4v69.6zM704 896h-64v-70.4c0-45.6 32-85.6 76.8-94.4C822.4 711.2 896 614.4 896 496v-32h64v32c0 148.8-95.2 272-231.2 298.4-14.4 3.2-24.8 16-24.8 31.2v70.4zM512.8 640l-41.6-37.6c-147.2-133.6-244-208-244-316.8 0-88 68.8-156.8 156.8-156.8 49.6 0 97.6 23.2 128.8 60C544 152 592 128.8 641.6 128.8c88 0 156.8 68.8 156.8 156.8 0 108-96.8 183.2-244 316.8L512.8 640z",fill:i(s,0,"#333333")})})};A.defaultProps={size:18};const I=A,T={display:"block"},B=e=>{let{size:n,color:s,style:c,...r}=e;const l=c?{...T,...c}:T;return(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...r,children:(0,t.jsx)("path",{d:"M942.4615936 284.62787926c-14.30911886-14.12709945-37.31996786-14.05468217-51.48229632 0.21920654L517.97142983 661.27810333 139.75544149 286.45003606c-14.30911886-14.16232846-37.31996786-14.05468217-51.51948344 0.21920654-14.16232846 14.30911886-14.05468217 37.35519687 0.21920654 51.51948345l401.99014627 398.34974663c0.61847666 0.61847666 1.41897273 0.76526706 2.03940637 1.34655658 0.14483342 0.14483342 0.18201941 0.32685283 0.32685283 0.47364324 7.09877874 7.02636259 16.38375538 10.55911595 25.63154489 10.55911595 9.35739278 0 18.75001458-3.60516949 25.85075143-10.77636551l398.34974663-401.99014628C956.84312974 321.8382427 956.73548345 298.7921647 942.4615936 284.62787926z",fill:i(s,0,"#333333")})})};B.defaultProps={size:18};const V=B,H={display:"block"},_=e=>{let{size:n,color:s,style:c,...r}=e;const l=c?{...H,...c}:H;return(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:l,...r,children:(0,t.jsx)("path",{d:"M81.5384064 739.37212074c14.30911886 14.12709945 37.31996786 14.05468217 51.48229632-0.21920654L506.02857017 362.72189667 884.24455851 737.54996394c14.30911886 14.16232846 37.31996786 14.05468217 51.51948344-0.21920654 14.16232846-14.30911886 14.05468217-37.35519687-0.21920654-51.51948345l-401.99014627-398.34974663c-0.61847666-0.61847666-1.41897273-0.76526706-2.03940637-1.34655658-0.14483342-0.14483342-0.18201941-0.32685283-0.32685282-0.47364324-7.09877874-7.02636259-16.38375538-10.55911595-25.6315449-10.55911595-9.35739278 0-18.75001458 3.60516949-25.85075143 10.77636551l-398.34974663 401.99014628C67.15687026 702.1617573 67.26451655 725.2078353 81.5384064 739.37212074z",fill:i(s,0,"#333333")})})};_.defaultProps={size:18};const U=_,E=e=>{let{name:n,...s}=e;switch(n){case"youhua":return(0,t.jsx)(l,{...s});case"dayi":return(0,t.jsx)(a,{...s});case"shengji":return(0,t.jsx)(u,{...s});case"tiaozheng":return(0,t.jsx)(v,{...s});case"gengxin":return(0,t.jsx)(b,{...s});case"wendang":return(0,t.jsx)(z,{...s});case"shanchu":return(0,t.jsx)(M,{...s});case"bug":return(0,t.jsx)(D,{...s});case"xinzeng":return(0,t.jsx)(N,{...s});case"fuwu":return(0,t.jsx)(I,{...s});case"down":return(0,t.jsx)(V,{...s});case"up":return(0,t.jsx)(U,{...s})}return null},G={label:"label_p8vM",icon:"icon_knQK"};function Y(e){const{children:n}=e,s={"\u65b0\u589e":{icon:"xinzeng",bgColor:"#39b54a"},"\u4fee\u590d":{icon:"bug",bgColor:"#9c26b0"},"\u6587\u6863":{icon:"wendang",bgColor:"rgb(79, 147, 255)"},"\u66f4\u65b0":{icon:"gengxin",bgColor:"#0081ff"},"\u8c03\u6574":{icon:"tiaozheng",bgColor:"#333"},"\u5347\u7ea7":{icon:"shengji",bgColor:"#e03997"},"\u79fb\u9664":{icon:"shanchu",bgColor:"#666"},"\u7b54\u7591":{icon:"dayi",bgColor:"#bbb"},"\u4f18\u5316":{icon:"youhua",bgColor:"#38e550"}};return(0,t.jsxs)("label",{className:G.label,title:n,style:{backgroundColor:s[n].bgColor},children:[(0,t.jsx)(E,{name:s[n].icon,color:"white",size:14,className:G.icon})," ",n]})}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var i=s(7294);const t={},c=i.createContext(t);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);