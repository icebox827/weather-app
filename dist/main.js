(()=>{"use strict";!function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("header"),e=document.createElement("nav"),n=document.createElement("h1");return e.classList.add("navbar"),n.innerHTML="UHM Weather Forecast",e.appendChild(n),t.appendChild(e),t}()),t.appendChild(function(){const t=document.createElement("main");t.classList.add("main"),t.setAttribute("id","main");const e=document.createElement("form");e.setAttribute("id","myForm");const n=document.createElement("label"),a=document.createElement("input"),i=document.createElement("button");return n.setAttribute("for","City"),n.classList.add("form-label"),a.setAttribute("type","text"),a.setAttribute("id","cityInput"),a.setAttribute("name","City"),a.setAttribute("placeholder","Please enter the name of a city."),i.setAttribute("id","button"),i.setAttribute("type","submit"),i.setAttribute("value","Search"),i.classList.add("submit","btn-primary"),n.innerHTML="<h2>City name</h2>",a.innerHTML='<i class="fa fa-search" aria-hidden="true"></i>',i.innerHTML="Search",t.appendChild(e),e.appendChild(n),e.appendChild(a),e.appendChild(i),t}()),t.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");e.innerHTML="Copyright © 2021 Denis Lafontant";const n=document.createElement("a");n.href="https://github.com/icebox827";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),t.appendChild(e),t.appendChild(n),t}())}()})();