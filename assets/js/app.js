$(document).ready(() => {
    // плавный скролл по анкору
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        let destination = $(this).attr('href');
        $("html, body").animate({
            scrollTop: $(destination).offset().top - 200
        }, 1000);
    });
    // плавный скролл по анкору
});

// анимация header
// const header = $('.header');
// let scroll = 200;
// $(window).on('scroll', () => {
//     currentScroll = $(window).scrollTop();
//     if (currentScroll > scroll) {
//         header.css('transform', 'translateY(-100%)');
//         header.addClass('header--fixed');
//     } else if (currentScroll == 0) {
//         header.css('transform', 'translateY(0)');
//         header.removeClass('header--fixed');
//         console.log('currentScroll')
//     } else {
//         header.css('transform', 'translateY(0)');
//     }
//     scroll = currentScroll;
// });
// анимация header

// анимация header
// const header = $('.header');
// let scroll = 200;
// $(window).on('scroll', () => {
//     currentScroll = $(window).scrollTop();
//     if (currentScroll > scroll) {
//         header.addClass('header--scroll');
//         header.addClass('header--fixed');
//     } else if (currentScroll == 0) {
//         header.addClass('header--scroll');
//         header.removeClass('header--fixed');
//         console.log('currentScroll')
//     } else {
//         header.addClass('header--scroll');
//     }
//     scroll = currentScroll;
// });
// анимация header

//swiper main  offer
const swiper = new Swiper('.offer__slider', {
    slidesPerView : 1,
    loop: true,
    navigation: {
        nextEl: ".offer__slider-next",
        prevEl: ".offer__slider-prev",
      },
      pagination: {
        el: ".offer__pagination-nav",
        type: "fraction",
      },
});

//swiper tabs
   let sliders = $('.tabs__slider-container'),
        swiperTabs;
    for (let i = 0; i < sliders.length; i++) {
        swiperTabs = new Swiper('[data-slider="' + i + '"]', {
            slidesPerView : 1,
            loop: true,
            observer: true,
            observeParents: true,
            breakpoints: {
                728: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
                1196: {
                    slidesPerView: 3,
                    spaceBetween: 45,
                },
                1666: {
                    slidesPerView: 3,
                    spaceBetween: 64,
                }
            },
            navigation: {
                nextEl: '[data-slider-next="' + i + '"]',
                prevEl: '[data-slider-prev="' + i + '"]',
            },
            pagination: {
                el: '[data-slider-nav="' + i + '"]',
                type: "fraction",
            },
        });
    }

//tabs
    $('.tabs__wrapper').each(function() {
        let ths = $(this);
        ths.find('.tabs__content').not(':first').hide();
        ths.find('.tabs__nav-item').click(function() {
            ths.find('.tabs__nav-item').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.tabs__content').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
    });

//swiper about

const swiperAbout = new Swiper('.about__mobile-slider', {
    slidesPerView : 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".about__button-next",
        prevEl: ".about__button-prev",
    },
    pagination: {
        el: ".about__pagination",
        type: "fraction",
    },
});


//Menu


$('.header__burger').click(function(e) {
    e.preventDefault();
    $('.menu-mob').toggleClass('active')
    if($('.menu-mob').hasClass('active'))
    {
        $('html, body').css('overflow', 'hidden')
    }
    else
    {
        $('html, body').css('overflow', '');
    }
})

$('.menu-mob__close').click(function(e) {
    e.preventDefault();
    $('.menu-mob').removeClass('active')
    if($('.menu-mob').hasClass('active'))
    {
        $('html, body').css('overflow', 'hidden')
    }
    else
    {
        $('html, body').css('overflow', '');
    }
})

//АОС

    AOS.init({
        duration: 1000,
        offset: 0,
        once: true
        });