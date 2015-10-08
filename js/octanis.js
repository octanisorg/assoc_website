$(function() {
    var pull        = $('#navpull');
        menu        = $('ul.main-nav');
        menuHeight  = menu.height();
 	
 

    $(pull).on('click', function(e) {
        e.preventDefault();
		
		if(menu.is(":hidden")){
 			$('.logo img').attr('src', 'img/black_logo.png');
 		}else{
			$('.logo img').attr('src', 'img/white_logo.png');
 		}

	
        $('.nav').removeClass('pull-right');
        $('.logo').removeClass('pull-left');
 
		menu.removeClass('list-inline');
	    menu.addClass('list-stacked');
	    menu.slideToggle(100,'swing');
 		

    });




});