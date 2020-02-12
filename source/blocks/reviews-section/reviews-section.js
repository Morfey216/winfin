/* global Swiper */

export default () => {
  const container = document.querySelector('.reviews-section__container');
  if (!container) return;

  const wrapper = container.querySelector('.reviews-section__wrapper');
  const slides = container.querySelectorAll('.review-card');

  function initializeReviews() {
    container.classList.add('swiper-container');
    wrapper.classList.add('swiper-wrapper');
    slides.forEach((slide) => {
      slide.classList.add('swiper-slide');
    });

    const swiperReviews = new Swiper(container, {
      direction: 'horizontal',
      loop: true,
      preloadImages: true,
      loadPrevNext: true,
      loadPrevNextAmount: 2,
      slidesPerView: 2,
      spaceBetween: 45,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      breakpoints: {
        1199: {
          centeredSlides: true,
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: '.reviews-section__navigation-btn-next',
        prevEl: '.reviews-section__navigation-btn-prev',
      },
    });
  }

  initializeReviews();
};
