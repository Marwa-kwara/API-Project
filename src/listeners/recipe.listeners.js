'use strict';


import { searchMeal } from '../handlers/recipe.handler.js';

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', searchMeal);
