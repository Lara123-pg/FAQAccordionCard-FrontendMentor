import{j as c,r as d,R as p,a as f}from"./vendor.6b8f76a8.js";const h=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}};h();var g="/assets/bg-pattern-desktop.aeb92023.svg",b="/assets/illustration-box-desktop.4343519b.svg",x="/assets/illustration-woman-online-desktop.71f41c20.svg";var m="/assets/icon-arrow-down.e9ceb725.svg";const e=c.exports.jsx,r=c.exports.jsxs,y=c.exports.Fragment;function n(i){const[a,t]=d.exports.useState(!1);return r(y,{children:[r("article",{className:"questions",children:[r("div",{className:"question",children:[e("p",{className:`${a?"questionResponse":""}`,children:i.question}),a?e("img",{onClick:()=>t(!a),className:"arrowUp",src:m,alt:"\xCDcone de uma seta para cima"}):e("img",{onClick:()=>t(!a),src:m,alt:"\xCDcone de uma seta para baixo"})]}),a?e("p",{className:"response",children:i.response}):""]}),e("div",{className:"separator"})]})}function v(){return e("div",{className:"beforeCard",children:r("div",{className:"card",children:[r("aside",{className:"image",children:[e("img",{className:"background",src:g,alt:"Imagem da sombra da imagem box"}),e("img",{className:"box",src:b,alt:"Imagem de uma caixa ilustrativa"}),e("img",{className:"womanOnline",src:x,alt:"Imagem que cont\xE9m um computador com coment\xE1rios de usu\xE1rios que est\xE1 sendo analisando por uma mulher"})]}),r("main",{className:"faq",children:[e("h1",{children:"FAQ"}),e(n,{question:"How many team members can I invite?",response:"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."}),e(n,{question:"What is the maximum file upload size?",response:"No more than 2GB. All files in your account must fit your allotted storage space."}),e(n,{question:"How do I reset my password?",response:"Click \u201CForgot password\u201D from the login page or \u201CChange password\u201D from your profile page. A reset link will be emailed to you."}),e(n,{question:"Can I cancel my subscription?",response:"Yes! Send us a message and we\u2019ll process your request no questions asked."}),e(n,{question:"Do you provide additional support?",response:"Chat and email support is available 24/7. Phone lines are open during normal business hours."}),r("div",{className:"footer",children:["Challenge by ",e("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",children:"Frontend Mentor"}),". Coded by ",e("a",{href:"https://github.com/Lara123-pg",children:"Lara Fernanda"}),"."]})]})]})})}function w(){return e(v,{})}p.render(e(f.StrictMode,{children:e(w,{})}),document.getElementById("root"));