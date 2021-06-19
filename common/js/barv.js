function initialize(){{
	var o=new google.maps.LatLng(35.669834,139.761751),
	e={zoom:19,center:o,scrollwheel:!1,mapTypeControlOptions:{mapTypeIds:["noText",google.maps.MapTypeId.ROADMAP]}}
	,a=new google.maps.Map(document.getElementById("ggmap"),e),o=new google.maps.LatLng(35.669834,139.761751);
	new google.maps.Marker({position:o,map:a})}}$(window).load(function(){$("#barVslider")
		.sliderPro({width:"60%",height:500,aspectRatio:2,
			arrows:!0,buttons:!0,autoplay:!0,loop:!0,
			visibleSize:"100%",forceSize:"fullWidth",autoplayDelay:3600,autoplayOnHover:"none"})}),
	$(document).ready(function(){initialize()});