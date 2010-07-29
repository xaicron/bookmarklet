javascript:(function(d,i,p){
    d=document.getElementsByClassName('f18b')[0].textContent.replace(/^[\s\n]|[\s\n]$/mg,'');
    i=location.href.match(/id=(\d+)/)[1];
    if(p=prompt('page?', 1)) {
        prompt('command', 'pixiv_get.pl -s -i ' + i + ' -d "' + d + '" -p ' + p);
    }
})();
