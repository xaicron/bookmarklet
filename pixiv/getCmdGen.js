javascript:(function(d,i,p){
	d=document.getElementById('profile').childNodes[1].textContent.replace(/^[\s\n]|[\s\n]$/mg,'');
	i=location.href.match(/id=(\d+)/)[1];
	p=prompt('page?', 1);
	prompt('command', 'pixiv_get.pl -s -i ' + i + ' -d ' + d + ' -p ' + p);
})();
