javascript:(function(m){
    m=location.href.match('//[^/]+/[^/]+/([^/]+)')[1].replace(/-[\d.]+$/, '');
    prompt(m,'<a href="http://search.cpan.org/dist/'+m+'/">'+m.replace(/-/g,'::')+'</a>');
})();
