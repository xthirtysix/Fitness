'use strict';
(function () {
  window.swiper('.trainers__container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 32,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40
      }
    },
    navigation: {
      nextEl: '.swiper-button-next--trainers',
      prevEl: '.swiper-button-prev--trainers',
    }
  });


  window.swiper('.feedback__container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 55,
    navigation: {
      nextEl: '.swiper-button-next--feedback',
      prevEl: '.swiper-button-prev--feedback',
    }
  });
})();
