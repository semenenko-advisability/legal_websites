"use strict";

// // const benefitsSwiper = document.querySelector(".benefits__swiper");
// // const servicesSwiper = document.querySelector(".services__swiper");
// const blogSwiper = document.querySelector(".blog__swiper");

// let Swiper1;

// Swiper1 = new Swiper(blogSwiper, {
// // Optional parameters
// // centerInsufficientSlides: true,
// centeredSlides: true,
// updateOnWindowResize: true,
// slideToClickedSlide: true,
// slidesPerView: 1,
// initialSlide: 0,
// spaceBetween: 14,
// direction: 'horizontal',
// loop: false,
// breakpoints: {
//     951: {
//         centeredSlides: false,
//         slidesPerView: 3,
//         spaceBetween: 23,
//     },
//     769: {
//         centeredSlides: false,
//         slidesPerView: 2.3,
//         spaceBetween: 23,
//     },
//     700: {
//         centeredSlides: false,
//         slidesPerView: 2.1,
//         spaceBetween: 19,
//     },
//     670: {
//         centeredSlides: false,
//         slidesPerView: 2,
//         spaceBetween: 19,
//     },
//     610: {
//         centeredSlides: false,
//         slidesPerView: 1.8,
//         spaceBetween: 19,
//     },
//     541: {
//         centeredSlides: false,
//         slidesPerView: 1.5,
//         spaceBetween: 19,
//     },
//     440: {
//         centeredSlides: true,
//         slidesPerView: 1.5,
//         spaceBetween: 14,
//     },
//     360: {
//         centeredSlides: true,
//         slidesPerView: 1.2,
//         spaceBetween: 14,
//     },
// },
// pagination: {
//     el: ".swiper-pagination",
//     dynamicBullets: true,
// },
// });

window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;
    
        breakpoint = window.matchMedia(breakpoint);
  
        const enableSwiper = function(className, settings) {
            swiper = new Swiper(className, settings);
    
            if (callback) {
            callback(swiper);
            }
        }
  
      const checker = function() {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
            if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
         };
  
        breakpoint.addEventListener('change', checker);
        checker();
    }
  
    const someFunc = (instance) => {
        if (instance) {
            instance.on('slideChange', function (e) {
                console.log('*** mySwiper.activeIndex', instance.activeIndex);
            });
        }
    };
  
    resizableSwiper(
        '',
        '.blog-swiper',
        mySwiper,
        someFunc
    );
  
    resizableSwiper(
        '',
        '.news-swiper',
        mySwiper,
        someFunc
    );
});

let mySwiper = {
    centeredSlides: true,
    updateOnWindowResize: true,
    slideToClickedSlide: true,
    slidesPerView: 1,
    initialSlide: 0,
    spaceBetween: 14,
    direction: 'horizontal',
    loop: false,
    breakpoints: {
        951: {
            centeredSlides: false,
            slidesPerView: 3,
            spaceBetween: 23,
        },
        769: {
            centeredSlides: false,
            slidesPerView: 2.3,
            spaceBetween: 23,
        },
        700: {
            centeredSlides: false,
            slidesPerView: 2.1,
            spaceBetween: 19,
        },
        670: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 19,
        },
        610: {
            centeredSlides: false,
            slidesPerView: 1.8,
            spaceBetween: 19,
        },
        541: {
            centeredSlides: false,
            slidesPerView: 1.5,
            spaceBetween: 19,
        },
        440: {
            centeredSlides: true,
            slidesPerView: 1.5,
            spaceBetween: 14,
        },
        360: {
            centeredSlides: true,
            slidesPerView: 1.2,
            spaceBetween: 14,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    }
}