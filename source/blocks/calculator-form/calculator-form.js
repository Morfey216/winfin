export default () => {
  const form = document.querySelector('.js-cf');
  if (!form) return;

  const sizeInput = form.querySelectorAll('.js-cf-size input');

  function inputKeyCheck(evt) {
    if (!evt.key) return;
    const num = new RegExp('^[0-9]+$');
    if (!num.test(evt.key)) {
      evt.preventDefault();
    }
  }

  sizeInput.forEach((current) => {
    current.addEventListener('keypress', inputKeyCheck);
  });
};
