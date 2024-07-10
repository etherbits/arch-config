import { r as r$1 } from './browser-polyfill-bbb70053.js';

var t=r$1.storage.local,a=[];r$1.storage.onChanged.addListener(((e,t)=>{if("local"===t)for(let[t,{newValue:l}]of Object.entries(e)){let[e,...r]=t.split("."),o=r.join(".");a.filter((t=>t.bucket===e&&t.key===o)).forEach((e=>e.callback(l)));}}));var l=async(e,a)=>{let l=`${e}.${a}`,{[l]:r}=await t.get(l);return r},r=async(e,a,l)=>{let r=`${e}.${a}`;await t.set({[r]:l});},o=(e,t,l)=>{let r={bucket:e,key:t,callback:l};return a.push(r),()=>{let e=a.indexOf(r);a.splice(e,1);}};

export { l, o, r };
