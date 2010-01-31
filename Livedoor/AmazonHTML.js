javascript:
(function (d, u, s) {
    TRACKING_ID = 'xaicron-22';
    s = d.createElement('script');
    s.type = 'text/javascript';
    s.charset = 'utf-8';
    s.src = u;
    s.onload = (function () {
        xUtil.scriptLoader([
            'http://xaicron.web.fc2.com/lang/js/lib/json2dom.js',
            'http://xaicron.web.fc2.com/lang/js/misc/amazon/associate.js',
        ]);
    });
    d.body.appendChild(s);
})(document, 'http://xaicron.web.fc2.com/lang/js/lib/xUtil.js');
