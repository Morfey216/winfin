/* global Swiper */

export default () => {
  const mainBlock = document.querySelector('.multi-examples');
  if (!mainBlock) return;

  const contents = mainBlock.querySelectorAll('.multi-examples__set');
  const controls = mainBlock.querySelectorAll('.js-mec-control-button');

  const activeClass = 'active';
  const disabledClass = 'disabled';
  let activeControl;

  let galleryThumbs;
  let galleryTop;

  let container;
  let wrapper;
  let slides;

  let thumbs;
  let thumbsWrapper;
  let thumbsSlides;

  function sliderInit(activSet) {
    container = activSet.querySelector('.multi-examples__gallery-top');
    wrapper = container.querySelector('.multi-examples__wrapper');
    slides = container.querySelectorAll('.multi-examples__slide');

    thumbs = activSet.querySelector('.multi-examples__gallery-thumbs');
    thumbsWrapper = thumbs.querySelector('.multi-examples__thumbs-wrapper');
    thumbsSlides = thumbs.querySelectorAll('.multi-examples__thumbs-slide');

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

    galleryThumbs = new Swiper(thumbs, {
      spaceBetween: 8,
      slidesPerView: 4,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    galleryTop = new Swiper(container, {
      preloadImages: true,
      loadPrevNext: true,
      loadPrevNextAmount: 2,
      spaceBetween: 10,
      breakpoints: {
      },
      navigation: {
        nextEl: '.multi-examples__navigation-btn-next',
        prevEl: '.multi-examples__navigation-btn-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }

  function sliderDestroy() {
    galleryTop.destroy();
    galleryThumbs.destroy();

    container.classList.remove('swiper-container');
    wrapper.classList.remove('swiper-wrapper');
    slides.forEach((slide) => {
      slide.classList.remove('swiper-slide');
    });

    thumbs.classList.remove('swiper-container');
    thumbsWrapper.classList.remove('swiper-wrapper');
    thumbsSlides.forEach((slide) => {
      slide.classList.remove('swiper-slide');
    });
  }

  function contentReset() {
    contents.forEach((set) => {
      set.classList.add(disabledClass);

      if (set.dataset.mecControl === activeControl.dataset.mecControl) {
        set.classList.remove(disabledClass);
        sliderInit(set);
      }
    });
  }

  function sectionInit() {
    controls.forEach((btn) => {
      btn.classList.remove(activeClass);
    });

    activeControl = controls[0];
    activeControl.classList.add(activeClass);

    contentReset();

    controls[0].click();
  }

  controls.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      evt.preventDefault();

      activeControl.classList.remove(activeClass);
      activeControl = btn;
      activeControl.classList.add(activeClass);

      sliderDestroy();
      contentReset();
    });
  });

  sectionInit();
};
