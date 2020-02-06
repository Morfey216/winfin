/* global Cleave */
import { disableBodyScroll, enableBodyScroll } from '../../js/libs/bodyScrollLock.es6';

export default () => {
  const callRequestPopup = document.querySelector('.call-request-modal');
  if (!callRequestPopup) return;

  const callRequestPopupOpenControls = document.querySelectorAll('.js-call-request-open');
  if (!callRequestPopupOpenControls) return;

  const form = document.querySelector('.js-crmf');
  const phoneInput = form.querySelector('.js-crmf-phone input');

  const cleave = new Cleave(phoneInput, {
    numericOnly: true,
    prefix: '+7',
    noImmediatePrefix: true,
    delimiters: [' ( ', ' ) ', ' - ', ' - '],
    blocks: [2, 3, 3, 2, 2],
  });

  // +7 ( 337 ) 777 - 77 - 77   => length = '24';

  function clearInputFields() {
    phoneInput.value = '';
  }

  const closePopup = () => {
    clearInputFields();
    enableBodyScroll(callRequestPopup, { reserveScrollBarGap: true });
  };

  callRequestPopupOpenControls.forEach((currentControl) => {
    currentControl.addEventListener('click', (evt) => {
      evt.preventDefault();
      window.openPopup('call-request-modal', closePopup);
      disableBodyScroll(callRequestPopup, { reserveScrollBarGap: true });
    });
  });
};
