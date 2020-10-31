(function ($) {
    $.fn.nextImg = function (element) {
        $(element).on("click", function() {
            let activeImg = $(".active");
            let nextImg = activeImg.next();
            let activeCircle = $(".circle--active");
            let nextCircle = activeCircle.next(); 
            if(nextImg.length) {
                activeImg.removeClass("active").css("z-index", -10);
                nextImg.addClass("active").css("z-index", 10);
                activeCircle.removeClass("circle--active").css("z-index", -10);
                nextCircle.addClass("circle--active").css("z-index", 10);
             }
         });
    }

    $.fn.prevImg = function (element) {
        $(element).on("click", function() {
            let activeImg = $(".active");
            let prevImg = activeImg.prev();
            let activeCircle = $(".circle--active");
            let prevCircle = activeCircle.prev(); 
            if(prevImg.length) {
                activeImg.removeClass("active").css("z-index", -10);
                prevImg.addClass("active").css("z-index", 10);
                activeCircle.removeClass("circle--active").css("z-index", -10);
                prevCircle.addClass("circle--active").css("z-index", 10);
            }
        });
    }
    
   })(jQuery);


   $("#next").nextImg("#next");
   $("#prev").prevImg("#prev");


