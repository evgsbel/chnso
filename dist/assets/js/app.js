"use strict";

// //masked inputs
// $(() => {
//   Inputmask({"mask": "9 999 999  99  99"}).mask('.phone-mask');
// });

// tabs
document.addEventListener('DOMContentLoaded', function () {
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {
      tabsBtn.forEach(function (tabsBtn) {
        tabsBtn.classList.remove('is-active');
      });
      var path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('is-active');
      el.classList.add('is-active');
    });
  });
});

// mobile menu
$(function () {
  var btnMenu = document.querySelectorAll('.js-open-mobile-menu');
  var menu = document.querySelector('.js-mobile-menu');
  var body = document.querySelector('body');
  btnMenu.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.add('is-open');
      body.classList.add('opened-menu');
    });
  });
  var closeBtn = document.querySelector('.js-close-mobile-menu');
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.remove('is-open');
    body.classList.remove('opened-menu');
  });
});

// sliders
$(function () {
  //hero-slider
  var swiperHero = new Swiper(".js-hero-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    speed: 900
  });
  //manufactures-slider
  var swiperManufacturesLogo = new Swiper(".js-manufactures-logo-slider", {
    spaceBetween: 100,
    slidesPerView: 6,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 100
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 100
      },
      576: {
        slidesPerView: 4,
        spaceBetween: 100
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 100
      }
    }
  });
  var swiperManufactures = new Swiper(".js-manufactures-slider", {
    navigation: {
      nextEl: ".swiper-button-next-man",
      prevEl: ".swiper-button-prev-man"
    },
    thumbs: {
      swiper: swiperManufacturesLogo
    },
    speed: 900
  });

  //popular product
  var swiperPopular = new Swiper(".js--popular-product", {
    slidesPerView: 4,
    spaceBetween: 13,
    navigation: {
      nextEl: ".swiper-button-next-pop",
      prevEl: ".swiper-button-prev-pop"
    },
    speed: 900,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 13,
        grabCursor: true
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 15,
        grabCursor: true
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 13
      }
    }
  });
});

//select2
$(function () {
  $('.js-select-lang').select2({
    minimumResultsForSearch: Infinity,
    width: '64px'
  });
  $('.js-select-catalog').select2({
    minimumResultsForSearch: Infinity,
    width: '64px'
  });
  $('.js-select-country').select2({
    minimumResultsForSearch: Infinity,
    width: '100%',
    placeholder: "Select a country"
  });
});

// add to cart text
$('.js-add-to-cart').click(function () {
  $(this).find('span').text('In cart');
});

//collapce bootsrap
$(function () {
  $(".collapse").on('show.bs.collapse', function (e) {
    $(this).parent().addClass('is-open');
  });
  $(".collapse").on('hide.bs.collapse', function (e) {
    $(this).parent().removeClass('is-open');
  });
});

//input number
$(function () {
  $('.input-count .input-count_minus').click(function () {
    var $input = $(this).parent().find('.js-input-number');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
  });
  $('.input-count .input-count_plus').click(function () {
    var $input = $(this).parent().find('.js-input-number');
    var count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
  });
  $('.input-count .js-input-number').bind("change keyup input click", function () {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == "") {
      this.value = 1;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
      this.value = parseInt($(this).data('max-count'));
    }
  });
});

//input file
$(function () {
  $('.input-file input[type=file]').on('change', function () {
    var file = this.files[0];
    $(this).closest('.input-file').find('.input-file-text').html(file.name);
  });
});

//news hover
$(function () {
  $('.main-news__item').hover(function () {
    $('.main-news__item').removeClass('is-active');
    $(this).addClass('is-active');
  });
});