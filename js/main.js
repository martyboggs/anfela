---
---

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
{% if site.github != nil %}
//	ga('create', 'UA-52138306-3', 'auto');
//	ga('send', 'pageview');
{% endif %}

WebFont.load({
	google: {
		families: ['Raleway:200,400', 'Bree Serif', 'Roboto:400,700']
	}
});

setTimeout(function () {
	var html = $('html');
	if (html.hasClass('wf-loading')) {
		html.removeClass('wf-loading');
	}
}, 3000);

$(function () {
});

