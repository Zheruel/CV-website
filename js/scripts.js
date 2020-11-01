$(function () {
    function scrollSpy() {
        var scrollPos = $(window).scrollTop();
        
        if(scrollPos < educationPos/2){
            $("li a").removeClass("text-muted");
            $("#aboutItem").addClass("text-muted");

        }
        
        else if (scrollPos < experiencePos/1.2){
            $("li a").removeClass("text-muted");
            $("#educationItem").addClass("text-muted");
        }

        else if (scrollPos < projectsPos/1.2){
            $("li a").removeClass("text-muted");
            $("#experienceItem").addClass("text-muted");
        }

        else {
            $("li a").removeClass("text-muted");
            $("#projectsItem").addClass("text-muted");
        }
    }

    var experiencePos = $("#experience").position().top;
    var educationPos = $("#education").position().top;
    var projectsPos = $("#projects").position().top;

    scrollSpy();

    $(window).scroll(function (event) {
        scrollSpy();
    });
});