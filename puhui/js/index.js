

$(function () {


    W = window.innerWidth;
    H = window.innerHeight;


    if (W >= H) {
        W = H * (750 / 1342);
        $("html").css("font-size", W * 0.1 + 'px');


    } else {
        $("html").css("font-size", W * 0.1 + 'px');

    }

});

