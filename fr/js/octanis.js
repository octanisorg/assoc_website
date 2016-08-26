/*!
 * @preserve
 * jquery.scrolldepth.js | v0.8
 * Copyright (c) 2015 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */
!function(e,n,t){"use strict";var r,o,a,l,i={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0,gaGlobal:!1,gtmOverride:!1},c=e(n),u=[],g=0;e.scrollDepth=function(h){function p(e){l?l({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:e,eventLabel:"Baseline",eventValue:1,eventNonInteraction:!0}):(r&&n[a]("send","event","Scroll Depth",e,"Baseline",1,{nonInteraction:!0}),o&&_gaq.push(["_trackEvent","Scroll Depth",e,"Baseline",1,!0]))}function s(e,t,i,c){l?(l({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:e,eventLabel:t,eventValue:1,eventNonInteraction:h.nonInteraction}),h.pixelDepth&&arguments.length>2&&i>g&&(g=i,l({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:"Pixel Depth",eventLabel:D(i),eventValue:1,eventNonInteraction:h.nonInteraction})),h.userTiming&&arguments.length>3&&l({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:e,eventLabel:t,eventTiming:c})):(r&&(n[a]("send","event","Scroll Depth",e,t,1,{nonInteraction:h.nonInteraction}),h.pixelDepth&&arguments.length>2&&i>g&&(g=i,n[a]("send","event","Scroll Depth","Pixel Depth",D(i),1,{nonInteraction:h.nonInteraction})),h.userTiming&&arguments.length>3&&n[a]("send","timing","Scroll Depth",e,c,t)),o&&(_gaq.push(["_trackEvent","Scroll Depth",e,t,1,h.nonInteraction]),h.pixelDepth&&arguments.length>2&&i>g&&(g=i,_gaq.push(["_trackEvent","Scroll Depth","Pixel Depth",D(i),1,h.nonInteraction])),h.userTiming&&arguments.length>3&&_gaq.push(["_trackTiming","Scroll Depth",e,c,t,100])))}function v(e){return{"25%":parseInt(.25*e,10),"50%":parseInt(.5*e,10),"75%":parseInt(.75*e,10),"100%":e-5}}function f(n,t,r){e.each(n,function(n,o){-1===e.inArray(n,u)&&t>=o&&(s("Percentage",n,t,r),u.push(n))})}function m(n,t,r){e.each(n,function(n,o){-1===e.inArray(o,u)&&e(o).length&&t>=e(o).offset().top&&(s("Elements",o,t,r),u.push(o))})}function D(e){return(250*Math.floor(e/250)).toString()}function d(e,n){var t,r,o,a=null,l=0,i=function(){l=new Date,a=null,o=e.apply(t,r)};return function(){var c=new Date;l||(l=c);var u=n-(c-l);return t=this,r=arguments,0>=u?(clearTimeout(a),a=null,l=c,o=e.apply(t,r)):a||(a=setTimeout(i,u)),o}}var y=+new Date;h=e.extend({},i,h),e(t).height()<h.minHeight||(h.gaGlobal?(r=!0,a=h.gaGlobal):"function"==typeof ga?(r=!0,a="ga"):"function"==typeof __gaTracker&&(r=!0,a="__gaTracker"),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(o=!0),"function"==typeof h.eventHandler?l=h.eventHandler:"undefined"==typeof dataLayer||"function"!=typeof dataLayer.push||h.gtmOverride||(l=function(e){dataLayer.push(e)}),h.percentage?p("Percentage"):h.elements&&p("Elements"),c.on("scroll.scrollDepth",d(function(){var r=e(t).height(),o=n.innerHeight?n.innerHeight:c.height(),a=c.scrollTop()+o,l=v(r),i=+new Date-y;return u.length>=4+h.elements.length?void c.off("scroll.scrollDepth"):(h.elements&&m(h.elements,a,i),void(h.percentage&&f(l,a,i)))},500)))}}(jQuery,window,document);



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
    jQuery.scrollDepth({
      eventHandler: function(data) {
        
        _paq.push(['trackEvent', 'ScrollDistance', 'ScrollDepth', data.eventLabel, location.pathname]);
        

      }
    });


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
            verticalOffset: -300,

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