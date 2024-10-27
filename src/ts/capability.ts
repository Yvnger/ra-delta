import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

const shellSlider = new Swiper('.capability-item__slider', {
  modules: [Autoplay],
  direction: 'horizontal',
  grabCursor: true,
  loop: true,
  spaceBetween: 24,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidePrevClass: 'capability-item__slider-item--prev',
  slideClass: 'capability-item__slider-item',
  breakpoints: {
    320: {
      slidesPerView: 4,
      centeredSlides: true
    },
    576: {
      slidesPerView: 'auto',
    },
    767: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 'auto'
    }
  },
  on: {
    init: function loopBagFix(swiper) {
      /* 1. Add a copy of the slides */
      const slides = swiper.slides
      const wrapper = swiper.wrapperEl
      slides.forEach((slide) => { wrapper.append(slide.cloneNode(true)) })
    },
  }
});
