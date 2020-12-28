import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );
    console.log(numPages);

    // Page 1, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return this._renderNextButton(currentPage);
    }

    // Last page
    if (currentPage === numPages && numPages > 1) {
      return this._renderPrevButton(currentPage);
    }
    // Other page
    if (currentPage < numPages) {
      const buttons = this._renderDoubleButtons(currentPage);
      console.log(buttons);
    }
    // Page 1, and there are NO other pages
    return '';
  }

  _renderNextButton(currentPage) {
    return `
      <button class="btn--inline pagination__btn--next">
      <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>
    `;
  }

  _renderPrevButton(currentPage) {
    return `
    <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currentPage - 1}</span>
    </button>
`;
  }

  _renderDoubleButtons(currentPage) {
    const nextButton = this._renderNextButton(currentPage);
    const prevButton = this._renderPrevButton(currentPage);
    return [nextButton, prevButton];
  }
}

export default new PaginationView();
