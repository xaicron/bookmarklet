javascript:(function(l,u,m){
    u=document.getElementById('permalink').childNodes[0].href;
    m=u.match('\\?(.+)')[1];
    prompt(m,'<a href="'+u+'">'+m+'</a>');
})(location);
