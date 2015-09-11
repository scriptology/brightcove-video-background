// video banner

var config = {
	timeout: false,
	templateContent: '<iframe src="//preview-players.brightcove.net/v1/accounts/4447531199001/players/1797b3fa-13b7-4303-abf7-72f4a806ed36/preview/embeds/default/master/index.html" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;"></iframe>',
	templateContentUrl: false,
	bgImg: false,
	includeCss: false,
	modalWidth: "750px",
	modalHeight: "500px"
}

var VideoBanner = {
	config: config,
	init: function() {
		console.log('video banner start init');
		var win = (window.self === window.top) ? window : window.parent;

		var wrap = document.createElement('div');
		wrap.className = "wrap_video_background";
		wrap.style.display = 'block';
		wrap.style.width = "100%";
		wrap.style.height = "100%";
		wrap.style.position = "fixed";
		wrap.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
		wrap.style.top = "0";
		wrap.style.left = "0";
		wrap.style.zIndex = '-1';

		wrap.innerHTML = this.config.templateContent;

		win.document.body.appendChild(wrap);

		// include css
		if(this.config.includeCss) {
			var head  = win.document.getElementsByTagName('head')[0];
			var cssLink = document.createElement("link");
			cssLink.href = this.config.includeCss;
			cssLink.rel = "stylesheet";
			cssLink.type = "text/css";
			head.appendChild(cssLink);
		}

	}
}

VideoBanner.init();
