import $ from 'jquery';
import Cookies from 'js-cookie';
import { i18nConfig, switchLanguage } from 'i18n/i18n.config';

import './header.scss';

$(() => {
  function languageSwitchCallback() {
    const key = $(this).data('lang');
    switchLanguage(key);
  }

  const currentLang = localStorage._lang === 'en-US' ? 'en-US' : 'zh-CN';
  const currentPathname = location.pathname.split('.')[0].substr(1);
  const account = Cookies.get('account');
  const isLogged = Cookies.get('isLogged');

  if (currentPathname) {
    $('.nav-list').find('.' + currentPathname).addClass('active');
  } else {
    $('.nav-list .index').addClass('active');
  }

  if (account && isLogged) {
    $('.user-name').text(i18nConfig[currentLang]['header']['welcome'] + ' ' + account);
    $('.account').show();
    $('.login').hide();
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
