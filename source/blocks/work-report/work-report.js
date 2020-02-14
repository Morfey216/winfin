/* global Swiper */

export default () => {
  const container = document.querySelector('.work-report__slider-container');
  if (!container) return;

  const wrapper = container.querySelector('.work-report__slider-wrapper');
  const slides = container.querySelectorAll('.work-report__slide');

  function initializeSlider() {
    container.classList.add('swiper-container');
    wrapper.classList.add('swiper-wrapper');
    slides.forEach((slide) => {
      slide.classList.add('swiper-slide');
    });

    const workReportSwiper = new Swiper(container, {
      direction: 'horizontal',
      loop: true,
      preloadImages: true,
      loadPrevNext: true,
      loadPrevNextAmount: 1,
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 10,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      breakpoints: {},
      navigation: {
        nextEl: '.work-report__navigation-btn-next',
        prevEl: '.work-report__navigation-btn-prev',
      },
    });
  }

  initializeSlider();
};
