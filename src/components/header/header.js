import $ from 'jquery';
import { switchLanguage } from 'i18n/i18n.config';

import './header.scss';

$(() => {
  function languageSwitchCallback() {
    const key = $(this).data('lang');
    switchLanguage(key);
  }

  $('nav .nav-button').click(function() {
    if ($('nav .nav-list').hasClass('xs-hide')) {
      $('nav .nav-list').removeClass('xs-hide');
      $(this).addClass('close');
    } else {
      $('nav .nav-list').addClass('xs-hide');
      $(this).removeClass('close');
    }
  });

  $('.language').hover(() => {
    $('.language ul').toggle();
  });

  $('.switch-language').click(languageSwitchCallback);
  $('.switch-language').on('touchend', languageSwitchCallback);
});
