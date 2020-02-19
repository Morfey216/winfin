/* global Swiper */

export default () => {
  const certificates = document.querySelector('.certificates');
  if (!certificates) return;

  const container = certificates.querySelector('.certificates__container');
  const wrapper = container.querySelector('.certificates__wrapper');
  const slides = container.querySelectorAll('.certificates__slide');

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
      spaceBetween: 10,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      breakpoints: {
        1023: {
          slidesPerView: 3,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
        579: {
          slidesPerView: 2,
        },
      },
      navigation: {
        nextEl: '.certificates__navigation-btn-next',
        prevEl: '.certificates__navigation-btn-prev',
      },
    });
  }

  initializeSlider();
};
