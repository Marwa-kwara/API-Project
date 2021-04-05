"use strict";

import { renderSearchResult } from "../views/searchResult.view.js";

export const fetchMeal = async () => {
  const searchFieldElement = document.getElementById("searchField");
  if (searchFieldElement.value.trim().length === 0) {
    return;
  } else {
    searchFieldElement.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        searchButton.click();
      }
    });
    searchMeal(searchFieldElement.value);
    searchFieldElement.value = "";
  }
};

export async function searchMeal(query) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  const response = await fetch(url);
  const jsonData = await response.json();
  const data = jsonData.meals;
  const searchResultsContainer = document.getElementById("searchResults");
  searchResultsContainer.innerHTML = "";
  const searchResults2 = document.getElementById("specificResultsContainer");
  searchResults2.innerHTML = "";
  data.forEach((element) => {
    let { idMeal, strMeal, strMealThumb } = element;
    renderSearchResult(idMeal, strMeal, strMealThumb);
  });
}
