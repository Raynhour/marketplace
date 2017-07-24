$('document').ready(function(){

    $('#testimonals').owlCarousel({
        items: 1,
        loop: true,
        lazyLoad: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        navText: [
            "<div class='s8__left'><img src='../img/arrow-prev.png'></div>",
            "<div class='s8__right'><img src='../img/arrow-next.png'></div>"
        ]
    });

    $('#single-product-s2').owlCarousel({
        items: 5,
        loop: true,
        lazyLoad: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: false,
        dots: true
    });

    $('#gallery').photobox('a',{ time:0 });

    $('.form__select').styler();

});

plyr.setup();
