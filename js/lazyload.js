$(function() {
    var loadImages = lazyload();
    loadImages();
    window.addEventListener('scroll', throttle(loadImages, 500, 1000), false);
    // pc or mb
    if(window.innerWidth <= 1024) {
        $('[data-lazy-background]').each(function() {
            $(this).data('lazy-background', $(this).data('lazy-background-m'));
        })
        $('[data-lazy-img]').each(function() {
            $(this).data('lazy-img', $(this).data('lazy-img-m'));
        })
    }
})
function throttle(fn, delay, atleast) {
    var timeout = null,
    startTime = new Date();
    return function() {
        var curTime = new Date();
        clearTimeout(timeout);
        if(curTime - startTime >= atleast) {
            fn();
            startTime = curTime;
        } else {
            timeout = setTimeout(fn, delay);
        }
    }
}
function lazyload() {
    return function() {
        var seeHeight = document.documentElement.clientHeight;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        $('[data-lazy-background]').each(function() {
            if($(this).offset().top < seeHeight + scrollTop + window.innerHeight*0.5) {
                $(this).css('background', 'url('+$(this).data('lazy-background')+')')
            }
        });
        $('[data-lazy-img]').each(function() {
            if($(this).offset().top < seeHeight + scrollTop + window.innerHeight*0.5) {
                $(this).attr('src', $(this).data('lazy-img'))
            }
        });
    }
}