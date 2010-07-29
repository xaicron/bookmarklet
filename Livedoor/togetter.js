javascript:
(function(d,h,l,i) {
function C(e,i,n,j,o,u) {
    o = {};
    for (i = 0; i < e.childNodes.length; i++) {
        n = e.childNodes[i];
        if (n.nodeName.toUpperCase() === 'H4') {
            o.tweet = n.innerHTML;
        }
        else if (n.nodeName.toUpperCase() === 'H5') {
            for (j = 0; j < n.childNodes.length; j++) {
                if (n.childNodes[j].nodeName.toUpperCase() === 'A') {
                    o.href = n.childNodes[j].href;
                    break;
                }
            }
        }
        if (o.tweet && o.href) break;
    }
    
    u = o.href.replace(new RegExp('http://twitter.com/([^/]+)/.*'), '$1');
    return(
          '<div class="twitter_timeline">'
        + '<a href="' + o.href + '" target="_blank">'
        + '<img src="http://api.dan.co.jp/twicon/' + u + '/normal" class="left" />'
        + '</a>'
        + '<p class="left">' + u + ': ' + o.tweet + '</p>'
        + '<br class="twitter_timeline_bottom" />'
        + "</div>\n"
    );
}

h = '';
l = d.getElementsByClassName('list_body');
for (i = 0; i < l.length; i++) { h += C(l[i]) }
alert(h);
})(document);
