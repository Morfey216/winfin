/* global Cleave */
import { disableBodyScroll, enableBodyScroll } from '../../js/libs/bodyScrollLock.es6';

export default () => {
  const discountPopup = document.querySelector('.discount-modal');
  if (!discountPopup) return;

  const discountPopapOpenControls = document.querySelectorAll('.js-discount-open');
  if (!discountPopapOpenControls) return;

  const discountPopupCloseLabel = discountPopup.querySelector('.js-modal-close span');
  discountPopupCloseLabel.classList.remove('visually-hidden');
  discountPopupCloseLabel.classList.add('discount-modal__close-label');

  const form = document.querySelector('.js-dmf');
  const phoneInput = form.querySelector('.js-dmf-phone input');
  const nameInput = form.querySelector('.js-dmf-name input');

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

  function setPopapListeners() {
    nameInput.addEventListener('keypress', inputKeyCheck);
  }

  function removePopapListeners() {
    nameInput.removeEventListener('keypress', inputKeyCheck);
  }

  function clearInputFields() {
    phoneInput.value = '';
    nameInput.value = '';
  }

  const closePopup = () => {
    clearInputFields();
    removePopapListeners();
    enableBodyScroll(discountPopup, { reserveScrollBarGap: true });
  };

  discountPopapOpenControls.forEach((currentControl) => {
    currentControl.addEventListener('click', (evt) => {
      evt.preventDefault();
      window.openPopup('discount-modal', closePopup);
      setPopapListeners();
      disableBodyScroll(discountPopup, { reserveScrollBarGap: true });
    });
  });
};
