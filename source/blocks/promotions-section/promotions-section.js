/* global Swiper */

export default () => {
  const promoSection = document.querySelector('.promotions-section');
  if (!promoSection) return;

  const container = promoSection.querySelector('.promotions-section__slider-container');

  const wrapper = container.querySelector('.promotions-section__promo-list');
  const slides = container.querySelectorAll('.promotions-section__promo-item');

  const contents = promoSection.querySelectorAll('.promotions-section__content');
  const controls = container.querySelectorAll('.promotions-section__promo-item');

  const disabledClass = 'disabled';

  function contentReset(activeControl) {
    contents.forEach((set) => {
      set.classList.add(disabledClass);

      if (set.dataset.promoControl === activeControl.dataset.promoControl) {
        set.classList.remove(disabledClass);
      }
    });
  }

  function sectionInit() {
    contentReset(controls[0]);
  }

  controls.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      evt.preventDefault();
      contentReset(btn);
    });
  });

  function sliderInit() {
    container.classList.add('swiper-container');
    wrapper.classList.add('swiper-wrapper');
    slides.forEach((slide) => {
      slide.classList.add('swiper-slide');
    });

    const slider = new Swiper(container, {
      direction: 'horizontal',
      // width: 976,
      loop: false,
      preloadImages: true,
      loadPrevNext: true,
      loadPrevNextAmount: 2,
      slidesPerView: 3,
      spaceBetween: 55,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
      breakpoints: {
        1199: {
          spaceBetween: 40,
        },
        1023: {
          spaceBetween: 30,
          slidesPerView: 2,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
        579: {
          spaceBetween: 30,
          slidesPerView: 1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
      },
      navigation: {
        nextEl: '.promotions-section__navigation-btn-next',
        prevEl: '.promotions-section__navigation-btn-prev',
      },
    });
  }

  sliderInit();
  sectionInit();
};
