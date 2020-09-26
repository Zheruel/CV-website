$(function () {
    function scrollSpy() {
        var scrollPos = $(window).scrollTop();

        console.log(scrollPos);
        
        if(scrollPos < experiencePos/2){
            $("li a").removeClass("text-muted");
            $('#aboutItem').addClass("text-muted");

        }
        
        else if (scrollPos <= educationPos){
            $("li a").removeClass("text-muted");
            $('#experienceItem').addClass("text-muted");
        }
    }

    new WOW().init();

    var aboutPos = $("#about").position().top;
    var experiencePos = $("#experience").position().top;
    var educationPos = $("#education").position().top;

    console.log(aboutPos, experiencePos, educationPos);

    scrollSpy();

    $(window).scroll(function (event) {
        scrollSpy();
    });
});