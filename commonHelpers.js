import{a as g,S as y,i as n}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function m(r,t){const s="https://pixabay.com/api/",c="45308830-5ee60b80cbe440cd28e45e3ae";try{return(await g.get(s,{params:{key:c,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}catch(e){iziToast.error({position:"topRight",message:`${e}`})}}const L=new y(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery-list");function p(r){let t=r.hits.map(s=>`<div class="image-frame"><a href="${s.largeImageURL}"><img class="image" src="${s.webformatURL}" alt="${s.tags}" /></a><div class ="text-wraper"><div class="text-block"><h5>likes</h5><p>${s.likes}</p></div><div class="text-block"><h5>views</h5><p>${s.views}</p></div><div class="text-block"><h5>comments</h5><p>${s.comments}</p></div><div class="text-block"><h5>downloads</h5><p>${s.downloads}</p></div></div></div>`).join("");u.insertAdjacentHTML("beforeend",t),L.refresh()}function v(){u.innerHTML=""}function b(){const r=u.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}const w=document.querySelector(".gallery-form"),S=document.querySelector(".input-for-gallery"),i=document.querySelector(".loader"),a=document.querySelector(".load"),h=document.querySelector(".bottom");let l=1,f="";w.addEventListener("submit",x);a.addEventListener("click",$);function x(r){v(),r.preventDefault(),i.classList.remove("hiden"),h.classList.remove("show-text");let t=S.value.trim();if(f=t,l=1,t===""){n.error({position:"topRight",message:"Please fill the input"}),i.classList.add("hiden");return}m(`${t}`,l).then(async s=>{if(s.total===0){n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),i.classList.add("hiden");return}else await p(s),a.classList.remove("hiden");s.hits.length<15&&(a.classList.add("hiden"),h.classList.add("show-text"),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),i.classList.add("hiden")})}function $(r){l+=1,i.classList.remove("hiden"),a.classList.add("hiden"),m(`${f}`,l).then(t=>{t.hits.length<15?(a.classList.add("hidden"),h.classList.add("show-text"),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),i.classList.add("hiden"),a.classList.add("hiden")):a.classList.remove("hiden"),p(t),b(),i.classList.add("hiden")}).catch(t=>{n.error({position:"topRight",message:t.message}),i.classList.add("hiden")})}
//# sourceMappingURL=commonHelpers.js.map
