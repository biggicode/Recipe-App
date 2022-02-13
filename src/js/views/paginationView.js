import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numOfPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numOfPages);

    //First page and there are more pages to display
    if (this._data.page === 1 && numOfPages > 1) {
      return 'page1 and others';
    }

    //Last page
    if (this._data.page === numOfPages && numOfPages > 1) {
      return 'last page';
    }

    //Other page
    if (this._data.page < numOfPages) {
      return 'other page';
    }

    //First page and there are no more pages to display
    return 'only one page';
  }
}

export default new PaginationView();
