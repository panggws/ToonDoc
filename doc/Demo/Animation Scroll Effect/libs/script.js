$(document).ready(function(){
    $('.scroll-fadein').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });

    $('.scroll-bounce').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated bounce',
        offset: 100
    });

    $('.scroll-flash').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated flash',
        offset: 100
    });

    $('.scroll-pulse').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated pulse',
        offset: 100

    });

    $('.scroll-fadeInLeft').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
    });

    $('.scroll-zoomInDown').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated zoomInDown',
        offset: 100
    });

    $('.scroll-fadeInDown').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
    });

    $('.scroll-bounceInDown').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated bounceInDown',
        offset: 100
    });


    $('.scroll-bounceInDown-group .col:nth-child(1)').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated bounceInDown',
        offset: 80
    });
    $('.scroll-bounceInDown-group .col:nth-child(2)').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated bounceInDown',
        offset: 100
    });
    $('.scroll-bounceInDown-group .col:nth-child(3)').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated bounceInDown',
        offset: 120
    });


});


