function init() {
    var colors = ['000000', 'A10000', '1BA100', '26B6DE', '003EA1', '814AE0'];
    var colorsLength = colors.length;
    var cIndex = 0;
    var pre = jQuery('pre').text();
    jQuery('pre').remove();
    var shouldDecrement = false;
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };

    function escapeHtml(string) {
        return String(string).replace(/[&<>"'\/]/g, function (s) {
            return entityMap[s];
        });
    }

    pre = escapeHtml(pre);
    var lines = pre.split('\n');
    var length = lines.length;
    for (var i = 0; i < length; i++) {
        if (lines[i].indexOf('|METHOD_ENTRY') !== -1) {
            shouldDecrement = false;
            cIndex = incrementCIndex(cIndex, colorsLength);
            lines[i] = '<div style="color:#' + colors[cIndex] + ';padding-left:25px"><pre>' + lines[i] + '\n';
        } else if (lines[i].indexOf('|METHOD_EXIT') !== -1)  {
            cIndex = decrementCIndex(cIndex, colorsLength);
            lines[i] = lines[i] + '</pre></div>'
        } else {
            lines[i] = lines[i] + '\n';
        } 
    }

    jQuery('body').css('white-space', 'pre').append(lines.join(''));

    function incrementCIndex(current, len) {
        var result = current+1;
        if (result >= len) {
            result = result - len;
        }
        return result;
    }

    function decrementCIndex(current, len) {
        var result = current-1;
        if (result < 0) {
            result = result + len;
        }
        return result;
    }
}


init();