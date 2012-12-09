if (typeof 'xUtil' === 'undefined' || !xUtil) {
    var xUtil = {};
}

xUtil.object = function (o) {
    var F = function() {};
    F.prototype = o.prototype;
    return new F;
};

xUtil.namespace = function (str) {
    var ns = str.split('.');
    var here = window;
    for (var i = 0, l = ns.length; i < l; i++){
        if (typeof(here[ns[i]]) == 'undefined') here[ns[i]] = {};
        here = here[ns[i]];
    }
    return here;
};

xUtil.scriptLoader = function (scripts) {
    (function () {
        var u = scripts.shift();
        if (!u) { return }
        
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.charset = 'utf-8';
        s.src = u;
        s.onload = arguments.callee;
        s.onreadystatechange = (function () {
            if (s.readyState === 'loaded' || s.readyState === 'complete') {
                s.onload();
                s.onreadystatechange = s.onload = null;
            }
        });
        document.body.appendChild(s);
    })();
};
