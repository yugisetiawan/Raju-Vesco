/*==================================================
                    Service
===================================================*/
$(function () {
	// animate on scroll 
	new WOW().init();
});
/*==================================================
                    Work
===================================================*/
$(function () {

	$("#work").magnificPopup({
		delegate: "a",
		type: "image",
		gallery: {
			enabled: true
		}
	});

});
/*==================================================
                    TEAM
===================================================*/
$(function () {

	$("#team-members").owlCarousel({
		item: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
	});
});
/*==================================================
                    Testimonial
===================================================*/
$(function () {

	$("#customers-testimonials").owlCarousel({
		item: 1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
	});
});
/*==================================================
                    Counter Stats
===================================================*/
$(function () {
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});

});
/*==================================================
                    Client
===================================================*/
$(function () {

	$("#clients-list").owlCarousel({
		item: 6,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
	});
});