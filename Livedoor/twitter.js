(function(u,lr) {
    lr = confirm('Left?') 'left' : 'right';
    u = location.href.replace(new RegExp('http://twitter.com/([^/]+)/.*'), '$1');
    alert(
          '<div class="twitter_timeline">'
        + '<a href="' + location.href + '" target="_blank">'
        + '<img src="http://api.dan.co.jp/twicon/' + u + '/normal" class="' + lr + '" />'
        + '</a>'
        + '<p class="' + lr + '">' + u + ': ' + document.getElementsByClassName('entry-content')[0].innerHTML + '</p>'
        + '<br class="twitter_timeline_bottom" />'
        + '</div>'
    );
})();
