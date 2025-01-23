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

    /* _________________ start contact us page _________________ */
    $(document).ready(function () {
        $("#contactForm").on("submit", function (e) {
            e.preventDefault(); // Prevent default form submission

            $.ajax({
                url: "send-email.php", // PHP file to handle the email
                type: "POST",
                data: $(this).serialize(), // Serialize form data
                success: function (response) {
                    alert("Your message has been sent successfully!");
                    $("#contactForm")[0].reset(); // Reset the form
                },
                error: function () {
                    alert("There was an error sending your message. Please try again.");
                }
            });
        });
    });
    /* _________________ end contact us page _________________ */
    
});