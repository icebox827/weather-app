(()=>{"use strict";!function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("header"),t=document.createElement("nav"),n=document.createElement("h1");return t.classList.add("navbar"),n.innerHTML='UHM Weather Forecast<i class="fas fa-cloud-sun"></i>',t.appendChild(n),e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("main");e.classList.add("main"),e.setAttribute("id","main");const t=document.createElement("form");t.setAttribute("id","myForm");const n=document.createElement("label"),d=document.createElement("input"),a=document.createElement("button");return n.setAttribute("for","City"),n.classList.add("form-label"),d.setAttribute("type","text"),d.setAttribute("id","cityInput"),d.setAttribute("name","City"),d.setAttribute("placeholder","Please enter the name of a city."),a.setAttribute("id","button"),a.setAttribute("type","submit"),a.setAttribute("value","Search"),a.classList.add("submit","btn-primary"),n.innerHTML="<h2>City name</h2>",d.innerHTML='<i class="fa fa-search" aria-hidden="true"></i>',a.innerHTML="Search",a.addEventListener("click",(function(){return function(e){const t=document.createElement("card"),n=document.createElement("h3"),d=document.createElement("h4"),a=document.createElement("h6"),i=document.createElement("h6"),c=document.createElement("h6"),r=document.createElement("h6"),m=document.createElement("h6"),l=document.createElement("h6"),u=document.createElement("h6"),p=document.createElement("h6"),s=document.createElement("h6"),o=document.createElement("h6"),h=document.createElement("h6"),C=document.createElement("h6");return n.innerHTML=`${e.name}`,d.innerHTML=`${e.country}`,a.innerHTML=`${e.temp}`,i.innerHTML=`${e.weather}`,c.innerHTML=`${e.maxTemp}`,r.innerHTML=`${e.minTemp}`,m.innerHTML=`${e.pressure}`,l.innerHTML=`${e.humidity}`,u.innerHTML=`${e.visibility}`,p.innerHTML=`${e.windSpeed}`,s.innerHTML=`${e.winDeg}`,o.innerHTML=`${e.cloud}`,h.innerHTML=`${e.sunRise}`,C.innerHTML=`${e.sunSet}`,t.classList.add("card"),t.appendChild(n),t.appendChild(d),t.appendChild(a),t.appendChild(i),t.appendChild(c),t.appendChild(r),t.appendChild(m),t.appendChild(l),t.appendChild(u),t.appendChild(p),t.appendChild(s),t.appendChild(o),t.appendChild(h),t.appendChild(C),t}(myData)})),e.appendChild(t),t.appendChild(n),t.appendChild(d),t.appendChild(a),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.innerHTML="Copyright © 2021 Denis Lafontant";const n=document.createElement("a");n.href="https://github.com/icebox827";const d=document.createElement("i");return d.classList.add("fab"),d.classList.add("fa-github"),n.appendChild(d),e.appendChild(t),e.appendChild(n),e}())}()})();