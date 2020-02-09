/* global Swiper */

export default () => {
  const profileSystem = document.querySelector('.profile-systems');
  if (!profileSystem) return;

  const wcSystemControl = profileSystem.querySelector('.js-pswc-button');
  const wcSystemContent = profileSystem.querySelector('.js-pswc-content');

  const wacSystemControl = profileSystem.querySelector('.js-pswac-button');
  const wacSystemContent = profileSystem.querySelector('.js-pswac-content');

  const activeClass = 'active';
  const disabledClass = 'disabled';
  let slider;

  const wcSwiperContainer = wcSystemContent;
  const wcSwiperWrapper = profileSystem.querySelector('.profile-systems__wood-windows');
  const wcSwiperSlides = profileSystem.querySelectorAll('.profile-systems__wood-windows .products-set__product');
  const wcSliderNav = profileSystem.querySelector('.js-pswc-nav');

  const wacSwiperContainer = wacSystemContent;
  const wacSwiperWrapper = profileSystem.querySelector('.profile-systems__wood-aluminum-windows');
  const wacSwiperSlides = profileSystem.querySelectorAll('.profile-systems__wood-aluminum-windows .products-set__product');
  const wacSliderNav = profileSystem.querySelector('.js-pswac-nav');

  function sliderInit(container, wrapper, slides, nav) {
    container.classList.add('swiper-container');
    wrapper.classList.add('swiper-wrapper');
    slides.forEach((slide) => {
      slide.classList.add('swiper-slide');
    });

    let navNextPrefix;
    let navPrevPrefix;

    if (nav) {
      navNextPrefix = nav.classList.contains('js-pswc-nav') ? '.js-pswc-nav .slider-navigation__btn--next' : '.js-pswac-nav .slider-navigation__btn--next';
      navPrevPrefix = nav.classList.contains('js-pswc-nav') ? '.js-pswc-nav .slider-navigation__btn--prev' : '.js-pswac-nav .slider-navigation__btn--prev';
    }

    slider = new Swiper(container, {
      direction: 'horizontal',
      loop: true,
      preloadImages: true,
      loadPrevNext: true,
      loadPrevNextAmount: 3,
      watchSlidesVisibility: true,
      slidesPerView: 3,
      spaceBetween: 0,
      breakpoints: {
        1050: {
          slidesPerView: 2,
          loadPrevNextAmount: 2,
          spaceBetween: 0,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
        767: {
          slidesOffsetBefore: 18,
          slidesOffsetAfter: 18,
          spaceBetween: 0,
          slidesPerView: 'auto',
        },
      },
      navigation: {
        nextEl: navNextPrefix,
        prevEl: navPrevPrefix,
      },
      on: {
        beforeResize() {
          if (window.innerWidth <= 767) {
            slider.slides.css('width', '');
          }
        },
      },
    });
  }

  function sliderDestroy(container, wrapper, slides) {
    slider.destroy();
    container.classList.remove('swiper-container');
    wrapper.classList.remove('swiper-wrapper');
    slides.forEach((slide) => {
      slide.classList.remove('swiper-slide');
    });
  }

  wcSystemControl.addEventListener('click', () => {
    wacSystemControl.classList.remove(activeClass);
    wcSystemControl.classList.add(activeClass);

    wacSystemContent.classList.add(disabledClass);
    wcSystemContent.classList.remove(disabledClass);

    if (slider) {
      sliderDestroy(wacSwiperContainer, wacSwiperWrapper, wacSwiperSlides);
      wacSliderNav.classList.add(disabledClass);
    }

    sliderInit(wcSwiperContainer, wcSwiperWrapper, wcSwiperSlides, wcSliderNav);
    wcSliderNav.classList.remove(disabledClass);
  });

  wacSystemControl.addEventListener('click', () => {
    wacSystemControl.classList.add(activeClass);
    wcSystemControl.classList.remove(activeClass);

    wacSystemContent.classList.remove(disabledClass);
    wcSystemContent.classList.add(disabledClass);

    sliderDestroy(wcSwiperContainer, wcSwiperWrapper, wcSwiperSlides);
    wcSliderNav.classList.add(disabledClass);
    sliderInit(wacSwiperContainer, wacSwiperWrapper, wacSwiperSlides, wacSliderNav);
    wacSliderNav.classList.remove(disabledClass);
  });

  wcSystemControl.click();
};
