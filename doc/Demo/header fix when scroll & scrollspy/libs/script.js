/**
 * Created by toon on 10/7/2557.
 */

$(document).ready(function(){
    $('body').attr('data-spy','scroll');
    $('body').attr('data-target','.subnav');


    $('.subnav ul li a[href^="#"]').on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 300, function(){

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = this.hash;
        });

    });
});


//var n = $('.menu2').position().top;

//var m = $('.menu2').height() + n;


//var num = 40; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    var n = $('.subnav').position().top;
    var a = $('#menu').outerHeight() / 2;
    $('.sticky-subnav').css('top',a);
    var scroll = $(window).scrollTop();
    if (scroll > a) {
        $('.menu').addClass('sticky');
        $('.content').addClass('menu-padding');
    } else {
        $('.menu').removeClass('sticky');
        $('.content').removeClass('menu-padding');
    }

    if (scroll > n-a) {
        $('.subnav ul').addClass('sticky-subnav');
    } else {
        $('.subnav ul').removeClass('sticky-subnav');
    }
});