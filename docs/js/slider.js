$(document).ready(function() {
    new WOW().init();
    let $slider = $('.step-by-step-slider__inner');
    let $sliderAdvantages = $('.advantages__wrap');

    if ($(window).width() < 768) {
        $sliderAdvantages.not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });
    } else {
        $sliderAdvantages.filter('.slick-initialized').slick('unslick');
    }


    $(window).on('load resize', function() {
        if ($(window).width() < 768) {
            $sliderAdvantages.not('.slick-initialized').slick({
                dots: false,
                infinite: false,
                speed: 100,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            });
        } else {
            $sliderAdvantages.filter('.slick-initialized').slick('unslick');
        }
    });

    $slider.slick({
        infinite: false,
        dots: true,
        speed: 200,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
            }
        }]
    });

    let progressBarLine = $('.progressbar__progressbar-inner');
    const points = document.querySelectorAll('.progressbar__progressbar-pointer');
    const pointsText = document.querySelectorAll('.progressbar__point-text');
    const dotsWrap = document.querySelector('.slick-dots');
    let slickActive = document.querySelector('.slick-active');
    dotsWrap.childNodes[0].classList.add('slick--active-color');

    $slider.on("afterChange", function(event, slick, currentSlide, nextSlide) {
        if (currentSlide == 3 ) {
            progressBarLine.css('width', 99 + "%");
        } else {
            progressBarLine.css('width', (currentSlide + 1) * 20 + "%");
        }
        paintPoints(currentSlide + 1);
        paintLine(currentSlide);
    });

    function paintPoints(count) {
        for (let i = 0; i <= dotsWrap.childNodes.length - 1; i++) {
            if (dotsWrap.childNodes[i].classList.contains('slick--active-color')) {
                dotsWrap.childNodes[i].classList.remove('slick--active-color');
            }
        }
        for (let k = 0; k < count; k++) {
            dotsWrap.childNodes[k].classList.add('slick--active-color');
        }
    };

    function paintLine(e) {
        for (let j = 0; j <= pointsText.length - 1; j++) {
            if (pointsText[j].classList.contains('progressbar__point-text--active')) {
                pointsText[j].classList.remove('progressbar__point-text--active');
            }
        }
        for (let i = 0; i <= e; i++) {
            pointsText[i].classList.add('progressbar__point-text--active');
        }
        for (let j = 0; j <= points.length - 1; j++) {
            if (points[j].classList.contains('progressbar__progressbar-pointer--active')) {
                points[j].classList.remove('progressbar__progressbar-pointer--active');
            }
        }
        for (let i = 0; i <= e; i++) {
            points[i].classList.add('progressbar__progressbar-pointer--active');
        }
    }



})