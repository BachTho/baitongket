	$(".searchbtn").click(function(){
		$(this).toggleClass("bg-info");
		$(".fas").toggleClass("color-white");
		$(".input").focus().toggleClass("active-width").val('');
		$(".header-contact").toggleClass("jquery-search")
	});
  //noi cuthe
	$(".carousel").owlCarousel({
		margin: 20,
		loop: true,
		autoplay: true,
		autoplayTimeout: 1000,
		autoplayHoverPause: true,

		responsive: {
			0:{
				items:1,
				nav: false
			},
			768:{
				items:2,
				nav: false
			},
			992:{
				items:4,
				nav: false
			}
		},
	});

	$(function(){
		// slide
		$('.slider_content').slick({
			prevArrow:'.arrow_prev',
			nextArrow:'.arrow_next',
		});
	// slide category2
	$('.slider_content2').slick({
		prevArrow:'.arrow_prev2',
		nextArrow:'.arrow_next2',
	});
		// slide category3
		$('.slider_content3').slick({
			prevArrow:'.arrow_prev3',
			nextArrow:'.arrow_next3',
		});
		// slide category4
		$('.slider_content4').slick({
			prevArrow:'.arrow_prev4',
			nextArrow:'.arrow_next4',
		});
		// slide category5
		$('.slider_content5').slick({
			prevArrow:'.arrow_prev5',
			nextArrow:'.arrow_next5',
		});
		// slide category1
		$('.slider_content1').slick({
			prevArrow:'.arrow_prev1',
			nextArrow:'.arrow_next1',
		});
		// slide category6
		$('.slider_content6').slick({
			prevArrow:'.arrow_prev6',
			nextArrow:'.arrow_next6',
		});
		// slide category7
		$('.slider_content7').slick({
			prevArrow:'.arrow_prev7',
			nextArrow:'.arrow_next7',
		});
		// slide category8
		$('.slider_content8').slick({
			prevArrow:'.arrow_prev8',
			nextArrow:'.arrow_next8',
		});
		// slide category9
		$('.slider_content9').slick({
			prevArrow:'.arrow_prev9',
			nextArrow:'.arrow_next9',
		});
		// slide category10
		$('.slider_content10').slick({
			prevArrow:'.arrow_prev10',
			nextArrow:'.arrow_next10',
		});
		// slide category11
		$('.slider_content11').slick({
			prevArrow:'.arrow_prev11',
			nextArrow:'.arrow_next11',
		});
		// slide category12
		$('.slider_content12').slick({
			prevArrow:'.arrow_prev12',
			nextArrow:'.arrow_next12',
		});

// dong laptopban
		'use strict';
		var $projects = $('.projects');
		$projects.isotope({
			itemSelector: '.item',
			layoutMode: 'fitRows'
		});

		$('ul.filters > li').on('click', function(e){

			e.preventDefault();

			var filter = $(this).attr('data-filter');

			$('ul.filters > li').removeClass('active');
			$(this).addClass('active');

			$projects.isotope({filter: filter});

		});

		$('.card').mouseenter(function(){

			$(this).find('.card-overlay').css({'top': '-100%'});
			$(this).find('.card-hover').css({'top':'0'});

		}).mouseleave(function(){

			$(this).find('.card-overlay').css({'top': '0'});
			$(this).find('.card-hover').css({'top':'100%'});

		});
// price
$( "#slider-range" ).slider({
	range: true,
	min: 0,
	max: 1500,
	values: [ 75, 1300 ],
	slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	}
});
$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	" - $" + $( "#slider-range" ).slider( "values", 1 ) );
});


	$(document).ready(function () {
		var plus = '<i class="color-orther fa fa-plus" aria-hidden="true"></i>';
		var minus = '<i class="color-orther fa fa-minus" aria-hidden="true"></i>';
            // Dòng 1
            // hiện lorem
            $('#lorem1').hide();
            $('#button1').click(function () {
            	if ($('#button1').html() == minus) {
            		$('#button1').html(plus);
            	} else {
            		$('#button1').html(minus);
            	}
            	$('#lorem1').slideToggle();
            });
        });

	// backtotop
	$('#back-to-top').hide();
    $(window).on('scroll', function(){
        if($(this).scrollTop() >= 600){
            $('#back-to-top').fadeIn();
        }else {
            $('#back-to-top').fadeOut();
        }
    })
    $('#back-to-top').on('click', function(){
        $('html,body').animate({
            "scrollTop" : 0,
        },2000)
    })
