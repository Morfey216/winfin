/* global Swiper */

export default () => {
  const container = document.querySelector('.brands__container');
  if (!container) return;

  const wrapper = container.querySelector('.brands__list');
  const slides = container.querySelectorAll('.brands__brand-item');

  function sliderInit() {
    container.classList.add('swiper-container');
    wrapper.classList.add('swiper-wrapper');
    slides.forEach((slide) => {
      slide.classList.add('swiper-slide');
    });

    const slider = new Swiper(container, {
      direction: 'horizontal',
      loop: true,
      preloadImages: true,
      loadPrevNext: true,
      loadPrevNextAmount: 2,
      slidesPerView: 'auto',
      spaceBetween: 30,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      breakpoints: {
      },
      navigation: {
        nextEl: '.brands__navigation-btn-next',
        prevEl: '.brands__navigation-btn-prev',
      },
    });
  }

  sliderInit();
};
