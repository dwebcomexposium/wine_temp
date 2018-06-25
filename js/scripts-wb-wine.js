;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);
	var scrolledY = 0;

	//Animation Sections
	var $animated = $('.animated');

	var winHeight = $win.height();
	var winWidth = $win.width();
	var winScroll = $win.scrollTop();

	function animateElements() {
		winScroll = $win.scrollTop();

		if ( $animated.length === 0 ) {
			return;
		}			
	};
	
	function animate(winST) {
		$('.animate').each(function(){
			var $this = $(this);

			if (winST + ($win.outerHeight() / 1.3) > $this.offset().top) {
				$this.addClass('animated');
			} else if (winST + ($win.outerHeight() / 2) < $this.offset().top) {
				$this.removeClass('animated');
			}		
		});
	}

	$doc.ready(function() {
		$('.btn-down').on('click', function(e) {
			e.preventDefault();

			var targetOT = $( $(this).parent().next() ).offset().top

			$('html, body').animate({
				scrollTop: targetOT
			})
		})

		//Countdown
		$('#countdown').countdown($('#countdown').data('time')).on('update.countdown', function(event) {
			var $this = $(this).html(event.strftime(''
					    + '<div><strong>%D</strong> <h6>jour%!d</h6></div>'
					    + '<div><strong>%H</strong> <h6>heure%!d</h6></div>'
					    + '<div><strong>%M</strong> <h6>minute%!d</h6></div>'
				))
		});

	});

	$win.on('load', function() {
		animateElements();
		animate(scrolledY);
		
	}).on('scroll', function() {
		scrolledY = $win.scrollTop();
		animate(scrolledY);
	})

	
})(jQuery, window, document);
