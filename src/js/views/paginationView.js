import View from './View.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );

    // Page 1, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return this._generateNextButton(currentPage);
    }

    // Last page
    if (currentPage === numPages && numPages > 1) {
      return this._generatePrevButton(currentPage);
    }
    // Other page
    if (currentPage < numPages) {
      return this._generateNextPrevBtn(currentPage);
    }
    // Page 1, and there are NO other pages
    return '';
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      console.log(btn, goToPage);
      handler(goToPage);
    });
  }

  _generateNextButton(currentPage) {
    return `
    <button data-goto="${
      currentPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>
    `;
  }

  _generatePrevButton(currentPage) {
    return `
    <button data-goto="${
      currentPage - 1
    }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currentPage - 1}</span>
    </button>
    `;
  }

  _generateNextPrevBtn(currentPage) {
    const nextButton = this._generateNextButton(currentPage);
    const prevButton = this._generatePrevButton(currentPage);
    return `${nextButton} ${prevButton}`;
  }
}

export default new PaginationView();
