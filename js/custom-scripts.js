$(document).ready(function () {

    /******************************
     ******* init scripts *********
     ******************************/
    var sliderEmployee = $('.slider-employees');

    /******************************
     *********** sliders **********
     ******************************/

    sliderEmployee.slick({
        arrows: false,
        dots: true

    });
    sliderEmployee.on('init', function(slick) {
        //var currentIndex = $('.slider-employees').find('.slick-current').index();
        console.log(0);
        $('.employees-photos').eq(currentIndex).addClass('active');
    })

});

