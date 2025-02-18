;(function() {
	function animateCourseCards() {
		var animated = false;
	
		function isInViewport($element) {
			var elementTop = $element.offset().top;
			var elementBottom = elementTop + $element.outerHeight();
	
			var viewportTop = $(window).scrollTop();
			var viewportBottom = viewportTop + $(window).height();
	
			// Calculate how much of the element is visible.
			var visiblePart = Math.max(0, Math.min(elementBottom, viewportBottom) - Math.max(elementTop, viewportTop));
			var elementHeight = $element.outerHeight();
	
			// Check if the visible portion is at least 30% of the element's height.
			return (visiblePart / elementHeight) >= 0.3;
		}
	
		function checkAnimation() {
			const $section = $('.section-courses');
			if (!animated && $section.length && isInViewport($section)) {
				animated = true;
				$('.courses-listing-item').each(function(index) {
					const $card = $(this);
					setTimeout(function(){
						$card.addClass('animate');
					}, index * 300);
				});
			}
		}
	
		// Bind the scroll event and check on page load
		$(window).on('scroll', checkAnimation);
		checkAnimation();
	}
	
	function handleFAQSection() {
		$(".faq-answer").hide();
	
		$(".faq-item").click(function () {
			const answer = $(this).find(".faq-answer");
			answer.slideToggle();
			$(this).toggleClass("open");
		});
	}
	
	function init() {
		$(".heading-group > *").wrap("<div class='text-wrapper'></div>")
		setTimeout(()=> {
		$(".text-wrapper > *").addClass("show")
		}, 500);
	
		handleFAQSection()
		animateCourseCards()
	}
	
	$(document).ready(function () {
		init()
	});	
}());
