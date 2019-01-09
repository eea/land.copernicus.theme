/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'FontAwesome\'">' + entity + '</span>' + html;
	}
	var icons = {
		'fa-plus': '&#xf067;',
		'fa-close': '&#xf00d;',
		'fa-remove': '&#xf00d;',
		'fa-times': '&#xf00d;',
		'fa-arrow-left': '&#xf060;',
		'fa-arrow-right': '&#xf061;',
		'fa-arrow-up': '&#xf062;',
		'fa-arrow-down': '&#xf063;',
		'fa-user-circle': '&#xe900;',
		'fa-twitter': '&#xe901;',
		'fa-slideshare': '&#xe902;',
		'fa-search': '&#xe903;',
		'fa-print': '&#xe904;',
		'fa-map-marker': '&#xe905;',
		'fa-instagram': '&#xe906;',
		'fa-home': '&#xe907;',
		'fa-facebook-square': '&#xe908;',
		'fa-envelope': '&#xe909;',
		'fa-download': '&#xe90a;',
		'fa-arrow-up1': '&#xe90b;',
		'fa-arrow-circle-right': '&#xe90c;',
		'fa-chevron-right': '&#xe90d;',
		'fa-chevron-left': '&#xe90e;',
		'fa-enlarge': '&#xe989;',
		'fa-shrink': '&#xe98a;',
		'fa-clock-o': '&#xf017;',
		'fa-question-circle': '&#xf059;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/fa-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
