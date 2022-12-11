"use strict";(self.webpackChunkjunotools_docs=self.webpackChunkjunotools_docs||[]).push([[242],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),l=c(r),f=o,b=l["".concat(s,".").concat(f)]||l[f]||p[f]||i;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},8756:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],d={sidebar_position:7},s="Fund",c={unversionedId:"dashboards/airdrop/guide/fund",id:"dashboards/airdrop/guide/fund",title:"Fund",description:"The airdrop is active, the only thing left is to fund it.",source:"@site/docs/03-dashboards/02-airdrop/01-guide/06-fund.md",sourceDirName:"03-dashboards/02-airdrop/01-guide",slug:"/dashboards/airdrop/guide/fund",permalink:"/docs/dashboards/airdrop/guide/fund",editUrl:"https://github.com/CosmosContracts/juno-tools-docs/edit/main/docs/03-dashboards/02-airdrop/01-guide/06-fund.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Register",permalink:"/docs/dashboards/airdrop/guide/register"},next:{title:"Manage",permalink:"/docs/dashboards/airdrop/guide/manage"}},u=[{value:"CW20",id:"cw20",children:[],level:2},{value:"Native Token",id:"native-token",children:[],level:2}],p={toc:u};function l(e){var t=e.components,d=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fund"},"Fund"),(0,i.kt)("p",null,"The airdrop is active, the only thing left is to fund it."),(0,i.kt)("p",null,"However, the process of airdropping CW-20 tokens and native token is a bit different. Both are explained below."),(0,i.kt)("h2",{id:"cw20"},"CW20"),(0,i.kt)("p",null,"CW20 Tokens are only airdroppable by minting, the address must be both admin and the minter of the CW20 token contract"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(3090).Z,width:"1688",height:"1630"})),(0,i.kt)("h2",{id:"native-token"},"Native Token"),(0,i.kt)("p",null,"As native tokens are not owned by anyone, you can fund the airdrop by directly transferring your $JUNO tokens."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(3956).Z,width:"1932",height:"1580"})),(0,i.kt)("p",null,"After the airdrop is funded and the specified start time has passed, the airdrop will be claimable."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(9843).Z,width:"770",height:"532"})))}l.isMDXComponent=!0},9843:function(e,t,r){t.Z=r.p+"assets/images/fund-airdrop-complete-f9efb650443aeab8be87fd3f9725c12f.png"},3090:function(e,t,r){t.Z=r.p+"assets/images/fund-airdrop-cw20-9222b26d4032ea9cf1ef5fca05119cda.png"},3956:function(e,t,r){t.Z=r.p+"assets/images/fund-airdrop-native-7937ffdfc2bcfc8b4531eacbb7c96f96.png"}}]);