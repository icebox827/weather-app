(()=>{"use strict";function e(e){const t=document.createElement("card"),n=document.createElement("h3"),d=document.createElement("h4"),a=document.createElement("h6"),i=document.createElement("h6"),c=document.createElement("h6"),r=document.createElement("h6"),m=document.createElement("h6"),l=document.createElement("h6"),p=document.createElement("h6"),s=document.createElement("h6"),u=document.createElement("h6"),o=document.createElement("h6"),h=document.createElement("h6"),C=document.createElement("h6");return n.innerHTML=`${e.name}`,d.innerHTML=`${e.country}`,a.innerHTML=`${e.temp}`,i.innerHTML=`${e.weather}`,c.innerHTML=`${e.maxTemp}`,r.innerHTML=`${e.minTemp}`,m.innerHTML=`${e.pressure}`,l.innerHTML=`${e.humidity}`,p.innerHTML=`${e.visibility}`,s.innerHTML=`${e.windSpeed}`,u.innerHTML=`${e.winDeg}`,o.innerHTML=`${e.cloud}`,h.innerHTML=`${e.sunRise}`,C.innerHTML=`${e.sunSet}`,t.classList.add("card"),t.appendChild(n),t.appendChild(d),t.appendChild(a),t.appendChild(i),t.appendChild(c),t.appendChild(r),t.appendChild(m),t.appendChild(l),t.appendChild(p),t.appendChild(s),t.appendChild(u),t.appendChild(o),t.appendChild(h),t.appendChild(C),t}!function(){const t=document.getElementById("content");t.appendChild(function(){const e=document.createElement("header"),t=document.createElement("nav"),n=document.createElement("h1");return t.classList.add("navbar"),n.innerHTML='UHM Weather Forecast<i class="fas fa-cloud-sun"></i>',t.appendChild(n),e.appendChild(t),e}()),t.appendChild(function(){const t=document.createElement("main");t.classList.add("main"),t.setAttribute("id","main");const n=document.createElement("form");n.setAttribute("id","myForm");const d=document.createElement("label"),a=document.createElement("input"),i=document.createElement("button");return d.setAttribute("for","City"),d.classList.add("form-label"),a.setAttribute("type","text"),a.setAttribute("id","cityInput"),a.setAttribute("name","City"),a.setAttribute("placeholder","Please enter the name of a city."),i.setAttribute("id","button"),i.setAttribute("type","submit"),i.setAttribute("value","Search"),i.classList.add("submit","btn-primary"),d.innerHTML="<h2>City name</h2>",a.innerHTML='<i class="fa fa-search" aria-hidden="true"></i>',i.innerHTML="Search",i.addEventListener("click",e),t.appendChild(n),n.appendChild(d),n.appendChild(a),n.appendChild(i),t}()),t.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.innerHTML="Copyright © 2021 Denis Lafontant";const n=document.createElement("a");n.href="https://github.com/icebox827";const d=document.createElement("i");return d.classList.add("fab"),d.classList.add("fa-github"),n.appendChild(d),e.appendChild(t),e.appendChild(n),e}())}()})();