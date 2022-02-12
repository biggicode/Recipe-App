import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

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
    recipeView.renderError(`${error}🍛🍚🍗🥙🍠`);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
