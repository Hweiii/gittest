$(function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    // scroll parallax start
    var thisOffsetTop = [];
    $('[data-scroll-index]').each(function(index) {
        if($(window).scrollTop() + $(window).height() > $(this).offset().top) {
            thisOffsetTop[index] = $(window).height() - $(window).scrollTop();
        } else {
            thisOffsetTop[index] = $(this).offset().top;
        }
    })
    // scroll parallax end
    
    $(document).scroll(function() {
        // scroll parallax start
        $('[data-scroll-index]').each(function(index) {
            if($(window).scrollTop() + $(window).height() > $(this).offset().top) {
                $(this).css('transform', 'translateY('+ (thisOffsetTop[index] - $(window).scrollTop())*$(this).data('scroll-index') +'px)')                
            }
        })
        // scroll parallax end

        // scroll show effect start
        $('[data-scroll-show-parent]').each(function() {
            if($(window).scrollTop() > $(this).offset().top - $(window).height()*0.75) {
                $(this).find('[data-scroll-show]').each(function() {
                    if($(this).data('scroll-show').length === 0) {
                        $(this).addClass('scrollShowActive');
                    } else {
                        setTimeout(function() {
                            $(this).addClass('scrollShowActive');
                        }.bind(this), $(this).data('scroll-show'))
                    }
                })
            }
        })
        $('[data-scroll-show]').each(function() {
            if($(this).closest('[data-scroll-show-parent]').length == 0) {
                if($(this).data('scroll-show').length === 0) {
                    $(this).addClass('scrollShowActive');
                } else {
                    setTimeout(function() {
                        $(this).addClass('scrollShowActive');
                    }.bind(this), $(this).data('scroll-show'))
                }
            }
        })
        // scroll show effect end
    })
})