let table=document.querySelector("tbody");const getCrypto=()=>{let t=new XMLHttpRequest;t.open("GET","https://api.coinlore.net/api/tickers/"),t.addEventListener("readystatechange",(()=>{if(t.readyState===XMLHttpRequest.DONE&&200===t.status){let e=JSON.parse(t.responseText);for(coin of(table.innerHTML="",e.data)){let t=document.createElement("tr");formatCrypto(coin,t),table.appendChild(t)}}else t.readyState===XMLHttpRequest.DONE&&200!==t.status&&alert(`Could not complete request\nCode: ${t.status}\n${t.statusText}`)})),t.send(null)},formatCrypto=(t,e)=>{let n=document.createElement("td");n.textContent=t.rank;let a=document.createElement("span");a.textContent=t.symbol;let o=document.createElement("td");o.textContent=`${t.name}`;let d=document.createElement("td");d.textContent=`$${thousandsSeparator(parseFloat(t.price_usd))}`;let r=document.createElement("td");r.textContent=`${t.percent_change_1h}%`,r=changePercent(r);let l=document.createElement("td");l.textContent=`${t.percent_change_24h}%`,l=changePercent(l);let p=document.createElement("td");p.textContent=`${t.percent_change_7d}%`,p=changePercent(p);let s=document.createElement("td");s.textContent=`$${thousandsSeparator(parseFloat(t.market_cap_usd).toFixed(0))}`;let c=document.createElement("td");c.textContent=`$${thousandsSeparator(parseFloat(t.volume24).toFixed(0))}`;let C=document.createElement("td");C.textContent=`${thousandsSeparator(parseFloat(t.csupply).toFixed(0))} `+a.textContent,e.appendChild(n),e.appendChild(o),e.appendChild(d),e.appendChild(r),e.appendChild(l),e.appendChild(p),e.appendChild(s),e.appendChild(c),e.appendChild(C)},changePercent=t=>parseFloat(t.textContent)>0?(t.textContent=`▲${t.textContent}`,t.classList.add("positive"),t):parseFloat(t.textContent)<0?(t.textContent=`▼${t.textContent}`,t.classList.add("negative"),t):t,thousandsSeparator=t=>{let e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")};getCrypto(),setInterval((()=>{getCrypto()}),3e4);
//# sourceMappingURL=index.e1b0ee11.js.map