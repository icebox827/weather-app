(()=>{"use strict";const e=async e=>{const t=`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=537fc8e3a71f25b7c88777911464f3c4`,n=await fetch(t,{mode:"cors"}).then((e=>e.json()));return console.log(n),console.log(n.name),console.log(n.sys.country),console.log(n.weather[0].description),console.log(n.main.temp),console.log(n.main.humidity),console.log(n.main.pressure),n},t=e=>{const t=document.getElementById("city"),n=document.getElementById("country"),a=document.getElementById("weather"),i=document.getElementById("temp"),c=document.getElementById("humidity"),d=document.getElementById("pressure");t.innerHTML=e.name,n.innerHTML=e.sys.country,a.innerHTML=e.weather[0].description,i.innerHTML=e.main.temp,c.innerHTML=e.main.humidity,d.innerHTML=e.main.pressure};!async function(){const n=document.getElementById("content"),a=await e("Quebec");n.appendChild(function(){const e=document.createElement("header"),t=document.createElement("nav"),n=document.createElement("h1");return t.classList.add("navbar"),n.innerHTML='UHM Weather Forecast<i class="fas fa-cloud-sun"></i>',t.appendChild(n),e.appendChild(t),e}()),n.appendChild(function(){const n=document.createElement("main");n.classList.add("main"),n.setAttribute("id","main");const a=document.createElement("form");a.setAttribute("id","myForm");const i=document.createElement("label"),c=document.createElement("input"),d=document.createElement("button");i.setAttribute("for","City"),i.classList.add("form-label"),c.setAttribute("type","text"),c.setAttribute("id","cityInput"),c.setAttribute("name","City"),c.setAttribute("placeholder","Enter the name of a city."),d.setAttribute("id","button"),d.setAttribute("type","submit"),d.setAttribute("value","Search"),d.classList.add("submit","btn-primary"),i.innerHTML="<h2>City name</h2>",c.innerHTML='<i class="fa fa-search" aria-hidden="true"></i>',d.innerHTML="Search location";const r=document.createElement("card"),o=document.createElement("h3"),s=document.createElement("h4"),m=document.createElement("h5"),l=document.createElement("h5"),u=document.createElement("h5"),p=document.createElement("h5");return r.classList.add("card"),o.setAttribute("id","city"),s.setAttribute("id","country"),m.setAttribute("id","weather"),l.setAttribute("id","temp"),u.setAttribute("id","humidity"),p.setAttribute("id","pressure"),r.appendChild(o),r.appendChild(s),r.appendChild(m),r.appendChild(l),r.appendChild(u),r.appendChild(p),a.appendChild(i),a.appendChild(c),a.appendChild(d),n.appendChild(a),n.appendChild(r),d.addEventListener("click",(async n=>{if(n.preventDefault()," "===c.value)return;const a=await e(c.value||"Quebec");t(a)})),n}()),t(a),n.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.innerHTML="Copyright © 2021 Denis Lafontant";const n=document.createElement("a");n.href="https://github.com/icebox827";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),e.appendChild(t),e.appendChild(n),e}())}()})();