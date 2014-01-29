/* Get the cookie values om nom nom */
function getValueFromCookie(b) {
    var a, c, d, e = document.cookie.split(";");
    for (a = 0; a < e.length; a++)
        if (c = e[a].substr(0, e[a].indexOf("=")), d = e[a].substr(e[a].indexOf("=") + 1), c = c.replace(/^\s+|\s+$/g, ""), c == b) return unescape(d)
}

/* Encapsulating code instead of just letting it lay about */
function init() {
	$('#setupSearch').focus();
}

init();