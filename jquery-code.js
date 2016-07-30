var main = function(){

	$('#nav-goals').click(function(){
		//e.preventDefault();
    	$('html,body').stop().animate({scrollTop:$('#goals').offset().top}, "slow");
		//alert("asdasda");
	});

	$('#nav-projects').click(function(){
		//e.preventDefault();
		$('html,body').stop().animate({scrollTop:$('#projects').offset().top}, "slow");
		//alert("asdasda");
	});

	$('#nav-contact').click(function(){
		//e.preventDefault();
		$('html,body').stop().animate({scrollTop:$('#contact').offset().top}, "slow");
		//alert("asdasda");
	});
	

	$('a.scrollto').click(function(e){
		$('html,body').scrollTo(this.hash, this.hash, {gap:{y:-80},animation:  {easing: 'easeInOutCubic', duration: 1600}});
		e.preventDefault();

		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});
};

$(document).ready(main);