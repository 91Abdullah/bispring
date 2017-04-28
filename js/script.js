$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$(document).ready(function() {

    var inview = new Waypoint.Inview({
        element: $('#header .brand')[0],
        enter: function(direction) {
            $('#header .brand').animateCss('fadeIn');
        },
        entered: function(direction) {
            
        },
        exit: function(direction) {
            $('#header .brand').animateCss('fadeIn');
        },
        exited: function(direction) {
            
        }
    });

    var inview = new Waypoint.Inview({
        element: $('footer .brand')[0],
        enter: function(direction) {
            $('footer .brand').animateCss('fadeIn');
        },
        entered: function(direction) {
            
        },
        exit: function(direction) {
            $('footer .brand').animateCss('fadeIn');
        },
        exited: function(direction) {
            
        }
    });

    $(".img-animation").waypoint(function() {
        $(".img-animation").addClass('animated fadeInLeft');
    }, { offset: '100%'});

    var slider = $('.slider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        margin: 10,
        lazyLoad: true,
        autoplay:true,
        autoplayTimeout:5000,
        dots: false,
        navContainer: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed:450,
        navSpeed: 2000
    });

    $(".next").on('click', function() {
        slider.trigger('next.owl.carousel');
    }); 

    $(".prev").on('click', function() {
        slider.trigger('next.owl.carousel');
    });
});