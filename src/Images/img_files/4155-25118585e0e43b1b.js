(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4155],{4155:function(e,t,r){"use strict";r.d(t,{Z:function(){return ke}});var n=r(89969),o=r(18099),a=r(15129),i=r(71349),c=r(54779),s=r(76025),u=r(95458),l=r(50118),d=r(49977),m=r(61254),f=r(26349),p=r(67597),y=r(2844),g=r(37004);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){var t=e.mode,r=e.searchQuery,n=e.filters,o=e.includeDetails,a=e.searchVersion,i="photos"===t?g.yI:g.Nz;return function(e){var t=e.page;return i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,y.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({page:t,per_page:24,query:r,include_details:o,search_version:a},n))}}var v=r(14730),O=r(82706),j=r(3153);var _=r(9134),w=r.n(_),k=r(57409),P=r(50211),Z=r(29446),x=r.n(Z),S=r(34396),D=r(57611),E=["sticky","meta","tracker","label","mode","metaKey","isLoading"];function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,y.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e){var t,r=e.sticky,n=void 0!==r&&r,o=e.meta,a=e.tracker,i=void 0===a?"related_search":a,c=(e.label,e.mode),s=e.metaKey,u=e.isLoading,l=(0,v.Z)(e,E),d=function(){var e=(0,O.Z)().y,t=(0,j.Z)(e,150),r=(0,p.useRef)(t),n=(0,p.useState)(),o=n[0],a=n[1];return(0,p.useEffect)((function(){r.current===t?a(void 0):r.current<t?a("down"):a("up"),r.current=t}),[t]),o}(),f=(0,k.Z)(void 0,{defaultValue:!0}),g=f.isIntersecting,b=f.ref,h=(0,p.useRef)(s);if((0,p.useEffect)((function(){s===h.current||u||(h.current=s)}),[s,h,u]),!o)return null;var _=o.related_searches,Z=void 0===_?[]:_,C=w()((t={},(0,y.Z)(t,x().sticky,n),(0,y.Z)(t,x().stickyFixed,n&&g),(0,y.Z)(t,x().stickyVisible,n&&!g&&"up"===d),t));if(s!==h.current&&u)return(0,D.jsx)(P.D,q({className:C},l));if(!Z||Z.length<=0)return null;var Q=Z.map((function(e){return{text:e.term,term:e.term,href:function(t){return(0,m.yC)({i18n:t,mode:c,query:e.term.toLowerCase()})}}}));return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(P.Z,q({className:C,links:Q,trackName:i,query:s,contentType:(0,S.w)(c)},l)),(0,D.jsx)("div",{ref:b})]})}var L=r(98431);var I=r(21879),R=r(70001),N=r(38257),T=r(35258),F=r(67659),A=r(1477);var B=new Set(["hd wallpaper","hd wallpapers","wallpaper","wallpapers"]);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){(0,y.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function W(e){var t,r,n=e.meta,o=e.mode,a=e.searchQuery,i=e.medium,c=(0,d.Z)("search"),s=function(e){var t=e.i18n,r=e.count;if(!r)return null;if(r<10)return null;var n=+r.toString().split("").map((function(e,t){return t<=0?e:"0"})).join("");return"".concat((0,A.Z)(n,t),"+")}({i18n:c,count:null===n||void 0===n||null===(t=n.total_results)||void 0===t?void 0:t[o]}),u=(r=a,B.has(r.toLowerCase().trim())),l={isWallpaper:u,meta:n,mode:o,searchQuery:u?c.t("meta.medium.wallpaper.canonical"):(0,F.Z)(a),formattedResultCount:s},m=function(e){var t,r=(0,d.Z)("search");if(null!==(t=e.meta)&&void 0!==t&&t.seo){var n=e.meta.seo.templates.title;if(n)return n}var o=function(e){var t=e.meta,r=e.isWallpaper,n=e.i18n.t;return r?n("meta.medium.wallpaper.title"):null!==t&&void 0!==t&&t.meta_title?t.meta_title:null}(M(M({},e),{},{i18n:r}));if(o)return function(e){var t=e.i18n.t,r=e.titlePrefix,n=e.isWallpaper,o=e.mode;return r.toLowerCase().includes("pexels")?r:[r,"Pexels",!n&&t("meta.medium.keywords.".concat(o,".free"))].filter((function(e){return e})).join(" \xb7 ")}(M({titlePrefix:o,i18n:r},e));var a=function(e){var t=e.formattedResultCount,r=e.mode,n=e.i18n,o=e.searchQuery,a=n.t;return t?a("meta.medium.title.default_title_with_count.".concat(r),{query:o,resultCount:t}):a("meta.medium.title.default_title.".concat(r),{query:o})}(M(M({},e),{},{i18n:r}));return[a,r.t("meta.medium.title.free_download"),r.t("meta.medium.title.pexels_stock.".concat(e.mode))].join(" \xb7 ")}(l),f=function(e){var t=e.isWallpaper,r=e.mode,n=e.searchQuery,o=e.formattedResultCount,a=e.meta,i=(0,d.Z)("search").t;if(null!==a&&void 0!==a&&a.seo){var c=a.seo.templates.meta_description;if(c)return c}return t?i("meta.medium.description.wallpaper"):o?i("meta.medium.description.default_title_with_count.".concat(r),{count:o,query:n}):i("meta.medium.description.default_title.".concat(r),{query:n})}(l),p=function(e){var t=e.isWallpaper,r=e.searchQuery,n=e.mode,o=e.meta,a=(0,d.Z)("search").t;return t?a("meta.medium.wallpaper.seo_keywords"):[a("meta.medium.keywords.".concat(n,".free")),a("meta.medium.keywords.".concat(n,".high_quality")),r,null===o||void 0===o?void 0:o.title].filter(Boolean).join(", ")}(l);return{title:m,description:f,keywords:p,image:i&&(0,T.Z)({imgixUrl:(0,N.KV)(i),text:c.t("meta.medium.keywords.".concat(o,".free"))})}}function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){(0,y.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(e){var t=new Map;return e&&e.translations?(e.translations.forEach((function(e){var r=e.locale,n=e.query;t.set(r,n)})),t):t}function U(e){var t,r=e.translatedSlugs,o=e.mode,i=e.meta,c=e.searchQuery,s=e.firstMedium,u=(null===i||void 0===i?void 0:i.raw_query)||"",l=i||{},d=l.canonical_query,f=l.canonical_locale,y=l.robots_follow,g=l.robots_index,b=function(e){return"photos"===e?m.qs:m.xX}(o),h=function(e){var t=e.searchQuery,r=e.meta,n=(0,p.useState)($(r)),o=n[0],a=n[1];return(0,p.useEffect)((function(){a($(r))}),[r]),function(e){return o.get(e)||t}}(e),v=W({meta:i,mode:o,searchQuery:c,medium:s}),O=v.title,j=v.description,_=v.keywords,w=v.image,k="".concat(g?"index":"noindex",", ").concat(y?"follow":"nofollow"),P=function(e){var t,r,o=e.searchQuery,i=e.meta,c=e.mode,s=(0,a.useRouter)();if((0,R.Z)()){var u=s.locale===s.defaultLocale?s.asPath:"/".concat(null===(t=s.locale)||void 0===t?void 0:t.toLowerCase()).concat(s.asPath),l="".concat(window.location.origin).concat(u).split("?"),d=(0,L.Z)(l,2),m=d[0],f=d[1];return"".concat(m,"?").concat((0,n.stringify)(V(V({},(0,n.parse)(f)),{},{results:null===i||void 0===i||null===(r=i.total_results)||void 0===r?void 0:r[c],s:o})))}}(e),Z=d||u,x=Z?function(e){return b.metaAdapter(V(V({},e),{},{query:Z}))}:void 0;return(0,D.jsx)(I.Z,{trackingUrl:P,title:O,description:j,translatedSlugs:r,keywords:_,ogImage:w,noIndex:!(null===i||void 0===i||null===(t=i.did_you_mean)||void 0===t||!t.length),canonicalLocaleOverride:f||void 0,robots:k,xDefault:x,canonicalMetaRoute:x,metaRoute:function(e){return b.metaAdapter(V(V({},e),{},{query:h(e.locale)}))}})}var X=r(71365),Y=r(81632),G=r(85656),H=r(47332),J=r(99460),ee=r(21874),te=r(57410),re=r(50766),ne=r(7718),oe=r(94035),ae=r(7397),ie=r(6749),ce=r.n(ie),se=r(66759),ue=["query","resultsCount","mediumType"];function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){(0,y.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function me(e){var t=e.query,r=e.resultsCount,n=void 0===r?0:r,o=e.mediumType,i=(0,v.Z)(e,ue),c=(0,d.Z)("search").t,s=(0,a.useRouter)().asPath,u=(0,X.useQuery)((0,Y.i)({query:t,number:12,mediumType:o})),l=u.isSuccess,m=u.data,f=(0,k.Z)({threshold:.7}),y=f.ref,g=f.isIntersecting,b="videos"===o?"iStock-video":"iStock-photo",h="large",O=(0,p.useCallback)((function(e){var r=e.clickArea,a=e.action,i=void 0===a?"clicks":a,c="".concat("videos"===o?"video":"photo"," page end"),s="".concat(c," ").concat(r?"- ".concat(r):"").trim();(0,se.Z)({category:"ads",transport:"beacon",action:i,label:s,nonInteraction:"impression"===i,name:"clicks"===i?"ads_click":"ads_".concat(i),ads_name:"iStock",content_type:o,placement_position:"page end",click_element:r,context:{search_term:t}}),(0,se.M)({category:"ads_".concat(i),action:"page_end",label:t,property:(0,S.w)(o),value:n})}),[o,t,n]);if((0,p.useEffect)((function(){g&&O({action:"impression"})}),[g,O]),!l||!m)return null;if(!l||!m)return null;if(m.data.length<=0)return null;var j=function(e){return(0,ne.Z)({baseUrl:e,asPath:s,mediumType:o,type:n>0?"search-results-end-of-results":"search-results-no-results",query:t})};return(0,D.jsx)(J.Z,de(de({className:w()(ce().container,"page-end-ads")},i),{},{children:(0,D.jsxs)("div",{ref:y,children:[(0,D.jsxs)("div",{className:ce().title,ref:y,children:[(0,D.jsxs)(J.Z,{children:[(0,D.jsxs)(ee.Z,{marginBottom:15,spaceBetween:8,center:"vertical",children:[(0,D.jsx)(te.Z,{size:"h$33",weight:"bold",color:"black$000000",noLineHeight:!0,children:c("ad.title.".concat(o))}),(0,D.jsx)(re.Z,{href:j(),trackAction:b,trackLabel:"".concat(h,"-logo"),trackCallback:function(){return O({clickArea:"logo"})},rel:"sponsored noopener",target:"_blank",children:(0,D.jsx)(H.Z,{symbol:ae.Z})})]}),(0,D.jsx)(te.Z,{size:"p$18",color:"grey$7F7F7F",weight:"semibold",children:c("ad.subtitle")})]}),(0,D.jsx)(G.Z,{href:j(),rel:"sponsored noopener",trackAction:b,trackLabel:"".concat(h,"-button"),trackCallback:function(){return O({clickArea:"button"})},children:c("ad.cta",{percentage:20,code:"PEXELS20"})})]}),(0,D.jsx)("ul",{className:ce().grid,children:m.data.map((function(e){return(0,D.jsx)("li",{className:ce().gridItem,children:(0,D.jsxs)(re.Z,{href:j(e.attributes.url),trackAction:b,trackLabel:h,trackCallback:function(){return O({clickArea:"image"})},rel:"sponsored noopener",target:"_blank",children:["videos"===o&&(0,D.jsx)(H.Z,{symbol:oe.Z,className:ce().playIcon}),(0,D.jsx)("img",{src:e.attributes.image})]})},e.id)}))})]})}))}var fe,pe=r(37673),ye=r(18652),ge=r(17075),be=r(76425),he=r(29332),ve=r(53114),Oe=r(92076),je=r(32956);function _e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(r),!0).forEach((function(t){(0,y.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_e(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ke(e){var t,r,y,g,b=e.collection,v=e.initialData,O=e.mode,j=e.searchQuery,_=e.filters,w=e.translatedSlugs,k=(0,a.useRouter)().query,P=(0,d.Z)("search").t,Z=(0,o.mN)({query:k,initialFilters:_}),x=!!Object.values(Z).find((function(e){return"all"!==e})),E=h({mode:O,searchQuery:j,filters:Z}),C=(0,f.Z)(),q=(0,he.Z)(),L="search-".concat(O,"-").concat(j,"-").concat((0,n.stringify)(Z)),I=(0,u.ZP)({query:L,meta:j},E,v),R=0===I.data.length&&!I.isLoading,N=null===(t=I.meta)||void 0===t||null===(r=t.total_results)||void 0===r?void 0:r[O],T=(0,D.jsx)(U,{firstMedium:I.data[0],meta:I.meta,searchQuery:j,mode:O,translatedSlugs:w}),F=(0,p.useMemo)((function(){return{intervalConfig:"advertisment",renderer:function(e){var t=e.index;return{aspectRatio:1,itemKeyId:"inline-ad-".concat(t),component:(0,D.jsx)(pe.Z,{query:j,mediumType:O,placementType:"search grid",position:t,trackLabel:"inline"})}}}}),[j,O]),A=(0,p.useMemo)((function(){var e={};return null!==b&&void 0!==b&&b.data&&(e[3]=function(e){var t=e.index,r=e.estimatedColumnWidth;return{aspectRatio:1,itemKeyId:"collection-".concat(t),component:(0,D.jsx)(re.Z,{href:function(e){return(0,ge.vd)({i18n:e,slug:b.data.attributes.slug})},children:(0,D.jsx)(ye.Z,{collection:b.data,estimatedWidth:r})})}}),e}),[b]);(0,p.useEffect)((function(){C.add(j),(0,be.setSearchQueryInSession)(j),(0,se.M)({category:R?"search_no_results":"search",action:"",label:j,property:(0,S.w)(O),value:N})}),[j]);var B=!R&&!(null!==(y=I.meta)&&void 0!==y&&null!==(g=y.did_you_mean)&&void 0!==g&&g.length),z=function(){var e=(0,je.ZP)(),t=(0,d.Z)().lang;if(!e[je.p4.mediumSearchColumnSizing]||t!==ve.defaultLocale)return null;var r=e[je.p4.mediumSearchColumnSizing];function n(){return r===fe.fourColumns?4:Oe.Z.desktop}return we(we({},Oe.Z),{},{desktop:n(),oversized:n()})}()||Oe.Z;return(0,D.jsxs)(s.Z,{search:j,filters:Z,mode:O,children:[T,B&&(0,D.jsx)(Q,{mode:O,meta:I.meta,metaKey:j,isLoading:I.isLoading,sticky:!0,marginTop:15}),(0,D.jsx)(i.Z,{searchQuery:j,meta:I.meta,mode:O,marginTop:50,marginBottom:R?80:30,noResults:R,hasFilters:x}),(0,D.jsx)(c.Z,{meta:I.meta,mode:O,searchQuery:j,marginBottom:30,filters:Z}),!R&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(l.Z,{columnSizing:z,pagination:I,renderSpecificItemsAtNthPosition:F,renderSpecificItems:A,paginationRoute:function(e){return(0,m.yC)({i18n:e,query:j,mode:O,filters:Z})},searchQuery:j,countryCode:q}),!I.hasNextPage&&(0,D.jsx)(Q,{mode:O,label:P("try_different_search"),meta:I.meta,tracker:"try_different_search",marginBottom:30,marginTop:30})]}),!I.hasNextPage&&(0,D.jsx)(me,{query:j,resultsCount:N,mediumType:O,paddingTop:50,paddingBottom:50,marginTop:R?void 0:50})]})}!function(e){e.control="0",e.fourColumns="1"}(fe||(fe={}))},29446:function(e){e.exports={sticky:"RelatedSearchBar_sticky__ObEY3",stickyFixed:"RelatedSearchBar_stickyFixed__XTzzc",stickyVisible:"RelatedSearchBar_stickyVisible__OmQ2C"}},6749:function(e){e.exports={container:"EndOfPage_container__ibaiu",title:"EndOfPage_title__hTYFW",grid:"EndOfPage_grid__gy_0q",gridItem:"EndOfPage_gridItem__r2NGr",playIcon:"EndOfPage_playIcon__Jgmnb"}}}]);