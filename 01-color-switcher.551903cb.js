const t={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};let e=null;function n(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.btnStart.addEventListener("click",(function(t){t.currentTarget.disabled=!0,e=setInterval(n,1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(e),t.btnStart.disabled=!1}));
//# sourceMappingURL=01-color-switcher.551903cb.js.map
