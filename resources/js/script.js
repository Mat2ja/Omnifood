$(document).ready(function () {

    /* For sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    /* Scroll for buttons */
    $(".js--scroll-to-plans").click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });
    /* When we click on section, it animates the scroll to the top od other section, animation lasting 1000ms=1s */

    $(".js--scroll-to-start").click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    /* Navigation scroll */
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


    /* Aniamtion on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    })
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    })

    /* Mobile nav */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        var icon_new = $('.js--nav-icon ion-icon');

        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round') || icon_new.attr('name') == 'menu') {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            //icon.attr('class', 'ion-close-round'); /* another method */
            icon_new.attr('name', 'close'); /* my method for new ionicons */
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            //icon.attr('class', 'ion-navicon-round'); /* another method */
            icon_new.attr('name', 'menu'); /* my method for new ionicons */
        }
    })

    /* Maps */
    var map = new GMaps({
        div: '.map',
        lat: 38.722398,
        lng: -9.0,
        zoom: 12 /* inital is 15  */
    });

    map.addMarker({
        lat: 38.722398,
        lng: -9.1307226,
        title: 'Lisbon',
        infoWindow: {
            content: '<p>Our Lisbon HQ</p>'
        }
    });
});

