"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7918],{1310:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var s=n(4334),a=n(5281),i=n(3438),o=n(8596),l=n(9960),r=n(5999),c=n(4996),d=n(5893);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.Z)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.Z,{"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const x={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function v(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(l.Z,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function p(e){let{children:t,active:n,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function g(){const e=(0,i.s1)(),t=(0,o.Ns)();return e?(0,d.jsx)("nav",{className:(0,s.Z)(a.k.docs.docBreadcrumbs,x.breadcrumbsContainer),"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(p,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(v,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},5655:(e,t,n)=>{n.r(t),n.d(t,{default:()=>X});var s=n(7294),a=n(1944),i=n(902),o=n(5893);const l=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(l.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new i.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,o.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(4334),m=n(7524),h=n(49);function x(){const{metadata:e}=c();return(0,o.jsx)(h.Z,{previous:e.previous,next:e.next})}var v=n(3120),p=n(4364),g=n(5281),b=n(4881),f=n(5999);function j(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,o.jsx)(f.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function Z(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(f.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function C(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,o.jsxs)("span",{className:g.k.common.lastUpdated,children:[(0,o.jsx)(f.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,o.jsx)(j,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,o.jsx)(Z,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var L=n(1526),N=n(512),_=n(1191),k=n(7473),y=n(5983),T=n(2098),U=n(547);const H={lastUpdated:"lastUpdated_VsjB"};function w(e){return(0,o.jsx)("div",{className:(0,N.Z)(g.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(L.Z,{...e})})})}function A(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:i}=e;const{adv:l}=(0,s.useContext)(y.Z);return(0,o.jsxs)("div",{className:(0,N.Z)(g.k.docs.docFooterEditMetaRow,"row"),children:[(0,o.jsx)("div",{className:"col",children:t&&(0,o.jsxs)(o.Fragment,{children:[l&&(0,o.jsx)(_.Z,{style:{margin:0,marginBottom:10,height:80}}),(0,o.jsx)(b.Z,{editUrl:t})]})}),(0,o.jsx)("div",{className:(0,N.Z)("col",H.lastUpdated),children:(n||a)&&(0,o.jsxs)(o.Fragment,{children:[l&&(0,o.jsx)(k.Z,{style:{margin:0,marginBottom:10,border:"2px solid #ffb02e",marginTop:-4}}),(0,o.jsx)(C,{lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:a})]})})]})}function B(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:i,tags:l}=e,r=l.length>0,d=!!(t||n||i),u=r||d,{adv:m}=(0,s.useContext)(y.Z);return u?(0,o.jsxs)("footer",{className:(0,N.Z)(g.k.docs.docFooter,"docusaurus-mt-lg"),children:[m&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(T.Z,{})}),r&&(0,o.jsx)(w,{tags:l}),d&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(A,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i,formattedLastUpdatedAt:a}),m&&(0,o.jsx)(U.Z,{})]})]}):null}var M=n(6043),E=n(3743);const I={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function F(e){let{collapsed:t,...n}=e;return(0,o.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",I.tocCollapsibleButton,!t&&I.tocCollapsibleButtonExpanded,n.className),children:(0,o.jsx)(f.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const V={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function O(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,M.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.Z)(V.tocCollapsible,!i&&V.tocCollapsibleExpanded,n),children:[(0,o.jsx)(F,{collapsed:i,onClick:l}),(0,o.jsx)(M.z,{lazy:!0,className:V.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(E.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const S={tocMobile:"tocMobile_ITEo"};function P(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(O,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(g.k.docs.docTocMobile,S.tocMobile)})}var D=n(8620);function R(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(D.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.k.docs.docTocDesktop})}var z=n(2503),q=n(5042);function G(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}(),{adv:a}=(0,s.useContext)(y.Z);return(0,o.jsxs)("div",{className:(0,N.Z)(g.k.docs.docMarkdown,"markdown"),children:[a&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(T.Z,{})}),n&&(0,o.jsx)("header",{children:(0,o.jsx)(z.Z,{as:"h1",children:n})}),(0,o.jsx)(q.Z,{children:t})]})}var W=n(1310),$=n(2212);const J={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Q(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,o.jsx)(P,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,o.jsx)(R,{})}}(),{metadata:{unlisted:s}}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&J.docItemCol),children:[s&&(0,o.jsx)($.Z,{}),(0,o.jsx)(v.Z,{}),(0,o.jsxs)("div",{className:J.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(W.Z,{}),(0,o.jsx)(p.Z,{}),n.mobile,(0,o.jsx)(G,{children:t}),(0,o.jsx)(B,{})]}),(0,o.jsx)(x,{})]})]}),n.desktop&&(0,o.jsx)("div",{className:"col col--3",children:n.desktop})]})}function X(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(a.FG,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(Q,{children:(0,o.jsx)(n,{})})]})})}},49:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var s=n(5999),a=n(2244),i=n(5893);function o(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(a.Z,{...t,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(a.Z,{...n,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4364:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(4334),a=n(5999),i=n(5281),o=n(4477),l=n(5893);function r(e){let{className:t}=e;const n=(0,o.E)();return n.badge?(0,l.jsx)("span",{className:(0,s.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(a.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},3120:(e,t,n)=>{n.d(t,{Z:()=>p});n(7294);var s=n(4334),a=n(2263),i=n(9960),o=n(5999),l=n(143),r=n(5281),c=n(373),d=n(4477),u=n(5893);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function x(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.Z,{to:n,onClick:s,children:(0,u.jsx)(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function v(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,a.Z)(),{pluginId:o}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,c.J)(o),{latestDocSuggestion:m,latestVersionSuggestion:v}=(0,l.Jo)(o),p=m??(g=v).docs.find((e=>e.id===g.mainDocId));var g;return(0,u.jsxs)("div",{className:(0,s.Z)(t,r.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(x,{versionLabel:v.label,to:p.path,onClick:()=>d(v.name)})})]})}function p(e){let{className:t}=e;const n=(0,d.E)();return n.banner?(0,u.jsx)(v,{className:t,versionMetadata:n}):null}},4881:(e,t,n)=>{n.d(t,{Z:()=>d});n(7294);var s=n(5999),a=n(5281),i=n(9960),o=n(4334);const l={iconEdit:"iconEdit_Z9Sw"};var r=n(5893);function c(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(l.iconEdit,t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,r.jsxs)(i.Z,{to:t,className:a.k.common.editThisPage,children:[(0,r.jsx)(c,{}),(0,r.jsx)(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},5042:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var s=n(1151),a=n(3563),i=n(5893);function o(e){let{children:t}=e;return(0,i.jsx)(s.Z,{components:a.Z,children:t})}},2244:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var s=n(4334),a=n(9960),i=n(5893);function o(e){const{permalink:t,title:n,subLabel:o,isNext:l}=e;return(0,i.jsxs)(a.Z,{className:(0,s.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[o&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},3743:(e,t,n)=>{n.d(t,{Z:()=>v});var s=n(7294),a=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>l(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),c=r(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(9960),m=n(5893);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const x=s.memo(h);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const v=(0,a.L)(),p=c??v.tableOfContents.minHeadingLevel,g=u??v.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>o({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:p,maxHeadingLevel:g}}),[l,r,p,g])),(0,m.jsx)(x,{toc:b,className:n,linkClassName:l,...h})}},3008:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var s=n(4334),a=n(9960);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var o=n(5893);function l(e){let{permalink:t,label:n,count:l}=e;return(0,o.jsxs)(a.Z,{href:t,className:(0,s.Z)(i.tag,l?i.tagWithCount:i.tagRegular),children:[n,l&&(0,o.jsx)("span",{children:l})]})}},1526:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(4334),a=n(5999),i=n(3008);const o={tags:"tags_jXut",tag:"tag_QGVx"};var l=n(5893);function r(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.Z)(o.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,l.jsx)("li",{className:o.tag,children:(0,l.jsx)(i.Z,{label:t,permalink:n})},n)}))})]})}},2212:(e,t,n)=>{n.d(t,{Z:()=>h});n(7294);var s=n(4334),a=n(5999),i=n(5742),o=n(5893);function l(){return(0,o.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,o.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(i.Z,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(5281),u=n(9047);function m(e){let{className:t}=e;return(0,o.jsx)(u.Z,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,s.Z)(t,d.k.common.unlistedBanner),children:(0,o.jsx)(r,{})})}function h(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{...e})]})}},7473:(e,t,n)=>{n.d(t,{Z:()=>o});n(4996);var s=n(7294);var a=n(5983),i=n(5893);function o(e){let{style:t}=e;const{setDonate:n}=(0,s.useContext)(a.Z);return(0,i.jsx)(i.Fragment,{})}},2098:(e,t,n)=>{n.d(t,{Z:()=>o});n(4996);var s=n(7294),a=n(5983),i=n(5893);function o(e){let{style:t}=e;const{setDonate:n}=(0,s.useContext)(a.Z);return(0,i.jsx)(i.Fragment,{})}},8642:(e,t,n)=>{n.d(t,{Z:()=>s});const s=[]},8620:(e,t,n)=>{n.d(t,{Z:()=>p});var s=n(4996),a=n(3743),i=n(512),o=n(7294),l=n(5983),r=n(8642),c=n(5893);function d(){r.Z.filter((e=>1===e.id));return(0,c.jsx)("div",{style:{margin:"0.5em",display:"block",borderBottom:"1px solid #dedede",paddingBottom:"0.2em",clear:"both"}})}var u=n(8494),m=n(547);const h={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs"},x="table-of-contents__link toc-highlight",v="table-of-contents__link--active";function p(e){let{className:t,...n}=e;const{adv:s,rightVip:r}=(0,o.useContext)(l.Z);return(0,c.jsxs)("div",{className:(0,i.Z)(h.tableOfContents,"thin-scrollbar",t),children:[(0,c.jsx)("div",{style:{margin:"0.5em"},children:(0,c.jsx)(m.Z,{padding:1})}),s&&(0,c.jsx)(g,{}),(0,c.jsx)(a.Z,{...n,linkClassName:x,linkActiveClassName:v}),r&&(0,c.jsx)("div",{style:{padding:20,boxSizing:"border-box"},children:(0,c.jsx)(u.Z,{closable:!1,style:{position:"relative",bottom:void 0,right:void 0,width:"100%",height:void 0}})})]})}function g(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d,{}),(0,c.jsx)("a",{href:"https://gitee.com/dotnetchina",target:"_blank",style:{display:"block",position:"relative"},title:"\u4e86\u89e3 dotNET China \u7ec4\u7ec7",children:(0,c.jsx)("img",{src:(0,s.Z)("img/chinadotnet.png"),style:{display:"block",width:"90%",margin:"0 auto"}})})]})}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(7294);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}},512:(e,t,n)=>{function s(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=s(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a});const a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=s(e))&&(a&&(a+=" "),a+=t);return a}}}]);