
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {

	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});

    /*
        Background slideshow
    */
    $('.top-content').backstretch("assets/img/backgrounds/001.jpg");
    $('.knowledge-container').backstretch("assets/img/backgrounds/002.jpg");
    $('.great-support-container').backstretch("assets/img/backgrounds/003.jpg");
    $('.more-knowledge-container').backstretch("assets/img/backgrounds/004.jpg");
    $('.how-it-works-container').backstretch("assets/img/backgrounds/005.jpg");
    $('.about-they-container').backstretch("assets/img/backgrounds/006.jpg");
    $('.about-us-container').backstretch("assets/img/backgrounds/007.jpg");

    $('.features-container').backstretch("assets/img/backgrounds/3.jpg");
    $('.more-features-container').backstretch("assets/img/backgrounds/4.jpg");
    $('.testimonials-container').backstretch("assets/img/backgrounds/6.jpg");
    $('.call-to-action-container').backstretch("assets/img/backgrounds/7.jpg");
    $('.about-us-action-container').backstretch("assets/img/backgrounds/8.jpg");


    /*
        Wow
    */
    new WOW().init();

});


jQuery(window).load(function() {

	/*
		Loader
	*/
	$(".loader-img").fadeOut();
	$(".loader").delay(1000).fadeOut("slow");

	/*
		Hidden images
	*/
	$(".testimonial-image img").attr("style", "width: auto !important; height: auto !important;");

});
