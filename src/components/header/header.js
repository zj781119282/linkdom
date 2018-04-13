import $ from 'jquery';

import './header.scss';

$(() => {
  $('nav .nav-button').click(function() {
    if ($('nav .nav-list').hasClass('xs-hide')) {
      $('nav .nav-list').removeClass('xs-hide');
      $(this).addClass('close');
    } else {
      $('nav .nav-list').addClass('xs-hide');
      $(this).removeClass('close');
    }
  });
});
