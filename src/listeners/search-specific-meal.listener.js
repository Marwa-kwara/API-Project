'use strict';
import {fetchSpecificMeal} from '../handlers/search-specific-meal.handler.js'

export const specificMeal = () =>{
  const recipeButton = document.querySelector('#recipeButton');
  recipeButton.addEventListener('click', () =>{
    fetchSpecificMeal()
}
  )}
