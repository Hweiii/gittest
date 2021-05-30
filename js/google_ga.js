$(function() {
	$('[data-ga]').click(function() {
		console.log($(this).data('ga'))
		ga('send', 'event', 'Button', 'Click', $(this).data('ga'));
	})
	$(window).scroll(function() {
		$('[data-pv]').each(function() {
			if($(window).scrollTop() > $(this).offset().top && !$(this).hasClass('pvDone')) {
				$(this).addClass('pvDone');
				console.log($(this).data('pv'))
				ga('send', 'pageview', $(this).data('pv'));
			}
		})
		if($(window).scrollTop() + $(window).height() == $(document).height() && !$('[data-pv]').eq($('[data-pv]').length-1).hasClass('pvDone')) {
			$('[data-pv]').eq($('[data-pv]').length-1).addClass('pvDone');
			console.log($('[data-pv]').eq($('[data-pv]').length-1).data('pv'));
			ga('send', 'pageview', $('[data-pv]').eq($('[data-pv]').length-1).data('pv'));
		}
	})
})