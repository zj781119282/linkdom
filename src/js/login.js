import $ from 'jquery';
import { i18nConfig } from 'i18n/i18n.config';

import './common';
import './../css/login.scss';

$(() => {
  const currentLang = localStorage._lang === 'en-US' ? 'en-US' : 'zh-CN';
  $('#login_account').attr('placeholder', i18nConfig[currentLang]['login']['palceholder_account']);
  $('#login_password').attr('placeholder', i18nConfig[currentLang]['login']['placeholder_password']);

  $('.login-button').click(() => {
    const account = $('#login_account').val();
    const password = $('#login_password').val();
    if (!account || !password) {
      $('.error-block').show();
      return;
    }
    $('.error-block').hide();
    console.log('login...');
  });
});
