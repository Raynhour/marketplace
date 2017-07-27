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

    $('#redesign').styler();
    $('#niche_').styler();
    $('#remember, #account_type, #category, #country, #photo, #video, #main_image, #was_wasted, #price, #price_job, #payback').styler({
        fileBrowse: 'Выбрать файл'
    });

    $('#new_niche').selectpicker();

    var countClickNewPhoto = 1;
    $('#add-new-photo-btn').click(function(e){
        e.preventDefault();
        var oldInput = $('#add-new-photo').find('input'),
            newInput = oldInput.clone(),
            cloneIdValue = newInput.attr('id'),
            newIdValue = cloneIdValue + '-' + countClickNewPhoto;

        newInput.attr('id', newIdValue);
        $('.form__group__new').append(newInput);
        $('body').find('#' + newIdValue).styler({fileBrowse: 'Выбрать файл'});
        countClickNewPhoto++;
    });

    $('#add-benefits').click(function(e){
        e.preventDefault();
        var oldGroup = $('.new__benefits:first-child').clone();

        $('#wrapper__new__benefits').append(oldGroup);

        console.log(oldGroup);
    });

    $('#period').daterangepicker();

    $('.video__link').hover(function () {
        $(this).parent('.video').addClass('active');
    }, function () {
        $(this).parent('.video').removeClass('active');
    });

});

plyr.setup();
