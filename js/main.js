$(function() {
    $('a').click(function(e) {
        if($(this).attr('href').length == 0) {
            e.preventDefault();
        }
    })
    $('img').mousedown(function(e) {
        e.preventDefault();
    })

    // detect device change start
    var isMobile, isMobileFirst, widthPC;
    if(window.innerWidth > 1024) {
        widthPC = true;
    } else {
        widthPC = false;
    }
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobileFirst = true;
    } else {
        isMobileFirst = false;
    }
    $(window).resize(function() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            isMobile = true;
        } else {
            isMobile = false;
        }
        if(isMobileFirst != isMobile) {
            location.reload();
        }
        if(widthPC && window.innerWidth <= 1024) {
            location.reload();
        } else if(!widthPC && window.innerWidth > 1024) {
            location.reload();
        }
    })
    // detect device change end

    // scroll start
    var position = $(window).scrollTop();
    $(document).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll - position > 10 && scroll > 15) {
            // scroll down effect
        } else if(position - scroll > 10) {
            // scroll up effect
        }
        position = scroll;
    })
    // scroll end

    // detect platform for iOS
    // var isMacLike = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

    // detect platform for IE
    // function isIE() {
    //     ua = navigator.userAgent;
    //     var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;			
    //     return is_ie; 
    // }
    // if (isIE()){
        // effect
    // }
})