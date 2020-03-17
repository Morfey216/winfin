export default () => {
  const faq = document.querySelector('.faq__questions');
  if (!faq) return;

  const controls = faq.querySelectorAll('.js-faq-control');

  const activeClass = 'faq__question--open';

  controls.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle(activeClass);
    });
  });
};
