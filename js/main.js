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

	var parallax = $(".parallax");
  	speed = 0.5;
  	$(window).scroll(function(){
    
    var windowYOffset = $(window).scrollTop();
    console.log("window scrolling...", windowYOffset);
    elBackgroundPos = "50% " + (windowYOffset * speed) + "px";
    $("#fire2").css("background-position", elBackgroundPos);
    console.log("Huh???");
  });
  	
  	$("#submit").click(function(){
  		event.preventDefault();
  	});


});