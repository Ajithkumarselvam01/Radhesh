$(function() {
	$('.slider-blog').owlCarousel({
		loop: true,
		margin: 10,
		nav: true, // Enable navigation to make navText visible
		autoplay: false,
		dots: true,
		navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			990: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});
});
$(function() {
	// Owl Carousel
	var owl = $(".testimonial-content-wrapper");
	owl.owlCarousel({
		items: 1,
		margin: 10,
		loop: true,
		nav: true,
		dots: true,
		navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']
	});
});
$(document).ready(function() {
	// Auto-expand the first FAQ item
	$(".faqs-container .faq-singular:first").addClass("active").children(".faq-answer").slideDown();
	// FAQ click toggle functionality
	$(".faq-question").on("click", function() {
		const parent = $(this).parent();
		if(parent.hasClass("active")) {
			parent.removeClass("active").children(".faq-answer").slideUp();
		} else {
			$(".faq-singular.active .faq-answer").slideUp();
			$(".faq-singular").removeClass("active");
			parent.addClass("active").children(".faq-answer").slideDown();
		}
	});
});