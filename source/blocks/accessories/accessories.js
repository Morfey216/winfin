/* global Swiper */

export default () => {
  const accessories = document.querySelector('.accessories');
  if (!accessories) return;

  const container = accessories.querySelector('.accessories__container');
  const wrapper = container.querySelector('.accessories__wrapper');
  const slides = container.querySelectorAll('.accessories__slide');

  function initializeSlider() {
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
      loadPrevNextAmount: 1,
      slidesPerView: 5,
      spaceBetween: 20,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      breakpoints: {
        1199: {
          slidesPerView: 4,
        },
        1023: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        579: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: '.accessories__navigation-btn-next',
        prevEl: '.accessories__navigation-btn-prev',
      },
    });
  }

  initializeSlider();
};
