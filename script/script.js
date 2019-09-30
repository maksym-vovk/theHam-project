//Services
$('.services-items').children().first().css('display', 'flex');

$('.services-menu-link').on('click', function (e) {
    $(this).addClass('services-active').siblings().removeClass('services-active');
    const dataValue = $(e.target).data('name');
    $('.services-content').hide();
    $('.services-items').find(`[data-name = ${dataValue}]`).show().css('display', 'flex')
});

//Amazing
$('.amazing-more-button-link').on('click', function () {
    $('.amazing-more-button').css('display', 'none');
    $('.amazing-more-loading').css('display', 'block');
    function loading() {
        $('.load-more').css('display', 'grid');
        $('.amazing-more-loading').css('display', 'none');
    }
    setTimeout(loading, 2000);
});

$('.amazing-menu-link').on('click', function (e) {
    $(this).addClass('amazing-active').siblings().removeClass('amazing-active');
    const dataValue = $(e.target).data('amazing');
        $('.amazing-gallery-content').hide();
        $('.amazing-gallery').find(`[data-amazing = ${dataValue}]`).show().css('display', 'grid');

});

$('.all').on('click', function (e) {
    const dataValue = $(e.target).data('all');
    $('.amazing-gallery-content').hide();
    $('.amazing-gallery').find(`[data-all = ${dataValue}]`).show().css('display', 'grid');
});

//Slider
$('.say-about-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    swipe: false,
    asNavFor: '.say-about-slider-nav'
});

$('.say-about-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.say-about-slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true,
    swipe: false,
    prevArrow: '<div class="say-about-slider-prevArrow"></div>',
    nextArrow: '<div class="say-about-slider-nextArrow"></div>'
});
