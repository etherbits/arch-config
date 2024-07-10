import { r as r$1 } from '../chunks/browser-polyfill-bbb70053.js';
import { p as pe$1, k as ke$1, q as q$2, y as ye$1 } from '../chunks/index-6f38244c.js';
import { g, r, a, o as o$1 } from '../chunks/create-6466ba3c.js';
import { l, o as o$2, r as r$2 } from '../chunks/index-c9938791.js';
import { a as af, q as q$1, Q as Q$1, f, c as cf, b as ff } from '../chunks/react-973b5697.js';
import { o } from '../chunks/create-25618b43.js';
import '../chunks/transframe-provider-57421007.js';

var y=function(e){return function(e){return !!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return "[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===v}(e)}(e)};var v="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function x(e,t){return !1!==t.clone&&t.isMergeableObject(e)?M((r=e,Array.isArray(r)?[]:{}),e,t):e;var r;}function I(e,t,r){return e.concat(t).map((function(e){return x(e,r)}))}function S(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function O(e,t){try{return t in e}catch(e){return !1}}function $(e,t,r){var n={};return r.isMergeableObject(e)&&S(e).forEach((function(t){n[t]=x(e[t],r);})),S(t).forEach((function(i){(function(e,t){return O(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,i)||(O(e,i)&&r.isMergeableObject(t[i])?n[i]=function(e,t){if(!t.customMerge)return M;var r=t.customMerge(e);return "function"==typeof r?r:M}(i,r)(e[i],t[i],r):n[i]=x(t[i],r));})),n}function M(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||I,r.isMergeableObject=r.isMergeableObject||y,r.cloneUnlessOtherwiseSpecified=x;var n=Array.isArray(t);return n===Array.isArray(e)?n?r.arrayMerge(e,t,r):$(e,t,r):x(t,r)}M.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return M(e,r,t)}),{})};var E=M,T=new class{promise;resolve;reject;constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t;}));}};async function C(e,t){return (await T.promise).get(e,t)}async function N(e,t,r){return (await T.promise).set(e,t,r)}var j=class{static async getState({mount:e}){return new Promise((async t=>{let{listenerId:r}=await e.transframeApi.addFetchListener({urlRegexString:"https://gql.twitch.tv/gql"},(({requestHeaders:n})=>{e.transframeApi.removeFetchListener({listenerId:r}),t({requestHeaders:n});}));}))}static async fetch({baseUrl:e,endpoint:t,fetchOptions:r,body:n,state:i,fetchOverrideFn:o}){let s=i.requestHeaders,a=`${e}${t}`,d=await o(a,{headers:{referrer:"https://twitch.tv/",referrerPolicy:"strict-origin-when-cross-origin",...s,...r?.headers},method:"POST",body:n?JSON.stringify(n):void 0,...r});if(d.startsWith('{"error"'))throw new Error("Twitch API error");return d}};var _=class{static async getState({mount:e}){await new Promise((e=>setTimeout(e,1e3)));let t,r=(await e.transframeApi.get({paths:[["ytcfg","data_"],["ytcfg","data"],["yt","config_"]],pick:["INNERTUBE_CONTEXT","INNERTUBE_API_KEY","SESSION_INDEX","DELEGATED_SESSION_ID","VISITOR_DATA"]})).find((e=>e));try{t=await e.getCookies();}catch{}(!t||0===Object.keys(t).length)&&(t=(await e.transframeApi.get({paths:[["document","cookie"]]}))[0].split(";").map((e=>{let[t,r]=e.split("=");return {name:t?.trim(),value:r?.trim()??""}})).filter((({name:e})=>e)));let n=t.map((({name:e,value:t})=>`${e}=${t}`)).join(";"),i=t.find((({name:e})=>"SAPISID"===e))?.value;i||(i=t.find((({name:e})=>"__Secure-3PAPISID"===e))?.value);let o=t.find((({name:e})=>"CONSISTENCY"===e))?.value,s=t.find((({name:e})=>"VISITOR_PRIVACY_METADATA"===e))?.value,{INNERTUBE_CONTEXT:a,INNERTUBE_API_KEY:d,SESSION_INDEX:c,DELEGATED_SESSION_ID:l,VISITOR_DATA:u}=r;return {context:a,apiKey:d,cookie:n,sapiSid:i,consistency:o,googAuthUser:c,googPageId:l,googVisitorId:s||u}}static async fetch({baseUrl:e,endpoint:t,fetchOptions:r,body:n,state:i,fetchOverrideFn:o}){if(!t?.includes("youtubei/")){return o(`${e}${t}`,r||{})}let s=Math.floor(Date.now()/1e3),a=e,d=await function(e){function t(e,t){return e<<t|e>>>32-t}function r(e){let t,r="";for(let n=7;n>=0;n--)t=e>>>4*n&15,r+=t.toString(16);return r}let n,i,o,s,a,d,c,l,u,f=new Array(80),p=1732584193,m=4023233417,h=2562383102,g=271733878,b=3285377520;e=function(e){e=e.replace(/\r\n/g,"\n");let t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128));}return t}(e);let w=e.length,y=[];for(i=0;i<w-3;i+=4)o=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3),y.push(o);switch(w%4){case 0:i=2147483648;break;case 1:i=e.charCodeAt(w-1)<<24|8388608;break;case 2:i=e.charCodeAt(w-2)<<24|e.charCodeAt(w-1)<<16|32768;break;case 3:i=e.charCodeAt(w-3)<<24|e.charCodeAt(w-2)<<16|e.charCodeAt(w-1)<<8|128;}for(y.push(i);y.length%16!=14;)y.push(0);for(y.push(w>>>29),y.push(w<<3&4294967295),n=0;n<y.length;n+=16){for(i=0;i<16;i++)f[i]=y[n+i];for(i=16;i<=79;i++)f[i]=t(f[i-3]^f[i-8]^f[i-14]^f[i-16],1);for(s=p,a=m,d=h,c=g,l=b,i=0;i<=19;i++)u=t(s,5)+(a&d|~a&c)+l+f[i]+1518500249&4294967295,l=c,c=d,d=t(a,30),a=s,s=u;for(i=20;i<=39;i++)u=t(s,5)+(a^d^c)+l+f[i]+1859775393&4294967295,l=c,c=d,d=t(a,30),a=s,s=u;for(i=40;i<=59;i++)u=t(s,5)+(a&d|a&c|d&c)+l+f[i]+2400959708&4294967295,l=c,c=d,d=t(a,30),a=s,s=u;for(i=60;i<=79;i++)u=t(s,5)+(a^d^c)+l+f[i]+3395469782&4294967295,l=c,c=d,d=t(a,30),a=s,s=u;p=p+s&4294967295,m=m+a&4294967295,h=h+d&4294967295,g=g+c&4294967295,b=b+l&4294967295;}return (r(p)+r(m)+r(h)+r(g)+r(b)).toLowerCase()}(`${s} ${i.sapiSid} ${a}`),c={...i.context};c.request.consistencyTokenJars?.[0]&&(c.request.consistencyTokenJars[0].encryptedTokenJarContents=i.consistency,c.request.consistencyTokenJars[0].expirationSeconds=600);let l=await o(`${e}${t}?key=${i.apiKey}`,{method:"POST",headers:{"content-type":"application/json",cookie:i.cookie,authorization:`SAPISIDHASH ${s}_${d}`,"x-goog-authuser":i.googAuthUser,"x-goog-visitor-id":i.googVisitorId,"x-origin":a,...r?.headers||{}},body:JSON.stringify({context:c,...n||{}}),...r});if(console.log("responseText",l),l.includes('"error":'))throw new Error("Youtube API error");return l}},F=class{static getState(){return {empty:!0}}static fetch({baseUrl:e,endpoint:t,fetchOptions:r,fetchOverrideFn:n}){return n(`${e}${t}`,r||{})}},A=class{_surrogateOptions;_fetchOverrideFn;_mountPromise=null;_id;_surrogateMountFn;_surrogateUnmountFn;_isPersisted=!1;constructor({surrogateOptions:e,surrogateMountFn:t,surrogateUnmountFn:r,fetchOverrideFn:n,id:i}){this._surrogateOptions=e,this._id=i,this._surrogateMountFn=t,this._surrogateUnmountFn=r,this._fetchOverrideFn=n;}async _mountSurrrogateIfUnmounted(){return this._mountPromise||(this._mountPromise=this._surrogateMountFn({id:this._id,surrogateOptions:this._surrogateOptions})),this._mountPromise}_unmountSurrogateIfMounted(){this._mountPromise&&(this._mountPromise=null,this._surrogateUnmountFn({id:this._id}));}async _ensureAndGetMount(){await this._mountSurrrogateIfUnmounted();let e=await this._mountPromise;if(!e)throw new Error("Mount was nullish");return e}async fetch(e){let{baseUrl:t,endpoint:r,body:n,fetchOptions:i,attempts:o=0}=e;try{let e=await this.state();return await this._getSurrogateSite().fetch({baseUrl:t,endpoint:r,fetchOptions:i,body:n,state:e,fetchOverrideFn:this._fetchOverrideFn})}catch(t){if(0===o)return await this.clearState(),this._unmountSurrogateIfMounted(),this.fetch({...e,attempts:o+1});throw t}}_getSurrogateSite(){let e=this._surrogateOptions?.url||"";return e?.includes("twitch.tv")?j:e?.includes("youtube.com")?_:F}async state(){let e=await C("surrogate",this._id);if(!e){let t=await this._ensureAndGetMount();e=await this._getSurrogateSite().getState({mount:t}),await N("surrogate",this._id,e);let r=!!this._mountPromise;!this._isPersisted&&r&&"parent"!==this._surrogateOptions.type&&this._unmountSurrogateIfMounted();}return e}async clearState(){await N("surrogate",this._id,"");}mount(){return this._mountSurrrogateIfUnmounted()}unmount(){this._isPersisted=!1,this._unmountSurrogateIfMounted();}persist(){this._mountSurrrogateIfUnmounted(),this._isPersisted=!0;}async addFetchListener(...e){return (await this._ensureAndGetMount()).transframeApi.addFetchListener(...e)}async removeFetchListener(...e){return (await this._ensureAndGetMount()).transframeApi.removeFetchListener(...e)}async webComponentMethod(...e){let t=await this._ensureAndGetMount(),r=await t.transframeApi.webComponentMethod(...e);return !this._isPersisted&&t&&"parent"!==this._surrogateOptions.type&&this._unmountSurrogateIfMounted(),r}async twitchChatMessagePost(...e){let t=await this._ensureAndGetMount(),r=await t.transframeApi.twitchChatMessagePost(...e);return !this._isPersisted&&t&&"parent"!==this._surrogateOptions.type&&this._unmountSurrogateIfMounted(),r}},P=class{surrogates=new Map;surrogateMountFn;surrogateUnmountFn;fetchOverrideFn;constructor({surrogateMountFn:e,surrogateUnmountFn:t,fetchOverrideFn:r}){this.surrogateMountFn=e,this.surrogateUnmountFn=t,this.fetchOverrideFn=r;}_getIdBySurrogateOptions(e){return `${e.type}:${e.url||""}`}get(e){let t=this._getIdBySurrogateOptions(e),r=this.surrogates.get(t);if(r)return r;let n=new A({surrogateOptions:e,surrogateMountFn:this.surrogateMountFn,surrogateUnmountFn:this.surrogateUnmountFn,fetchOverrideFn:this.fetchOverrideFn,id:t});return this.surrogates.set(t,n),n}},k=({pageInfo$:e,embeds$:t,embedWindows$:r,sidebarWidth$:n,createProviderFn:i=a,windowDimensions$:s,surrogateMountFn:a$1,surrogateUnmountFn:d,fetchOverrideFn:c,removeHeadersFn:l,truffleVersion:u})=>{let f=new P({surrogateMountFn:a$1,surrogateUnmountFn:d,fetchOverrideFn:c}),p=[];e.onChange((({value:e})=>{p.forEach((t=>t(e)));}));let m=[];t.onChange((({value:e})=>{m.forEach((t=>t(e)));}));let h=[];s.onChange((({value:e})=>{h.forEach((t=>t(e)));}));let g=[];return i({namespace:"client-to-hud-privileged-api-v1",api:{pageInfoGet:async(t,r)=>(r&&p.push(r),e.get()),environmentGetInfo:async()=>({truffleVersion:u||"unknown",isExperimental:await C("settings","experimental"),isExperimentalSidebar:await C("settings","experimentalSidebar"),deviceType:"desktop"}),windowGetDimensions:async(e,t)=>(t&&h.push(t),s.get()),sidebarSetWidth:(e,t)=>{n.set(t);},embedsGet:async(e,r)=>(r&&m.push(r),t.get()),devEmbedsGet:async()=>async function(e){let t=C("embed","devEmbeds").then((t=>Object.entries(t).filter((([,t])=>e?.contentPageType.includes(t.contentPageType)&&(!t.contentPageId||e?.contentPageId===t.contentPageId))).map((([e,t])=>(t.id=e,t)))));return await Promise.race([t,new Promise((e=>setTimeout((()=>e([])),1e3)))])}(e.get()),embedWindowGetVisibility:async(e,{embedId:t})=>!!t&&!!r.find((e=>e.embedId.peek()===t))?.isOpen?.get(),embedWindowSetVisibility:(e,{embedId:t,isVisible:n})=>{if(!t)return;let i=r.find((e=>e.embedId.peek()===t));i&&(i.isOpen.set(n),n&&i.zIndex.set(r.get().reduce(((e,t)=>Math.max(e,t.zIndex)),0)+1));},removeHeaders:async(e,{headers:t,ttlMs:r})=>l({headers:t,ttlMs:r}),addFetchListener:async(e,{urlRegexString:t,surrogate:r},n)=>f.get(r).addFetchListener({urlRegexString:t},n),removeFetchListener:async(e,{surrogate:t,listenerId:r})=>f.get(t).removeFetchListener({listenerId:r}),fetch:async(e,{baseUrl:t,endpoint:r,surrogate:n,fetchOptions:i={},body:o={}})=>f.get(n).fetch({baseUrl:t,endpoint:r,fetchOptions:i,body:o}),surrogateMount:async(e,{surrogate:t})=>f.get(t).mount(),surrogateUnmount:async(e,{surrogate:t})=>f.get(t).unmount(),surrogatePersist:async(e,{surrogate:t})=>f.get(t).persist(),surrogateClearState:async(e,{surrogate:t})=>f.get(t).clearState(),twitchChatMessagePost:async(e,{body:t,surrogate:r})=>f.get(r).twitchChatMessagePost({body:t}),webComponentMethod:async(e,{surrogate:t,querySelector:r,method:n,args:i})=>f.get(t).webComponentMethod({querySelector:r,method:n,args:i}),storageBucketSubscribe:async(e,{bucket:t,key:r},n)=>{!async function(e,t,r){(await T.promise).subscribe(e,t,r);}(t,r,n);},storageBucketGet:async(e,t,r)=>C(t,r),storageBucketSet:async(e,t,r,n)=>N(t,r,n),embedShowToast:({fromId:e},r,n)=>{console.log("show toast.....",r,n),t.get().find((t=>t.id===e));},broadcast:async(e,{eventName:t,data:r})=>{g.forEach((({eventName:e,onBroadcast:n})=>{e===t&&n({eventName:t,data:r});}));},addBroadcastListener:async(e,{eventName:t},r)=>{let n=Math.random().toString();return g.push({id:n,eventName:t,onBroadcast:r}),{listenerId:n}},removeBroadcastListener:async(e,{listenerId:t})=>{let r=g.findIndex((({id:e})=>e===t));-1!==r&&g.splice(r,1);}},allowedOrigins:i===a?["https://app.truffle.vip","https://truffle.vip"]:i===a?["https://app.truffle.vip","https://truffle.vip","https://app.staging.bio","http://localhost:5173","http://192.168.7.201:5173"]:void 0})};async function z({query:e,variables:t,context:{headers:r,accessToken:n}={}}){return r??=new Headers,n&&r.append("X-Access-Token",n),r.append("Content-Type","application/json"),(await(await fetch("https://mothertree.truffle.vip/graphql",{method:"POST",headers:r,body:JSON.stringify({query:e,variables:t})})).json()).data}var W,D=async e=>{switch(e.entityType){case"channel":let t=e.entityReference.sourceId?{sourceTypeAndSourceId:{sourceType:e.entityReference.sourceType,sourceId:e.entityReference.sourceId}}:{sourceTypeAndSourceName:{sourceType:e.entityReference.sourceType,sourceName:e.entityReference.sourceName}},r=await z({query:"\n  query ClientToWebChannel($input: ChannelInput) {\n    channel(input: $input) {\n      id\n      orgId\n    }\n  }\n",variables:{input:t}});return {...e,...r?.channel||{}};case"post":let n=await z({query:"\n  query ClientToWebPost($input: PostInput) {\n    post(input: $input) {\n      id\n      orgId\n    }\n  }\n",variables:{input:{sourceTypeAndSourceId:{sourceType:e.entityReference.sourceType,sourceId:e.entityReference.sourceId}}}});return {...e,...n?.post||{}}}return e},L=new Map,U=async({pageInfo:e,truffleVersion:t})=>{if(!e?.orgId)return [];let r=e.entities.map((e=>({parentType:e.entityType,parentId:e.id}))).concat(e.orgId?{parentType:"org",parentId:e.orgId}:[]).filter((e=>e.parentId)),n={input:{orgIdAndParentsAndTagsAndTruffleVersion:{orgId:e.orgId,parents:r,tags:e.tags,truffleVersion:t}}},i=(e=>JSON.stringify(e))(n);if(L.has(i))return L.get(i);let o=await z({query:"\n  query EmbedConnectionQuery($input: EmbedConnectionInput) @cache {\n    embedConnection(input: $input) {\n      nodes {\n        id\n        orgId\n        url\n        status\n        appInstallId\n        isLoginRequired\n        displayType\n        displayOptions\n      }\n    }\n  }\n",variables:n}).then((e=>e?.embedConnection?.nodes||[]));return L.set(i,o),o},R=navigator?.userAgent?.toLowerCase().indexOf("firefox")>-1,V=q$1.exports;function G(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}W=V.createRoot,V.hydrateRoot;var q,H={exports:{}},B={};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */H.exports=function(){if(q)return B;q=1;var e=Q$1,t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,s){var a,d={},c=null,l=null;for(a in void 0!==s&&(c=""+s),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)n.call(r,a)&&!o.hasOwnProperty(a)&&(d[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===d[a]&&(d[a]=r[a]);return {$$typeof:t,type:e,key:c,ref:l,props:d,_owner:i.current}}return B.Fragment=r,B.jsx=s,B.jsxs=s,B}();var X=H.exports;const Y=({children:e,defaultPosition:t,requiredClassName:r,ignoreClassName:n})=>{const[i,o]=f.exports.useState({current:t,start:{x:0,y:0},pressed:!1,draggable:!0});return f.exports.useEffect((()=>{const e=()=>{o((e=>({...e,current:{x:Math.min(e.current.x,window.innerWidth-25),y:Math.min(e.current.y,window.innerHeight-25)}})));};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),f.exports.useEffect((()=>{const e=e=>{o((t=>({...t,current:{x:e.clientX-t.start.x,y:e.clientY-t.start.y}})));};return i.pressed?window.addEventListener("mousemove",e):window.removeEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)}),[i.pressed]),X.jsx("div",{draggable:!0,style:{width:"fit-content",position:"absolute",top:i.current.y+"px",left:i.current.x+"px",userSelect:i.pressed?"none":"inherit"},onMouseDown:e=>{const t=e.target,i=t.className;n&&i.includes(n)||(r&&!i.includes(r)&&o((e=>({...e,draggable:!1}))),("A"===t.tagName||i.includes("prevent-drag"))&&o((e=>({...e,draggable:!1}))));},onDragStart:e=>{e.preventDefault(),i.draggable&&o((t=>({...t,pressed:!0,start:{x:e.clientX-t.current.x,y:e.clientY-t.current.y}})));},onMouseUp:()=>{o((e=>({...e,pressed:!1,draggable:!0})));},children:e})},Z=[];function J(e){if(!Z.includes(e)){try{document.adoptedStyleSheets=[...document.adoptedStyleSheets,e];}catch{const t=document.createElement("style");t.textContent=Array.from(e.cssRules).map((e=>e.cssText||"")).join("\n"),document.head.appendChild(t);}Z.push(e);}}function Q(e,...t){var r;let n="";e.forEach(((e,r)=>{const i=t[r];n+=e,i&&(n+=i);}));const i=new CSSStyleSheet;return null==(r=i.replaceSync)||r.call(i,n),i}const K=Q`.c-embed-window {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  outline: 0.25px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);
  border: 0.5px solid rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  background: #1f1f1f;
  min-width: 64px;
  min-height: 64px;
  overflow: hidden;
  user-select: none;
}
.c-embed-window.focused-window {
  user-select: none;
}
.c-embed-window > .title-bar {
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
  background: #171717;
  padding: 10px;
  width: 100%;
  height: 32px;
  overflow: hidden;
  color: white;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  font-family: "Inter", sans-serif;
}
.c-embed-window > .title-bar > .actions {
  display: flex;
  gap: 12px;
  margin-left: auto;
}
.c-embed-window > .title-bar > .actions > .close-window-btn,
.c-embed-window > .title-bar > .actions > .pop-out-btn {
  all: unset;
  cursor: pointer;
  border: 0;
  border-radius: 0;
  background: none;
}
.c-embed-window > .title-bar:hover {
  cursor: grab;
}
.c-embed-window > .title-bar:active {
  cursor: grabbing;
}
.c-embed-window > .content {
  position: relative;
  height: 100%;
}
.c-embed-window > .content > .embed-iframe {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  border: none;
  padding: 0;
  width: 100%;
  height: 100%;
}`,ee="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjgzMzQgNS4zNDE3NUwxNC42NTg0IDQuMTY2NzVMMTAuMDAwMSA4LjgyNTA4TDUuMzQxNzUgNC4xNjY3NUw0LjE2Njc1IDUuMzQxNzVMOC44MjUwOCAxMC4wMDAxTDQuMTY2NzUgMTQuNjU4NEw1LjM0MTc1IDE1LjgzMzRMMTAuMDAwMSAxMS4xNzUxTDE0LjY1ODQgMTUuODMzNEwxNS44MzM0IDE0LjY1ODRMMTEuMTc1MSAxMC4wMDAxTDE1LjgzMzQgNS4zNDE3NVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",te=400,re=400,ne=af((({embedInfo:e,isFocused:t,embedWindows$:r,onNewIframe:n})=>{J(K);const i=(e,t)=>{var n;null==(n=r.find((t=>t.embedId.peek()===e)))||n.isOpen.set(t);},{id:o,displayOptions:{title:s,shouldAllowPopout:a,initialDimensions:d,isResizable:c,resizeBounds:l}}=e,[u,f$1]=f.exports.useState(!1),p=f.exports.useRef(null);return f.exports.useEffect((()=>{const e=p.current;e&&(null==n||n(e));}),[p]),X.jsx(Y,{defaultPosition:{x:72,y:0},children:X.jsxs("div",{className:"c-embed-window "+(t?"focused-window":""),id:`${o}-window`,onMouseDown:()=>{f$1(!0);},onMouseUp:()=>f$1(!1),style:{resize:c?"both":"none",width:`${(null==d?void 0:d.x)??te}px`,height:`${(null==d?void 0:d.y)??re}px`,...l||{}},children:[X.jsxs("div",{className:"title-bar",children:[s,X.jsxs("div",{className:"actions",children:[a?X.jsx("button",{className:"pop-out-btn",onClick:()=>{((e,t,r)=>{const n=t??te,i=r??re,o=(window.innerWidth-n)/2,s=(window.innerHeight-i)/2;window.open(e,"_blank",`width=${n},height=${i},left=${o},top=${s}`);})(`https://app.truffle.vip/hud/embed/${o}`,null==d?void 0:d.x,null==d?void 0:d.y),i(o,!1);},children:X.jsx("img",{src:"https://cdn.bio/assets/icons/open_in_new.svg"})}):null,X.jsx("button",{className:"close-window-btn",onClick:()=>i(o,!1),children:X.jsx("img",{src:ee})})]})]}),X.jsx("div",{className:"content",children:X.jsx("iframe",{ref:p,id:`${o}-iframe`,src:`https://app.truffle.vip/hud/embed/${o}`,className:"embed-iframe",style:{pointerEvents:u||!t?"none":"inherit"}})})]})})})),ie=Q`.addon-window-container {
  position: fixed;
  top: 0;
}`,oe=af((({embedWindows$:e,embeds$:t,onNewIframe:n})=>{J(ie);const i=cf((()=>t.get().length));return X.jsx(X.Fragment,{children:e.map((o=>{const s=t.get().find((e=>e.id===o.embedId.peek()));if(s&&"window"===s.displayType)return X.jsx("div",{className:"addon-window-container",onMouseDown:()=>(n=>{q$2((()=>{const r=t.peek().length-1,i=e.find((e=>e.embedId.peek()===n));if(null==i||!i.peek())return;const o=i.zIndex.peek();e.forEach((e=>{const t=e.zIndex.peek();t>o&&e.zIndex.set(t-1);})),i.zIndex.set(r);}));})(s.id),style:{zIndex:o.zIndex.get()+1e4,visibility:o.isOpen.get()?"visible":"hidden"},children:X.jsx(ne,{embedInfo:s,isFocused:o.isOpen.get()&&o.zIndex.get()===i.get()-1,embedWindows$:e,onNewIframe:n})},s.id)}))})})),se=Q`.truffle-sidebar {
  all: unset;
  position: fixed;
  z-index: 2147483602;
  top: 0;
  right: -1px;
  bottom: 0;
  left: 0;
  pointer-events: none !important; /* !important in case any crazy sites try applying pointer-events: all to all elements with !important */
  --local-two-step-width: 16px;
  /* if a site styles elements globally, we need to unset those styles so they don't affect ours */
  /* don't unset for svg or path elements, since we want to keep their styles */
}
.truffle-sidebar *:not(svg):not(path) {
  all: unset;
}
.truffle-sidebar.truffle-sidebar-right > .truffle-sidebar-bar {
  right: -1px;
  transform: translateX(var(--local-sidebar-width));
}
.truffle-sidebar.truffle-sidebar-right > .truffle-sidebar-activation-zone {
  right: -1px;
}
.truffle-sidebar.truffle-sidebar-right > .truffle-sidebar-deactivation-zone {
  left: 0;
}
.truffle-sidebar.truffle-sidebar-right > .truffle-sidebar-two-step {
  right: -1px;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  transform: translateX(var(--local-two-step-width));
}
.truffle-sidebar.truffle-sidebar-left > .truffle-sidebar-bar {
  transform: translateX(calc(-1 * var(--local-sidebar-width)));
}
.truffle-sidebar.truffle-sidebar-left > .truffle-sidebar-activation-zone {
  left: 0;
}
.truffle-sidebar.truffle-sidebar-left > .truffle-sidebar-deactivation-zone {
  right: -1px;
}
.truffle-sidebar.truffle-sidebar-left > .truffle-sidebar-two-step {
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  transform: translateX(calc(-1 * var(--local-two-step-width)));
}
.truffle-sidebar.truffle-sidebar-left > .truffle-sidebar-two-step > .truffle-sidebar-two-step-svg {
  transform: rotate(180deg);
}
.truffle-sidebar.truffle-sidebar-is-open > .truffle-sidebar-activation-zone, .truffle-sidebar.truffle-sidebar-is-two-step-open > .truffle-sidebar-activation-zone {
  pointer-events: none !important;
}
.truffle-sidebar.truffle-sidebar-is-open > .truffle-sidebar-deactivation-zone, .truffle-sidebar.truffle-sidebar-is-two-step-open > .truffle-sidebar-deactivation-zone {
  position: absolute;
  z-index: 1; /* below sidebar bar */
  top: 0;
  display: block;
  width: 100%;
  width: calc(100% - var(--local-keep-open-width));
  height: 100%;
  pointer-events: all !important;
}
.truffle-sidebar.truffle-sidebar-is-open > .truffle-sidebar-bar {
  pointer-events: all;
  transform: translateX(0);
}
.truffle-sidebar.truffle-sidebar-is-two-step-open > .truffle-sidebar-two-step {
  pointer-events: all;
  transform: translateX(0);
}
.truffle-sidebar > .truffle-sidebar-bar {
  position: absolute;
  z-index: 2; /* above overlay */
  overflow: hidden;
  width: var(--local-sidebar-width);
  height: 100%;
  pointer-events: none;
  transform: translateX(0px);
  transition: transform 0.1s ease-in-out;
}
.truffle-sidebar > .truffle-sidebar-bar > .truffle-sidebar-iframe {
  width: var(--local-sidebar-width);
  height: 100%;
  border: none;
}
.truffle-sidebar > .truffle-sidebar-two-step {
  position: absolute;
  top: 50%;
  width: var(--local-two-step-width);
  height: 64px;
  margin-top: -32px;
  background: #f357a1;
  cursor: pointer;
  transform: translateX(0px);
  transition: transform 0.1s ease-in-out;
}
.truffle-sidebar > .truffle-sidebar-two-step > .truffle-sidebar-two-step-svg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  fill: #fff;
}
.truffle-sidebar > .truffle-sidebar-activation-zone {
  position: absolute;
  z-index: 1; /* below sidebar bar */
  top: 0;
  display: block;
  width: var(--local-activation-zone-width);
  height: 100%;
  pointer-events: all !important;
}`;var ae={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,n(r)));}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return "";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var o in e)t.call(e,o)&&e[o]&&(n=i(n,o));return n}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):window.classNames=r;}();}(ae);const de=G(ae.exports),ce=af((({embeds$:e,config$:t,sidebarWidth$:r})=>{J(se);const n=ff(!1),i=ff(!1),o=f.exports.useRef(null),s=f.exports.useRef(0),a=f.exports.useCallback((e=>{clearTimeout(s.current),s.current=window.setTimeout((()=>{n.set(!1),i.set(!1);}),e);}),[]),d=f.exports.useCallback((()=>{clearTimeout(s.current),n.set(!0);}),[]),c=f.exports.useCallback((()=>{clearTimeout(s.current),i.set(!0);}),[]);!function({closeSidebarTimeoutRef:e,attemptToCloseSidebar:t,config$:r}){f.exports.useEffect((()=>{const n=()=>t(r.activationSettings.leaveWindowTimeout.peek()),i=()=>clearTimeout(e.current),o=document.documentElement;return o.addEventListener("mouseleave",n),o.addEventListener("mouseenter",i),()=>{o.removeEventListener("mouseleave",n),o.removeEventListener("mouseenter",i);}}),[]);}({closeSidebarTimeoutRef:s,attemptToCloseSidebar:a,config$:t});const{isExperimentalSidebarEnabled:l,activationSettings:u}=t.get()||{},{screenSide:f$1,activationZoneWidth:p,isTwoStep:m,twoStepMode:g,twoStepKeepOpenWidth:w}=u||{},y=m?w:p,v=r.get(),x=e.get().length>0||l,I=n.get()&&x,S=i.get()&&x;return X.jsx(X.Fragment,{children:X.jsxs("div",{className:de("truffle-sidebar",`truffle-sidebar-${f$1}`,{"truffle-sidebar-is-open":I,"truffle-sidebar-is-two-step-open":S}),style:{"--local-sidebar-width":`${v}px`,"--local-activation-zone-width":`${p}px`,"--local-keep-open-width":`${y}px`},children:[m?X.jsx("div",{className:"truffle-sidebar-two-step",onMouseEnter:"hover"===g?d:void 0,onClick:"click"===g?d:void 0,children:X.jsx(le,{})}):null,X.jsx("div",{className:"truffle-sidebar-bar",onMouseEnter:d,children:x&&X.jsx("iframe",{src:"https://app.truffle.vip/hud/sidebar",className:"truffle-sidebar-iframe",ref:o})}),x?X.jsxs(X.Fragment,{children:[X.jsx("div",{className:"truffle-sidebar-activation-zone",onMouseEnter:m?c:d}),X.jsx("div",{className:"truffle-sidebar-deactivation-zone",onMouseMove:()=>a(0)})]}):null]})})})),le=()=>X.jsx("svg",{className:"truffle-sidebar-two-step-svg",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"20",viewBox:"0 0 16 20",fill:"none",children:X.jsx("path",{d:"M11.0871 13.825L7.27044 10L11.0871 6.175L9.91211 5L4.91211 10L9.91211 15L11.0871 13.825Z",fill:"white"})});const ue=Q`.c-toast {
  background: #ffffff;
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  width: 320px;
  height: 56px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.15);
}
.c-toast > .icon {
  margin: 8px;
  width: 40px;
  height: 40px;
}
.c-toast > .text-container {
  margin: 0;
  width: 100%;
  font-family: "Inter", sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 44px;
}
.c-toast > .text-container > .title {
  font-size: 12px;
  color: rgba(14, 14, 14, 0.8);
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
}
.c-toast > .text-container > .body {
  font-size: 16px;
  color: #0e0e0e;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
}
.c-toast > .close-button {
  flex-shrink: 0;
  flex-grow: 0;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 0;
  height: 100%;
  border: none;
  width: 43px;
  cursor: pointer;
}
.c-toast > .close-button > img {
  width: 20px;
  height: 20px;
  filter: invert(1);
}`,fe=e=>{J(ue);const{title:t,body:r,iconUrl:n,close:i,onClick:o}=e;return X.jsxs("div",{className:"c-toast",onClick:()=>null==o?void 0:o(),children:[X.jsx("img",{className:"icon",src:n}),X.jsxs("div",{className:"text-container",children:[X.jsx("div",{className:"title",children:t}),X.jsx("div",{className:"body",children:r})]}),X.jsx("button",{className:"close-button",onClick:e=>{e.stopPropagation(),i();},children:X.jsx("img",{src:ee})})]})},pe=Q`.c-alert-manager {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10900;
}`,me=pe$1([]),he=af((()=>(J(pe),X.jsx("div",{className:"c-alert-manager",children:me.get().map((e=>X.jsx(fe,{...e},e.id)))})))),ge=af((({embedWindows$:e,embeds$:t,config$:r,sidebarWidth$:n,onNewIframe:i})=>X.jsxs(X.Fragment,{children:[X.jsx(ce,{embeds$:t,config$:r,sidebarWidth$:n}),X.jsx(oe,{embedWindows$:e,embeds$:t,onNewIframe:i}),X.jsx(he,{})]})));var be="truffle-embed",we="truffle-embed",ye=function(e,t){let r;return (...n)=>{clearTimeout(r),r=window.setTimeout((()=>{e(...n);}),t);}}((function({pageInfo$:e,domEmbeds$:t,anywebToOrchestratorPrivilegedProvider:r,onNewIframe:n}){let i=t.get(),o=ve.get(),s=e.get(),a=o.filter(xe),d=i.filter((e=>!a.find((t=>e.id===t.embed.id)))),c=a.filter((e=>i.find((t=>t.id===e.embed.id))&&function(e,t){return e.embed.orgId===t.orgId}(e,s))),l=a.filter((e=>!c.includes(e))),u=d.map((e=>({embed:e,element:Ie({embed:e,anywebToOrchestratorPrivilegedProvider:r,onNewIframe:n})})));l.forEach(Se),ve.set(c.concat(u));}),500),ve=pe$1([]);function xe(e){return !!e.element?.parentNode}function Ie({embed:e,anywebToOrchestratorPrivilegedProvider:t,onNewIframe:r}){let n=document.querySelector(e.displayOptions.querySelector);if(!n)return null;let i=document.createElement("iframe");return i.src=`https://app.truffle.vip/hud/embed/${e.id}`,i.id=function(e){return `${we}-${e.id}`}(e),i.className=be,i.allow="fullscreen; microphone; camera; autoplay; encrypted-media;",Object.assign(i.style,e.displayOptions.defaultStyles),i.dataset.truffleEmbedId=e.id,i.dataset.orgId=e.orgId,i.contentWindow?(t.registerFrame(i,e.id),r(i)):i.addEventListener("load",(()=>{t.registerFrame(i,e.id),r(i);})),n.appendChild(i),i}function Se(e){e.element?.remove();}var Oe=navigator.userAgent.includes("Truffle")?g:r,$e=Oe({providerWindow:window,namespace:"client-to-hud-privileged-api-v1",connectImmediately:!1});$e.connect().catch((e=>{}));var Me=$e.api,Ee=Oe({providerWindow:window,namespace:"client-to-anyweb-unprivileged-api-v1",connectImmediately:!1});Ee.connect().catch((e=>{}));var Te=Ee.api,Ce=async e=>{let{onNewIframe:r}=e,i=pe$1(),a$1=pe$1([]),d=ye$1((()=>(a$1.get()||[]).filter((e=>"dom"===e.displayType))));i.onChange((()=>{ye({pageInfo$:i,domEmbeds$:d,anywebToOrchestratorPrivilegedProvider:c,onNewIframe:r});})),d.onChange((()=>{ye({pageInfo$:i,domEmbeds$:d,anywebToOrchestratorPrivilegedProvider:c,onNewIframe:r});})),setInterval((()=>{ye({pageInfo$:i,domEmbeds$:d,anywebToOrchestratorPrivilegedProvider:c,onNewIframe:r});}),5e3);let c=(({embeds$:e})=>{let t={embedSetStyles:({fromId:e},t)=>{if(!e)return;let n=r(e);if(!n)return;let i=n.element;i&&Object.assign(i.style,t);},embedSetContainer:({fromId:e},t,n="append")=>{if(!e)return;let i=document.querySelector(t);if(!i)throw new Error(`Could not find container element with query selector ${t}.`);let o=r(e)?.element;if(!o)throw new Error(`Could not find embed iframe with id ${e}.`);"append"===n?i.appendChild(o):"prepend"===n&&i.prepend(o);},embedShowToast:({fromId:t},r,n)=>{if(e.get().find((e=>e.id===t)))return Me.embedShowToast({embedId:t},r,n)},embedWindowGetVisibility:async({fromId:e})=>!!e&&Me.embedWindowGetVisibility({embedId:e}),embedWindowSetVisibility:({fromId:e},{embedId:t,isVisible:r})=>{if(t||=e,t)return Me.embedWindowSetVisibility({embedId:t,isVisible:r})},sidebarSetWidth:(e,t)=>Me.sidebarSetWidth({width:t}),environmentGetInfo:async()=>Me.environmentGetInfo()};function r(e){return ve.get().find((t=>t.embed.id===e))}let n=a({namespace:"anyweb-to-orchestrator-privileged-api-v1",api:t,allowedOrigins:["https://app.truffle.vip","https://truffle.vip"]});return n.registerFrame(o$1(window)),n})({embeds$:a$1});if(window.self===window.top){let e=e=>{a$1.set(e);};Te.embedsGet(e).then((t=>e(t)));let t=e=>{i.set(e);};Te.pageInfoGet(t).then((e=>t(e)));}};const Ne=o({namespace:"truffle-background-privileged-api-v1",connectImmediately:!1});Ne.connect().catch((e=>{console.warn("failed to connect to background transframe",e);}));const je=Ne.api;!function(t,{id:r}){const n=document.head||document.documentElement,i=document.createElement("script");i.type="module",i.id=r,i.dataset.runtime=r$1.runtime.id,i.src=r$1.runtime.getURL(t),n.prepend(i);}("./injected-script/index.js",{id:"truffle-injected"});const _e=window.self===window.top||!1,Fe={storageGetFn:(e,t)=>l(e,t),storageSubscribeFn:(e,t,r)=>o$2(e,t,r),storageSetFn:(e,t,r)=>r$2(e,t,r)},Ae={},Pe=pe$1({width:window.innerWidth,height:window.innerHeight});window.addEventListener("resize",(()=>{Pe.set({width:window.innerWidth,height:window.innerHeight});}));const{embeds$:ke,config$:ze,sidebarWidth$:We,embedWindows$:De,createClientToHudPrivilegedProvider:Le,createClientToAnywebUnprivilegedProvider:Ue}=(e=>{let{storageGetFn:r,fetchOverrideFn:n,removeHeadersFn:i,truffleVersion:a$1}=e;!function({getFn:e,setFn:t,subscribeFn:r}){T.resolve({get:e,set:t,subscribe:r});}({getFn:r,setFn:e.storageSetFn,subscribeFn:e.storageSubscribeFn});let d=pe$1(),c=pe$1([]),l=pe$1([]);d.onChange((({value:e})=>{U({pageInfo:e,truffleVersion:a$1}).then((e=>c.set(e)));}));let u=pe$1(e.initialSidebarWidth||0),f=pe$1(!1);c.onChange((({value:e})=>{l.set((e||[]).map((e=>({embedId:e.id,isOpen:!1,zIndex:0}))));}));let p=pe$1(C("sidebar","config").then((e=>E({sidebarWidth:72,allowedSites:"all",activationSettings:{isTwoStep:!0,twoStepMode:"click",screenSide:R?"left":"right",activationZoneWidth:14,twoStepKeepOpenWidth:50,sidebarTimeout:0,leaveWindowTimeout:500,leaveTwoStepTimeout:500}},e||{}))));return {embeds$:c,config$:p,pageInfo$:d,embedWindows$:l,sidebarWidth$:u,isSidebarOpen$:f,createClientToHudPrivilegedProvider:({createProviderFn:e,windowDimensions$:t,surrogateMountFn:r,surrogateUnmountFn:s,truffleVersion:a$1})=>((({pageInfo$:e,createProviderFn:t=a,truffleVersion:r})=>{let n=[];e.onChange((({value:e})=>{n.forEach((t=>t(e)));})),t({namespace:"truffle-hud-privileged-api-v1",api:{pageInfoGet:async(t,r)=>(r&&n.push(r),e.get()),environmentGetInfo:async()=>({truffleVersion:r||"unknown",isExperimental:await C("settings","experimental"),isExperimentalSidebar:await C("settings","experimentalSidebar"),deviceType:"desktop"})}});})({createProviderFn:e,pageInfo$:d,truffleVersion:a$1}),k({pageInfo$:d,embeds$:c,embedWindows$:l,createProviderFn:e,sidebarWidth$:u,windowDimensions$:t,surrogateMountFn:r,surrogateUnmountFn:s,fetchOverrideFn:n,removeHeadersFn:i,truffleVersion:a$1})),createClientToAnywebUnprivilegedProvider:({createProviderFn:e,isActiveFrame$:t,truffleVersion:r})=>(({pageInfo$:e,embeds$:t,isActiveFrame$:r,createProviderFn:n=a,truffleVersion:i})=>{let a$1=[];t.onChange((({value:e})=>{a$1.forEach((t=>t(e)));}));let d=[];e.onChange((({value:e})=>{d.forEach((t=>t(e)));}));let c=n({namespace:"client-to-anyweb-unprivileged-api-v1",api:{pageInfoSet:async(t,n)=>{if(!r||!r.get())return;let i=e.peek();if(n.entities.some((e=>!i?.entities.find((t=>{let r=t.entityReference.sourceId&&t.entityReference.sourceId===e.entityReference.sourceId,n=t.entityReference.sourceName&&t.entityReference.sourceName===e.entityReference.sourceName;return (r||n)&&t.entityType===e.entityType}))))){let t=await Promise.all(n.entities.map(D)),r=t.find((e=>e.orgId));e.set({...n,entities:t,orgId:r?.orgId});}else e.set({...n,entities:i?.entities||n.entities,orgId:i?.orgId||n.orgId});},pageInfoGet:async(t,r)=>(r&&d.push(r),e.get()),embedsGet:async(e,r)=>(r&&a$1.push(r),t.get()),environmentGetInfo:async()=>({truffleVersion:i||"unknown",isExperimental:await C("settings","experimental"),isExperimentalSidebar:await C("settings","experimentalSidebar"),deviceType:"desktop"})},strictMode:n===a});return c.registerFrame(o$1(window)),c})({pageInfo$:d,embeds$:c,isActiveFrame$:t,createProviderFn:e,truffleVersion:r})}})(Object.assign(Object.assign({},Fe),{fetchOverrideFn:async(e,t)=>je.fetchWithRulesApplied(e,t,{headersToRemove:["origin"]}),removeHeadersFn:async({headers:e,ttlMs:t})=>je.removeHeaders({headers:e,ttlMs:t}),truffleVersion:"4.7.1"})),Re=()=>{Ce(Object.assign(Object.assign({},Fe),{onNewIframe:e=>{}}));};if(Le({truffleVersion:"4.7.1",windowDimensions$:Pe,createProviderFn:a,surrogateMountFn:({id:e,surrogateOptions:t})=>(Ae[e]=(async e=>{if("parent"===e.type||!e.url)return {providerWindow:window.parent,cleanup:()=>null};try{await je.removeHeaders({headers:["x-frame-options","content-security-policy"],ttlMs:5e3});}catch(e){console.error("error removing headers",e);}const t=document.createElement("iframe");t.src=e.url,t.style.display="none";const r=new Promise((e=>t.addEventListener("load",e)));document.body.appendChild(t),await r;const n=t.contentWindow;if(!n)throw new Error("iframe window not found");return {providerWindow:n,cleanup:()=>document.body.removeChild(t)}})(t).then((({providerWindow:e,cleanup:r$1})=>{const n=r({providerWindow:e,namespace:"anyweb-to-client-privileged-api-v1",connectImmediately:!1});return n.connect().catch((e=>console.log("error connecting to atc provider",e,window.location.href))),{transframeApi:n.api,getCookies:async()=>je.getCookies(t.url),cleanup:r$1}})),Ae[e]),surrogateUnmountFn:async({id:e})=>{(await Ae[e]).cleanup(),delete Ae[e];}}),Ue({truffleVersion:"4.7.1",isActiveFrame$:pe$1(!0)}),_e){const e=await ke$1((()=>ze.get())),{isExperimentalSidebarEnabled:t}=e||{};let{allowedSites:r}=e||{};t||(r="social");("social"!==r||["youtube.com","twitch.tv","twitter.com","x.com","tiktok.com","instagram.com","patreon.com","kick.com"].some((e=>{var t;return null===(t=window.location.href)||void 0===t?void 0:t.includes(e)})))&&(async e=>{const{config$:t,embeds$:r,sidebarWidth$:n,embedWindows$:i,onNewIframe:o}=e;return new Promise((e=>{const s=async()=>{const s=document.createElement("div");s.id="truffle-container",document.body.appendChild(s),W(s).render(f.exports.createElement(ge,{embeds$:r,embedWindows$:i,config$:t,sidebarWidth$:n,onNewIframe:o})),e(!0);};"loading"===document.readyState?window.addEventListener("DOMContentLoaded",s):s();}))})({embeds$:ke,config$:ze,embedWindows$:De,sidebarWidth$:We,onNewIframe:e=>{}}).then(Re);}else Re();
