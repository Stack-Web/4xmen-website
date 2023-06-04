let activePreview = false;
$(function () {
    // $("#preview").mousemove(function (e) {
    //     $('#active').width(e.pageX - 115);
    // });
    $("#preview").mousedown(function (e) {
        // $('#active').width(e.pageX - 115);
        activePreview = true;
    });
    $("#preview").mouseup(function (e) {
        // $('#active').width(e.pageX - 115);
        activePreview = false;
    });

    $("#preview").mousemove(function (e) {
        if (activePreview){
            let r = document.querySelector('#preview').getBoundingClientRect();
            let x = e.pageX - r.left;
            $('#active').width(x);
            $("#preview-handle").css('left',(x)+'px');
        }
    });


});