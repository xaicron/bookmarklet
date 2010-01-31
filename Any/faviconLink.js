javascript:
(function() {
	var rtype = XPathResult.ORDERED_NODE_SNAPSHOT_TYPE;
	var title = document.evaluate(
		'//head/title',
		document, null, rtype, null
	).snapshotItem(0).innerHTML;
	
	var favicon = document.evaluate(
		'//head/link[@rel="shortcut icon" or @rel="icon"]',
		document, null, rtype, null
	).snapshotItem(0);
	
	if (favicon == null) {
		var documentRoot = RegExp("(https?://[^/]+/)");
		if (location.href.match(documentRoot)) {
			favicon = RegExp.$1 + "favicon.ico";
		}
	}
	
	else {
		favicon = favicon.href;
	}
	
	title = title.replace(/^\s+/, '').replace(/\s+$/, '');
	
	var linktag =
		'<p class="favicon">' +
			'<img src="' + favicon + '" alt="　" width="16" height="16" />' +
			'<a href="' + location.href + '">' + title + '</a>' +
			'<a href="http://b.hatena.ne.jp/entry/' + location.href + '">' +
				'<img src="http://b.hatena.ne.jp/entry/image/' + location.href + '" alt="はてブ" />' +
			'</a>' +
		'</p>';
	
	alert(linktag);
})();
