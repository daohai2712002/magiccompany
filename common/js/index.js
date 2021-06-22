$(window).load(function () {

	// op
	$('#loading').delay(1000).fadeOut(800);
	setTimeout(function(){
		$("#visualRead1").stop().animate({'opacity':'1' }, 600);
		$("#visualRead2").stop().delay(400).animate({'opacity':'1' }, 600);
		$("#visualLink").stop().delay(800).animate({'opacity':'1' }, 600);
		$("#contactBunnerArea").stop().delay(900).animate({opacity:"1"},600);
		$("#wantedBunnerArea").stop().delay(900).animate({opacity:"1"},600);
	},1000);

});

$(document).ready( function(){

	// loadingArea
	pageWidth = $(window).width();
	pageHeight = $(window).height();
	pageLoadingPos = pageHeight / 2 - 10;
	$('#loading').css({'width':pageWidth + 'px','height':pageHeight + 'px'});
	$('#loadingbox').css({'margin-top':pageLoadingPos + 'px'});

	// height
	$('.indexContentsLink').equalHeight();
	
});