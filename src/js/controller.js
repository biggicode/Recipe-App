import * as model from './model.js';
import recipeView from './views/recipeView.js';
import SearchView from './views/SearchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import searchView from './views/SearchView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
//this if is for parcel
if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    //Render spinner

    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //Load recipe
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);

    resultsView.render(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
