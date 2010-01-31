javascript:
(function (d,c,e,a,b,p,l,i) {
	function C(e,u,n,i) {
		for (i = 0; i < e[c].length; i++) {
			n = e[c][i];
			if (n.nodeName === 'IMG' && n.src.match('http://z2-ec2.images-amazon.com/images/P/')) {
				u = n.src.replace(/_SX\d+_SCLZ/, '_SCRM');
				break;
			}
			else if (n[c].length) {
				u = C(n,u);
				if (u) { return u }
			}
		}
		return u;
	};
	b = d[e]('div');
	l = b[a](d[e]('a'));
	p = l[a](d[e]('p'));
	i = l[a](d[e]('img'));
	l.href = p.innerHTML = i.src = i.alt = C(d.getElementById('zoomViewerDiv'));
	b.style.textAlign = 'center';
	d.getElementsByTagName('body')[0][a](b);
})(document,'childNodes','createElement','appendChild')
