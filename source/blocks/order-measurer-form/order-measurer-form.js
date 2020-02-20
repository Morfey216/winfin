/* global Parsley */
/* global Cleave */

export default () => {
  const form = document.querySelector('.js-omf');
  if (!form) return;

  const phoneInput = document.querySelector('.js-omf-phone input');
  const button = document.querySelector('.js-omf-submit');
  let parsleyForm;
  const parsleyOptions = {
    uiEnabled: false,
    focus: 'none',
  };

  const cleave = new Cleave(phoneInput, {
    numericOnly: true,
    prefix: '+7',
    noImmediatePrefix: true,
    delimiters: [' ( ', ' ) ', ' - ', ' - '],
    blocks: [2, 3, 3, 2, 2],
  });

  // +7 ( 337 ) 777 - 77 - 77
  phoneInput.dataset.parsleyMinlength = '24';

  function submitButtonListener(evt) {
    evt.preventDefault();
    parsleyForm.validate();
  }

  function onSuccess() {
    // console.log('success');
  }

  button.addEventListener('click', submitButtonListener);
  parsleyForm = new Parsley.Factory(form, parsleyOptions);

  parsleyForm.on('form:success', onSuccess);

  parsleyForm.on('field:error', (evt) => {
    evt.element.closest('.js-omf-validate').classList.add('error');
  });

  parsleyForm.on('field:success', (evt) => {
    evt.element.closest('.js-omf-validate').classList.remove('error');
  });
};
