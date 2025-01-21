$(document).ready(function() {
    
    /* _________________ start home page _________________ */
    // control header background
    function checkScroll() {
        if ($(window).scrollTop() > 50) {
            $("body").addClass('scrolled_header');
        } else {
            $("body").removeClass('scrolled_header');
        }
    }
    checkScroll();
    $(window).on('scroll', function() {
        checkScroll();
    });
    

    // side menu
    $(".menu_toggleBtn,.header_backDrop").click(function() {
        $(".header").toggleClass("active_header");
    });

    /* _________________ end home page _________________ */
    
});