"use strict";
import { fetchSpecificMeal } from "../handlers/search-specific-meal.handler.js";

export const specificMeal = (idMeal) => {
  const recipeButton = document.querySelector(`button[data-id="${idMeal}"]`);
  recipeButton.addEventListener("click", () => {
    fetchSpecificMeal(idMeal);
  });
};
