$(document).ready(function () {

    /******************************
     ******* init scripts *********
     ******************************/

    var sliderEmployee = $('.slider-employees');
    var sliderDeveloping = $('.slider-projects-developing');
    var sliderSeo = $('.slider-projects-seo');

    setTimeout(function() {
        $('.marks-photo').addClass('visible');
    }, 1000);

    $(".marks-hello").typed({
        strings: ["^500 Здравствуйте, меня зовут Марк Дружин.<br>Я занимаюсь созданием качественных seo сайтов под ключ. На моем счету более 400 выполненных проектов."],
        typeSpeed: 0,
        callback: function(){
            $('.marks-info').addClass('visible');
            $(setInterval(function() {
                $('.employees-photos li').addClass('visible');
            }, 1000));
        }
    });


    /******************************
     ******* other scripts ********
     ******************************/

    $('#reviews').lightGallery();

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('nav').slideToggle();
        $('.header-contacts').slideToggle();
    });

    $('nav ul li a').hover(function() {
        if ($(document).width() > 980) {
            $(this).toggleClass('active');
        }
    });

    $('input[type="tel"]').mask("+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9");
    $('input[type="tel"]').click(function() {
        $(this).focus();
    });

    $('#file-download').on('change', function(){

        var temp = $(this).val().split('\\');
        var fileName = temp[temp.length - 1];
        $('.file-name').html(fileName);
        $('.file-type').css('opacity', 0);

    });


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
        arrows: false,
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    vertical: true,
                    verticalSwiping: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    sliderSeo.slick({
        slidesToShow: 3,
        slidesTpScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    vertical: true,
                    verticalSwiping: true,
                    slidesToShow: 1
                }
            }
        ]
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

