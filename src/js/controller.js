import * as model from './model.js';
import recipeView from './views/recipeView.js';

// import icons from '../img/icons.svg';
import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const renderSpinner = function (parentEl) {
  const markup = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};

const displayRecipe = async function () {
  //Load recipe

  try {
    //Render spinner

    const id = window.location.hash.slice(1);

    if (!id) return;
    renderSpinner(recipeContainer);

    //Load recipe
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (error) {
    console.log(error);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, displayRecipe)
);

// window.addEventListener('hashchange', displayRecipe);
// window.addEventListener('load', displayRecipe);
