(()=>{"use strict";function e(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function t(e,t,n){e.classList.add(t),n&&setTimeout((n=>e.classList.remove(t)),n)}function n(t,n,r,a=!0,s=!0,o){t.childNodes[1]&&t.removeChild(t.childNodes[1]);const i=document.createElement("div");i.setAttribute("class","graphcontainer");const c=+parseFloat(97/(n+r)).toFixed(5),l=document.createElement("div");l.setAttribute("class","graph");let d=document.createElement("div");d.setAttribute("class","graph__axis");let u=document.createElement("div");u.setAttribute("class","graph__axis__plot");let m=c*n;u.style.height=m+"%";let b=document.createElement("img");if(b.setAttribute("class","graph__icon"),b.setAttribute("src","/src/assets/images/question.svg"),b.setAttribute("alt","question mark"),u.append(b),s){let t=document.createElement("div");t.setAttribute("class","limiternext");let a=e(1,r);t.setAttribute("data-val",n+a),t.style.bottom=(n+a)*c+"%",d.append(t)}if(a){let t=document.createElement("div");t.setAttribute("class","limiterprev");let a=e(1,r);t.setAttribute("data-val",n-a),t.style.bottom=(n-a)*c+"%",d.append(t)}if(o){let e=document.createElement("button");e.setAttribute("class","btn-reveal"),e.setAttribute("id",o),e.innerHTML="Reveal 🎊",i.append(e)}d.append(u),l.append(d),i.append(l),t.append(i)}function r(){const e=document.querySelector(".loadholder");e.classList.add("cover"),e.childNodes[0].classList.add("lds-hourglass")}function a(){const e=document.querySelector(".loadholder");e.classList.remove("cover"),e.childNodes[0].classList.remove("lds-hourglass")}function s(e,t){const n=Object.keys(e).sort((()=>Math.random()-.5))[0],r=function(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*t),r=e[t];e[t]=e[n],e[n]=r}return e}(Object.keys(e[n]))[0],a=`/src/assets/images/imgSource/${r}.webp`;return t.src=a,e[n][r]}const o={squirrel:{"squirrel-1":10,"squirrel-2":6,"squirrel-3":7,"squirrel-4":8,"squirrel-5":9,"squirrel-6":16,"squirrel-7":17,"squirrel-8":18,"squirrel-9":19,"squirrel-10":20,"squirrel-11":19},cat:{"cat-1":4,"cat-2":8,"cat-3":10,"cat-4":5,"cat-5":17,"cat-6":11,"cat-7":12,"cat-8":18,"cat-9":15,"cat-10":13,"cat-11":14,"cat-12":10,"cat-13":12},other:{"panda-1":18,"panda-2":19,"puppy-1":7,"puppy-2":8,"puppy-3":15,"puppy-4":9},baby:{"baby-1":6,"baby-2":8,"baby-3":16,"baby-4":13,"baby-5":7,"baby-6":11,"baby-7":5,"baby-8":4,"baby-9":5,"baby-10":19}},i=document.querySelectorAll(".collapsible");i.forEach((e=>{e.addEventListener("click",(function(){this.classList.toggle("collapsible--expanded")}))}));const c=document.querySelector(".heroimage");let l=s(o,c);r(),c.onload=function(){a()};const d=document.querySelector(".hints-one"),u=document.querySelector(".hints-two");n(d,l,5,!1,!0,"btn-revealOne"),n(u,l,5,!0,!0,"btn-revealTwo");let m=document.querySelector("#btn-revealOne"),b=document.querySelector("#btn-revealTwo");const p=document.querySelector(".score"),h=document.querySelector(".highScore"),y=document.querySelector(".btn-playAgain"),v=document.querySelector("input.input-client"),g=document.querySelector(".btn-check"),f=document.querySelector(".message");function L(e){this.style.visibility="hidden",this.nextSibling.classList.add("filter-none"),p.innerHTML=""+(+p.innerHTML-e),t(p,"shake",3e3)}let q,k;m.addEventListener("click",(function(){L.call(this,5)})),b.addEventListener("click",(function(){L.call(this,7)})),v.onkeyup=e=>{13===e.keyCode&&(e.preventDefault(),g.click())},g.addEventListener("click",(function(){l===v.valueAsNumber?(document.body.style.background="#60b347",function(e){const t=document.body.clientWidth,n=document.querySelector("canvas");function r(e,t){setTimeout((t=>{e.clear(),n.classList.add("display-none")}),t)}if(n.classList.remove("display-none"),n.setAttribute("id","my-canvas"),t>=1200){const t=new ConfettiGenerator({target:"my-canvas",max:"200",size:"1.5",animate:!0,props:["square"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:"25",rotate:!0,width:"2294",height:"857",start_from_edge:!1,respawn:!0});t.render(),r(t,e)}else if(t>=992){const t=new ConfettiGenerator({target:"my-canvas",max:"100",size:"2",animate:!0,props:["square"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:"40",rotate:!0,width:"992",height:"847",start_from_edge:!0,respawn:!0});t.render(),r(t,e)}else if(t>=768){const t=new ConfettiGenerator({target:"my-canvas",max:"90",size:"1.5",animate:!0,props:["square"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:"40",rotate:!0,width:"768",height:"847",start_from_edge:!0,respawn:!0});t.render(),r(t,e)}else if(t>=576){const t=new ConfettiGenerator({target:"my-canvas",max:"60",size:"1.5",animate:!0,props:["square"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:"40",rotate:!0,width:"576",height:"847",start_from_edge:!0,respawn:!0});t.render(),r(t,e)}else{const t=new ConfettiGenerator({target:"my-canvas",max:"55",size:"1",animate:!0,props:["square"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:"35",rotate:!0,width:"400",height:"847",start_from_edge:!0,respawn:!0});t.render(),r(t,e)}}(8e3),h.innerHTML=+h.innerHTML<+p.innerHTML?p.innerHTML:h.innerHTML,t(h,"blink",3e3),f.innerHTML="Congratulations, you guess it right 🎊🎊🎊",t(f,"scale-in-bottom",3e3),m.disabled=!0,b.disabled=!0,q&&k&&(q.disabled=!0,k.disabled=!0),t(y,"bounce-in-left",2e4)):l>v.valueAsNumber&&v.valueAsNumber>0?(p.innerHTML=""+(+p.innerHTML-3),t(p,"shake",3e3),f.innerHTML="Am i so little ? 🙄🙄",t(f,"scale-in-bottom",3e3)):l<v.valueAsNumber&&v.valueAsNumber>0?(p.innerHTML=""+(+p.innerHTML-3),t(p,"shake",3e3),f.innerHTML="Too high, you hurt me. 😡😡",t(f,"scale-in-bottom",3e3)):(f.innerHTML="Insert valid value. 🙏🙏🙏",t(f,"scale-in-bottom",3e3))})),y.addEventListener("click",(function(){p.innerHTML="100",f.innerHTML="start guessing 🎃🎃🎃.",document.body.style.background="#586ba4",l=s(o,c),r(),c.onload=()=>a(),n(d,l,4,!1,!0,"Btn-revealOne"),n(u,l,4,!0,!0,"Btn-revealTwo"),q=document.getElementById("Btn-revealOne"),k=document.getElementById("Btn-revealTwo"),q.addEventListener("click",(function(){L.call(this,5)})),k.addEventListener("click",(function(){L.call(this,7)})),i.forEach((e=>{e.classList.remove("collapsible--expanded")})),v.value=""}))})();