(()=>{"use strict";document.addEventListener("asbplayer-get-synced-data",(async()=>{const e={error:"",basename:"",subtitles:[]};if(!ApiClient)return e.error="ApiClient is undefined",document.dispatchEvent(new CustomEvent("asbplayer-synced-data",{detail:e}));const t=ApiClient?._deviceId,a=ApiClient?._userAuthInfo.AccessToken;await fetch("/Sessions?api_key="+a+"&IsPlaying=True&DeviceId="+t).then((e=>e.json())).then((t=>{var n=t[0],s=n.PlayState.MediaSourceId,i=n.NowPlayingItem;e.basename=i.FileName;const d=[];i.MediaStreams.filter((e=>e.IsTextSubtitleStream)).forEach((e=>{var t="/Videos/"+i.Id+"/"+s+"/Subtitles/"+e.Index+"/Stream."+e.Codec+"?api_key="+a;d.push({label:e.DisplayTitle,language:e.Language,url:t,extension:e.Codec})})),e.subtitles=d,document.dispatchEvent(new CustomEvent("asbplayer-synced-data",{detail:e}))}))}),!1)})();