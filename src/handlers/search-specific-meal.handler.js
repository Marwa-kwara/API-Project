"use strict";
import { renderSpecificMeal } from "../views/search-specific-meal.view.js";

export function fetchSpecificMeal(idMeal) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  const searchResults2 = document.getElementById("specificResultsContainer");
  searchResults2.innerHTML = "";
  const searchResultsContainer = document.getElementById("searchResults");
  searchResultsContainer.innerHTML = "";
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      const data = jsonData.meals;
      data.forEach((element) => {
        const {
          idMeal,
          strMeal,
          strMealThumb,
          strInstructions,
          strYoutube,
        } = element;
        renderSpecificMeal(strMeal, strMealThumb, strInstructions, strYoutube);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
