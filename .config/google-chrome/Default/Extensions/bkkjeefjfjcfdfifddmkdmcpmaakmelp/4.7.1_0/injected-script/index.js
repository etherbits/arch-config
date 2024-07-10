import { p as pe$1 } from '../chunks/index-6f38244c.js';
import { a, o, g as g$1, r as r$1 } from '../chunks/create-6466ba3c.js';
import { r, t } from '../chunks/transframe-provider-57421007.js';

var s={xml2json:l};function l(e){return e=function(e){return e=e.replace(/<!--[\s\S]*?-->/g,""),e=e.replace(/\n|\t|\r/g,""),e=e.replace(/ {1,}<|\t{1,}</g,"<"),e=e.replace(/> {1,}|>\t{1,}/g,">"),e=e.replace(/<\?[^>]*\?>/g,""),e=function(e){var t=e.match(/<[^/][^>]*\/>/g);if(t)for(var n=0;n<t.length;n++){var a=t[n],r=a.substring(0,a.length-2);r+=">";var i=a.match(/[^<][\w+$]*/)[0],o="</"+i+">",s="<"+i+">",l=r.match(/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g);if(l)for(var u=0;u<l.length;u++){var c=l[u],d=c.substring(0,c.indexOf("="));s+="<"+d+">"+c.substring(c.indexOf('"')+1,c.lastIndexOf('"'))+"</"+d+">";}s+=o,e=e.replace(a,s);}return e}(e),e=function(e){var t=e.match(/<[^\/][^>][^<]+\s+.[^<]+[=][^<]+>{1}([^<]+)/g);if(t)for(var n=0;n<t.length;n++){var a=t[n],r=a.substring(0,a.indexOf(">")+1)+"<_@ttribute>"+a.substring(a.indexOf(">")+1)+"</_@ttribute>";e=e.replace(a,r);}return e}(e),e=function(e){var t=e.match(/<[^\/][^>][^<]+\s+.[^<]+[=][^<]+>/g);if(t)for(var n=0;n<t.length;n++){var a=t[n],r="<"+a.match(/[^<][\w+$]*/)[0]+">",i=a.match(/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g);if(i)for(var o=0;o<i.length;o++){var s=i[o],l=s.substring(0,s.indexOf("="));r+="<"+l+">"+s.substring(s.indexOf('"')+1,s.lastIndexOf('"'))+"</"+l+">";}e=e.replace(a,r);}return e}(e),e}(e),function(e){var t,n,a,r,i,o={};for(;e.match(/<[^\/][^>]*>/);)t=(i=e.match(/<[^\/][^>]*>/)[0]).substring(1,i.length-1),-1==(n=e.indexOf(i.replace("<","</")))&&(t=i.match(/[^<][\w+$]*/)[0],-1==(n=e.indexOf("</"+t))&&(n=e.indexOf("<\\/"+t))),r=(a=e.substring(i.length,n)).match(/<[^\/][^>]*>/)?l(a):a,void 0===o[t]?o[t]=r:Array.isArray(o[t])?o[t].push(r):o[t]=[o[t],r],e=e.substring(2*i.length+1+a.length);return o}(e)}var u,c,d,h,p=Object.defineProperty,m=(e,t)=>p(e,"name",{value:t,configurable:!0}),g=(e,t,n)=>(((e,t,n)=>{t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;})(e,"symbol"!=typeof t?t+"":t,n),n);(c=u||(u={})).TWITCH="twitch",c.YOUTUBE="youtube",c.KICK="kick",function(e){e.LIVE_DATA="liveData",e.CHAT_DATA="chatData",e.SOCIALS="socials",e.CHANNEL_INFO="channelInfo",e.POSTS="posts";}(d||(d={})),function(e){e.DISCORD="discord",e.TIKTOK="tiktok",e.INSTAGRAM="instagram",e.TWITTER="twitter",e.SPOTIFY="spotify",e.TWITCH="twitch",e.YOUTUBE="youtube";}(h||(h={}));var y=class{static setFetch(e){this.fetchToText=e;}static getChannels(){throw new Error("Not Implemented")}static async getChannelData({sourceId:e,sourceName:t,postSourceId:n,dataTypes:a}){let r={},i={};return await Promise.all(a.map((async a=>{let o=this.dataTypesMap[a];if(!o)throw new Error(`Unsupported dataType: ${a} for platform`);let{urlFn:s,parseFn:l}=o,u=await s({sourceId:e,sourceName:t,postSourceId:n}),c=i[u]||this.fetchToText(u);i[u]=c;let d=await c;r[a]=l(d);}))),r}};m(y,"BasePlatform"),g(y,"dataTypesMap"),g(y,"fetchToText",m(((e,t,n)=>fetch(e,{...t||{},headers:{"User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",...t?.headers||{}}}).then((e=>e.text()))),"fetchToText"));var f=y;function v(e){let t=e.replace(/,/g,""),n=parseInt(t,10);return isNaN(n)?null:n}function w(e){return [...e.matchAll(/<meta\s+property="([^"]+)"\s+content="([^"]+)"\s*\/?>/g)].reduce(((e,t)=>{let n=t[1],a=t[2],r=n.replace(/[:_]+(.)/g,((e,t)=>t.toUpperCase()));if("ogImage"===r)return e[r]||(e[r]=[]),e[r].push({url:a}),e;if(r.startsWith("ogImage")&&Array.isArray(e.ogImage)){let t=r.replace("ogImage","").toLowerCase();e.ogImage[e.ogImage.length-1][t]=a;}else e[r]||(e[r]=[]),e[r].push(a);return e}),{})}function I({obj:e,key:t,value:n,depth:a}){let r=[];function i(e){let{obj:t,key:n,value:o,parents:s=[]}=e;if(null==o&&t[n]||o&&t[n]===o){let e=s.length-a;e>=0&&r.push(s[e]);}else Object.entries(t).forEach((([e,r])=>{if("object"==typeof r&&null!==r){let e=s.concat(t);i({obj:r,key:n,value:o,depth:a,parents:e});}}));}return m(i,"search"),i({obj:e,key:t,value:n,depth:a}),r}m(v,"parseStringToInt"),m(w,"getMetadataByHtml"),m(I,"deepSearch");var b=class e extends f{static async _getLiveUrl({sourceId:t,sourceName:n,postSourceId:a}){return a?`https://www.youtube.com/watch?v=${a}`:n?`https://www.youtube.com/@${n}/live`:e._getLiveUrlBySourceId(t)}static _parseChatData(e){return {iframeContinuation:E(_(e))}}static _parseLiveData(t){let n=_(t),a=w(t),r=a.alWebUrl?.[0]?.includes("/live")&&!D(t),i=a.ogUrl?.[0],o=i?.split("v=")?.[1];if(r&&!o)throw new Error(`No id found in url ${i}, Most likely livestream has ended or channel has multiple live streams but this should not happen`);return r?{startDate:T(t),ccv:e.getCcvByYtInitialData(n),category:e.getCategoryByYtInitialData(n),platform:u.YOUTUBE,title:a.ogTitle?.[0],description:a.ogDescription?.[0],likes:e.getLiveLikesByYtInitialData(n),thumbnail:a.ogImage?.[0]?.url?a.ogImage[0].url:null,url:a.ogUrl?.[0],id:o}:null}static _parseChannelInfo(t){let n=_(t),a=w(t);return {images:{bannerFileUrl:e.getBannerByYtInitialData(n),avatarFileUrl:a.ogImage?.[0]?.url},name:a.ogTitle?.[0],id:n?.metadata?.channelMetadataRenderer?.externalId,username:P(n),url:`https://youtube.com/@${P(n)}`}}static _parseSocials(e){let t=_(e),n=I({obj:t,key:"title",value:"About",depth:1})[0]?.tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].channelAboutFullMetadataRenderer.links;return n&&0!==n.length?L(n):{}}static _parsePosts(e){try{let t=s.xml2json(e)?.feed?.entry;return t&&!Array.isArray(t)&&(t=[t]),t?.map(S)||[]}catch{return []}}static async _getLiveUrlBySourceId(t){let n=`https://www.youtube.com/channel/${t}/live`;return `https://youtube.com/@${P(_(await e.fetchToText(n)))}/live`}static async getChannels(){return U(await e.fetchToText("https://www.youtube.com/feed/channels"))}static async getChatContinuationInfo(t){let n=await e.fetchToText("https://youtube.com/live_chat?continuation="+t),a=_(n),r=JSON.parse(/(?:ytcfg\s*.set)\(({[\s\S]+?})\)\s*;/.exec(n)?.[1]);return {apiKey:r.INNERTUBE_API_KEY,context:r.INNERTUBE_CONTEXT,continuationToken:x(a)}}static getLiveLikesByYtInitialData(e){let t=I({obj:e,key:"iconType",value:"LIKE",depth:3});return t[0]?.likeCount?parseInt(t[0].likeCount):null}static getCategoryByYtInitialData(e){let t=I({obj:e,key:"style",value:"RICH_METADATA_RENDERER_STYLE_BOX_ART",depth:1});return t[0]?.richMetadataRenderer?.title?.simpleText?t[0].richMetadataRenderer.title.simpleText:null}static getCcvByYtInitialData(e){let t=I({obj:e,key:"videoViewCountRenderer",depth:1}),n=N(t[0]?.viewCount.videoViewCountRenderer.viewCount);return n?v(n):null}static getBannerByYtInitialData(e){return I({obj:e,key:"style",value:"C4_TABBED_HEADER_RENDERER_STYLE_MODERN",depth:1})?.[0]?.c4TabbedHeaderRenderer?.banner?.thumbnails?.[0]?.url}};m(b,"Youtube"),g(b,"dataTypesMap",{[d.LIVE_DATA]:{urlFn:b._getLiveUrl,parseFn:b._parseLiveData},[d.CHAT_DATA]:{urlFn:b._getLiveUrl,parseFn:b._parseChatData},[d.CHANNEL_INFO]:{urlFn:async({sourceId:e,sourceName:t})=>t?`https://www.youtube.com/@${t}/about`:`https://www.youtube.com/channel/${e}/about`,parseFn:b._parseChannelInfo},[d.SOCIALS]:{urlFn:async({sourceId:e,sourceName:t})=>t?`https://www.youtube.com/@${t}/about`:`https://www.youtube.com/channel/${e}/about`,parseFn:b._parseSocials},[d.POSTS]:{urlFn:async({sourceId:e})=>(R(e),`https://www.youtube.com/feeds/videos.xml?channel_id=${e}`),parseFn:b._parsePosts}});var C=b;function T(e){let t=/<meta itemprop="startDate" content="([\s\S]*?)">/gi.exec(e);if(!t)return null;let n=t[1];return new Date(n)}function x(e){return e.continuationContents?.liveChatContinuation?.continuations?.[0]?.timedContinuationData?.continuation??e.continuationContents?.liveChatContinuation?.continuations?.[0].invalidationContinuationData?.continuation??e.continuationContents?.liveChatContinuation?.continuations?.[0].reloadContinuationData?.continuation}function R(e){if(!e)throw new Error("No sourceId Provided")}function S(e){return {id:e["yt:videoId"],title:A(e.title),description:A(e["media:group"]["media:description"]),url:e.link.href,format:"video",thumbnailFileUrl:e["media:group"].media?.[1]?.url?.replace("hqdefault","mqdefault"),postTime:new Date(e.published),viewCount:v(e["media:group"]["media:community"]?.media?.[1]?.views||"0")}}function A(e){return e&&e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#x60;/g,"`").replace(/&#x27;/g,"'").replace(/&#39;/g,"'")}function _(e,t="ytInitialData"){let n=new RegExp(`(?:window\\s*\\[\\s*["']${t}["']\\s*\\]|${t})\\s*=\\s*({.+?})\\s*;`).exec(e);return JSON.parse(n?.[1]??"{}")}function D(e){return I({obj:_(e,"ytInitialPlayerResponse"),key:"offlineSlate",depth:1}).length>0}function E(e){return e.contents?.twoColumnWatchNextResults||console.log("no ytInitialData.contents?.twoColumnWatchNextResults",JSON.stringify(e)),e.contents?.twoColumnWatchNextResults?.conversationBar.liveChatRenderer.header.liveChatHeaderRenderer.viewSelector.sortFilterSubMenuRenderer.subMenuItems[1]?.continuation?.reloadContinuationData?.continuation}function P(e){return I({obj:e,key:"webPageType",value:"WEB_PAGE_TYPE_CHANNEL",depth:1})[0].webCommandMetadata.url?.match(/\/@([\s\S]*?)($|\/)/)?.[1]?.toLowerCase()}function N(e){return e?.runs?.[0]?.text??e?.simpleText??""}function L(e){let t=new Set([h.DISCORD,h.TIKTOK,h.INSTAGRAM,h.TWITTER,h.SPOTIFY,h.TWITCH]);return e.reduce(((e,n)=>{let a=n.channelExternalLinkViewModel.title.content.toLowerCase();return t.has(a)&&(e[a]=`https://${n.channelExternalLinkViewModel.link.content}`),e}),{})}function U(e){return (_(e).contents.twoColumnBrowseResultsRenderer.tabs[0]?.tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.expandedShelfContentsRenderer.items).map((e=>({id:e.channelRenderer.channelId,name:e.channelRenderer.title.simpleText,platform:u.YOUTUBE,images:{avatarFileUrl:"https://"+e.channelRenderer.thumbnail.thumbnails[0].url.slice(2)},url:`https://youtube.com/${e.channelRenderer.navigationEndpoint.browseEndpoint.canonicalBaseUrl}`})))}m(T,"getStartDateByHtml"),m(x,"getContinuationToken"),m(R,"ensureSourceId"),m(S,"normalizeXmlPost"),m(A,"unescapeStr"),m(_,"getYoutubeVarByHtml"),m(D,"getIsScheduledByHtml"),m(E,"getIframeContinuation"),m(P,"getUsernameByYtInitialData"),m(N,"getText"),m(L,"getSocialsFromLinks"),m(U,"getYoutubeChannelsByHtml");var B=class extends f{static _parseLiveData(e){return H(e)}static _parseChannelInfo(e){return j(e)}static async getChannels(){let e=await this.fetchToText("https://gql.twitch.tv/gql",{body:G(),method:"POST"},{headersToRemove:["origin"]});return JSON.parse(e)[0].data.personalSections[0].items.map((e=>({id:e.user.id,name:e.user.displayName,platform:u.TWITCH,images:{avatarFileUrl:e.user.profileImageURL},url:`https://twitch.tv/${e.user.login}`})))}};m(B,"Twitch"),g(B,"dataTypesMap",{[d.LIVE_DATA]:{urlFn:async({sourceName:e})=>(O(e),`https://m.twitch.tv/${e}`),parseFn:B._parseLiveData},[d.CHANNEL_INFO]:{urlFn:async({sourceName:e})=>(O(e),`https://m.twitch.tv/${e}`),parseFn:B._parseChannelInfo}});var M=B;function O(e){if(!e)throw new Error("No Source Name Provided")}function F(e){let t=/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/g.exec(e);if(!t)throw new Error("No Next Data Found");return JSON.parse(t[1])}function k(e,t){return Object.keys(e.props.relayQueryRecords||[]).find((e=>e.startsWith(`${t}}|`)))?.split("}|{")[1]}function $(e){return e.match(/client:Stream}\|{(\d+)/)?.[1]}function H(e){let t=F(e),n=$(e),a=J(t),r=!(!a||!n),i=w(e);return r?{startDate:V(n,t),ccv:q(n,t),category:a,platform:u.TWITCH,title:i.ogDescription?.[0],description:"",likes:null,thumbnail:i.ogImage?.[0].url,url:i.ogUrl?.[0],id:n}:null}function j(e){let t=F(e),n=k(t,"User"),a=Y(t);return {images:{avatarFileUrl:W(t),bannerFileUrl:""},name:a,id:n,username:a,url:`https://twitch.tv/${a}`}}function Y(e){let t=k(e,"User");return e?.props?.relayQueryRecords?.[`User}|{${t}`]?.login?.toLowerCase()}function W(e){let t=k(e,"User");return e?.props?.relayQueryRecords?.[`User}|{${t}`]?.["profileImageURL(width:150)"]}function V(e,t){let n=t?.props?.relayQueryRecords?.[`Broadcast}|{${e}`]?.startedAt;return n?new Date(n):(console.error("no date found",k(t,"User")),new Date)}function q(e,t){let n=t?.props?.relayQueryRecords?.[`Stream}|{${e}`]?.viewersCount;return n||(console.error("no ccv found"),null)}function J(e){let t=k(e,"Game"),n=e?.props?.relayQueryRecords?.[`Game}|{${t}`]?.name;return n||null}function G(){return JSON.stringify([{operationName:"PersonalSections",variables:{input:{sectionInputs:["FOLLOWED_SECTION"],recommendationContext:{platform:"web",clientApp:"twilight",channelName:null,categoryName:null,lastChannelName:null,lastCategoryName:null,pageviewContent:null,pageviewContentType:null,pageviewLocation:null,pageviewMedium:null,previousPageviewContent:null,previousPageviewContentType:null,previousPageviewLocation:null,previousPageviewMedium:null}},creatorAnniversariesExperimentEnabled:!1},extensions:{persistedQuery:{version:1,sha256Hash:"f8cc9b91bb629f2d09dd8299d9f07c4daefe019236a19fc12fa2b14eb95c359e"}}}])}function K(e){if(e&&e.message)return {_thirdPartyAccount:{thirdPartyType:"youtube",thirdPartyId:e.authorExternalChannelId,thirdPartyUsername:te(e.authorName)},_addTime:new Date(parseInt(e.timestampUsec)/1e3),platformData:{youtube:{badges:e.authorBadges?.map((({liveChatAuthorBadgeRenderer:e})=>ee(e)))??[],userId:e.authorExternalChannelId}},body:te(e.message),data:{type:"default",platform:"youtube",sourceType:"youtube",sourceId:e.id}}}function Q(e){if(!e||!(e.message||e.headerPrimaryText||e.headerSubtext))return;let t=te(e.headerPrimaryText),n=te(e.headerSubtext),a=te(e.message),r=t||"";r&&n?r+=` - ${n}`:!r&&n&&(r=n),r&&a?r+=`: ${a}`:!r&&a&&(r=a);let i,o=z(e.headerSubtext)?.toLowerCase().replace(/\s/g,"-");try{i=t.includes("Welcome")?"1 month":n?.includes("Upgrade")?"Upgrade":t.match(/(\d+) (month|months|year|years)/i)?.[0],i||(i="Member");}catch(t){console.error("error parsing membership item",e,t),i="Member";}let s={_thirdPartyAccount:{thirdPartyType:"youtube",thirdPartyId:e.authorExternalChannelId,thirdPartyUsername:te(e.authorName)},_addTime:new Date(parseInt(e.timestampUsec)/1e3),platformData:{youtube:{badges:e.authorBadges?.map((({liveChatAuthorBadgeRenderer:e})=>ee(e)))??[],userId:e.authorExternalChannelId}},body:r,data:{type:"sub",classNames:o?[o]:void 0,ticker:{text:i,durationMs:6e4},platform:"youtube",sourceType:"youtube",sourceId:e.id}};return console.log("parseChatMembershipItemAction done",JSON.stringify(s)),s}function z(e){return e?.runs?.[0]?.text?.match(/(Upgraded membership to|Welcome to)/)?e.runs[1]?.text:e?.simpleText?e.simpleText:void 0}function X(e,t){if(!e||!e.purchaseAmountText||!e.message)return;let n=t?.addLiveChatTickerItemAction?.item?.liveChatTickerPaidMessageItemRenderer?.durationSec,a=n&&n>0,r=n?1e3*n:0;return {_thirdPartyAccount:{thirdPartyType:"youtube",thirdPartyId:e.authorExternalChannelId,thirdPartyUsername:te(e.authorName)},_addTime:new Date(parseInt(e.timestampUsec)/1e3),platformData:{youtube:{badges:e.authorBadges?.map((({liveChatAuthorBadgeRenderer:e})=>ee(e)))??[],userId:e.authorExternalChannelId}},body:`${te(e.purchaseAmountText)}: ${te(e.message)}`,data:{type:"tip",ticker:a?{text:te(e.purchaseAmountText),durationMs:r}:void 0,platform:"youtube",sourceType:"youtube",sourceId:e.id}}}function Z(e){let t=e?.header?.liveChatSponsorshipsHeaderRenderer;if(!e||!t)return;let n=te(t.primaryText),a=parseInt(n.match(/\d+/i)?.[0]);return (isNaN(a)||!a)&&(a=0),{_thirdPartyAccount:{thirdPartyType:"youtube",thirdPartyId:e.authorExternalChannelId,thirdPartyUsername:te(t.authorName)},_addTime:new Date(parseInt(e.timestampUsec)/1e3),platformData:{youtube:{badges:t.authorBadges?.map((({liveChatAuthorBadgeRenderer:e})=>ee(e)))??[],userId:e.authorExternalChannelId}},body:n,data:{type:"gift",ticker:{text:`${a}`||"Gift",durationMs:Math.min(2e4*(a||1),72e5)},platform:"youtube",sourceType:"youtube",sourceId:e.id}}}function ee(e){let t=e.icon?.iconType?.toLowerCase()||"custom";return {tooltip:e.tooltip,type:t,imageUrl:"moderator"===t?"https://cdn.bio/assets/images/features/chat/badges/youtube-mod.svg":"verified"===t?"https://cdn.bio/assets/images/features/chat/badges/youtube-verified.svg":"owner"===t?"https://cdn.bio/assets/images/features/chat/badges/creator.svg":e.customThumbnail?.thumbnails?.[0]?.url?.replace("s16","s40")}}function te(e){return e?"string"==typeof e?e:e.simpleText?e.simpleText:e.runs?e.runs.map((e=>void 0!==e?.text?e.navigationEndpoint?.urlEndpoint?.url?decodeURIComponent(e.navigationEndpoint.urlEndpoint.url.replace(/.*?q=/,"")):e.text:e.emoji.isCustomEmoji?` ${e.emoji.image.accessibility?.accessibilityData?.label??e.emoji.searchTerms[1]??e.emoji.searchTerms[0]}`:e.emoji.emojiId)).join("").trim():"":""}m(O,"ensureSourceName"),m(F,"getNextDataByHtml"),m(k,"getIdByNextData"),m($,"getStreamIdByHtml"),m(H,"getTwitchLiveDataByHtml"),m(j,"getTwitchChannelInfoByHtml"),m(Y,"getUsernameByNextData"),m(W,"getProfileImageUrlByNextData"),m(V,"getDateByStreamIdAndNextData"),m(q,"getCcvByStreamIdAndNextData"),m(J,"getLivestreamCategoryFromNextData"),m(G,"getFollowerQueryBody"),m((e=>{let t=e.find((e=>e.addBannerToLiveChatCommand));if(!t)return;let n=t.addBannerToLiveChatCommand?.bannerRenderer?.liveChatBannerRenderer?.contents?.liveChatTextMessageRenderer;return n?{sourceType:"youtube",sourceId:n.id,sourceActionId:t.addBannerToLiveChatCommand.bannerRenderer.liveChatBannerRenderer.actionId}:void 0}),"getPinByYoutubeChatActions"),m((e=>{let t=e.find((e=>e.removeBannerForLiveChatCommand));if(t)return {sourceType:"youtube",sourceId:t.removeBannerForLiveChatCommand.targetActionId}}),"getRemovedPinByYoutubeChatActions"),m((function(e){let t=e.find((e=>e.updateLiveChatPollAction?.pollToUpdate?.pollRenderer));if(!t)return;let n=t.updateLiveChatPollAction.pollToUpdate.pollRenderer,a=te(n.header.pollHeaderRenderer.pollQuestion),r=te(n.header.pollHeaderRenderer.metadataText),i=parseInt(r.match(/(\d+) vote/)[0]),o=n.choices.map(((e,t)=>({index:t,text:te(e.text),count:Math.round(i*e.voteRatio)})));return {question:a,options:o,data:{sourceType:"youtube",sourceId:n.liveChatPollId,sourceData:{optionEndpoints:n.choices?.map((e=>e.selectServiceEndpoint?.sendLiveChatVoteEndpoint)),endPollEndpoint:n.button?.buttonRenderer?.command?.liveChatActionEndpoint}}}}),"getPollByYoutubeChatActions"),m((function(e){return e.filter((e=>e.addChatItemAction?.item?.liveChatTextMessageRenderer||e.addChatItemAction?.item?.liveChatPaidMessageRenderer||e.addChatItemAction?.item?.liveChatMembershipItemRenderer||e.addChatItemAction?.item?.liveChatSponsorshipsGiftPurchaseAnnouncementRenderer)).map((t=>{try{if(t.addChatItemAction?.item?.liveChatTextMessageRenderer)return K(t.addChatItemAction.item.liveChatTextMessageRenderer);if(t.addChatItemAction?.item?.liveChatPaidMessageRenderer){let n=t.addChatItemAction.item.liveChatPaidMessageRenderer.id,a=e.find((e=>{let t=e.addLiveChatTickerItemAction?.item?.liveChatTickerPaidMessageItemRenderer?.id;return n&&n===t}));return X(t.addChatItemAction.item.liveChatPaidMessageRenderer,a)}if(t.addChatItemAction?.item?.liveChatMembershipItemRenderer)return Q(t.addChatItemAction.item.liveChatMembershipItemRenderer);if(t.addChatItemAction?.item?.liveChatSponsorshipsGiftPurchaseAnnouncementRenderer)return Z(t.addChatItemAction.item.liveChatSponsorshipsGiftPurchaseAnnouncementRenderer)}catch(e){console.error("error parsing chat message",t,e);}})).filter(Boolean)}),"getChatMessagesByYoutubeChatActions"),m(K,"parseChatTextMessageAction"),m(Q,"parseChatMembershipItemAction"),m(z,"parseMemberTier"),m(X,"parseChatPaidMessageAction"),m(Z,"parseChatSponsorshipsGiftPurchaseAnnouncementAction"),m(ee,"getBadge"),m(te,"parseYTString");var ne={[u.YOUTUBE]:C,[u.TWITCH]:M};m((function({platform:e,...t}){return ne[e].getChannelData(t)}),"getChannelData");var ae=class{constructor(){t(this,"_isListening",!1),t(this,"_messageHandler",(()=>{})),t(this,"_messageHandlerWrapper",(e=>{const t=e=>{"string"!=typeof e&&(e=JSON.stringify(e)),window.ReactNativeWebView?.postMessage(e);},n={fromId:void 0};"string"==typeof e.data?this._messageHandler(JSON.parse(e.data),t,n):this._messageHandler(e.data,t,n);}));}get isListening(){return this._isListening}listen(){window.addEventListener?.("message",this._messageHandlerWrapper,!0),this._isListening=!0;}close(){window.addEventListener?.("message",this._messageHandlerWrapper,!0),this._isListening=!1;}onMessage(e){this._messageHandler=e;}registerFrame(e,t){console.warn("Method not implemented.");}};var re=class{},ie=new class extends re{getPageInfo(){return {title:document.title,url:window.location.href,site:"genericSite",entities:[],tags:[]}}},oe=/[a-zA-Z0-9_]+/,se=new class extends re{getPageInfo(){let e="",t=[];if("player.twitch.tv"===window.location.hostname.replace(/^www\./,"")){let t=new URLSearchParams(window.location.search);e=Object.fromEntries(t.entries()).channel||"";}else e=window.location.pathname.match(oe)?.[0]||"";return e&&t.push("twitch-live-now"),{title:document.title,url:window.location.href,site:"twitch",entities:[e?{entityType:"channel",entityReference:{sourceType:"twitch",sourceName:e}}:null].filter(Boolean),tags:t}}chatMessagePost({body:e}){if(!e)return !1;let t=document.querySelector('[data-a-target="chat-input"]');if(!t)return !1;let n=function(e){let t=Object.keys(e).find((e=>e.startsWith("__reactInternalInstance$")||e.startsWith("__reactFiber$")));return t?e[t]:null}(t),a=le(n,(e=>null!=e.memoizedProps?.setInputValue));a.memoizedProps.value=e,a.memoizedProps.setInputValue(e),a.memoizedProps.onValueUpdate(e);let r=document.querySelector('[data-a-target="chat-send-button"]');return setTimeout((()=>{r?.click();}),0),!0}};function le(e,t){if(!e)return null;if(t(e))return e;let n=e.return;return n?le(n,t):null}var ue=new Map,ce=new class extends re{async getPageInfo(){let e=document.querySelector("ytd-app")?.data??document.querySelector("ytd-page-manager")?.data??document.querySelector("ytm-app")?.data,t=e?e?.playerResponse?.videoDetails:window.ytInitialPlayerResponse?.videoDetails,n=t?.channelId||"",a=t?.videoId||"",r=[];if(r.push("youtube"),t?.isLiveContent)r.push("youtube-live"),t.isLive?r.push("youtube-live-now"):t.isUpcoming?r.push("youtube-live-upcoming"):r.push("youtube-live-vod");else if(window.location.pathname.startsWith("/live_chat")){let e=await this._getVideoIdAndChannelId();n=e.channelId||n,a=e.videoId||"",r.push("youtube-live-chat-frame");}else r.push("youtube-non-live-video"),r.push("youtube-video");let i=e,o={name:t?.author,thumbnailUrlSrc:document.querySelector("#owner #avatar")?.inst?.__data?.thumbnail?.thumbnails?.[0]?.url},s={title:t?.title,description:t?.shortDescription,viewCount:t?.viewCount,ccv:i&&t?.isLive?C.getCcvByYtInitialData(i):null};return {title:t?.title||document.title,url:window.location.href,site:"youtube",entities:[n?{entityType:"channel",entityReference:{sourceType:"youtube",sourceId:n,sourceData:o}}:null,a?{entityType:"post",entityReference:{sourceType:"youtube",sourceId:a,sourceData:s}}:null].filter(Boolean),tags:r}}async _getVideoIdAndChannelId(){let e=this._getVideoIdFromPageUrl()||await this._getVideoIdFromDom();if(!e)return fetch("https://platform-chat-api.truffle.vip/error",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:"Unable to get videoId from page",url:window.location.href})}),{videoId:null,channelId:null};if(ue.has(e))return {videoId:e,channelId:ue.get(e)};try{let t=(await(await fetch(`https://platform-chat-api.truffle.vip/v/${e}`)).json()).channelId;return ue.set(e,t),{videoId:e,channelId:t}}catch(t){return console.error("failed to get video info",t),{videoId:e,channelId:null}}}_getVideoIdFromPageUrl(){try{let e=new URLSearchParams(window.location.search).get("v");return e||(e=window.location.pathname?.match(/\/video\/([^/]+)/)?.[1]??null,e)}catch(e){console.warn("Unable to get videoId from page",e);}return null}async _getVideoIdFromDom(e=0){try{return ((document.querySelector("yt-live-chat-renderer")?.data?.continuations?.[0]?.invalidationContinuationData?.invalidationId?.topic).match(/chat~([^~]+)/)?.[1]??null)||(e>=3?null:(await new Promise((e=>setTimeout(e,500))),this._getVideoIdFromDom(e+1)))}catch(e){return console.warn("Unable to get videoId from page",e),null}}},de={genericSite:ie,twitch:se,youtube:ce};function he(){let e=function(e=window.location.href){switch(new URL(e).hostname.replace(/^www\./,"")){case"twitch.tv":case"player.twitch.tv":return "twitch";case"youtube.com":case"m.youtube.com":case"studio.youtube.com":return "youtube";default:return "genericSite"}}();return de[e].getPageInfo()}var pe=[],me=!1,ge={get:async(e,{paths:t,pick:n})=>{let a=[["ytcfg","data"],["ytcfg","data_"],["yt","config_"],["document","cookie"]];return t.map((e=>{if(!a.some((t=>JSON.stringify(t)===JSON.stringify(e))))throw new Error("Path not allowed");let t=e.reduce(((e,t)=>e?.[t]),globalThis);return n&&"object"==typeof t&&!Array.isArray(t)&&null!==t?n.reduce(((e,n)=>({...e,[n]:t?.[n]})),{}):t}))},webComponentMethod:async(e,{querySelector:t,method:n,args:a})=>{let r=document.querySelector(t);if(!r)throw new Error(`element not found: ${t}`);let i=r;if(!i[n])throw new Error(`method not found: ${n}`);return i[n](...a)},addFetchListener:(e,{urlRegexString:t},n)=>{let a=Math.random().toString();return pe.push({id:a,urlRegexString:t,onFetch:n}),me||fe(),{listenerId:a}},removeFetchListener:(e,{listenerId:t})=>{let n=pe.findIndex((({id:e})=>e===t));-1!==n&&pe.splice(n,1);},twitchChatMessagePost:(e,{body:t})=>se.chatMessagePost({body:t})},ye=navigator.userAgent.includes("Truffle")?function(e){return new r(new ae,e)}:a;ye({namespace:"anyweb-to-client-privileged-api-v1",api:ge,allowedOrigins:ye===a?["https://app.truffle.vip","https://truffle.vip",window.location.origin]:ye===a?["https://app.truffle.vip","https://truffle.vip","https://app.staging.bio","http://localhost:5173",window.location.origin]:void 0}).registerFrame(o(window));var fe=()=>{me=!0;let e=window.fetch.bind(window);window.fetch=async function(t,n){let a=e(t,n);try{let e;if("string"==typeof t)e=t;else if(t instanceof Request)e=t.url;else {if(!(t instanceof URL))return a;e=t.href;}let r=pe.filter((({urlRegexString:t})=>new RegExp(t).test(e)));if(0===r.length)return a;let i=await a;try{let t=i.text.bind(i),a=i.json.bind(i);i.text=async function(){let a=await t();try{let t={responseText:a,url:e,requestHeaders:n?.headers};return r.forEach((({onFetch:e})=>e(t))),a}catch{return a}},i.json=async function(){let t=await a();try{let a={responseText:JSON.stringify(t),url:e,requestHeaders:n?.headers};return r.forEach((({onFetch:e})=>e(a))),t}catch{return t}};}catch{return i}}catch{return a}return a};},ve=(navigator.userAgent.includes("Truffle")?g$1:r$1)({providerWindow:window.top,namespace:"client-to-anyweb-unprivileged-api-v1",connectImmediately:!1});ve.connect().catch((e=>{}));var we=ve.api;(({onLayoutChange:t}={})=>{if(window.self!==window.top)return;let n=pe$1();n.onChange((({value:e})=>{we.pageInfoSet(e).catch((e=>{}));}));let a=async()=>{let e=await he();e.contentPageType=e.tags?.[e.tags.length-1]?.replace(/-([a-z])/g,(e=>e[1].toUpperCase())),e.contentPageOwnerRef=e.entities[0]?.entityReference.sourceId||e.entities[0]?.entityReference.sourceName,e.contentPageId=e.entities[1]?.entityReference.sourceId,n.set(e),t&&t(e);},r=()=>{let e=document.querySelector("body");if(!e)return console.error("body not found");let t=function(e,t=200){let n;return (...a)=>{clearTimeout(n),n=setTimeout((()=>e(...a)),t);}}(a,100);new MutationObserver(t).observe(e,{childList:!0,subtree:!0});};["interactive","complete"].includes(document.readyState)?r():window.addEventListener("DOMContentLoaded",r),setInterval(a,3e3),a();})(),"https://app.truffle.vip"!==window.location.origin&&"https://app.truffle.vip"!==window.location.origin||(window._truffleVersion="4.7.1");
