import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    //First page and there are more pages to display
    //First page and there are no more pages to display
    //Last page
    //Other page
  }
}

export default new PaginationView();
