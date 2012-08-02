/**
 * Sap v1.0.4
 * 
 * Inspired by Contained Sticky Scroll v1.1 By Matt Ward
 * http://blog.echoenduring.com/2010/11/15/freebie-contained-sticky-scroll-jquery-plugin/
 *
 * (c) 2011 Forrst, LLC
 */
 
(function($) {

    $.fn.sap = function(options) {
  
    var defaults = {  
        distanceFromTheTop: 0
    };  
                  
    options = $.extend(defaults, options);
    
    var $objizzle = $(this);
    
    if (!$objizzle.length) return;
    
    var oldTop    = $objizzle.offset().top;
    var width     = $objizzle.width() + 'px';
    var $shim     = $('<div class="sap-shimy-shim"></div>');
    var theWindow = $(window);
    var theDoc    = $(document);
    
    theWindow.scroll(function() {

        var top = theWindow.scrollTop();
        
        if ((top + options.distanceFromTheTop + $objizzle.height()) < (theDoc.height() - theWindow.height()) && (top + options.distanceFromTheTop) > $objizzle.offset().top)        
        {
            $objizzle.css({
                position: 'fixed',
                width: width,
                top: options.distanceFromTheTop + 'px'
            });
            
            $shim.css({width: width, height: $objizzle.height()});
            
            $objizzle.before($shim);
        }
        else if (top + options.distanceFromTheTop < oldTop) 
        {
            $shim.remove();
            $objizzle.css({
                position: 'static',
                width: width,
                top: '' 
            });
        }
    });
  };
}(jQuery));