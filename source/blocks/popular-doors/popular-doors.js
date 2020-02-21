export default () => {
  const container = document.querySelector('.popular-doors');
  if (!container) return;

  const contents = container.querySelectorAll('.popular-doors__models-set');
  const controls = container.querySelectorAll('.js-pdc-button');

  const activeClass = 'active';
  const disabledClass = 'disabled';

  let activeControl;

  function contentReset() {
    contents.forEach((set) => {
      set.classList.add(disabledClass);

      if (set.dataset.pdc === activeControl.dataset.pdc) {
        set.classList.remove(disabledClass);
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

      contentReset();
    });
  });

  sectionInit();
};
