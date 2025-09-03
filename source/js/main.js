import {initVideoPlayer} from './modules/video.mjs';
import {showSelectSeasonTicketsPage} from './modules/season-tickets.mjs';
import {initFaqBlock} from './modules/faq.mjs';
import {initSliderJury} from './modules/slider-jury.mjs';
import {initSliderReviews} from './modules/slider-reviews.mjs';

const bootstrap = () => {
  initVideoPlayer();
  showSelectSeasonTicketsPage();
  initFaqBlock();
  initSliderJury();
  initSliderReviews();
};

bootstrap();
