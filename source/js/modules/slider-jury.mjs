// import Swiper from '../vendor/swiper/swiper-bundle.min.js';
import {Swiper} from '../vendor.mjs';

const initialSliderOptions = {
  selectors: {
    container: '.js-jury-slider-container',
    wrapper: '.js-jury-slider-wrapper',
    unit: '.js-jury-slider-unit',
    buttonNavNext: '.js-jury-nav-button-next',
    buttonNavPrev: '.js-jury-nav-button-prev'
  }
};

const initSliderJury = () => {
  const container = initialSliderOptions.selectors.container;
  const wrapper = initialSliderOptions.selectors.wrapper.replace('.', '');
  const unit = initialSliderOptions.selectors.unit.replace('.', '');
  const buttonNavNext = initialSliderOptions.selectors.buttonNavNext;
  const buttonNavPrev = initialSliderOptions.selectors.buttonNavPrev;

  new Swiper(container, {
    wrapperClass: wrapper,
    slideClass: unit,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 500,
    centeredSlides: true,

    breakpoints: {
      321: {
        spaceBetween: 15,
        slidesPerView: 1.5,
      },
      480: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 40,
        slidesPerView: 2,
        centeredSlides: false,
      },
      900: {
        spaceBetween: 40,
        slidesPerView: 3,
        centeredSlides: false,
      },
      1200: {
        spaceBetween: 40,
        slidesPerView: 4,
        centeredSlides: false,
      },
    },

    navigation: {
      nextEl: buttonNavNext,
      prevEl: buttonNavPrev,
    },
  });
};

export {initSliderJury};
