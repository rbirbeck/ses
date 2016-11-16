function init() {
    var colors = ['FFFAFA', 'FFDDBF', 'FFEFBF', 'FFFABF', 'FFFFBF', 'EAFFBF'];
    var colorsLength = colors.length;
    var cIndex = 0;
    var prettyLogContainer = jQuery('pre').parent();
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
            lines[i] = '<div style="background-color:#' + colors[cIndex] + ';"><pre>' + lines[i] + '\n';
            cIndex = incrementCIndex(cIndex, colorsLength);
        } else if (lines[i].indexOf('|METHOD_EXIT') !== -1)  {
            cIndex = decrementCIndex(cIndex, colorsLength);
            lines[i] = lines[i] + '</pre></div>'
        } else if (lines[i].indexOf('|USER_DEBUG|') !== -1 || lines[i].indexOf('|SOQL_EXECUTE') !== -1)  {
            lines[i] = '<b>' + lines[i] + '</b>\n'
        } else {
            lines[i] = lines[i] + '\n';
        } 
    }

    jQuery(prettyLogContainer).css({
        'white-space': 'pre',
        'font-family': 'monospace'
    }).append('<link rel="stylesheet" type="text/css" href="#" />');

    prettyLogContainer.addClass('prettyLog');
    prettyLogContainer.append(lines.join(''));

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
