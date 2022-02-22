$(document).ready(function() {
    // Fixed Header
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1) {
            $('').addClass('fixed-header');
        } else {
            $('').removeClass('fixed-header');
        }
    });

    var nav = $("#navbar_content");
    var btn = $(".custom_menu_btn");
    btn.click
    btn.click(function(e) {

        e.preventDefault();
        nav.toggleClass("lg_nav");
        document.querySelector(".custom_menu_btn").classList.toggle("menu_change_style")
    });


    $('.testimonial').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 3000,
    });



    // Floating Labels
    $('.ffl-wrapper').floatingFormLabels();

    AOS.init({
        startEvent: 'load',
        duration: 700,
        offset: 50,
    });
});