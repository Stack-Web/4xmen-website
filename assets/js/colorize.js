$(function () {
    $("#preview").mousemove(function (e) {
        $('#active').width(e.pageX);
    });
});