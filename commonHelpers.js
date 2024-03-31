import{i as l,S as u}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function p(a){const t={q:a,key:"43138861-aa01fee7d014e33c8f4078e7d",image_type:"photo",orientation:"horizontal",safesearch:!0};return fetch(`https://pixabay.com/api/?key=${t.key}&q=${t.q}&image_type=${t.image_type}&orientation=${t.orientation}&safesearch=${t.safesearch}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>o)}function i(){return document.querySelector(".search").value.trim()}function d(){const a=document.querySelector(".gallery"),t=document.querySelector(".loader"),o=i();p(o).then(n=>{t.style.display="block",n.hits.length===0?(t.style.display="none",l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})):setTimeout(()=>{const e=n.hits.map(r=>`<li class="gallery-item">
        <a class="image-link" href="${r.largeImageURL}">
          <img class="image" src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <ul class="about-image">
          <li class="likes">
            <span class="likes-title">Likes</span>
            <span class="likes-count">${r.likes}</span>
          </li>
          <li class="views">
            <span class="views-title">Views</span>
            <span class="views-count">${r.views}</span>
          </li>
          <li class="comments">
            <span class="comments-title">Comments</span>
            <span class="comments-count">${r.comments}</span>
          </li>
          <li class="downloads">
            <span class="downloads-title">Downloads</span>
            <span class="downloads-count">${r.downloads}</span>
          </li>
        </ul>
      </li>`).join("");t.style.display="none",a.insertAdjacentHTML("beforeend",e),new u(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh()},1e3)})}const c=document.querySelector(".search"),f=document.querySelector(".button"),m=document.querySelector(".gallery");function y(a){a.preventDefault(),i().length===0?l.error({message:"The field must be fullfield",position:"topRight"}):(m.innerHTML="",d(),c.value="")}c.addEventListener("input",i);f.addEventListener("click",y);
//# sourceMappingURL=commonHelpers.js.map
