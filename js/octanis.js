//jquery preloader
/**
 * jQuery.Preload
 * https://github.com/htmlhero/jQuery.preload
 *
 * Created by Andrew Motoshin
 * http://htmlhero.ru
 *
 * Version: 1.5.0
 * Requires: jQuery 1.6+
 *
 */

!function(a){a.preload=function(){var b=[],c=function(a){for(var c=0;c<b.length;c++)if(b[c].src===a.src)return b[c];return b.push(a),a},d=function(a,b,c){"function"==typeof b&&b.call(a,c)};return function(b,e,f){if("undefined"!=typeof b){"string"==typeof b&&(b=[b]),2===arguments.length&&"function"==typeof e&&(f=e,e=0);var g,h=b.length;if(e>0&&h>e&&(g=b.slice(e,h),b=b.slice(0,e),h=b.length),!h)return d(b,f,!0),void 0;for(var i,j=arguments.callee,k=0,l=function(){k++,k===h&&(d(b,f,!g),j(g,e,f))},m=0;m<b.length;m++)i=new Image,i.src=b[m],i=c(i),i.complete?l():a(i).on("load error",l)}}}();var b=function(b,c){var d,e,f,g,h,i=[],j=new RegExp("url\\(['\"]?([^\"')]*)['\"]?\\)","i");return c.recursive&&(b=b.find("*").add(b)),b.each(function(){for(d=a(this),e=d.css("background-image")+","+d.css("border-image-source"),e=e.split(","),h=0;h<e.length;h++)f=e[h],-1===f.indexOf("about:blank")&&-1===f.indexOf("data:image")&&(g=j.exec(f),g&&i.push(g[1]));"IMG"===this.nodeName&&i.push(this.src)}),i};a.fn.preload=function(){var c,d;1===arguments.length?"object"==typeof arguments[0]?c=arguments[0]:d=arguments[0]:arguments.length>1&&(c=arguments[0],d=arguments[1]),c=a.extend({recursive:!0,part:0},c);var e=this,f=b(e,c);return a.preload(f,c.part,function(a){a&&"function"==typeof d&&d.call(e.get())}),this}}(jQuery);




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

    //preloader

    $.preload('/img/rover.mp4', 1, 0);




    var pull        = $('#navpull');
        menu        = $('ul.main-nav');
        menuHeight  = menu.height();
 	
 

    $(pull).on('click', function(e) {
        e.preventDefault();
		
		if(menu.is(":hidden")){
 			$('.logo img').attr('src', '/img/black_logo.png');
 		}else{
			$('.logo img').attr('src', '/img/white_logo.png');
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
            verticalOffset: -100,

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