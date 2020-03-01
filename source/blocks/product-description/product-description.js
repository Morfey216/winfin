/* global Parsley */
/* global Cleave */
/* global Swiper */

export default () => {
  function initFormValidation() {
    const form = document.querySelector('.js-pdcrf');
    if (!form) return;

    const phoneInput = form.querySelector('.js-pdcrf-phone input');
    const button = form.querySelector('.js-pdcrf-submit');
    let parsleyForm;
    const parsleyOptions = {
      uiEnabled: false,
      focus: 'none',
    };

    const cleave = new Cleave(phoneInput, {
      numericOnly: true,
      prefix: '+7',
      noImmediatePrefix: true,
      delimiters: [' ( ', ' ) ', ' - ', ' - '],
      blocks: [2, 3, 3, 2, 2],
    });

    // +7 ( 337 ) 777 - 77 - 77
    phoneInput.dataset.parsleyMinlength = '24';

    function submitButtonListener(evt) {
      evt.preventDefault();
      parsleyForm.validate();
    }

    function onSuccess() {
      // console.log('success');
    }

    button.addEventListener('click', submitButtonListener);
    parsleyForm = new Parsley.Factory(form, parsleyOptions);

    parsleyForm.on('form:success', onSuccess);

    parsleyForm.on('field:error', (evt) => {
      evt.element.closest('.js-pdcrf-validate').classList.add('error');
    });

    parsleyForm.on('field:success', (evt) => {
      evt.element.closest('.js-pdcrf-validate').classList.remove('error');
    });
  }

  function initSlider() {
    const productDescriptionVisual = document.querySelector('.product-description__visual');
    if (!productDescriptionVisual) return;

    const container = productDescriptionVisual.querySelector('.product-description__gallery-container');
    const wrapper = container.querySelector('.product-description__gallery-wrapper');
    const slides = container.querySelectorAll('.product-description__image-wrapper');

    const thumbs = productDescriptionVisual.querySelector('.product-description__slider-gallery-thumbs');
    const thumbsWrapper = thumbs.querySelector('.product-description__thumbs-wrapper');
    const thumbsSlides = thumbs.querySelectorAll('.product-description__thumbs-slide');

    function initializeSlider() {
      container.classList.add('swiper-container');
      thumbs.classList.add('swiper-container');

      wrapper.classList.add('swiper-wrapper');
      thumbsWrapper.classList.add('swiper-wrapper');

      slides.forEach((slide) => {
        slide.classList.add('swiper-slide');
      });

      thumbsSlides.forEach((slide) => {
        slide.classList.add('swiper-slide');
      });

      const galleryThumbs = new Swiper(thumbs, {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 2,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '.product-description__navigation-btn-next',
          prevEl: '.product-description__navigation-btn-prev',
        },
      });

      const slider = new Swiper(container, {
        loop: true,
        preloadImages: true,
        loadPrevNext: true,
        loadPrevNextAmount: 1,
        spaceBetween: 10,
        breakpoints: {
        },
        thumbs: {
          swiper: galleryThumbs,
        },
      });
    }

    initializeSlider();
  }

  initFormValidation();
  initSlider();
};
