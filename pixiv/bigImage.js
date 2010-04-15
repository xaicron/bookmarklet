// ==UserScript==
// @name           Pixiv Big Image
// @namespace      http://blog.livedoor.jp/xaicron/
// @description    always big illust view of pixiv
// @include        http://www.pixiv.net/*
// ==/UserScript==
javascript:
(function (d) {
    var style = d.body.appendChild(d.createElement('style'));
    var sandboxSheet = style.sheet || style.styleSheet;
    
    function addCssRule(selector, property) {
        try {
            sandboxSheet.insertRule(selector + '{' + property + '}', (sandboxSheet.cssRules || sandboxSheet.rules).length);
        }
        catch(e) {
            sandboxSheet.addRule(selector, property);
        }
    };
    
    addCssRule('#wrapper', 'width: auto');
    addCssRule('#content', 'width: auto');
    addCssRule('#content2', 'width: auto');
    addCssRule('#content3', 'width: auto');
    
    function ChangeBigImage(elem) {
        for (var i = 0; i < elem.childNodes.length; i++) {
            child = elem.childNodes[i];
            if (child.nodeName === 'IMG') {
                child.src = child.src.replace(/_s(\.[^.]+)$/, '$1');
            }
            else if (child.childNodes.length) {
                ChangeBigImage(child);
            }
        }
    };
    
    var illustList = [
        'illust_c3',
        'illust_c4',
        'llust_c4_bs',
        'illust_c4_comike',
        'illust_c4_200',
        'illust_c5'
    ];
    
    for (var i = 0; i < illustList.length; i++) {
        var tagId = illustList[i];
        addCssRule('#' + tagId + "\u0020" + 'li', 'width:auto; float:none; text-align: left;');
        var elem = d.getElementById(tagId);
        if (!elem) { continue }
        ChangeBigImage(elem);
    }
})(document);
