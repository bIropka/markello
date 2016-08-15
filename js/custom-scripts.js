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
        typeSpeed: -30,
        callback: function(){
            $('.marks-info').addClass('visible');
            $(setInterval(function() {
                $('.employees-photos li').addClass('visible');
            }, 1000));
        }
    });

    $(function($) {
        $('form').validatr({
            showall: true
        });
    });

    $('input[type="submit"]').click(function() {
        $(this).parents('form').find('.form-field:invalid').addClass('invalid-field');
        $(this).parents('form').find('.form-field:valid').addClass('valid-field');
        $(this).parents('form').find('.form-textarea').removeClass('valid-field invalid-field');
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

    $('input[type="tel"]').mask("+7 ( 999 ) 999 - 99 - 99");
    $('input[type="tel"]').click(function() {
        $(this).focus();
    });

    $('#file-download').on('change', function(){

        var temp = $(this).val().split('\\');
        var fileName = temp[temp.length - 1];
        $('.file-name').html(fileName);
        $('.file-type').addClass('hidden');
        $('.remove-file').addClass('active');

    });

    $('.remove-file').click(function() {
        $(this).removeClass('active');
        $('.file-type').removeClass('hidden');
        $('.file-name').html('Прикрепите файл');
        $('#file-download').val('');
        return false;
    });

    $('.callback').click(function () {
        $('.window-callback').fadeIn();
    });
    $('.window-callback').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-callback')).length) $('.window-callback').fadeOut();
    });
    $('.close-marker').click(function() {
        $('.window-callback').fadeOut();
    });


    /******************************
     *********** sliders **********
     ******************************/
    sliderEmployee.slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000
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

    $('.slide-project').hover(function() {
            if ($(document).width() > 980) {
                $(this).find('.slide-inner').toggleClass('active');
            }
        });

});

