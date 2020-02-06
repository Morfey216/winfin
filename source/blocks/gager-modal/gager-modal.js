/* global Cleave */
import { disableBodyScroll, enableBodyScroll } from '../../js/libs/bodyScrollLock.es6';

export default () => {
  const gagerPopup = document.querySelector('.gager-modal');
  if (!gagerPopup) return;

  const gagerPopapOpenControls = document.querySelectorAll('.js-gager-open');
  if (!gagerPopapOpenControls) return;

  const form = document.querySelector('.js-gmf');
  const phoneInput = form.querySelector('.js-gmf-phone input');
  const nameInput = form.querySelector('.js-gmf-name input');

  const cleave = new Cleave(phoneInput, {
    numericOnly: true,
    prefix: '+7',
    noImmediatePrefix: true,
    delimiters: [' ( ', ' ) ', ' - ', ' - '],
    blocks: [2, 3, 3, 2, 2],
  });

  // +7 ( 337 ) 777 - 77 - 77   => length = '24';

  function inputKeyCheck(evt) {
    if (!evt.key) return;
    const en = new RegExp('^[a-zA-Z ]+$');
    const ru = new RegExp('^[а-яА-Я ]+$');
    if (!en.test(evt.key) && !ru.test(evt.key)) {
      evt.preventDefault();
    }
  }

  function setGagerPopapListeners() {
    nameInput.addEventListener('keypress', inputKeyCheck);
  }

  function removeGagerPopapListeners() {
    nameInput.removeEventListener('keypress', inputKeyCheck);
  }

  function clearInputFields() {
    phoneInput.value = '';
    nameInput.value = '';
  }

  const closePopup = () => {
    clearInputFields();
    removeGagerPopapListeners();
    enableBodyScroll(gagerPopup, { reserveScrollBarGap: true });
  };

  gagerPopapOpenControls.forEach((currentControl) => {
    currentControl.addEventListener('click', (evt) => {
      evt.preventDefault();
      window.openPopup('gager-modal', closePopup);
      setGagerPopapListeners();
      disableBodyScroll(gagerPopup, { reserveScrollBarGap: true });
    });
  });
};
