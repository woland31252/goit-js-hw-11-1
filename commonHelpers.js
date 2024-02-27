import{i as a,S as l}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const u="https://pixabay.com/api/",f="33796051-1e422d07d8c9fc912bc2a7eb4",p="per_page=18&image_type=photo&orientation=horyzontal&safesearch=true";function m(r){const t=`${u}?key=${f}&q=${r}&${p}`;return fetch(t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function d({webformatURL:r,largeImageURL:t,tags:o,likes:s,views:e,comments:i,downloads:n}){return`<div class="photo-card">
  <a class = "gallery__link" href="${t}">
  <img src="${r}" alt="${o}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      ${s}
    </p>
    <p class="info-item">
      <b>Views</b>
      ${e}
    </p>
    <p class="info-item">
      <b>Comments</b>
      ${i}
    </p>
    <p class="info-item">
      <b>Downloads</b>
      ${n}
    </p>
  </div>
  </a>
</div>`}const g=document.getElementById("search-form"),c=document.querySelector(".gallery");g.addEventListener("submit",h);function h(r){r.preventDefault();let t="";const o=r.target;if(console.log(o),t=o.elements.searchQuery.value.trim(),t===""){a.info({messageSize:"16px",messageLineHeight:"24px",messageColor:"#FFFFFF",maxWidth:"432px",backgroundColor:"red",position:"topRight",titleSize:"24px",message:"Please formulate a request"});return}m(t).then(s=>y(s)).catch(s=>x(s)).finally(()=>o.reset()),L()}function y(r){const t=r.hits;if(t.length===0){a.info({messageSize:"16px",messageLineHeight:"24px",messageColor:"#FFFFFF",maxWidth:"432px",backgroundColor:"red",position:"topRight",titleSize:"24px",message:"Sorry, there are no images matching your search query. Please try again!"});return}else{const o=t.reduce((s,e)=>d(e)+s,"");b(o)}}function b(r){c.insertAdjacentHTML("beforeend",r),F.refresh()}function L(){c.innerHTML=""}function x(r){console.error(r)}const F=new l(".gallery a");
//# sourceMappingURL=commonHelpers.js.map
