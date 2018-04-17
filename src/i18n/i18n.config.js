import $ from 'jquery';
import header_en from './en-US/header';
import header_cn from './zh-CN/header';
import product_en from './en-US/product';
import product_cn from './zh-CN/product';

const i18nConfig = {
  'en-US': {
    header: header_en,
    product: product_en,
  },
  'zh-CN': {
    header: header_cn,
    product: product_cn,
  },
};

function switchLanguage(key) {
  localStorage.setItem('_lang', key);
  location.reload();
};

function showTranslations() {
  const currentLang = localStorage._lang === 'en-US' ? 'en-US' : 'zh-CN';
  const i18n = i18nConfig[currentLang];

  $('.language-list').text(currentLang === 'en-US' ? '简体中文' : 'English');

  $('.i18n').each((i, item) => {
    let str = '';
    const data = $(item).data('i18n').split('.');
    $(item).text(i18n[data[0]][data[1]]);
  });
}

export { showTranslations, switchLanguage };
