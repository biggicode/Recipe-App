import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const currentPage = this._data.page;

    const numOfPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numOfPages);

    //First page and there are more pages to display
    if (currentPage === 1 && numOfPages > 1) {
      return 'page1 and others';
    }

    //Last page
    if (currentPage === numOfPages && numOfPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currentPage - 1}</span>
        </button>
      `;
    }

    //Other page
    if (currentPage < numOfPages) {
      return 'other page';
    }

    //First page and there are no more pages to display
    return 'only one page';
  }
}

export default new PaginationView();
