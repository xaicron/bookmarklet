javascript:
(function(d,u,n,k,s){
    c=function(o){prompt('bit.ly',o.results[u].shortUrl)};
    s=d.createElement('script');
    s.type='text/javascript';
    s.src='http://api.bit.ly/shorten?version=2.0.1&login='+n+'&apiKey='+k+'&callback=c&longUrl='+escape(u);
    d.body.appendChild(s);
})(document,location.href,'xaicron','R_18a240d7a82d51f43dd153d557c84384');
