'use strict';

import { fetchSpecificMeal } from '../handlers/search-specific-meal.handler.js';
//import { renderSearchResult } from '../views/searchResult.view.js';


document.getElementById('recipeButton').addEventListener('click', () => {console.log('done')})
document.getElementById('recipeImg').addEventListener('click', fetchSpecificMeal ())
