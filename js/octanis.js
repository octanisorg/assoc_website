var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


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

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });

    if( !isMobile.any() ){
        $.stellar({
            // Set scrolling to be in either one or both directions
            horizontalScrolling: false,
            verticalScrolling: true,

            // Set the global alignment offsets
            horizontalOffset: 0,
            verticalOffset: 0,

            // Refreshes parallax content on window load and resize
            responsive: false,

            // Select which property is used to calculate scroll.
            // Choose 'scroll', 'position', 'margin' or 'transform',
            // or write your own 'scrollProperty' plugin.
            scrollProperty: 'scroll',

            // Select which property is used to position elements.
            // Choose between 'position' or 'transform',
            // or write your own 'positionProperty' plugin.
            positionProperty: 'position',

            // Enable or disable the two types of parallax
            parallaxBackgrounds: false,
            parallaxElements: true,

            // Hide parallax elements that move outside the viewport
            hideDistantElements: false,

            // Customise how elements are shown and hidden
            hideElement: function($elem) { $elem.hide(); },
            showElement: function($elem) { $elem.show(); }
        });
    }
      
});