export default () => {
  const paginationButtons = document.querySelectorAll('.page-pagination__elem');

  paginationButtons.forEach((it) => {
    it.addEventListener('click', (evt) => {
      paginationButtons.forEach((pbtn) => {
        pbtn.classList.remove('page-pagination__elem--active');
      });

      evt.target.classList.add('page-pagination__elem--active');
    });
  });
};
