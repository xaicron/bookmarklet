javascript:(function(d,e,c,r,a,i,u,b,p){r=d.createRange();a=d.getElementsByTagName('a');for(i=0;i<a.length;i++){u=a[i].href;if(u.match('jpe?g|gif|png|bmp')){b=d[e]('div');p=b[c](d[e]('img'));p.src=u;p.alt=i;r.setStartAfter(a[i]);r.insertNode(b)}}})(document,'createElement','appendChild')