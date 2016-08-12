$(document).ready(function () {

    /******************************
     ******* init scripts *********
     ******************************/
    var sliderEmployee = $('.slider-employees');
    var sliderDeveloping = $('.slider-projects-developing');
    var sliderSeo = $('.slider-projects-seo');

    /******************************
     *********** sliders **********
     ******************************/
    sliderEmployee.slick({
        arrows: false,
        dots: true
    });
    sliderEmployee.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.employees-photos li').eq(currentSlide).removeClass('active');
        $('.employees-photos li').eq(nextSlide).addClass('active');
    });
    $('.employees-photos li').click(function() {
        $('.employees-photos .active').removeClass('active');
        $(this).addClass('active');
        sliderEmployee.slick('slickGoTo', $(this).index());
    });

    sliderDeveloping.slick({
        slidesToShow: 3,
        slidesTpScroll: 1,
        arrows: false
    });

    sliderSeo.slick({
        slidesToShow: 3,
        slidesTpScroll: 1,
        arrows: false
    });

    $('.projects-control div').click(function() {

        if (!$(this).hasClass('active')) {
            var currentIndex = $(this).index();
            $('.projects-control .active').removeClass('active');
            $(this).addClass('active');
            $('.slider-projects ul .active').removeClass('active');
            $('.slider-projects ul li').eq(currentIndex).addClass('active');
        }

    });

    $('.slider-control-left').click(function() {

        $('.slider-projects ul .active div').slick('slickPrev');

    });

    $('.slider-control-right').click(function() {

        $('.slider-projects ul .active div').slick('slickNext');

    });

});

