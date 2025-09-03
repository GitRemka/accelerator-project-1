// import Swiper from '../vendor/swiper/swiper-bundle.min.js';
import {Swiper} from '../vendor.mjs';

const initialSliderOptions = {
  selectors: {
    container: '.js-reviews-slider-container',
    wrapper: '.js-reviews-slider-wrapper',
    unit: '.js-reviews-slider-unit',
    buttonNavNext: '.js-reviews-nav-button-next',
    buttonNavPrev: '.js-reviews-nav-button-prev'
  }
};

const initSliderReviews = () => {
  const container = initialSliderOptions.selectors.container;
  const wrapper = initialSliderOptions.selectors.wrapper.replace('.', '');
  const unit = initialSliderOptions.selectors.unit.replace('.', '');
  const buttonNavNext = initialSliderOptions.selectors.buttonNavNext;
  const buttonNavPrev = initialSliderOptions.selectors.buttonNavPrev;

  new Swiper(container, {
    wrapperClass: wrapper,
    slideClass: unit,
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 500,

    breakpoints: {
      768: {
        spaceBetween: 120,
      },
    },

    navigation: {
      nextEl: buttonNavNext,
      prevEl: buttonNavPrev,
    },
  });
};

export {initSliderReviews};
