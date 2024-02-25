import{a as l,S as f}from"./assets/vendor-3cfff7f0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const u="https://pixabay.com/api/",p="33796051-1e422d07d8c9fc912bc2a7eb4",d="per_page=40&image_type=photo&orientation=horyzontal&safesearch=true";class m{constructor(){this.page=1,this.search=""}getImage(){const r=`${u}?key=${p}&q=${this.search}&page=${this.page}&${d}`;return l.get(r).data}resetPage(){this.page=1}}function g({webformatURL:t,largeImageURL:r,tags:s,likes:n,views:e,comments:o,downloads:i}){return`<div class="photo-card">
  <a class = "gallery__link" href="${r}">
  <img src="${t}" alt="${s}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      ${n}
    </p>
    <p class="info-item">
      <b>Views</b>
      ${e}
    </p>
    <p class="info-item">
      <b>Comments</b>
      ${o}
    </p>
    <p class="info-item">
      <b>Downloads</b>
      ${i}
    </p>
  </div>
  </a>
</div>`}const h=document.getElementById("search-form"),a=document.querySelector(".gallery"),c=new m;h.addEventListener("submit",y);function y(t){t.preventDefault();const r=t.target,s=r.elements.searchQuery.value.trim();c.search=s,s!==""&&(c.resetPage(),$(),b(),r.reset())}function b(){try{const r=c.getImage().hits;if(r.length===0)throw new Error("Data not found.");const s=r.reduce((n,e)=>g(e)+n,"");L(s)}catch(t){v(t)}}function L(t){a.insertAdjacentHTML("beforeend",t),w.refresh()}function $(){a.innerHTML=""}function v(t){console.error(t)}const w=new f(".gallery a");
//# sourceMappingURL=commonHelpers.js.map
