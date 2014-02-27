function init() {
    if (('#scriptInput').length) {
        $('#mainBlock').css('width', '100%');
        $("#scriptInput").css({
            'width': '100%',
            'height': '500px'
        }).parents('table').css('width', '100%');
    }
}

init();