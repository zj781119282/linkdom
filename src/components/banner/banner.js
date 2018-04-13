import $ from 'jquery';
import Swiper from 'swiper';

import './banner.scss';

$(() => {
  const slidesCount = $('.swiper-slide').length;
  if (slidesCount > 1) {
    const mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
});
