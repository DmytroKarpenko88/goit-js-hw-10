function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequireabb0;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequireabb0=r);var i=r("7Y9D8");const u={form:document.querySelector("form.form"),btnSubmit:document.querySelector('button[type="submit"]')};function l(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}u.form.addEventListener("submit",(function(t){t.preventDefault();const{delay:o,step:n,amount:r}=[...u.form.elements].filter((e=>e.hasAttribute("name"))).reduce(((e,t)=>({...e,[t.getAttribute("name")]:Number(t.value)})),{});for(let t=1;t<=r;t++){l(t,1===t?o:o+(t-1)*n).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}))}t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.d394c83d.js.map
