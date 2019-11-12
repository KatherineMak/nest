window.onscroll = function showToTop() {
    var toTop = $('.to-top').get(0);
    if(window.pageYOffset > 500) {
        toTop.classList.add("to-top-show");
    } else {
        toTop.classList.remove("to-top-show");
    }

    var header = $('.header').get(0);
    if(window.pageYOffset > 400) {
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
    }
};

$(function() {

    $("#defaultOpen").get(0).click();

    // select

    $('.select').selectric();

    // menu

    $(".menu-toggle").click(function(){
        $(".menu").toggleClass("is-active");
    });

    $(".btn-close").click(function(){
        $(".menu").toggleClass("is-active");
    });

    // go to top

    $(".to-top").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    $(".banner__btn").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    // poster frame click event
    $(document).on('click','.js-videoPoster',function(ev) {
        ev.preventDefault();
        var $poster = $(this);
        var $wrapper = $poster.closest('.js-videoWrapper');
        videoPlay($wrapper);
    });

// play the targeted video (and hide the poster frame)
    function videoPlay($wrapper) {
        var $iframe = $wrapper.find('.js-videoIframe');
        var src = $iframe.data('src');
        // hide poster
        $wrapper.addClass('videoWrapperActive');
        // add iframe src in, starting the video
        $iframe.attr('src',src);
    }

// stop the targeted/all videos (and re-instate the poster frames)
    function videoStop($wrapper) {
        // if we're stopping all videos on page
        if (!$wrapper) {
            var $wrapper = $('.js-videoWrapper');
            var $iframe = $('.js-videoIframe');
            // if we're stopping a particular video
        } else {
            var $iframe = $wrapper.find('.js-videoIframe');
        }
        // reveal poster
        $wrapper.removeClass('videoWrapperActive');
        // remove youtube link, stopping the video from playing in the background
        $iframe.attr('src','');
    }

});