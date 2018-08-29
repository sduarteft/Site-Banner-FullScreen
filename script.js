
    $(document).ready(function(){
        $(window).bind("scroll", function(){
            var navHeight = $(window).height() - 70;
            if($(window).scrollTop > navHeight){
                $(".menu").addClass("fixed");
            } else{
                $(".menu").removeClass("fixed");
            }
        });
    });