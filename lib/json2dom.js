if (typeof 'xUtil' === 'undefined' || !xUtil) {
    var xUtil = {};
}

xUtil.json2dom  = function (p, d) {
    var reg = /^\[object HTML\w+Element\]$/;
    for (var i = 0; i < d.length; i++) {
        var dd = d[i];
        var dom;
        
        if (! typeof dd === 'object') {
            return;
        }
        
        if (Object.prototype.toString.call(dd).match(reg)) {
            dom = dd;
        }
        
        else if (dd.name) {
            if (typeof dd.name === 'string') {
                dom = document.createElement(dd.name);
            }
            else if (Object.prototype.toString.call(dd.name).match(reg)) {
                dom = dd.name;
            }
            
            if (dd.attr != null) {
                for (var key in dd.attr) {
                    dom.setAttribute(key, dd.attr[key]);
                }
            }
            if (dd.text != null) {
                dom.textContent = dd.text;
            }
            else if (dd.innerHTML != null) {
                dom.innerHTML = dd.innerHTML;
            }
            if (dd.child != null) {
                arguments.callee(dom, dd.child);
            }
        }
        
        p.appendChild(dom);
    }
    return p;
};
