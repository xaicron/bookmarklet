(function(d) {
    var $ = function(id) { return d.getElementById(id) };
    
    var uid = TRACKING_ID || 'xaicron-22';
    var func_make_uri = (function(asin, uid) {
        return 'http://www.amazon.co.jp/o/ASIN/' + asin + '/' + uid + '/';
    });
    var pu = func_make_uri($('ASIN').value, uid);
    var pt = $('btAsinTitle').textContent;
    var pi = (function(e) {
        var src = e.src.replace(/_?AA\d+_?/, '').replace(/_?SL\d+/, 'SL170');
        if (!src.match('SL170')) {
            src = src.replace(/_?(\.\w+)$/, '_SL170$1');
        }
        return {
            'src' : src,
            'alt' : (e.alt || 'product_img'),
        };
    })($('original-main-image'));
    
    var su = (function() {
        var le;
        (function(e) {
            for (var i = 0; i < e.childNodes.length; i++) {
                c = e.childNodes[i];
                if (c.className && c.className.match(/swSprite/)) {
                    var mat = c.className.match(/s_star_(\d_\d)/);
                    if (mat) {
                        le = mat[1].replace(/_/, '-');
                        return;
                    }
                }
                else if (c.childNodes.length) {
                    arguments.callee(c);
                }
            }
        })(d.getElementsByTagName('form')[1]);
        if (le) {
            return {
                src : 'http://g-images.amazon.com/images/G/01/detail/stars-' + le + '.gif',
                alt : 'star',
            };
        }
    })();
    
    var st = [];
    (function(e) {
        for (var i = 0; i < e.childNodes.length; i++) {
            c = e.childNodes[i];
            console.log(c);
            if (c.nodeName === 'A') {
                st.push(c.innerText);
            }
            else if (c.id && c.id.match('contributorContainer')) {
                return;
            }
            
            if (c.childNodes.length) {
                arguments.callee(c);
            }
        }
    })(d.getElementsByClassName('subTitle')[0] || d.getElementsByClassName('parseasinTitle')[0].parentNode);
    
    var re = [];
    (function(e) {
        for (var i = 0; i < e.childNodes.length; i++) {
            c = e.childNodes[i];
            if (c.className === 'shoveler-cell') {
                re.push(c);
            }
            
            if (c.childNodes.length) {
                arguments.callee(c);
            }
        }
    })(d.getElementsByClassName('shoveler-content')[0]);
    
    var re_list = [];
    for (var i = 0; i < re.length; i++) {
        if (re_list.length >= 3) { break }
        var dt = {};
        (function(e) {
            for (var j = 0; j < e.childNodes.length; j++ ) {
                c = e.childNodes[j];
                if (c.nodeName === 'A') {
                    var res = c.href.match(/\/dp\/(\w+)\/ref=/);
                    if (res) {
                        dt['href'] = func_make_uri(res[1], uid);
                    }
                }
                else if (c.nodeName === 'IMG') {
                    if (c.src.match(/no-img-sm|comingsoon/)) { return }
                    dt['img'] = {
                        'src' : c.src.replace(/_?SS\d+_?/, '').replace(/_?SL\d+_?/, '_SL100'),
                        'alt' : (c.alt || 'related_img'),
                    };
                }
                
                if (c.childNodes.length) {
                    arguments.callee(c);
                }
            }
        })(re[i]);
        if (dt['img']) { re_list.push(dt); }
    }
    
    var data = {
        name : 'div',
        attr : {
            class : 'amazon_product',
        },
        child : [],
    };
    
    data['child'].push({
        name : 'div',
        attr : {
            class : 'image',
        },
        child : [
            {
                name : 'a',
                attr : {
                    href : pu,
                },
                child : [
                    {
                        name : 'img',
                        attr : {
                            src : pi['src'],
                            alt : pi['alt'],
                        },
                    },
                ],
            },
        ],
    });
    
    data['child'].push({
        name : 'div',
        attr : {
            class :'content',
        },
        child : [],
    });
    
    data['child'][data['child'].length - 1]['child'].push({
        name : 'p',
        child : [
            {
                name : 'a',
                attr : {
                    href : pu,
                },
                text : pt,
            },
        ],
    });
    
    data['child'][data['child'].length - 1]['child'].push({
        name : 'p',
        text : st.join(', '),
    });
    
    if (su) {
        data['child'][data['child'].length - 1]['child'].push({
            name : 'p',
            child : [
                {
                    name : 'strong',
                    text : 'おすすめ平均',
                },
                {
                    name : 'img',
                    attr : {
                        src : su['src'],
                        alt : su['alt'],
                    },
                },
            ],
        });
    }
    
    data['child'][data['child'].length - 1]['child'].push({
        name : 'div',
        attr : {
            class : 'related',
        },
        child : [],
    });
    
    var deep_data = data['child'][data['child'].length - 1]['child'];
    for (var i = 0; i < re_list.length; i++ ) {
        var o = re_list[i];
        deep_data[deep_data.length - 1]['child'].push({
            name : 'a',
            attr : {
                href : o['href'],
            },
            child : [
                {
                    name : 'img',
                    attr : {
                        src : o['img']['src'],
                        alt : o['img']['alt'],
                    },
                },
            ],
        });
    }
    
    var doms = xUtil.json2dom(d.createElement('div'), [data]);
    
    alert( doms.innerHTML.replace(/></g, ">\n<").replace(/(<img[^>]+)>/g, '$1 />').replace(/\n/g, '') );
})(document);
