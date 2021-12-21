(function ($) {




    $.fn.shuffle = function () {
        let filter =$(".filter"), shuffle = $(".shuffle"),$this = $(this) ;
      
        if (filter.first().hasClass("active"))  shuffle.fadeIn("slow");
          
        filter.click(function () {
            if ($(this).data("filter") === "all") shuffle.fadeIn("slow") ;
            else{
                if (shuffle.hasClass($(this).data("filter").substring(1))) {
                    console.log($($(this).data("filter")).css("display"));

                    $(".shuffle:not(" + $(this).data("filter") + ")").fadeOut("slow");
                    if ($($(this).data("filter")).css("display") === "none") $($(this).data("filter")).fadeIn("slow");
                }
            }
        })

    }
    
    
    
}(jQuery));