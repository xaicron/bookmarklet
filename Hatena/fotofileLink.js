javascript:(function(d,e,c,s,a,i,p){s=d.getElementById('foto-body').childNodes[1].src.replace(/\?\d+$/,'');p=d[e]('p');a=p[c](d[e]('a'));a.href=location.href;i=a[c](d[e]('img'));i.src=s;i.alt=a.href.match(/(\d+)$/)[1];alert(p.innerHTML)})(document,'createElement','appendChild');