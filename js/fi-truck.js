/* 
	xBe by TEMPLATE STOCK
	templatestock.co @templatestock
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    'use strict';

    let isMenuOpen = false;

    function deviceType() {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return "mobile";
        }
        return "desktop";
    };

    // Back to top smooth scroll

    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 85
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });


    // Scroll to top animated button

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
        if (isMenuOpen)
            $('.navbar-toggle:visible').click();
    });


    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        //$('.navbar-toggle:visible').click();
    });

    $('.navbar-toggle').click(function () {
        isMenuOpen = !isMenuOpen;
    });


    // Script for Portfolio Section

    $(document).ready(function () {

        // Slider top 


        $('#myCarousel-one').carousel({
            interval: 5000, //changes the speed
            keyboard: false,
        })


        //Team carousel

        $('#myCarousel-two').carousel({
            interval: 40000, //changes the speed
            keyboard: false,
        })

        //Clients carousel

        $('#myCarousel-three').carousel({
            interval: 4000, //changes the speed
            keyboard: false,
        })

        //Testimonials carousel

        $('#myCarousel-four').carousel({
            interval: 8000, //changes the speed
            keyboard: false,
        })

        if (deviceType() == "desktop") {
            $('.section-heading, .section-subheading').each(function () {
                $(this).removeClass('animated');
                $(this).removeClass('fadeInUp');
            });
        }

    });

    /* Animated Titles of Sections*/

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom + 200) && (elemTop >= docViewTop));
    }

    $(window).scroll(function () {
        $('.section-heading, .section-subheading').each(function () {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('animated fadeInUp')
            }
        });


    });


    /*  Isotope Filter */

    (function () {
        var winDow = $(window);
        var $container = $('.portfolio-items');
        var $filter = $('.filter');

        try {
            $container.imagesLoaded(function () {
                $container.show();
                $container.isotope({
                    filter: '*',
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });
            });
        } catch (err) {}

        winDow.bind('resize', function () {
            var selector = $filter.find('a.active').attr('data-filter');

            try {
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
            } catch (err) {}
            return false;
        });

        $filter.find('a').click(function () {
            var selector = $(this).attr('data-filter');

            try {
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
            } catch (err) {

            }
            return false;
        });


    }());


    /* Header shrink function*/

    $(function () {
        var shrinkHeader = 350;
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('.navbar').addClass('navbar-shrink');
            } else {
                $('.navbar').removeClass('navbar-shrink');
            }
        });

        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });

    /* Footer reveal function*/

    $('footer').footerReveal({
        zIndex: -100,
        shadow: true,
        shadowOpacity: 0.6

    });



});