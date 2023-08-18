"use strict";

// const benefitsSwiper = document.querySelector(".benefits__swiper");
// const servicesSwiper = document.querySelector(".services__swiper");
const blogSwiper = document.querySelector(".blog__swiper");

let Swiper1;

Swiper1 = new Swiper(blogSwiper, {
// Optional parameters
// centerInsufficientSlides: true,
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
},
});