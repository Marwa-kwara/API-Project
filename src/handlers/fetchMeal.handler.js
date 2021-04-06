"use strict";

import { renderSearchResult } from "../views/searchResult.view.js";

export const fetchMeal = () => {
  const searchFieldElement = document.getElementById("searchField");
  if (searchFieldElement.value.trim().length === 0) {
    return;
  } else {
    searchMeal(searchFieldElement.value);
    searchFieldElement.value = "";
  }
};

export function searchMeal(query) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      const data = jsonData.meals;
      const searchResultsContainer = document.getElementById("searchResults");
      searchResultsContainer.innerHTML = "";
      const searchResults2 = document.getElementById(
        "specificResultsContainer"
      );
      searchResults2.innerHTML = "";
      data.forEach((element) => {
        let { idMeal, strMeal, strMealThumb } = element;
        renderSearchResult(idMeal, strMeal, strMealThumb);
      });
    });
}
