$(function () {
    const mainVisualSlide = new Swiper('.main_visual .main_visual_slide', {
        loop: true,
        parallax: true,
        speed: 1000,
    })
});

$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })
});