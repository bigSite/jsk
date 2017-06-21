$(document).ready(function(){
		var NextArrow = $('#next');
		var PrevArrow = $('#prev');
		var dots = $('#dots');

 	 	$('.slick-slider').slick({
    		autoplay: false,
    		autoplaySpeed:6000,
    		arrows: true,
    		dots: true,
    		nextArrow: NextArrow,
    		prevArrow: PrevArrow,
    		appendDots: dots
 		 });
	});