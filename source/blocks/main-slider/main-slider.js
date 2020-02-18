/* global Swiper */

export default () => {
  const container = document.querySelector('.main-slider__container');
  if (!container) return;

  const wrapper = container.querySelector('.main-slider__wrapper');
  const slides = container.querySelectorAll('.main-slider__slide');

  function initializeSlider() {
    container.classList.add('swiper-container');
    wrapper.classList.add('swiper-wrapper');
    slides.forEach((slide) => {
      slide.classList.add('swiper-slide');
    });

    const slider = new Swiper(container, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      breakpoints: {},
      pagination: {
        el: '.main-slider__pagination',
        type: 'bullets',
        bulletElement: 'span',
        bulletClass: 'pagination-bullet',
        bulletActiveClass: 'pagination-bullet--active',
        clickable: true,
      },
    });
  }

  initializeSlider();
};
