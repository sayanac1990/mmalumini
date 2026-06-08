(function($) {	
	"use strict";

    //Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
	}

	if ($('preloader-close').length) {
        $('.preloader-close').on("click", function(){
            $('.loader-wrap').delay(200).fadeOut(500);
        });
    }
    //End Hide Loading Box (Preloader)

    //Update Header Style and Scroll to Top
    function headerStyle() {
        if($('.main_header').length){
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main_header');
            var scrollLink = $('.scroll-top');
            if (windowpos >= 150) {
                siteHeader.addClass('fixed_header');
                scrollLink.addClass('open');
            } else {
                siteHeader.removeClass('fixed_header');
                scrollLink.removeClass('open');
            }
        }
    }
    headerStyle();

    //Submenu Dropdown Toggle
    if($('.main_header li.dropdown ul').length){
        $('.main_header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="flaticon-right-chevron"></i></div>');
    }

    //Mobile Nav Hide Show
    if($('.mobile-menu').length){
        var mobileMenuContent = $('.main_header .menu_area .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
        $('.sticky_header .main-menu').append(mobileMenuContent);        
        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(500);
        });
        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('.megamenu').slideToggle(900);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });
        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });
    }

	//Banner Three Carousel
	if ($('.banner-three-carousel').length) {
		$('.banner-three-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 1000,
			autoplay: 6000,
			navText: [ '<i class="fa-solid fa-angles-left"></i>', '<i class="fa-solid fa-angles-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}

	// clients_carousel
	if ($('.clients_carousel').length) {
		$('.clients_carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			smartSpeed: 3000,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},			
				1200:{
					items:5
				}
			}
		});    		
	}

	// single_item_carousel
	if ($('.single_item_carousel').length) {
		$('.single_item_carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			smartSpeed: 3000,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},			
				1200:{
					items:1
				}
			}
		});    		
	}

	// two_item_carousel
	if ($('.two_item_carousel').length) {
		$('.two_item_carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 3000,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},			
				1200:{
					items:2
				}
			}
		});    		
	}

	// three_item_carousel
	if ($('.three_item_carousel').length) {
		$('.three_item_carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 3000,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},			
				1200:{
					items:3
				}
			}
		});    		
	}

	// Four Item Carousel
	if ($('.four_item_carousel').length) {
		$('.four_item_carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 3000,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},			
				1200:{
					items:4
				}
			}
		});    		
	}

	// Five Item Carousel
	if ($('.five_item_carousel').length) {
		$('.five_item_carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			smartSpeed: 3000,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1200:{
					items:4
				},			
				1400:{
					items:5
				}
			}
		});    		
	}

	//Fact Counter + Text Count
	if($('.count_box').length){
		$('.count_box').appear(function(){	
			var $t = $(this),
				n = $t.find(".count_text").attr("data-stop"),
				r = parseInt($t.find(".count_text").attr("data-speed"), 10);				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count_text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count_text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count_text").text(this.countNum);
					}
				});
			}			
		},{accY: 0});
	}

    //Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}

	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}

	//nice select
	$(document).ready(function() {
		$('select:not(.ignore)').niceSelect();
	});

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	// Countdown Timer
	if ($('.countdown').length) {
	    $('.countdown').countdown('2023/08/07', function (event) {
	        var $this = $(this).html(event.strftime('' + '<div class="counter_column"><div class="count">%D</div><span>Days</span></div><span class="clone">:</span>' + '<div class="counter_column"><div class="count">%H</div><span>Hours</span></div><span class="clone">:</span>' + '<div class="counter_column"><div class="count">%M</div><span>Minutes</span></div><span class="clone">:</span>' + '<div class="counter_column"><div class="count">%S</div><span>Seconds</span></div>'));
	    });
	}


    // Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);	
		});
	}
    // End Scroll to a Specific Div

    // Elements Animation
	if($('.wow').length){
		var wow = new WOW({
		mobile:       false
		});
		wow.init();
	}

    // End Elements Animation

	/*	=========================================================================
	When document is Ready, do
	========================================================================== */

	$(window).on('ready', function () {
		
	});

	/* ==========================================================================
    When document is Scrollig, do
    ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});  
    
    /* ==========================================================================
    When document is loaded, do
    ========================================================================== */
	
	$(window).on('load', function() {

	});
	

})(window.jQuery);