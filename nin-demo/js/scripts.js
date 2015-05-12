$(document).ready(function(){

/*  ==========================================================================
	Horizontal Accordion 
    ========================================================================== */

	function nextPrevArrow(){
		var firstStep  = $('#how div.step').first(),
			lastStep   = $('#how div.step:last-child'),
		    nextArrow  = $('a.next'),
		    prevArrow  = $('a.prev');

		lastStep.hasClass('is-open')  ? nextArrow.addClass('is-inactive-arrow') : nextArrow.removeClass('is-inactive-arrow');
		firstStep.hasClass('is-open') ? prevArrow.addClass('is-inactive-arrow') : prevArrow.removeClass('is-inactive-arrow');
	}

	function stepsToggle(clickTarget){

		if(!$('.step').is(':animated')){

			var target      = clickTarget,
			    siblings    = target.siblings('.step'),
			    tarCopy     = target.find('p.step-copy'),
			    sibCopy     = siblings.find('p.step-copy'),
			    tarTitle    = target.find('span.is-inactive-title'),
			    tarActTitle = target.find('span.is-active-title'),
			    sibTitle    = siblings.find('span.is-inactive-title'),
			    sibActTitle = siblings.find('span.is-active-title'),
			    tarActIcon  = target.find('.is-active-icon'),
			    tarInIcon   = target.find('.is-inactive-icon'),
			    sibActIcon  = siblings.find('.is-active-icon'),
			    sibInIcon   = siblings.find('.is-inactive-icon'),
			    tarBg       = target.find('.step-bg'),
			    sibBg       = siblings.find('.step-bg');

			function openWindow(target){
				target.animate({ 
					backgroundColor: '#FFFFFF',
					borderColor : '#D5D5D5',
					textAlign : 'left',
					width : '418px' 
				}, 400, function(){
					target.removeClass('is-closed').addClass('is-open');
					nextPrevArrow();
				});
			}

			function openChildren(target){
				tarInIcon.hide();
				tarActIcon.fadeIn(750);
				tarCopy.fadeIn(800);
				tarActTitle.hide();
				tarTitle.fadeIn(400);
				tarBg.delay(200).fadeIn(600);
			}

			function closeWindow(siblings){
				siblings.animate({ 
					backgroundColor: '#F1F1F1',
					borderColor : '#FFFFFF',
					textAlign : 'center',
					width : '161px' 
				}, 400);
				siblings.removeClass('is-open').addClass('is-closed');
			}

			function closeChildren(siblings){
				sibActIcon.hide();
				sibInIcon.fadeIn(800);
				sibCopy.hide();
				sibTitle.hide();
				sibActTitle.fadeIn(400);
				sibBg.hide();
			}
					
			if(siblings.hasClass('is-initial-open')){
				siblings.removeClass('is-initial-open');
			}

			openWindow(target);
			openChildren();
			closeWindow(siblings);
			closeChildren();
		}
	}

	$('.step').click(function(){
		var clickTarget = $(this);
		stepsToggle(clickTarget);
	});

	$('.prev').click(function(e){
		var clickTarget = $('.step.is-open').prev('.step.is-closed');
		stepsToggle(clickTarget);
		e.preventDefault();
	});

	$('.next').click(function(e){
		var clickTarget = $('.step.is-open').next('.step.is-closed');
		stepsToggle(clickTarget);
		e.preventDefault();
	});

/*  ==========================================================================
	More button scroll
    ========================================================================== */

     $('.more').click(function () {
         $('html, body').animate({
             scrollTop: '540px'
         },
         1000);
         return false;
     });

});// End doc ready


/*  ==========================================================================
	Animations
    ========================================================================== */

$(window).load(function(){

//  Intro Lighting and Badges
	$('.sparkles').delay(800).fadeIn(200);
	$('.sparkling').delay(100).fadeOut(300);
	$('.badge.screens').delay(1500).fadeIn(500);
	$('.badge.graphics').delay(2000).fadeIn(500);
	$('.badge.games').delay(2500).fadeIn(500);
	$('.badge.screens-flash').delay(1500).fadeIn(300).fadeOut(300);
	$('.badge.graphics-flash').delay(2000).fadeIn(300).fadeOut(300);
	$('.badge.games-flash').delay(2500).fadeIn(300).fadeOut(300);

//  Animate Mario
	if(!$.browser.msie){
		$('.mario').delay(100).animate({
			'backgroundPositionY' : '0'
		}, 400);
	}else{
		$('.mario').css({'backgroundPositionY' : '0', 'display' : 'none'}).delay(500).fadeIn(500);
	}

//  Parallax Mario
	$(window).bind('scroll',function(e){
    	parallaxScroll();
	});
	 
	function parallaxScroll(){
	    var scrolled = $(window).scrollTop();
	    $('.mario').css('backgroundPositionY',(0+(scrolled*.50))+'px');
	}

//  Game Hovers
	$('.stagger').hover(
		function () {
			$(this).stop().animate({
				top : '-20px'
			}, 400)
		},
		function () {
			$(this).stop().animate({
				top: '0'
			}, 200)
		}
	);
}); // End window load