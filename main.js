(()=>{"use strict";const e=(()=>{const e={};return{getData:async t=>{const n=`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=537fc8e3a71f25b7c88777911464f3c4`;console.log(n),console.log(t);const a=await fetch(n,{mode:"cors"});try{const t=await a.json();e.name=t.name,e.country=t.sys.country,e.temp=t.main.temp,e.weather=t.weather[0].descrption,e.maxTemp=t.main.temp_max,e.minTemp=t.main.temp_min,e.pressure=t.main.pressure,e.humidity=t.main.humidity,e.visibility=t.visibility,e.windSpeed=t.wind.speed,e.winDeg=t.wind.deg,e.cloud=t.cloud.all,e.sunRise=t.sys.sunrise,e.sunSet=t.sys.sunset}catch(e){if("404"===myJson.cod)return e}},myData:e}})();!function(){const t=document.getElementById("content");t.appendChild(function(){const e=document.createElement("header"),t=document.createElement("nav"),n=document.createElement("h1");return t.classList.add("navbar"),n.innerHTML='UHM Weather Forecast<i class="fas fa-cloud-sun"></i>',t.appendChild(n),e.appendChild(t),e}()),t.appendChild(function(){const t=document.createElement("main");t.classList.add("main"),t.setAttribute("id","main");const n=document.createElement("form");n.setAttribute("id","myForm");const a=document.createElement("label"),i=document.createElement("input"),d=document.createElement("button");return a.setAttribute("for","City"),a.classList.add("form-label"),i.setAttribute("type","text"),i.setAttribute("id","cityInput"),i.setAttribute("name","City"),i.setAttribute("placeholder","Please enter the name of a city."),d.setAttribute("id","button"),d.setAttribute("type","submit"),d.setAttribute("value","Search"),d.classList.add("submit","btn-primary"),a.innerHTML="<h2>City name</h2>",i.innerHTML='<i class="fa fa-search" aria-hidden="true"></i>',d.innerHTML="Search location",d.addEventListener("click",(async t=>{if(t.preventDefault()," "===i.value)return;(e=>{const t=document.createElement("card"),n=document.createElement("h3"),a=document.createElement("h4"),i=document.createElement("h6"),d=document.createElement("h6"),c=document.createElement("h6"),r=document.createElement("h6"),m=document.createElement("h6"),s=document.createElement("h6"),l=document.createElement("h6"),o=document.createElement("h6"),p=document.createElement("h6"),u=document.createElement("h6"),h=document.createElement("h6"),C=document.createElement("h6");n.innerHTML=`${e.name}`,a.innerHTML=`${e.country}`,i.innerHTML=`${e.temp}`,d.innerHTML=`${e.weather}`,c.innerHTML=`${e.maxTemp}`,r.innerHTML=`${e.minTemp}`,m.innerHTML=`${e.pressure}`,s.innerHTML=`${e.humidity}`,l.innerHTML=`${e.visibility}`,o.innerHTML=`${e.windSpeed}`,p.innerHTML=`${e.winDeg}`,u.innerHTML=`${e.cloud}`,h.innerHTML=`${e.sunRise}`,C.innerHTML=`${e.sunSet}`,t.classList.add("card"),t.appendChild(n),t.appendChild(a),t.appendChild(i),t.appendChild(d),t.appendChild(c),t.appendChild(r),t.appendChild(m),t.appendChild(s),t.appendChild(l),t.appendChild(o),t.appendChild(p),t.appendChild(u),t.appendChild(h),t.appendChild(C)})(await e.getData(i.value))})),t.appendChild(n),n.appendChild(a),n.appendChild(i),n.appendChild(d),t}()),t.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.innerHTML="Copyright © 2021 Denis Lafontant";const n=document.createElement("a");n.href="https://github.com/icebox827";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),e.appendChild(t),e.appendChild(n),e}())}()})();