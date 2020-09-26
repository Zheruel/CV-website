$(function () {
    function scrollSpy() {
        var scrollPos = $(window).scrollTop();
        
        if(scrollPos >= aboutPos && scrollPos < (experiencePos)){
            $("li a").removeClass("text-muted");
            $('#aboutItem').addClass("text-muted");

        }
        
        else if (scrollPos >= experiencePos){
            $("li a").removeClass("text-muted");
            $('#experienceItem').addClass("text-muted");
        }
    }

    new WOW().init();

    var bottomPage = $(window).scrollTop() + $(window).height() == $(document).height();
    var aboutPos = $('#about').position().top;
    var experiencePos = $('#experience').position().top;

    scrollSpy();

    $(window).scroll(function (event) {
        scrollSpy();
    });
});