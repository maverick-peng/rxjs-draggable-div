import{f as i,s as d,t as u,a as p}from"./vendor.6bf5d223.js";const b=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};b();const c=document.querySelector("#map"),l=document.querySelector("#target"),v=document.querySelector("#reset"),f=.01,Y=()=>{const s=i(c,"touchstart",{passive:!0}).pipe(d(t=>{const e={x:t.touches[0].pageX,y:t.touches[0].pageY};c.classList.add("map__cursor--cross");const r=y(l);if(t.touches.length===2){const n=S(t),L=g(l);return i(c,"touchmove",{passive:!0}).pipe(u(m=>{const _=S(m);console.log(m.touches),x(L*(_/n),l)}),p(i(c,"touchend",{passive:!0}).pipe(u(()=>c.classList.remove("map__cursor--cross")))))}return i(c,"touchmove",{passive:!0}).pipe(u(n=>{h({x:r.x+n.touches[0].pageX-e.x,y:r.y+n.touches[0].pageY-e.y},l)}),p(i(c,"touchend",{passive:!0}).pipe(u(()=>c.classList.remove("map__cursor--cross")))))})),o=i(c,"mousedown").pipe(d(t=>{const e={x:t.clientX,y:t.clientY},r=y(l);return c.classList.add("map__cursor--cross"),i(c,"mousemove").pipe(u(n=>{console.log({x:n.clientX,y:n.clientY}),h({x:r.x+n.clientX-e.x,y:r.y+n.clientY-e.y},l)}),p(i(c,"mouseup").pipe(u(()=>c.classList.remove("map__cursor--cross")))))})),a=i(c,"wheel",{passive:!0}).pipe(u(t=>{const e=g(l);x(t.deltaY>0?e+f:e-f,l)}));X()?s.subscribe():o.subscribe(),a.subscribe(),v.addEventListener("click",()=>{l.style.transform=""})},y=s=>{let o=0,a=0;if(s.style.transform){const[t,e]=[...s.style.transform.matchAll(/-?\d+\.?\d*/g)];if(t&&e)return{x:+t[0],y:+e[0]}}return{x:o,y:a}},h=(s,o)=>{const a=`translate(${s.x}px, ${s.y}px)`,t=o.style.transform.replace(/translate\(\S+\s\S+\)/,"").trim();o.style.transform=a+" "+t},g=s=>{let o=1;return s.style.transform.indexOf("scale")>=0?+s.style.transform.replace(/translate\(\S+\s\S+\)\s?/,"").match(/\d\.?\d*/)[0]:o},x=(s,o)=>{const a=o.style.transform.replace(/scale\(\d\.?\d*\)/,"").trim(),t=`scale(${s})`;o.style.transform=a+" "+t};function X(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function S(s){return Math.hypot(s.touches[0].pageX-s.touches[1].pageX,s.touches[0].pageY-s.touches[1].pageY)}Y();
