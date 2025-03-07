$(document).ready(function(){
	"use strict";

	$('#navbar-placeholder').load('header.html', function(response, status, xhr) {
        if (status == "error") {
            console.error("Error loading the navbar:", xhr.statusText);
        }
    });
    
    $('#footer-placeholder').load('footer.html', function(response, status, xhr) {

		// 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} 
			else {
				$('.return-to-top').fadeOut();
			}
		});

		$('.return-to-top').on('click',function(){
			$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
		
        if (status == "error") {
            console.error("Error loading the footer:", xhr.statusText);
        }
    });
	
	// 2. Smooth Scroll spy
		
	$('.header-area').sticky({
		topSpacing:0
	});
	
	//=============

	$('li.smooth-menu a').bind("click", function(event) {
		event.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 0
		}, 1200,'easeInOutExpo');
	});
	
	$('body').scrollspy({
		target:'.navbar-collapse',
		offset:0
	});

	// 3. Progress-bar
	
	var dataToggleTooTip = $('[data-toggle="tooltip"]');
	var progressBar = $(".progress-bar");
	if (progressBar.length) {
		progressBar.appear(function () {
			dataToggleTooTip.tooltip({
				trigger: 'manual'
			}).tooltip('show');
			progressBar.each(function () {
				var each_bar_width = $(this).attr('aria-valuenow');
				$(this).width(each_bar_width + '%');
			});
		});
	}

    // 4. welcome animation support

        $(window).load(function(){
        	$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        });

});	
	