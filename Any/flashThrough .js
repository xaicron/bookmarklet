javascript:(function(d,e,i,t,p){e=d.evaluate('//embed[@type="application/x-shockwave-flash"]',d,null,7,null);for(i=0;i<e.snapshotLength;i++){t=e.snapshotItem(i);t.setAttribute('wmode','opaque');p=t.parentNode;p.removeChild(t);p.insertBefore(t,t.nextSibling)}})(document)