(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const s={C:"piano_C.mp3","C-sharp":"piano_CSharp.mp3",D:"piano_D.mp3","D-sharp":"piano_DSharp.mp3",E:"piano_E.mp3",F:"piano_F.mp3","F-sharp":"piano_FSharp.mp3",G:"piano_G.mp3","G-sharp":"piano_GSharp.mp3",A:"piano_A.mp3","A-sharp":"piano_ASharp.mp3",B:"piano_B.mp3"},c=i=>{const o=`../public/sounds/${s[i.pitch]}`;fetch(o,{method:"HEAD"}).then(r=>{if(!r.ok)throw new Error(`Sound file not found: ${o}`);return new Audio(o).play()}).catch(r=>{console.error("Error playing sound - ",r),alert("Sorry, an error occurred while trying to play the sound. Please try again later.")})};document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".natural-key, .accidental-key").forEach(o=>{o.addEventListener("click",r=>{const n=r.currentTarget.id,t={type:o.classList.contains("natural-key")?"natural":"sharp",pitch:n,octave:4};c(t)})})});