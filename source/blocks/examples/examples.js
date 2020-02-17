/* global Swiper */

export default () => {
  const examples = document.querySelector('.examples');
  if (!examples) return;

  const container = examples.querySelector('.examples__gallery-top');
  const wrapper = container.querySelector('.examples__wrapper');
  const slides = container.querySelectorAll('.examples__slide');

  const thumbs = examples.querySelector('.examples__gallery-thumbs');
  const thumbsWrapper = thumbs.querySelector('.thumbs__wrapper');
  const thumbsSlides = thumbs.querySelectorAll('.thumbs__slide');

  function sliderInit() {
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
      spaceBetween: 8,
      slidesPerView: 4,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    const galleryTop = new Swiper(container, {
      preloadImages: true,
      loadPrevNext: true,
      loadPrevNextAmount: 2,
      spaceBetween: 10,
      breakpoints: {
      },
      navigation: {
        nextEl: '.examples__navigation-btn-next',
        prevEl: '.examples__navigation-btn-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }

  sliderInit();
};
