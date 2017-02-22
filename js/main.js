$(document).ready(function(){
	
	// opens navigation menu when media querie is active
	$("nav ul li:first-child").click(function(){
	$("nav").toggleClass("open");
	});	

	// minimizes header on scroll down && returns to normal on scroll up
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
    		$('header').addClass("sticky");
  		}
  		else{
    		$('header').removeClass("sticky");
  		}
	});



});